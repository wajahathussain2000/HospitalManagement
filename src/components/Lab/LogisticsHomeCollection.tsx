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
  Truck,
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

export default function LogisticsHomeCollection() {
  const [activeTab, setActiveTab] = useState('couriers');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCourierOpen, setIsCourierOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock logistics data
  const logisticsData = {
    couriers: [
      {
        id: 'COU001',
        name: 'John Smith',
        vehicle: 'Van-001',
        phone: '+1234567890',
        status: 'Active',
        currentLocation: 'Downtown',
        lastUpdate: '2024-01-21T10:30:00Z',
        deliveries: 15,
        completed: 12,
        pending: 3,
        rating: 4.8,
        notes: 'Reliable courier with good performance'
      },
      {
        id: 'COU002',
        name: 'Sarah Johnson',
        vehicle: 'Van-002',
        phone: '+1234567891',
        status: 'On Route',
        currentLocation: 'Uptown',
        lastUpdate: '2024-01-21T10:25:00Z',
        deliveries: 18,
        completed: 15,
        pending: 3,
        rating: 4.9,
        notes: 'Excellent courier, always on time'
      }
    ],
    homeCollections: [
      {
        id: 'HC001',
        patientName: 'Alice Brown',
        address: '123 Main St, Downtown',
        phone: '+1234567892',
        scheduledDate: '2024-01-21T14:00:00Z',
        status: 'Scheduled',
        courier: 'John Smith',
        tests: ['CBC', 'BMP'],
        specialInstructions: 'Patient is elderly, please ring doorbell twice',
        estimatedDuration: '30 minutes',
        priority: 'Normal',
        notes: 'Regular home collection'
      },
      {
        id: 'HC002',
        patientName: 'Bob Wilson',
        address: '456 Oak Ave, Uptown',
        phone: '+1234567893',
        scheduledDate: '2024-01-21T15:30:00Z',
        status: 'In Progress',
        courier: 'Sarah Johnson',
        tests: ['Lipid Panel', 'HbA1c'],
        specialInstructions: 'Patient has mobility issues',
        estimatedDuration: '45 minutes',
        priority: 'High',
        notes: 'Urgent collection needed'
      }
    ],
    routes: [
      {
        id: 'RT001',
        name: 'Downtown Route',
        courier: 'John Smith',
        date: '2024-01-21',
        status: 'Active',
        totalStops: 8,
        completedStops: 5,
        remainingStops: 3,
        estimatedCompletion: '2024-01-21T16:00:00Z',
        totalDistance: '45.2 km',
        estimatedTime: '3.5 hours',
        efficiency: '92%'
      },
      {
        id: 'RT002',
        name: 'Uptown Route',
        courier: 'Sarah Johnson',
        date: '2024-01-21',
        status: 'Active',
        totalStops: 6,
        completedStops: 3,
        remainingStops: 3,
        estimatedCompletion: '2024-01-21T17:30:00Z',
        totalDistance: '38.7 km',
        estimatedTime: '3.0 hours',
        efficiency: '95%'
      }
    ],
    sla: [
      {
        id: 'SLA001',
        service: 'Home Collection',
        targetTime: '4 hours',
        actualTime: '3.2 hours',
        status: 'Met',
        performance: '120%',
        date: '2024-01-21',
        notes: 'Excellent performance'
      },
      {
        id: 'SLA002',
        service: 'Specimen Transport',
        targetTime: '2 hours',
        actualTime: '2.5 hours',
        status: 'Missed',
        performance: '80%',
        date: '2024-01-21',
        notes: 'Traffic delays caused delay'
      }
    ],
    phlebotomists: [
      {
        id: 'PHL001',
        name: 'Lisa Davis',
        phone: '+1234567894',
        status: 'Available',
        currentLocation: 'Central Lab',
        lastUpdate: '2024-01-21T10:00:00Z',
        collections: 12,
        completed: 10,
        pending: 2,
        rating: 4.7,
        certifications: ['Phlebotomy', 'CPT'],
        notes: 'Experienced phlebotomist'
      },
      {
        id: 'PHL002',
        name: 'Mike Chen',
        phone: '+1234567895',
        status: 'On Collection',
        currentLocation: 'Patient Home',
        lastUpdate: '2024-01-21T10:15:00Z',
        collections: 8,
        completed: 6,
        pending: 2,
        rating: 4.9,
        certifications: ['Phlebotomy', 'CPT', 'Advanced'],
        notes: 'Top performer'
      }
    ],
    tracking: [
      {
        id: 'TRK001',
        courier: 'John Smith',
        location: 'Downtown',
        timestamp: '2024-01-21T10:30:00Z',
        status: 'In Transit',
        speed: '45 km/h',
        eta: '2024-01-21T11:00:00Z',
        distance: '2.3 km',
        notes: 'On schedule'
      },
      {
        id: 'TRK002',
        courier: 'Sarah Johnson',
        location: 'Uptown',
        timestamp: '2024-01-21T10:25:00Z',
        status: 'At Stop',
        speed: '0 km/h',
        eta: '2024-01-21T10:45:00Z',
        distance: '0.1 km',
        notes: 'Collecting specimen'
      }
    ]
  };

  const handleAddCourier = () => {
    setSelectedItem(null);
    setIsCourierOpen(true);
  };

  const handleAddCollection = () => {
    setSelectedItem(null);
    setIsCollectionOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'On Route': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Available': return 'bg-green-100 text-green-800';
      case 'On Collection': return 'bg-blue-100 text-blue-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'At Stop': return 'bg-yellow-100 text-yellow-800';
      case 'Met': return 'bg-green-100 text-green-800';
      case 'Missed': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCouriers = logisticsData.couriers.filter(courier => {
    const matchesSearch = courier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         courier.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         courier.currentLocation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || courier.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Logistics & Home Collection</h1>
          <p className="text-gray-600 mt-1">Phlebotomy app, courier management, and SLA monitoring</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddCourier}>
            <Plus className="h-4 w-4 mr-2" />
            Add Courier
          </Button>
          <Button variant="outline" onClick={handleAddCollection}>
            <Plus className="h-4 w-4 mr-2" />
            Add Collection
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
                <p className="text-sm font-medium text-gray-600">Couriers</p>
                <p className="text-3xl font-bold text-gray-900">{logisticsData.couriers.length}</p>
              </div>
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Truck className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active couriers</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Collections</p>
                <p className="text-3xl font-bold text-gray-900">{logisticsData.homeCollections.length}</p>
              </div>
              <Home className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Home className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Home collections</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Routes</p>
                <p className="text-3xl font-bold text-gray-900">{logisticsData.routes.length}</p>
              </div>
              <Route className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Route className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Active routes</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SLA Performance</p>
                <p className="text-3xl font-bold text-gray-900">85%</p>
              </div>
              <Target className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">SLA compliance</span>
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
                  placeholder="Search couriers, patients, or locations..."
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
                <SelectItem value="On Route">On Route</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="couriers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="couriers">Couriers</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="sla">SLA</TabsTrigger>
          <TabsTrigger value="phlebotomists">Phlebotomists</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
        </TabsList>

        {/* Couriers Tab */}
        <TabsContent value="couriers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Courier Management ({filteredCouriers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredCouriers.map((courier) => (
                    <div key={courier.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{courier.name}</h3>
                            <Badge variant="outline">{courier.vehicle}</Badge>
                            <Badge className={getStatusColor(courier.status)}>
                              {courier.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {courier.rating}★
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Phone: {courier.phone} • Location: {courier.currentLocation}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Update: {new Date(courier.lastUpdate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Deliveries: {courier.deliveries} • Completed: {courier.completed} • Pending: {courier.pending}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {courier.notes}
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

        {/* Collections Tab */}
        <TabsContent value="collections">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home Collections ({logisticsData.homeCollections.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {logisticsData.homeCollections.map((collection) => (
                    <div key={collection.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{collection.patientName}</h3>
                            <Badge variant="outline">{collection.status}</Badge>
                            <Badge className={getStatusColor(collection.priority)}>
                              {collection.priority}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {collection.courier}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Address: {collection.address} • Phone: {collection.phone}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Scheduled: {new Date(collection.scheduledDate).toLocaleString()} • Duration: {collection.estimatedDuration}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {collection.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instructions: {collection.specialInstructions}
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

        {/* Routes Tab */}
        <TabsContent value="routes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Route className="h-5 w-5 mr-2" />
                Route Management ({logisticsData.routes.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {logisticsData.routes.map((route) => (
                    <div key={route.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{route.name}</h3>
                            <Badge variant="outline">{route.courier}</Badge>
                            <Badge className={getStatusColor(route.status)}>
                              {route.status}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800">
                              {route.efficiency}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {route.date} • Stops: {route.completedStops}/{route.totalStops} • Remaining: {route.remainingStops}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Distance: {route.totalDistance} • Time: {route.estimatedTime}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Completion: {new Date(route.estimatedCompletion).toLocaleString()}
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

        {/* SLA Tab */}
        <TabsContent value="sla">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                SLA Performance ({logisticsData.sla.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {logisticsData.sla.map((sla) => (
                    <div key={sla.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{sla.service}</h3>
                            <Badge variant="outline">{sla.date}</Badge>
                            <Badge className={getStatusColor(sla.status)}>
                              {sla.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {sla.performance}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {sla.targetTime} • Actual: {sla.actualTime}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {sla.notes}
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

        {/* Phlebotomists Tab */}
        <TabsContent value="phlebotomists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Phlebotomists ({logisticsData.phlebotomists.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {logisticsData.phlebotomists.map((phlebotomist) => (
                    <div key={phlebotomist.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{phlebotomist.name}</h3>
                            <Badge variant="outline">{phlebotomist.status}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {phlebotomist.rating}★
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Phone: {phlebotomist.phone} • Location: {phlebotomist.currentLocation}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Update: {new Date(phlebotomist.lastUpdate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collections: {phlebotomist.collections} • Completed: {phlebotomist.completed} • Pending: {phlebotomist.pending}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Certifications: {phlebotomist.certifications.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {phlebotomist.notes}
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

        {/* Tracking Tab */}
        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Navigation className="h-5 w-5 mr-2" />
                Real-time Tracking ({logisticsData.tracking.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {logisticsData.tracking.map((track) => (
                    <div key={track.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{track.courier}</h3>
                            <Badge variant="outline">{track.location}</Badge>
                            <Badge className={getStatusColor(track.status)}>
                              {track.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Time: {new Date(track.timestamp).toLocaleString()} • Speed: {track.speed}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            ETA: {new Date(track.eta).toLocaleString()} • Distance: {track.distance}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {track.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Navigation className="h-4 w-4 mr-1" />
                            Track
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

      {/* Add Courier Dialog */}
      <Dialog open={isCourierOpen} onOpenChange={setIsCourierOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Courier' : 'Add New Courier'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Courier Name</Label>
                <Input id="name" placeholder="Enter courier name" />
              </div>
              <div>
                <Label htmlFor="vehicle">Vehicle</Label>
                <Input id="vehicle" placeholder="Enter vehicle ID" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
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
                    <SelectItem value="On Route">On Route</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter courier notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsCourierOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCourierOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Courier' : 'Add Courier'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter address" />
              </div>
              <div>
                <Label htmlFor="courier">Courier</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select courier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="John Smith">John Smith</SelectItem>
                    <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="scheduled-date">Scheduled Date</Label>
                <Input id="scheduled-date" type="datetime-local" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="tests">Tests</Label>
              <Input id="tests" placeholder="Enter tests (comma separated)" />
            </div>
            
            <div>
              <Label htmlFor="special-instructions">Special Instructions</Label>
              <Textarea id="special-instructions" placeholder="Enter special instructions" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter notes" />
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
    </div>
  );
}
