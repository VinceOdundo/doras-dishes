
import { Camera, ChefHat, Users, Award, MapPin, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const Stats = () => {
  const [counters, setCounters] = useState({
    photos: 0,
    clients: 0,
    events: 0,
    years: 0
  });

  const finalStats = {
    photos: 300000,
    clients: 500,
    events: 25,
    years: 15
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const increment = {
      photos: finalStats.photos / steps,
      clients: finalStats.clients / steps,
      events: finalStats.events / steps,
      years: finalStats.years / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        photos: Math.floor(increment.photos * currentStep),
        clients: Math.floor(increment.clients * currentStep),
        events: Math.floor(increment.events * currentStep),
        years: Math.floor(increment.years * currentStep)
      });

      if (currentStep >= steps) {
        setCounters(finalStats);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Camera,
      number: counters.photos.toLocaleString() + "+",
      label: "Photos Captured",
      description: "From Kenya to Missouri",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      number: counters.clients + "+",
      label: "Happy Clients",
      description: "Families & Businesses",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: ChefHat,
      number: counters.events + "+",
      label: "Events Catered",
      description: "Weddings to Corporate",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Calendar,
      number: counters.years + "+",
      label: "Years Experience",
      description: "Professional Excellence",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      icon: MapPin,
      title: "Two Cultures, One Vision",
      description: "Bridging Siaya, Kenya and Missouri, USA through food and photography"
    },
    {
      icon: Award,
      title: "Community Recognition",
      description: "Featured in local Missouri publications for cultural cuisine"
    },
    {
      icon: Camera,
      title: "Professional Portfolio",
      description: "Over 300,000 photographs spanning people, places, food, and wildlife"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Numbers Tell Our <span className="text-orange-600">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings in Siaya to serving families across Missouri, 
            here's the impact we've made together.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                
                <p className="text-gray-500 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-orange-700 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
