
interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard = ({ image, title, price, originalPrice, isNew, className = "" }: ProductCardProps) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium">
            NEW
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-black group-hover:underline">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">{price}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
