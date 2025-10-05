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
import { Switch } from '@/components/ui/switch';
import { 
  Microscope,
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
  AlertTriangle,
  Clock,
  Calendar,
  User,
  Users,
  Building,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Key,
  Lock,
  Unlock,
  Activity,
  BarChart3,
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
  Navigation,
  Route,
  Map,
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
  Beaker,
  TestTube,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Pill,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
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
  Oganesson,
  FileText,
  Database,
  Server,
  Wifi,
  WifiOff,
  Signal,
  SignalZero,
  SignalLow,
  SignalMedium,
  SignalHigh,
  SignalMax,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  Plug,
  PlugZap,
  Zap as ZapIcon2,
  Lightning,
  Thunder,
  Storm,
  Hurricane,
  Tornado,
  Earthquake,
  Tsunami,
  Volcano,
  Lava,
  Magma,
  Ash,
  Smoke,
  Steam,
  Vapor,
  Mist,
  Fog,
  Haze,
  Smog,
  Dust,
  Sand,
  Dirt,
  Mud,
  Clay,
  Rock,
  Stone,
  Pebble,
  Boulder,
  Mountain,
  Hill,
  Valley,
  Canyon,
  Gorge,
  Ravine,
  Cliff,
  Peak,
  Summit,
  Ridge,
  Crest,
  Slope,
  Incline,
  Decline,
  Ascent,
  Descent,
  Climb,
  Fall,
  Drop,
  Plunge,
  Dive,
  Jump,
  Leap,
  Hop,
  Skip,
  Run,
  Walk,
  Jog,
  Sprint,
  Dash,
  Rush,
  Hurry,
  Speed,
  Velocity,
  Acceleration,
  Momentum,
  Force,
  Energy,
  Power as PowerIcon,
  Strength,
  Might,
  Vigor,
  Vitality,
  Life,
  Health,
  Wellness,
  Fitness,
  Exercise,
  Workout,
  Training,
  Practice,
  Study,
  Learn,
  Teach,
  Educate,
  Instruct,
  Guide,
  Mentor,
  Coach,
  Trainer,
  Teacher,
  Professor,
  Doctor,
  Nurse,
  Patient,
  Client,
  Customer,
  User as UserIcon,
  Person,
  People,
  Human,
  Individual,
  Someone,
  Anyone,
  Everyone,
  Nobody,
  Somebody,
  Anybody,
  Everybody,
  Noone,
  Someone as SomeoneIcon,
  Anyone as AnyoneIcon,
  Everyone as EveryoneIcon,
  Nobody as NobodyIcon,
  Somebody as SomebodyIcon,
  Anybody as AnybodyIcon,
  Everybody as EverybodyIcon,
  Noone as NooneIcon
} from 'lucide-react';
import { format } from 'date-fns';

