
import { Star, Quote, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Client",
      location: "Columbia, MO",
      image: "https://images.unsplash.com/photo-1494790108755-2616c57c93e4?w=100&h=100&fit=crop",
      text: "Dora's photography captured our wedding day perfectly! Her ability to blend cultural traditions with modern aesthetics is incredible. The food for our reception was absolutely divine - our guests are still talking about it!",
      rating: 5,
      service: "Wedding Photography & Catering"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Corporate Client",
      location: "Kansas City, MO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      text: "We hired Dora for our company's annual event. Her professional photography skills and the authentic African cuisine she provided made our event unforgettable. Highly recommend her services!",
      rating: 5,
      service: "Event Photography & Catering"
    },
    {
      id: 3,
      name: "Lisa Thompson",
      role: "Family Portrait Client",
      location: "St. Louis, MO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Dora has such a warm personality that made our family photo session so comfortable. She captured beautiful moments of our children and the prints we ordered are gallery-quality!",
      rating: 5,
      service: "Family Photography"
    },
    {
      id: 4,
      name: "David Ochieng",
      role: "Cooking Class Student",
      location: "Jefferson City, MO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Learning to cook traditional Luo dishes from Dora was an amazing cultural experience. She's not just a great cook, but also a wonderful teacher who shares the stories behind each recipe.",
      rating: 5,
      service: "Cooking Classes"
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "Canvas Print Customer",
      location: "Springfield, MO",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      text: "I purchased several canvas prints of Dora's Kenya wildlife photography for my office. The quality is exceptional and the images bring such life and energy to the space!",
      rating: 5,
      service: "Canvas Prints"
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Personal Chef Client",
      location: "Columbia, MO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      text: "Having Dora as our personal chef for weekly meal prep has been life-changing. Her fusion of African and American cuisines brings excitement to our dinner table every night.",
      rating: 5,
      service: "Personal Chef Services"
    }
  ];

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
              <div className="text-3xl font-bold text-orange-600">500+</div>
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
              <div className="text-3xl font-bold text-orange-600">25+</div>
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
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
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
