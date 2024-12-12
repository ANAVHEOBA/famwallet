import { useState } from 'react';

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  balance: number;
  avatar: string;
  status: 'active' | 'pending';
  allowance: number;
}

const mockMembers: FamilyMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Parent',
    balance: 15000,
    avatar: '👨',
    status: 'active',
    allowance: 0,
  },
  {
    id: '2',
    name: 'Jane Doe',
    role: 'Parent',
    balance: 8000,
    avatar: '👩',
    status: 'active',
    allowance: 0,
  },
  {
    id: '3',
    name: 'Mike Doe',
    role: 'Child',
    balance: 200,
    avatar: '👦',
    status: 'active',
    allowance: 50,
  },
];

const FamilyMembers = () => {
  const [members] = useState<FamilyMember[]>(mockMembers);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Family Members</h3>
        <button className="text-sm text-[#0052FF] hover:text-[#0039B3] font-medium flex items-center">
          View All
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div 
            key={member.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200"
          >
            {/* Member Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-2xl">
                {member.avatar}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>

            {/* Balance & Status */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="font-medium text-gray-900">${member.balance.toLocaleString()}</p>
                {member.allowance > 0 && (
                  <p className="text-sm text-gray-500">
                    Allowance: ${member.allowance}/week
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  member.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <span className="text-sm text-gray-500 capitalize">{member.status}</span>
              </div>

              {/* Actions */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Add Member Button */}
        <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-[#0052FF] hover:text-[#0052FF] transition-colors duration-200">
          + Add Family Member
        </button>
      </div>
    </div>
  );
};

export default FamilyMembers;