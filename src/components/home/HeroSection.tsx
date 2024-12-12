const HeroSection = () => {
    return (
      <div className="relative pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-[#0052FF]">
                ✨ Powered by Turnkey Technology
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Manage Your Family's
              <span className="text-[#0052FF]"> Digital Assets</span>
              <br />Together
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Secure, simple, and smart wallet management for the whole family. 
              Set allowances, monitor spending, and teach financial responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-[#0052FF] text-white px-8 py-4 rounded-lg hover:bg-[#0039B3] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                Create Family Wallet
              </button>
              <button className="w-full sm:w-auto border-2 border-[#0052FF] text-[#0052FF] px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium">
                Watch Demo →
              </button>
            </div>
            <div className="mt-12 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Active Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$10M+</div>
                <div className="text-gray-600">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;