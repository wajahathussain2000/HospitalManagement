import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
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
import { 
  FileText,
  User,
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Settings,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Calendar,
  Pill,
  Stethoscope,
  Shield,
  Key,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  PieChart,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Star,
  Heart,
  Smile,
  Frown,
  Meh,
  Zap,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Thermometer,
  Gauge,
  Scale,
  Ruler,
  Compass,
  MapPin,
  Navigation,
  Route,
  Map,
  Globe,
  Building,
  Home,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Truck,
  Ship,
  Anchor,
  Sailboat,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Beaker,
  TestTube,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield as ShieldIcon,
  Sword,
  Bow,
  Arrow,
  Target as TargetIcon,
  Crosshair,
  Focus,
  Zap as ZapIcon,
  Bolt,
  Flash,
  Spark,
  Fire,
  Water,
  Earth,
  Air,
  Leaf,
  Tree,
  Flower,
  Seed,
  Sprout,
  Branch,
  Root,
  Trunk,
  Bark,
  Wood,
  Log,
  Lumber,
  Timber,
  Plank,
  Board,
  Beam,
  Pole,
  Stick,
  Rod,
  Staff,
  Wand,
  Scepter,
  Crown as CrownIcon,
  Tiara,
  Diadem,
  Circlet,
  Ring,
  Gem as GemIcon,
  Jewel,
  Pearl,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Jade,
  Coral,
  Amber,
  Ivory,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Tin,
  Lead,
  Zinc,
  Nickel,
  Cobalt,
  Chromium,
  Manganese,
  Titanium,
  Vanadium,
  Tungsten,
  Molybdenum,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Hafnium,
  Tantalum,
  Niobium,
  Zirconium,
  Yttrium,
  Scandium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';
import { format } from 'date-fns';

export default function PrescriptionIntegration() {
  const [activeTab, setActiveTab] = useState('prescriptions');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isValidationOpen, setIsValidationOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);

  // Mock prescription data
  const prescriptions = [
    {
      id: 'PRES001',
      patient: {
        name: 'John Smith',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567',
        allergies: ['Penicillin', 'Sulfa'],
        medicalHistory: ['Diabetes', 'Hypertension']
      },
      doctor: {
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiology',
        license: 'MD123456'
      },
      prescription: {
        date: '2024-01-20',
        diagnosis: 'Hypertension',
        medications: [
          {
            name: 'Lisinopril 10mg',
            dosage: '1 tablet daily',
            duration: '30 days',
            quantity: 30,
            instructions: 'Take with food'
          },
          {
            name: 'Metformin 500mg',
            dosage: '1 tablet twice daily',
            duration: '30 days',
            quantity: 60,
            instructions: 'Take with meals'
          }
        ],
        totalAmount: 450,
        status: 'Pending',
        priority: 'Normal'
      },
      validation: {
        drugInteractions: [],
        allergies: [],
        dosageCheck: 'Valid',
        insuranceCoverage: 'Covered'
      }
    },
    {
      id: 'PRES002',
      patient: {
        name: 'Jane Doe',
        age: 32,
        gender: 'Female',
        phone: '+1 (555) 234-5678',
        allergies: ['Aspirin'],
        medicalHistory: ['Migraine']
      },
      doctor: {
        name: 'Dr. Michael Chen',
        specialization: 'Neurology',
        license: 'MD234567'
      },
      prescription: {
        date: '2024-01-20',
        diagnosis: 'Migraine',
        medications: [
          {
            name: 'Sumatriptan 50mg',
            dosage: '1 tablet as needed',
            duration: '10 days',
            quantity: 10,
            instructions: 'Take at onset of migraine'
          }
        ],
        totalAmount: 180,
        status: 'Processing',
        priority: 'High'
      },
      validation: {
        drugInteractions: [],
        allergies: [],
        dosageCheck: 'Valid',
        insuranceCoverage: 'Covered'
      }
    },
    {
      id: 'PRES003',
      patient: {
        name: 'Robert Wilson',
        age: 58,
        gender: 'Male',
        phone: '+1 (555) 345-6789',
        allergies: [],
        medicalHistory: ['Diabetes', 'Heart Disease']
      },
      doctor: {
        name: 'Dr. Emily Rodriguez',
        specialization: 'Endocrinology',
        license: 'MD345678'
      },
      prescription: {
        date: '2024-01-19',
        diagnosis: 'Type 2 Diabetes',
        medications: [
          {
            name: 'Insulin Glargine',
            dosage: '20 units daily',
            duration: '30 days',
            quantity: 1,
            instructions: 'Inject subcutaneously'
          },
          {
            name: 'Metformin 1000mg',
            dosage: '1 tablet twice daily',
            duration: '30 days',
            quantity: 60,
            instructions: 'Take with meals'
          }
        ],
        totalAmount: 320,
        status: 'Ready',
        priority: 'Normal'
      },
      validation: {
        drugInteractions: [],
        allergies: [],
        dosageCheck: 'Valid',
        insuranceCoverage: 'Covered'
      }
    }
  ];

  const handleValidatePrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
    setIsValidationOpen(true);
  };

  const handleApprovePrescription = (prescriptionId: string) => {
    console.log('Approving prescription:', prescriptionId);
  };

  const handleRejectPrescription = (prescriptionId: string) => {
    console.log('Rejecting prescription:', prescriptionId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Ready': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.prescription.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || prescription.prescription.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prescription & Patient Integration</h1>
          <p className="text-gray-600 mt-1">Manage e-prescriptions, patient validation, and tele-pharmacy services</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search prescriptions, patients, or doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="prescriptions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="telepharmacy">Tele-Pharmacy</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        {/* Prescriptions Tab */}
        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                E-Prescriptions ({filteredPrescriptions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredPrescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {prescription.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-gray-900">{prescription.patient.name}</h3>
                              <Badge className={getStatusColor(prescription.prescription.status)}>
                                {prescription.prescription.status}
                              </Badge>
                              <Badge className={getStatusColor(prescription.prescription.priority)}>
                                {prescription.prescription.priority} Priority
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              Doctor: {prescription.doctor.name} ({prescription.doctor.specialization})
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              Diagnosis: {prescription.prescription.diagnosis}
                            </div>
                            <div className="text-sm text-gray-600">
                              Medications: {prescription.prescription.medications.length} items • Total: {prescription.prescription.totalAmount}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleValidatePrescription(prescription)}>
                            <Shield className="h-4 w-4 mr-1" />
                            Validate
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Print
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Validation Tab */}
        <TabsContent value="validation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Prescription Validation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPrescriptions.map((prescription) => (
                  <div key={prescription.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{prescription.patient.name}</h3>
                          <Badge className={getStatusColor(prescription.prescription.status)}>
                            {prescription.prescription.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Doctor: {prescription.doctor.name} • License: {prescription.doctor.license}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Diagnosis: {prescription.prescription.diagnosis}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-600">Drug Interactions:</div>
                            <div className="font-medium text-green-600">None detected</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Allergy Check:</div>
                            <div className="font-medium text-green-600">No conflicts</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Dosage Check:</div>
                            <div className="font-medium text-green-600">Valid</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Insurance:</div>
                            <div className="font-medium text-green-600">Covered</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleApprovePrescription(prescription.id)}>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleRejectPrescription(prescription.id)}>
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tele-Pharmacy Tab */}
        <TabsContent value="telepharmacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2" />
                Tele-Pharmacy Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Stethoscope className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Tele-pharmacy services would be displayed here</p>
                <p className="text-sm text-gray-500">Online consultations, digital prescriptions, and remote patient care</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Prescription History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredPrescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{prescription.patient.name}</h3>
                            <Badge className={getStatusColor(prescription.prescription.status)}>
                              {prescription.prescription.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Doctor: {prescription.doctor.name} • Date: {prescription.prescription.date}
                          </div>
                          <div className="text-sm text-gray-600">
                            Diagnosis: {prescription.prescription.diagnosis} • Total: {prescription.prescription.totalAmount}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Print
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Validation Dialog */}
      <Dialog open={isValidationOpen} onOpenChange={setIsValidationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Prescription Validation
            </DialogTitle>
          </DialogHeader>

          {selectedPrescription && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Patient Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>Name: {selectedPrescription.patient.name}</div>
                    <div>Age: {selectedPrescription.patient.age} years</div>
                    <div>Gender: {selectedPrescription.patient.gender}</div>
                    <div>Allergies: {selectedPrescription.patient.allergies.join(', ') || 'None'}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Doctor Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>Name: {selectedPrescription.doctor.name}</div>
                    <div>Specialization: {selectedPrescription.doctor.specialization}</div>
                    <div>License: {selectedPrescription.doctor.license}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Medications</h3>
                <div className="space-y-2">
                  {selectedPrescription.prescription.medications.map((medication: any, index: number) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{medication.name}</div>
                          <div className="text-sm text-gray-600">
                            {medication.dosage} • {medication.duration} • Qty: {medication.quantity}
                          </div>
                          <div className="text-sm text-gray-600">{medication.instructions}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-green-600">Valid</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setIsValidationOpen(false)}>
                  Cancel
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" onClick={() => handleRejectPrescription(selectedPrescription.id)}>
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button onClick={() => handleApprovePrescription(selectedPrescription.id)}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
