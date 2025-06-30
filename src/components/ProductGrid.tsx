
import ProductCard from "./ProductCard";

interface ProductGridProps {
  title: string;
  products: Array<{
    id: string;
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    isNew?: boolean;
  }>;
  showViewAll?: boolean;
}

const ProductGrid = ({ title, products, showViewAll = true }: ProductGridProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        {showViewAll && (
          <button className="text-black hover:underline font-medium">
            View All →
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            isNew={product.isNew}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
