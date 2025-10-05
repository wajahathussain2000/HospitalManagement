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
  FileText,
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

export default function ResultEntryValidation() {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const [isValidationOpen, setIsValidationOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock result entry data
  const resultData = {
    pending: [
      {
        id: 'RES001',
        patientId: 'P12345',
        patientName: 'John Doe',
        specimenId: 'SP001',
        test: 'Glucose',
        result: '',
        unit: 'mg/dL',
        referenceRange: '70-100 mg/dL',
        status: 'Pending',
        priority: 'Normal',
        orderedBy: 'Dr. Sarah Johnson',
        orderedDate: '2024-01-21T08:00:00Z',
        dueDate: '2024-01-21T16:00:00Z',
        technician: 'Lisa Brown',
        notes: 'Fasting glucose test'
      },
      {
        id: 'RES002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        specimenId: 'SP002',
        test: 'CBC',
        result: '',
        unit: '',
        referenceRange: '',
        status: 'Pending',
        priority: 'High',
        orderedBy: 'Dr. Michael Chen',
        orderedDate: '2024-01-21T09:00:00Z',
        dueDate: '2024-01-21T12:00:00Z',
        technician: 'Tom Davis',
        notes: 'Complete blood count with differential'
      }
    ],
    validated: [
      {
        id: 'RES003',
        patientId: 'P12347',
        patientName: 'Bob Wilson',
        specimenId: 'SP003',
        test: 'Creatinine',
        result: '1.2 mg/dL',
        unit: 'mg/dL',
        referenceRange: '0.6-1.2 mg/dL',
        status: 'Validated',
        priority: 'Normal',
        orderedBy: 'Dr. Emily Rodriguez',
        orderedDate: '2024-01-21T07:00:00Z',
        validatedDate: '2024-01-21T10:30:00Z',
        technician: 'Lisa Brown',
        validator: 'Dr. Sarah Johnson',
        notes: 'Normal kidney function'
      }
    ],
    critical: [
      {
        id: 'RES004',
        patientId: 'P12348',
        patientName: 'Alice Johnson',
        specimenId: 'SP004',
        test: 'Troponin I',
        result: '15.2 ng/mL',
        unit: 'ng/mL',
        referenceRange: '<0.04 ng/mL',
        status: 'Critical',
        priority: 'Critical',
        orderedBy: 'Dr. David Wilson',
        orderedDate: '2024-01-21T06:00:00Z',
        criticalDate: '2024-01-21T08:15:00Z',
        technician: 'Tom Davis',
        validator: 'Dr. Michael Chen',
        notes: 'CRITICAL VALUE - Elevated troponin indicating possible MI',
        flags: ['CRITICAL', 'H']
      }
    ],
    rejected: [
      {
        id: 'RES005',
        patientId: 'P12349',
        patientName: 'Charlie Brown',
        specimenId: 'SP005',
        test: 'ALT',
        result: '',
        unit: 'U/L',
        referenceRange: '7-56 U/L',
        status: 'Rejected',
        priority: 'Normal',
        orderedBy: 'Dr. Lisa Anderson',
        orderedDate: '2024-01-21T05:00:00Z',
        rejectedDate: '2024-01-21T07:30:00Z',
        technician: 'Lisa Brown',
        reason: 'Specimen hemolyzed',
        notes: 'Sample rejected due to hemolysis'
      }
    ],
    worklists: [
      {
        id: 'WL001',
        name: 'Chemistry Panel',
        tests: ['Glucose', 'Creatinine', 'BUN', 'ALT', 'AST'],
        technician: 'Lisa Brown',
        status: 'Active',
        createdDate: '2024-01-21T08:00:00Z',
        dueDate: '2024-01-21T16:00:00Z',
        specimens: 15,
        completed: 8,
        pending: 7
      },
      {
        id: 'WL002',
        name: 'Hematology CBC',
        tests: ['CBC', 'Differential'],
        technician: 'Tom Davis',
        status: 'Active',
        createdDate: '2024-01-21T09:00:00Z',
        dueDate: '2024-01-21T14:00:00Z',
        specimens: 12,
        completed: 5,
        pending: 7
      }
    ],
    validationRules: [
      {
        id: 'VR001',
        test: 'Glucose',
        rule: 'If result > 200 mg/dL, flag as High',
        severity: 'Warning',
        action: 'Auto-flag',
        status: 'Active'
      },
      {
        id: 'VR002',
        test: 'Troponin I',
        rule: 'If result > 0.04 ng/mL, flag as Critical',
        severity: 'Critical',
        action: 'Auto-flag and alert',
        status: 'Active'
      },
      {
        id: 'VR003',
        test: 'Creatinine',
        rule: 'If result > 2.0 mg/dL, flag as High',
        severity: 'Warning',
        action: 'Auto-flag',
        status: 'Active'
      }
    ],
    entryModes: [
      {
        id: 'EM001',
        name: 'Manual Entry',
        description: 'Manual result entry by technician',
        icon: 'Edit',
        status: 'Active'
      },
      {
        id: 'EM002',
        name: 'Barcode Scan',
        description: 'Scan barcode to auto-populate',
        icon: 'Scan',
        status: 'Active'
      },
      {
        id: 'EM003',
        name: 'Voice Entry',
        description: 'Voice-to-text result entry',
        icon: 'Mic',
        status: 'Active'
      },
      {
        id: 'EM004',
        name: 'Bulk Import',
        description: 'Import results from file',
        icon: 'Upload',
        status: 'Active'
      }
    ]
  };

  const handleAddEntry = () => {
    setSelectedItem(null);
    setIsEntryOpen(true);
  };

  const handleValidate = () => {
    setSelectedItem(null);
    setIsValidationOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Validated': return 'bg-green-100 text-green-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Rejected': return 'bg-gray-100 text-gray-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPending = resultData.pending.filter(result => {
    const matchesSearch = result.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.test.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.technician.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Result Entry & Validation</h1>
          <p className="text-gray-600 mt-1">Entry modes, validation workflow, and critical value management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddEntry}>
            <Plus className="h-4 w-4 mr-2" />
            Add Result
          </Button>
          <Button variant="outline" onClick={handleValidate}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Validate
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
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-gray-900">{resultData.pending.length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Awaiting entry</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Validated</p>
                <p className="text-3xl font-bold text-gray-900">{resultData.validated.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Completed results</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical</p>
                <p className="text-3xl font-bold text-gray-900">{resultData.critical.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Critical values</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Worklists</p>
                <p className="text-3xl font-bold text-gray-900">{resultData.worklists.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active worklists</span>
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
                  placeholder="Search patients, tests, or technicians..."
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
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Validated">Validated</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="validated">Validated</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="worklists">Worklists</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
        </TabsList>

        {/* Pending Tab */}
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Pending Results ({filteredPending.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredPending.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                            <Badge className={getPriorityColor(result.priority)}>
                              {result.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient ID: {result.patientId} • Specimen: {result.specimenId} • Technician: {result.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Ordered By: {result.orderedBy} • Due: {new Date(result.dueDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reference Range: {result.referenceRange} • Unit: {result.unit}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {result.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Enter Result
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
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

        {/* Validated Tab */}
        <TabsContent value="validated">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Validated Results ({resultData.validated.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {resultData.validated.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                            <Badge className={getPriorityColor(result.priority)}>
                              {result.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Result: {result.result} {result.unit} • Reference: {result.referenceRange}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Validated By: {result.validator} • Date: {new Date(result.validatedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {result.notes}
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

        {/* Critical Tab */}
        <TabsContent value="critical">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Critical Values ({resultData.critical.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {resultData.critical.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4 bg-red-50">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                            <Badge className={getPriorityColor(result.priority)}>
                              {result.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Result: {result.result} {result.unit} • Reference: {result.referenceRange}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Critical Date: {new Date(result.criticalDate).toLocaleString()} • Validator: {result.validator}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Flags: {result.flags.join(', ')}
                          </div>
                          <div className="text-sm text-red-600 font-medium">
                            {result.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="bg-red-100 text-red-800">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
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

        {/* Rejected Tab */}
        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Rejected Results ({resultData.rejected.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {resultData.rejected.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                            <Badge className={getPriorityColor(result.priority)}>
                              {result.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Rejected Date: {new Date(result.rejectedDate).toLocaleString()} • Technician: {result.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reason: {result.reason}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {result.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Reorder
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

        {/* Worklists Tab */}
        <TabsContent value="worklists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Worklists ({resultData.worklists.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {resultData.worklists.map((worklist) => (
                    <div key={worklist.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{worklist.name}</h3>
                            <Badge variant="outline">{worklist.technician}</Badge>
                            <Badge className={getStatusColor(worklist.status)}>
                              {worklist.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {worklist.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Created: {new Date(worklist.createdDate).toLocaleString()} • Due: {new Date(worklist.dueDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Progress: {worklist.completed}/{worklist.specimens} completed • {worklist.pending} pending
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

        {/* Rules Tab */}
        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Validation Rules ({resultData.validationRules.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {resultData.validationRules.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{rule.test}</h3>
                            <Badge variant="outline">{rule.severity}</Badge>
                            <Badge className={getStatusColor(rule.status)}>
                              {rule.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Rule: {rule.rule}
                          </div>
                          <div className="text-sm text-gray-600">
                            Action: {rule.action}
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

      {/* Add Entry Dialog */}
      <Dialog open={isEntryOpen} onOpenChange={setIsEntryOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Result' : 'Enter Result'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-id">Patient ID</Label>
                <Input id="patient-id" placeholder="Enter patient ID" />
              </div>
              <div>
                <Label htmlFor="test">Test</Label>
                <Input id="test" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="result">Result</Label>
                <Input id="result" placeholder="Enter result value" />
              </div>
              <div>
                <Label htmlFor="unit">Unit</Label>
                <Input id="unit" placeholder="Enter unit" />
              </div>
              <div>
                <Label htmlFor="reference-range">Reference Range</Label>
                <Input id="reference-range" placeholder="Enter reference range" />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsEntryOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsEntryOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Result' : 'Enter Result'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Validation Dialog */}
      <Dialog open={isValidationOpen} onOpenChange={setIsValidationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Validation' : 'Validate Result'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="validator">Validator</Label>
                <Input id="validator" placeholder="Enter validator name" />
              </div>
              <div>
                <Label htmlFor="validation-date">Validation Date</Label>
                <Input id="validation-date" type="datetime-local" />
              </div>
              <div>
                <Label htmlFor="validation-status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Validated">Validated</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="flags">Flags</Label>
                <Input id="flags" placeholder="Enter flags" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="validation-notes">Validation Notes</Label>
              <Textarea id="validation-notes" placeholder="Enter validation notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsValidationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsValidationOpen(false)}>
                <CheckCircle className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Validation' : 'Validate Result'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
