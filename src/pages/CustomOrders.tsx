
import { useState } from "react";
import { Camera, ChefHat, Palette, Clock, CheckCircle, Star, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomOrders = () => {
  const [selectedService, setSelectedService] = useState('photography');

  const customServices = [
    {
      id: 'photography',
      icon: Camera,
      title: 'Custom Photography',
      description: 'Personalized photo sessions tailored to your vision',
      services: [
        'Custom portrait sessions',
        'Event documentation',
        'Product photography',
        'Brand photography',
        'Family milestone sessions'
      ],
      startingPrice: '$200',
      timeline: '1-2 weeks'
    },
    {
      id: 'cooking',
      icon: ChefHat,
      title: 'Custom Culinary Services',
      description: 'Bespoke dining experiences and menu creation',
      services: [
        'Custom menu development',
        'Private dinner parties',
        'Cultural fusion experiences',
        'Recipe development',
        'Cooking workshops'
      ],
      startingPrice: '$150',
      timeline: '1 week'
    },
    {
      id: 'prints',
      icon: Palette,
      title: 'Custom Canvas & Prints',
      description: 'Transform your memories into stunning wall art',
      services: [
        'Custom canvas prints',
        'Photo restoration',
        'Multi-panel artwork',
        'Custom framing',
        'Digital art creation'
      ],
      startingPrice: '$75',
      timeline: '2-3 weeks'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Share your vision and requirements with Dora',
      icon: Users
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Receive a detailed proposal and timeline',
      icon: Clock
    },
    {
      step: 3,
      title: 'Creation',
      description: 'Dora brings your custom project to life',
      icon: Palette
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Receive your perfectly crafted custom order',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      service: 'Custom Wedding Photography',
      text: "Dora captured our special day beautifully. Her ability to blend our cultural backgrounds into stunning photos was incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c57c93e4?w=100&h=100&fit=crop"
    },
    {
      name: 'James Wilson',
      service: 'Custom Menu Development',
      text: "The fusion menu Dora created for our restaurant has been a huge hit. Her understanding of flavor profiles is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: 'Maria Garcia',
      service: 'Custom Canvas Collection',
      text: "The custom canvas prints transformed our living room. The quality and attention to detail exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <Palette className="w-5 h-5" />
              <span className="font-medium">Bespoke Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Create Something <span className="text-orange-600">Uniquely Yours</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              From custom photography sessions to personalized culinary experiences, 
              Dora works with you to create something truly special that reflects your vision and story.
            </p>
            
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Custom Project
            </button>
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Custom Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customServices.map((service) => (
              <div key={service.id} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.services.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="text-2xl font-bold text-orange-600">{service.startingPrice}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">Timeline</span>
                      <div className="font-semibold text-gray-900">{service.timeline}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Custom Project Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's collaborate to bring your unique vision to life. Every custom project begins with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrders;
