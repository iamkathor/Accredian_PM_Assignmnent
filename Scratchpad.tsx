import React from 'react';
import { Mic, MicOff, Video, PhoneOff, Save, Share2, Play, Layout as LayoutIcon, Eraser, Pen } from 'lucide-react';

const Scratchpad: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300">
      {/* Top Bar - Call Controls */}
      <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  <img src="https://picsum.photos/seed/arjun/100/100" className="w-8 h-8 rounded-full border-2 border-slate-900" alt="You" />
                  <img src="https://picsum.photos/seed/riya/100/100" className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Riya" />
               </div>
               <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-medium text-white">Live Session with Riya S.</span>
                   <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">00:14:32</span>
               </div>
          </div>

          <div className="flex items-center gap-2">
               <button className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white"><Mic size={18} /></button>
               <button className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white"><Video size={18} /></button>
               <button className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white px-4 flex items-center gap-2">
                  <PhoneOff size={18} /> <span className="text-sm font-bold">Leave</span>
               </button>
          </div>

          <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-brand-600 text-white hover:bg-brand-500">
                  <Save size={14} /> Save to Portfolio
              </button>
          </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
          {/* Code Editor Pane (Mock) */}
          <div className="w-1/2 border-r border-slate-800 flex flex-col">
              <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4">
                  <div className="flex gap-4 text-xs font-mono">
                      <span className="text-brand-400 border-b border-brand-400 pb-2.5">preprocessing.py</span>
                      <span className="text-slate-500 cursor-pointer hover:text-slate-300">model.py</span>
                  </div>
                  <Play size={14} className="text-green-500 cursor-pointer hover:text-green-400" />
              </div>
              <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-sm overflow-y-auto">
                  <pre className="text-blue-300">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></pre>
                  <pre className="text-blue-300">import <span className="text-white">numpy</span> as <span className="text-white">np</span></pre>
                  <br/>
                  <pre className="text-gray-500"># Load dataset</pre>
                  <pre className="text-white">df = pd.read_csv(<span className="text-orange-300">'credit_card_transactions.csv'</span>)</pre>
                  <br/>
                  <pre className="text-gray-500"># Riya is typing...</pre>
                  <pre className="text-white">df[<span className="text-orange-300">'Amount'</span>] = np.log1p(df[<span className="text-orange-300">'Amount'</span>])</pre>
                  <pre className="text-white">df.fillna(0, inplace=<span className="text-blue-300">True</span>)</pre>
                  <br/>
                  <pre className="text-purple-400">def <span className="text-yellow-300">normalize_features</span><span className="text-white">(data):</span></pre>
                  <pre className="text-white pl-4">return (data - data.mean()) / data.std()</pre>
              </div>
          </div>

          {/* Whiteboard Pane (Mock) */}
          <div className="w-1/2 bg-slate-100 relative overflow-hidden">
               <div className="absolute top-4 left-4 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-md border border-gray-200">
                  <button className="p-2 hover:bg-gray-100 rounded text-slate-700 active:text-brand-600"><Pen size={18} /></button>
                  <button className="p-2 hover:bg-gray-100 rounded text-slate-700"><Eraser size={18} /></button>
                  <button className="p-2 hover:bg-gray-100 rounded text-slate-700"><LayoutIcon size={18} /></button>
               </div>
               
               {/* Mock Drawings */}
               <svg className="w-full h-full pointer-events-none">
                   {/* Hand drawn arrow */}
                   <path d="M100 100 Q 150 50 200 100" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round" />
                   <path d="M190 85 L 200 100 L 180 105" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round" />
                   
                   {/* Box */}
                   <rect x="250" y="80" width="150" height="80" rx="8" stroke="#0f172a" strokeWidth="2" fill="white" />
                   <text x="270" y="125" className="text-sm font-sans fill-slate-900 font-bold">Data Pipeline</text>

                   {/* Another Box */}
                   <rect x="250" y="250" width="150" height="80" rx="8" stroke="#0f172a" strokeWidth="2" fill="white" />
                   <text x="280" y="295" className="text-sm font-sans fill-slate-900 font-bold">Model</text>

                   {/* Connecting Line */}
                   <line x1="325" y1="160" x2="325" y2="250" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                   
                   {/* Riya's Cursor */}
                   <g transform="translate(320, 180)">
                       <path d="M0 0 L 10 25 L 14 14 L 25 10 Z" fill="#ec4899" stroke="white" strokeWidth="1" />
                       <text x="15" y="25" className="text-xs font-bold fill-pink-600 bg-white/80">Riya</text>
                   </g>
               </svg>
          </div>
      </div>
    </div>
  );
};

export default Scratchpad;
