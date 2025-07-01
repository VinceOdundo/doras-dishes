import { useState } from "react";
import { Camera, Star, Eye, Heart, MapPin, Clock, Award, Filter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSystem from "../components/BookingSystem";

const Photography = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Photos', count: 142 },
    { id: 'portraits', name: 'Portraits', count: 45 },
    { id: 'wildlife', name: 'Wildlife', count: 38 },
    { id: 'landscapes', name: 'Landscapes', count: 29 },
    { id: 'food', name: 'Food', count: 30 }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      title: "Golden Hour Portraits",
      category: "portraits",
      location: "Missouri Prairie",
      price: "$45.00",
      likes: 234,
      views: 1523,
      rating: 5,
      description: "Capturing the magic of golden hour with authentic emotion"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      title: "Kenya Wildlife Collection",
      category: "wildlife",
      location: "Maasai Mara, Kenya",
      price: "$65.00",
      likes: 456,
      views: 2890,
      rating: 5,
      description: "Majestic wildlife from the heart of Kenya"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      title: "Missouri Landscapes",
      category: "landscapes",
      location: "Ozark Mountains",
      price: "$55.00",
      likes: 321,
      views: 1987,
      rating: 4,
      description: "Serene landscapes of the Ozark Mountains"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop",
      title: "Travel Photography Bundle",
      category: "landscapes",
      location: "Global Adventures",
      price: "$75.00",
      likes: 678,
      views: 4321,
      rating: 5,
      description: "A collection of travel photos from around the world"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      title: "Kenyan Cuisine",
      category: "food",
      location: "Siaya, Kenya",
      price: "$35.00",
      likes: 234,
      views: 1523,
      rating: 5,
      description: "Authentic Kenyan dishes captured in vibrant detail"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      title: "American BBQ",
      category: "food",
      location: "Kansas City, MO",
      price: "$45.00",
      likes: 345,
      views: 2109,
      rating: 4,
      description: "Classic American BBQ from Kansas City"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <Camera className="w-5 h-5" />
              <span className="font-medium">Professional Photography Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Capturing Life's <span className="text-orange-600">Beautiful Moments</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              From intimate portraits to breathtaking wildlife, explore Dora's journey through 
              photography across Kenya and Missouri. Over 300,000 moments captured with passion and artistry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowBooking(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Session
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200">
                Browse Gallery
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "300K+", label: "Photos Taken" },
              { number: "500+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "2", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Photography Portfolio</h2>
              <p className="text-gray-600">Explore collections from Kenya to Missouri</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">{item.views} views</div>
                          <div className="text-xs">{item.likes} likes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({item.rating}.0)</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Photography Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional photography services tailored to capture your most precious moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Portrait Sessions",
                description: "Individual, couple, and family portraits",
                price: "Starting at $150",
                duration: "1-2 hours",
                features: ["Professional lighting", "Multiple outfit changes", "High-res digital copies"]
              },
              {
                icon: Award,
                title: "Event Photography",
                description: "Weddings, celebrations, and special occasions",
                price: "Starting at $400",
                duration: "4-8 hours",
                features: ["Full event coverage", "Same-day previews", "Online gallery"]
              },
              {
                icon: MapPin,
                title: "Location Shoots",
                description: "On-location photography for any purpose",
                price: "Starting at $250",
                duration: "2-4 hours",
                features: ["Travel included", "Custom location scouting", "All equipment provided"]
              },
              {
                icon: Clock,
                title: "Quick Sessions",
                description: "Short and sweet photography sessions",
                price: "Starting at $80",
                duration: "30 minutes",
                features: ["One location", "Basic editing", "Fast turnaround"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{service.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">{service.price}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setShowBooking(true)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {showBooking && (
        <BookingSystem 
          service="photography" 
          onClose={() => setShowBooking(false)} 
        />
      )}
    </div>
  );
};

export default Photography;
