import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import WalletOverview from '@/components/dashboard/WalletOverview';
import FamilyMembers from '@/components/dashboard/FamilyMembers';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import AllowancePanel from '@/components/dashboard/AllowancePanel';

export default function Dashboard() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Comment this out during development or set isAuthenticated to true by default
    // if (!isAuthenticated) {
    //   router.push('/');
    // }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WalletOverview />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <FamilyMembers />
              <RecentTransactions />
            </div>
            <div className="space-y-8">
              <AllowancePanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}