import React from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Users, 
  PenTool, 
  LogOut, 
  Bell,
  Search,
  Menu
} from 'lucide-react';
import { TabView, User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabView;
  onTabChange: (tab: TabView) => void;
  user: User;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, user }) => {
  const navItems = [
    { id: TabView.LEARNING, label: 'My Learning', icon: BookOpen },
    { id: TabView.CAREER, label: 'Referrals Hub', icon: Briefcase },
    { id: TabView.SQUADS, label: 'Squad Match', icon: Users },
    { id: TabView.COLLAB, label: 'Scratchpad', icon: PenTool },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-white">
            A
          </div>
          <span className="text-xl font-bold tracking-tight">Accredian</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-brand-500"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{user.name}</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs text-slate-400">Score: {user.performanceScore}</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-slate-500">
            <Menu className="lg:hidden" />
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search resources, peers, or alumni..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm w-80 focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
