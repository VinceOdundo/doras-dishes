
import { Star, Quote, User } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Testimonials = () => {
  const { testimonials, loading } = useTestimonials(true); // Get featured testimonials
  const { getSetting } = useSiteSettings();
  
  const clientsCount = getSetting('stats_clients_count', '500');
  const eventsCount = getSetting('stats_events_count', '25');

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-orange-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From family portraits to wedding catering, see why families and businesses across Missouri trust Dora's Dishes for their most important moments.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{clientsCount}+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">5-Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{eventsCount}+</div>
              <div className="text-gray-600">Events Catered</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-200" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image_url || `https://images.unsplash.com/photo-1494790108755-2616c57c93e4?w=100&h=100&fit=crop`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} - {testimonial.location}</div>
                  <div className="text-xs text-orange-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
