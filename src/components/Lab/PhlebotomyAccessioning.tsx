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
  Syringe,
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
  Syringe as SyringeIcon,
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

export default function PhlebotomyAccessioning() {
  const [activeTab, setActiveTab] = useState('collection');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isAccessionOpen, setIsAccessionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock phlebotomy and accessioning data
  const phlebotomyData = {
    collections: [
      {
        id: 'COL001',
        patientId: 'P12345',
        patientName: 'John Doe',
        mrn: 'MRN123456',
        orderId: 'ORD001',
        phlebotomist: 'Sarah Wilson',
        collectionDate: '2024-01-21T08:30:00Z',
        location: 'Central Lab',
        tubes: [
          { type: 'EDTA', color: 'Purple', volume: '2ml', tests: ['CBC'] },
          { type: 'SST', color: 'Gold', volume: '3ml', tests: ['BMP', 'Lipid Panel'] }
        ],
        status: 'Completed',
        quality: 'Good',
        notes: 'Patient cooperative, no complications',
        temperature: '22°C',
        humidity: '45%'
      },
      {
        id: 'COL002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        mrn: 'MRN123457',
        orderId: 'ORD002',
        phlebotomist: 'Mike Johnson',
        collectionDate: '2024-01-21T09:15:00Z',
        location: 'Emergency Lab',
        tubes: [
          { type: 'EDTA', color: 'Purple', volume: '2ml', tests: ['CBC'] },
          { type: 'SST', color: 'Gold', volume: '3ml', tests: ['Troponin I', 'CK-MB'] }
        ],
        status: 'In Progress',
        quality: 'Good',
        notes: 'STAT collection for chest pain',
        temperature: '21°C',
        humidity: '48%'
      }
    ],
    accessions: [
      {
        id: 'ACC001',
        specimenId: 'SP001',
        patientName: 'John Doe',
        orderId: 'ORD001',
        receivedDate: '2024-01-21T08:45:00Z',
        receivedBy: 'Lisa Brown',
        condition: 'Good',
        temperature: '22°C',
        volume: '5ml',
        tubes: 2,
        status: 'Accessioned',
        barcode: 'BC001234567890',
        location: 'Central Lab',
        notes: 'All specimens received in good condition'
      },
      {
        id: 'ACC002',
        specimenId: 'SP002',
        patientName: 'Jane Smith',
        orderId: 'ORD002',
        receivedDate: '2024-01-21T09:30:00Z',
        receivedBy: 'Tom Davis',
        condition: 'Hemolyzed',
        temperature: '21°C',
        volume: '4ml',
        tubes: 2,
        status: 'Exception',
        barcode: 'BC001234567891',
        location: 'Emergency Lab',
        notes: 'Slight hemolysis noted, proceed with caution'
      }
    ],
    chainOfCustody: [
      {
        id: 'COC001',
        specimenId: 'SP001',
        step: 'Collection',
        timestamp: '2024-01-21T08:30:00Z',
        location: 'Central Lab',
        person: 'Sarah Wilson',
        temperature: '22°C',
        status: 'Completed'
      },
      {
        id: 'COC002',
        specimenId: 'SP001',
        step: 'Transport',
        timestamp: '2024-01-21T08:35:00Z',
        location: 'Transport',
        person: 'Courier Service',
        temperature: '22°C',
        status: 'Completed'
      },
      {
        id: 'COC003',
        specimenId: 'SP001',
        step: 'Receipt',
        timestamp: '2024-01-21T08:45:00Z',
        location: 'Central Lab',
        person: 'Lisa Brown',
        temperature: '22°C',
        status: 'Completed'
      }
    ],
    exceptions: [
      {
        id: 'EXC001',
        specimenId: 'SP002',
        patientName: 'Jane Smith',
        exceptionType: 'Hemolysis',
        severity: 'Minor',
        description: 'Slight hemolysis noted in SST tube',
        action: 'Proceed with caution, note on report',
        resolved: false,
        timestamp: '2024-01-21T09:30:00Z'
      },
      {
        id: 'EXC002',
        specimenId: 'SP003',
        patientName: 'Bob Wilson',
        exceptionType: 'Insufficient Volume',
        severity: 'Major',
        description: 'Insufficient volume for all requested tests',
        action: 'Contact ordering physician for priority',
        resolved: false,
        timestamp: '2024-01-21T10:15:00Z'
      }
    ]
  };

  const handleAddCollection = () => {
    setSelectedItem(null);
    setIsCollectionOpen(true);
  };

  const handleAddAccession = () => {
    setSelectedItem(null);
    setIsAccessionOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Accessioned': return 'bg-green-100 text-green-800';
      case 'Exception': return 'bg-red-100 text-red-800';
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Minor': return 'bg-yellow-100 text-yellow-800';
      case 'Major': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCollections = phlebotomyData.collections.filter(collection => {
    const matchesSearch = collection.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.phlebotomist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || collection.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Phlebotomy & Accessioning</h1>
          <p className="text-gray-600 mt-1">Specimen collection, barcoding, and chain of custody management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddCollection}>
            <Plus className="h-4 w-4 mr-2" />
            New Collection
          </Button>
          <Button variant="outline" onClick={handleAddAccession}>
            <Plus className="h-4 w-4 mr-2" />
            Accession
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
                <p className="text-sm font-medium text-gray-600">Collections</p>
                <p className="text-3xl font-bold text-gray-900">{phlebotomyData.collections.length}</p>
              </div>
              <Syringe className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Syringe className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Specimen collections</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Accessions</p>
                <p className="text-3xl font-bold text-gray-900">{phlebotomyData.accessions.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Specimens accessioned</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Chain of Custody</p>
                <p className="text-3xl font-bold text-gray-900">{phlebotomyData.chainOfCustody.length}</p>
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Custody records</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Exceptions</p>
                <p className="text-3xl font-bold text-gray-900">{phlebotomyData.exceptions.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Exception cases</span>
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
                  placeholder="Search collections, patients, or phlebotomists..."
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
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Exception">Exception</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="collection" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="collection">Collections</TabsTrigger>
          <TabsTrigger value="accession">Accessions</TabsTrigger>
          <TabsTrigger value="custody">Chain of Custody</TabsTrigger>
          <TabsTrigger value="exceptions">Exceptions</TabsTrigger>
        </TabsList>

        {/* Collections Tab */}
        <TabsContent value="collection">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Syringe className="h-5 w-5 mr-2" />
                Specimen Collections ({filteredCollections.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredCollections.map((collection) => (
                    <div key={collection.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{collection.patientName}</h3>
                            <Badge variant="outline">{collection.mrn}</Badge>
                            <Badge className={getStatusColor(collection.status)}>
                              {collection.status}
                            </Badge>
                            <Badge className={getStatusColor(collection.quality)}>
                              {collection.quality}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Phlebotomist: {collection.phlebotomist} • Location: {collection.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(collection.collectionDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tubes: {collection.tubes.length} • Temperature: {collection.temperature} • Humidity: {collection.humidity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {collection.tubes.map(tube => tube.tests.join(', ')).join('; ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {collection.notes}
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

        {/* Accessions Tab */}
        <TabsContent value="accession">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Specimen Accessions ({phlebotomyData.accessions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {phlebotomyData.accessions.map((accession) => (
                    <div key={accession.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{accession.patientName}</h3>
                            <Badge variant="outline">{accession.specimenId}</Badge>
                            <Badge className={getStatusColor(accession.status)}>
                              {accession.status}
                            </Badge>
                            <Badge className={getStatusColor(accession.condition)}>
                              {accession.condition}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Received By: {accession.receivedBy} • Date: {new Date(accession.receivedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Volume: {accession.volume} • Tubes: {accession.tubes} • Temperature: {accession.temperature}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Barcode: {accession.barcode} • Location: {accession.location}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {accession.notes}
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

        {/* Chain of Custody Tab */}
        <TabsContent value="custody">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Chain of Custody ({phlebotomyData.chainOfCustody.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {phlebotomyData.chainOfCustody.map((custody) => (
                    <div key={custody.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{custody.step}</h3>
                            <Badge variant="outline">{custody.specimenId}</Badge>
                            <Badge className={getStatusColor(custody.status)}>
                              {custody.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Person: {custody.person} • Location: {custody.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Time: {new Date(custody.timestamp).toLocaleString()} • Temperature: {custody.temperature}
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

        {/* Exceptions Tab */}
        <TabsContent value="exceptions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Exception Cases ({phlebotomyData.exceptions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {phlebotomyData.exceptions.map((exception) => (
                    <div key={exception.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{exception.patientName}</h3>
                            <Badge variant="outline">{exception.specimenId}</Badge>
                            <Badge className={getStatusColor(exception.severity)}>
                              {exception.severity}
                            </Badge>
                            <Badge className={exception.resolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {exception.resolved ? 'Resolved' : 'Open'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {exception.exceptionType} • Time: {new Date(exception.timestamp).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Description: {exception.description}
                          </div>
                          <div className="text-sm text-gray-600">
                            Action: {exception.action}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Resolve
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

      {/* Add Collection Dialog */}
      <Dialog open={isCollectionOpen} onOpenChange={setIsCollectionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Collection' : 'Add New Collection'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="mrn">MRN</Label>
                <Input id="mrn" placeholder="Enter MRN" />
              </div>
              <div>
                <Label htmlFor="phlebotomist">Phlebotomist</Label>
                <Input id="phlebotomist" placeholder="Enter phlebotomist name" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Central Lab">Central Lab</SelectItem>
                    <SelectItem value="Emergency Lab">Emergency Lab</SelectItem>
                    <SelectItem value="Home">Home Collection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="collection-date">Collection Date</Label>
                <Input id="collection-date" type="datetime-local" />
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
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter collection notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsCollectionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCollectionOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Collection' : 'Add Collection'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Accession Dialog */}
      <Dialog open={isAccessionOpen} onOpenChange={setIsAccessionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Accession' : 'Add New Accession'}
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
                <Label htmlFor="received-by">Received By</Label>
                <Input id="received-by" placeholder="Enter received by" />
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Hemolyzed">Hemolyzed</SelectItem>
                    <SelectItem value="Clotted">Clotted</SelectItem>
                    <SelectItem value="Insufficient">Insufficient</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="volume">Volume</Label>
                <Input id="volume" placeholder="Enter volume" />
              </div>
              <div>
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" placeholder="Enter temperature" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter accession notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsAccessionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAccessionOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Accession' : 'Add Accession'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
