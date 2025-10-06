import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

/**
 * Comprehensive translation helper hook for consistent Arabic/English support
 * Provides common translation patterns and RTL support utilities
 */
export const useTranslationHelper = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Common RTL-aware class combinations
  const getRTLClasses = {
    // Flex direction
    flexRow: cn("flex", isRTL && "flex-row-reverse"),
    flexRowReverse: cn("flex-row-reverse", !isRTL && "flex-row"),
    
    // Spacing
    spaceX: (size: string = '2') => cn(`space-x-${size}`, isRTL && `space-x-reverse`),
    spaceXReverse: (size: string = '2') => cn(`space-x-reverse space-x-${size}`),
    
    // Margins
    marginLeft: (size: string = '2') => cn(isRTL ? `mr-${size}` : `ml-${size}`),
    marginRight: (size: string = '2') => cn(isRTL ? `ml-${size}` : `mr-${size}`),
    
    // Text alignment
    textAlign: cn(isRTL && "text-right"),
    
    // Padding
    paddingLeft: (size: string = '3') => cn(isRTL ? `pr-${size}` : `pl-${size}`),
    paddingRight: (size: string = '3') => cn(isRTL ? `pl-${size}` : `pr-${size}`),
  };

  // Common component props
  const getInputProps = (placeholder?: string) => ({
    className: cn("dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"),
    dir: isRTL ? 'rtl' as const : 'ltr' as const,
    placeholder: placeholder ? t(placeholder) : undefined,
  });

  const getCardProps = () => ({
    className: cn("dark:bg-gray-800 border-gray-200 dark:border-gray-700"),
  });

  const getButtonProps = (variant: 'default' | 'outline' | 'ghost' = 'default') => ({
    className: cn(
      "flex items-center",
      isRTL ? "space-x-reverse space-x-2" : "space-x-2"
    ),
  });

  // Common translation patterns
  const translate = {
    // Status translations
    status: (key: string) => t(`status.${key}`),
    
    // Form translations
    form: (key: string) => t(`forms.${key}`),
    
    // Validation translations
    validation: (key: string, params?: Record<string, any>) => t(`validation.${key}`, params),
    
    // Common actions
    actions: {
      save: t('common.save'),
      cancel: t('common.cancel'),
      edit: t('common.edit'),
      delete: t('common.delete'),
      add: t('common.add'),
      loading: t('common.loading'),
      search: t('common.search'),
    },
    
    // Navigation
    nav: (key: string) => t(`navigation.${key}`),
    
    // Dashboard specific
    dashboard: (key: string) => t(`dashboard.${key}`),
    
    // Patient specific
    patient: (key: string) => t(`patient.${key}`),
    
    // Doctor specific
    doctor: (key: string) => t(`doctor.${key}`),
    
    // Admin specific
    admin: (key: string) => t(`admin.${key}`),
  };

  return {
    t,
    i18n,
    isRTL,
    getRTLClasses,
    getInputProps,
    getCardProps,
    getButtonProps,
    translate,
  };
};

/**
 * Higher-order component for automatic Arabic translation support
 * Wraps components with translation and RTL support
 */
export const withTranslation = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const translationHelper = useTranslationHelper();
    return <Component {...props} translationHelper={translationHelper} />;
  };
};

/**
 * Utility function to get direction-aware icon props
 */
export const getIconProps = (isRTL: boolean) => ({
  className: cn("h-4 w-4", isRTL ? "ml-2" : "mr-2"),
});

/**
 * Utility function for RTL-aware table headers
 */
export const getTableHeaderProps = (isRTL: boolean) => ({
  className: cn(
    "px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
    isRTL && "text-right"
  ),
});

/**
 * Utility function for RTL-aware table cells
 */
export const getTableCellProps = (isRTL: boolean) => ({
  className: cn(
    "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100",
    isRTL && "text-right"
  ),
});
