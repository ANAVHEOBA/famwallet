const WalletSetup = ({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) => {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Wallet</h2>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">
            We'll help you create a secure wallet using Turnkey technology. This process is quick and simple.
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium mb-2">Security Setup</h3>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email" className="rounded text-[#0052FF]" />
              <label htmlFor="email" className="text-sm text-gray-600">
                Enable Email Authentication
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input type="checkbox" id="passkey" className="rounded text-[#0052FF]" />
              <label htmlFor="passkey" className="text-sm text-gray-600">
                Enable Passkey (Recommended)
              </label>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={onBack}
            className="w-1/2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            Back
          </button>
          <button
            onClick={onComplete}
            className="w-1/2 bg-[#0052FF] text-white py-3 rounded-lg hover:bg-[#0039B3] transition-all duration-200"
          >
            Create Wallet
          </button>
        </div>
      </div>
    );
  };
  
  export default WalletSetup;