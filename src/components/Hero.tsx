
import { Camera, ChefHat, ArrowRight, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 border-2 border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
              <Star className="w-4 h-4 text-orange-600 fill-current" />
              <span className="text-sm font-medium text-gray-700">15+ Years of Culinary & Photography Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Siaya</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Missouri</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Discover authentic African cuisine and stunning photography by <strong>Dora Abong'o</strong>. 
              Where culinary tradition meets artistic vision.
            </p>
            
            <div className="flex items-center gap-6 text-lg text-gray-600">
              <div className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-orange-600" />
                <span className="font-semibold">300K+ Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-orange-600" />
                <span className="font-semibold">Authentic Recipes</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/photography"
                className="group inline-flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Camera className="w-6 h-6" />
                Explore Photography
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/cooking-services"
                className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200"
              >
                <ChefHat className="w-6 h-6 text-orange-600" />
                Cooking Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop"
                    alt="African cuisine"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Traditional Luo Cuisine</h3>
                      <p className="text-sm opacity-90">Authentic flavors from Siaya</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop"
                    alt="Portrait photography"
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">Portrait Sessions</h3>
                      <p className="text-xs opacity-90">Capturing life's moments</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
                    alt="Wildlife photography"
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">Wildlife Collection</h3>
                      <p className="text-xs opacity-90">Kenya's natural beauty</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=500&fit=crop"
                    alt="Catering services"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Catering Services</h3>
                      <p className="text-sm opacity-90">Events & celebrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating CTA */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Featured Collection</p>
                <p className="text-lg font-bold text-gray-900 mb-3">African Heritage Photos</p>
                <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  <Play className="w-4 h-4" />
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
