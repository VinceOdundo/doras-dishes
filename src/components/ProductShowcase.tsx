
const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Traditional African Cuisine Photography",
      description: "Stunning visual documentation of authentic Luo, Kenyan, and Swahili dishes. Each photograph captures the rich colors, textures, and cultural significance of traditional African cuisine, available as high-quality prints and digital downloads.",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      reverse: false
    },
    {
      id: 2,
      title: "Custom Catering & Cooking Services",
      description: "Experience Dora's exceptional culinary skills with custom catering for special events. From traditional African dishes to international fusion cuisine, every meal is crafted with love and presented beautifully.",
      price: "$125.00",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      reverse: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="space-y-32">
          {showcaseItems.map((item) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${item.reverse ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${item.reverse ? 'lg:col-start-2' : ''}`}>
                <div 
                  className="w-full h-[500px] bg-cover bg-center rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className={`max-w-[500px] ${item.reverse ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{item.description}</p>
                <div className="text-3xl font-bold text-orange-600 mb-8">{item.price}</div>
                <button className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200 rounded-md">
                  ORDER NOW →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
