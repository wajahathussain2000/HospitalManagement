import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  FileText, 
  Pill, 
  Activity, 
  Heart, 
  Clock,
  Video,
  Phone,
  Mail,
  MapPin,
  User,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Star,
  Download,
  Eye,
  Plus
} from 'lucide-react';

interface Appointment {
  id: string;
  doctorName: string;
  department: string;
  date: Date;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  type: 'consultation' | 'follow_up' | 'telemedicine';
  reason: string;
  isTelemedicine: boolean;
  meetingLink?: string;
}

interface MedicalRecord {
  id: string;
  date: Date;
  doctorName: string;
  diagnosis: string;
  treatment: string;
  notes: string;
  prescriptions: Prescription[];
}

interface Prescription {
  id: string;
  medicineName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  isDispensed: boolean;
}

interface LabResult {
  id: string;
  testName: string;
  result: string;
  normalRange: string;
  unit: string;
  isAbnormal: boolean;
  date: Date;
  status: 'pending' | 'completed';
}

export default function PatientDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const upcomingAppointments: Appointment[] = [
    {
      id: '1',
      doctorName: 'Dr. Smith',
      department: 'Cardiology',
      date: new Date('2024-01-20'),
      time: '10:00',
      status: 'scheduled',
      type: 'consultation',
      reason: 'Follow-up for hypertension',
      isTelemedicine: false
    },
    {
      id: '2',
      doctorName: 'Dr. Johnson',
      department: 'General Medicine',
      date: new Date('2024-01-25'),
      time: '14:30',
      status: 'confirmed',
      type: 'telemedicine',
      reason: 'Routine checkup',
      isTelemedicine: true,
      meetingLink: 'https://meet.hospital.com/abc123'
    }
  ];

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      date: new Date('2024-01-15'),
      doctorName: 'Dr. Smith',
      diagnosis: 'Hypertension - Well controlled',
      treatment: 'Continue current medication, lifestyle counseling',
      notes: 'Blood pressure well controlled. Continue current regimen.',
      prescriptions: [
        {
          id: '1',
          medicineName: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '30 days',
          instructions: 'Take with food',
          isDispensed: true
        }
      ]
    }
  ];

  const labResults: LabResult[] = [
    {
      id: '1',
      testName: 'Complete Blood Count',
      result: 'Normal',
      normalRange: 'Normal',
      unit: '',
      isAbnormal: false,
      date: new Date('2024-01-10'),
      status: 'completed'
    },
    {
      id: '2',
      testName: 'Blood Sugar',
      result: '95',
      normalRange: '70-100',
      unit: 'mg/dL',
      isAbnormal: false,
      date: new Date('2024-01-10'),
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'consultation':
        return <Activity className="h-4 w-4" />;
      case 'follow_up':
        return <Calendar className="h-4 w-4" />;
      case 'telemedicine':
        return <Video className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
        <div className={cn(isRTL && "text-right")}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('patient.patientPortal')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{t('patient.welcomeBack')}</p>
        </div>
        <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
          <Button variant="outline" className={cn("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
            <Phone className="h-4 w-4" />
            <span>{t('patient.emergency')}</span>
          </Button>
          <Button className={cn("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
            <Plus className="h-4 w-4" />
            <span>{t('patient.bookAppointment')}</span>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className={cn("flex items-center justify-between", isRTL && "flex-row-reverse")}>
              <div className={cn(isRTL && "text-right")}>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('patient.upcomingAppointments')}</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{upcomingAppointments.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className={cn("flex items-center justify-between", isRTL && "flex-row-reverse")}>
              <div className={cn(isRTL && "text-right")}>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('patient.medicalRecords')}</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{medicalRecords.length}</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Prescriptions</p>
                <p className="text-2xl font-bold text-purple-600">
                  {medicalRecords.reduce((sum, record) => sum + record.prescriptions.length, 0)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <Pill className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lab Results</p>
                <p className="text-2xl font-bold text-orange-600">{labResults.length}</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <Activity className="h-6 w-6 text-orange-600" />
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
          <TabsTrigger value="records">Medical Records</TabsTrigger>
          <TabsTrigger value="lab">Lab Results</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          {getTypeIcon(appointment.type)}
                        </div>
                        <div>
                          <h4 className="font-medium">{appointment.doctorName}</h4>
                          <p className="text-sm text-gray-600">{appointment.department}</p>
                          <p className="text-sm text-gray-600">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.time}</p>
                        <p className="text-sm text-gray-600">{appointment.date.toLocaleDateString()}</p>
                        <div className="flex items-center space-x-2 mt-1">
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
                        {appointment.isTelemedicine && (
                          <Button size="sm" className="mt-2">
                            <Video className="h-4 w-4 mr-1" />
                            Join Call
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Medical Records */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recent Medical Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{record.doctorName}</h4>
                          <p className="text-sm text-gray-600">{record.date.toLocaleDateString()}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Diagnosis:</strong> {record.diagnosis}</div>
                        <div><strong>Treatment:</strong> {record.treatment}</div>
                        <div><strong>Notes:</strong> {record.notes}</div>
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
                Appointment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {getTypeIcon(appointment.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{appointment.doctorName}</h4>
                        <p className="text-sm text-gray-600">{appointment.department}</p>
                        <p className="text-sm text-gray-600">{appointment.reason}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          {appointment.isTelemedicine && (
                            <Badge className="bg-purple-100 text-purple-800">
                              Telemedicine
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{appointment.time}</p>
                      <p className="text-sm text-gray-600">{appointment.date.toLocaleDateString()}</p>
                      <div className="flex space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {appointment.isTelemedicine && (
                          <Button size="sm">
                            <Video className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="records" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Medical Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicalRecords.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-medium">{record.doctorName}</h4>
                        <p className="text-sm text-gray-600">{record.date.toLocaleDateString()}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium">Diagnosis</h5>
                        <p className="text-sm text-gray-600">{record.diagnosis}</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Treatment</h5>
                        <p className="text-sm text-gray-600">{record.treatment}</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Notes</h5>
                        <p className="text-sm text-gray-600">{record.notes}</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Prescriptions</h5>
                        <div className="space-y-2">
                          {record.prescriptions.map((prescription) => (
                            <div key={prescription.id} className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h6 className="font-medium">{prescription.medicineName}</h6>
                                  <p className="text-sm text-gray-600">
                                    {prescription.dosage} • {prescription.frequency} • {prescription.duration}
                                  </p>
                                  <p className="text-sm text-gray-600">{prescription.instructions}</p>
                                </div>
                                <Badge className={prescription.isDispensed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                  {prescription.isDispensed ? 'Dispensed' : 'Pending'}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lab" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Lab Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labResults.map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Activity className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{result.testName}</h4>
                        <p className="text-sm text-gray-600">
                          Result: {result.result} {result.unit}
                        </p>
                        <p className="text-sm text-gray-600">
                          Normal Range: {result.normalRange}
                        </p>
                        <p className="text-sm text-gray-600">
                          Date: {result.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={
                        result.isAbnormal ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }>
                        {result.isAbnormal ? 'Abnormal' : 'Normal'}
                      </Badge>
                      <div className="flex space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
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