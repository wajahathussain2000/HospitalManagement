
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Calendar, 
  FileText, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Edit,
  AlertCircle,
  Clock
} from 'lucide-react';

interface PatientData {
  id: string;
  name: string;
  age: number;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  insurance: string;
  status: 'active' | 'inactive';
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  medicalInfo: {
    allergies: string[];
    medications: string[];
    conditions: string[];
  };
  appointments: Array<{
    date: string;
    time: string;
    type: string;
    status: string;
    provider: string;
  }>;
  documents: Array<{
    name: string;
    type: string;
    date: string;
  }>;
}

interface PatientDashboardProps {
  patient: PatientData;
  onEdit: () => void;
  onScheduleAppointment: () => void;
  onViewMedicalHistory: () => void;
}

export function PatientDashboard({ 
  patient, 
  onEdit, 
  onScheduleAppointment, 
  onViewMedicalHistory 
}: PatientDashboardProps) {
  
  const upcomingAppointments = patient.appointments
    .filter(apt => new Date(apt.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const recentDocuments = patient.documents
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Patient Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>ID: {patient.id}</span>
                  <span>Age: {patient.age}</span>
                  <span>DOB: {patient.dateOfBirth}</span>
                  <Badge variant={patient.status === 'active' ? 'default' : 'secondary'}>
                    {patient.status}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={onEdit}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Patient
              </Button>
              <Button onClick={onScheduleAppointment}>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{patient.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{patient.email}</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
              <span className="text-sm">{patient.address}</span>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-2">Emergency Contact</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{patient.emergencyContact.name}</p>
                <p>{patient.emergencyContact.phone}</p>
                <p className="text-xs">{patient.emergencyContact.relation}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Insurance & Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-900">Primary Insurance</p>
                <p className="text-sm text-gray-600">{patient.insurance}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Verify Coverage
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start" onClick={onViewMedicalHistory}>
              <FileText className="h-4 w-4 mr-2" />
              Medical History
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Heart className="h-4 w-4 mr-2" />
              Vital Signs
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Progress Notes
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Treatment Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="medical">Medical Info</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingAppointments.map((appointment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{appointment.type}</p>
                          <p className="text-xs text-gray-600">{appointment.date} at {appointment.time}</p>
                          <p className="text-xs text-gray-500">{appointment.provider}</p>
                        </div>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No upcoming appointments</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Medical Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Medical Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {patient.medicalInfo.allergies.length > 0 && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-medium text-red-800 text-sm">Allergies</p>
                      <p className="text-sm text-red-600">{patient.medicalInfo.allergies.join(', ')}</p>
                    </div>
                  )}
                  
                  {patient.medicalInfo.conditions.length > 0 && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="font-medium text-yellow-800 text-sm">Conditions</p>
                      <p className="text-sm text-yellow-600">{patient.medicalInfo.conditions.slice(0, 3).join(', ')}</p>
                      {patient.medicalInfo.conditions.length > 3 && (
                        <p className="text-xs text-yellow-500">+{patient.medicalInfo.conditions.length - 3} more</p>
                      )}
                    </div>
                  )}
                  
                  {patient.medicalInfo.medications.length > 0 && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-medium text-blue-800 text-sm">Current Medications</p>
                      <p className="text-sm text-blue-600">{patient.medicalInfo.medications.slice(0, 2).join(', ')}</p>
                      {patient.medicalInfo.medications.length > 2 && (
                        <p className="text-xs text-blue-500">+{patient.medicalInfo.medications.length - 2} more</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Appointment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patient.appointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{appointment.type}</p>
                      <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                      <p className="text-sm text-gray-500">with {appointment.provider}</p>
                    </div>
                    <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                      {appointment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Allergies</CardTitle>
              </CardHeader>
              <CardContent>
                {patient.medicalInfo.allergies.length > 0 ? (
                  <div className="space-y-2">
                    {patient.medicalInfo.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="mr-2">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No known allergies</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Medications</CardTitle>
              </CardHeader>
              <CardContent>
                {patient.medicalInfo.medications.length > 0 ? (
                  <div className="space-y-2">
                    {patient.medicalInfo.medications.map((medication, index) => (
                      <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                        {medication}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No current medications</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Medical Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                {patient.medicalInfo.conditions.length > 0 ? (
                  <div className="space-y-2">
                    {patient.medicalInfo.conditions.map((condition, index) => (
                      <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                        {condition}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No known conditions</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Patient Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentDocuments.map((document, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-sm">{document.name}</p>
                        <p className="text-xs text-gray-500">{document.type} • {document.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
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
