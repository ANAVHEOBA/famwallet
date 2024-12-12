import { useState } from 'react';

const WalletOverview = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Family Wallet</h2>
          <p className="text-gray-600">Manage your family's assets</p>
        </div>
        
        {/* Network Selector */}
        <select 
          value={selectedNetwork}
          onChange={(e) => setSelectedNetwork(e.target.value)}
          className="mt-4 md:mt-0 px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
        >
          <option value="Ethereum">Ethereum</option>
          <option value="Polygon">Polygon</option>
        </select>
      </div>

      {/* Balance and Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Balance Card */}
        <div className="bg-[#0052FF] text-white p-6 rounded-xl">
          <p className="text-sm font-medium text-blue-100">Total Balance</p>
          <h3 className="text-2xl font-bold mt-2">$25,420.69</h3>
          <p className="text-sm text-blue-100 mt-1">+2.5% from last week</p>
        </div>

        {/* Quick Actions */}
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="text-center">
                <span className="block text-2xl mb-1">↑</span>
                <span className="text-sm font-medium text-gray-700">Send</span>
              </div>
            </button>

            <button className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="text-center">
                <span className="block text-2xl mb-1">↓</span>
                <span className="text-sm font-medium text-gray-700">Receive</span>
              </div>
            </button>

            <button className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="text-center">
                <span className="block text-2xl mb-1">👥</span>
                <span className="text-sm font-medium text-gray-700">Add Member</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Authentication Status */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Connected with Turnkey</span>
          </div>
          <button className="text-sm text-[#0052FF] hover:text-[#0039B3] font-medium">
            Manage Auth →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;