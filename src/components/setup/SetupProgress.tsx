const SetupProgress = ({ currentStep }: { currentStep: number }) => {
    return (
      <div className="mb-8">
        <div className="flex justify-center items-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step <= currentStep ? 'bg-[#0052FF] text-white' : 'bg-gray-100 text-gray-400'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 mx-2 ${
                  step < currentStep ? 'bg-[#0052FF]' : 'bg-gray-100'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4 text-gray-600">
          Step {currentStep} of 3
        </div>
      </div>
    );
  };
  
  export default SetupProgress;