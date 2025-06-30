
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
      <div className={`group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-black hover:shadow-lg ${className}`}>
        <div className="relative overflow-hidden">
          <div 
            className="w-full h-[200px] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          {isNew && (
            <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium rounded animate-pulse">
              NEW
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-black mb-1 group-hover:underline transition-all duration-200">{title}</h3>
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
    <div className={`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] ${className}`}>
      <div className="relative w-full h-[300px] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-medium rounded-full animate-bounce">
            NEW
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-200">
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2 group-hover:underline transition-all duration-200">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">Premium streetwear collection</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
