
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Calendar, Phone, MapPin } from 'lucide-react';

const upcomingAppointments = [
  {
    id: 1,
    patient: 'Emily Davis',
    time: '9:00 AM',
    type: 'Physical Therapy',
    status: 'confirmed',
    phone: '(555) 123-4567'
  },
  {
    id: 2,
    patient: 'Robert Chen',
    time: '10:30 AM',
    type: 'Consultation',
    status: 'pending',
    phone: '(555) 987-6543'
  },
  {
    id: 3,
    patient: 'Maria Garcia',
    time: '2:00 PM',
    type: 'Follow-up',
    status: 'confirmed',
    phone: '(555) 456-7890'
  },
  {
    id: 4,
    patient: 'James Wilson',
    time: '3:30 PM',
    type: 'Initial Eval',
    status: 'new',
    phone: '(555) 321-0987'
  }
];

const patientStats = [
  {
    label: 'Today\'s Appointments',
    value: '12',
    change: '+2'
  },
  {
    label: 'New Patients',
    value: '3',
    change: '+1'
  },
  {
    label: 'Cancellations',
    value: '1',
    change: '-2'
  }
];

export function PatientOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Patient Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            {patientStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Today's Schedule */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">Today's Schedule</h4>
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4 mr-1" />
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full" variant="outline">
            Add New Patient
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
