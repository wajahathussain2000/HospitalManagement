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
import { 
  FileText,
  User,
  Calendar,
  Clock,
  Stethoscope,
  Pill,
  TestTube,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Plus,
  Edit,
  Trash2,
  Save,
  Send,
  Download,
  Upload,
  Eye,
  Settings,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
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
  Rows,
  BarChart3,
  PieChart,
  Target,
  TrendingUp,
  TrendingDown,
  Zap,
  Users,
  Star,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
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
  TestTube as TestTubeIcon,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Pill as PillIcon,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield,
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

export default function DischargeAdmission() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isDischargeOpen, setIsDischargeOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('discharge');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Mock discharge summaries
  const dischargeSummaries = [
    {
      id: 'DIS001',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        mrn: 'MRN123456789',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        insurance: 'Blue Cross Blue Shield'
      },
      admission: {
        date: '2024-01-15',
        time: '10:30 AM',
        reason: 'Chest pain and shortness of breath',
        department: 'Cardiology',
        ward: 'Cardiac Care Unit',
        bed: 'CCU-101'
      },
      discharge: {
        date: '2024-01-18',
        time: '02:00 PM',
        status: 'Discharged',
        condition: 'Stable',
        dischargeType: 'Routine',
        dischargeDestination: 'Home'
      },
      diagnosis: {
        primary: 'Acute Myocardial Infarction (AMI)',
        secondary: ['Hypertension', 'Type 2 Diabetes'],
        procedures: ['Cardiac Catheterization', 'Angioplasty with Stent Placement']
      },
      treatment: {
        medications: [
          { name: 'Aspirin 81mg', dosage: 'Once daily', duration: 'Lifelong' },
          { name: 'Metoprolol 50mg', dosage: 'Twice daily', duration: '3 months' },
          { name: 'Atorvastatin 40mg', dosage: 'Once daily', duration: 'Lifelong' }
        ],
        instructions: [
          'Take medications as prescribed',
          'Follow low-sodium, heart-healthy diet',
          'Avoid heavy lifting for 2 weeks',
          'Return to work in 1 week if approved by cardiologist'
        ]
      },
      followUp: {
        nextAppointment: '2024-01-25',
        nextAppointmentTime: '10:00 AM',
        nextAppointmentDoctor: 'Dr. Sarah Johnson',
        instructions: 'Follow up with cardiologist in 1 week for medication review'
      },
      createdBy: 'Dr. Sarah Johnson',
      createdDate: '2024-01-18'
    },
    {
      id: 'DIS002',
      patient: {
        name: 'Sarah Johnson',
        id: 'P001235',
        age: 32,
        gender: 'Female',
        mrn: 'MRN234567890',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        insurance: 'Aetna'
      },
      admission: {
        date: '2024-01-20',
        time: '08:15 AM',
        reason: 'Severe abdominal pain',
        department: 'General Surgery',
        ward: 'Surgical Ward',
        bed: 'SW-205'
      },
      discharge: {
        date: '2024-01-22',
        time: '11:30 AM',
        status: 'Discharged',
        condition: 'Stable',
        dischargeType: 'Routine',
        dischargeDestination: 'Home'
      },
      diagnosis: {
        primary: 'Acute Appendicitis',
        secondary: ['None'],
        procedures: ['Laparoscopic Appendectomy']
      },
      treatment: {
        medications: [
          { name: 'Ibuprofen 400mg', dosage: 'Three times daily', duration: '5 days' },
          { name: 'Acetaminophen 500mg', dosage: 'As needed for pain', duration: '5 days' }
        ],
        instructions: [
          'Keep surgical site clean and dry',
          'Avoid heavy lifting for 2 weeks',
          'Return to normal activities gradually',
          'Watch for signs of infection'
        ]
      },
      followUp: {
        nextAppointment: '2024-01-29',
        nextAppointmentTime: '02:00 PM',
        nextAppointmentDoctor: 'Dr. Michael Chen',
        instructions: 'Follow up with surgeon in 1 week for wound check'
      },
      createdBy: 'Dr. Michael Chen',
      createdDate: '2024-01-22'
    }
  ];

  // Mock admission summaries
  const admissionSummaries = [
    {
      id: 'ADM001',
      patient: {
        name: 'Michael Brown',
        id: 'P001236',
        age: 58,
        gender: 'Male',
        mrn: 'MRN345678901',
        phone: '+1 (555) 345-6789',
        email: 'michael.brown@email.com',
        insurance: 'Medicare'
      },
      admission: {
        date: '2024-01-25',
        time: '06:45 PM',
        reason: 'Chest pain and difficulty breathing',
        department: 'Emergency Medicine',
        ward: 'Emergency Department',
        bed: 'ED-12',
        status: 'Admitted',
        condition: 'Stable',
        priority: 'High'
      },
      diagnosis: {
        primary: 'Acute Coronary Syndrome',
        secondary: ['Hypertension', 'Hyperlipidemia'],
        procedures: ['ECG', 'Cardiac Enzymes', 'Chest X-ray']
      },
      treatment: {
        medications: [
          { name: 'Aspirin 325mg', dosage: 'Once', duration: 'Immediate' },
          { name: 'Nitroglycerin', dosage: 'As needed', duration: 'PRN' },
          { name: 'Morphine 2mg', dosage: 'As needed', duration: 'PRN' }
        ],
        instructions: [
          'Bed rest with cardiac monitoring',
          'NPO until further notice',
          'Vital signs every 4 hours',
          'Cardiology consultation pending'
        ]
      },
      createdBy: 'Dr. Lisa Anderson',
      createdDate: '2024-01-25'
    }
  ];

  const handleCreateDischarge = (patient: any) => {
    setSelectedPatient(patient);
    setIsDischargeOpen(true);
  };

  const handleCreateAdmission = (patient: any) => {
    setSelectedPatient(patient);
    setIsAdmissionOpen(true);
  };

  const handleSaveDischarge = () => {
    console.log('Saving discharge summary for:', selectedPatient.name);
    setIsDischargeOpen(false);
  };

  const handleSaveAdmission = () => {
    console.log('Saving admission summary for:', selectedPatient.name);
    setIsAdmissionOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Discharged': return 'bg-green-100 text-green-800';
      case 'Admitted': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Stable': return 'bg-green-100 text-green-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Serious': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Discharge & Admission Summary</h1>
          <p className="text-gray-600 mt-1">Manage patient discharge notes, admission summaries, and treatment instructions</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setIsAdmissionOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Admission
          </Button>
          <Button onClick={() => setIsDischargeOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Discharge
          </Button>
        </div>
      </div>

      <Tabs defaultValue="discharge" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discharge">Discharge Summaries</TabsTrigger>
          <TabsTrigger value="admission">Admission Summaries</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        {/* Discharge Summaries Tab */}
        <TabsContent value="discharge">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search patients, diagnoses, or procedures..."
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
                    <SelectItem value="Discharged">Discharged</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Routine">Routine</SelectItem>
                    <SelectItem value="Emergency">Emergency</SelectItem>
                    <SelectItem value="Transfer">Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Discharge Summaries List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Discharge Summaries ({dischargeSummaries.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {dischargeSummaries.map((summary) => (
                    <div key={summary.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {summary.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{summary.patient.name}</h3>
                              <Badge className={getStatusColor(summary.discharge.status)}>
                                {summary.discharge.status}
                              </Badge>
                              <Badge className={getConditionColor(summary.discharge.condition)}>
                                {summary.discharge.condition}
                              </Badge>
                              <Badge variant="outline">DIS{summary.id}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {summary.patient.age}y, {summary.patient.gender}</div>
                              <div>MRN: {summary.patient.mrn}</div>
                              <div>Admitted: {summary.admission.date} at {summary.admission.time}</div>
                              <div>Discharged: {summary.discharge.date} at {summary.discharge.time}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Diagnosis */}
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">Diagnosis:</div>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <strong>Primary:</strong> {summary.diagnosis.primary}
                            </div>
                            {summary.diagnosis.secondary.length > 0 && (
                              <div className="text-sm">
                                <strong>Secondary:</strong> {summary.diagnosis.secondary.join(', ')}
                              </div>
                            )}
                            {summary.diagnosis.procedures.length > 0 && (
                              <div className="text-sm">
                                <strong>Procedures:</strong> {summary.diagnosis.procedures.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Treatment */}
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">Treatment:</div>
                          <div className="space-y-2">
                            <div>
                              <div className="text-sm font-medium">Medications:</div>
                              <div className="space-y-1">
                                {summary.treatment.medications.map((med, index) => (
                                  <div key={index} className="text-sm text-gray-600">
                                    • {med.name} - {med.dosage} ({med.duration})
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Instructions:</div>
                              <div className="space-y-1">
                                {summary.treatment.instructions.map((instruction, index) => (
                                  <div key={index} className="text-sm text-gray-600">
                                    • {instruction}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Follow-up */}
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">Follow-up:</div>
                          <div className="text-sm text-gray-600">
                            Next appointment: {summary.followUp.nextAppointment} at {summary.followUp.nextAppointmentTime} with {summary.followUp.nextAppointmentDoctor}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {summary.followUp.instructions}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Admission Summaries Tab */}
        <TabsContent value="admission">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Admission Summaries ({admissionSummaries.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {admissionSummaries.map((summary) => (
                    <div key={summary.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {summary.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{summary.patient.name}</h3>
                              <Badge className={getStatusColor(summary.admission.status)}>
                                {summary.admission.status}
                              </Badge>
                              <Badge className={getConditionColor(summary.admission.condition)}>
                                {summary.admission.condition}
                              </Badge>
                              <Badge className={getPriorityColor(summary.admission.priority)}>
                                {summary.admission.priority}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {summary.patient.age}y, {summary.patient.gender}</div>
                              <div>MRN: {summary.patient.mrn}</div>
                              <div>Admitted: {summary.admission.date} at {summary.admission.time}</div>
                              <div>Department: {summary.admission.department}</div>
                              <div>Ward: {summary.admission.ward}</div>
                              <div>Bed: {summary.admission.bed}</div>
                            </div>
                            <div className="mt-2">
                              <div className="text-sm font-medium text-gray-700">Reason for Admission:</div>
                              <div className="text-sm text-gray-600">{summary.admission.reason}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Diagnosis */}
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">Diagnosis:</div>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <strong>Primary:</strong> {summary.diagnosis.primary}
                            </div>
                            {summary.diagnosis.secondary.length > 0 && (
                              <div className="text-sm">
                                <strong>Secondary:</strong> {summary.diagnosis.secondary.join(', ')}
                              </div>
                            )}
                            {summary.diagnosis.procedures.length > 0 && (
                              <div className="text-sm">
                                <strong>Procedures:</strong> {summary.diagnosis.procedures.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Treatment */}
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">Treatment:</div>
                          <div className="space-y-2">
                            <div>
                              <div className="text-sm font-medium">Medications:</div>
                              <div className="space-y-1">
                                {summary.treatment.medications.map((med, index) => (
                                  <div key={index} className="text-sm text-gray-600">
                                    • {med.name} - {med.dosage} ({med.duration})
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Instructions:</div>
                              <div className="space-y-1">
                                {summary.treatment.instructions.map((instruction, index) => (
                                  <div key={index} className="text-sm text-gray-600">
                                    • {instruction}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Summary Templates
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  New Template
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Summary templates</div>
                <div className="text-sm text-gray-500">Create and manage discharge and admission summary templates</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Discharge Summary Dialog */}
      <Dialog open={isDischargeOpen} onOpenChange={setIsDischargeOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Discharge Summary - {selectedPatient?.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.age}y, {selectedPatient?.gender} • {selectedPatient?.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsDischargeOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveDischarge}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Summary
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedPatient.name}</div>
                    <div><strong>Age/Gender:</strong> {selectedPatient.age}y, {selectedPatient.gender}</div>
                    <div><strong>MRN:</strong> {selectedPatient.mrn}</div>
                    <div><strong>Insurance:</strong> {selectedPatient.insurance}</div>
                    <div><strong>Phone:</strong> {selectedPatient.phone}</div>
                    <div><strong>Email:</strong> {selectedPatient.email}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admission Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="admission-date">Admission Date</Label>
                      <Input id="admission-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="admission-time">Admission Time</Label>
                      <Input id="admission-time" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="admission-reason">Reason for Admission</Label>
                      <Input id="admission-reason" placeholder="Enter reason for admission" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="surgery">General Surgery</SelectItem>
                          <SelectItem value="emergency">Emergency Medicine</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discharge Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Discharge Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="discharge-date">Discharge Date</Label>
                      <Input id="discharge-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="discharge-time">Discharge Time</Label>
                      <Input id="discharge-time" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="discharge-condition">Condition at Discharge</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stable">Stable</SelectItem>
                          <SelectItem value="improved">Improved</SelectItem>
                          <SelectItem value="recovered">Recovered</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="discharge-destination">Discharge Destination</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="rehab">Rehabilitation Center</SelectItem>
                          <SelectItem value="nursing">Nursing Home</SelectItem>
                          <SelectItem value="transfer">Transfer to Another Hospital</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diagnosis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Diagnosis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="primary-diagnosis">Primary Diagnosis</Label>
                    <Input id="primary-diagnosis" placeholder="Enter primary diagnosis" />
                  </div>
                  <div>
                    <Label htmlFor="secondary-diagnosis">Secondary Diagnosis</Label>
                    <Input id="secondary-diagnosis" placeholder="Enter secondary diagnoses (comma-separated)" />
                  </div>
                  <div>
                    <Label htmlFor="procedures">Procedures Performed</Label>
                    <Input id="procedures" placeholder="Enter procedures performed (comma-separated)" />
                  </div>
                </CardContent>
              </Card>

              {/* Treatment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment & Medications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="medications">Medications Prescribed</Label>
                    <Textarea
                      id="medications"
                      placeholder="Enter medications, dosages, and duration..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructions">Discharge Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Enter discharge instructions for the patient..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Follow-up */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Follow-up Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="follow-up-date">Follow-up Date</Label>
                      <Input id="follow-up-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="follow-up-time">Follow-up Time</Label>
                      <Input id="follow-up-time" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="follow-up-doctor">Follow-up Doctor</Label>
                      <Input id="follow-up-doctor" placeholder="Enter doctor name" />
                    </div>
                    <div>
                      <Label htmlFor="follow-up-reason">Follow-up Reason</Label>
                      <Input id="follow-up-reason" placeholder="Enter reason for follow-up" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="follow-up-instructions">Follow-up Instructions</Label>
                    <Textarea
                      id="follow-up-instructions"
                      placeholder="Enter specific follow-up instructions..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Admission Summary Dialog */}
      <Dialog open={isAdmissionOpen} onOpenChange={setIsAdmissionOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Admission Summary - {selectedPatient?.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.age}y, {selectedPatient?.gender} • {selectedPatient?.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsAdmissionOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveAdmission}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Summary
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedPatient.name}</div>
                    <div><strong>Age/Gender:</strong> {selectedPatient.age}y, {selectedPatient.gender}</div>
                    <div><strong>MRN:</strong> {selectedPatient.mrn}</div>
                    <div><strong>Insurance:</strong> {selectedPatient.insurance}</div>
                    <div><strong>Phone:</strong> {selectedPatient.phone}</div>
                    <div><strong>Email:</strong> {selectedPatient.email}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admission Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="admission-date">Admission Date</Label>
                      <Input id="admission-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="admission-time">Admission Time</Label>
                      <Input id="admission-time" type="time" />
                    </div>
                    <div>
                      <Label htmlFor="admission-reason">Reason for Admission</Label>
                      <Input id="admission-reason" placeholder="Enter reason for admission" />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="surgery">General Surgery</SelectItem>
                          <SelectItem value="emergency">Emergency Medicine</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ward">Ward</Label>
                      <Input id="ward" placeholder="Enter ward" />
                    </div>
                    <div>
                      <Label htmlFor="bed">Bed Number</Label>
                      <Input id="bed" placeholder="Enter bed number" />
                    </div>
                    <div>
                      <Label htmlFor="condition">Condition</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stable">Stable</SelectItem>
                          <SelectItem value="serious">Serious</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diagnosis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Diagnosis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="primary-diagnosis">Primary Diagnosis</Label>
                    <Input id="primary-diagnosis" placeholder="Enter primary diagnosis" />
                  </div>
                  <div>
                    <Label htmlFor="secondary-diagnosis">Secondary Diagnosis</Label>
                    <Input id="secondary-diagnosis" placeholder="Enter secondary diagnoses (comma-separated)" />
                  </div>
                  <div>
                    <Label htmlFor="procedures">Procedures Performed</Label>
                    <Input id="procedures" placeholder="Enter procedures performed (comma-separated)" />
                  </div>
                </CardContent>
              </Card>

              {/* Treatment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment & Medications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="medications">Medications Prescribed</Label>
                    <Textarea
                      id="medications"
                      placeholder="Enter medications, dosages, and duration..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructions">Treatment Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Enter treatment instructions for the patient..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
