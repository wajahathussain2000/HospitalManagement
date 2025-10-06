import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Search,
  Filter,
  User,
  Calendar,
  FileText,
  Heart,
  Pill,
  Activity,
  Eye,
  Edit,
  Plus,
  Download,
  Upload,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Bell,
  MessageSquare,
  Stethoscope,
  Users,
  Shield,
  Zap,
  Star,
  Camera,
  Image,
  FileImage,
  Document,
  Archive,
  Trash2,
  RefreshCw,
  Settings,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Send,
  Copy,
  Share,
  Bookmark,
  Flag,
  Tag,
  Layers,
  Database,
  Cloud,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Table,
  Grid,
  List,
  Layout,
  Columns,
  Rows
} from 'lucide-react';
import { format } from 'date-fns';

export default function PatientRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isPatientDetailsOpen, setIsPatientDetailsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [filterStatus, setFilterStatus] = useState('all');
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [filterAge, setFilterAge] = useState('all');
  const [filterCondition, setFilterCondition] = useState('all');

  // Comprehensive patient data
  const patients = [
    {
      id: 'P001234',
      personalInfo: {
        name: 'John Smith',
        age: 45,
        gender: 'Male',
        dateOfBirth: '1979-03-15',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        address: '123 Main St, City, State 12345',
        emergencyContact: {
          name: 'Jane Smith',
          relationship: 'Spouse',
          phone: '+1 (555) 123-4568'
        },
        insurance: {
          provider: 'Blue Cross Blue Shield',
          policyNumber: 'BC123456789',
          groupNumber: 'GRP001',
          effectiveDate: '2024-01-01',
          expiryDate: '2024-12-31'
        },
        mrn: 'MRN123456789',
        registrationDate: '2020-01-15',
        lastVisit: '2024-01-15',
        nextAppointment: '2024-02-15',
        status: 'Active',
        photo: null
      },
      medicalHistory: {
        allergies: [
          { name: 'Penicillin', severity: 'Severe', reaction: 'Rash, difficulty breathing' },
          { name: 'Sulfa', severity: 'Moderate', reaction: 'Nausea, vomiting' }
        ],
        currentMedications: [
          { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily', startDate: '2023-01-01', prescribedBy: 'Dr. Johnson' },
          { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', startDate: '2023-06-15', prescribedBy: 'Dr. Johnson' }
        ],
        conditions: [
          { name: 'Type 2 Diabetes', diagnosisDate: '2023-01-01', status: 'Active', severity: 'Moderate' },
          { name: 'Hypertension', diagnosisDate: '2023-06-15', status: 'Active', severity: 'Mild' }
        ],
        surgeries: [
          { name: 'Appendectomy', date: '2010-05-20', surgeon: 'Dr. Williams', hospital: 'City General Hospital' }
        ],
        familyHistory: [
          { relation: 'Father', condition: 'Type 2 Diabetes', ageAtOnset: 55 },
          { relation: 'Mother', condition: 'Hypertension', ageAtOnset: 60 },
          { relation: 'Grandmother', condition: 'Breast Cancer', ageAtOnset: 70 }
        ],
        socialHistory: {
          smoking: 'Never',
          alcohol: 'Occasional',
          exercise: 'Moderate',
          occupation: 'Software Engineer',
          maritalStatus: 'Married'
        }
      },
      vitalSigns: {
        bloodPressure: '130/80',
        heartRate: 72,
        temperature: 98.6,
        weight: 180,
        height: 72,
        bmi: 24.4,
        oxygenSaturation: 98,
        respiratoryRate: 16,
        lastUpdated: '2024-01-15'
      },
      consultations: [
        {
          id: 'C001',
          date: '2024-01-15',
          doctor: 'Dr. Johnson',
          department: 'Cardiology',
          type: 'Follow-up',
          chiefComplaint: 'Diabetes control review',
          diagnosis: 'Type 2 Diabetes Mellitus - Well controlled',
          treatment: 'Continue current medication, lifestyle modifications',
          notes: 'Patient reports good blood sugar control. HbA1c improved to 6.8%. Continue current regimen.',
          prescriptions: ['Metformin 1000mg BID', 'Lisinopril 10mg daily'],
          followUp: '2024-02-15',
          status: 'Completed'
        },
        {
          id: 'C002',
          date: '2023-12-15',
          doctor: 'Dr. Johnson',
          department: 'Cardiology',
          type: 'Follow-up',
          chiefComplaint: 'Blood pressure monitoring',
          diagnosis: 'Hypertension - Well controlled',
          treatment: 'Continue current medication',
          notes: 'Blood pressure well controlled. No side effects reported.',
          prescriptions: ['Lisinopril 10mg daily'],
          followUp: '2024-01-15',
          status: 'Completed'
        }
      ],
      labResults: [
        {
          id: 'L001',
          date: '2024-01-10',
          test: 'HbA1c',
          result: '6.8%',
          normalRange: '<7.0%',
          status: 'Normal',
          orderedBy: 'Dr. Johnson'
        },
        {
          id: 'L002',
          date: '2024-01-10',
          test: 'Fasting Blood Glucose',
          result: '110 mg/dL',
          normalRange: '70-100 mg/dL',
          status: 'Slightly Elevated',
          orderedBy: 'Dr. Johnson'
        },
        {
          id: 'L003',
          date: '2024-01-10',
          test: 'Lipid Panel',
          result: 'Total Cholesterol: 180 mg/dL',
          normalRange: '<200 mg/dL',
          status: 'Normal',
          orderedBy: 'Dr. Johnson'
        }
      ],
      imaging: [
        {
          id: 'I001',
          date: '2023-11-20',
          type: 'Chest X-ray',
          result: 'Normal chest X-ray',
          orderedBy: 'Dr. Johnson',
          status: 'Completed'
        }
      ],
      prescriptions: [
        {
          id: 'P001',
          medication: 'Metformin',
          dosage: '1000mg',
          frequency: 'Twice daily',
          quantity: 60,
          refills: 3,
          prescribedBy: 'Dr. Johnson',
          prescribedDate: '2024-01-15',
          status: 'Active'
        },
        {
          id: 'P002',
          medication: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          quantity: 30,
          refills: 3,
          prescribedBy: 'Dr. Johnson',
          prescribedDate: '2024-01-15',
          status: 'Active'
        }
      ],
      billing: {
        totalCharges: 2500,
        paidAmount: 2000,
        pendingAmount: 500,
        lastPayment: '2024-01-10',
        insuranceCoverage: 80,
        nextDue: '2024-02-01'
      },
      notes: [
        {
          id: 'N001',
          date: '2024-01-15',
          author: 'Dr. Johnson',
          type: 'Clinical Note',
          content: 'Patient doing well. Blood sugar control improved. Continue current treatment plan.',
          isPrivate: false
        }
      ]
    },
    {
      id: 'P001235',
      personalInfo: {
        name: 'Sarah Johnson',
        age: 32,
        gender: 'Female',
        dateOfBirth: '1992-07-22',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        address: '456 Oak Ave, City, State 12345',
        emergencyContact: {
          name: 'Mike Johnson',
          relationship: 'Husband',
          phone: '+1 (555) 234-5679'
        },
        insurance: {
          provider: 'Aetna',
          policyNumber: 'AET987654321',
          groupNumber: 'GRP002',
          effectiveDate: '2024-01-01',
          expiryDate: '2024-12-31'
        },
        mrn: 'MRN234567890',
        registrationDate: '2024-01-20',
        lastVisit: null,
        nextAppointment: '2024-01-20',
        status: 'Active',
        photo: null
      },
      medicalHistory: {
        allergies: [
          { name: 'None known', severity: 'N/A', reaction: 'N/A' }
        ],
        currentMedications: [
          { name: 'Multivitamin', dosage: '1 tablet', frequency: 'Once daily', startDate: '2023-01-01', prescribedBy: 'Self' }
        ],
        conditions: [
          { name: 'None', diagnosisDate: null, status: 'N/A', severity: 'N/A' }
        ],
        surgeries: [],
        familyHistory: [
          { relation: 'Mother', condition: 'Breast Cancer', ageAtOnset: 65 },
          { relation: 'Father', condition: 'Heart Disease', ageAtOnset: 70 }
        ],
        socialHistory: {
          smoking: 'Never',
          alcohol: 'Occasional',
          exercise: 'Regular',
          occupation: 'Teacher',
          maritalStatus: 'Married'
        }
      },
      vitalSigns: {
        bloodPressure: '120/75',
        heartRate: 68,
        temperature: 98.4,
        weight: 140,
        height: 65,
        bmi: 23.3,
        oxygenSaturation: 99,
        respiratoryRate: 14,
        lastUpdated: '2024-01-20'
      },
      consultations: [],
      labResults: [],
      imaging: [],
      prescriptions: [],
      billing: {
        totalCharges: 0,
        paidAmount: 0,
        pendingAmount: 0,
        lastPayment: null,
        insuranceCoverage: 90,
        nextDue: null
      },
      notes: []
    }
  ];

  // Filter patients based on search and filters
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.personalInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.personalInfo.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.personalInfo.phone.includes(searchTerm) ||
                         patient.personalInfo.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || patient.personalInfo.status.toLowerCase() === filterStatus;
    const matchesCondition = filterCondition === 'all' || 
                            patient.medicalHistory.conditions.some(condition => 
                              condition.name.toLowerCase().includes(filterCondition.toLowerCase())
                            );

    return matchesSearch && matchesStatus && matchesCondition;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'deceased': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'severe': return 'bg-red-100 text-red-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'mild': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLabResultColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'slightly elevated': return 'bg-yellow-100 text-yellow-800';
      case 'abnormal': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewPatient = (patient: any) => {
    setSelectedPatient(patient);
    setIsPatientDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Records & EHR</h1>
          <p className="text-gray-600 mt-1">Complete electronic health records and patient management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Patient
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, MRN, phone, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="deceased">Deceased</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterAge} onValueChange={setFilterAge}>
              <SelectTrigger>
                <SelectValue placeholder="Age Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="0-18">0-18</SelectItem>
                <SelectItem value="19-35">19-35</SelectItem>
                <SelectItem value="36-50">36-50</SelectItem>
                <SelectItem value="51-65">51-65</SelectItem>
                <SelectItem value="65+">65+</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCondition} onValueChange={setFilterCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="diabetes">Diabetes</SelectItem>
                <SelectItem value="hypertension">Hypertension</SelectItem>
                <SelectItem value="heart disease">Heart Disease</SelectItem>
                <SelectItem value="cancer">Cancer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Patient Records ({filteredPatients.length})
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button variant="outline" size="sm">
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div key={patient.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-blue-100 text-blue-800">
                          {patient.personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-medium text-gray-900">{patient.personalInfo.name}</h3>
                          <Badge className={getStatusColor(patient.personalInfo.status)}>
                            {patient.personalInfo.status}
                          </Badge>
                          <Badge variant="outline">
                            {patient.personalInfo.age}y, {patient.personalInfo.gender}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>MRN: {patient.personalInfo.mrn}</div>
                          <div>Phone: {patient.personalInfo.phone}</div>
                          <div>Insurance: {patient.personalInfo.insurance.provider}</div>
                          <div>Last Visit: {patient.personalInfo.lastVisit || 'No visits yet'}</div>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="text-sm">
                            <span className="text-gray-600">Conditions:</span>
                            {patient.medicalHistory.conditions.length > 0 ? (
                              <span className="ml-1">
                                {patient.medicalHistory.conditions.map((condition, index) => (
                                  <Badge key={index} variant="outline" className="ml-1 text-xs">
                                    {condition.name}
                                  </Badge>
                                ))}
                              </span>
                            ) : (
                              <span className="ml-1 text-gray-500">None</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleViewPatient(patient)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Patient Details Dialog */}
      <Dialog open={isPatientDetailsOpen} onOpenChange={setIsPatientDetailsOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{selectedPatient?.personalInfo.name}</div>
                  <div className="text-sm text-gray-600">MRN: {selectedPatient?.personalInfo.mrn}</div>
                </div>
              </div>
              <Badge className={getStatusColor(selectedPatient?.personalInfo.status || '')}>
                {selectedPatient?.personalInfo.status}
              </Badge>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="consultations">Consultations</TabsTrigger>
                <TabsTrigger value="lab">Lab Results</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Date of Birth</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.dateOfBirth}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Age & Gender</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.age}y, {selectedPatient.personalInfo.gender}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Phone</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.phone}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Email</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.email}</p>
                        </div>
                        <div className="col-span-2">
                          <Label className="text-sm font-medium text-gray-600">Address</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contact */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Emergency Contact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Name</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.emergencyContact.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Relationship</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.emergencyContact.relationship}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Phone</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.emergencyContact.phone}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Insurance Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Insurance Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Provider</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.insurance.provider}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Policy Number</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.insurance.policyNumber}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Group Number</Label>
                        <p className="text-sm">{selectedPatient.personalInfo.insurance.groupNumber}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Effective Date</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.insurance.effectiveDate}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Expiry Date</Label>
                          <p className="text-sm">{selectedPatient.personalInfo.insurance.expiryDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Vital Signs */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Activity className="h-5 w-5 mr-2" />
                        Vital Signs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Blood Pressure</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.bloodPressure}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Heart Rate</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.heartRate} bpm</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Temperature</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.temperature}°F</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Weight</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.weight} lbs</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Height</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.height} inches</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">BMI</Label>
                          <p className="text-sm font-medium">{selectedPatient.vitalSigns.bmi}</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        Last updated: {selectedPatient.vitalSigns.lastUpdated}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Medical History Tab */}
              <TabsContent value="medical">
                <div className="space-y-6">
                  {/* Allergies */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Allergies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedPatient.medicalHistory.allergies.map((allergy, index) => (
                          <div key={index} className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{allergy.name}</div>
                                <div className="text-sm text-gray-600">Reaction: {allergy.reaction}</div>
                              </div>
                              <Badge className={getConditionSeverityColor(allergy.severity)}>
                                {allergy.severity}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Medications */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Pill className="h-5 w-5 mr-2" />
                        Current Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedPatient.medicalHistory.currentMedications.map((medication, index) => (
                          <div key={index} className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{medication.name}</div>
                                <div className="text-sm text-gray-600">
                                  {medication.dosage} - {medication.frequency}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Started: {medication.startDate} | Prescribed by: {medication.prescribedBy}
                                </div>
                              </div>
                              <Badge variant="outline">Active</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Medical Conditions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="h-5 w-5 mr-2" />
                        Medical Conditions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedPatient.medicalHistory.conditions.map((condition, index) => (
                          <div key={index} className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{condition.name}</div>
                                <div className="text-sm text-gray-600">
                                  Diagnosed: {condition.diagnosisDate}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Status: {condition.status}
                                </div>
                              </div>
                              <Badge className={getConditionSeverityColor(condition.severity)}>
                                {condition.severity}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Family History */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Family History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedPatient.medicalHistory.familyHistory.map((history, index) => (
                          <div key={index} className="p-3 border rounded-lg">
                            <div>
                              <div className="font-medium">{history.relation}</div>
                              <div className="text-sm text-gray-600">
                                {history.condition} (Age at onset: {history.ageAtOnset})
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Consultations Tab */}
              <TabsContent value="consultations">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="h-5 w-5 mr-2" />
                      Consultation History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.consultations.map((consultation) => (
                        <div key={consultation.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{consultation.date}</div>
                              <div className="text-sm text-gray-600">
                                {consultation.doctor} • {consultation.department}
                              </div>
                            </div>
                            <Badge variant="outline">{consultation.type}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <Label className="text-sm font-medium">Chief Complaint</Label>
                              <p className="text-sm">{consultation.chiefComplaint}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Diagnosis</Label>
                              <p className="text-sm">{consultation.diagnosis}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Treatment</Label>
                              <p className="text-sm">{consultation.treatment}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Notes</Label>
                              <p className="text-sm">{consultation.notes}</p>
                            </div>
                            {consultation.prescriptions.length > 0 && (
                              <div>
                                <Label className="text-sm font-medium">Prescriptions</Label>
                                <ul className="text-sm list-disc list-inside">
                                  {consultation.prescriptions.map((prescription, index) => (
                                    <li key={index}>{prescription}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Lab Results Tab */}
              <TabsContent value="lab">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Lab Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.labResults.map((result) => (
                        <div key={result.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{result.test}</div>
                              <div className="text-sm text-gray-600">
                                {result.date} • Ordered by: {result.orderedBy}
                              </div>
                            </div>
                            <Badge className={getLabResultColor(result.status)}>
                              {result.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm font-medium">Result</Label>
                              <p className="text-sm font-medium">{result.result}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Normal Range</Label>
                              <p className="text-sm">{result.normalRange}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Prescriptions Tab */}
              <TabsContent value="prescriptions">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Pill className="h-5 w-5 mr-2" />
                      Prescriptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.prescriptions.map((prescription) => (
                        <div key={prescription.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{prescription.medication}</div>
                              <div className="text-sm text-gray-600">
                                {prescription.dosage} - {prescription.frequency}
                              </div>
                            </div>
                            <Badge variant="outline">{prescription.status}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <Label className="text-sm font-medium">Quantity</Label>
                              <p className="text-sm">{prescription.quantity}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Refills</Label>
                              <p className="text-sm">{prescription.refills}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Prescribed By</Label>
                              <p className="text-sm">{prescription.prescribedBy}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Date</Label>
                              <p className="text-sm">{prescription.prescribedDate}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Billing Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Total Charges</span>
                          <span className="text-sm">${selectedPatient.billing.totalCharges}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Paid Amount</span>
                          <span className="text-sm text-green-600">${selectedPatient.billing.paidAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Pending Amount</span>
                          <span className="text-sm text-red-600">${selectedPatient.billing.pendingAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Insurance Coverage</span>
                          <span className="text-sm">{selectedPatient.billing.insuranceCoverage}%</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium">Last Payment</Label>
                          <p className="text-sm">{selectedPatient.billing.lastPayment || 'No payments yet'}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Next Due</Label>
                          <p className="text-sm">{selectedPatient.billing.nextDue || 'No pending payments'}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
