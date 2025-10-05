import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Search, 
  Eye, 
  FileText, 
  Pill, 
  Activity,
  Heart,
  Calendar,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  Stethoscope,
  User,
  Plus,
  Edit,
  Filter
} from 'lucide-react';

interface Patient {
  id: string;
  patientId: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email?: string;
  address: string;
  lastVisit: Date;
  nextAppointment?: Date;
  conditions: string[];
  medications: string[];
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    weight: number;
    height: number;
    bmi: number;
  };
  allergies: string[];
  emergencyContact: string;
  insuranceProvider?: string;
  isActive: boolean;
}

interface MedicalRecord {
  id: string;
  patientId: string;
  date: Date;
  type: 'consultation' | 'follow_up' | 'emergency' | 'procedure';
  diagnosis: string;
  treatment: string;
  notes: string;
  doctorId: string;
  doctorName: string;
  prescriptions: Prescription[];
  labResults?: LabResult[];
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    weight: number;
    height: number;
  };
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
}

export default function PatientManagement() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      patientId: 'P001',
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      phone: '+1234567890',
      email: 'john.doe@email.com',
      address: '123 Main St, City',
      lastVisit: new Date('2024-01-15'),
      nextAppointment: new Date('2024-02-15'),
      conditions: ['Hypertension', 'Diabetes Type 2'],
      medications: ['Metformin 500mg', 'Lisinopril 10mg'],
      vitalSigns: {
        bloodPressure: '140/90',
        heartRate: 85,
        temperature: 98.6,
        weight: 180,
        height: 70,
        bmi: 25.8
      },
      allergies: ['Penicillin'],
      emergencyContact: 'Jane Doe - +1234567891',
      insuranceProvider: 'HealthPlus Insurance',
      isActive: true
    },
    {
      id: '2',
      patientId: 'P002',
      name: 'Jane Smith',
      age: 38,
      gender: 'Female',
      phone: '+1234567892',
      email: 'jane.smith@email.com',
      address: '456 Oak Ave, City',
      lastVisit: new Date('2024-01-14'),
      conditions: ['Asthma', 'Allergic Rhinitis'],
      medications: ['Albuterol Inhaler', 'Loratadine 10mg'],
      vitalSigns: {
        bloodPressure: '120/80',
        heartRate: 72,
        temperature: 98.4,
        weight: 140,
        height: 65,
        bmi: 23.3
      },
      allergies: ['Dust', 'Pollen'],
      emergencyContact: 'Mike Smith - +1234567893',
      insuranceProvider: 'MediCare',
      isActive: true
    },
    {
      id: '3',
      patientId: 'P003',
      name: 'Mike Johnson',
      age: 52,
      gender: 'Male',
      phone: '+1234567894',
      email: 'mike.johnson@email.com',
      address: '789 Pine St, City',
      lastVisit: new Date('2024-01-10'),
      conditions: ['Coronary Artery Disease', 'High Cholesterol'],
      medications: ['Atorvastatin 20mg', 'Aspirin 81mg'],
      vitalSigns: {
        bloodPressure: '135/85',
        heartRate: 78,
        temperature: 98.2,
        weight: 200,
        height: 72,
        bmi: 27.1
      },
      allergies: [],
      emergencyContact: 'Sarah Johnson - +1234567895',
      insuranceProvider: 'Blue Cross',
      isActive: true
    }
  ]);

  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([
    {
      id: '1',
      patientId: 'P001',
      date: new Date('2024-01-15'),
      type: 'consultation',
      diagnosis: 'Hypertension - Well controlled',
      treatment: 'Continue current medication, lifestyle counseling',
      notes: 'Patient reports good compliance with medication. Blood pressure well controlled. Advised to continue current regimen.',
      doctorId: 'DOC001',
      doctorName: 'Dr. Smith',
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
      ],
      vitalSigns: {
        bloodPressure: '140/90',
        heartRate: 85,
        temperature: 98.6,
        weight: 180,
        height: 70
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isPatientDetailOpen, setIsPatientDetailOpen] = useState(false);
  const [isNewConsultationOpen, setIsNewConsultationOpen] = useState(false);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const getConditionColor = (condition: string) => {
    const conditionColors: { [key: string]: string } = {
      'Hypertension': 'bg-red-100 text-red-800',
      'Diabetes Type 2': 'bg-blue-100 text-blue-800',
      'Asthma': 'bg-green-100 text-green-800',
      'Allergic Rhinitis': 'bg-yellow-100 text-yellow-800',
      'Coronary Artery Disease': 'bg-red-100 text-red-800',
      'High Cholesterol': 'bg-orange-100 text-orange-800'
    };
    return conditionColors[condition] || 'bg-gray-100 text-gray-800';
  };

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { status: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { status: 'Normal', color: 'text-green-600' };
    if (bmi < 30) return { status: 'Overweight', color: 'text-yellow-600' };
    return { status: 'Obese', color: 'text-red-600' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600 mt-1">Manage patient records and medical history</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Consultation</span>
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search patients by name, ID, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Patients ({filteredPatients.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Conditions</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Vital Signs</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-600">{patient.patientId} • {patient.age} years, {patient.gender}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{patient.phone}</span>
                      </div>
                      {patient.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{patient.email}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {patient.conditions.slice(0, 2).map((condition, index) => (
                        <Badge key={index} className={getConditionColor(condition)}>
                          {condition}
                        </Badge>
                      ))}
                      {patient.conditions.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{patient.conditions.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{patient.lastVisit.toLocaleDateString()}</span>
                    </div>
                    {patient.nextAppointment && (
                      <div className="text-xs text-blue-600 mt-1">
                        Next: {patient.nextAppointment.toLocaleDateString()}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div>BP: {patient.vitalSigns.bloodPressure}</div>
                      <div>HR: {patient.vitalSigns.heartRate} bpm</div>
                      <div>BMI: {patient.vitalSigns.bmi} 
                        <span className={`ml-1 ${getBMIStatus(patient.vitalSigns.bmi).color}`}>
                          ({getBMIStatus(patient.vitalSigns.bmi).status})
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedPatient(patient);
                          setIsPatientDetailOpen(true);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pill className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        <Activity className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Patient Detail Dialog */}
      <Dialog open={isPatientDetailOpen} onOpenChange={setIsPatientDetailOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Patient Details - {selectedPatient?.name}</DialogTitle>
          </DialogHeader>
          {selectedPatient && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Patient ID:</strong> {selectedPatient.patientId}</div>
                      <div><strong>Age:</strong> {selectedPatient.age} years</div>
                      <div><strong>Gender:</strong> {selectedPatient.gender}</div>
                      <div><strong>Phone:</strong> {selectedPatient.phone}</div>
                      {selectedPatient.email && (
                        <div><strong>Email:</strong> {selectedPatient.email}</div>
                      )}
                      <div><strong>Address:</strong> {selectedPatient.address}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Emergency Contact</h4>
                    <div className="text-sm">{selectedPatient.emergencyContact}</div>
                    {selectedPatient.insuranceProvider && (
                      <>
                        <h4 className="font-medium mb-2 mt-4">Insurance</h4>
                        <div className="text-sm">{selectedPatient.insuranceProvider}</div>
                      </>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Current Conditions</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPatient.conditions.map((condition, index) => (
                      <Badge key={index} className={getConditionColor(condition)}>
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Current Medications</h4>
                  <div className="space-y-1">
                    {selectedPatient.medications.map((medication, index) => (
                      <div key={index} className="text-sm">{medication}</div>
                    ))}
                  </div>
                </div>

                {selectedPatient.allergies.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Allergies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient.allergies.map((allergy, index) => (
                        <Badge key={index} className="bg-red-100 text-red-800">
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="medical" className="space-y-4">
                <div className="space-y-4">
                  {medicalRecords
                    .filter(record => record.patientId === selectedPatient.patientId)
                    .map((record) => (
                    <div key={record.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{record.type.charAt(0).toUpperCase() + record.type.slice(1)}</h4>
                          <p className="text-sm text-gray-600">{record.date.toLocaleDateString()} • {record.doctorName}</p>
                        </div>
                        <Badge variant="outline">{record.type}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div><strong>Diagnosis:</strong> {record.diagnosis}</div>
                        <div><strong>Treatment:</strong> {record.treatment}</div>
                        <div><strong>Notes:</strong> {record.notes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="vitals" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Blood Pressure</h4>
                      <div className="text-2xl font-bold text-blue-600">{selectedPatient.vitalSigns.bloodPressure}</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Heart Rate</h4>
                      <div className="text-2xl font-bold text-red-600">{selectedPatient.vitalSigns.heartRate} bpm</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Temperature</h4>
                      <div className="text-2xl font-bold text-orange-600">{selectedPatient.vitalSigns.temperature}°F</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">BMI</h4>
                      <div className="text-2xl font-bold text-green-600">{selectedPatient.vitalSigns.bmi}</div>
                      <div className={`text-sm ${getBMIStatus(selectedPatient.vitalSigns.bmi).color}`}>
                        {getBMIStatus(selectedPatient.vitalSigns.bmi).status}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="prescriptions" className="space-y-4">
                <div className="space-y-4">
                  {medicalRecords
                    .filter(record => record.patientId === selectedPatient.patientId)
                    .map((record) => (
                    <div key={record.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-medium">Prescription - {record.date.toLocaleDateString()}</h4>
                          <p className="text-sm text-gray-600">Prescribed by {record.doctorName}</p>
                        </div>
                        <Badge className={record.prescriptions.some(p => p.isDispensed) ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {record.prescriptions.some(p => p.isDispensed) ? 'Dispensed' : 'Pending'}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        {record.prescriptions.map((prescription) => (
                          <div key={prescription.id} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{prescription.medicineName}</h5>
                                <p className="text-sm text-gray-600">
                                  {prescription.dosage} • {prescription.frequency} • {prescription.duration}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">{prescription.instructions}</p>
                              </div>
                              <Badge variant="outline" className={prescription.isDispensed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                {prescription.isDispensed ? 'Dispensed' : 'Pending'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
