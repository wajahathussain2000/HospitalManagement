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

export default function TestCatalog() {
  const [activeTab, setActiveTab] = useState('tests');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isRangeOpen, setIsRangeOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock test catalog data
  const catalogData = {
    tests: [
      {
        id: 'TEST001',
        name: 'Complete Blood Count',
        code: 'CBC',
        category: 'Hematology',
        department: 'Hematology',
        specimenType: 'Whole Blood',
        container: 'EDTA Tube',
        volume: '2ml',
        stability: '24 hours at RT',
        tat: '4 hours',
        price: 25.00,
        loinc: '33747-0',
        cpt: '85025',
        icd10: 'Z00.00',
        units: 'Various',
        method: 'Automated',
        analyzer: 'Sysmex XN-1000',
        status: 'Active',
        description: 'Complete blood count with differential',
        instructions: 'Fasting not required',
        criticalValues: 'Hemoglobin <7 g/dL, WBC >30,000/μL',
        reflexTests: ['Peripheral Smear', 'Reticulocyte Count']
      },
      {
        id: 'TEST002',
        name: 'Basic Metabolic Panel',
        code: 'BMP',
        category: 'Chemistry',
        department: 'Chemistry',
        specimenType: 'Serum',
        container: 'SST Tube',
        volume: '3ml',
        stability: '48 hours at 2-8°C',
        tat: '2 hours',
        price: 35.00,
        loinc: '24323-8',
        cpt: '80048',
        icd10: 'Z00.00',
        units: 'Various',
        method: 'Automated',
        analyzer: 'Roche Cobas 6000',
        status: 'Active',
        description: 'Basic metabolic panel including glucose, electrolytes, and kidney function',
        instructions: 'Fasting required for 8-12 hours',
        criticalValues: 'Glucose <40 mg/dL, K+ >6.5 mEq/L',
        reflexTests: ['Comprehensive Metabolic Panel']
      },
      {
        id: 'TEST003',
        name: 'Thyroid Stimulating Hormone',
        code: 'TSH',
        category: 'Endocrinology',
        department: 'Chemistry',
        specimenType: 'Serum',
        container: 'SST Tube',
        volume: '2ml',
        stability: '7 days at 2-8°C',
        tat: '4 hours',
        price: 45.00,
        loinc: '3016-3',
        cpt: '84443',
        icd10: 'E03.9',
        units: 'mIU/L',
        method: 'Immunoassay',
        analyzer: 'Roche Cobas 6000',
        status: 'Active',
        description: 'Thyroid stimulating hormone measurement',
        instructions: 'No special preparation required',
        criticalValues: 'TSH >10 mIU/L or <0.1 mIU/L',
        reflexTests: ['Free T4', 'Free T3']
      }
    ],
    panels: [
      {
        id: 'PANEL001',
        name: 'Comprehensive Metabolic Panel',
        code: 'CMP',
        category: 'Chemistry',
        department: 'Chemistry',
        tests: ['Glucose', 'BUN', 'Creatinine', 'Sodium', 'Potassium', 'Chloride', 'CO2', 'Calcium', 'Total Protein', 'Albumin', 'Bilirubin', 'ALT', 'AST', 'Alkaline Phosphatase'],
        price: 55.00,
        tat: '2 hours',
        status: 'Active',
        description: 'Comprehensive metabolic panel for complete metabolic assessment',
        instructions: 'Fasting required for 8-12 hours'
      },
      {
        id: 'PANEL002',
        name: 'Lipid Panel',
        code: 'LIPID',
        category: 'Chemistry',
        department: 'Chemistry',
        tests: ['Total Cholesterol', 'HDL Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
        price: 40.00,
        tat: '2 hours',
        status: 'Active',
        description: 'Complete lipid profile for cardiovascular risk assessment',
        instructions: 'Fasting required for 12-14 hours'
      }
    ],
    referenceRanges: [
      {
        id: 'RANGE001',
        test: 'Hemoglobin',
        ageGroup: 'Adult Male',
        gender: 'Male',
        minAge: 18,
        maxAge: 99,
        minValue: 13.8,
        maxValue: 17.2,
        units: 'g/dL',
        method: 'Automated',
        status: 'Active'
      },
      {
        id: 'RANGE002',
        test: 'Hemoglobin',
        ageGroup: 'Adult Female',
        gender: 'Female',
        minAge: 18,
        maxAge: 99,
        minValue: 12.1,
        maxValue: 15.1,
        units: 'g/dL',
        method: 'Automated',
        status: 'Active'
      },
      {
        id: 'RANGE003',
        test: 'Glucose',
        ageGroup: 'Adult',
        gender: 'Both',
        minAge: 18,
        maxAge: 99,
        minValue: 70,
        maxValue: 100,
        units: 'mg/dL',
        method: 'Automated',
        status: 'Active'
      }
    ],
    coding: [
      {
        id: 'CODE001',
        test: 'Complete Blood Count',
        loinc: '33747-0',
        cpt: '85025',
        hcpcs: 'G0300',
        icd10: 'Z00.00',
        snomed: '26604007',
        status: 'Active'
      },
      {
        id: 'CODE002',
        test: 'Basic Metabolic Panel',
        loinc: '24323-8',
        cpt: '80048',
        hcpcs: 'G0300',
        icd10: 'Z00.00',
        snomed: '26604007',
        status: 'Active'
      }
    ],
    templates: [
      {
        id: 'TEMPLATE001',
        name: 'CBC Report Template',
        test: 'Complete Blood Count',
        type: 'Standard',
        content: 'Complete Blood Count Report with reference ranges and interpretation',
        status: 'Active'
      },
      {
        id: 'TEMPLATE002',
        name: 'Chemistry Panel Template',
        test: 'Basic Metabolic Panel',
        type: 'Standard',
        content: 'Chemistry panel report with critical values and flags',
        status: 'Active'
      }
    ]
  };

  const handleAddTest = () => {
    setSelectedItem(null);
    setIsTestOpen(true);
  };

  const handleAddPanel = () => {
    setSelectedItem(null);
    setIsPanelOpen(true);
  };

  const handleAddRange = () => {
    setSelectedItem(null);
    setIsRangeOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hematology': return 'bg-red-100 text-red-800';
      case 'Chemistry': return 'bg-blue-100 text-blue-800';
      case 'Microbiology': return 'bg-green-100 text-green-800';
      case 'Molecular': return 'bg-purple-100 text-purple-800';
      case 'Pathology': return 'bg-orange-100 text-orange-800';
      case 'Endocrinology': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTests = catalogData.tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || test.category === filterCategory;
    const matchesDepartment = filterDepartment === 'all' || test.department === filterDepartment;
    return matchesSearch && matchesCategory && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Test Catalog & Dictionary</h1>
          <p className="text-gray-600 mt-1">Comprehensive test library with metadata, reference ranges, and coding systems</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddTest}>
            <Plus className="h-4 w-4 mr-2" />
            Add Test
          </Button>
          <Button variant="outline" onClick={handleAddPanel}>
            <Plus className="h-4 w-4 mr-2" />
            Add Panel
          </Button>
          <Button variant="outline" onClick={handleAddRange}>
            <Plus className="h-4 w-4 mr-2" />
            Add Range
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
                <p className="text-sm font-medium text-gray-600">Total Tests</p>
                <p className="text-3xl font-bold text-gray-900">{catalogData.tests.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Available tests</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Test Panels</p>
                <p className="text-3xl font-bold text-gray-900">{catalogData.panels.length}</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Test panels</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reference Ranges</p>
                <p className="text-3xl font-bold text-gray-900">{catalogData.referenceRanges.length}</p>
              </div>
              <Scale className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Scale className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Reference ranges</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Coding Systems</p>
                <p className="text-3xl font-bold text-gray-900">{catalogData.coding.length}</p>
              </div>
              <Key className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Key className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Coded tests</span>
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
                  placeholder="Search tests, panels, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Hematology">Hematology</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Microbiology">Microbiology</SelectItem>
                <SelectItem value="Molecular">Molecular</SelectItem>
                <SelectItem value="Pathology">Pathology</SelectItem>
                <SelectItem value="Endocrinology">Endocrinology</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDepartment} onValueChange={setFilterDepartment}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Hematology">Hematology</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Microbiology">Microbiology</SelectItem>
                <SelectItem value="Molecular">Molecular</SelectItem>
                <SelectItem value="Pathology">Pathology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="tests" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="panels">Panels</TabsTrigger>
          <TabsTrigger value="ranges">Reference Ranges</TabsTrigger>
          <TabsTrigger value="coding">Coding</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        {/* Tests Tab */}
        <TabsContent value="tests">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Laboratory Tests ({filteredTests.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredTests.map((test) => (
                    <div key={test.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{test.name}</h3>
                            <Badge variant="outline">{test.code}</Badge>
                            <Badge className={getCategoryColor(test.category)}>
                              {test.category}
                            </Badge>
                            <Badge className={getStatusColor(test.status)}>
                              {test.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Department: {test.department} • Specimen: {test.specimenType} • Container: {test.container}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Volume: {test.volume} • Stability: {test.stability} • TAT: {test.tat}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Price: {test.price} • LOINC: {test.loinc} • CPT: {test.cpt}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Method: {test.method} • Analyzer: {test.analyzer}
                          </div>
                          <div className="text-sm text-gray-600">
                            {test.description}
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

        {/* Panels Tab */}
        <TabsContent value="panels">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Test Panels ({catalogData.panels.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {catalogData.panels.map((panel) => (
                    <div key={panel.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{panel.name}</h3>
                            <Badge variant="outline">{panel.code}</Badge>
                            <Badge className={getCategoryColor(panel.category)}>
                              {panel.category}
                            </Badge>
                            <Badge className={getStatusColor(panel.status)}>
                              {panel.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Department: {panel.department} • Price: {panel.price} • TAT: {panel.tat}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {panel.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instructions: {panel.instructions}
                          </div>
                          <div className="text-sm text-gray-600">
                            Tests: {panel.tests.join(', ')}
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

        {/* Reference Ranges Tab */}
        <TabsContent value="ranges">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2" />
                Reference Ranges ({catalogData.referenceRanges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {catalogData.referenceRanges.map((range) => (
                    <div key={range.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{range.test}</h3>
                            <Badge variant="outline">{range.ageGroup}</Badge>
                            <Badge className={getStatusColor(range.status)}>
                              {range.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Gender: {range.gender} • Age: {range.minAge}-{range.maxAge} years
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Range: {range.minValue}-{range.maxValue} {range.units}
                          </div>
                          <div className="text-sm text-gray-600">
                            Method: {range.method}
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

        {/* Coding Tab */}
        <TabsContent value="coding">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Coding Systems ({catalogData.coding.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {catalogData.coding.map((code) => (
                    <div key={code.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{code.test}</h3>
                            <Badge className={getStatusColor(code.status)}>
                              {code.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            LOINC: {code.loinc} • CPT: {code.cpt} • HCPCS: {code.hcpcs}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            ICD-10: {code.icd10} • SNOMED: {code.snomed}
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

        {/* Templates Tab */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Report Templates ({catalogData.templates.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {catalogData.templates.map((template) => (
                    <div key={template.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{template.name}</h3>
                            <Badge variant="outline">{template.type}</Badge>
                            <Badge className={getStatusColor(template.status)}>
                              {template.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Test: {template.test}
                          </div>
                          <div className="text-sm text-gray-600">
                            {template.content}
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

      {/* Add Test Dialog */}
      <Dialog open={isTestOpen} onOpenChange={setIsTestOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Test' : 'Add New Test'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="test-name">Test Name</Label>
                <Input id="test-name" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="test-code">Test Code</Label>
                <Input id="test-code" placeholder="Enter test code" />
              </div>
              <div>
                <Label htmlFor="test-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Microbiology">Microbiology</SelectItem>
                    <SelectItem value="Molecular">Molecular</SelectItem>
                    <SelectItem value="Pathology">Pathology</SelectItem>
                    <SelectItem value="Endocrinology">Endocrinology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="test-department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Microbiology">Microbiology</SelectItem>
                    <SelectItem value="Molecular">Molecular</SelectItem>
                    <SelectItem value="Pathology">Pathology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="test-specimen">Specimen Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specimen type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Serum">Serum</SelectItem>
                    <SelectItem value="Plasma">Plasma</SelectItem>
                    <SelectItem value="Whole Blood">Whole Blood</SelectItem>
                    <SelectItem value="Urine">Urine</SelectItem>
                    <SelectItem value="Swab">Swab</SelectItem>
                    <SelectItem value="FFPE">FFPE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="test-container">Container</Label>
                <Input id="test-container" placeholder="Enter container type" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsTestOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsTestOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Test' : 'Add Test'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Panel Dialog */}
      <Dialog open={isPanelOpen} onOpenChange={setIsPanelOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Panel' : 'Add New Panel'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="panel-name">Panel Name</Label>
                <Input id="panel-name" placeholder="Enter panel name" />
              </div>
              <div>
                <Label htmlFor="panel-code">Panel Code</Label>
                <Input id="panel-code" placeholder="Enter panel code" />
              </div>
              <div>
                <Label htmlFor="panel-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Microbiology">Microbiology</SelectItem>
                    <SelectItem value="Molecular">Molecular</SelectItem>
                    <SelectItem value="Pathology">Pathology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="panel-department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Microbiology">Microbiology</SelectItem>
                    <SelectItem value="Molecular">Molecular</SelectItem>
                    <SelectItem value="Pathology">Pathology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPanelOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPanelOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Panel' : 'Add Panel'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Range Dialog */}
      <Dialog open={isRangeOpen} onOpenChange={setIsRangeOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Range' : 'Add New Range'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="range-test">Test</Label>
                <Input id="range-test" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="range-age-group">Age Group</Label>
                <Input id="range-age-group" placeholder="Enter age group" />
              </div>
              <div>
                <Label htmlFor="range-gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="range-units">Units</Label>
                <Input id="range-units" placeholder="Enter units" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsRangeOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsRangeOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Range' : 'Add Range'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
