
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Plus, 
  Clock, 
  User, 
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const appointments = [
  {
    id: 'APT-001',
    time: '9:00 AM',
    patient: 'Emily Davis',
    type: 'Physical Therapy',
    provider: 'Dr. Smith',
    room: 'Room 101',
    status: 'confirmed',
    duration: '60 min'
  },
  {
    id: 'APT-002',
    time: '10:30 AM',
    patient: 'Robert Chen',
    type: 'Consultation',
    provider: 'Dr. Johnson',
    room: 'Room 102',
    status: 'pending',
    duration: '30 min'
  },
  {
    id: 'APT-003',
    time: '2:00 PM',
    patient: 'Maria Garcia',
    type: 'Follow-up',
    provider: 'Dr. Smith',
    room: 'Room 101',
    status: 'confirmed',
    duration: '45 min'
  },
  {
    id: 'APT-004',
    time: '3:30 PM',
    patient: 'James Wilson',
    type: 'Initial Evaluation',
    provider: 'Dr. Brown',
    room: 'Room 103',
    status: 'new',
    duration: '90 min'
  }
];

export default function Scheduling() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
            <p className="text-gray-600 mt-1">Manage appointments and provider schedules</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Calendar Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="font-medium">January 2024</span>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
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
                {appointments.map((appointment) => (
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
                            {appointment.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          {appointment.type} • {appointment.provider}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {appointment.room}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Clock className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
