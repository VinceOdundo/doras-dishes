
const PromoSection = () => {
  const promoItems = [
    {
      id: 1,
      title: "Dora's Cookbook - Pre-Order",
      description: "Get ready for an incredible culinary journey! Dora's upcoming cookbook features recipes from Siaya to Missouri, blending traditional African flavors with international cuisine.",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "Premium Photography Prints",
      description: "Transform your space with Dora's stunning photography. Available on canvas, metal, and fine art paper. Each piece tells a story from her incredible journey.",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-amber-600 to-orange-700"
    },
    {
      id: 3,
      title: "Photography Workshop",
      description: "Learn from Dora's experience capturing over 300,000 photos. Master the art of food, portrait, and nature photography with hands-on guidance.",
      price: "$150.00",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-green-600 to-teal-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Special Offerings</h2>
          <p className="text-xl text-gray-300">Exclusive experiences from Dora's world of photography and cuisine</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className={`w-full h-48 ${item.color} flex items-center justify-center relative overflow-hidden`}>
                <div 
                  className="w-full h-full bg-cover bg-center opacity-90"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-400">{item.price}</span>
                  <button className="px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200 rounded-md">
                    GET STARTED
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
