const FamilySetup = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Family Setup</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Family Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
                placeholder="Enter family name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052FF] focus:border-transparent">
                <option value="parent">Parent</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              onClick={onBack}
              className="w-1/2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 bg-[#0052FF] text-white py-3 rounded-lg hover:bg-[#0039B3] transition-all duration-200"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default FamilySetup;