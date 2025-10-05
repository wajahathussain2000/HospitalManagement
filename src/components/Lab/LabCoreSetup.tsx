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

export default function LabCoreSetup() {
  const [activeTab, setActiveTab] = useState('sites');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isSiteOpen, setIsSiteOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock lab core setup data
  const labData = {
    sites: [
      {
        id: 'SITE001',
        name: 'Central Laboratory',
        code: 'CL',
        type: 'Main Lab',
        address: '123 Medical Center Dr, Healthcare City',
        city: 'Medical City',
        state: 'Health State',
        zipCode: '12345',
        country: 'USA',
        phone: '+1-555-0123',
        email: 'central@lab.com',
        manager: 'Dr. Sarah Johnson',
        capacity: 500,
        status: 'Active',
        departments: ['Chemistry', 'Hematology', 'Microbiology', 'Molecular', 'Pathology'],
        devices: 15,
        storageLocations: 25
      },
      {
        id: 'SITE002',
        name: 'Emergency Lab',
        code: 'EL',
        type: 'Emergency',
        address: '456 Emergency Ave, Healthcare City',
        city: 'Medical City',
        state: 'Health State',
        zipCode: '12345',
        country: 'USA',
        phone: '+1-555-0124',
        email: 'emergency@lab.com',
        manager: 'Dr. Michael Chen',
        capacity: 100,
        status: 'Active',
        departments: ['Chemistry', 'Hematology'],
        devices: 8,
        storageLocations: 12
      }
    ],
    departments: [
      {
        id: 'DEPT001',
        name: 'Chemistry',
        code: 'CHEM',
        type: 'Clinical Chemistry',
        head: 'Dr. Sarah Johnson',
        location: 'Central Lab - Floor 2',
        capacity: 100,
        status: 'Active',
        tests: 150,
        analyzers: 5,
        staff: 12,
        workingHours: '24/7',
        specialties: ['Biochemistry', 'Immunoassay', 'Toxicology']
      },
      {
        id: 'DEPT002',
        name: 'Hematology',
        code: 'HEMA',
        type: 'Clinical Hematology',
        head: 'Dr. Emily Rodriguez',
        location: 'Central Lab - Floor 2',
        capacity: 80,
        status: 'Active',
        tests: 75,
        analyzers: 3,
        staff: 8,
        workingHours: '24/7',
        specialties: ['CBC', 'Coagulation', 'Blood Banking']
      },
      {
        id: 'DEPT003',
        name: 'Microbiology',
        code: 'MICRO',
        type: 'Clinical Microbiology',
        head: 'Dr. David Wilson',
        location: 'Central Lab - Floor 3',
        capacity: 60,
        status: 'Active',
        tests: 200,
        analyzers: 4,
        staff: 10,
        workingHours: '24/7',
        specialties: ['Bacteriology', 'Mycology', 'Parasitology']
      },
      {
        id: 'DEPT004',
        name: 'Molecular',
        code: 'MOL',
        type: 'Molecular Diagnostics',
        head: 'Dr. Lisa Anderson',
        location: 'Central Lab - Floor 4',
        capacity: 40,
        status: 'Active',
        tests: 50,
        analyzers: 2,
        staff: 6,
        workingHours: 'Business Hours',
        specialties: ['PCR', 'Sequencing', 'Genetics']
      },
      {
        id: 'DEPT005',
        name: 'Pathology',
        code: 'PATH',
        type: 'Anatomic Pathology',
        head: 'Dr. Robert Brown',
        location: 'Central Lab - Floor 5',
        capacity: 30,
        status: 'Active',
        tests: 100,
        analyzers: 1,
        staff: 8,
        workingHours: 'Business Hours',
        specialties: ['Histopathology', 'Cytology', 'Immunohistochemistry']
      }
    ],
    roles: [
      {
        id: 'ROLE001',
        name: 'Lab Admin',
        code: 'LAB_ADMIN',
        level: 'Administrative',
        permissions: [
          'Full System Access',
          'User Management',
          'Department Management',
          'Device Configuration',
          'Report Generation',
          'Audit Access'
        ],
        departments: ['All'],
        status: 'Active',
        users: 3,
        description: 'Complete administrative access to lab operations'
      },
      {
        id: 'ROLE002',
        name: 'Pathologist',
        code: 'PATHOLOGIST',
        level: 'Clinical',
        permissions: [
          'Result Validation',
          'Report Sign-off',
          'Quality Review',
          'Case Management',
          'Consultation'
        ],
        departments: ['Pathology', 'Cytology'],
        status: 'Active',
        users: 5,
        description: 'Clinical oversight and result validation'
      },
      {
        id: 'ROLE003',
        name: 'Microbiologist',
        code: 'MICROBIOLOGIST',
        level: 'Clinical',
        permissions: [
          'Culture Reading',
          'Antibiotic Sensitivity',
          'Organism Identification',
          'Quality Control',
          'Infection Control'
        ],
        departments: ['Microbiology'],
        status: 'Active',
        users: 8,
        description: 'Microbiology testing and analysis'
      },
      {
        id: 'ROLE004',
        name: 'Phlebotomist',
        code: 'PHLEBOTOMIST',
        level: 'Technical',
        permissions: [
          'Specimen Collection',
          'Patient Interaction',
          'Label Printing',
          'Chain of Custody',
          'Quality Checks'
        ],
        departments: ['All'],
        status: 'Active',
        users: 15,
        description: 'Specimen collection and patient care'
      },
      {
        id: 'ROLE005',
        name: 'Accessioner',
        code: 'ACCESSIONER',
        level: 'Technical',
        permissions: [
          'Specimen Receipt',
          'Data Entry',
          'Quality Checks',
          'Storage Assignment',
          'Exception Handling'
        ],
        departments: ['All'],
        status: 'Active',
        users: 12,
        description: 'Specimen processing and data entry'
      }
    ],
    orderSources: [
      {
        id: 'SOURCE001',
        name: 'OPD Orders',
        code: 'OPD',
        type: 'Outpatient',
        priority: 'Routine',
        status: 'Active',
        volume: 150,
        description: 'Outpatient department orders'
      },
      {
        id: 'SOURCE002',
        name: 'IPD Orders',
        code: 'IPD',
        type: 'Inpatient',
        priority: 'High',
        status: 'Active',
        volume: 200,
        description: 'Inpatient department orders'
      },
      {
        id: 'SOURCE003',
        name: 'ER Orders',
        code: 'ER',
        type: 'Emergency',
        priority: 'STAT',
        status: 'Active',
        volume: 75,
        description: 'Emergency room orders'
      },
      {
        id: 'SOURCE004',
        name: 'External Referrals',
        code: 'EXT',
        type: 'External',
        priority: 'Routine',
        status: 'Active',
        volume: 50,
        description: 'External physician referrals'
      },
      {
        id: 'SOURCE005',
        name: 'Home Collection',
        code: 'HOME',
        type: 'Home',
        priority: 'Routine',
        status: 'Active',
        volume: 25,
        description: 'Home collection services'
      }
    ],
    worklists: [
      {
        id: 'WL001',
        name: 'STAT Queue',
        priority: 'STAT',
        department: 'Chemistry',
        status: 'Active',
        tests: 25,
        avgTAT: '30 minutes',
        description: 'Urgent chemistry tests'
      },
      {
        id: 'WL002',
        name: 'Routine Chemistry',
        priority: 'Routine',
        department: 'Chemistry',
        status: 'Active',
        tests: 150,
        avgTAT: '4 hours',
        description: 'Routine chemistry panel'
      },
      {
        id: 'WL003',
        name: 'Microbiology Culture',
        priority: 'Routine',
        department: 'Microbiology',
        status: 'Active',
        tests: 75,
        avgTAT: '48 hours',
        description: 'Bacterial culture workup'
      },
      {
        id: 'WL004',
        name: 'Exception Queue',
        priority: 'Exception',
        department: 'All',
        status: 'Active',
        tests: 10,
        avgTAT: '2 hours',
        description: 'Specimens requiring special handling'
      }
    ]
  };

  const handleAddSite = () => {
    setSelectedItem(null);
    setIsSiteOpen(true);
  };

  const handleAddDepartment = () => {
    setSelectedItem(null);
    setIsDepartmentOpen(true);
  };

  const handleAddRole = () => {
    setSelectedItem(null);
    setIsRoleOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'STAT': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Routine': return 'bg-blue-100 text-blue-800';
      case 'Exception': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSites = labData.sites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.manager.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || site.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lab Core Setup & Roles</h1>
          <p className="text-gray-600 mt-1">Master data, roles, permissions, order sources, and worklists management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddSite}>
            <Plus className="h-4 w-4 mr-2" />
            Add Site
          </Button>
          <Button variant="outline" onClick={handleAddDepartment}>
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </Button>
          <Button variant="outline" onClick={handleAddRole}>
            <Plus className="h-4 w-4 mr-2" />
            Add Role
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
                <p className="text-sm font-medium text-gray-600">Total Sites</p>
                <p className="text-3xl font-bold text-gray-900">{labData.sites.length}</p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Lab locations</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-3xl font-bold text-gray-900">{labData.departments.length}</p>
              </div>
              <Microscope className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Microscope className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Lab departments</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">User Roles</p>
                <p className="text-3xl font-bold text-gray-900">{labData.roles.length}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Role definitions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Order Sources</p>
                <p className="text-3xl font-bold text-gray-900">{labData.orderSources.length}</p>
              </div>
              <Target className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Order channels</span>
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
                  placeholder="Search sites, departments, roles, or users..."
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
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sites" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="sites">Sites & Branches</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="sources">Order Sources</TabsTrigger>
          <TabsTrigger value="worklists">Worklists & Queues</TabsTrigger>
        </TabsList>

        {/* Sites & Branches Tab */}
        <TabsContent value="sites">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Lab Sites & Branches ({filteredSites.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredSites.map((site) => (
                    <div key={site.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{site.name}</h3>
                            <Badge variant="outline">{site.code}</Badge>
                            <Badge className={getStatusColor(site.status)}>
                              {site.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {site.type} • Manager: {site.manager} • Capacity: {site.capacity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Address: {site.address}, {site.city}, {site.state} {site.zipCode}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Phone: {site.phone} • Email: {site.email}
                          </div>
                          <div className="text-sm text-gray-600">
                            Departments: {site.departments.join(', ')} • Devices: {site.devices} • Storage: {site.storageLocations}
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

        {/* Departments Tab */}
        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Microscope className="h-5 w-5 mr-2" />
                Lab Departments ({labData.departments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labData.departments.map((dept) => (
                    <div key={dept.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{dept.name}</h3>
                            <Badge variant="outline">{dept.code}</Badge>
                            <Badge className={getStatusColor(dept.status)}>
                              {dept.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {dept.type} • Head: {dept.head} • Location: {dept.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Capacity: {dept.capacity} • Tests: {dept.tests} • Analyzers: {dept.analyzers} • Staff: {dept.staff}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Hours: {dept.workingHours}
                          </div>
                          <div className="text-sm text-gray-600">
                            Specialties: {dept.specialties.join(', ')}
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

        {/* Roles & Permissions Tab */}
        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                User Roles & Permissions ({labData.roles.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labData.roles.map((role) => (
                    <div key={role.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{role.name}</h3>
                            <Badge variant="outline">{role.code}</Badge>
                            <Badge className={getStatusColor(role.status)}>
                              {role.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Level: {role.level} • Users: {role.users} • Departments: {role.departments.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {role.description}
                          </div>
                          <div className="text-sm text-gray-600">
                            Permissions: {role.permissions.join(', ')}
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

        {/* Order Sources Tab */}
        <TabsContent value="sources">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Order Sources ({labData.orderSources.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labData.orderSources.map((source) => (
                    <div key={source.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{source.name}</h3>
                            <Badge variant="outline">{source.code}</Badge>
                            <Badge className={getPriorityColor(source.priority)}>
                              {source.priority}
                            </Badge>
                            <Badge className={getStatusColor(source.status)}>
                              {source.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {source.type} • Volume: {source.volume} orders/day
                          </div>
                          <div className="text-sm text-gray-600">
                            {source.description}
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

        {/* Worklists & Queues Tab */}
        <TabsContent value="worklists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Worklists & Queues ({labData.worklists.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labData.worklists.map((worklist) => (
                    <div key={worklist.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{worklist.name}</h3>
                            <Badge className={getPriorityColor(worklist.priority)}>
                              {worklist.priority}
                            </Badge>
                            <Badge className={getStatusColor(worklist.status)}>
                              {worklist.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Department: {worklist.department} • Tests: {worklist.tests} • Avg TAT: {worklist.avgTAT}
                          </div>
                          <div className="text-sm text-gray-600">
                            {worklist.description}
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

      {/* Add Site Dialog */}
      <Dialog open={isSiteOpen} onOpenChange={setIsSiteOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Site' : 'Add New Site'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" placeholder="Enter site name" />
              </div>
              <div>
                <Label htmlFor="site-code">Site Code</Label>
                <Input id="site-code" placeholder="Enter site code" />
              </div>
              <div>
                <Label htmlFor="site-type">Site Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select site type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Lab</SelectItem>
                    <SelectItem value="branch">Branch Lab</SelectItem>
                    <SelectItem value="emergency">Emergency Lab</SelectItem>
                    <SelectItem value="satellite">Satellite Lab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="site-manager">Manager</Label>
                <Input id="site-manager" placeholder="Enter manager name" />
              </div>
              <div>
                <Label htmlFor="site-phone">Phone</Label>
                <Input id="site-phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="site-email">Email</Label>
                <Input id="site-email" placeholder="Enter email address" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="site-address">Address</Label>
              <Textarea id="site-address" placeholder="Enter full address" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsSiteOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsSiteOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Site' : 'Add Site'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Department Dialog */}
      <Dialog open={isDepartmentOpen} onOpenChange={setIsDepartmentOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Department' : 'Add New Department'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dept-name">Department Name</Label>
                <Input id="dept-name" placeholder="Enter department name" />
              </div>
              <div>
                <Label htmlFor="dept-code">Department Code</Label>
                <Input id="dept-code" placeholder="Enter department code" />
              </div>
              <div>
                <Label htmlFor="dept-type">Department Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chemistry">Clinical Chemistry</SelectItem>
                    <SelectItem value="hematology">Clinical Hematology</SelectItem>
                    <SelectItem value="microbiology">Clinical Microbiology</SelectItem>
                    <SelectItem value="molecular">Molecular Diagnostics</SelectItem>
                    <SelectItem value="pathology">Anatomic Pathology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dept-head">Department Head</Label>
                <Input id="dept-head" placeholder="Enter department head" />
              </div>
              <div>
                <Label htmlFor="dept-location">Location</Label>
                <Input id="dept-location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="dept-capacity">Capacity</Label>
                <Input id="dept-capacity" placeholder="Enter capacity" type="number" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDepartmentOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDepartmentOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Department' : 'Add Department'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Role Dialog */}
      <Dialog open={isRoleOpen} onOpenChange={setIsRoleOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Role' : 'Add New Role'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="role-name">Role Name</Label>
                <Input id="role-name" placeholder="Enter role name" />
              </div>
              <div>
                <Label htmlFor="role-code">Role Code</Label>
                <Input id="role-code" placeholder="Enter role code" />
              </div>
              <div>
                <Label htmlFor="role-level">Role Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administrative">Administrative</SelectItem>
                    <SelectItem value="clinical">Clinical</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="role-departments">Departments</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="hematology">Hematology</SelectItem>
                    <SelectItem value="microbiology">Microbiology</SelectItem>
                    <SelectItem value="molecular">Molecular</SelectItem>
                    <SelectItem value="pathology">Pathology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="role-description">Description</Label>
              <Textarea id="role-description" placeholder="Enter role description" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsRoleOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsRoleOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Role' : 'Add Role'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
