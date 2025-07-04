import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductsTableProps {
  products: any[];
  onAddProduct: () => void;
}

const ProductsTable = ({ products, onAddProduct }: ProductsTableProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b flex items-center justify-between">
        <h3 className="text-lg font-semibold">Manage Products</h3>
        <Button className="bg-orange-600 hover:bg-orange-700" onClick={onAddProduct}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={product.image_url} 
                      alt={product.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-medium">{product.title}</div>
                      <div className="text-sm text-gray-500">{product.description?.substring(0, 50)}...</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.product_type}</TableCell>
                <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    product.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.is_active ? 'Active' : 'Inactive'}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    product.is_featured 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {product.is_featured ? 'Featured' : 'Regular'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
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

export default ProductsTable;