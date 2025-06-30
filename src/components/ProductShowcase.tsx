const ProductShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "Traditional African Cuisine Photography",
      description: "Stunning visual documentation of authentic Luo, Kenyan, and Swahili dishes. Each photograph captures the rich colors, textures, and cultural significance of traditional African cuisine. Available as high-quality prints, canvas art, and digital downloads perfect for restaurants, cultural centers, or your home.",
      price: "$45.00",
      originalPrice: "$65.00",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      reverse: false,
      features: ["Canvas prints", "Digital downloads", "Custom sizing", "Restaurant licensing"],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      title: "Custom Catering & Cooking Services",
      description: "Experience Dora's exceptional culinary skills with custom catering for special events and intimate gatherings. From traditional African dishes to international fusion cuisine, every meal is crafted with love and presented beautifully. Perfect for weddings, corporate events, or personal celebrations.",
      price: "$125.00",
      priceNote: "per person (min 10 people)",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      reverse: true,
      features: ["Menu planning", "Professional service", "Dietary accommodations", "Cultural storytelling"],
      badge: "POPULAR"
    },
    {
      id: 3,
      title: "Portrait & Event Photography",
      description: "Capture your most precious moments with Dora's artistic eye. From family portraits to cultural celebrations and special events, each photograph tells a story. With over 300,000 photos in her portfolio, Dora brings a unique perspective that bridges cultures and celebrates diversity.",
      price: "$200.00",
      priceNote: "per session",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      reverse: false,
      features: ["2-3 hour sessions", "Professional editing", "Digital gallery", "Print packages available"],
      badge: "PREMIUM"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 border border-orange-300 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-600/10 text-orange-700 text-sm font-medium rounded-full mb-4">
            Featured Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bringing <span className="text-orange-600">Art</span> to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Dora's signature offerings that blend her passion for photography and culinary arts
          </p>
        </div>

        <div className="space-y-32">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${item.reverse ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${item.reverse ? 'lg:col-start-2' : ''} animate-slide-up`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative group">
                  <div 
                    className="w-full h-[500px] bg-cover bg-center rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl relative overflow-hidden"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {item.badge}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{item.price}</div>
                      {item.priceNote && <div className="text-xs text-gray-500">{item.priceNote}</div>}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`max-w-[550px] ${item.reverse ? 'lg:col-start-1' : ''} animate-fade-in`} style={{animationDelay: `${index * 300}ms`}}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{item.description}</p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Section */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-3xl font-bold text-orange-600">{item.price}</div>
                  {item.originalPrice && (
                    <div className="text-xl text-gray-400 line-through">{item.originalPrice}</div>
                  )}
                  {item.priceNote && (
                    <div className="text-sm text-gray-600 ml-2">{item.priceNote}</div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl">
                    <span>ORDER NOW</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-lg">
                    Learn More
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

export default ProductShowcase;