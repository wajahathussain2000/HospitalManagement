import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocaleFormatting } from '@/utils/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function TranslationTest() {
  const { t, i18n } = useTranslation();
  const { formatNumber, formatCurrency, formatDate, formatTime, isArabic } = useLocaleFormatting();

  const testDate = new Date();
  const testNumber = 1234567.89;
  const testAmount = 9999.99;

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Translation & Localization Test
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            Current Language: <Badge variant="outline">{i18n.language}</Badge>
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Navigation Translation Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Navigation Translation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Badge variant="secondary">{t('navigation.dashboard')}</Badge>
              <Badge variant="secondary">{t('navigation.userManagement')}</Badge>
              <Badge variant="secondary">{t('navigation.departments')}</Badge>
              <Badge variant="secondary">{t('navigation.doctorManagement')}</Badge>
              <Badge variant="secondary">{t('navigation.billingFinance')}</Badge>
              <Badge variant="secondary">{t('navigation.systemSettings')}</Badge>
              <Badge variant="secondary">{t('navigation.logout')}</Badge>
            </div>
          </div>

          {/* Dashboard Translation Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Dashboard Translation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="font-medium">{t('dashboard.adminDashboard')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('dashboard.completeOverview')}</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="font-medium">{t('dashboard.totalPatients')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('dashboard.activeDoctors')}</p>
              </div>
            </div>
          </div>

          {/* Form Translation Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Form Translation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t('common.save')}</p>
                <p className="text-sm font-medium">{t('common.cancel')}</p>
                <p className="text-sm font-medium">{t('common.edit')}</p>
                <p className="text-sm font-medium">{t('common.delete')}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">{t('forms.required')}</p>
                <p className="text-sm font-medium">{t('forms.saveChanges')}</p>
                <p className="text-sm font-medium">{t('forms.confirmDelete')}</p>
              </div>
            </div>
          </div>

          {/* Patient Translation Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Patient Management Translation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline">{t('patient.patientManagement')}</Badge>
              <Badge variant="outline">{t('patient.addPatient')}</Badge>
              <Badge variant="outline">{t('patient.firstName')}</Badge>
              <Badge variant="outline">{t('patient.lastName')}</Badge>
              <Badge variant="outline">{t('patient.dateOfBirth')}</Badge>
              <Badge variant="outline">{t('patient.gender')}</Badge>
            </div>
          </div>

          {/* Number & Currency Formatting Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Number & Currency Formatting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Number</p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {formatNumber(testNumber)}
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <p className="text-sm font-medium text-green-900 dark:text-green-100">Currency</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(testAmount)}
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Date</p>
                <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {formatDate(testDate)}
                </p>
              </div>
            </div>
          </div>

          {/* RTL Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              RTL Layout Test
            </h3>
            <div className={`p-4 border rounded ${isArabic ? 'text-right border-blue-200 bg-blue-50' : 'text-left border-gray-200 bg-gray-50'}`}>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isArabic ? 'النص يظهر من اليمين إلى اليسار' : 'Text displays from left to right'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Direction: {isArabic ? 'RTL (Right-to-Left)' : 'LTR (Left-to-Right)'}
              </p>
            </div>
          </div>

          {/* Status Translation Test */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Status Translation
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {t('status.active')}
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                {t('status.pending')}
              </Badge>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                {t('status.cancelled')}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {t('status.completed')}
              </Badge>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
