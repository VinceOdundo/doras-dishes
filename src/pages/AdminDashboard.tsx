
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminNavigation from "@/components/admin/AdminNavigation";
import StatsGrid from "@/components/admin/StatsGrid";
import RecentActivity from "@/components/admin/RecentActivity";
import ProductsTable from "@/components/admin/ProductsTable";
import OrdersTable from "@/components/admin/OrdersTable";
import BookingsTable from "@/components/admin/BookingsTable";

const AdminDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalBookings: 0,
    monthlyRevenue: 0,
    pendingBookings: 0,
    recentOrders: []
  });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch products
      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      // Fetch orders
      const { data: ordersData } = await supabase
        .from('orders')
        .select(`
          *,
          profiles!orders_user_id_fkey(full_name, email)
        `)
        .order('created_at', { ascending: false })
        .limit(10);
      
      // Fetch bookings
      const { data: bookingsData } = await supabase
        .from('bookings')
        .select(`
          *,
          profiles!bookings_user_id_fkey(full_name, email)
        `)
        .order('created_at', { ascending: false });

      // Calculate stats
      const monthlyRevenue = ordersData?.reduce((sum, order) => 
        sum + (order.status === 'completed' ? Number(order.total_amount) : 0), 0
      ) || 0;

      setProducts(productsData || []);
      setOrders(ordersData || []);
      setBookings(bookingsData || []);
      
      setStats({
        totalProducts: productsData?.length || 0,
        totalOrders: ordersData?.length || 0,
        totalBookings: bookingsData?.length || 0,
        monthlyRevenue,
        pendingBookings: bookingsData?.filter(b => b.status === 'pending').length || 0,
        recentOrders: ordersData?.slice(0, 5) || []
      });
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', bookingId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Booking status updated successfully.",
      });
      
      fetchDashboardData();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update booking status.",
        variant: "destructive",
      });
    }
  };

  const handleAddProduct = () => {
    setActiveTab('products');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        userEmail={user?.email} 
        onAddProduct={handleAddProduct}
        onRefreshData={fetchDashboardData}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <AdminNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <StatsGrid stats={stats} products={products} orders={orders} />
            <RecentActivity recentOrders={stats.recentOrders} bookings={bookings} />
          </div>
        )}

        {activeTab === 'products' && (
          <ProductsTable products={products} onAddProduct={handleAddProduct} />
        )}

        {activeTab === 'orders' && (
          <OrdersTable orders={orders} />
        )}

        {activeTab === 'bookings' && (
          <BookingsTable bookings={bookings} onUpdateBookingStatus={updateBookingStatus} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
