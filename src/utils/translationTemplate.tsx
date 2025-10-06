/**
 * Translation Template Component
 * Use this as a template for adding Arabic translation support to any component
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

// Template for adding translation support to any component
export const TranslationTemplate = {
  
  // 1. Import these at the top of your component file
  imports: `
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
  `,

  // 2. Add these hooks inside your component function
  hooks: `
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  `,

  // 3. Use these patterns for common elements
  
  // Container with RTL support
  container: (className: string = '') => cn('transition-all duration-300', className),
  
  // RTL-aware flex container
  flexRow: (className: string = '') => cn('flex', isRTL && 'flex-row-reverse', className),
  
  // RTL-aware text alignment
  textAlign: (className: string = '') => cn(isRTL && 'text-right', className),
  
  // RTL-aware spacing
  spaceX: (size: string = '2') => cn(`space-x-${size}`, isRTL && 'space-x-reverse'),
  
  // RTL-aware margins
  marginLeft: (size: string = '2') => cn(isRTL ? `mr-${size}` : `ml-${size}`),
  marginRight: (size: string = '2') => cn(isRTL ? `ml-${size}` : `mr-${size}`),
  
  // Dark mode + RTL card
  card: (className: string = '') => cn(
    'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg shadow-sm',
    isRTL && 'text-right',
    className
  ),
  
  // RTL-aware input
  input: (className: string = '') => cn(
    'dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100',
    isRTL && 'text-right',
    className
  ),
  
  // RTL-aware button
  button: (className: string = '') => cn(
    'flex items-center justify-center transition-all duration-300',
    isRTL && 'flex-row-reverse',
    className
  ),
};

// Example usage in a component:
export const ExampleComponent = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={TranslationTemplate.container('space-y-6')}>
      {/* Header with RTL support */}
      <div className={TranslationTemplate.flexRow('justify-between items-center')}>
        <div className={TranslationTemplate.textAlign()}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t('dashboard.adminDashboard')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {t('dashboard.completeOverview')}
          </p>
        </div>
      </div>

      {/* Cards with RTL support */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={TranslationTemplate.card('p-6')}>
          <div className={TranslationTemplate.flexRow('items-center justify-between')}>
            <div className={TranslationTemplate.textAlign()}>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {t('dashboard.totalPatients')}
              </p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2847</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form with RTL support */}
      <div className={TranslationTemplate.card('p-6')}>
        <div className={TranslationTemplate.spaceX('4')}>
          <input
            className={TranslationTemplate.input('w-full px-3 py-2 border rounded-md')}
            placeholder={t('common.searchPlaceholder')}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <button className={TranslationTemplate.button('px-4 py-2 bg-blue-600 text-white rounded-md')}>
            {t('common.search')}
          </button>
        </div>
      </div>
    </div>
  );
};

// Common translation patterns
export const TranslationPatterns = {
  
  // Replace hardcoded strings with translation keys
  replaceStrings: {
    'Loading...': 'common.loading',
    'Save': 'common.save',
    'Cancel': 'common.cancel',
    'Edit': 'common.edit',
    'Delete': 'common.delete',
    'Add': 'common.add',
    'Search': 'common.search',
    'Filter': 'common.filter',
    'Export': 'common.export',
    'Import': 'common.import',
    'Submit': 'common.submit',
    'Reset': 'common.reset',
    'Update': 'common.update',
    'Create': 'common.create',
    'View': 'common.view',
    'Details': 'common.details',
    'Settings': 'common.settings',
    'Profile': 'common.profile',
    'Dashboard': 'common.dashboard',
    'Users': 'common.users',
    'Patients': 'common.patients',
    'Doctors': 'common.doctors',
    'Appointments': 'common.appointments',
    'Billing': 'common.billing',
    'Reports': 'common.reports',
    'Analytics': 'common.analytics',
    'Notifications': 'common.notifications',
    'Logout': 'common.logout',
    'Login': 'common.login',
    'Register': 'common.register',
    'Welcome': 'common.welcome',
    'Error': 'common.error',
    'Success': 'common.success',
    'Warning': 'common.warning',
    'Info': 'common.info',
    'Yes': 'common.yes',
    'No': 'common.no',
    'OK': 'common.ok',
    'Close': 'common.close',
    'Open': 'common.open',
    'Back': 'common.back',
    'Next': 'common.next',
    'Previous': 'common.previous',
    'Continue': 'common.continue',
    'Finish': 'common.finish',
    'Complete': 'common.complete',
  },

  // Common form labels
  formLabels: {
    'First Name': 'patient.firstName',
    'Last Name': 'patient.lastName',
    'Email': 'common.email',
    'Phone': 'common.phone',
    'Address': 'common.address',
    'Date of Birth': 'patient.dateOfBirth',
    'Gender': 'patient.gender',
    'Blood Group': 'patient.bloodGroup',
    'Allergies': 'patient.allergies',
    'Medical History': 'patient.medicalHistory',
    'Current Medications': 'patient.currentMedications',
    'Insurance Provider': 'patient.insuranceProvider',
    'Emergency Contact': 'patient.emergencyContact',
    'Occupation': 'patient.occupation',
    'Marital Status': 'patient.maritalStatus',
    'Nationality': 'patient.nationality',
    'Religion': 'patient.religion',
  },

  // Status translations
  statusTranslations: {
    'Active': 'status.active',
    'Inactive': 'status.inactive',
    'Pending': 'status.pending',
    'Approved': 'status.approved',
    'Rejected': 'status.rejected',
    'Completed': 'status.completed',
    'Cancelled': 'status.cancelled',
    'Scheduled': 'status.scheduled',
    'Confirmed': 'status.confirmed',
    'No Show': 'status.noShow',
    'Rescheduled': 'status.rescheduled',
  },
};

export default TranslationTemplate;
