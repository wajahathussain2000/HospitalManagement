
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Plus, 
  Search, 
  FileText, 
  Users,
  Calendar,
  Pill,
  HeartPulse,
  Brain,
  Activity
} from 'lucide-react';

const clinicalStats = [
  {
    title: 'Active Patients',
    value: '1,247',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Today\'s Visits',
    value: '32',
    icon: Calendar,
    color: 'green'
  },
  {
    title: 'Pending Results',
    value: '8',
    icon: FileText,
    color: 'yellow'
  },
  {
    title: 'Critical Alerts',
    value: '3',
    icon: HeartPulse,
    color: 'red'
  }
];

const recentPatients = [
  {
    id: 'PT-001',
    name: 'Sarah Johnson',
    age: 34,
    lastVisit: '2024-01-15',
    diagnosis: 'Hypertension',
    status: 'stable',
    nextAppointment: '2024-02-15'
  },
  {
    id: 'PT-002',
    name: 'Michael Chen',
    age: 67,
    lastVisit: '2024-01-14',
    diagnosis: 'Diabetes Type 2',
    status: 'monitoring',
    nextAppointment: '2024-01-28'
  },
  {
    id: 'PT-003',
    name: 'Emily Davis',
    age: 28,
    lastVisit: '2024-01-13',
    diagnosis: 'Annual Checkup',
    status: 'healthy',
    nextAppointment: '2025-01-13'
  }
];

const quickActions = [
  { icon: Plus, label: 'New Patient', color: 'bg-blue-500' },
  { icon: FileText, label: 'Create Note', color: 'bg-green-500' },
  { icon: Pill, label: 'Prescribe', color: 'bg-purple-500' },
  { icon: Activity, label: 'Lab Orders', color: 'bg-orange-500' }
];

export default function Clinical() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'monitoring': return 'bg-yellow-100 text-yellow-800';
      case 'healthy': return 'bg-blue-100 text-blue-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      case 'red': return 'text-red-600 bg-red-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Clinical Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage patient care and clinical workflows</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Encounter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {clinicalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${getStatColor(stat.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    Recent Patients
                  </CardTitle>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search patients..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-600">Age: {patient.age} • ID: {patient.id}</p>
                          </div>
                          <Badge className={getStatusColor(patient.status)}>
                            {patient.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Last Visit: {patient.lastVisit} • {patient.diagnosis}</p>
                          <p>Next Appointment: {patient.nextAppointment}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="ghost" size="sm">
                          View Chart
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-20 flex flex-col items-center justify-center space-y-2"
                      >
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-sm">{action.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2" />
                  Clinical AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-900">Documentation Helper</p>
                    <p className="text-xs text-blue-700 mt-1">
                      AI-powered assistance for clinical notes and coding
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-900">Drug Interaction Check</p>
                    <p className="text-xs text-green-700 mt-1">
                      Real-time medication safety screening
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-purple-900">Clinical Decision Support</p>
                    <p className="text-xs text-purple-700 mt-1">
                      Evidence-based treatment recommendations
                    </p>
                  </div>
                  <Button size="sm" className="w-full">
                    Launch AI Assistant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
