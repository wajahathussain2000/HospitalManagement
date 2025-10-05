import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  Clock, 
  Video, 
  Phone,
  FileText,
  Pill,
  Activity,
  Heart,
  AlertTriangle,
  CheckCircle,
  User,
  Bell,
  TrendingUp,
  Star,
  Award,
  Plus
} from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  time: string;
  type: 'consultation' | 'follow_up' | 'emergency' | 'telemedicine';
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  reason: string;
  isTelemedicine: boolean;
  meetingLink?: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: Date;
  nextAppointment?: Date;
  conditions: string[];
  medications: string[];
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
  };
}

interface TodayStats {
  totalAppointments: number;
  completedAppointments: number;
  pendingAppointments: number;
  emergencyCases: number;
  telemedicineSessions: number;
  revenue: number;
}

export default function DoctorDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const todayStats: TodayStats = {
    totalAppointments: 12,
    completedAppointments: 8,
    pendingAppointments: 4,
    emergencyCases: 2,
    telemedicineSessions: 3,
    revenue: 4500
  };

  const todayAppointments: Appointment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      patientId: 'P001',
      time: '09:00',
      type: 'consultation',
      status: 'completed',
      priority: 'medium',
      reason: 'Routine checkup',
      isTelemedicine: false
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      patientId: 'P002',
      time: '09:30',
      type: 'follow_up',
      status: 'completed',
      priority: 'medium',
      reason: 'Follow-up for hypertension',
      isTelemedicine: false
    },
    {
      id: '3',
      patientName: 'Mike Johnson',
      patientId: 'P003',
      time: '10:00',
      type: 'telemedicine',
      status: 'in_progress',
      priority: 'high',
      reason: 'Chest pain consultation',
      isTelemedicine: true,
      meetingLink: 'https://meet.hospital.com/abc123'
    },
    {
      id: '4',
      patientName: 'Sarah Wilson',
      patientId: 'P004',
      time: '10:30',
      type: 'emergency',
      status: 'scheduled',
      priority: 'urgent',
      reason: 'Emergency consultation',
      isTelemedicine: false
    },
    {
      id: '5',
      patientName: 'David Brown',
      patientId: 'P005',
      time: '11:00',
      type: 'consultation',
      status: 'scheduled',
      priority: 'medium',
      reason: 'New patient consultation',
      isTelemedicine: false
    }
  ];

  const recentPatients: Patient[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      lastVisit: new Date('2024-01-15'),
      nextAppointment: new Date('2024-02-15'),
      conditions: ['Hypertension', 'Diabetes'],
      medications: ['Metformin', 'Lisinopril'],
      vitalSigns: {
        bloodPressure: '140/90',
        heartRate: 85,
        temperature: 98.6
      }
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 38,
      gender: 'Female',
      lastVisit: new Date('2024-01-14'),
      conditions: ['Asthma'],
      medications: ['Albuterol'],
      vitalSigns: {
        bloodPressure: '120/80',
        heartRate: 72,
        temperature: 98.4
      }
    }
  ];

  const getAppointmentTypeIcon = (type: string) => {
    switch (type) {
      case 'consultation':
        return <Stethoscope className="h-4 w-4" />;
      case 'follow_up':
        return <Calendar className="h-4 w-4" />;
      case 'emergency':
        return <AlertTriangle className="h-4 w-4" />;
      case 'telemedicine':
        return <Video className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Dr. Smith</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <Video className="h-4 w-4" />
            <span>Start Telemedicine</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Consultation</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                <p className="text-2xl font-bold text-blue-600">{todayStats.totalAppointments}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{todayStats.completedAppointments}</p>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{todayStats.pendingAppointments}</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Emergency</p>
                <p className="text-2xl font-bold text-red-600">{todayStats.emergencyCases}</p>
              </div>
              <div className="p-3 rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Telemedicine</p>
                <p className="text-2xl font-bold text-purple-600">{todayStats.telemedicineSessions}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-bold text-emerald-600">₹{todayStats.revenue}</p>
              </div>
              <div className="p-3 rounded-full bg-emerald-100">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          {getAppointmentTypeIcon(appointment.type)}
                        </div>
                        <div>
                          <h4 className="font-medium">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-600">{appointment.reason}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getPriorityColor(appointment.priority)}>
                              {appointment.priority}
                            </Badge>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.time}</p>
                        {appointment.isTelemedicine && (
                          <Button size="sm" variant="outline" className="mt-1">
                            <Video className="h-3 w-3 mr-1" />
                            Join
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Recent Patients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                            <span>BP: {patient.vitalSigns.bloodPressure}</span>
                            <span>HR: {patient.vitalSigns.heartRate}</span>
                            <span>Temp: {patient.vitalSigns.temperature}°F</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          Last visit: {patient.lastVisit.toLocaleDateString()}
                        </p>
                        {patient.nextAppointment && (
                          <p className="text-sm text-blue-600">
                            Next: {patient.nextAppointment.toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Appointment Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {getAppointmentTypeIcon(appointment.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{appointment.patientName}</h4>
                        <p className="text-sm text-gray-600">{appointment.reason}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getPriorityColor(appointment.priority)}>
                            {appointment.priority}
                          </Badge>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          {appointment.isTelemedicine && (
                            <Badge className="bg-purple-100 text-purple-800">
                              <Video className="h-3 w-3 mr-1" />
                              Telemedicine
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">{appointment.time}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4" />
                        </Button>
                        {appointment.isTelemedicine && (
                          <Button size="sm" variant="outline">
                            <Video className="h-4 w-4" />
                          </Button>
                        )}
                        <Button size="sm">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          {patient.conditions.map((condition, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Records
                      </Button>
                      <Button size="sm" variant="outline">
                        <Pill className="h-4 w-4 mr-1" />
                        Prescribe
                      </Button>
                      <Button size="sm">
                        <Activity className="h-4 w-4 mr-1" />
                        Consult
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Today's Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Consultations</span>
                    <span className="font-medium">{todayStats.totalAppointments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completed</span>
                    <span className="font-medium text-green-600">{todayStats.completedAppointments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue Generated</span>
                    <span className="font-medium text-emerald-600">₹{todayStats.revenue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Average Consultation Time</span>
                    <span className="font-medium">25 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patient Satisfaction</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">4.8/5</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">On-time Rate</span>
                    <span className="font-medium text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Follow-up Rate</span>
                    <span className="font-medium text-blue-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Emergency Response</span>
                    <span className="font-medium text-red-600">2.5 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
