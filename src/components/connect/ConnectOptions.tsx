import { useTurnkey } from '../../context/TurnkeyContext';
import { useAuth } from '../../context/AuthContext';

interface ConnectOptionsProps {
  onConnect: (type: 'new' | 'existing') => void;
}

const ConnectOptions = ({ onConnect }: ConnectOptionsProps) => {
  const { connectExistingWallet } = useTurnkey();
  const { login } = useAuth();

  const handleExistingConnect = async () => {
    try {
      await connectExistingWallet();
      login();
      onConnect('existing');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };
    return (
      <div className="max-w-md mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#0052FF]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Connect Your Wallet
          </h1>
          <p className="text-gray-600">
            Choose how you want to manage your family's digital assets
          </p>
        </div>
  
        {/* Connection Options */}
        <div className="space-y-4">
        <button 
  onClick={() => onConnect('new')}  // This will go to setup
  className="w-full p-6 border-2 border-[#0052FF] rounded-xl hover:bg-blue-50 transition-all duration-200 text-left group"
>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Create New Wallet</h3>
              <span className="text-2xl">🏦</span>
            </div>
            <p className="text-gray-600 text-sm">
              Set up a new family wallet with Turnkey security
            </p>
          </button>
  
          <button 
  onClick={() => onConnect('existing')}  // This will go to dashboard
  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-[#0052FF] transition-all duration-200 text-left group"
>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Connect Existing Wallet</h3>
              <span className="text-2xl">🔗</span>
            </div>
            <p className="text-gray-600 text-sm">
              Use your existing wallet to manage family assets
            </p>
          </button>
        </div>
  
        {/* Security Note */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            🔒 Secured by Turnkey Technology - Your assets are always under your control
          </p>
        </div>
      </div>
    );
  };
  
  export default ConnectOptions;