
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
  variant?: 'primary' | 'secondary';
  background?: 'white' | 'gray';
}

const ProductGrid = ({ 
  title, 
  products, 
  showViewAll = true, 
  variant = 'primary',
  background = 'white'
}: ProductGridProps) => {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  const gridCols = variant === 'secondary' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4';
  const gap = variant === 'secondary' ? 'gap-6' : 'gap-8';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-black">{title}</h2>
          {showViewAll && (
            <button className="text-black hover:underline font-medium text-lg">
              View All →
            </button>
          )}
        </div>
        
        <div className={`grid ${gridCols} ${gap}`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              isNew={product.isNew}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
