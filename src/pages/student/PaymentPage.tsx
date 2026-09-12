import React from 'react';
import { PAYMENTS } from '../../lib/mockData';
import { CreditCard, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PaymentPage() {
  const totalPaid = PAYMENTS.filter(p => p.status === 'Paid').reduce((acc, curr) => acc + curr.amount, 0);
  const totalPending = PAYMENTS.filter(p => p.status === 'Pending').reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Fee Payments</h1>
          <p className="text-slate-400 mt-1">Manage your tuition and hostel fees</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-dark p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
          <p className="text-emerald-400 font-medium mb-1">Total Paid (Sem 6)</p>
          <p className="text-4xl font-bold text-white">₹{totalPaid.toLocaleString()}</p>
        </div>
        <div className="glass-dark p-6 rounded-3xl border border-rose-500/20 bg-rose-500/5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-rose-500/20 to-transparent"></div>
          <p className="text-rose-400 font-medium mb-1">Total Pending</p>
          <div className="flex justify-between items-center">
            <p className="text-4xl font-bold text-white">₹{totalPending.toLocaleString()}</p>
            {totalPending > 0 && (
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30">
                Pay Now
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10 mt-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <CreditCard className="w-5 h-5 mr-2 text-indigo-400" />
          Payment History
        </h3>
        
        <div className="space-y-4">
          {PAYMENTS.map(payment => (
            <div key={payment.id} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${payment.status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                  {payment.status === 'Paid' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{payment.description}</h4>
                  <p className="text-slate-400 text-sm">Due Date: {payment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white mb-1">₹{payment.amount.toLocaleString()}</p>
                {payment.status === 'Paid' ? (
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center justify-end w-full">
                    <Download className="w-4 h-4 mr-1" />
                    {payment.receipt}
                  </button>
                ) : (
                  <span className="text-sm font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded">Pending</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
