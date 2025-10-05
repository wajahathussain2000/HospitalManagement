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

export default function MicrobiologyModule() {
  const [activeTab, setActiveTab] = useState('cultures');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCultureOpen, setIsCultureOpen] = useState(false);
  const [isIDOpen, setIsIDOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock microbiology data
  const microData = {
    cultures: [
      {
        id: 'CULT001',
        patientId: 'P12345',
        patientName: 'John Doe',
        specimenType: 'Blood Culture',
        specimenId: 'SP001',
        collectionDate: '2024-01-21T08:00:00Z',
        receivedDate: '2024-01-21T08:30:00Z',
        incubationDate: '2024-01-21T09:00:00Z',
        status: 'Incubating',
        media: ['BACTEC Plus Aerobic', 'BACTEC Plus Anaerobic'],
        temperature: '37°C',
        atmosphere: 'CO2',
        technician: 'Lisa Brown',
        notes: 'Fever of unknown origin',
        growth: 'No growth',
        incubationTime: '24 hours',
        expectedResult: '48-72 hours'
      },
      {
        id: 'CULT002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        specimenType: 'Urine Culture',
        specimenId: 'SP002',
        collectionDate: '2024-01-21T09:00:00Z',
        receivedDate: '2024-01-21T09:15:00Z',
        incubationDate: '2024-01-21T09:30:00Z',
        status: 'Positive',
        media: ['MacConkey Agar', 'Blood Agar'],
        temperature: '37°C',
        atmosphere: 'Ambient',
        technician: 'Tom Davis',
        notes: 'UTI symptoms',
        growth: 'E. coli',
        incubationTime: '18 hours',
        expectedResult: '24-48 hours'
      }
    ],
    identifications: [
      {
        id: 'ID001',
        cultureId: 'CULT002',
        organism: 'Escherichia coli',
        method: 'VITEK 2',
        confidence: '99.9%',
        status: 'Completed',
        technician: 'Tom Davis',
        completedDate: '2024-01-21T15:30:00Z',
        morphology: 'Gram-negative rods',
        oxidase: 'Negative',
        catalase: 'Positive',
        indole: 'Positive',
        notes: 'Typical E. coli morphology and biochemical profile'
      }
    ],
    ast: [
      {
        id: 'AST001',
        cultureId: 'CULT002',
        organism: 'Escherichia coli',
        method: 'VITEK 2 AST',
        status: 'Completed',
        technician: 'Tom Davis',
        completedDate: '2024-01-21T16:00:00Z',
        results: [
          { antibiotic: 'Ampicillin', result: 'R', mic: '>32', interpretation: 'Resistant' },
          { antibiotic: 'Ceftriaxone', result: 'S', mic: '≤1', interpretation: 'Susceptible' },
          { antibiotic: 'Ciprofloxacin', result: 'S', mic: '≤0.25', interpretation: 'Susceptible' },
          { antibiotic: 'Gentamicin', result: 'S', mic: '≤2', interpretation: 'Susceptible' }
        ],
        notes: 'Multi-drug resistant E. coli'
      }
    ],
    infectionControl: [
      {
        id: 'IC001',
        patientId: 'P12345',
        patientName: 'John Doe',
        organism: 'MRSA',
        isolation: 'Contact Precautions',
        status: 'Active',
        startDate: '2024-01-21T10:00:00Z',
        endDate: null,
        room: 'Room 205',
        precautions: ['Contact', 'Hand Hygiene', 'PPE'],
        notes: 'MRSA positive - contact precautions initiated'
      }
    ],
    worklists: [
      {
        id: 'MWL001',
        name: 'Blood Culture Worklist',
        type: 'Blood Culture',
        technician: 'Lisa Brown',
        status: 'Active',
        createdDate: '2024-01-21T08:00:00Z',
        specimens: 8,
        completed: 3,
        pending: 5,
        dueDate: '2024-01-21T16:00:00Z'
      },
      {
        id: 'MWL002',
        name: 'Urine Culture Worklist',
        type: 'Urine Culture',
        technician: 'Tom Davis',
        status: 'Active',
        createdDate: '2024-01-21T09:00:00Z',
        specimens: 12,
        completed: 7,
        pending: 5,
        dueDate: '2024-01-21T15:00:00Z'
      }
    ],
    media: [
      {
        id: 'MED001',
        name: 'Blood Agar',
        type: 'Non-selective',
        manufacturer: 'BD',
        lotNumber: 'BA2024001',
        expiryDate: '2024-06-30',
        quantity: 50,
        status: 'Active',
        storage: '4°C',
        notes: 'Standard blood agar plates'
      },
      {
        id: 'MED002',
        name: 'MacConkey Agar',
        type: 'Selective',
        manufacturer: 'BD',
        lotNumber: 'MC2024001',
        expiryDate: '2024-07-15',
        quantity: 75,
        status: 'Active',
        storage: '4°C',
        notes: 'Selective for Gram-negative organisms'
      }
    ],
    organisms: [
      {
        id: 'ORG001',
        name: 'Escherichia coli',
        type: 'Bacteria',
        gramStain: 'Gram-negative',
        morphology: 'Rods',
        oxygen: 'Facultative anaerobe',
        catalase: 'Positive',
        oxidase: 'Negative',
        commonSources: ['Urine', 'Blood', 'Wound'],
        pathogenicity: 'Opportunistic',
        notes: 'Common cause of UTI'
      },
      {
        id: 'ORG002',
        name: 'Staphylococcus aureus',
        type: 'Bacteria',
        gramStain: 'Gram-positive',
        morphology: 'Cocci',
        oxygen: 'Facultative anaerobe',
        catalase: 'Positive',
        oxidase: 'Negative',
        commonSources: ['Blood', 'Wound', 'Respiratory'],
        pathogenicity: 'Pathogenic',
        notes: 'Can cause serious infections'
      }
    ]
  };

  const handleAddCulture = () => {
    setSelectedItem(null);
    setIsCultureOpen(true);
  };

  const handleAddID = () => {
    setSelectedItem(null);
    setIsIDOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Incubating': return 'bg-yellow-100 text-yellow-800';
      case 'Positive': return 'bg-green-100 text-green-800';
      case 'Negative': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Resistant': return 'bg-red-100 text-red-800';
      case 'Susceptible': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCultures = microData.cultures.filter(culture => {
    const matchesSearch = culture.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         culture.specimenType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         culture.technician.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || culture.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Microbiology Module</h1>
          <p className="text-gray-600 mt-1">Culture workflows, identification, AST, and infection control</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddCulture}>
            <Plus className="h-4 w-4 mr-2" />
            Add Culture
          </Button>
          <Button variant="outline" onClick={handleAddID}>
            <Plus className="h-4 w-4 mr-2" />
            Add ID
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
                <p className="text-sm font-medium text-gray-600">Cultures</p>
                <p className="text-3xl font-bold text-gray-900">{microData.cultures.length}</p>
              </div>
              <Microscope className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Microscope className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active cultures</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Identifications</p>
                <p className="text-3xl font-bold text-gray-900">{microData.identifications.length}</p>
              </div>
              <Dna className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Dna className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Completed IDs</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AST Results</p>
                <p className="text-3xl font-bold text-gray-900">{microData.ast.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">AST completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Infection Control</p>
                <p className="text-3xl font-bold text-gray-900">{microData.infectionControl.length}</p>
              </div>
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Active precautions</span>
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
                  placeholder="Search cultures, patients, or organisms..."
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
                <SelectItem value="Incubating">Incubating</SelectItem>
                <SelectItem value="Positive">Positive</SelectItem>
                <SelectItem value="Negative">Negative</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="cultures" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="cultures">Cultures</TabsTrigger>
          <TabsTrigger value="identifications">IDs</TabsTrigger>
          <TabsTrigger value="ast">AST</TabsTrigger>
          <TabsTrigger value="infection-control">Infection Control</TabsTrigger>
          <TabsTrigger value="worklists">Worklists</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="organisms">Organisms</TabsTrigger>
        </TabsList>

        {/* Cultures Tab */}
        <TabsContent value="cultures">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Microscope className="h-5 w-5 mr-2" />
                Culture Workflows ({filteredCultures.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredCultures.map((culture) => (
                    <div key={culture.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{culture.patientName}</h3>
                            <Badge variant="outline">{culture.specimenType}</Badge>
                            <Badge className={getStatusColor(culture.status)}>
                              {culture.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {culture.incubationTime}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Specimen: {culture.specimenId} • Technician: {culture.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Media: {culture.media.join(', ')} • Temperature: {culture.temperature} • Atmosphere: {culture.atmosphere}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collection: {new Date(culture.collectionDate).toLocaleString()} • Incubation: {new Date(culture.incubationDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Growth: {culture.growth} • Expected: {culture.expectedResult}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {culture.notes}
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

        {/* Identifications Tab */}
        <TabsContent value="identifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dna className="h-5 w-5 mr-2" />
                Organism Identifications ({microData.identifications.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.identifications.map((id) => (
                    <div key={id.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{id.organism}</h3>
                            <Badge variant="outline">{id.method}</Badge>
                            <Badge className={getStatusColor(id.status)}>
                              {id.status}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800">
                              {id.confidence}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Culture: {id.cultureId} • Technician: {id.technician} • Completed: {new Date(id.completedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Morphology: {id.morphology} • Oxidase: {id.oxidase} • Catalase: {id.catalase} • Indole: {id.indole}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {id.notes}
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

        {/* AST Tab */}
        <TabsContent value="ast">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Antimicrobial Susceptibility Testing ({microData.ast.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.ast.map((ast) => (
                    <div key={ast.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{ast.organism}</h3>
                            <Badge variant="outline">{ast.method}</Badge>
                            <Badge className={getStatusColor(ast.status)}>
                              {ast.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Culture: {ast.cultureId} • Technician: {ast.technician} • Completed: {new Date(ast.completedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Results:
                          </div>
                          <div className="ml-4 space-y-1">
                            {ast.results.map((result, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <span className="text-sm font-medium">{result.antibiotic}:</span>
                                <Badge className={getStatusColor(result.interpretation)}>
                                  {result.result}
                                </Badge>
                                <span className="text-sm text-gray-600">MIC: {result.mic}</span>
                                <span className="text-sm text-gray-600">({result.interpretation})</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600 mt-2">
                            Notes: {ast.notes}
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

        {/* Infection Control Tab */}
        <TabsContent value="infection-control">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Infection Control ({microData.infectionControl.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.infectionControl.map((ic) => (
                    <div key={ic.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{ic.patientName}</h3>
                            <Badge variant="outline">{ic.organism}</Badge>
                            <Badge className={getStatusColor(ic.status)}>
                              {ic.status}
                            </Badge>
                            <Badge className="bg-orange-100 text-orange-800">
                              {ic.isolation}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient ID: {ic.patientId} • Room: {ic.room} • Start: {new Date(ic.startDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Precautions: {ic.precautions.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {ic.notes}
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

        {/* Worklists Tab */}
        <TabsContent value="worklists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Microbiology Worklists ({microData.worklists.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.worklists.map((worklist) => (
                    <div key={worklist.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{worklist.name}</h3>
                            <Badge variant="outline">{worklist.type}</Badge>
                            <Badge className={getStatusColor(worklist.status)}>
                              {worklist.status}
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

        {/* Media Tab */}
        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Beaker className="h-5 w-5 mr-2" />
                Culture Media ({microData.media.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.media.map((media) => (
                    <div key={media.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{media.name}</h3>
                            <Badge variant="outline">{media.type}</Badge>
                            <Badge className={getStatusColor(media.status)}>
                              {media.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Manufacturer: {media.manufacturer} • Lot: {media.lotNumber} • Expiry: {media.expiryDate}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Quantity: {media.quantity} • Storage: {media.storage}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {media.notes}
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

        {/* Organisms Tab */}
        <TabsContent value="organisms">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dna className="h-5 w-5 mr-2" />
                Organism Database ({microData.organisms.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {microData.organisms.map((organism) => (
                    <div key={organism.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{organism.name}</h3>
                            <Badge variant="outline">{organism.type}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {organism.gramStain}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Morphology: {organism.morphology} • Oxygen: {organism.oxygen}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Catalase: {organism.catalase} • Oxidase: {organism.oxidase}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Common Sources: {organism.commonSources.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Pathogenicity: {organism.pathogenicity}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {organism.notes}
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

      {/* Add Culture Dialog */}
      <Dialog open={isCultureOpen} onOpenChange={setIsCultureOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Culture' : 'Add New Culture'}
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
                    <SelectItem value="Blood Culture">Blood Culture</SelectItem>
                    <SelectItem value="Urine Culture">Urine Culture</SelectItem>
                    <SelectItem value="Wound Culture">Wound Culture</SelectItem>
                    <SelectItem value="Respiratory Culture">Respiratory Culture</SelectItem>
                    <SelectItem value="Stool Culture">Stool Culture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="specimen-id">Specimen ID</Label>
                <Input id="specimen-id" placeholder="Enter specimen ID" />
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
              <div>
                <Label htmlFor="media">Media</Label>
                <Input id="media" placeholder="Enter media types" />
              </div>
              <div>
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" placeholder="Enter temperature" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter culture notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsCultureOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCultureOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Culture' : 'Add Culture'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add ID Dialog */}
      <Dialog open={isIDOpen} onOpenChange={setIsIDOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Identification' : 'Add New Identification'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="culture-id">Culture ID</Label>
                <Input id="culture-id" placeholder="Enter culture ID" />
              </div>
              <div>
                <Label htmlFor="organism">Organism</Label>
                <Input id="organism" placeholder="Enter organism name" />
              </div>
              <div>
                <Label htmlFor="method">Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VITEK 2">VITEK 2</SelectItem>
                    <SelectItem value="Manual">Manual</SelectItem>
                    <SelectItem value="MALDI-TOF">MALDI-TOF</SelectItem>
                    <SelectItem value="PCR">PCR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="confidence">Confidence</Label>
                <Input id="confidence" placeholder="Enter confidence level" />
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
              <div>
                <Label htmlFor="morphology">Morphology</Label>
                <Input id="morphology" placeholder="Enter morphology" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter identification notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsIDOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsIDOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Identification' : 'Add Identification'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
