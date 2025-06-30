
const FeaturedSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Revenant Sacred Sand Set</h3>
              <p className="text-gray-300 text-sm mb-4">
                Drawing from the mystic duality of light and shadow, this design captures the eternal dance between the sacred and the profane.
              </p>
              <div className="text-2xl font-bold">$65.00</div>
              <button className="mt-4 bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Center Column */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="bg-white text-black w-full aspect-square rounded mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">DESIGN</span>
              </div>
              <h4 className="font-bold">Revenant Skull Tee</h4>
              <p className="text-sm text-gray-300">$32.00</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="bg-white text-black w-full aspect-square rounded mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">DESIGN</span>
              </div>
              <h4 className="font-bold">Revenant Skull Tee</h4>
              <p className="text-sm text-gray-300">$32.00</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">STORY - PROTECT Y</h2>
              <p className="text-gray-300 mb-6">
                Our designs speak to the soul and inspire others to protect what matters most to them.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <div className="bg-red-600 w-full aspect-square rounded mb-2"></div>
                <p className="text-xs text-center">Till Death Drips Hot Bundle</p>
                <p className="text-xs text-center text-gray-400">$159</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="bg-black w-full aspect-square rounded mb-2 flex items-center justify-center">
                  <span className="text-red-500 text-xl">☠</span>
                </div>
                <p className="text-xs text-center">Till Death Hot Bundle</p>
                <p className="text-xs text-center text-gray-400">$159</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="bg-red-600 w-full aspect-square rounded mb-2"></div>
                <p className="text-xs text-center">Till Death Bundle Hot</p>
                <p className="text-xs text-center text-gray-400">$159</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
