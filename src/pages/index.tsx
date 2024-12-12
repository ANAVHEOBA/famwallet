import { useRouter } from 'next/router';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const router = useRouter();

  const { login } = useAuth();
  const handleGetStarted = () => {
    router.push('/connect'); // Remove login() and just route to connect page
  };

  const steps = [
    {
      number: 1,
      title: "Create Family Wallet",
      description: "Set up a secure wallet for your entire family using Turnkey's technology",
      icon: "🏦"
    },
    {
      number: 2,
      title: "Add Family Members",
      description: "Invite your family members and set up their access levels",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      number: 3,
      title: "Manage Assets",
      description: "Set allowances, monitor transactions, and manage digital assets together",
      icon: "💰"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      
      {/* Social Proof Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-900 mb-8">
              Trusted by 1000+ Families Worldwide
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Secured by</span>
                <span className="font-semibold text-[#0052FF]">Turnkey</span>
              </div>
              <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#0052FF]">$10M+</p>
                  <p className="text-sm text-gray-600">Assets Managed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#0052FF]">99.9%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#0052FF] group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
          <button 
      onClick={handleGetStarted}
      className="bg-[#0052FF] text-white px-8 py-4 rounded-lg hover:bg-[#0039B3] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      Get Started Now →
    </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-semibold mb-4">FamWallet</h4>
              <p className="text-gray-600">Secure family wallet management powered by Turnkey</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <p className="text-gray-600 hover:text-[#0052FF] cursor-pointer">Features</p>
                <p className="text-gray-600 hover:text-[#0052FF] cursor-pointer">How it Works</p>
                <p className="text-gray-600 hover:text-[#0052FF] cursor-pointer">Support</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-600">support@famwallet.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            © 2024 FamWallet. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}