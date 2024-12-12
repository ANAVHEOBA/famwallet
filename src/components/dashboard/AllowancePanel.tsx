import { useState } from 'react';

interface AllowanceSettings {
  memberId: string;
  name: string;
  avatar: string;
  currentAllowance: number;
  frequency: 'weekly' | 'monthly';
  nextDate: string;
  status: 'active' | 'paused';
}

const mockAllowances: AllowanceSettings[] = [
  {
    memberId: '1',
    name: 'Mike Doe',
    avatar: '👦',
    currentAllowance: 50,
    frequency: 'weekly',
    nextDate: '2024-03-22',
    status: 'active'
  },
  {
    memberId: '2',
    name: 'Sarah Doe',
    avatar: '👧',
    currentAllowance: 75,
    frequency: 'weekly',
    nextDate: '2024-03-22',
    status: 'paused'
  }
];

const AllowancePanel = () => {
  const [allowances] = useState<AllowanceSettings[]>(mockAllowances);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Allowances</h3>
        <button className="text-sm text-[#0052FF] hover:text-[#0039B3] font-medium">
          Manage
        </button>
      </div>

      {/* Allowance Cards */}
      <div className="space-y-4">
        {allowances.map((allowance) => (
          <div 
            key={allowance.memberId}
            className="p-4 rounded-xl border border-gray-100 hover:border-[#0052FF] transition-colors duration-200"
          >
            {/* Member Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-xl">
                  {allowance.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{allowance.name}</h4>
                  <p className="text-sm text-gray-500 capitalize">{allowance.frequency}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${
                allowance.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {allowance.status}
              </div>
            </div>

            {/* Allowance Amount */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">Current Allowance</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${allowance.currentAllowance}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  -
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  +
                </button>
              </div>
            </div>

            {/* Next Payment */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Next Payment</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(allowance.nextDate).toLocaleDateString()}
                  </p>
                </div>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  allowance.status === 'active'
                    ? 'bg-[#0052FF] text-white hover:bg-[#0039B3]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}>
                  {allowance.status === 'active' ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Allowance */}
        <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-[#0052FF] hover:text-[#0052FF] transition-colors duration-200">
          + Set Up New Allowance
        </button>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Monthly</p>
            <p className="text-xl font-bold text-[#0052FF]">$500</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Active Plans</p>
            <p className="text-xl font-bold text-[#0052FF]">
              {allowances.filter(a => a.status === 'active').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllowancePanel;