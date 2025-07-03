
import { Camera, ChefHat, ArrowRight, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useGallery } from "@/hooks/useGallery";

const Hero = () => {
  const { getSetting } = useSiteSettings();
  const { gallery } = useGallery(undefined, true);

  const heroTitle = getSetting('hero_title', 'From Siaya to Missouri');
  const heroSubtitle = getSetting('hero_subtitle', 'Discover authentic African cuisine and stunning photography by Dora Abong\'o. Where culinary tradition meets artistic vision.');
  const photosCount = getSetting('hero_photos_count', '300000');

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
              <span className="text-sm font-medium text-gray-700">{getSetting('brand_experience_years', '15')}+ Years of Culinary & Photography Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {heroTitle.split(' ').map((word, index) => 
                index === 1 || index === 3 ? (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">{word}</span>
                ) : (
                  <span key={index}> {word}</span>
                )
              )}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              {heroSubtitle}
            </p>
            
            <div className="flex items-center gap-6 text-lg text-gray-600">
              <div className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-orange-600" />
                <span className="font-semibold">{Number(photosCount).toLocaleString()}+ Photos</span>
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
              {gallery.length > 0 ? (
                <>
                  <div className="space-y-6">
                    {gallery.slice(0, 2).map((item, index) => (
                      <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                            index === 0 ? 'h-80' : 'h-60'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`absolute text-white ${index === 0 ? 'bottom-6 left-6' : 'bottom-4 left-4'}`}>
                            <h3 className={`font-bold mb-2 ${index === 0 ? 'text-xl' : 'text-lg'}`}>{item.title}</h3>
                            <p className={`opacity-90 ${index === 0 ? 'text-sm' : 'text-xs'}`}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6 pt-12">
                    {gallery.slice(2, 4).map((item, index) => (
                      <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                            index === 1 ? 'h-80' : 'h-60'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`absolute text-white ${index === 1 ? 'bottom-6 left-6' : 'bottom-4 left-4'}`}>
                            <h3 className={`font-bold mb-2 ${index === 1 ? 'text-xl' : 'text-lg'}`}>{item.title}</h3>
                            <p className={`opacity-90 ${index === 1 ? 'text-sm' : 'text-xs'}`}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Fallback content if no gallery items
                <div className="col-span-2 text-center py-20">
                  <p className="text-gray-500">Gallery images loading...</p>
                </div>
              )}
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
