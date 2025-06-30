
const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop')`,
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[600px]">
          <h1 className="text-[72px] lg:text-[72px] font-black leading-[1.1] text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            DORA'S<br />
            DISHES<br />
            <span className="text-4xl lg:text-5xl font-light">Photography & Culinary Arts</span>
          </h1>
          
          <div className="mb-10">
            <h2 className="text-2xl font-light text-white mb-8" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              From Siaya to Missouri - Capturing Life's Beautiful Moments
            </h2>
            <p className="text-lg text-white/95 leading-relaxed mb-6" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Meet Dora Abong'o - a passionate photographer and culinary artist with over 300,000 stunning photographs capturing people, animals, places, and food from her incredible journey. Experience authentic Luo, Kenyan, Swahili, and African flavors alongside international cuisine.
            </p>
            <p className="text-lg text-white/95 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Discover her photography collections, order custom dishes, and stay tuned for her upcoming cookbook featuring recipes from two worlds.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition-colors">
              VIEW PHOTOGRAPHY →
            </button>
            <button className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-orange-600 transition-colors">
              ORDER DISHES →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
