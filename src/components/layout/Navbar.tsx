import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold text-[#0052FF]">FamWallet</span>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-[#0052FF] transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#0052FF] transition">How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-[#0052FF] transition">About</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#0052FF] px-4 py-2 hover:text-[#0039B3] transition">
              Sign In
            </button>
            <button className="bg-[#0052FF] text-white px-6 py-2 rounded-lg hover:bg-[#0039B3] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;