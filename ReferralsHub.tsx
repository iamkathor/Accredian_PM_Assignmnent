import React from 'react';
import { REFERRALS } from '../constants';
import { Briefcase, MapPin, Clock, UserCheck, ArrowRight, ShieldCheck, Filter } from 'lucide-react';

const ReferralsHub: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Referrals Hub</h1>
           <p className="text-slate-500 mt-1">Get introduced by alumni and peers with verified performance records.</p>
        </div>
        <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700 shadow-sm">
                <Filter size={16} />
                Filters
             </button>
             <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 shadow-lg shadow-slate-900/20">
                Post a Referral
             </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REFERRALS.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-50 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-4 relative">
                <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center text-xl font-bold text-slate-700">
                    {job.companyName.charAt(0)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
                    Active
                </span>
            </div>

            {/* Job Info */}
            <div className="mb-6 relative">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{job.role}</h3>
                <p className="text-slate-500 font-medium text-sm">{job.companyName}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} /> {job.postedDate}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-wide px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Referrer Card - The Trust Signal */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative group-hover:bg-brand-50/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Referred By</span>
                    {job.referrer.role === 'Alumni' && (
                         <span className="flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded border border-purple-200">
                            <ShieldCheck size={10} /> Alumni
                         </span>
                    )}
                </div>
                
                <div className="flex items-center gap-3">
                    <img src={job.referrer.avatar} alt={job.referrer.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div>
                        <p className="text-sm font-bold text-slate-900 flex items-center gap-1">
                            {job.referrer.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                Score: {job.referrer.performanceScore}
                            </div>
                            <span className="text-xs text-slate-400">Top 10%</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-white border border-gray-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                <UserCheck size={18} />
                Request Introduction
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralsHub;
