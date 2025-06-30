
const BrandStatement = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-[500px]">
            <h2 className="text-5xl font-bold leading-[1.2] text-gray-900 mb-8">
              A Journey of Flavors and Frames
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Dora Abong'o brings together her rich heritage from Siaya, Kenya, and her life in Missouri through two passions: capturing life's precious moments and creating extraordinary culinary experiences that tell stories.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              With over 300,000 photographs from her travels and a mastery of both traditional African and international cuisine, Dora creates art that feeds both the eyes and the soul.
            </p>
            <button className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200 rounded-md">
              DISCOVER DORA'S STORY →
            </button>
          </div>
          <div className="relative">
            <div 
              className="w-full h-[500px] bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop')"
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-32 bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center justify-center rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">300K+</div>
                <div className="text-xs">Photos Captured</div>
                <div className="text-xs mt-1">Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
