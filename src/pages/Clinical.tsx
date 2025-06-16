import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Activity,
  Mic,
  Sparkles
} from 'lucide-react';
import { ClinicalChart } from '@/components/Clinical/ClinicalChart';

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

const mockPatient = {
  id: 'PT-001',
  name: 'Sarah Johnson',
  age: 34,
  gender: 'Female',
  allergies: ['Penicillin', 'Shellfish'],
  medications: ['Lisinopril 10mg daily', 'Metformin 500mg twice daily'],
  medicalHistory: ['Hypertension diagnosed 2020', 'Type 2 Diabetes diagnosed 2019', 'Family history of heart disease'],
  lastVisit: '2024-01-15'
};

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
            <p className="text-gray-600 mt-1">AI-powered clinical documentation and patient care</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Mic className="h-4 w-4 mr-2" />
              Voice Input
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Encounter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="patients">Patient Chart</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="coding">AI Coding</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
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
                    <CardTitle>AI-Powered Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                        <div className="p-2 rounded-lg bg-purple-500 text-white">
                          <Mic className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Voice Documentation</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                        <div className="p-2 rounded-lg bg-blue-500 text-white">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <span className="text-sm">AI Coding Assistant</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                        <div className="p-2 rounded-lg bg-green-500 text-white">
                          <FileText className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Smart Templates</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                        <div className="p-2 rounded-lg bg-orange-500 text-white">
                          <Activity className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Clinical Decision Support</span>
                      </Button>
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
          </TabsContent>

          <TabsContent value="patients">
            <ClinicalChart patient={mockPatient} />
          </TabsContent>

          <TabsContent value="documentation">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Clinical Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Advanced documentation tools with speech-to-text and AI assistance are being loaded...</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col space-y-2">
                    <Mic className="h-6 w-6" />
                    <span>Voice Documentation</span>
                  </Button>
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <FileText className="h-6 w-6" />
                    <span>SOAP Notes</span>
                  </Button>
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <Sparkles className="h-6 w-6" />
                    <span>AI Templates</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coding">
            <Card>
              <CardHeader>
                <CardTitle>AI Medical Coding Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Intelligent coding suggestions and compliance checking...</p>
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Analyze Documentation for ICD-10 Codes
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate CPT Code Suggestions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Compliance & Quality Check
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflows">
            <Card>
              <CardHeader>
                <CardTitle>Clinical Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Automated clinical workflows and decision support...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-16 flex flex-col space-y-2" variant="outline">
                    <Calendar className="h-6 w-6" />
                    <span>Automated Scheduling</span>
                  </Button>
                  <Button className="h-16 flex flex-col space-y-2" variant="outline">
                    <HeartPulse className="h-6 w-6" />
                    <span>Clinical Alerts</span>
                  </Button>
                  <Button className="h-16 flex flex-col space-y-2" variant="outline">
                    <Pill className="h-6 w-6" />
                    <span>Drug Interaction Checking</span>
                  </Button>
                  <Button className="h-16 flex flex-col space-y-2" variant="outline">
                    <FileText className="h-6 w-4" />
                    <span>Quality Measures</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
