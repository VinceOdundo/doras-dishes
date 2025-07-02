import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Download, Calendar, Package, User, LogOut, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchUserData();
  }, [user, navigate]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fetch orders with items
      const { data: ordersData } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            products (*)
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      // Fetch bookings
      const { data: bookingsData } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      // Fetch downloads
      const { data: downloadsData } = await supabase
        .from('user_downloads')
        .select(`
          *,
          products (*)
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      setOrders(ordersData || []);
      setBookings(bookingsData || []);
      setDownloads(downloadsData || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast({
        title: "Error",
        description: "Failed to load your data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (downloadId: string, productId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('download-product', {
        body: { download_id: downloadId, product_id: productId }
      });

      if (error) throw error;

      if (data?.download_url) {
        window.open(data.download_url, '_blank');
        fetchUserData(); // Refresh to update download count
      }
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "Unable to download the file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm border mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'orders', label: 'Orders', icon: Package },
                  { id: 'bookings', label: 'Bookings', icon: Calendar },
                  { id: 'downloads', label: 'Downloads', icon: Download },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-orange-600 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Your Orders</h2>
                  {orders.length === 0 ? (
                    <p className="text-gray-500">No orders yet. Start shopping to see your orders here!</p>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order: any) => (
                        <div key={order.id} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold">Order #{order.id.slice(0, 8)}</p>
                              <p className="text-sm text-gray-600">
                                {new Date(order.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">${order.total_amount}</p>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                order.status === 'paid' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          {order.order_items && (
                            <div className="space-y-2">
                              {order.order_items.map((item: any) => (
                                <div key={item.id} className="flex items-center gap-3 text-sm">
                                  <img 
                                    src={item.products?.image_url} 
                                    alt={item.products?.title}
                                    className="w-12 h-12 object-cover rounded"
                                  />
                                  <div className="flex-1">
                                    <p className="font-medium">{item.products?.title}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                  </div>
                                  <p className="font-semibold">${item.price}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Your Bookings</h2>
                  {bookings.length === 0 ? (
                    <p className="text-gray-500">No bookings yet. Book a service to see your bookings here!</p>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking: any) => (
                        <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold">{booking.service_name}</p>
                              <p className="text-sm text-gray-600">{booking.service_type}</p>
                              <p className="text-sm text-gray-600">
                                {booking.booking_date} at {booking.booking_time}
                              </p>
                              {booking.location && (
                                <p className="text-sm text-gray-600">Location: {booking.location}</p>
                              )}
                            </div>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Downloads Tab */}
              {activeTab === 'downloads' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Your Downloads</h2>
                  {downloads.length === 0 ? (
                    <p className="text-gray-500">No downloads available. Purchase photos to access high-resolution downloads!</p>
                  ) : (
                    <div className="space-y-4">
                      {downloads.map((download: any) => (
                        <div key={download.id} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center gap-4">
                            <img 
                              src={download.products?.image_url} 
                              alt={download.products?.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="font-semibold">{download.products?.title}</p>
                              <p className="text-sm text-gray-600">
                                Downloads: {download.download_count}/{download.max_downloads}
                              </p>
                              {download.expires_at && (
                                <p className="text-sm text-gray-600">
                                  Expires: {new Date(download.expires_at).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleDownload(download.id, download.product_id)}
                                disabled={download.download_count >= download.max_downloads}
                                className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Download className="w-4 h-4" />
                                Download
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                <Eye className="w-4 h-4" />
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;