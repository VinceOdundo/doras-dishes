import { Search, ShoppingBag, Menu, User, Heart, Camera, ChefHat } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Photography', path: '/photography' },
    { name: 'Cooking Services', path: '/cooking-services' },
    { name: 'Canvas Prints', path: '/canvas-prints' },
    { name: 'Custom Orders', path: '/custom-orders' },
    { name: 'About Dora', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 w-full h-20 bg-white/95 backdrop-blur-[10px] border-b border-orange-200/30 z-50 transition-all duration-300">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-orange-600" />
              <ChefHat className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
              DORA'S DISHES
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navigationItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-all duration-200 relative group ${
                  isActivePath(item.path) 
                    ? 'text-orange-600' 
                    : 'text-gray-800 hover:text-orange-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                  isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
            <Heart className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
            <User className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" />
            <div className="relative">
              <ShoppingBag 
                className="w-6 h-6 text-gray-700 hover:text-orange-600 hover:scale-110 cursor-pointer transition-all duration-200" 
                onClick={() => setIsCartOpen(true)}
              />
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
              {navigationItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-orange-600 font-semibold'
                      : 'text-gray-800 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
