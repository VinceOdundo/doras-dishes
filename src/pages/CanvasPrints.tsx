
import { useState } from "react";
import { Camera, Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const CanvasPrints = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Prints', count: 85 },
    { id: 'wildlife', name: 'Wildlife', count: 25 },
    { id: 'portraits', name: 'Portraits', count: 20 },
    { id: 'landscapes', name: 'Landscapes', count: 18 },
    { id: 'food', name: 'Food Photography', count: 22 }
  ];

  const prints = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      title: "Majestic Elephant - Canvas Print",
      price: "$75.00",
      originalPrice: "$95.00",
      category: "wildlife",
      rating: 5,
      reviews: 34,
      isNew: false
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      title: "Golden Hour Portrait - Large Canvas",
      price: "$85.00",
      category: "portraits",
      rating: 5,
      reviews: 28,
      isNew: true
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=400&fit=crop",
      title: "Ozark Mountain Vista - Canvas",
      price: "$65.00",
      category: "landscapes",
      rating: 4,
      reviews: 15,
      isNew: false
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      title: "Kenyan Feast - Food Art Canvas",
      price: "$55.00",
      category: "food",
      rating: 5,
      reviews: 12,
      isNew: false
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop",
      title: "Travel Memories Collection",
      price: "$125.00",
      originalPrice: "$150.00",
      category: "landscapes",
      rating: 5,
      reviews: 41,
      isNew: false
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      title: "BBQ Masterpiece - Kitchen Art",
      price: "$45.00",
      category: "food",
      rating: 4,
      reviews: 8,
      isNew: true
    }
  ];

  const filteredPrints = selectedCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <Camera className="w-5 h-5" />
              <span className="font-medium">Premium Canvas Prints</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Space with <span className="text-orange-600">Stunning Art</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Bring Dora's breathtaking photography into your home with museum-quality canvas prints. 
              Each piece tells a story and captures the beauty of two worlds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200">
                Custom Sizes Available
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparency"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-8`}>
            {filteredPrints.map((print) => (
              <ProductCard
                key={print.id}
                image={print.image}
                title={print.title}
                price={print.price}
                originalPrice={print.originalPrice}
                rating={print.rating}
                reviews={print.reviews}
                isNew={print.isNew}
                category={print.category}
                variant={viewMode === 'list' ? 'primary' : 'secondary'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Quality Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Museum Quality</h3>
              <p className="text-gray-600">Premium canvas and archival inks ensure your prints last for generations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Handcrafted</h3>
              <p className="text-gray-600">Each canvas is carefully stretched and finished by skilled artisans</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">30-day money-back guarantee on all canvas prints</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanvasPrints;
