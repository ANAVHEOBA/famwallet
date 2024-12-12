import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import SetupProgress from '@/components/setup/SetupProgress';
import PersonalInfo from '@/components/setup/PersonalInfo';
import FamilySetup from '@/components/setup/FamilySetup';
import WalletSetup from '@/components/setup/WalletSetup';

export default function Setup() {
  const router = useRouter();
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);

  const handleComplete = () => {
    login();
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <SetupProgress currentStep={currentStep} />
        
        {currentStep === 1 && (
          <PersonalInfo onNext={() => setCurrentStep(2)} />
        )}
        
        {currentStep === 2 && (
          <FamilySetup 
            onNext={() => setCurrentStep(3)} 
            onBack={() => setCurrentStep(1)} 
          />
        )}
        
        {currentStep === 3 && (
          <WalletSetup 
            onComplete={handleComplete}
            onBack={() => setCurrentStep(2)} 
          />
        )}
      </div>
    </main>
  );
}