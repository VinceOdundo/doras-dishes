
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Camera, Download, Heart, Star, Filter, Grid, List } from "lucide-react";
import { useState } from "react";

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos", count: "300K+" },
    { id: "people", name: "People", count: "85K" },
    { id: "food", name: "Food", count: "92K" },
    { id: "places", name: "Places", count: "78K" },
    { id: "animals", name: "Animals", count: "45K" }
  ];

  const photos = [
    {
      id: 1,
      title: "Traditional Luo Feast",
      category: "food",
      location: "Siaya, Kenya",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      likes: 234,
      downloads: 89
    },
    {
      id: 2,
      title: "Missouri Sunset Portrait",
      category: "people",
      location: "Missouri, USA",
      price: "$35.00",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop",
      likes: 189,
      downloads: 67
    },
    {
      id: 3,
      title: "African Wildlife - Elephant",
      category: "animals",
      location: "Kenya Safari",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=600&fit=crop",
      likes: 342,
      downloads: 156
    },
    {
      id: 4,
      title: "Kenyan Countryside",
      category: "places",
      location: "Siaya, Kenya",
      price: "$30.00",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=600&fit=crop",
      likes: 276,
      downloads: 98
    },
    {
      id: 5,
      title: "Swahili Spiced Dish",
      category: "food",
      location: "Missouri Kitchen",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop",
      likes: 198,
      downloads: 73
    },
    {
      id: 6,
      title: "Family Gathering",
      category: "people",
      location: "Missouri, USA",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop",
      likes: 421,
      downloads: 187
    }
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Photography Collection
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore Dora's extensive collection of over 300,000 photographs capturing the beauty of people, places, food, and wildlife from her journey between Kenya and Missouri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Camera className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">300K+</h3>
              <p className="text-gray-600">Photos Captured</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Download className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5K+</h3>
              <p className="text-gray-600">Downloads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid" ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list" ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {photo.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-gray-600 mb-4">{photo.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {photo.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {photo.downloads}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Photography;
