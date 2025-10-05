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
  Stethoscope,
  User,
  Calendar,
  Clock,
  FileText,
  Pill,
  Activity,
  Heart,
  Brain,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Save,
  Send,
  Download,
  Upload,
  Camera,
  Image,
  Video,
  Mic,
  Phone,
  MessageSquare,
  Bell,
  Settings,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
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
  Shield,
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

export default function ConsultationManagement() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('soap');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock consultation data
  const consultations = [
    {
      id: 'C001',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567',
        mrn: 'MRN123456789'
      },
      appointment: {
        date: '2024-01-20',
        time: '09:00 AM',
        type: 'Follow-up',
        status: 'in-progress'
      },
      soap: {
        subjective: 'Patient reports chest pain and shortness of breath for 2 days. Pain is sharp, 7/10 intensity, worse with exertion. No radiation to arms or jaw. No nausea or vomiting.',
        objective: 'BP: 140/90, HR: 95 bpm, RR: 22/min, O2 Sat: 95% on room air. Heart sounds regular, no murmurs. Lungs clear bilaterally. No peripheral edema.',
        assessment: 'Chest pain - likely musculoskeletal origin. Rule out cardiac causes. Patient has risk factors: hypertension, diabetes.',
        plan: '1. EKG and chest X-ray 2. Cardiac enzymes 3. Continue current medications 4. Follow-up in 1 week 5. Lifestyle modifications'
      },
      symptoms: [
        { name: 'Chest Pain', severity: 'Moderate', duration: '2 days', description: 'Sharp pain, 7/10 intensity' },
        { name: 'Shortness of Breath', severity: 'Mild', duration: '2 days', description: 'Worse with exertion' }
      ],
      diagnosis: [
        { code: 'R06.02', name: 'Shortness of breath', type: 'Primary', status: 'Active' },
        { code: 'R50.9', name: 'Fever, unspecified', type: 'Secondary', status: 'Active' }
      ],
      treatment: {
        medications: [
          { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', duration: '30 days', instructions: 'Take with food' },
          { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily', duration: '30 days', instructions: 'Take with meals' }
        ],
        procedures: [
          { name: 'EKG', status: 'Ordered', date: '2024-01-20' },
          { name: 'Chest X-ray', status: 'Ordered', date: '2024-01-20' },
          { name: 'Cardiac Enzymes', status: 'Ordered', date: '2024-01-20' }
        ],
        lifestyle: [
          'Low sodium diet',
          'Regular exercise',
          'Weight management',
          'Stress reduction'
        ]
      },
      followUp: {
        required: true,
        date: '2024-01-27',
        reason: 'Review test results and medication effectiveness',
        instructions: 'Continue current medications, monitor blood pressure daily'
      },
      notes: 'Patient appears anxious about symptoms. Reassured about low cardiac risk. Emphasized importance of medication compliance.',
      status: 'in-progress',
      createdAt: '2024-01-20T09:00:00Z',
      updatedAt: '2024-01-20T09:30:00Z'
    }
  ];

  const handleStartConsultation = (patient: any) => {
    setSelectedPatient(patient);
    setIsConsultationOpen(true);
  };

  const handleSaveConsultation = () => {
    console.log('Saving consultation...');
    // Implementation for saving consultation
  };

  const handleCompleteConsultation = () => {
    console.log('Completing consultation...');
    // Implementation for completing consultation
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Consultation Management</h1>
          <p className="text-gray-600 mt-1">Manage patient consultations, SOAP notes, and treatment plans</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Consultation
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients, consultations, or symptoms..."
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
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Consultations List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Stethoscope className="h-5 w-5 mr-2" />
            Active Consultations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-4">
              {consultations.map((consultation) => (
                <div key={consultation.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-blue-100 text-blue-800">
                          {consultation.patient.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{consultation.patient.name}</h3>
                          <Badge variant="outline">{consultation.patient.id}</Badge>
                          <Badge className="bg-blue-100 text-blue-800">{consultation.appointment.type}</Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">{consultation.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>Age: {consultation.patient.age}y, {consultation.patient.gender}</div>
                          <div>Phone: {consultation.patient.phone}</div>
                          <div>Time: {consultation.appointment.time}</div>
                          <div>MRN: {consultation.patient.mrn}</div>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium text-gray-700">Chief Complaint:</div>
                          <div className="text-sm text-gray-600">
                            {consultation.soap.subjective.substring(0, 100)}...
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => handleStartConsultation(consultation)}>
                        <Play className="h-4 w-4 mr-1" />
                        Start
                      </Button>
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
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{selectedPatient?.patient.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.patient.age}y, {selectedPatient?.patient.gender} • {selectedPatient?.patient.id}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                <Button size="sm" variant="outline">
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button size="sm" onClick={handleCompleteConsultation}>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Complete
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="soap">SOAP Notes</TabsTrigger>
                <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
                <TabsTrigger value="treatment">Treatment</TabsTrigger>
                <TabsTrigger value="followup">Follow-up</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              {/* SOAP Notes Tab */}
              <TabsContent value="soap">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        SOAP Notes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="subjective">Subjective</Label>
                        <Textarea
                          id="subjective"
                          placeholder="Patient's chief complaint, history of present illness, symptoms, and concerns..."
                          defaultValue={selectedPatient.soap.subjective}
                          className="min-h-[100px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="objective">Objective</Label>
                        <Textarea
                          id="objective"
                          placeholder="Physical examination findings, vital signs, lab results, imaging..."
                          defaultValue={selectedPatient.soap.objective}
                          className="min-h-[100px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="assessment">Assessment</Label>
                        <Textarea
                          id="assessment"
                          placeholder="Clinical impression, differential diagnosis, problem list..."
                          defaultValue={selectedPatient.soap.assessment}
                          className="min-h-[100px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="plan">Plan</Label>
                        <Textarea
                          id="plan"
                          placeholder="Treatment plan, medications, procedures, follow-up instructions..."
                          defaultValue={selectedPatient.soap.plan}
                          className="min-h-[100px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Symptoms Tab */}
              <TabsContent value="symptoms">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 mr-2" />
                        Symptoms & Complaints
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Symptom
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.symptoms.map((symptom: any, index: number) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{symptom.name}</div>
                              <div className="text-sm text-gray-600">
                                Duration: {symptom.duration} • Severity: {symptom.severity}
                              </div>
                            </div>
                            <Badge variant="outline">{symptom.severity}</Badge>
                          </div>
                          <div className="text-sm text-gray-700">{symptom.description}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Diagnosis Tab */}
              <TabsContent value="diagnosis">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Diagnosis & ICD Codes
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Diagnosis
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedPatient.diagnosis.map((diag: any, index: number) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium">{diag.name}</div>
                              <div className="text-sm text-gray-600">Code: {diag.code}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{diag.type}</Badge>
                              <Badge className="bg-green-100 text-green-800">{diag.status}</Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Treatment Tab */}
              <TabsContent value="treatment">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Pill className="h-5 w-5 mr-2" />
                        Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.treatment.medications.map((med: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium">{med.name}</div>
                              <Badge variant="outline">Active</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>Dosage: {med.dosage}</div>
                              <div>Frequency: {med.frequency}</div>
                              <div>Duration: {med.duration}</div>
                              <div>Instructions: {med.instructions}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Activity className="h-5 w-5 mr-2" />
                        Procedures & Tests
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.treatment.procedures.map((proc: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{proc.name}</div>
                                <div className="text-sm text-gray-600">Date: {proc.date}</div>
                              </div>
                              <Badge className="bg-yellow-100 text-yellow-800">{proc.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Follow-up Tab */}
              <TabsContent value="followup">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Follow-up Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="followup-date">Follow-up Date</Label>
                        <Input
                          id="followup-date"
                          type="date"
                          defaultValue={selectedPatient.followUp.date}
                        />
                      </div>
                      <div>
                        <Label htmlFor="followup-reason">Reason</Label>
                        <Input
                          id="followup-reason"
                          defaultValue={selectedPatient.followUp.reason}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="followup-instructions">Instructions</Label>
                      <Textarea
                        id="followup-instructions"
                        defaultValue={selectedPatient.followUp.instructions}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="followup-required"
                        defaultChecked={selectedPatient.followUp.required}
                      />
                      <Label htmlFor="followup-required">Follow-up Required</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notes Tab */}
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Additional Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Additional clinical notes, observations, or comments..."
                      defaultValue={selectedPatient.notes}
                      className="min-h-[200px]"
                    />
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
