
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSystem from "../components/BookingSystem";
import { ChefHat, Clock, Users, Star, MapPin, Calendar, Phone, Mail } from "lucide-react";
import { useState } from "react";

const CookingServices = () => {
  const [showBooking, setShowBooking] = useState(false);

  const services = [
    {
      id: "catering",
      name: "Custom Catering",
      description: "Professional catering services for your special events",
      price: "Starting at $25/person",
      duration: "2-8 hours",
      capacity: "10-100 people",
      features: ["Menu planning", "Professional service", "Setup & cleanup", "Dietary accommodations"]
    },
    {
      id: "classes",
      name: "Cooking Classes",
      description: "Learn to cook authentic African and international dishes",
      price: "$85/session",
      duration: "3 hours",
      capacity: "2-8 people",
      features: ["Hands-on learning", "Recipe cards", "Ingredient sourcing tips", "Cultural stories"]
    },
    {
      id: "personal",
      name: "Personal Chef",
      description: "Weekly meal preparation in your home",
      price: "$150/session",
      duration: "4-6 hours",
      capacity: "Family meals",
      features: ["Meal planning", "Grocery shopping", "Cooking & storage", "Dietary customization"]
    }
  ];

  const specialties = [
    {
      name: "Traditional Luo Cuisine",
      description: "Authentic dishes from Siaya, Kenya",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      dishes: ["Fish stew", "Ugali", "Sukuma wiki", "Nyama choma"]
    },
    {
      name: "Kenyan Favorites",
      description: "Popular dishes from across Kenya",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      dishes: ["Pilau", "Chapati", "Samosas", "Mandazi"]
    },
    {
      name: "Swahili Fusion",
      description: "Coastal flavors with modern twists",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
      dishes: ["Coconut curry", "Biryani", "Mishkaki", "Mahamri"]
    },
    {
      name: "International Cuisine",
      description: "Global flavors perfected in Missouri",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      dishes: ["BBQ ribs", "Pasta dishes", "Grilled specialties", "Fusion creations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Culinary Services by Dora
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Experience the rich flavors of Africa and international cuisine. From intimate cooking classes to large event catering, Dora brings her passion for food and culture to every dish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowBooking(true)}
                  className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Book a Service
                </button>
                <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                  View Menu
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Dora cooking"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <ChefHat className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Choose the perfect culinary experience for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">$</span>
                    </div>
                    <span className="text-gray-800 font-medium">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-800">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-800">{service.capacity}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setShowBooking(true)}
                  className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Culinary Specialties</h2>
            <p className="text-xl text-gray-600">Authentic flavors from two worlds</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  <div className="space-y-1">
                    {specialty.dishes.map((dish, dishIndex) => (
                      <div key={dishIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{dish}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                event: "Wedding Reception",
                text: "Dora's catering made our wedding unforgettable. The fusion of African and American flavors was absolutely divine!",
                rating: 5
              },
              {
                name: "Michael Chen",
                event: "Cooking Class",
                text: "Learning to cook authentic Kenyan dishes from Dora was incredible. She's not just a chef, she's a cultural ambassador.",
                rating: 5
              },
              {
                name: "Lisa Thompson",
                event: "Corporate Event",
                text: "Our company event was a huge success thanks to Dora's amazing food and professional service.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Culinary Experience?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's create something delicious together. Contact us to discuss your event and menu preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowBooking(true)}
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Book Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              <Mail className="w-5 h-5 inline mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      <Footer />
      
      {showBooking && (
        <BookingSystem 
          service="cooking" 
          onClose={() => setShowBooking(false)} 
        />
      )}
    </div>
  );
};

export default CookingServices;
