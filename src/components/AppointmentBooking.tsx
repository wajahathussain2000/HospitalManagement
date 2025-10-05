import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { TimePicker } from '@/components/ui/time-picker';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Stethoscope, 
  AlertCircle,
  CheckCircle,
  Phone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availableSlots: string[];
  consultationFee: number;
}

interface AppointmentBookingProps {
  onBookAppointment?: (appointment: any) => void;
  onCancel?: () => void;
}

const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    availableSlots: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    consultationFee: 150
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'General Medicine',
    availableSlots: ['09:30', '10:30', '11:30', '14:30', '15:30'],
    consultationFee: 100
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    specialization: 'Dermatologist',
    availableSlots: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    consultationFee: 120
  },
  {
    id: '4',
    name: 'Dr. Robert Wilson',
    specialization: 'Orthopedist',
    availableSlots: ['08:00', '09:00', '10:00', '13:00', '14:00'],
    consultationFee: 180
  }
];

export function AppointmentBooking({ onBookAppointment, onCancel }: AppointmentBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [isEmergency, setIsEmergency] = useState(false);
  const { toast } = useToast();

  const selectedDoctorData = mockDoctors.find(d => d.id === selectedDoctor);

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedDoctor || !selectedTime || !appointmentType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const appointment = {
      id: Date.now().toString(),
      doctor: selectedDoctorData?.name,
      specialization: selectedDoctorData?.specialization,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      type: appointmentType,
      reason,
      isEmergency,
      fee: selectedDoctorData?.consultationFee,
      status: isEmergency ? 'urgent' : 'pending'
    };

    onBookAppointment?.(appointment);
    
    toast({
      title: "Appointment Booked",
      description: `Your appointment with ${selectedDoctorData?.name} has been scheduled.`,
    });
  };

  const handleEmergencyBooking = () => {
    setIsEmergency(true);
    toast({
      title: "Emergency Appointment",
      description: "Emergency appointments are handled immediately. You will be contacted shortly.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      {/* Emergency Section */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-medium text-red-900">Emergency Appointment</h3>
                <p className="text-sm text-red-700">Need immediate medical attention?</p>
              </div>
            </div>
            <Button 
              onClick={handleEmergencyBooking}
              className="bg-red-600 hover:bg-red-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Emergency Booking
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointment Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Doctor Selection */}
            <div className="space-y-2">
              <Label htmlFor="doctor">Select Doctor *</Label>
              <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a doctor" />
                </SelectTrigger>
                <SelectContent>
                  {mockDoctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="font-medium">{doctor.name}</div>
                          <div className="text-sm text-gray-600">{doctor.specialization}</div>
                        </div>
                        <div className="text-sm text-gray-500 ml-4">
                          ${doctor.consultationFee}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Appointment Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Appointment Type *</Label>
              <Select value={appointmentType} onValueChange={setAppointmentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                  <SelectItem value="routine">Routine Check-up</SelectItem>
                  <SelectItem value="specialist">Specialist Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <Label>Select Date *</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <Label htmlFor="time">Select Time *</Label>
              <TimePicker
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="Choose time"
              />
            </div>

            {/* Reason */}
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Describe your symptoms or reason for the appointment..."
                rows={3}
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <Button onClick={handleBookAppointment} className="flex-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              {onCancel && (
                <Button variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Doctor Information */}
        {selectedDoctorData && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2" />
                Doctor Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{selectedDoctorData.name}</h3>
                  <p className="text-sm text-gray-600">{selectedDoctorData.specialization}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Consultation Fee:</span>
                  <span className="font-medium">${selectedDoctorData.consultationFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Available Slots:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedDoctorData.availableSlots.map((slot, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {slot}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Available Times</h4>
                <div className="grid grid-cols-3 gap-2">
                  {selectedDoctorData.availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={selectedTime === slot ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(slot)}
                      className="text-xs"
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
