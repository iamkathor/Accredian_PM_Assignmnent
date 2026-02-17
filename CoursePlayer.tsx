import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, MessageSquare, FileText, Lightbulb, Send, ThumbsUp, MoreHorizontal, User as UserIcon, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { COMMENTS, CURRENT_USER } from '../constants';
import { Comment } from '../types';

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const CoursePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(840); // Start at 14:00 for demo
  const [duration] = useState(2400); // 40 mins
  const [activeTab, setActiveTab] = useState<'qa' | 'resources' | 'insights'>('qa');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  // Ref for auto-scrolling to current timestamp comments
  const commentsEndRef = useRef<HTMLDivElement>(null);

  // Filter comments based on current time window (for "Live" feel) or show all sorted by time
  // For this prototype, we show all, but highlight those near current time
  const sortedComments = [...COMMENTS].sort((a, b) => a.timestamp - b.timestamp);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex h-full flex-col lg:flex-row bg-black overflow-hidden relative">
      {/* Video Player Area */}
      <div className={`flex-1 flex flex-col relative transition-all duration-300 ${sidebarOpen ? 'mr-0' : ''}`}>
        {/* Main Video Placeholder */}
        <div className="flex-1 bg-slate-900 relative flex items-center justify-center group">
          <img 
            src="https://picsum.photos/1200/800?grayscale" 
            alt="Course content" 
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="z-10 text-center text-white space-y-4">
             <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto hover:bg-white/20 cursor-pointer transition-all hover:scale-105" onClick={togglePlay}>
                {isPlaying ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="ml-2" />}
             </div>
             <div>
                <h2 className="text-2xl font-semibold">Module 6: Advanced Feature Engineering</h2>
                <p className="text-slate-300">Handling Null Values & Imputation Strategies</p>
             </div>
          </div>

          {/* Timestamp Notifications / Bubbles overlay on video */}
          <div className="absolute bottom-20 left-10 space-y-2 pointer-events-none">
            {sortedComments.filter(c => Math.abs(c.timestamp - currentTime) < 10).map(c => (
                 <div key={c.id} className="animate-fade-in-up bg-black/80 backdrop-blur-md text-white px-4 py-3 rounded-xl border-l-4 border-brand-500 shadow-2xl max-w-md pointer-events-auto cursor-pointer hover:bg-black/90 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase text-brand-400 tracking-wider">
                            {c.type === 'resource' ? 'Resource Shared' : 'Discussion'}
                        </span>
                        <span className="text-xs text-gray-400">• {formatTime(c.timestamp)}</span>
                    </div>
                    <p className="text-sm font-medium">{c.text}</p>
                 </div>
            ))}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="h-16 bg-slate-900 border-t border-slate-800 flex items-center px-4 gap-4 z-20">
            <button onClick={togglePlay} className="text-white hover:text-brand-400">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            {/* Progress Bar Container */}
            <div className="flex-1 relative group flex items-center">
                 {/* Timeline Markers */}
                {sortedComments.map((c) => (
                    <div 
                        key={c.id}
                        className={`absolute w-3 h-3 rounded-full z-10 -ml-1.5 cursor-pointer transform hover:scale-150 transition-all border-2 border-slate-900 ${
                            c.type === 'question' ? 'bg-amber-500' : 
                            c.type === 'resource' ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                        style={{ left: `${(c.timestamp / duration) * 100}%` }}
                        title={`${c.type}: ${c.text.substring(0, 30)}...`}
                        onClick={() => setCurrentTime(c.timestamp)}
                    ></div>
                ))}

                <input 
                    type="range" 
                    min="0" 
                    max={duration} 
                    value={currentTime} 
                    onChange={handleSeek}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500 hover:h-2 transition-all"
                />
            </div>

            <div className="text-xs text-slate-400 font-mono w-24 text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            
            <div className="flex items-center gap-3 text-slate-400">
                <Volume2 size={20} className="hover:text-white cursor-pointer" />
                <Maximize size={20} className="hover:text-white cursor-pointer" />
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`ml-2 p-1.5 rounded-md border ${sidebarOpen ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-600 hover:text-white'}`}
                >
                    <MessageSquare size={18} />
                </button>
            </div>
        </div>
      </div>

      {/* Context Sidebar */}
      {sidebarOpen && (
          <div className="w-full lg:w-96 bg-white border-l border-gray-200 flex flex-col h-[50vh] lg:h-full shadow-2xl z-30 animate-in slide-in-from-right duration-300">
             {/* Tabs */}
             <div className="flex border-b border-gray-200">
                {[
                    { id: 'qa', icon: MessageSquare, label: 'Q&A' },
                    { id: 'resources', icon: FileText, label: 'Resources' },
                    { id: 'insights', icon: Lightbulb, label: 'Insights' },
                ].map((tab) => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                            activeTab === tab.id 
                            ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
             </div>

             {/* Feed */}
             <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-semibold uppercase tracking-wider">Current Context: {formatTime(currentTime)}</span>
                    <button className="text-brand-600 hover:underline">View All</button>
                </div>

                {sortedComments.map((comment) => (
                    <div key={comment.id} className={`bg-white p-4 rounded-xl border transition-all duration-300 ${Math.abs(comment.timestamp - currentTime) < 30 ? 'border-brand-300 shadow-md ring-1 ring-brand-100' : 'border-gray-100 shadow-sm opacity-80 hover:opacity-100'}`}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                {comment.isAnonymous ? (
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                        <Lock size={14} className="text-slate-500" />
                                    </div>
                                ) : (
                                    <img src={comment.user.avatar} alt={comment.user.name} className="w-8 h-8 rounded-full border border-gray-200" />
                                )}
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-sm font-bold text-gray-900">
                                            {comment.isAnonymous ? 'Anonymous Learner' : comment.user.name}
                                        </span>
                                        {comment.user.role === 'Mentor' && <ShieldCheck size={14} className="text-brand-600" />}
                                        {comment.user.role === 'Alumni' && <div className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">Alumni</div>}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        {comment.user.performanceScore > 0 && (
                                             <span className="font-medium text-green-600">Score: {comment.user.performanceScore}</span>
                                        )}
                                        <span>•</span>
                                        <span className="font-mono bg-gray-100 px-1 rounded text-gray-600 cursor-pointer hover:bg-gray-200" onClick={() => setCurrentTime(comment.timestamp)}>
                                            {formatTime(comment.timestamp)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal size={16} />
                            </button>
                        </div>

                        {/* Content */}
                        <p className="text-sm text-gray-800 mb-3 leading-relaxed">
                            {comment.text}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <button className="flex items-center gap-1.5 hover:text-brand-600 transition-colors">
                                <ThumbsUp size={14} />
                                <span>{comment.upvotes} Helpful</span>
                            </button>
                            <button className="hover:text-brand-600 transition-colors">Reply</button>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 pl-3 border-l-2 border-brand-100 space-y-3">
                                {comment.replies.map(reply => (
                                    <div key={reply.id} className="bg-brand-50/50 p-3 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                             <img src={reply.user.avatar} alt="" className="w-6 h-6 rounded-full" />
                                             <span className="text-xs font-bold">{reply.user.name}</span>
                                             {reply.user.role === 'Mentor' && (
                                                 <span className="flex items-center gap-1 text-[10px] font-bold bg-brand-100 text-brand-700 px-1.5 rounded-full border border-brand-200">
                                                    <CheckCircle2 size={10} /> Verified
                                                 </span>
                                             )}
                                        </div>
                                        <p className="text-xs text-gray-700">{reply.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div ref={commentsEndRef} />
             </div>

             {/* Input Area */}
             <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-medium">Posting at <span className="text-brand-600">{formatTime(currentTime)}</span></span>
                    <button 
                        onClick={() => setIsAnonymous(!isAnonymous)}
                        className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full transition-all ${isAnonymous ? 'bg-slate-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {isAnonymous ? <Lock size={12} /> : <UserIcon size={12} />}
                        {isAnonymous ? 'Anonymous Mode On' : 'Post Publicly'}
                    </button>
                </div>
                <div className="relative">
                    <textarea 
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder={activeTab === 'qa' ? "Ask a doubt or share an insight..." : "Share a resource URL..."}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none h-24"
                    />
                    <button 
                        disabled={!newComment.trim()}
                        className="absolute bottom-3 right-3 p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-brand-200"
                    >
                        <Send size={16} />
                    </button>
                </div>
             </div>
          </div>
      )}
    </div>
  );
};

export default CoursePlayer;
