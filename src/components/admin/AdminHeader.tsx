import { Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  userEmail?: string;
  onAddProduct: () => void;
  onRefreshData: () => void;
}

const AdminHeader = ({ userEmail, onAddProduct, onRefreshData }: AdminHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {userEmail}! Here's your business overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-orange-600 hover:bg-orange-700" onClick={onAddProduct}>
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </Button>
            <Button variant="outline" onClick={onRefreshData}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;