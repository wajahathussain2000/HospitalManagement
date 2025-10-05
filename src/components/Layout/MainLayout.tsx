
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import AIChatAssistant from '../AI/AIChatAssistant';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className={cn(
            "flex-1 overflow-y-auto bg-gray-50 p-6 transition-all duration-300",
            sidebarOpen ? "ml-64" : "ml-16"
          )}>
            {children}
          </main>
        </div>
      </div>
      
      {/* AI Chat Assistant */}
      <AIChatAssistant />
    </div>
  );
}
