import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { SQUAD_MATCHES, CURRENT_USER } from '../constants';
import { Check, X, Info, Sparkles, MessageCircle } from 'lucide-react';

const SquadMatching: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
       <div className="mb-8">
           <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 flex items-center gap-1">
                    <Sparkles size={12} /> AI Powered
                </span>
           </div>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Capstone Squad Match</h1>
           <p className="text-slate-500 mt-1 max-w-2xl">
               We've analyzed your skill profile against 120 peers in your cohort. 
               Here are your top complementary matches for the upcoming Finance Capstone Project.
           </p>
       </div>

       <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {SQUAD_MATCHES.map((match) => (
                <div key={match.id} className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row">
                    {/* Left: Profile & Reason */}
                    <div className="p-8 md:w-5/12 flex flex-col justify-between bg-slate-50/50 border-b md:border-b-0 md:border-r border-gray-100">
                        <div>
                             <div className="flex items-center gap-4 mb-6">
                                <img src={match.user.avatar} alt={match.user.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{match.user.name}</h3>
                                    <p className="text-sm text-slate-500 font-medium">{match.user.specialization}</p>
                                    <div className="mt-1 flex items-center gap-2">
                                        <div className="text-xs font-bold text-white bg-brand-500 px-2 py-0.5 rounded-full">
                                            {match.compatibilityScore}% Match
                                        </div>
                                    </div>
                                </div>
                             </div>
                             
                             <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
                                <div className="flex gap-2 items-start">
                                    <Info size={16} className="text-indigo-600 mt-0.5 shrink-0" />
                                    <p className="text-sm text-indigo-900 leading-snug font-medium">
                                        "{match.reason}"
                                    </p>
                                </div>
                             </div>

                             <div className="space-y-3">
                                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Modules Completed</h4>
                                 <div className="flex flex-wrap gap-2">
                                     {['Statistics', 'Adv. Python', 'Tableau'].map(m => (
                                         <span key={m} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-semibold text-slate-600">
                                             {m}
                                         </span>
                                     ))}
                                 </div>
                             </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                                <Check size={18} /> Connect
                            </button>
                            <button className="px-4 py-3 bg-white border border-gray-200 text-slate-400 rounded-xl hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Radar Chart */}
                    <div className="p-6 md:w-7/12 flex flex-col relative">
                        <div className="absolute top-6 right-6 flex gap-4 text-xs font-semibold">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                                You
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                                {match.user.name}
                            </div>
                        </div>

                        <div className="flex-1 min-h-[300px] w-full mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={match.skills}>
                                    <PolarGrid stroke="#e2e8f0" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar
                                        name="You"
                                        dataKey="A"
                                        stroke="#0f172a"
                                        strokeWidth={2}
                                        fill="#0f172a"
                                        fillOpacity={0.1}
                                    />
                                    <Radar
                                        name={match.user.name}
                                        dataKey="B"
                                        stroke="#0ea5e9"
                                        strokeWidth={2}
                                        fill="#0ea5e9"
                                        fillOpacity={0.3}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-2">
                            Comparing skill assessments from Assignments 1-5
                        </p>
                    </div>
                </div>
            ))}
       </div>
    </div>
  );
};

export default SquadMatching;
