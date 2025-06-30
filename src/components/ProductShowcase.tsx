
const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Revenant Sacred Sand Set",
      description: "Drawing from the mystic duality of light and shadow, this design captures the eternal dance between the sacred and the profane. Crafted with premium materials and attention to detail.",
      price: "$165.00",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop",
      reverse: false
    },
    {
      id: 2,
      title: "Urban Streetwear Collection",
      description: "Bold designs that speak to the modern urban lifestyle. Each piece tells a story of resilience, creativity, and authentic self-expression in the concrete jungle.",
      price: "$95.00",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=400&fit=crop",
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
                <h3 className="text-4xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{item.description}</p>
                <div className="text-3xl font-bold text-black mb-8">{item.price}</div>
                <button className="inline-block px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200">
                  SHOP NOW →
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
