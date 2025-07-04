import { Package, ShoppingCart, DollarSign, Calendar, LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  color: string;
}

interface StatsGridProps {
  stats: {
    totalProducts: number;
    totalOrders: number;
    totalBookings: number;
    monthlyRevenue: number;
    pendingBookings: number;
  };
  products: any[];
  orders: any[];
}

const StatsGrid = ({ stats, products, orders }: StatsGridProps) => {
  const dashboardStats: Stat[] = [
    { 
      icon: Package, 
      label: 'Total Products', 
      value: stats.totalProducts.toString(), 
      change: `${products.filter(p => p.is_active).length} active`, 
      color: 'text-blue-600' 
    },
    { 
      icon: ShoppingCart, 
      label: 'Total Orders', 
      value: stats.totalOrders.toString(), 
      change: `${orders.filter(o => o.status === 'pending').length} pending`, 
      color: 'text-green-600' 
    },
    { 
      icon: DollarSign, 
      label: 'Monthly Revenue', 
      value: `$${stats.monthlyRevenue.toFixed(2)}`, 
      change: `${stats.totalBookings} bookings`, 
      color: 'text-orange-600' 
    },
    { 
      icon: Calendar, 
      label: 'Pending Bookings', 
      value: stats.pendingBookings.toString(), 
      change: `${stats.totalBookings} total`, 
      color: 'text-purple-600' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.map((stat, index) => (
        <div key={index} className="bg-card p-6 rounded-xl shadow-medium border hover:shadow-large transition-smooth hover:-translate-y-1 group">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg bg-gradient-primary shadow-glow ${stat.color} group-hover:animate-float`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground group-hover:gradient-text transition-smooth">{stat.value}</p>
              <p className="text-xs text-success">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;