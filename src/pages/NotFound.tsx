import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Home, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        
        <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-red-100 dark:bg-red-900">
                <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <CardTitle className={cn("text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2", isRTL && "text-right")}>
              404
            </CardTitle>
          </CardHeader>
          <CardContent className={cn("text-center", isRTL && "text-right")}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('errors.pageNotFound')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('errors.pageNotFoundDesc')}
            </p>
            <Button 
              onClick={() => window.location.href = '/'} 
              className="w-full"
            >
              <Home className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
              {t('errors.goBackHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
