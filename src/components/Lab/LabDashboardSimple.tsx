import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TestTube, 
  Users, 
  Package, 
  BarChart3, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  CreditCard,
  Activity,
  Download,
  Settings,
  Zap
} from 'lucide-react';

export default function LabDashboardSimple() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock lab data
  const labStats = {
    totalTests: 2847,
    pendingTests: 45,
    completedToday: 127,
    criticalResults: 3,
    revenue: 67890,
    patientsServed: 89,
    averageTurnaround: '4.2 hours',
    equipmentStatus: 95
  };

  const recentTests = [
    {
      id: 'LAB001',
      patientName: 'John Smith',
      testName: 'Complete Blood Count',
      status: 'Completed',
      time: '2:30 PM',
      doctor: 'Dr. Johnson',
      result: 'Normal'
    },
    {
      id: 'LAB002',
      patientName: 'Sarah Wilson',
      testName: 'Lipid Panel',
      status: 'Processing',
      time: '2:15 PM',
      doctor: 'Dr. Chen',
      result: 'Pending'
    },
    {
      id: 'LAB003',
      patientName: 'Mike Davis',
      testName: 'Thyroid Function',
      status: 'Critical',
      time: '2:00 PM',
      doctor: 'Dr. Rodriguez',
      result: 'Abnormal'
    }
  ];

  const criticalResults = [
    {
      testName: 'Troponin I',
      patientName: 'Robert Brown',
      value: '15.2 ng/mL',
      normalRange: '< 0.04 ng/mL',
      status: 'Critical High'
    },
    {
      testName: 'Glucose',
      patientName: 'Lisa Green',
      value: '25 mg/dL',
      normalRange: '70-100 mg/dL',
      status: 'Critical Low'
    },
    {
      testName: 'Potassium',
      patientName: 'David White',
      value: '6.8 mEq/L',
      normalRange: '3.5-5.0 mEq/L',
      status: 'Critical High'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lab Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, {user?.firstName} {user?.lastName} - {user?.role.replace('_', ' ')}
          </p>
          <p className="text-sm text-gray-500">Today is {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tests</p>
                <p className="text-3xl font-bold text-gray-900">{labStats.totalTests.toLocaleString()}</p>
              </div>
              <TestTube className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+8% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Tests</p>
                <p className="text-3xl font-bold text-gray-900">{labStats.pendingTests}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Awaiting processing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Today</p>
                <p className="text-3xl font-bold text-gray-900">{labStats.completedToday}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Successfully processed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Results</p>
                <p className="text-3xl font-bold text-gray-900">{labStats.criticalResults}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Require immediate attention</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue Today</p>
                <p className="text-2xl font-bold text-gray-900">${labStats.revenue.toLocaleString()}</p>
              </div>
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Patients Served</p>
                <p className="text-2xl font-bold text-gray-900">{labStats.patientsServed}</p>
              </div>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Turnaround</p>
                <p className="text-2xl font-bold text-gray-900">{labStats.averageTurnaround}</p>
              </div>
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Equipment Status</p>
                <p className="text-2xl font-bold text-gray-900">{labStats.equipmentStatus}%</p>
              </div>
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Critical Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TestTube className="h-5 w-5 mr-2" />
              Recent Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{test.patientName}</h4>
                      <Badge variant="outline" className="text-xs">
                        {test.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{test.testName}</p>
                    <p className="text-xs text-gray-500">Dr. {test.doctor} • {test.time}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={
                      test.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      test.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                      test.status === 'Critical' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {test.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{test.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Critical Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Critical Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-red-200 bg-red-50">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{result.testName}</h4>
                    <p className="text-sm text-gray-600">{result.patientName}</p>
                    <p className="text-xs text-gray-500">
                      Value: {result.value} • Normal: {result.normalRange}
                    </p>
                  </div>
                  <Badge className="bg-red-100 text-red-800">
                    {result.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2">
              <TestTube className="h-6 w-6" />
              <span className="text-sm">New Test</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Inventory</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Patients</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
