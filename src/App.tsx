import React, { useState } from 'react';
import { LayoutDashboard, ShieldCheck, BarChart3, CloudLightning as LightningBolt, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              TechTrinity
              (By Sanya)
            </a>
            
            <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none`}>
              <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 md:p-0">
                <li>
                  <a 
                    href="#" 
                    className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-md font-medium active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#features" 
                    className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-md font-medium active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-md font-medium active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-md font-medium active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 md:p-0 text-gray-700 hover:text-blue-600 hover:bg-blue-50 md:hover:bg-transparent rounded-md font-medium active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              
              <div className="flex md:hidden flex-col gap-2 p-4 border-t border-gray-100">
                <button className="w-full px-4 py-2 text-black-600 border border-blue-900 rounded-md hover:bg-blue-50 active:scale-95 transition-all">
                  Log In
                </button>
                <button className="w-full px-4 py-2 text-black bg-blue-600 rounded-md hover:bg-blue-900 active:scale-95 transition-all">
                  Sign Up
                </button>
              </div>
            </nav>
            
            <div className="hidden md:flex gap-4">
              <button className="px-4 py-2 text-black -600 border border-blue-600 rounded-md hover:bg-blue-50 active:scale-95 transition-all">
                Log In
              </button>
              <button className="px-4 py-2 text-black  bg-blue -600 rounded-md hover:bg-blue-700 active:scale-95 transition-all">
                Sign Up
              </button>
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-md active:scale-95 transition-all"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-transparent">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Innovative Digital Solutions for Your Business
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-8">
                  Transform your business with our cutting-edge technology solutions. We help companies like yours achieve digital excellence through innovative strategies and powerful tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  
                  <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 text-lg font-medium active:scale-95 transition-all">
                    Get Started
                  </button>
                  <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 text-lg font-medium active:scale-95 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 active:scale-100 transition-all duration-500">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Team collaborating on digital solutions"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg">Discover how our solutions can transform your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg--50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <LayoutDashboard size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intuitive Dashboard</h3>
                <p className="text-gray-600">Access all your data from a single, easy-to-use dashboard designed for maximum productivity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">Keep your data safe with our enterprise-grade security features and compliance protocols.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">Gain valuable insights with our advanced analytics tools and data visualization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <LightningBolt size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Experience blazing fast performance with our optimized infrastructure and caching systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 text-lg">Trusted by businesses worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-6">"TechTrinity transformed our business operations. Their solutions helped us increase productivity by 35% in just three months."</p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="John Smith" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-gray-500 text-sm">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-6">"The analytics platform provided by TechTrinity gave us insights we never had before. Our decision-making is now data-driven and effective."</p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sanya Gupta" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold">Sanya Gupta</h4>
                    <p className="text-gray-500 text-sm">CTO, InnovateCo</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-6">"Their customer support is outstanding. Any issue we had was resolved quickly and efficiently. Truly a partner, not just a vendor."</p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Michael Wong" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold">Michael Wong</h4>
                    <p className="text-gray-500 text-sm">COO, GlobalTech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl opacity-90">Get in touch with our team to discover how Tech can help your business thrive in the digital landscape.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-red-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      rows={4}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechTrinity</h3>
              <p className="text-gray-400 mb-4">Innovative digital solutions for modern businesses. Transforming ideas into powerful realities.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your e-mail"
                  className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left md:flex md:justify-between">
            <p className="text-gray-400">© 2025 TechTrinity. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white active:scale-95 transition-all">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;