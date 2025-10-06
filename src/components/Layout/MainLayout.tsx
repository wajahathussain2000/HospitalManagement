
import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import AIChatAssistant from '../AI/AIChatAssistant';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    // Update document direction when language changes
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className={cn("flex h-screen", isRTL && "flex-row-reverse")}>
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className={cn(
            "flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6 transition-all duration-300",
            sidebarOpen ? (isRTL ? "mr-64" : "ml-64") : (isRTL ? "mr-16" : "ml-16")
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
