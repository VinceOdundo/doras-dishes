
const BrandStatement = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-[500px]">
            <h2 className="text-5xl font-bold leading-[1.2] text-black mb-8">
              More Than Just Clothing – We're a Movement
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              We stand for something bigger than ourselves - our communities, our planet, and most importantly, our peace of mind. Every piece is crafted with intention, designed to inspire, and built to last.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              Join us on a journey to create positive change, one piece at a time. Together, we can protect our peace and build a better future for all.
            </p>
            <button className="inline-block px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">
              DISCOVER OUR STORY →
            </button>
          </div>
          <div className="relative">
            <div 
              className="w-full h-[500px] bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop')"
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black text-white flex items-center justify-center rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-xs">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
