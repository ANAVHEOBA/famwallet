const PersonalInfo = ({ onNext }: { onNext: () => void }) => {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Personal Information</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#0052FF] text-white py-3 rounded-lg hover:bg-[#0039B3] transition-all duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    );
  };
  
  export default PersonalInfo;