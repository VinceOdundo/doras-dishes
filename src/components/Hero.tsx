
const Hero = () => {
  return (
    <section className="relative bg-gray-50 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-8xl font-bold text-black leading-tight">
            PROTECT YOU PEACE<br />
            <span className="text-4xl lg:text-5xl">VOL1</span>
          </h1>
          
          <div className="space-y-4 max-w-md">
            <h2 className="text-xl font-semibold text-black">
              Our brand is more than just clothing – it's a movement.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We stand for something bigger than ourselves - our communities, our planet, and most importantly, our peace of mind. We create designs that speak to the soul and inspire others to protect what matters most to them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join us on a journey to create positive change, one piece at a time. Together, we can protect our peace and build a better future for all.
            </p>
          </div>
          
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors font-medium">
            SHOP NOW →
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative">
          <img 
            src="/lovable-uploads/e865b1b9-d300-4e24-9121-a839c6d50fdb.png" 
            alt="Model wearing streetwear"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
