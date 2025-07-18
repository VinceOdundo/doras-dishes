const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border border-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-orange-400">DORA'S DISHES</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              From Siaya, Kenya to Missouri, USA - capturing life's beautiful moments and creating extraordinary culinary experiences. Photography and cuisine that tells stories, bridges cultures, and creates lasting memories.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">hello@dorasdishes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(573) 555-DORA</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Missouri, USA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="group w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-orange-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-orange-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="group w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-orange-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="group w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-orange-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Photography Services */}
          <div>
            <h4 className="font-bold mb-6 text-orange-400 text-lg">Photography</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Portrait Sessions
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Food Photography
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Event Coverage
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Canvas Prints
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Digital Downloads
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Custom Commissions
              </a></li>
            </ul>
          </div>

          {/* Culinary Services */}
          <div>
            <h4 className="font-bold mb-6 text-orange-400 text-lg">Culinary Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Custom Catering
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Cooking Classes
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Personal Chef Service
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Recipe Development
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Cookbook Pre-Order
              </a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors duration-200 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-400 rounded-full"></span>Special Events
              </a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-bold text-orange-400 mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-6">Get updates on new photography collections, recipes, and special events</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2024 Dora's Dishes - Dora Abong'o. All rights reserved. | Bridging Cultures Through Art & Cuisine
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 text-sm">Secure Payments</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
              <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
              <div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;