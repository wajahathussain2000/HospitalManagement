import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  User, 
  Stethoscope, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Phone,
  MessageSquare,
  Activity
} from 'lucide-react';

export default function DoctorDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todayStats = [
    { title: 'Today\'s Appointments', value: '12', icon: Calendar, color: 'text-blue-600' },
    { title: 'Completed', value: '8', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Pending', value: '4', icon: Clock, color: 'text-yellow-600' },
    { title: 'Emergency Cases', value: '2', icon: AlertCircle, color: 'text-red-600' }
  ];

  const upcomingAppointments = [
    {
      id: '1',
      patient: 'John Smith',
      time: '09:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
      notes: 'Diabetes management follow-up'
    },
    {
      id: '2',
      patient: 'Sarah Johnson',
      time: '10:30 AM',
      type: 'Consultation',
      status: 'confirmed',
      notes: 'New patient consultation'
    },
    {
      id: '3',
      patient: 'Michael Brown',
      time: '11:15 AM',
      type: 'Emergency',
      status: 'urgent',
      notes: 'Chest pain - immediate attention required'
    },
    {
      id: '4',
      patient: 'Emily Davis',
      time: '02:00 PM',
      type: 'Routine Check',
      status: 'confirmed',
      notes: 'Annual physical examination'
    }
  ];

  const recentPatients = [
    {
      id: '1',
      name: 'Alice Wilson',
      lastVisit: '2024-01-15',
      condition: 'Hypertension',
      nextAppointment: '2024-02-15',
      status: 'stable'
    },
    {
      id: '2',
      name: 'Robert Taylor',
      lastVisit: '2024-01-14',
      condition: 'Diabetes Type 2',
      nextAppointment: '2024-02-10',
      status: 'improving'
    },
    {
      id: '3',
      name: 'Lisa Anderson',
      lastVisit: '2024-01-13',
      condition: 'Migraine',
      nextAppointment: '2024-01-20',
      status: 'monitoring'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionStatus = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'improving': return 'bg-blue-100 text-blue-800';
      case 'monitoring': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Dr. Smith</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              <Stethoscope className="h-3 w-3 mr-1" />
              Cardiologist
            </Badge>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Today's Appointments</TabsTrigger>
            <TabsTrigger value="patients">Recent Patients</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Cases</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Appointments List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium">{appointment.patient}</div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {appointment.time} • {appointment.type}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {appointment.notes}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    View All Patients
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Medical Records
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Prescriptions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Lab Results
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium">{patient.name}</div>
                          <Badge className={getConditionStatus(patient.status)}>
                            {patient.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {patient.condition}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Last visit: {patient.lastVisit} • Next: {patient.nextAppointment}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Emergency Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-red-900">Michael Brown</div>
                        <div className="text-sm text-red-700">Chest pain - Immediate attention required</div>
                        <div className="text-xs text-red-600">Room 205 • 11:15 AM</div>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Attend Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-yellow-900">Sarah Wilson</div>
                        <div className="text-sm text-yellow-700">Severe headache - Priority case</div>
                        <div className="text-xs text-yellow-600">Room 103 • 12:30 PM</div>
                      </div>
                      <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-700">
                        <Clock className="h-4 w-4 mr-1" />
                        In Queue
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
