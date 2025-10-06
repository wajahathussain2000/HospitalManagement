
import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onMenuClick}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className={cn("relative", isRTL ? "mr-72" : "ml-72")}>
            <Search className={cn(
              "absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500",
              isRTL ? "right-3" : "left-3"
            )} />
            <Input 
              placeholder={t('common.searchPlaceholder')}
              className={cn(
                "w-80 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100",
                isRTL ? "pr-10" : "pl-10"
              )}
            />
          </div>
        </div>
        
        <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="relative text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <User className="h-5 w-5" />
                <span className={cn("hidden md:inline", isRTL ? "mr-2" : "ml-2")}>{t('common.hospitalAdmin')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
