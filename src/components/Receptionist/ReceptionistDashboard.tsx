import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  UserPlus,
  Search,
  FileText,
  CreditCard,
  Bell,
  TrendingUp,
  User,
  Plus,
  Edit,
  Eye,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

interface Patient {
  id: string;
  patientId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  emergencyContact: string;
  insuranceProvider?: string;
  isNew: boolean;
  lastVisit?: Date;
  nextAppointment?: Date;
}

interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  department: string;
  date: Date;
  time: string;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
  type: 'consultation' | 'follow_up' | 'emergency' | 'telemedicine';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  reason: string;
  tokenNumber?: number;
  isTelemedicine: boolean;
  meetingLink?: string;
}

interface Queue {
  id: string;
  patientName: string;
  tokenNumber: number;
  doctorName: string;
  department: string;
  estimatedWaitTime: number;
  status: 'waiting' | 'called' | 'in_consultation' | 'completed';
  appointmentTime: string;
}

interface Payment {
  id: string;
  patientName: string;
  amount: number;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  invoiceNumber: string;
}

export default function ReceptionistDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPatientRegistrationOpen, setIsPatientRegistrationOpen] = useState(false);
  const [isAppointmentBookingOpen, setIsAppointmentBookingOpen] = useState(false);

  const todayStats = {
    totalAppointments: 45,
    completedAppointments: 32,
    pendingAppointments: 13,
    newPatients: 8,
    totalRevenue: 12500,
    averageWaitTime: 15
  };

  const todayAppointments: Appointment[] = [
    {
      id: '1',
      patientId: 'P001',
      patientName: 'John Doe',
      doctorId: 'DOC001',
      doctorName: 'Dr. Smith',
      department: 'Cardiology',
      date: new Date('2024-01-15'),
      time: '09:00',
      status: 'completed',
      type: 'consultation',
      priority: 'medium',
      reason: 'Routine checkup',
      tokenNumber: 1,
      isTelemedicine: false
    },
    {
      id: '2',
      patientId: 'P002',
      patientName: 'Jane Smith',
      doctorId: 'DOC002',
      doctorName: 'Dr. Johnson',
      department: 'Emergency',
      date: new Date('2024-01-15'),
      time: '09:30',
      status: 'in_progress',
      type: 'emergency',
      priority: 'urgent',
      reason: 'Chest pain',
      tokenNumber: 2,
      isTelemedicine: false
    },
    {
      id: '3',
      patientId: 'P003',
      patientName: 'Mike Johnson',
      doctorId: 'DOC001',
      doctorName: 'Dr. Smith',
      department: 'Cardiology',
      date: new Date('2024-01-15'),
      time: '10:00',
      status: 'scheduled',
      type: 'telemedicine',
      priority: 'medium',
      reason: 'Follow-up consultation',
      tokenNumber: 3,
      isTelemedicine: true,
      meetingLink: 'https://meet.hospital.com/abc123'
    }
  ];

  const currentQueue: Queue[] = [
    {
      id: '1',
      patientName: 'Sarah Wilson',
      tokenNumber: 4,
      doctorName: 'Dr. Smith',
      department: 'Cardiology',
      estimatedWaitTime: 20,
      status: 'waiting',
      appointmentTime: '10:30'
    },
    {
      id: '2',
      patientName: 'David Brown',
      tokenNumber: 5,
      doctorName: 'Dr. Johnson',
      department: 'Emergency',
      estimatedWaitTime: 15,
      status: 'called',
      appointmentTime: '11:00'
    }
  ];

  const recentPayments: Payment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      amount: 500,
      paymentMethod: 'UPI',
      status: 'completed',
      createdAt: new Date('2024-01-15T09:15:00'),
      invoiceNumber: 'INV-001'
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      amount: 800,
      paymentMethod: 'Card',
      status: 'completed',
      createdAt: new Date('2024-01-15T09:30:00'),
      invoiceNumber: 'INV-002'
    }
  ];

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
      case 'no_show':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  const getQueueStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800';
      case 'called':
        return 'bg-blue-100 text-blue-800';
      case 'in_consultation':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Receptionist Dashboard</h1>
          <p className="text-gray-600 mt-1">Front desk operations and patient management</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Button>
          <Dialog open={isPatientRegistrationOpen} onOpenChange={setIsPatientRegistrationOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Register Patient</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Patient Registration</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter address" />
                </div>
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <Input id="emergencyContact" placeholder="Enter emergency contact" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsPatientRegistrationOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Register Patient</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isAppointmentBookingOpen} onOpenChange={setIsAppointmentBookingOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Book Appointment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="patientSearch">Search Patient</Label>
                  <Input id="patientSearch" placeholder="Search by name, ID, or phone" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="doctor">Doctor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doc1">Dr. Smith - Cardiology</SelectItem>
                        <SelectItem value="doc2">Dr. Johnson - Emergency</SelectItem>
                        <SelectItem value="doc3">Dr. Wilson - Orthopedics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="appointmentType">Appointment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="follow_up">Follow-up</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="telemedicine">Telemedicine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appointmentDate">Date</Label>
                    <Input id="appointmentDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="appointmentTime">Time</Label>
                    <Input id="appointmentTime" type="time" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea id="reason" placeholder="Enter reason for visit" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsAppointmentBookingOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Book Appointment</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
                <p className="text-sm font-medium text-gray-600">New Patients</p>
                <p className="text-2xl font-bold text-purple-600">{todayStats.newPatients}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <UserPlus className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-emerald-600">₹{todayStats.totalRevenue}</p>
              </div>
              <div className="p-3 rounded-full bg-emerald-100">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Wait Time</p>
                <p className="text-2xl font-bold text-orange-600">{todayStats.averageWaitTime} min</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <Clock className="h-6 w-6 text-orange-600" />
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
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Today's Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-600">
                            {appointment.doctorName} • {appointment.department}
                          </p>
                          <p className="text-sm text-gray-600">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.time}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Badge className={getPriorityColor(appointment.priority)}>
                            {appointment.priority}
                          </Badge>
                        </div>
                        {appointment.tokenNumber && (
                          <p className="text-sm text-gray-600 mt-1">
                            Token #{appointment.tokenNumber}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Queue */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Current Queue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentQueue.map((queue) => (
                    <div key={queue.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-yellow-600">#{queue.tokenNumber}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{queue.patientName}</h4>
                          <p className="text-sm text-gray-600">
                            {queue.doctorName} • {queue.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            Scheduled: {queue.appointmentTime}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getQueueStatusColor(queue.status)}>
                          {queue.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">
                          Wait: {queue.estimatedWaitTime} min
                        </p>
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
              <div className="flex justify-between items-center mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search appointments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    SMS
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{appointment.patientName}</h4>
                        <p className="text-sm text-gray-600">
                          {appointment.doctorName} • {appointment.department}
                        </p>
                        <p className="text-sm text-gray-600">{appointment.reason}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Badge className={getPriorityColor(appointment.priority)}>
                            {appointment.priority}
                          </Badge>
                          {appointment.isTelemedicine && (
                            <Badge className="bg-purple-100 text-purple-800">
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
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Patient Queue Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentQueue.map((queue) => (
                  <div key={queue.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-yellow-600">#{queue.tokenNumber}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{queue.patientName}</h4>
                        <p className="text-sm text-gray-600">
                          {queue.doctorName} • {queue.department}
                        </p>
                        <p className="text-sm text-gray-600">
                          Scheduled: {queue.appointmentTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge className={getQueueStatusColor(queue.status)}>
                          {queue.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">
                          Wait: {queue.estimatedWaitTime} min
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <PhoneCall className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{payment.patientName}</h4>
                        <p className="text-sm text-gray-600">
                          {payment.paymentMethod} • {payment.invoiceNumber}
                        </p>
                        <p className="text-sm text-gray-600">
                          {payment.createdAt.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{payment.amount}</p>
                      <Badge className={
                        payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'failed' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
