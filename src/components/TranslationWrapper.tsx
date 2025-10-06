import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface TranslationWrapperProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'auto' | 'ltr' | 'rtl';
}

/**
 * TranslationWrapper - Automatically applies RTL support and dark mode
 * to any component wrapped with it
 */
export const TranslationWrapper: React.FC<TranslationWrapperProps> = ({
  children,
  className,
  direction = 'auto'
}) => {
  const { i18n } = useTranslation();
  const isRTL = direction === 'auto' ? i18n.language === 'ar' : direction === 'rtl';

  return (
    <div 
      className={cn(
        'transition-all duration-300',
        isRTL && 'rtl',
        className
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {children}
    </div>
  );
};

/**
 * RTLFlex - RTL-aware flex container
 */
export const RTLFlex: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col';
}> = ({ children, className, direction = 'row' }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div 
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        isRTL && direction === 'row' && 'flex-row-reverse',
        isRTL && direction === 'col' && 'flex-col-reverse',
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * RTLSpace - RTL-aware spacing container
 */
export const RTLSpace: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'x' | 'y';
  size?: string;
}> = ({ children, className, direction = 'x', size = '2' }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div 
      className={cn(
        `space-${direction}-${size}`,
        isRTL && `space-${direction}-reverse`,
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * TranslatedText - Automatically translates text with RTL support
 */
export const TranslatedText: React.FC<{
  textKey: string;
  className?: string;
  params?: Record<string, any>;
  fallback?: string;
}> = ({ textKey, className, params, fallback }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const translatedText = t(textKey, params) || fallback || textKey;

  return (
    <span 
      className={cn(
        'transition-all duration-300',
        isRTL && 'text-right',
        className
      )}
    >
      {translatedText}
    </span>
  );
};

/**
 * TranslatedInput - Input with automatic RTL support and translation
 */
export const TranslatedInput: React.FC<{
  placeholderKey?: string;
  className?: string;
  [key: string]: any;
}> = ({ placeholderKey, className, ...props }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <input
      {...props}
      className={cn(
        'transition-all duration-300',
        'dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100',
        isRTL && 'text-right',
        className
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
      placeholder={placeholderKey ? t(placeholderKey) : props.placeholder}
    />
  );
};

/**
 * TranslatedButton - Button with automatic RTL support and translation
 */
export const TranslatedButton: React.FC<{
  textKey?: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}> = ({ textKey, children, className, ...props }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <button
      {...props}
      className={cn(
        'transition-all duration-300',
        'flex items-center justify-center',
        isRTL && 'flex-row-reverse',
        className
      )}
    >
      {children}
      {textKey && (
        <span className={cn(isRTL && 'text-right')}>
          {t(textKey)}
        </span>
      )}
    </button>
  );
};

/**
 * TranslatedCard - Card with automatic dark mode and RTL support
 */
export const TranslatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}> = ({ children, className, ...props }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div
      {...props}
      className={cn(
        'transition-all duration-300',
        'bg-white dark:bg-gray-800',
        'border border-gray-200 dark:border-gray-700',
        'rounded-lg shadow-sm',
        isRTL && 'text-right',
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * AutoTranslate - Higher-order component that automatically adds translation support
 */
export function withAutoTranslation<P extends object>(
  Component: React.ComponentType<P>
) {
  return (props: P) => {
    return (
      <TranslationWrapper>
        <Component {...props} />
      </TranslationWrapper>
    );
  };
}
