import { useTranslation } from 'react-i18next';

// Date formatting utilities
export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('ar-SA', { ...defaultOptions, ...options }).format(dateObj);
};

// Number formatting utilities
export const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat('ar-SA', { ...defaultOptions, ...options }).format(number);
};

// Currency formatting utilities
export const formatCurrency = (amount: number, currency: string = 'SAR') => {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Time formatting utilities
export const formatTime = (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  return new Intl.DateTimeFormat('ar-SA', { ...defaultOptions, ...options }).format(dateObj);
};

// Arabic number conversion (Western to Eastern Arabic numerals)
export const toArabicNumerals = (text: string): string => {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const westernNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  return text.replace(/[0-9]/g, (digit) => {
    return arabicNumerals[parseInt(digit)];
  });
};

// Format phone number for Arabic locale
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format for Saudi Arabia (+966)
  if (cleaned.startsWith('966')) {
    return `+966 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  // Format for other countries
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  
  return phone;
};

// Hook for locale-aware formatting
export const useLocaleFormatting = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language === 'ar' ? 'ar-SA' : 'en-US';

  return {
    formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return new Intl.DateTimeFormat(currentLocale, { ...defaultOptions, ...options }).format(dateObj);
    },
    formatNumber: (number: number, options?: Intl.NumberFormatOptions) => {
      const defaultOptions: Intl.NumberFormatOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
      };
      return new Intl.NumberFormat(currentLocale, { ...defaultOptions, ...options }).format(number);
    },
    formatCurrency: (amount: number, currency: string = 'SAR') => {
      return new Intl.NumberFormat(currentLocale, {
        style: 'currency',
        currency: currency,
      }).format(amount);
    },
    formatTime: (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      const defaultOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      return new Intl.DateTimeFormat(currentLocale, { ...defaultOptions, ...options }).format(dateObj);
    },
    formatPhoneNumber: (phone: string) => {
      const formatted = formatPhoneNumber(phone);
      return i18n.language === 'ar' ? toArabicNumerals(formatted) : formatted;
    },
    toArabicNumerals,
    isArabic: i18n.language === 'ar'
  };
};
