
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Camera, ChefHat, Heart, MapPin, Award, Users, Globe, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Camera, number: "300K+", label: "Photos Captured" },
    { icon: ChefHat, number: "15+", label: "Years Cooking" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "25+", label: "Events Catered" }
  ];

  const timeline = [
    {
      year: "1980s",
      location: "Siaya, Kenya",
      title: "Roots in Kenya",
      description: "Born and raised in Siaya, Kenya, Dora learned traditional Luo cooking from her grandmother and developed her eye for capturing life's beautiful moments."
    },
    {
      year: "2000s",
      location: "Nairobi, Kenya",
      title: "Photography Passion",
      description: "Moved to Nairobi where she honed her photography skills, capturing the vibrant street life, wildlife, and cultural celebrations of Kenya."
    },
    {
      year: "2010",
      location: "Missouri, USA",
      title: "New Horizons",
      description: "Relocated to Missouri, bringing her culinary traditions while embracing American cuisine. Started documenting her journey through photography."
    },
    {
      year: "2020",
      location: "Missouri, USA",
      title: "Dora's Dishes Born",
      description: "Launched her brand combining her two passions - photography and cooking - to share her unique cultural perspective with the world."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Meet Dora Abong'o
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                A passionate photographer and culinary artist whose journey from Siaya, Kenya to Missouri, USA has created a unique fusion of cultures, flavors, and visual storytelling.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Siaya, Kenya → Missouri, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Family & Culture</span>
                </div>
              </div>
              <blockquote className="text-lg italic text-gray-600 border-l-4 border-orange-600 pl-6">
                "Food and photography are my languages of love. Through them, I share the beauty of my heritage and the warmth of my new home."
              </blockquote>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c57c93e4?w=600&h=600&fit=crop"
                alt="Dora Abong'o"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years of Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">From the shores of Lake Victoria to the heart of Missouri</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-orange-600 font-bold text-sm mb-2">{event.year}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-sm">{event.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Philosophy</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Capturing Moments</h3>
                    <p className="text-gray-600">Every photograph tells a story. I believe in capturing the authentic emotions and beauty in everyday moments, from family gatherings to the perfect dish.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Culinary Heritage</h3>
                    <p className="text-gray-600">Food connects us to our roots and brings people together. I create dishes that honor tradition while embracing innovation and new flavors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Bridge</h3>
                    <p className="text-gray-600">Living between two worlds has given me a unique perspective. I love sharing the beauty of African culture while celebrating my American experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop"
                alt="Cooking"
                className="w-full h-60 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=400&fit=crop"
                alt="Photography"
                className="w-full h-60 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family & Values */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Family & Values</h2>
          <p className="text-xl text-orange-100 mb-8">
            At the heart of everything I do is family. Whether I'm cooking for a celebration or capturing precious moments, 
            I bring the same love and care that I would for my own family. Every client becomes part of the Dora's Dishes family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Love</h3>
              <p className="text-orange-100">Every dish is made with love, every photo taken with care</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-orange-100">Building connections through food and shared experiences</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Heritage</h3>
              <p className="text-orange-100">Honoring traditions while embracing new possibilities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
