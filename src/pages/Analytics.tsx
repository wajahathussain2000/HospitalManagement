import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Target,
  Zap,
  Shield
} from 'lucide-react';

// Mock data for analytics
const analyticsData = {
  overview: {
    totalPatients: 2847,
    totalRevenue: 2847293,
    totalClaims: 15432,
    averageProcessingTime: 3.2,
    patientGrowth: 12.5,
    revenueGrowth: 8.7,
    claimsGrowth: -2.3,
    processingTimeChange: -15.2
  },
  monthlyStats: [
    { month: 'Jan', patients: 2100, revenue: 180000, claims: 1200 },
    { month: 'Feb', patients: 2200, revenue: 190000, claims: 1150 },
    { month: 'Mar', patients: 2350, revenue: 205000, claims: 1300 },
    { month: 'Apr', patients: 2450, revenue: 220000, claims: 1250 },
    { month: 'May', patients: 2600, revenue: 235000, claims: 1400 },
    { month: 'Jun', patients: 2750, revenue: 250000, claims: 1350 },
    { month: 'Jul', patients: 2800, revenue: 260000, claims: 1450 },
    { month: 'Aug', patients: 2847, revenue: 275000, claims: 1420 }
  ],
  claimsStatus: [
    { status: 'Approved', count: 8560, percentage: 55.5, color: 'bg-green-500' },
    { status: 'Pending', count: 3420, percentage: 22.2, color: 'bg-yellow-500' },
    { status: 'Denied', count: 2452, percentage: 15.9, color: 'bg-red-500' },
    { status: 'Under Review', count: 1000, percentage: 6.4, color: 'bg-blue-500' }
  ],
  topInsuranceProviders: [
    { name: 'Aetna', claims: 3240, revenue: 485000, percentage: 21.0 },
    { name: 'BCBS', claims: 2890, revenue: 432000, percentage: 18.7 },
    { name: 'UnitedHealth', claims: 2650, revenue: 398000, percentage: 17.2 },
    { name: 'Cigna', claims: 2100, revenue: 315000, percentage: 13.6 },
    { name: 'Medicare', claims: 1950, revenue: 292000, percentage: 12.6 },
    { name: 'Others', claims: 2602, revenue: 390000, percentage: 16.9 }
  ],
  departmentPerformance: [
    { department: 'Cardiology', patients: 450, revenue: 680000, efficiency: 94 },
    { department: 'Orthopedics', patients: 380, revenue: 520000, efficiency: 89 },
    { department: 'Internal Medicine', patients: 620, revenue: 480000, efficiency: 92 },
    { department: 'Pediatrics', patients: 290, revenue: 340000, efficiency: 96 },
    { department: 'Emergency', patients: 180, revenue: 420000, efficiency: 87 },
    { department: 'Surgery', patients: 320, revenue: 780000, efficiency: 91 }
  ],
  recentActivity: [
    { id: 1, type: 'Claim Approved', description: 'Claim #C-2024-001 approved for John Smith', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'Payment Received', description: 'Payment of $2,450 received from Aetna', time: '15 minutes ago', status: 'success' },
    { id: 3, type: 'Claim Denied', description: 'Claim #C-2024-002 denied - Missing documentation', time: '1 hour ago', status: 'error' },
    { id: 4, type: 'New Patient', description: 'Sarah Johnson registered in the system', time: '2 hours ago', status: 'info' },
    { id: 5, type: 'Appointment Scheduled', description: 'Follow-up appointment scheduled for Michael Brown', time: '3 hours ago', status: 'info' }
  ]
};

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'info': return <Eye className="h-4 w-4 text-blue-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Activity className="h-4 w-4 text-gray-600" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights into your medical billing operations</p>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.overview.totalPatients)}</p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(analyticsData.overview.patientGrowth)}
                    <span className={`text-sm font-medium ml-1 ${getTrendColor(analyticsData.overview.patientGrowth)}`}>
                      +{analyticsData.overview.patientGrowth}%
                    </span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(analyticsData.overview.totalRevenue)}</p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(analyticsData.overview.revenueGrowth)}
                    <span className={`text-sm font-medium ml-1 ${getTrendColor(analyticsData.overview.revenueGrowth)}`}>
                      +{analyticsData.overview.revenueGrowth}%
                    </span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Claims</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.overview.totalClaims)}</p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(analyticsData.overview.claimsGrowth)}
                    <span className={`text-sm font-medium ml-1 ${getTrendColor(analyticsData.overview.claimsGrowth)}`}>
                      {analyticsData.overview.claimsGrowth}%
                    </span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Processing Time</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.averageProcessingTime} days</p>
                  <div className="flex items-center mt-1">
                    {getTrendIcon(analyticsData.overview.processingTimeChange)}
                    <span className={`text-sm font-medium ml-1 ${getTrendColor(analyticsData.overview.processingTimeChange)}`}>
                      {analyticsData.overview.processingTimeChange}%
                    </span>
                  </div>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white shadow-lg border border-gray-200 p-1 rounded-xl">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="claims" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6">
              <FileText className="h-4 w-4 mr-2" />
              Claims Analysis
            </TabsTrigger>
            <TabsTrigger value="revenue" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Revenue Analytics
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6">
              <Target className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6">
              <Activity className="h-4 w-4 mr-2" />
              Recent Activity
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Trends Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <LineChart className="h-5 w-5 mr-2" />
                    Monthly Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="revenue">Revenue</SelectItem>
                          <SelectItem value="patients">Patients</SelectItem>
                          <SelectItem value="claims">Claims</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {analyticsData.monthlyStats.map((stat, index) => {
                        const maxValue = Math.max(...analyticsData.monthlyStats.map(s => 
                          selectedMetric === 'revenue' ? s.revenue : 
                          selectedMetric === 'patients' ? s.patients : s.claims
                        ));
                        const height = selectedMetric === 'revenue' ? 
                          (stat.revenue / maxValue) * 100 :
                          selectedMetric === 'patients' ?
                          (stat.patients / maxValue) * 100 :
                          (stat.claims / maxValue) * 100;
                        
                        return (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div 
                              className="bg-blue-500 rounded-t-lg w-full mb-2 transition-all duration-300 hover:bg-blue-600"
                              style={{ height: `${height}%` }}
                            />
                            <span className="text-xs text-gray-600">{stat.month}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Claims Status Distribution */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <PieChart className="h-5 w-5 mr-2" />
                    Claims Status Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {analyticsData.claimsStatus.map((status, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${status.color}`} />
                          <span className="text-sm font-medium">{status.status}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold">{formatNumber(status.count)}</span>
                          <span className="text-sm text-gray-600 ml-2">({status.percentage}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Claims Analysis Tab */}
          <TabsContent value="claims" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Insurance Providers */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <Shield className="h-5 w-5 mr-2" />
                    Top Insurance Providers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {analyticsData.topInsuranceProviders.map((provider, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{provider.name}</p>
                          <p className="text-sm text-gray-600">{formatNumber(provider.claims)} claims</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{formatCurrency(provider.revenue)}</p>
                          <p className="text-sm text-gray-600">{provider.percentage}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Claims Processing Efficiency */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Processing Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {analyticsData.overview.averageProcessingTime}
                      </div>
                      <p className="text-gray-600">Average Processing Time (Days)</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Same Day Processing</span>
                        <Badge className="bg-green-100 text-green-800">85%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Within 3 Days</span>
                        <Badge className="bg-blue-100 text-blue-800">92%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Within 7 Days</span>
                        <Badge className="bg-yellow-100 text-yellow-800">98%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Revenue Analytics Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue by Department */}
              <Card className="border-0 shadow-lg lg:col-span-2">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Revenue by Department
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {analyticsData.departmentPerformance.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{dept.department}</span>
                            <span className="text-sm text-gray-600">{dept.patients} patients</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                              style={{ width: `${(dept.efficiency / 100) * 100}%` }}
                            />
                          </div>
                          <div className="flex justify-between mt-2">
                            <span className="text-sm font-bold text-gray-900">{formatCurrency(dept.revenue)}</span>
                            <span className="text-sm text-gray-600">{dept.efficiency}% efficiency</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Summary */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Revenue Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {formatCurrency(analyticsData.overview.totalRevenue)}
                      </div>
                      <p className="text-gray-600">Total Revenue</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">This Month</span>
                        <span className="text-sm font-bold text-green-600">+8.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">vs Last Month</span>
                        <span className="text-sm font-bold text-blue-600">{formatCurrency(275000)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Average per Patient</span>
                        <span className="text-sm font-bold text-gray-900">{formatCurrency(1001)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Department Performance */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 mr-2" />
                    Department Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {analyticsData.departmentPerformance.map((dept, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{dept.department}</span>
                          <Badge className={`${
                            dept.efficiency >= 95 ? 'bg-green-100 text-green-800' :
                            dept.efficiency >= 90 ? 'bg-blue-100 text-blue-800' :
                            dept.efficiency >= 85 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {dept.efficiency}%
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{dept.patients} patients</span>
                          <span>{formatCurrency(dept.revenue)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Performance Indicators */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Key Performance Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">94.2%</div>
                        <div className="text-sm text-gray-600">Claim Approval Rate</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">3.2</div>
                        <div className="text-sm text-gray-600">Days to Payment</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">98.5%</div>
                        <div className="text-sm text-gray-600">Patient Satisfaction</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">12.5%</div>
                        <div className="text-sm text-gray-600">Growth Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recent Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-lg">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {analyticsData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(activity.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
