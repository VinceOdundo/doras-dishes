
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  category?: string;
  variant?: 'primary' | 'secondary';
}

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  isNew, 
  rating = 5, 
  reviews = 0,
  category = "Photography",
  variant = 'primary'
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Human-centered design: Different layouts based on user context
  const isCompact = variant === 'secondary';

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100 ${
        isCompact ? 'max-w-sm' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            isCompact ? 'h-48' : 'h-64'
          }`}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NEW
            </span>
          )}
          {originalPrice && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              SALE
            </span>
          )}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-white/20">
            {category}
          </span>
        </div>
        
        {/* Hover Actions - Human-centered: Clear visual feedback */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center gap-4 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
            aria-label="Quick view"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isLiked 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button 
            className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Content - Human-centered: Clear hierarchy and scannable */}
      <div className={`p-6 space-y-3 ${isCompact ? 'p-4 space-y-2' : ''}`}>
        {/* Rating - Building trust through social proof */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          {reviews > 0 && (
            <span className="text-sm text-gray-500">({reviews})</span>
          )}
        </div>
        
        <h3 className={`font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors ${
          isCompact ? 'text-base' : 'text-lg'
        }`}>
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-orange-600 ${isCompact ? 'text-xl' : 'text-2xl'}`}>
              {price}
            </span>
            {originalPrice && (
              <span className={`text-gray-500 line-through ${isCompact ? 'text-base' : 'text-lg'}`}>
                {originalPrice}
              </span>
            )}
          </div>
          
          <button className={`bg-orange-600 text-white font-medium hover:bg-orange-700 transition-all duration-200 hover:scale-105 transform rounded-lg ${
            isCompact ? 'px-3 py-1 text-sm' : 'px-4 py-2'
          }`}>
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Quick Add Button - Human-centered: Clear call-to-action */}
      <div className={`absolute left-6 right-6 transition-all duration-300 ${
        isCompact ? 'bottom-4' : 'bottom-6'
      } ${
        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
          Quick Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
