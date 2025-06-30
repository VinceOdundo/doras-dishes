const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90 transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=900&fit=crop')`,
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Enhanced Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl animate-pulse delay-300"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[700px] animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-600/90 text-white text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
              From Siaya, Kenya to Missouri, USA
            </span>
          </div>
          
          <h1 className="text-[64px] lg:text-[80px] font-black leading-[0.9] text-white mb-8 tracking-tight" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)' }}>
            DORA'S<br />
            <span className="text-orange-400">DISHES</span><br />
            <span className="text-3xl lg:text-4xl font-light text-orange-100">Photography & Culinary Arts</span>
          </h1>
          
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-light text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Capturing Life's Beautiful Moments & Creating Extraordinary Flavors
            </h2>
            <p className="text-lg text-white/95 leading-relaxed mb-6 max-w-[600px]" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
              Meet Dora Abong'o - a passionate photographer and culinary artist with over <strong className="text-orange-300">300,000 stunning photographs</strong> and a mastery of authentic Luo, Kenyan, Swahili, and international cuisine. From family portraits to gourmet dishes, experience the artistry that bridges two worlds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>300K+ Photos Captured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Authentic Cultural Fusion</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span>EXPLORE PHOTOGRAPHY</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span>ORDER CUSTOM DISHES</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;