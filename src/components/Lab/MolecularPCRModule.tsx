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
  Dna,
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

export default function MolecularPCRModule() {
  const [activeTab, setActiveTab] = useState('worklists');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isPCROpen, setIsPCROpen] = useState(false);
  const [isContaminationOpen, setIsContaminationOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock molecular/PCR data
  const molecularData = {
    worklists: [
      {
        id: 'MWL001',
        name: 'COVID-19 PCR Worklist',
        type: 'RT-PCR',
        technician: 'Dr. Sarah Johnson',
        status: 'Active',
        createdDate: '2024-01-21T08:00:00Z',
        dueDate: '2024-01-21T16:00:00Z',
        specimens: 24,
        completed: 18,
        pending: 6,
        priority: 'High'
      },
      {
        id: 'MWL002',
        name: 'Influenza A/B PCR',
        type: 'RT-PCR',
        technician: 'Dr. Michael Chen',
        status: 'Active',
        createdDate: '2024-01-21T09:00:00Z',
        dueDate: '2024-01-21T15:00:00Z',
        specimens: 16,
        completed: 12,
        pending: 4,
        priority: 'Normal'
      }
    ],
    pcrResults: [
      {
        id: 'PCR001',
        patientId: 'P12345',
        patientName: 'John Doe',
        specimenId: 'SP001',
        test: 'COVID-19 RT-PCR',
        target: 'SARS-CoV-2',
        ctValue: 28.5,
        result: 'Positive',
        status: 'Completed',
        technician: 'Dr. Sarah Johnson',
        runDate: '2024-01-21T10:30:00Z',
        completionDate: '2024-01-21T11:15:00Z',
        instrument: 'Applied Biosystems 7500',
        kit: 'TaqPath COVID-19',
        lotNumber: 'TP2024001',
        internalControl: 'Pass',
        quality: 'Good',
        notes: 'Strong positive signal'
      },
      {
        id: 'PCR002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        specimenId: 'SP002',
        test: 'Influenza A RT-PCR',
        target: 'Influenza A',
        ctValue: 32.1,
        result: 'Positive',
        status: 'Completed',
        technician: 'Dr. Michael Chen',
        runDate: '2024-01-21T11:00:00Z',
        completionDate: '2024-01-21T11:45:00Z',
        instrument: 'Applied Biosystems 7500',
        kit: 'Influenza A/B Kit',
        lotNumber: 'IA2024001',
        internalControl: 'Pass',
        quality: 'Good',
        notes: 'Influenza A detected'
      }
    ],
    quantitative: [
      {
        id: 'QUANT001',
        patientId: 'P12347',
        patientName: 'Bob Wilson',
        specimenId: 'SP003',
        test: 'HBV DNA Quantitative',
        target: 'HBV DNA',
        concentration: '2.5 x 10^6 IU/mL',
        result: 'Detected',
        status: 'Completed',
        technician: 'Dr. Emily Rodriguez',
        runDate: '2024-01-21T09:30:00Z',
        completionDate: '2024-01-21T10:30:00Z',
        instrument: 'Roche Cobas 6800',
        kit: 'HBV DNA Kit',
        lotNumber: 'HBV2024001',
        linearRange: '20 - 1.7 x 10^8 IU/mL',
        quality: 'Good',
        notes: 'High viral load detected'
      }
    ],
    qualitative: [
      {
        id: 'QUAL001',
        patientId: 'P12348',
        patientName: 'Alice Johnson',
        specimenId: 'SP004',
        test: 'HCV RNA Qualitative',
        target: 'HCV RNA',
        result: 'Detected',
        status: 'Completed',
        technician: 'Dr. David Wilson',
        runDate: '2024-01-21T08:00:00Z',
        completionDate: '2024-01-21T09:00:00Z',
        instrument: 'Roche Cobas 6800',
        kit: 'HCV RNA Kit',
        lotNumber: 'HCV2024001',
        detectionLimit: '15 IU/mL',
        quality: 'Good',
        notes: 'HCV RNA detected'
      }
    ],
    contamination: [
      {
        id: 'CONT001',
        type: 'Environmental',
        location: 'PCR Room A',
        date: '2024-01-21T10:00:00Z',
        level: 'Low',
        source: 'Surface contamination',
        action: 'Cleaning performed',
        status: 'Resolved',
        technician: 'Dr. Sarah Johnson',
        notes: 'Routine cleaning resolved contamination'
      },
      {
        id: 'CONT002',
        type: 'Cross-contamination',
        location: 'PCR Room B',
        date: '2024-01-21T11:30:00Z',
        level: 'High',
        source: 'Sample carryover',
        action: 'Equipment decontamination',
        status: 'Under Investigation',
        technician: 'Dr. Michael Chen',
        notes: 'Possible sample carryover between runs'
      }
    ],
    instruments: [
      {
        id: 'INST001',
        name: 'Applied Biosystems 7500',
        type: 'Real-time PCR',
        manufacturer: 'Thermo Fisher',
        model: '7500 Fast',
        location: 'PCR Room A',
        status: 'Online',
        lastMaintenance: '2024-01-15',
        nextMaintenance: '2024-02-15',
        throughput: 96,
        version: 'v2.3.1',
        serialNumber: 'AB7500-001234'
      },
      {
        id: 'INST002',
        name: 'Roche Cobas 6800',
        type: 'Automated PCR',
        manufacturer: 'Roche',
        model: 'Cobas 6800',
        location: 'PCR Room B',
        status: 'Online',
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-02-10',
        throughput: 1440,
        version: 'v3.1.2',
        serialNumber: 'RC6800-005678'
      }
    ],
    kits: [
      {
        id: 'KIT001',
        name: 'TaqPath COVID-19',
        manufacturer: 'Thermo Fisher',
        type: 'RT-PCR',
        targets: ['SARS-CoV-2'],
        lotNumber: 'TP2024001',
        expiryDate: '2024-06-30',
        quantity: 100,
        status: 'Active',
        storage: '-20°C',
        notes: 'COVID-19 detection kit'
      },
      {
        id: 'KIT002',
        name: 'Influenza A/B Kit',
        manufacturer: 'Roche',
        type: 'RT-PCR',
        targets: ['Influenza A', 'Influenza B'],
        lotNumber: 'IA2024001',
        expiryDate: '2024-07-15',
        quantity: 50,
        status: 'Active',
        storage: '-20°C',
        notes: 'Influenza detection kit'
      }
    ]
  };

  const handleAddPCR = () => {
    setSelectedItem(null);
    setIsPCROpen(true);
  };

  const handleAddContamination = () => {
    setSelectedItem(null);
    setIsContaminationOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      case 'Positive': return 'bg-red-100 text-red-800';
      case 'Negative': return 'bg-green-100 text-green-800';
      case 'Detected': return 'bg-red-100 text-red-800';
      case 'Not Detected': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Under Investigation': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredWorklists = molecularData.worklists.filter(worklist => {
    const matchesSearch = worklist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worklist.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worklist.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || worklist.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Molecular/PCR Module</h1>
          <p className="text-gray-600 mt-1">Worklists, Ct/Qual/Quant, contamination control for molecular diagnostics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddPCR}>
            <Plus className="h-4 w-4 mr-2" />
            Add PCR
          </Button>
          <Button variant="outline" onClick={handleAddContamination}>
            <Plus className="h-4 w-4 mr-2" />
            Add Contamination
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
                <p className="text-sm font-medium text-gray-600">Worklists</p>
                <p className="text-3xl font-bold text-gray-900">{molecularData.worklists.length}</p>
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

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">PCR Results</p>
                <p className="text-3xl font-bold text-gray-900">{molecularData.pcrResults.length}</p>
              </div>
              <Dna className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Dna className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">PCR completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Instruments</p>
                <p className="text-3xl font-bold text-gray-900">{molecularData.instruments.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">PCR instruments</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Contamination</p>
                <p className="text-3xl font-bold text-gray-900">{molecularData.contamination.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Contamination events</span>
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
                  placeholder="Search worklists, tests, or technicians..."
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="worklists" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="worklists">Worklists</TabsTrigger>
          <TabsTrigger value="pcr-results">PCR Results</TabsTrigger>
          <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
          <TabsTrigger value="qualitative">Qualitative</TabsTrigger>
          <TabsTrigger value="contamination">Contamination</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
          <TabsTrigger value="kits">Kits</TabsTrigger>
        </TabsList>

        {/* Worklists Tab */}
        <TabsContent value="worklists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                PCR Worklists ({filteredWorklists.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredWorklists.map((worklist) => (
                    <div key={worklist.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{worklist.name}</h3>
                            <Badge variant="outline">{worklist.type}</Badge>
                            <Badge className={getStatusColor(worklist.status)}>
                              {worklist.status}
                            </Badge>
                            <Badge className={getStatusColor(worklist.priority)}>
                              {worklist.priority}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Technician: {worklist.technician} • Created: {new Date(worklist.createdDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Due: {new Date(worklist.dueDate).toLocaleString()}
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

        {/* PCR Results Tab */}
        <TabsContent value="pcr-results">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dna className="h-5 w-5 mr-2" />
                PCR Results ({molecularData.pcrResults.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.pcrResults.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.result)}>
                              {result.result}
                            </Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {result.target} • Ct Value: {result.ctValue} • Technician: {result.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instrument: {result.instrument} • Kit: {result.kit} • Lot: {result.lotNumber}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Run Date: {new Date(result.runDate).toLocaleString()} • Completion: {new Date(result.completionDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Internal Control: {result.internalControl} • Quality: {result.quality}
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

        {/* Quantitative Tab */}
        <TabsContent value="quantitative">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Quantitative Results ({molecularData.quantitative.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.quantitative.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.result)}>
                              {result.result}
                            </Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {result.target} • Concentration: {result.concentration} • Technician: {result.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instrument: {result.instrument} • Kit: {result.kit} • Lot: {result.lotNumber}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Linear Range: {result.linearRange} • Quality: {result.quality}
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

        {/* Qualitative Tab */}
        <TabsContent value="qualitative">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Qualitative Results ({molecularData.qualitative.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.qualitative.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.patientName}</h3>
                            <Badge variant="outline">{result.test}</Badge>
                            <Badge className={getStatusColor(result.result)}>
                              {result.result}
                            </Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {result.target} • Technician: {result.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instrument: {result.instrument} • Kit: {result.kit} • Lot: {result.lotNumber}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Detection Limit: {result.detectionLimit} • Quality: {result.quality}
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

        {/* Contamination Tab */}
        <TabsContent value="contamination">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Contamination Control ({molecularData.contamination.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.contamination.map((contamination) => (
                    <div key={contamination.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{contamination.type}</h3>
                            <Badge variant="outline">{contamination.location}</Badge>
                            <Badge className={getStatusColor(contamination.level)}>
                              {contamination.level}
                            </Badge>
                            <Badge className={getStatusColor(contamination.status)}>
                              {contamination.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(contamination.date).toLocaleString()} • Technician: {contamination.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Source: {contamination.source} • Action: {contamination.action}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {contamination.notes}
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

        {/* Instruments Tab */}
        <TabsContent value="instruments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                PCR Instruments ({molecularData.instruments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.instruments.map((instrument) => (
                    <div key={instrument.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{instrument.name}</h3>
                            <Badge variant="outline">{instrument.type}</Badge>
                            <Badge className={getStatusColor(instrument.status)}>
                              {instrument.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Manufacturer: {instrument.manufacturer} • Model: {instrument.model} • Location: {instrument.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Serial: {instrument.serialNumber} • Version: {instrument.version} • Throughput: {instrument.throughput}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Maintenance: {instrument.lastMaintenance} • Next: {instrument.nextMaintenance}
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

        {/* Kits Tab */}
        <TabsContent value="kits">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Beaker className="h-5 w-5 mr-2" />
                PCR Kits ({molecularData.kits.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {molecularData.kits.map((kit) => (
                    <div key={kit.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{kit.name}</h3>
                            <Badge variant="outline">{kit.type}</Badge>
                            <Badge className={getStatusColor(kit.status)}>
                              {kit.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Manufacturer: {kit.manufacturer} • Lot: {kit.lotNumber} • Expiry: {kit.expiryDate}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Targets: {kit.targets.join(', ')} • Quantity: {kit.quantity} • Storage: {kit.storage}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {kit.notes}
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

      {/* Add PCR Dialog */}
      <Dialog open={isPCROpen} onOpenChange={setIsPCROpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit PCR' : 'Add New PCR'}
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
                <Label htmlFor="target">Target</Label>
                <Input id="target" placeholder="Enter target" />
              </div>
              <div>
                <Label htmlFor="ct-value">Ct Value</Label>
                <Input id="ct-value" placeholder="Enter Ct value" type="number" />
              </div>
              <div>
                <Label htmlFor="result">Result</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select result" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Positive">Positive</SelectItem>
                    <SelectItem value="Negative">Negative</SelectItem>
                    <SelectItem value="Invalid">Invalid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter PCR notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPCROpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPCROpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update PCR' : 'Add PCR'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Contamination Dialog */}
      <Dialog open={isContaminationOpen} onOpenChange={setIsContaminationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Contamination' : 'Add New Contamination'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Environmental">Environmental</SelectItem>
                    <SelectItem value="Cross-contamination">Cross-contamination</SelectItem>
                    <SelectItem value="Sample carryover">Sample carryover</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="level">Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="source">Source</Label>
                <Input id="source" placeholder="Enter source" />
              </div>
              <div>
                <Label htmlFor="action">Action</Label>
                <Input id="action" placeholder="Enter action taken" />
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter contamination notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsContaminationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsContaminationOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Contamination' : 'Add Contamination'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
