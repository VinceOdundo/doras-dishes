
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full h-20 bg-white/95 backdrop-blur-[10px] border-b border-black/10 z-50">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black">STORY</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">New</a>
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">Men</a>
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">Women</a>
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">Kids</a>
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">Collections</a>
          <a href="#" className="text-base font-medium text-black hover:opacity-70 transition-opacity">Sale</a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 text-black hover:opacity-70 cursor-pointer transition-opacity" />
          <User className="w-6 h-6 text-black hover:opacity-70 cursor-pointer transition-opacity" />
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-black hover:opacity-70 cursor-pointer transition-opacity" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 py-4 bg-white/95 backdrop-blur-[10px]">
          <nav className="flex flex-col gap-4 px-6">
            <a href="#" className="text-black hover:opacity-70 transition-opacity">New</a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">Men</a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">Women</a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">Kids</a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">Collections</a>
            <a href="#" className="text-black hover:opacity-70 transition-opacity">Sale</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
