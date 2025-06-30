
const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e865b1b9-d300-4e24-9121-a839c6d50fdb.png')`,
          backgroundPosition: 'center right'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[500px]">
          <h1 className="text-[72px] lg:text-[72px] font-black leading-[1.1] text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            PROTECT YOUR PEACE<br />
            <span className="text-4xl lg:text-5xl">VOL1</span>
          </h1>
          
          <div className="mb-10">
            <h2 className="text-2xl font-light text-white mb-8" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Our brand is more than just clothing – it's a movement.
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              We stand for something bigger than ourselves - our communities, our planet, and most importantly, our peace of mind. We create designs that speak to the soul and inspire others to protect what matters most to them.
            </p>
            <p className="text-lg text-white/90 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Join us on a journey to create positive change, one piece at a time. Together, we can protect our peace and build a better future for all.
            </p>
          </div>
          
          <button className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 transition-colors">
            SHOP NOW →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
