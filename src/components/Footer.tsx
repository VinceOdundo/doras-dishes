
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-orange-400">DORA'S DISHES</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              From Siaya to Missouri - capturing life's beautiful moments and creating extraordinary culinary experiences. Photography and cuisine that tells stories.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Photography Services */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Photography</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Portrait Sessions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food Photography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canvas Prints</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Commissions</a></li>
            </ul>
          </div>

          {/* Culinary Services */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Culinary Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cooking Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipe Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookbook Pre-Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Special Events</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Dora's Dishes - Dora Abong'o. All rights reserved. | Siaya, Kenya to Missouri, USA
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Secure Payments</span>
            <img src="https://via.placeholder.com/40x25/ff6b35/ffffff?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25/ff6b35/ffffff?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25/ff6b35/ffffff?text=PP" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
