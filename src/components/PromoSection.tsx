
const PromoSection = () => {
  const promoItems = [
    {
      id: 1,
      title: "Till Death Drips Hot Bundle",
      description: "Exclusive limited edition bundle featuring our most sought-after designs. Only 100 pieces available worldwide.",
      price: "$159.00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      color: "bg-red-600"
    },
    {
      id: 2,
      title: "Midnight Collection",
      description: "Dark aesthetics meet premium comfort. Perfect for those who embrace the shadows and find beauty in darkness.",
      price: "$125.00",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
      color: "bg-black"
    },
    {
      id: 3,
      title: "Earth Tone Essentials",
      description: "Sustainable fashion meets modern design. Crafted from organic materials with earth-conscious practices.",
      price: "$89.00",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop",
      color: "bg-amber-700"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Limited Collections</h2>
          <p className="text-xl text-gray-300">Exclusive pieces for the discerning individual</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div 
                className={`w-full h-48 ${item.color} flex items-center justify-center`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <button className="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
