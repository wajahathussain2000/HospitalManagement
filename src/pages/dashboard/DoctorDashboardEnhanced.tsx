import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Stethoscope, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Phone,
  MessageSquare,
  Activity,
  TrendingUp,
  TrendingDown,
  Bell,
  Search,
  Filter,
  Eye,
  Edit,
  Plus,
  Video,
  Mic,
  Camera,
  Download,
  Upload,
  Star,
  Heart,
  Zap,
  Users,
  Pill,
  BarChart3,
  PieChart,
  Target,
  Settings,
  Mail,
  Send,
  Archive,
  Trash2,
  RefreshCw,
  Calendar as CalendarComponent,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2
} from 'lucide-react';

export default function DoctorDashboardEnhanced() {
  const { doctor, getDoctorSpecialization, getDoctorDepartment } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');

  // Today's comprehensive stats
  const todayStats = [
    { 
      title: 'Today\'s Appointments', 
      value: '12', 
      change: '+2',
      trend: 'up',
      icon: CalendarIcon, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Total scheduled appointments'
    },
    { 
      title: 'Total Patients', 
      value: '247', 
      change: '+8',
      trend: 'up',
      icon: Users, 
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Active patients under care'
    },
    { 
      title: 'Completed Visits', 
      value: '8', 
      change: '+1',
      trend: 'up',
      icon: CheckCircle, 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Consultations completed today'
    },
    { 
      title: 'Pending Lab Reports', 
      value: '15', 
      change: '-3',
      trend: 'down',
      icon: FileText, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Awaiting test results'
    },
    { 
      title: 'Prescriptions Issued', 
      value: '23', 
      change: '+5',
      trend: 'up',
      icon: Pill, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Digital prescriptions today'
    },
    { 
      title: 'Emergency Cases', 
      value: '2', 
      change: '+1',
      trend: 'up',
      icon: AlertCircle, 
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Critical cases requiring attention'
    }
  ];

  // Comprehensive appointment data
  const upcomingAppointments = [
    {
      id: '1',
      patient: 'John Smith',
      patientId: 'P001234',
      time: '09:00 AM',
      duration: 30,
      type: 'Follow-up',
      status: 'confirmed',
      priority: 'normal',
      notes: 'Diabetes management follow-up - Check HbA1c results',
      phone: '+1 (555) 123-4567',
      age: 45,
      gender: 'Male',
      room: 'Room 101',
      insurance: 'Blue Cross',
      lastVisit: '2024-01-15',
      chiefComplaint: 'Diabetes control review'
    },
    {
      id: '2',
      patient: 'Sarah Johnson',
      patientId: 'P001235',
      time: '09:30 AM',
      duration: 45,
      type: 'New Consultation',
      status: 'confirmed',
      priority: 'normal',
      notes: 'New patient consultation - Comprehensive health assessment',
      phone: '+1 (555) 234-5678',
      age: 32,
      gender: 'Female',
      room: 'Room 102',
      insurance: 'Aetna',
      lastVisit: null,
      chiefComplaint: 'Annual physical examination'
    },
    {
      id: '3',
      patient: 'Michael Brown',
      patientId: 'P001236',
      time: '10:15 AM',
      duration: 20,
      type: 'Emergency',
      status: 'urgent',
      priority: 'high',
      notes: 'Chest pain - Immediate attention required - ECG needed',
      phone: '+1 (555) 345-6789',
      age: 58,
      gender: 'Male',
      room: 'Emergency Room 1',
      insurance: 'Medicare',
      lastVisit: '2024-01-10',
      chiefComplaint: 'Acute chest pain'
    },
    {
      id: '4',
      patient: 'Emily Davis',
      patientId: 'P001237',
      time: '11:00 AM',
      duration: 30,
      type: 'Routine Check',
      status: 'confirmed',
      priority: 'normal',
      notes: 'Annual physical examination - Vaccination due',
      phone: '+1 (555) 456-7890',
      age: 28,
      gender: 'Female',
      room: 'Room 103',
      insurance: 'Cigna',
      lastVisit: '2023-12-20',
      chiefComplaint: 'Routine health check'
    },
    {
      id: '5',
      patient: 'Robert Wilson',
      patientId: 'P001238',
      time: '11:45 AM',
      duration: 25,
      type: 'Follow-up',
      status: 'pending',
      priority: 'normal',
      notes: 'Hypertension follow-up - Review medication effectiveness',
      phone: '+1 (555) 567-8901',
      age: 67,
      gender: 'Male',
      room: 'Room 104',
      insurance: 'UnitedHealth',
      lastVisit: '2024-01-05',
      chiefComplaint: 'Blood pressure monitoring'
    }
  ];

  // Recent patients with comprehensive data
  const recentPatients = [
    {
      id: '1',
      name: 'Alice Wilson',
      patientId: 'P001230',
      lastVisit: '2024-01-15',
      condition: 'Hypertension',
      status: 'stable',
      nextAppointment: '2024-02-15',
      age: 55,
      gender: 'Female',
      phone: '+1 (555) 111-2222',
      insurance: 'Blue Cross',
      lastDiagnosis: 'Essential Hypertension',
      medications: ['Lisinopril 10mg', 'Amlodipine 5mg'],
      labResults: 'Pending',
      satisfaction: 4.8,
      riskLevel: 'Low'
    },
    {
      id: '2',
      name: 'Robert Taylor',
      patientId: 'P001231',
      lastVisit: '2024-01-14',
      condition: 'Diabetes Type 2',
      status: 'improving',
      nextAppointment: '2024-02-10',
      age: 62,
      gender: 'Male',
      phone: '+1 (555) 222-3333',
      insurance: 'Aetna',
      lastDiagnosis: 'Type 2 Diabetes Mellitus',
      medications: ['Metformin 1000mg', 'Glipizide 10mg'],
      labResults: 'Available',
      satisfaction: 4.5,
      riskLevel: 'Medium'
    },
    {
      id: '3',
      name: 'Lisa Anderson',
      patientId: 'P001232',
      lastVisit: '2024-01-13',
      condition: 'Migraine',
      status: 'monitoring',
      nextAppointment: '2024-01-20',
      age: 38,
      gender: 'Female',
      phone: '+1 (555) 333-4444',
      insurance: 'Cigna',
      lastDiagnosis: 'Chronic Migraine',
      medications: ['Sumatriptan 50mg', 'Propranolol 40mg'],
      labResults: 'Normal',
      satisfaction: 4.9,
      riskLevel: 'Low'
    }
  ];

  // Notifications data
  const notifications = [
    {
      id: '1',
      type: 'appointment',
      title: 'New Appointment Scheduled',
      message: 'John Smith has scheduled a follow-up appointment for tomorrow at 10:00 AM',
      time: '5 minutes ago',
      priority: 'normal',
      read: false
    },
    {
      id: '2',
      type: 'lab',
      title: 'Lab Results Available',
      message: 'Blood test results for Sarah Johnson are ready for review',
      time: '15 minutes ago',
      priority: 'high',
      read: false
    },
    {
      id: '3',
      type: 'emergency',
      title: 'Emergency Case Alert',
      message: 'Michael Brown requires immediate attention - chest pain reported',
      time: '30 minutes ago',
      priority: 'urgent',
      read: true
    },
    {
      id: '4',
      type: 'message',
      title: 'Message from Nurse',
      message: 'Patient Emily Davis is ready for consultation in Room 103',
      time: '1 hour ago',
      priority: 'normal',
      read: true
    }
  ];

  // Performance metrics
  const performanceMetrics = {
    totalPatients: 247,
    avgConsultationTime: 25,
    patientSatisfaction: 4.7,
    prescriptionsToday: 23,
    labOrdersToday: 8,
    followUpRate: 85,
    emergencyResponseTime: 3.2
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50 border-red-200';
      case 'normal': return 'bg-green-50 border-green-200';
      case 'low': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment': return <CalendarIcon className="h-4 w-4" />;
      case 'lab': return <FileText className="h-4 w-4" />;
      case 'emergency': return <AlertCircle className="h-4 w-4" />;
      case 'message': return <MessageSquare className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'normal': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, {doctor ? `${doctor.firstName} ${doctor.lastName}` : 'Dr. Smith'} - {getDoctorSpecialization() || 'Cardiologist'}
            </p>
            <p className="text-sm text-gray-500">Today is {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
              <Stethoscope className="h-3 w-3 mr-1" />
              {getDoctorSpecialization() || 'Cardiologist'}
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              Online
            </Badge>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {todayStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs font-medium text-gray-600">{stat.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content with Enhanced Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        Today's Schedule
                      </div>
                      <Badge variant="outline">12 Appointments</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96">
                      <div className="space-y-3">
                        {upcomingAppointments.slice(0, 5).map((appointment) => (
                          <div key={appointment.id} className={`p-4 border rounded-lg hover:bg-gray-50 transition-colors ${getPriorityColor(appointment.priority)}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div>
                                    <div className="font-medium text-gray-900">{appointment.patient}</div>
                                    <div className="text-sm text-gray-600">ID: {appointment.patientId}</div>
                                  </div>
                                  <Badge className={getStatusColor(appointment.status)}>
                                    {appointment.status}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {appointment.duration}min
                                  </Badge>
                                </div>
                                <div className="text-sm text-gray-600 mb-1">
                                  {appointment.time} • {appointment.type} • {appointment.room}
                                </div>
                                <div className="text-sm text-gray-700">
                                  <strong>Chief Complaint:</strong> {appointment.chiefComplaint}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {appointment.notes}
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MessageSquare className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Notifications */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      New Consultation
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Medical Records
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Pill className="h-4 w-4 mr-2" />
                      E-Prescription
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Activity className="h-4 w-4 mr-2" />
                      Lab Orders
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Video className="h-4 w-4 mr-2" />
                      Telemedicine
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Performance Analytics
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 mr-2" />
                        Notifications
                      </div>
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        3 Unread
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-3">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`p-3 rounded-lg border ${getNotificationColor(notification.priority)} ${!notification.read ? 'border-l-4 border-l-blue-500' : ''}`}>
                            <div className="flex items-start space-x-3">
                              <div className={`p-1 rounded-full ${getNotificationColor(notification.priority)}`}>
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">{notification.title}</div>
                                <div className="text-xs text-gray-600 mt-1">{notification.message}</div>
                                <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        Appointment Management
                      </div>
                      <div className="flex space-x-2">
                        <Input placeholder="Search patients..." className="w-64" />
                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96">
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className={`p-4 border rounded-lg ${getPriorityColor(appointment.priority)}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div>
                                    <div className="font-medium text-gray-900">{appointment.patient}</div>
                                    <div className="text-sm text-gray-600">{appointment.patientId} • {appointment.age}y, {appointment.gender}</div>
                                  </div>
                                  <Badge className={getStatusColor(appointment.status)}>
                                    {appointment.status}
                                  </Badge>
                                  <Badge variant="outline">
                                    {appointment.type}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-600">Time:</span> {appointment.time} ({appointment.duration}min)
                                  </div>
                                  <div>
                                    <span className="text-gray-600">Room:</span> {appointment.room}
                                  </div>
                                  <div>
                                    <span className="text-gray-600">Phone:</span> {appointment.phone}
                                  </div>
                                  <div>
                                    <span className="text-gray-600">Insurance:</span> {appointment.insurance}
                                  </div>
                                </div>
                                <div className="text-sm text-gray-700 mt-2">
                                  <strong>Chief Complaint:</strong> {appointment.chiefComplaint}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {appointment.notes}
                                </div>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  <Eye className="h-4 w-4 mr-1" />
                                  Start
                                </Button>
                                <div className="flex space-x-1">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <MessageSquare className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Phone className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Calendar Widget */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarComponent className="h-5 w-5 mr-2" />
                      Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Patient Records
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Search patients..." className="w-64" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div>
                              <div className="font-medium text-gray-900">{patient.name}</div>
                              <div className="text-sm text-gray-600">{patient.patientId} • {patient.age}y, {patient.gender}</div>
                            </div>
                            <Badge className={getStatusColor(patient.status)}>
                              {patient.status}
                            </Badge>
                            <Badge variant="outline">
                              Risk: {patient.riskLevel}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                            <div>
                              <span className="text-gray-600">Condition:</span> {patient.condition}
                            </div>
                            <div>
                              <span className="text-gray-600">Last Visit:</span> {patient.lastVisit}
                            </div>
                            <div>
                              <span className="text-gray-600">Next Appointment:</span> {patient.nextAppointment}
                            </div>
                            <div>
                              <span className="text-gray-600">Satisfaction:</span> 
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span>{patient.satisfaction}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Diagnosis:</span> {patient.lastDiagnosis}
                          </div>
                          <div className="text-sm mt-1">
                            <span className="text-gray-600">Medications:</span> {patient.medications.join(', ')}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Eye className="h-4 w-4 mr-1" />
                            View Record
                          </Button>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      All Notifications
                    </div>
                    <Button variant="outline" size="sm">
                      Mark All Read
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-4 rounded-lg border ${!notification.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full ${getNotificationColor(notification.priority)}`}>
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-sm">{notification.title}</div>
                                <div className="text-xs text-gray-500">{notification.time}</div>
                              </div>
                              <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                              <div className="flex space-x-2 mt-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Archive className="h-3 w-3 mr-1" />
                                  Archive
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Appointment Alerts</div>
                      <div className="text-sm text-gray-600">Get notified about new appointments</div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Lab Results</div>
                      <div className="text-sm text-gray-600">Notifications for lab results</div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Emergency Alerts</div>
                      <div className="text-sm text-gray-600">Critical case notifications</div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Staff Messages</div>
                      <div className="text-sm text-gray-600">Messages from hospital staff</div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CalendarComponent className="h-5 w-5 mr-2" />
                        Schedule Management
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Slot
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <CalendarComponent className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <div className="text-gray-600">Calendar View</div>
                        <div className="text-sm text-gray-500">Full calendar integration coming soon</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingAppointments.slice(0, 4).map((appointment) => (
                        <div key={appointment.id} className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-sm">{appointment.patient}</div>
                              <div className="text-xs text-gray-600">{appointment.time}</div>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Morning (9AM-12PM)</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Afternoon (1PM-5PM)</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Evening (5PM-7PM)</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Limited</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Patients</span>
                      <span className="text-lg font-bold">{performanceMetrics.totalPatients}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Avg Consultation Time</span>
                      <span className="text-lg font-bold">{performanceMetrics.avgConsultationTime} min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Patient Satisfaction</span>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-lg font-bold">{performanceMetrics.patientSatisfaction}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Follow-up Rate</span>
                      <span className="text-lg font-bold">{performanceMetrics.followUpRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Emergency Response Time</span>
                      <span className="text-lg font-bold">{performanceMetrics.emergencyResponseTime} min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2" />
                    Today's Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Prescriptions Issued</span>
                      <span className="text-lg font-bold">{performanceMetrics.prescriptionsToday}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Lab Orders</span>
                      <span className="text-lg font-bold">{performanceMetrics.labOrdersToday}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Completed Consultations</span>
                      <span className="text-lg font-bold">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pending Follow-ups</span>
                      <span className="text-lg font-bold">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
