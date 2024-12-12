import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import ConnectOptions from '@/components/connect/ConnectOptions';

export default function Connect() {
  const router = useRouter();
  const { login } = useAuth();

  const handleWalletConnection = (type: 'new' | 'existing') => {
    if (type === 'new') {
      // For new wallet, go to setup flow
      router.push('/setup');
    } else {
      // For existing wallet, login and go to dashboard
      login();
      router.push('/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <ConnectOptions onConnect={handleWalletConnection} />
      </div>
    </main>
  );
}