import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppointmentBooking } from '@/components/AppointmentBooking';
import { 
  Calendar, 
  Clock, 
  User, 
  Stethoscope,
  AlertCircle,
  CheckCircle,
  Phone,
  MessageSquare,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const mockAppointments = [
  {
    id: 'APT-001',
    time: '9:00 AM',
    patient: 'Emily Davis',
    type: 'Physical Therapy',
    provider: 'Dr. Smith',
    room: 'Room 101',
    status: 'confirmed',
    duration: '60 min',
    date: '2024-01-25'
  },
  {
    id: 'APT-002',
    time: '10:30 AM',
    patient: 'Robert Chen',
    type: 'Consultation',
    provider: 'Dr. Johnson',
    room: 'Room 102',
    status: 'pending',
    duration: '30 min',
    date: '2024-01-25'
  },
  {
    id: 'APT-003',
    time: '2:00 PM',
    patient: 'Maria Garcia',
    type: 'Follow-up',
    provider: 'Dr. Smith',
    room: 'Room 101',
    status: 'confirmed',
    duration: '45 min',
    date: '2024-01-25'
  },
  {
    id: 'APT-004',
    time: '3:30 PM',
    patient: 'James Wilson',
    type: 'Initial Evaluation',
    provider: 'Dr. Brown',
    room: 'Room 103',
    status: 'new',
    duration: '90 min',
    date: '2024-01-25'
  }
];

export default function Scheduling() {
  const { user } = useAuth();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'urgent': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleBookAppointment = (appointment: any) => {
    console.log('Booking appointment:', appointment);
    setShowBookingForm(false);
  };

  const isPatient = user?.role === 'patient';
  const isDoctor = user?.role === 'doctor';
  const isAdmin = user?.role === 'admin';

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
            <p className="text-gray-600 mt-1">
              {isPatient ? 'Book and manage your appointments' : 
               isDoctor ? 'View and manage your appointments' : 
               'Manage all hospital appointments'}
            </p>
          </div>
          {(isPatient || isAdmin) && (
            <Button onClick={() => setShowBookingForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          )}
        </div>

        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            {isPatient && <TabsTrigger value="booking">Book Appointment</TabsTrigger>}
          </TabsList>

          <TabsContent value="appointments">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Calendar Navigation */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">Calendar Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="ghost" size="sm">
                      ←
                    </Button>
                    <span className="font-medium">January 2024</span>
                    <Button variant="ghost" size="sm">
                      →
                    </Button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="font-medium text-gray-600 p-2">S</div>
                    <div className="font-medium text-gray-600 p-2">M</div>
                    <div className="font-medium text-gray-600 p-2">T</div>
                    <div className="font-medium text-gray-600 p-2">W</div>
                    <div className="font-medium text-gray-600 p-2">T</div>
                    <div className="font-medium text-gray-600 p-2">F</div>
                    <div className="font-medium text-gray-600 p-2">S</div>
                    {Array.from({ length: 31 }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`p-2 hover:bg-gray-100 cursor-pointer rounded ${
                          i + 1 === 15 ? 'bg-blue-500 text-white' : ''
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Appointments List */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Today's Schedule - January 15, 2024
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Day</Button>
                      <Button variant="outline" size="sm">Week</Button>
                      <Button variant="outline" size="sm">Month</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="font-bold text-blue-600">{appointment.time}</div>
                            <div className="text-xs text-gray-500">{appointment.duration}</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <User className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{appointment.patient}</span>
                              <Badge className={getStatusColor(appointment.status)}>
                                {getStatusIcon(appointment.status)}
                                <span className="ml-1">{appointment.status}</span>
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              {appointment.type} • {appointment.provider}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Stethoscope className="h-3 w-3 mr-1" />
                              {appointment.room}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {(isDoctor || isAdmin) && (
                            <>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          {isPatient && (
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Calendar view will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {isPatient && (
            <TabsContent value="booking">
              <AppointmentBooking 
                onBookAppointment={handleBookAppointment}
                onCancel={() => setShowBookingForm(false)}
              />
            </TabsContent>
          )}
        </Tabs>

        {/* Emergency Section */}
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-medium text-red-900">Emergency Appointments</h3>
                  <p className="text-sm text-red-700">
                    For urgent medical situations, emergency appointments are available 24/7
                  </p>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Booking
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}