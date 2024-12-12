import { ShieldCheckIcon, UserGroupIcon, CreditCardIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: "Secure Wallet Creation",
    description: "Create non-custodial wallets with military-grade encryption and multi-factor authentication.",
    icon: ShieldCheckIcon,
    color: "bg-blue-50"
  },
  {
    title: "Family Management",
    description: "Add members, set roles, and manage permissions with our intuitive dashboard.",
    icon: UserGroupIcon,
    color: "bg-green-50"
  },
  {
    title: "Smart Allowances",
    description: "Set up recurring allowances and spending limits with automated transfers.",
    icon: CreditCardIcon,
    color: "bg-purple-50"
  },
  {
    title: "Activity Monitoring",
    description: "Track transactions and monitor spending patterns in real-time.",
    icon: ChartBarIcon,
    color: "bg-orange-50"
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Family Finances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make digital asset management simple and secure for every family member.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
                <feature.icon className="h-6 w-6 text-[#0052FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-8 left-8 right-8 h-1 bg-[#0052FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;