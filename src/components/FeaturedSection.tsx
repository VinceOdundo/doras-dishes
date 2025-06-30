const FeaturedSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-600/20 text-orange-300 text-sm font-medium rounded-full mb-4">
            Featured Collections
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Dora's</span> Signature Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the artistry that bridges Siaya, Kenya and Missouri, USA through photography and authentic cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Photography Service */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full font-medium">BESTSELLER</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">African Heritage Photo Collection</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Stunning photography capturing the essence of Kenyan culture, wildlife, and landscapes. Over 50,000 curated images from Siaya and beyond.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span>High-resolution downloads</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span>Canvas print options</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span>Commercial licensing</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-orange-400">$45.00</div>
                <button className="px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-200 rounded-lg font-semibold hover:scale-105 transform">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Center Column - Product Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div 
                className="bg-gradient-to-br from-orange-600 to-red-600 w-full aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="relative text-white text-lg font-bold">Luo Cuisine</span>
              </div>
              <h4 className="font-bold text-white text-sm">Traditional Dishes Photography</h4>
              <p className="text-xs text-gray-400 mb-2">Authentic food styling</p>
              <p className="text-sm text-orange-400 font-bold">$65.00</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div 
                className="bg-gradient-to-br from-amber-600 to-orange-600 w-full aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="relative text-white text-lg font-bold">Portraits</span>
              </div>
              <h4 className="font-bold text-white text-sm">Family Portrait Sessions</h4>
              <p className="text-xs text-gray-400 mb-2">Professional photography</p>
              <p className="text-sm text-orange-400 font-bold">$200.00</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div 
                className="bg-gradient-to-br from-green-600 to-teal-600 w-full aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="relative text-white text-lg font-bold">Catering</span>
              </div>
              <h4 className="font-bold text-white text-sm">Custom Event Catering</h4>
              <p className="text-xs text-gray-400 mb-2">Authentic African cuisine</p>
              <p className="text-sm text-orange-400 font-bold">$125.00</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div 
                className="bg-gradient-to-br from-purple-600 to-pink-600 w-full aspect-square rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=200&h=200&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="relative text-white text-lg font-bold">Wildlife</span>
              </div>
              <h4 className="font-bold text-white text-sm">Kenya Wildlife Collection</h4>
              <p className="text-xs text-gray-400 mb-2">Safari photography</p>
              <p className="text-sm text-orange-400 font-bold">$85.00</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                AUTHENTIC - CULTURAL - 
                <span className="text-orange-400">BEAUTIFUL</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From the shores of Lake Victoria to the heart of Missouri, Dora's work celebrates the beauty of cultural heritage and the art of storytelling through food and photography.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">300K+ Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">15+ Years Experience</span>
                </div>
              </div>
              <button className="px-8 py-4 bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors duration-200 rounded-lg hover:scale-105 transform">
                EXPLORE COLLECTION
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-700/50">
                <div 
                  className="bg-gradient-to-br from-orange-600 to-red-600 w-full aspect-square rounded-lg mb-3 relative overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1574484284002-952d92456975?w=100&h=100&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <p className="text-xs text-center text-white font-medium">Swahili Spices Collection</p>
                <p className="text-xs text-center text-orange-400">$45</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-700/50">
                <div 
                  className="bg-gradient-to-br from-amber-600 to-orange-600 w-full aspect-square rounded-lg mb-3 relative overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <p className="text-xs text-center text-white font-medium">Cooking Classes</p>
                <p className="text-xs text-center text-orange-400">$85</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-700/50">
                <div 
                  className="bg-gradient-to-br from-green-600 to-teal-600 w-full aspect-square rounded-lg mb-3 relative overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=100&h=100&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <p className="text-xs text-center text-white font-medium">Landscape Prints</p>
                <p className="text-xs text-center text-orange-400">$55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;