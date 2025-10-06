import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { useLocaleFormatting } from '@/utils/locale';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Activity, 
  AlertTriangle,
  TrendingUp,
  Shield,
  Settings,
  BarChart3,
  FileText,
  Stethoscope
} from 'lucide-react';

export default function AdminDashboard() {
  const { t } = useTranslation();
  const { formatNumber } = useLocaleFormatting();
  
  const stats = [
    { title: t('dashboard.totalPatients'), value: formatNumber(2847), change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: t('dashboard.activeDoctors'), value: formatNumber(45), change: '+3', icon: UserCheck, color: 'text-green-600' },
    { title: t('dashboard.todaysAppointments'), value: formatNumber(127), change: '+8%', icon: Calendar, color: 'text-purple-600' },
    { title: t('dashboard.monthlyRevenue'), value: formatNumber(245680), change: '+15%', icon: DollarSign, color: 'text-emerald-600' },
    { title: t('dashboard.pendingClaims'), value: formatNumber(89), change: '-12', icon: FileText, color: 'text-orange-600' },
    { title: t('dashboard.emergencyCases'), value: formatNumber(7), change: '+2', icon: AlertTriangle, color: 'text-red-600' }
  ];

  const quickActions = [
    { title: t('dashboard.manageUsers'), description: t('dashboard.manageUsersDesc'), icon: Users, color: 'bg-blue-500' },
    { title: t('dashboard.doctorManagement'), description: t('dashboard.doctorManagementDesc'), icon: Stethoscope, color: 'bg-green-500' },
    { title: t('dashboard.systemSettings'), description: t('dashboard.systemSettingsDesc'), icon: Settings, color: 'bg-gray-500' },
    { title: t('dashboard.reportsAnalytics'), description: t('dashboard.reportsAnalyticsDesc'), icon: BarChart3, color: 'bg-purple-500' },
    { title: t('dashboard.emergencyProtocol'), description: t('dashboard.emergencyProtocolDesc'), icon: AlertTriangle, color: 'bg-red-500' },
    { title: t('dashboard.financialOverview'), description: t('dashboard.financialOverviewDesc'), icon: DollarSign, color: 'bg-emerald-500' }
  ];

  const recentActivities = [
    { action: 'New patient registered', user: 'John Doe', time: '2 minutes ago', type: 'success' },
    { action: 'Doctor schedule updated', user: 'Dr. Johnson', time: '15 minutes ago', type: 'info' },
    { action: 'Emergency case reported', user: 'Emergency Dept', time: '1 hour ago', type: 'warning' },
    { action: 'Payment received', user: 'Patient #1234', time: '2 hours ago', type: 'success' },
    { action: 'Lab results uploaded', user: 'Lab Technician', time: '3 hours ago', type: 'info' }
  ];

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('dashboard.adminDashboard')}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{t('dashboard.completeOverview')}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              <Shield className="h-3 w-3 mr-1" />
              {t('dashboard.adminAccess')}
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    <p className="text-sm text-green-600 dark:text-green-400">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <action.icon className="h-4 w-4" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">{action.title}</p>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Database: Online</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">AI Services: Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Payment Gateway: Connected</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Backup: In Progress</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
