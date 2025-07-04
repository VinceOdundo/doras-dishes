import { Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  userEmail?: string;
  onAddProduct: () => void;
  onRefreshData: () => void;
}

const AdminHeader = ({ userEmail, onAddProduct, onRefreshData }: AdminHeaderProps) => {
  return (
    <header className="bg-gradient-subtle shadow-large border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {userEmail}! Here's your business overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg" onClick={onAddProduct} className="animate-glow-pulse">
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </Button>
            <Button variant="glass" size="lg" onClick={onRefreshData}>
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