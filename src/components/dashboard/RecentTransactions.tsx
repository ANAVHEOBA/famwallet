import { useState } from 'react';

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'allowance';
  amount: number;
  member: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  description: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'allowance',
    amount: 50,
    member: 'Mike Doe',
    status: 'completed',
    date: '2024-03-15',
    description: 'Weekly Allowance'
  },
  {
    id: '2',
    type: 'send',
    amount: 100,
    member: 'Jane Doe',
    status: 'completed',
    date: '2024-03-14',
    description: 'Grocery Shopping'
  },
  {
    id: '3',
    type: 'receive',
    amount: 1000,
    member: 'John Doe',
    status: 'completed',
    date: '2024-03-13',
    description: 'Salary Deposit'
  },
  {
    id: '4',
    type: 'send',
    amount: 25,
    member: 'Mike Doe',
    status: 'pending',
    date: '2024-03-13',
    description: 'School Supplies'
  }
];

const RecentTransactions = () => {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return '↑';
      case 'receive':
        return '↓';
      case 'allowance':
        return '🔄';
      default:
        return '•';
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
        <div className="flex items-center space-x-4">
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0052FF]">
            <option value="all">All Types</option>
            <option value="send">Send</option>
            <option value="receive">Receive</option>
            <option value="allowance">Allowance</option>
          </select>
          <button className="text-sm text-[#0052FF] hover:text-[#0039B3] font-medium flex items-center">
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200"
          >
            {/* Transaction Icon & Info */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-xl">
                {getTransactionIcon(transaction.type)}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{transaction.description}</h4>
                <p className="text-sm text-gray-500">To: {transaction.member}</p>
              </div>
            </div>

            {/* Amount & Status */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'receive' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {transaction.type === 'receive' ? '+' : '-'}${transaction.amount}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(transaction.status)}`}></div>
                <span className="text-sm text-gray-500 capitalize">{transaction.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No transactions found
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;