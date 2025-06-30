
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">STORY</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">New</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Men</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Women</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Kids</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Collections</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">Sale</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">New</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Men</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Women</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Kids</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Collections</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Sale</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
