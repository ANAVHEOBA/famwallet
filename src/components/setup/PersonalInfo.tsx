import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

interface PersonalInfoProps {
  onNext: () => void;
}

const PersonalInfo = ({ onNext }: PersonalInfoProps) => {
  const { setUserEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    setUserEmail(email);
    onNext();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0052FF] focus:ring-[#0052FF]"
            placeholder="Enter your email"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-[#0052FF] text-white py-3 rounded-lg hover:bg-[#0039B3] transition-all duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;