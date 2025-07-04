import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BookingsTableProps {
  bookings: any[];
  onUpdateBookingStatus: (bookingId: string, status: string) => void;
}

const BookingsTable = ({ bookings, onUpdateBookingStatus }: BookingsTableProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Manage Bookings</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.profiles?.full_name || 'Unknown'}</div>
                    <div className="text-sm text-gray-500">{booking.profiles?.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.service_name}</div>
                    <div className="text-sm text-gray-500">{booking.service_type}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.booking_date}</div>
                    <div className="text-sm text-gray-500">{booking.booking_time}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>{booking.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {booking.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => onUpdateBookingStatus(booking.id, 'confirmed')}
                        >
                          Confirm
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => onUpdateBookingStatus(booking.id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsTable;