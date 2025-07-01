
import { Mail, Gift, Camera, ChefHat } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32">
          <Camera className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32">
          <ChefHat className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24">
          <Gift className="w-full h-full" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-medium">Exclusive Subscriber Benefits</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Dora's Dishes Family
          </h2>
          
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Get exclusive recipes, photography tips, behind-the-scenes stories, and early access to new collections. 
            Plus, receive a free recipe e-book when you subscribe!
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-orange-100">
              No spam, ever. Unsubscribe at any time. Your email is safe with us.
            </p>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Welcome to the family!</h3>
            <p className="text-orange-100">
              Check your email for your free recipe e-book and stay tuned for exclusive content!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Photography Tips</h4>
            <p className="text-sm text-orange-100">Weekly tips from 15+ years of experience</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Exclusive Recipes</h4>
            <p className="text-sm text-orange-100">Traditional and fusion recipes from Dora's kitchen</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Early Access</h4>
            <p className="text-sm text-orange-100">First to know about new collections and services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
