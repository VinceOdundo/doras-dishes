const BrandStatement = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-[550px] animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-600/10 text-orange-700 text-sm font-medium rounded-full mb-4">
                A Journey of Two Worlds
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-8">
              Where Heritage Meets 
              <span className="text-orange-600"> Artistry</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong className="text-orange-700">Dora Abong'o</strong> brings together her rich heritage from <strong>Siaya, Kenya</strong>, and her life in <strong>Missouri</strong> through two extraordinary passions: capturing life's most precious moments and creating culinary experiences that tell stories across cultures.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With over <strong className="text-orange-700">300,000 photographs</strong> from her travels and a mastery of both traditional African and international cuisine, Dora creates art that feeds both the eyes and the soul. Every dish is a celebration, every photograph a treasured memory.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-600 mb-1">300K+</div>
                <div className="text-sm text-gray-600">Photos Captured</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <button className="group inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl">
              <span>DISCOVER DORA'S STORY</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="relative animate-scale-in">
            {/* Main Image */}
            <div 
              className="w-full h-[550px] bg-cover bg-center rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=550&fit=crop')"
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Two Worlds</div>
                <div className="text-sm opacity-90 mb-2">One Beautiful Story</div>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span>🇰🇪 Kenya</span>
                  <span>•</span>
                  <span>🇺🇸 Missouri</span>
                </div>
              </div>
            </div>

            {/* Floating Photography Badge */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-xl transform hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;