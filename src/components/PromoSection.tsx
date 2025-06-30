const PromoSection = () => {
  const promoItems = [
    {
      id: 1,
      title: "Dora's Cookbook - Pre-Order",
      description: "Get ready for an incredible culinary journey! Dora's upcoming cookbook features authentic recipes from Siaya to Missouri, blending traditional African flavors with international cuisine. Over 100 recipes with stunning food photography.",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      badge: "PRE-ORDER",
      features: ["100+ Authentic Recipes", "Cultural Stories", "Professional Food Photos", "Early Bird Discount"]
    },
    {
      id: 2,
      title: "Premium Photography Prints",
      description: "Transform your space with Dora's stunning photography collection. Available on museum-quality canvas, metal prints, and fine art paper. Each piece captures the beauty of her incredible journey between two worlds.",
      price: "$75.00",
      priceRange: "$45 - $200",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-amber-600 to-orange-700",
      badge: "BESTSELLER",
      features: ["Museum Quality", "Multiple Sizes", "Custom Framing", "Worldwide Shipping"]
    },
    {
      id: 3,
      title: "Photography & Cooking Workshop",
      description: "Learn from Dora's experience capturing over 300,000 photos and mastering authentic African cuisine. This unique workshop combines food styling, photography techniques, and hands-on cooking lessons.",
      price: "$180.00",
      duration: "Full Day Experience",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      color: "bg-gradient-to-br from-green-600 to-teal-700",
      badge: "LIMITED",
      features: ["Food Styling Tips", "Photography Techniques", "Hands-on Cooking", "Recipe Cards Included"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-orange-600/20 text-orange-300 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
            Special Offerings
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Exclusive Experiences from 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300"> Dora's World</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the artistry of photography and the richness of authentic African cuisine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl border border-gray-700/50 animate-slide-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Image Section with Overlay */}
              <div className={`relative w-full h-56 ${item.color} flex items-center justify-center overflow-hidden`}>
                <div 
                  className="w-full h-full bg-cover bg-center opacity-90 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                  {item.badge}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{item.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-400">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                    )}
                  </div>
                  {(item.priceRange || item.duration) && (
                    <span className="text-xs text-gray-500">{item.priceRange || item.duration}</span>
                  )}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl transform">
                  {item.badge === "PRE-ORDER" ? "PRE-ORDER NOW" : "GET STARTED"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Dora's Artistry?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join hundreds of satisfied customers who have experienced the magic of authentic African cuisine and stunning photography.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Contact Dora Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;