
interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  isNew, 
  className = "",
  variant = 'primary'
}: ProductCardProps) => {
  if (variant === 'secondary') {
    return (
      <div className={`group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-black ${className}`}>
        <div 
          className="w-full h-[200px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-4">
          <h3 className="text-base font-semibold text-black mb-1 group-hover:underline">{title}</h3>
          <p className="text-xs text-gray-600 mb-2">Premium Quality</p>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-black">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${className}`}>
      <div className="relative w-full h-[300px] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium rounded">
            NEW
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2 group-hover:underline">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">Premium streetwear collection</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