export default function AnatomicPathologyCytology() {
  const [activeTab, setActiveTab] = useState('specimens');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isSpecimenOpen, setIsSpecimenOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock anatomic pathology data
  const pathologyData = {
    specimens: [
      {
        id: 'SP001',
        patientId: 'P12345',
        patientName: 'John Doe',
        specimenType: 'Biopsy',
        site: 'Lung',
        collectionDate: '2024-01-21T08:00:00Z',
        receivedDate: '2024-01-21T08:30:00Z',
        accessionDate: '2024-01-21T09:00:00Z',
        status: 'Processing',
        priority: 'Routine',
        pathologist: 'Dr. Sarah Johnson',
        technician: 'Lisa Brown',
        grossDescription: 'Irregular tan-brown tissue fragment, 2.5 x 1.8 x 0.8 cm',
        clinicalHistory: '65-year-old male with lung nodule',
        diagnosis: 'Pending',
        notes: 'Specimen received in formalin'
      },
      {
        id: 'SP002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        specimenType: 'Cytology',
        site: 'Cervix',
        collectionDate: '2024-01-21T09:00:00Z',
        receivedDate: '2024-01-21T09:15:00Z',
        accessionDate: '2024-01-21T09:30:00Z',
        status: 'Completed',
        priority: 'Routine',
        pathologist: 'Dr. Michael Chen',
        technician: 'Tom Davis',
        grossDescription: 'ThinPrep slide with adequate cellularity',
        clinicalHistory: '45-year-old female, routine screening',
        diagnosis: 'Negative for intraepithelial lesion',
        notes: 'Adequate specimen for evaluation'
      }
    ],
    workflows: [
      {
        id: 'WF001',
        name: 'Biopsy Processing',
        type: 'Histology',
        steps: ['Grossing', 'Processing', 'Embedding', 'Cutting', 'Staining', 'Review'],
        status: 'Active',
        turnaroundTime: '3-5 days',
        specimens: 15,
        completed: 8,
        pending: 7
      },
      {
        id: 'WF002',
        name: 'Cytology Screening',
        type: 'Cytology',
        steps: ['Screening', 'Review', 'Reporting'],
        status: 'Active',
        turnaroundTime: '1-2 days',
        specimens: 25,
        completed: 20,
        pending: 5
      }
    ],
    reports: [
      {
        id: 'RPT001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        reportType: 'Surgical Pathology',
        status: 'Draft',
        pathologist: 'Dr. Sarah Johnson',
        createdDate: '2024-01-21T10:00:00Z',
        finalDate: null,
        diagnosis: 'Adenocarcinoma, well-differentiated',
        microscopicDescription: 'Tumor cells show glandular architecture with nuclear atypia',
        clinicalCorrelation: 'Consistent with primary lung adenocarcinoma',
        recommendations: 'Staging workup recommended',
        notes: 'Additional immunohistochemistry pending'
      },
      {
        id: 'RPT002',
        specimenId: 'SP002',
        patientName: 'Jane Smith',
        reportType: 'Cytology',
        status: 'Final',
        pathologist: 'Dr. Michael Chen',
        createdDate: '2024-01-21T09:30:00Z',
        finalDate: '2024-01-21T11:00:00Z',
        diagnosis: 'Negative for intraepithelial lesion or malignancy',
        microscopicDescription: 'Adequate cellularity with benign squamous and endocervical cells',
        clinicalCorrelation: 'Normal cytology',
        recommendations: 'Routine follow-up in 3 years',
        notes: 'Satisfactory for evaluation'
      }
    ],
    blocks: [
      {
        id: 'BLK001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        blockNumber: 'A1',
        tissueType: 'Lung',
        processingDate: '2024-01-21T10:00:00Z',
        embeddingDate: '2024-01-21T11:00:00Z',
        cuttingDate: '2024-01-21T14:00:00Z',
        stainingDate: '2024-01-21T15:00:00Z',
        status: 'Ready for Review',
        technician: 'Lisa Brown',
        notes: 'H&E staining completed'
      }
    ],
    slides: [
      {
        id: 'SLD001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        slideNumber: 'A1-1',
        stainType: 'H&E',
        cuttingDate: '2024-01-21T14:00:00Z',
        stainingDate: '2024-01-21T15:00:00Z',
        status: 'Ready for Review',
        technician: 'Lisa Brown',
        quality: 'Good',
        notes: 'Adequate tissue for diagnosis'
      },
      {
        id: 'SLD002',
        specimenId: 'SP001',
        patientName: 'John Doe',
        slideNumber: 'A1-2',
        stainType: 'IHC - TTF-1',
        cuttingDate: '2024-01-21T14:30:00Z',
        stainingDate: '2024-01-21T16:00:00Z',
        status: 'Ready for Review',
        technician: 'Lisa Brown',
        quality: 'Good',
        notes: 'TTF-1 positive staining'
      }
    ],
    qualityControl: [
      {
        id: 'QC001',
        type: 'Staining Quality',
        date: '2024-01-21T08:00:00Z',
        status: 'Pass',
        technician: 'Lisa Brown',
        details: 'H&E staining quality check - all slides acceptable',
        notes: 'No issues identified'
      },
      {
        id: 'QC002',
        type: 'Equipment Calibration',
        date: '2024-01-21T09:00:00Z',
        status: 'Pass',
        technician: 'Tom Davis',
        details: 'Microtome calibration check - within acceptable range',
        notes: 'Equipment functioning properly'
      }
    ]
  };

  const handleAddSpecimen = () => {
    setSelectedItem(null);
    setIsSpecimenOpen(true);
  };

  const handleAddReport = () => {
    setSelectedItem(null);
    setIsReportOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Ready for Review': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Final': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Pass': return 'bg-green-100 text-green-800';
      case 'Fail': return 'bg-red-100 text-red-800';
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSpecimens = pathologyData.specimens.filter(specimen => {
    const matchesSearch = specimen.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specimen.specimenType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specimen.pathologist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || specimen.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Anatomic Pathology & Cytology</h1>
          <p className="text-gray-600 mt-1">Specimen handling, workflows, and reporting for anatomic pathology</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddSpecimen}>
            <Plus className="h-4 w-4 mr-2" />
            Add Specimen
          </Button>
          <Button variant="outline" onClick={handleAddReport}>
            <Plus className="h-4 w-4 mr-2" />
            Add Report
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Specimens</p>
                <p className="text-3xl font-bold text-gray-900">{pathologyData.specimens.length}</p>
              </div>
              <Microscope className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Microscope className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active specimens</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reports</p>
                <p className="text-3xl font-bold text-gray-900">{pathologyData.reports.length}</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Pathology reports</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Blocks</p>
                <p className="text-3xl font-bold text-gray-900">{pathologyData.blocks.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Tissue blocks</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Slides</p>
                <p className="text-3xl font-bold text-gray-900">{pathologyData.slides.length}</p>
              </div>
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Eye className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Microscopy slides</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search specimens, patients, or pathologists..."
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
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Ready for Review">Ready for Review</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="specimens" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="specimens">Specimens</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="slides">Slides</TabsTrigger>
          <TabsTrigger value="quality">Quality Control</TabsTrigger>
        </TabsList>

        {/* Specimens Tab */}
        <TabsContent value="specimens">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Microscope className="h-5 w-5 mr-2" />
                Specimen Handling ({filteredSpecimens.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredSpecimens.map((specimen) => (
                    <div key={specimen.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{specimen.patientName}</h3>
                            <Badge variant="outline">{specimen.specimenType}</Badge>
                            <Badge className={getStatusColor(specimen.status)}>
                              {specimen.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {specimen.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Site: {specimen.site} • Pathologist: {specimen.pathologist} • Technician: {specimen.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collection: {new Date(specimen.collectionDate).toLocaleString()} • Received: {new Date(specimen.receivedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Gross Description: {specimen.grossDescription}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Clinical History: {specimen.clinicalHistory}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Diagnosis: {specimen.diagnosis}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {specimen.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Workflows Tab */}
        <TabsContent value="workflows">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Processing Workflows ({pathologyData.workflows.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {pathologyData.workflows.map((workflow) => (
                    <div key={workflow.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{workflow.name}</h3>
                            <Badge variant="outline">{workflow.type}</Badge>
                            <Badge className={getStatusColor(workflow.status)}>
                              {workflow.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Steps: {workflow.steps.join(' → ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Turnaround Time: {workflow.turnaroundTime}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Progress: {workflow.completed}/{workflow.specimens} completed • {workflow.pending} pending
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Pathology Reports ({pathologyData.reports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {pathologyData.reports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.patientName}</h3>
                            <Badge variant="outline">{report.reportType}</Badge>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Specimen: {report.specimenId} • Pathologist: {report.pathologist}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Created: {new Date(report.createdDate).toLocaleString()} • Final: {report.finalDate ? new Date(report.finalDate).toLocaleString() : 'Pending'}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Diagnosis: {report.diagnosis}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Microscopic: {report.microscopicDescription}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Clinical Correlation: {report.clinicalCorrelation}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Recommendations: {report.recommendations}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {report.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Blocks Tab */}
        <TabsContent value="blocks">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Tissue Blocks ({pathologyData.blocks.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {pathologyData.blocks.map((block) => (
                    <div key={block.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{block.patientName}</h3>
                            <Badge variant="outline">{block.blockNumber}</Badge>
                            <Badge className={getStatusColor(block.status)}>
                              {block.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Specimen: {block.specimenId} • Tissue: {block.tissueType} • Technician: {block.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Processing: {new Date(block.processingDate).toLocaleString()} • Embedding: {new Date(block.embeddingDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Cutting: {new Date(block.cuttingDate).toLocaleString()} • Staining: {new Date(block.stainingDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {block.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Slides Tab */}
        <TabsContent value="slides">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Microscopy Slides ({pathologyData.slides.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {pathologyData.slides.map((slide) => (
                    <div key={slide.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{slide.patientName}</h3>
                            <Badge variant="outline">{slide.slideNumber}</Badge>
                            <Badge className={getStatusColor(slide.status)}>
                              {slide.status}
                            </Badge>
                            <Badge className={getStatusColor(slide.quality)}>
                              {slide.quality}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Specimen: {slide.specimenId} • Stain: {slide.stainType} • Technician: {slide.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Cutting: {new Date(slide.cuttingDate).toLocaleString()} • Staining: {new Date(slide.stainingDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {slide.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Quality Control Tab */}
        <TabsContent value="quality">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Quality Control ({pathologyData.qualityControl.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {pathologyData.qualityControl.map((qc) => (
                    <div key={qc.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{qc.type}</h3>
                            <Badge variant="outline">{qc.technician}</Badge>
                            <Badge className={getStatusColor(qc.status)}>
                              {qc.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(qc.date).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Details: {qc.details}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {qc.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
        </TabsContent>
      </Tabs>

      {/* Add Specimen Dialog */}
      <Dialog open={isSpecimenOpen} onOpenChange={setIsSpecimenOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Specimen' : 'Add New Specimen'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-id">Patient ID</Label>
                <Input id="patient-id" placeholder="Enter patient ID" />
              </div>
              <div>
                <Label htmlFor="specimen-type">Specimen Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specimen type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Biopsy">Biopsy</SelectItem>
                    <SelectItem value="Cytology">Cytology</SelectItem>
                    <SelectItem value="Surgical">Surgical</SelectItem>
                    <SelectItem value="Autopsy">Autopsy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="site">Site</Label>
                <Input id="site" placeholder="Enter site" />
              </div>
              <div>
                <Label htmlFor="pathologist">Pathologist</Label>
                <Input id="pathologist" placeholder="Enter pathologist name" />
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Routine">Routine</SelectItem>
                    <SelectItem value="Urgent">Urgent</SelectItem>
                    <SelectItem value="Stat">Stat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="gross-description">Gross Description</Label>
              <Textarea id="gross-description" placeholder="Enter gross description" />
            </div>
            
            <div>
              <Label htmlFor="clinical-history">Clinical History</Label>
              <Textarea id="clinical-history" placeholder="Enter clinical history" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsSpecimenOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsSpecimenOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Specimen' : 'Add Specimen'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Report Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Report' : 'Add New Report'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="specimen-id">Specimen ID</Label>
                <Input id="specimen-id" placeholder="Enter specimen ID" />
              </div>
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Surgical Pathology">Surgical Pathology</SelectItem>
                    <SelectItem value="Cytology">Cytology</SelectItem>
                    <SelectItem value="Autopsy">Autopsy</SelectItem>
                    <SelectItem value="Consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pathologist">Pathologist</Label>
                <Input id="pathologist" placeholder="Enter pathologist name" />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Final">Final</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Textarea id="diagnosis" placeholder="Enter diagnosis" />
            </div>
            
            <div>
              <Label htmlFor="microscopic-description">Microscopic Description</Label>
              <Textarea id="microscopic-description" placeholder="Enter microscopic description" />
            </div>
            
            <div>
              <Label htmlFor="clinical-correlation">Clinical Correlation</Label>
              <Textarea id="clinical-correlation" placeholder="Enter clinical correlation" />
            </div>
            
            <div>
              <Label htmlFor="recommendations">Recommendations</Label>
              <Textarea id="recommendations" placeholder="Enter recommendations" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsReportOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsReportOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Report' : 'Add Report'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
