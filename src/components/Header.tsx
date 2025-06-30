
import { Search, ShoppingBag, Menu, User, Heart, Camera, ChefHat } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="fixed top-0 w-full h-20 bg-white/95 backdrop-blur-[10px] border-b border-orange-200/30 z-50 transition-all duration-300">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 h-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-orange-600" />
            <ChefHat className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200 cursor-pointer">
            DORA'S DISHES
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['Photography', 'Cooking Services', 'Canvas Prints', 'Custom Orders', 'About Dora', 'Contact'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-base font-medium text-gray-800 hover:text-orange-600 transition-all duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
          <Heart className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
          <User className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
          <button 
            className="md:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-orange-200/30 py-4 bg-white/95 backdrop-blur-[10px] animate-fade-in">
          <nav className="flex flex-col gap-4 px-6">
            {['Photography', 'Cooking Services', 'Canvas Prints', 'Custom Orders', 'About Dora', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-800 hover:text-orange-600 transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
