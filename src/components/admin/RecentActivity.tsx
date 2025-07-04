interface RecentActivityProps {
  recentOrders: any[];
  bookings: any[];
}

const RecentActivity = ({ recentOrders, bookings }: RecentActivityProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{order.profiles?.full_name || 'Unknown'}</p>
                <p className="text-sm text-gray-600">{order.order_type}</p>
                <p className="text-xs text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">${Number(order.total_amount).toFixed(2)}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <div className="space-y-4">
          {bookings.slice(0, 5).map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{booking.profiles?.full_name || 'Unknown'}</p>
                <p className="text-sm text-gray-600">{booking.service_name}</p>
                <p className="text-xs text-gray-500">{booking.booking_date}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
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
      </div>
    </div>
  );
};

export default RecentActivity;