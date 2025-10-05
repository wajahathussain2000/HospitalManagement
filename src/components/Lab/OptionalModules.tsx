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
  Heart,
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

export default function OptionalModules() {
  const [activeTab, setActiveTab] = useState('blood-bank');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isDonorOpen, setIsDonorOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock optional modules data
  const modulesData = {
    bloodBank: [
      {
        id: 'BB001',
        donorName: 'John Smith',
        bloodType: 'O+',
        donationDate: '2024-01-21T10:00:00Z',
        expiryDate: '2024-02-21T10:00:00Z',
        status: 'Available',
        volume: '450ml',
        location: 'Blood Bank A',
        compatibility: ['O+', 'A+', 'B+', 'AB+'],
        notes: 'Healthy donor, no complications'
      },
      {
        id: 'BB002',
        donorName: 'Jane Doe',
        bloodType: 'A-',
        donationDate: '2024-01-20T14:30:00Z',
        expiryDate: '2024-02-20T14:30:00Z',
        status: 'Reserved',
        volume: '450ml',
        location: 'Blood Bank B',
        compatibility: ['A-', 'A+', 'AB-', 'AB+'],
        notes: 'Reserved for surgery tomorrow'
      }
    ],
    occupationalHealth: [
      {
        id: 'OH001',
        employeeName: 'Mike Johnson',
        employeeId: 'EMP001',
        department: 'Laboratory',
        lastExam: '2024-01-15',
        nextExam: '2024-07-15',
        status: 'Clear',
        riskFactors: ['Chemical exposure', 'Biological hazards'],
        vaccinations: ['Hepatitis B', 'Tetanus'],
        notes: 'Regular lab employee health monitoring'
      },
      {
        id: 'OH002',
        employeeName: 'Sarah Wilson',
        employeeId: 'EMP002',
        department: 'Radiology',
        lastExam: '2024-01-10',
        nextExam: '2024-07-10',
        status: 'Follow-up Required',
        riskFactors: ['Radiation exposure'],
        vaccinations: ['Hepatitis B', 'Tetanus', 'Flu'],
        notes: 'Radiation safety monitoring required'
      }
    ],
    researchBiobank: [
      {
        id: 'RB001',
        studyName: 'Cancer Biomarker Research',
        participantId: 'PART001',
        specimenType: 'Blood',
        collectionDate: '2024-01-21T09:00:00Z',
        storageLocation: 'Biobank Freezer A',
        temperature: '-80°C',
        consentStatus: 'Active',
        researchProtocol: 'PROT001',
        notes: 'Longitudinal cancer study specimen'
      },
      {
        id: 'RB002',
        studyName: 'Genetic Diversity Study',
        participantId: 'PART002',
        specimenType: 'DNA',
        collectionDate: '2024-01-20T11:00:00Z',
        storageLocation: 'Biobank Freezer B',
        temperature: '-80°C',
        consentStatus: 'Active',
        researchProtocol: 'PROT002',
        notes: 'Population genetics research'
      }
    ],
    specializedTesting: [
      {
        id: 'ST001',
        testName: 'Advanced Genetic Panel',
        category: 'Genetics',
        complexity: 'High',
        turnaroundTime: '14 days',
        cost: 2500,
        status: 'Active',
        requirements: ['Genetic counseling', 'Informed consent'],
        notes: 'Comprehensive genetic analysis'
      },
      {
        id: 'ST002',
        testName: 'Tumor Profiling',
        category: 'Oncology',
        complexity: 'Very High',
        turnaroundTime: '21 days',
        cost: 5000,
        status: 'Active',
        requirements: ['Tumor tissue', 'Pathology report'],
        notes: 'Personalized cancer treatment'
      }
    ],
    regulatoryCompliance: [
      {
        id: 'RC001',
        regulation: 'FDA 21 CFR Part 11',
        requirement: 'Electronic Records',
        status: 'Compliant',
        lastAudit: '2024-01-15',
        nextAudit: '2024-07-15',
        findings: 0,
        correctiveActions: 0,
        notes: 'FDA compliance maintained'
      },
      {
        id: 'RC002',
        regulation: 'CLIA',
        requirement: 'Laboratory Standards',
        status: 'Compliant',
        lastAudit: '2024-01-10',
        nextAudit: '2024-07-10',
        findings: 0,
        correctiveActions: 0,
        notes: 'CLIA certification current'
      }
    ],
    integrations: [
      {
        id: 'INT001',
        module: 'Blood Bank',
        integrationType: 'Core Lab',
        status: 'Connected',
        lastSync: '2024-01-21T10:00:00Z',
        dataFlow: 'Bidirectional',
        apiVersion: 'v2.1',
        notes: 'Seamless blood bank integration'
      },
      {
        id: 'INT002',
        module: 'Occupational Health',
        integrationType: 'HR System',
        status: 'Connected',
        lastSync: '2024-01-21T09:30:00Z',
        dataFlow: 'Unidirectional',
        apiVersion: 'v1.5',
        notes: 'Employee health data sync'
      }
    ]
  };

  const handleAddModule = () => {
    setSelectedItem(null);
    setIsModuleOpen(true);
  };

  const handleAddDonor = () => {
    setSelectedItem(null);
    setIsDonorOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Reserved': return 'bg-yellow-100 text-yellow-800';
      case 'Used': return 'bg-gray-100 text-gray-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Clear': return 'bg-green-100 text-green-800';
      case 'Follow-up Required': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Disconnected': return 'bg-red-100 text-red-800';
      case 'Compliant': return 'bg-green-100 text-green-800';
      case 'Non-compliant': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Very High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBloodBank = modulesData.bloodBank.filter(donor => {
    const matchesSearch = donor.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || donor.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Optional Modules</h1>
          <p className="text-gray-600 mt-1">Blood bank, occupational health, research/biobank, and specialized testing</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddModule}>
            <Plus className="h-4 w-4 mr-2" />
            Add Module
          </Button>
          <Button variant="outline" onClick={handleAddDonor}>
            <Plus className="h-4 w-4 mr-2" />
            Add Donor
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
                <p className="text-sm font-medium text-gray-600">Blood Units</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.bloodBank.length}</p>
              </div>
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Heart className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Blood bank inventory</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Employees</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.occupationalHealth.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Occupational health</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Research Specimens</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.researchBiobank.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Research biobank</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Specialized Tests</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.specializedTesting.length}</p>
              </div>
              <Dna className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Dna className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Advanced testing</span>
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
                  placeholder="Search donors, employees, or specimens..."
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
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="Reserved">Reserved</SelectItem>
                <SelectItem value="Clear">Clear</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="blood-bank" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="blood-bank">Blood Bank</TabsTrigger>
          <TabsTrigger value="occupational">Occupational Health</TabsTrigger>
          <TabsTrigger value="research">Research/Biobank</TabsTrigger>
          <TabsTrigger value="specialized">Specialized Testing</TabsTrigger>
          <TabsTrigger value="compliance">Regulatory Compliance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        {/* Blood Bank Tab */}
        <TabsContent value="blood-bank">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Blood Bank Inventory ({filteredBloodBank.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredBloodBank.map((donor) => (
                    <div key={donor.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{donor.donorName}</h3>
                            <Badge variant="outline">{donor.bloodType}</Badge>
                            <Badge className={getStatusColor(donor.status)}>
                              {donor.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {donor.volume}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Donation: {new Date(donor.donationDate).toLocaleString()} • Expiry: {new Date(donor.expiryDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {donor.location} • Compatibility: {donor.compatibility.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {donor.notes}
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

        {/* Occupational Health Tab */}
        <TabsContent value="occupational">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Occupational Health ({modulesData.occupationalHealth.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {modulesData.occupationalHealth.map((employee) => (
                    <div key={employee.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{employee.employeeName}</h3>
                            <Badge variant="outline">{employee.employeeId}</Badge>
                            <Badge className={getStatusColor(employee.status)}>
                              {employee.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {employee.department}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Exam: {employee.lastExam} • Next Exam: {employee.nextExam}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Risk Factors: {employee.riskFactors.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Vaccinations: {employee.vaccinations.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {employee.notes}
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

        {/* Research/Biobank Tab */}
        <TabsContent value="research">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Research/Biobank ({modulesData.researchBiobank.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {modulesData.researchBiobank.map((specimen) => (
                    <div key={specimen.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{specimen.studyName}</h3>
                            <Badge variant="outline">{specimen.participantId}</Badge>
                            <Badge className={getStatusColor(specimen.consentStatus)}>
                              {specimen.consentStatus}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {specimen.specimenType}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collection: {new Date(specimen.collectionDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Storage: {specimen.storageLocation} • Temperature: {specimen.temperature}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Protocol: {specimen.researchProtocol}
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

        {/* Specialized Testing Tab */}
        <TabsContent value="specialized">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dna className="h-5 w-5 mr-2" />
                Specialized Testing ({modulesData.specializedTesting.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {modulesData.specializedTesting.map((test) => (
                    <div key={test.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{test.testName}</h3>
                            <Badge variant="outline">{test.category}</Badge>
                            <Badge className={getStatusColor(test.complexity)}>
                              {test.complexity}
                            </Badge>
                            <Badge className={getStatusColor(test.status)}>
                              {test.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Turnaround: {test.turnaroundTime} • Cost: ${test.cost}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Requirements: {test.requirements.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {test.notes}
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

        {/* Regulatory Compliance Tab */}
        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Regulatory Compliance ({modulesData.regulatoryCompliance.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {modulesData.regulatoryCompliance.map((compliance) => (
                    <div key={compliance.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{compliance.regulation}</h3>
                            <Badge variant="outline">{compliance.requirement}</Badge>
                            <Badge className={getStatusColor(compliance.status)}>
                              {compliance.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Audit: {compliance.lastAudit} • Next Audit: {compliance.nextAudit}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Findings: {compliance.findings} • Corrective Actions: {compliance.correctiveActions}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {compliance.notes}
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

        {/* Integrations Tab */}
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="h-5 w-5 mr-2" />
                Module Integrations ({modulesData.integrations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {modulesData.integrations.map((integration) => (
                    <div key={integration.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{integration.module}</h3>
                            <Badge variant="outline">{integration.integrationType}</Badge>
                            <Badge className={getStatusColor(integration.status)}>
                              {integration.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {integration.apiVersion}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Data Flow: {integration.dataFlow} • Last Sync: {new Date(integration.lastSync).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {integration.notes}
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

      {/* Add Module Dialog */}
      <Dialog open={isModuleOpen} onOpenChange={setIsModuleOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Module' : 'Add New Module'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Module Name</Label>
                <Input id="name" placeholder="Enter module name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blood Bank">Blood Bank</SelectItem>
                    <SelectItem value="Occupational Health">Occupational Health</SelectItem>
                    <SelectItem value="Research/Biobank">Research/Biobank</SelectItem>
                    <SelectItem value="Specialized Testing">Specialized Testing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter module description" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter module notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsModuleOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModuleOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Module' : 'Add Module'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Donor Dialog */}
      <Dialog open={isDonorOpen} onOpenChange={setIsDonorOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Donor' : 'Add New Donor'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="donor-name">Donor Name</Label>
                <Input id="donor-name" placeholder="Enter donor name" />
              </div>
              <div>
                <Label htmlFor="blood-type">Blood Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="volume">Volume</Label>
                <Input id="volume" placeholder="Enter volume" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter storage location" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter donor notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDonorOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDonorOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Donor' : 'Add Donor'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
