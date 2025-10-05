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
  Package,
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

export default function SpecimenProcessing() {
  const [activeTab, setActiveTab] = useState('processing');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isProcessingOpen, setIsProcessingOpen] = useState(false);
  const [isStorageOpen, setIsStorageOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock specimen processing data
  const processingData = {
    specimens: [
      {
        id: 'SP001',
        patientId: 'P12345',
        patientName: 'John Doe',
        specimenType: 'Serum',
        collectionDate: '2024-01-21T08:30:00Z',
        receivedDate: '2024-01-21T08:45:00Z',
        processingDate: '2024-01-21T09:00:00Z',
        status: 'Processed',
        tests: ['CBC', 'BMP', 'Lipid Panel'],
        volume: '5ml',
        aliquots: 3,
        storageLocation: 'Fridge A-1-2',
        temperature: '4°C',
        stability: '48 hours',
        processedBy: 'Lisa Brown',
        notes: 'All aliquots created successfully',
        quality: 'Good'
      },
      {
        id: 'SP002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        specimenType: 'Whole Blood',
        collectionDate: '2024-01-21T09:15:00Z',
        receivedDate: '2024-01-21T09:30:00Z',
        processingDate: '2024-01-21T09:45:00Z',
        status: 'In Progress',
        tests: ['Troponin I', 'CK-MB'],
        volume: '4ml',
        aliquots: 2,
        storageLocation: 'Fridge B-2-1',
        temperature: '4°C',
        stability: '24 hours',
        processedBy: 'Tom Davis',
        notes: 'Processing in progress',
        quality: 'Good'
      }
    ],
    storage: [
      {
        id: 'ST001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        storageType: 'Fridge',
        location: 'Fridge A-1-2',
        temperature: '4°C',
        humidity: '45%',
        capacity: '100%',
        status: 'Active',
        storedDate: '2024-01-21T09:15:00Z',
        expiryDate: '2024-01-23T09:15:00Z',
        retrievedCount: 0,
        maxRetrievals: 3,
        notes: 'Stored in primary location'
      },
      {
        id: 'ST002',
        specimenId: 'SP002',
        patientName: 'Jane Smith',
        storageType: 'Freezer',
        location: 'Freezer C-3-1',
        temperature: '-20°C',
        humidity: '30%',
        capacity: '75%',
        status: 'Active',
        storedDate: '2024-01-21T10:00:00Z',
        expiryDate: '2024-01-28T10:00:00Z',
        retrievedCount: 1,
        maxRetrievals: 5,
        notes: 'Long-term storage for research'
      }
    ],
    aliquots: [
      {
        id: 'ALQ001',
        parentSpecimen: 'SP001',
        aliquotId: 'ALQ001-A',
        volume: '2ml',
        tests: ['CBC'],
        status: 'Available',
        location: 'Fridge A-1-2',
        createdDate: '2024-01-21T09:15:00Z',
        expiryDate: '2024-01-23T09:15:00Z',
        used: false
      },
      {
        id: 'ALQ002',
        parentSpecimen: 'SP001',
        aliquotId: 'ALQ001-B',
        volume: '1.5ml',
        tests: ['BMP'],
        status: 'Available',
        location: 'Fridge A-1-2',
        createdDate: '2024-01-21T09:15:00Z',
        expiryDate: '2024-01-23T09:15:00Z',
        used: false
      },
      {
        id: 'ALQ003',
        parentSpecimen: 'SP001',
        aliquotId: 'ALQ001-C',
        volume: '1.5ml',
        tests: ['Lipid Panel'],
        status: 'Used',
        location: 'Fridge A-1-2',
        createdDate: '2024-01-21T09:15:00Z',
        expiryDate: '2024-01-23T09:15:00Z',
        used: true
      }
    ],
    biobank: [
      {
        id: 'BB001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        biobankId: 'BB-2024-001',
        consentStatus: 'Consented',
        researchUse: 'Yes',
        storageType: 'Long-term',
        location: 'Biobank Freezer A',
        temperature: '-80°C',
        storedDate: '2024-01-21T10:30:00Z',
        expiryDate: '2029-01-21T10:30:00Z',
        status: 'Active',
        notes: 'Consented for research use'
      }
    ],
    retrievals: [
      {
        id: 'RET001',
        specimenId: 'SP002',
        patientName: 'Jane Smith',
        retrievedBy: 'Dr. Sarah Johnson',
        retrievedDate: '2024-01-21T11:00:00Z',
        purpose: 'Additional Testing',
        location: 'Freezer C-3-1',
        status: 'Retrieved',
        notes: 'Retrieved for additional cardiac markers'
      }
    ],
    stability: [
      {
        id: 'STAB001',
        specimenType: 'Serum',
        temperature: '4°C',
        stability: '48 hours',
        tests: ['CBC', 'BMP', 'Lipid Panel'],
        notes: 'Standard serum stability'
      },
      {
        id: 'STAB002',
        specimenType: 'Whole Blood',
        temperature: '4°C',
        stability: '24 hours',
        tests: ['Troponin I', 'CK-MB'],
        notes: 'Whole blood stability for cardiac markers'
      },
      {
        id: 'STAB003',
        specimenType: 'Plasma',
        temperature: '-20°C',
        stability: '30 days',
        tests: ['Research Assays'],
        notes: 'Frozen plasma for research'
      }
    ]
  };

  const handleAddProcessing = () => {
    setSelectedItem(null);
    setIsProcessingOpen(true);
  };

  const handleAddStorage = () => {
    setSelectedItem(null);
    setIsStorageOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Used': return 'bg-gray-100 text-gray-800';
      case 'Retrieved': return 'bg-blue-100 text-blue-800';
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSpecimens = processingData.specimens.filter(specimen => {
    const matchesSearch = specimen.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specimen.specimenType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specimen.processedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || specimen.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Specimen Processing & Storage</h1>
          <p className="text-gray-600 mt-1">Pre-analytical processing, storage management, and biobank operations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddProcessing}>
            <Plus className="h-4 w-4 mr-2" />
            Process Specimen
          </Button>
          <Button variant="outline" onClick={handleAddStorage}>
            <Plus className="h-4 w-4 mr-2" />
            Store Specimen
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
                <p className="text-3xl font-bold text-gray-900">{processingData.specimens.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Package className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Processed specimens</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Storage Locations</p>
                <p className="text-3xl font-bold text-gray-900">{processingData.storage.length}</p>
              </div>
              <Building className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Active storage</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aliquots</p>
                <p className="text-3xl font-bold text-gray-900">{processingData.aliquots.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Created aliquots</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Biobank</p>
                <p className="text-3xl font-bold text-gray-900">{processingData.biobank.length}</p>
              </div>
              <Database className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Database className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Biobank specimens</span>
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
                  placeholder="Search specimens, patients, or locations..."
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
                <SelectItem value="Processed">Processed</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="processing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="aliquots">Aliquots</TabsTrigger>
          <TabsTrigger value="biobank">Biobank</TabsTrigger>
          <TabsTrigger value="retrievals">Retrievals</TabsTrigger>
          <TabsTrigger value="stability">Stability</TabsTrigger>
        </TabsList>

        {/* Processing Tab */}
        <TabsContent value="processing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Specimen Processing ({filteredSpecimens.length})
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
                            <Badge className={getStatusColor(specimen.quality)}>
                              {specimen.quality}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Processed By: {specimen.processedBy} • Volume: {specimen.volume} • Aliquots: {specimen.aliquots}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {specimen.tests.join(', ')} • Location: {specimen.storageLocation}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Temperature: {specimen.temperature} • Stability: {specimen.stability}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Processing Date: {new Date(specimen.processingDate).toLocaleString()}
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

        {/* Storage Tab */}
        <TabsContent value="storage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Storage Management ({processingData.storage.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {processingData.storage.map((storage) => (
                    <div key={storage.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{storage.patientName}</h3>
                            <Badge variant="outline">{storage.specimenId}</Badge>
                            <Badge className={getStatusColor(storage.status)}>
                              {storage.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {storage.storageType} • Location: {storage.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Temperature: {storage.temperature} • Humidity: {storage.humidity} • Capacity: {storage.capacity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Stored: {new Date(storage.storedDate).toLocaleString()} • Expiry: {new Date(storage.expiryDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Retrievals: {storage.retrievedCount}/{storage.maxRetrievals}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {storage.notes}
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

        {/* Aliquots Tab */}
        <TabsContent value="aliquots">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Aliquot Management ({processingData.aliquots.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {processingData.aliquots.map((aliquot) => (
                    <div key={aliquot.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{aliquot.aliquotId}</h3>
                            <Badge variant="outline">{aliquot.parentSpecimen}</Badge>
                            <Badge className={getStatusColor(aliquot.status)}>
                              {aliquot.status}
                            </Badge>
                            <Badge className={aliquot.used ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'}>
                              {aliquot.used ? 'Used' : 'Available'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Volume: {aliquot.volume} • Tests: {aliquot.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {aliquot.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Created: {new Date(aliquot.createdDate).toLocaleString()} • Expiry: {new Date(aliquot.expiryDate).toLocaleString()}
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

        {/* Biobank Tab */}
        <TabsContent value="biobank">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Biobank Management ({processingData.biobank.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {processingData.biobank.map((biobank) => (
                    <div key={biobank.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{biobank.patientName}</h3>
                            <Badge variant="outline">{biobank.biobankId}</Badge>
                            <Badge className={getStatusColor(biobank.status)}>
                              {biobank.status}
                            </Badge>
                            <Badge className={getStatusColor(biobank.consentStatus)}>
                              {biobank.consentStatus}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Research Use: {biobank.researchUse} • Storage Type: {biobank.storageType}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {biobank.location} • Temperature: {biobank.temperature}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Stored: {new Date(biobank.storedDate).toLocaleString()} • Expiry: {new Date(biobank.expiryDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {biobank.notes}
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

        {/* Retrievals Tab */}
        <TabsContent value="retrievals">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Specimen Retrievals ({processingData.retrievals.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {processingData.retrievals.map((retrieval) => (
                    <div key={retrieval.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{retrieval.patientName}</h3>
                            <Badge variant="outline">{retrieval.specimenId}</Badge>
                            <Badge className={getStatusColor(retrieval.status)}>
                              {retrieval.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Retrieved By: {retrieval.retrievedBy} • Purpose: {retrieval.purpose}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(retrieval.retrievedDate).toLocaleString()} • Location: {retrieval.location}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {retrieval.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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

        {/* Stability Tab */}
        <TabsContent value="stability">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Stability Guidelines ({processingData.stability.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {processingData.stability.map((stability) => (
                    <div key={stability.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{stability.specimenType}</h3>
                            <Badge variant="outline">{stability.temperature}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {stability.stability}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {stability.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {stability.notes}
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

      {/* Add Processing Dialog */}
      <Dialog open={isProcessingOpen} onOpenChange={setIsProcessingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Processing' : 'Process Specimen'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="specimen-id">Specimen ID</Label>
                <Input id="specimen-id" placeholder="Enter specimen ID" />
              </div>
              <div>
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="specimen-type">Specimen Type</Label>
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
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="volume">Volume</Label>
                <Input id="volume" placeholder="Enter volume" />
              </div>
              <div>
                <Label htmlFor="processed-by">Processed By</Label>
                <Input id="processed-by" placeholder="Enter processor name" />
              </div>
              <div>
                <Label htmlFor="quality">Quality</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="tests">Tests</Label>
              <Textarea id="tests" placeholder="Enter tests to be performed" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter processing notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsProcessingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsProcessingOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Processing' : 'Process Specimen'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Storage Dialog */}
      <Dialog open={isStorageOpen} onOpenChange={setIsStorageOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Storage' : 'Store Specimen'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="specimen-id">Specimen ID</Label>
                <Input id="specimen-id" placeholder="Enter specimen ID" />
              </div>
              <div>
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="storage-type">Storage Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select storage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fridge">Fridge</SelectItem>
                    <SelectItem value="Freezer">Freezer</SelectItem>
                    <SelectItem value="Room Temperature">Room Temperature</SelectItem>
                    <SelectItem value="Biobank">Biobank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter storage location" />
              </div>
              <div>
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" placeholder="Enter temperature" />
              </div>
              <div>
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Input id="expiry-date" type="datetime-local" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter storage notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsStorageOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsStorageOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Storage' : 'Store Specimen'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
