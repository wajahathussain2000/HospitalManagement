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
  Cpu,
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

export default function AnalyzerIntegration() {
  const [activeTab, setActiveTab] = useState('devices');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDeviceOpen, setIsDeviceOpen] = useState(false);
  const [isInterfaceOpen, setIsInterfaceOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock analyzer integration data
  const analyzerData = {
    devices: [
      {
        id: 'DEV001',
        name: 'Roche Cobas 6000',
        manufacturer: 'Roche',
        model: 'Cobas 6000',
        type: 'Chemistry Analyzer',
        department: 'Chemistry',
        location: 'Central Lab - Floor 2',
        ipAddress: '192.168.1.100',
        port: 8080,
        status: 'Online',
        lastMaintenance: '2024-01-15',
        nextMaintenance: '2024-02-15',
        tests: ['Glucose', 'Creatinine', 'BUN', 'ALT', 'AST'],
        throughput: 1200,
        uptime: 98.5,
        version: 'v2.1.3',
        serialNumber: 'RC6000-001234'
      },
      {
        id: 'DEV002',
        name: 'Sysmex XN-1000',
        manufacturer: 'Sysmex',
        model: 'XN-1000',
        type: 'Hematology Analyzer',
        department: 'Hematology',
        location: 'Central Lab - Floor 2',
        ipAddress: '192.168.1.101',
        port: 8080,
        status: 'Online',
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-02-10',
        tests: ['CBC', 'Differential', 'Reticulocyte'],
        throughput: 800,
        uptime: 99.2,
        version: 'v1.8.2',
        serialNumber: 'SX1000-005678'
      },
      {
        id: 'DEV003',
        name: 'BD BACTEC FX',
        manufacturer: 'BD',
        model: 'BACTEC FX',
        type: 'Microbiology Analyzer',
        department: 'Microbiology',
        location: 'Central Lab - Floor 3',
        ipAddress: '192.168.1.102',
        port: 8080,
        status: 'Offline',
        lastMaintenance: '2024-01-05',
        nextMaintenance: '2024-02-05',
        tests: ['Blood Culture', 'TB Culture'],
        throughput: 200,
        uptime: 95.8,
        version: 'v3.2.1',
        serialNumber: 'BDFX-009876'
      }
    ],
    interfaces: [
      {
        id: 'INT001',
        deviceId: 'DEV001',
        deviceName: 'Roche Cobas 6000',
        interfaceType: 'ASTM',
        direction: 'Bidirectional',
        status: 'Active',
        lastSync: '2024-01-21T10:30:00Z',
        messagesSent: 1250,
        messagesReceived: 1180,
        errorRate: 0.2,
        protocol: 'ASTM E1394',
        port: 8080,
        timeout: 30
      },
      {
        id: 'INT002',
        deviceId: 'DEV002',
        deviceName: 'Sysmex XN-1000',
        interfaceType: 'HL7',
        direction: 'Bidirectional',
        status: 'Active',
        lastSync: '2024-01-21T10:25:00Z',
        messagesSent: 980,
        messagesReceived: 950,
        errorRate: 0.1,
        protocol: 'HL7 v2.5.1',
        port: 8080,
        timeout: 30
      }
    ],
    results: [
      {
        id: 'RES001',
        deviceId: 'DEV001',
        deviceName: 'Roche Cobas 6000',
        specimenId: 'SP001',
        patientId: 'P12345',
        test: 'Glucose',
        result: '95 mg/dL',
        unit: 'mg/dL',
        referenceRange: '70-100 mg/dL',
        status: 'Normal',
        timestamp: '2024-01-21T10:30:00Z',
        flags: [],
        quality: 'Good',
        autoValidated: true
      },
      {
        id: 'RES002',
        deviceId: 'DEV001',
        deviceName: 'Roche Cobas 6000',
        specimenId: 'SP001',
        patientId: 'P12345',
        test: 'Creatinine',
        result: '1.2 mg/dL',
        unit: 'mg/dL',
        referenceRange: '0.6-1.2 mg/dL',
        status: 'High',
        timestamp: '2024-01-21T10:32:00Z',
        flags: ['H'],
        quality: 'Good',
        autoValidated: false
      }
    ],
    middleware: [
      {
        id: 'MW001',
        name: 'LabConnect Middleware',
        version: 'v4.2.1',
        status: 'Running',
        uptime: '15 days',
        cpuUsage: 45.2,
        memoryUsage: 68.5,
        diskUsage: 32.1,
        lastRestart: '2024-01-06T08:00:00Z',
        connections: 12,
        messagesProcessed: 15680,
        errorCount: 23
      }
    ],
    alerts: [
      {
        id: 'ALT001',
        deviceId: 'DEV003',
        deviceName: 'BD BACTEC FX',
        alertType: 'Device Offline',
        severity: 'High',
        message: 'Device has been offline for 2 hours',
        timestamp: '2024-01-21T08:30:00Z',
        status: 'Active',
        acknowledged: false
      },
      {
        id: 'ALT002',
        deviceId: 'DEV001',
        deviceName: 'Roche Cobas 6000',
        alertType: 'Maintenance Due',
        severity: 'Medium',
        message: 'Scheduled maintenance due in 5 days',
        timestamp: '2024-01-21T09:00:00Z',
        status: 'Active',
        acknowledged: true
      }
    ],
    protocols: [
      {
        id: 'PROT001',
        name: 'ASTM E1394',
        version: 'v2.1',
        description: 'Standard for Laboratory Data Communication',
        devices: ['Roche Cobas 6000', 'Siemens Advia'],
        status: 'Active',
        lastUpdated: '2024-01-15'
      },
      {
        id: 'PROT002',
        name: 'HL7 v2.5.1',
        version: 'v2.5.1',
        description: 'Health Level Seven Version 2.5.1',
        devices: ['Sysmex XN-1000', 'Abbott Architect'],
        status: 'Active',
        lastUpdated: '2024-01-10'
      }
    ]
  };

  const handleAddDevice = () => {
    setSelectedItem(null);
    setIsDeviceOpen(true);
  };

  const handleAddInterface = () => {
    setSelectedItem(null);
    setIsInterfaceOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Running': return 'bg-green-100 text-green-800';
      case 'Stopped': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDevices = analyzerData.devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || device.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analyzer Integration</h1>
          <p className="text-gray-600 mt-1">Middleware, device setup, and result handling for laboratory analyzers</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddDevice}>
            <Plus className="h-4 w-4 mr-2" />
            Add Device
          </Button>
          <Button variant="outline" onClick={handleAddInterface}>
            <Plus className="h-4 w-4 mr-2" />
            Add Interface
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
                <p className="text-sm font-medium text-gray-600">Devices</p>
                <p className="text-3xl font-bold text-gray-900">{analyzerData.devices.length}</p>
              </div>
              <Cpu className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Cpu className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Connected analyzers</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Interfaces</p>
                <p className="text-3xl font-bold text-gray-900">{analyzerData.interfaces.length}</p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Activity className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Active interfaces</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Results</p>
                <p className="text-3xl font-bold text-gray-900">{analyzerData.results.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Processed results</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{analyzerData.alerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Active alerts</span>
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
                  placeholder="Search devices, manufacturers, or types..."
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
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Offline">Offline</SelectItem>
                <SelectItem value="Maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="devices" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="interfaces">Interfaces</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="middleware">Middleware</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="protocols">Protocols</TabsTrigger>
        </TabsList>

        {/* Devices Tab */}
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cpu className="h-5 w-5 mr-2" />
                Analyzer Devices ({filteredDevices.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredDevices.map((device) => (
                    <div key={device.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{device.name}</h3>
                            <Badge variant="outline">{device.manufacturer}</Badge>
                            <Badge className={getStatusColor(device.status)}>
                              {device.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {device.uptime}% uptime
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Type: {device.type} • Department: {device.department} • Location: {device.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            IP: {device.ipAddress}:{device.port} • Serial: {device.serialNumber} • Version: {device.version}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {device.tests.join(', ')} • Throughput: {device.throughput}/hour
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Maintenance: {device.lastMaintenance} • Next: {device.nextMaintenance}
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

        {/* Interfaces Tab */}
        <TabsContent value="interfaces">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Device Interfaces ({analyzerData.interfaces.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyzerData.interfaces.map((interface_) => (
                    <div key={interface_.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{interface_.deviceName}</h3>
                            <Badge variant="outline">{interface_.interfaceType}</Badge>
                            <Badge className={getStatusColor(interface_.status)}>
                              {interface_.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {interface_.direction}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Protocol: {interface_.protocol} • Port: {interface_.port} • Timeout: {interface_.timeout}s
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Sync: {new Date(interface_.lastSync).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Messages: Sent {interface_.messagesSent} • Received {interface_.messagesReceived} • Error Rate: {interface_.errorRate}%
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

        {/* Results Tab */}
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Analyzer Results ({analyzerData.results.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyzerData.results.map((result) => (
                    <div key={result.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{result.test}</h3>
                            <Badge variant="outline">{result.deviceName}</Badge>
                            <Badge className={getStatusColor(result.status)}>
                              {result.status}
                            </Badge>
                            <Badge className={result.autoValidated ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {result.autoValidated ? 'Auto-Validated' : 'Manual Review'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {result.patientId} • Specimen: {result.specimenId} • Result: {result.result} {result.unit}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reference Range: {result.referenceRange} • Quality: {result.quality}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Time: {new Date(result.timestamp).toLocaleString()} • Flags: {result.flags.join(', ') || 'None'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Validate
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

        {/* Middleware Tab */}
        <TabsContent value="middleware">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2" />
                Middleware Status ({analyzerData.middleware.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyzerData.middleware.map((middleware) => (
                    <div key={middleware.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{middleware.name}</h3>
                            <Badge variant="outline">{middleware.version}</Badge>
                            <Badge className={getStatusColor(middleware.status)}>
                              {middleware.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Uptime: {middleware.uptime} • Last Restart: {new Date(middleware.lastRestart).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            CPU: {middleware.cpuUsage}% • Memory: {middleware.memoryUsage}% • Disk: {middleware.diskUsage}%
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Connections: {middleware.connections} • Messages Processed: {middleware.messagesProcessed} • Errors: {middleware.errorCount}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4 mr-1" />
                            Configure
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

        {/* Alerts Tab */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                System Alerts ({analyzerData.alerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyzerData.alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{alert.alertType}</h3>
                            <Badge variant="outline">{alert.deviceName}</Badge>
                            <Badge className={getStatusColor(alert.severity)}>
                              {alert.severity}
                            </Badge>
                            <Badge className={alert.acknowledged ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {alert.acknowledged ? 'Acknowledged' : 'Active'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {alert.message}
                          </div>
                          <div className="text-sm text-gray-600">
                            Time: {new Date(alert.timestamp).toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Acknowledge
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

        {/* Protocols Tab */}
        <TabsContent value="protocols">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Communication Protocols ({analyzerData.protocols.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyzerData.protocols.map((protocol) => (
                    <div key={protocol.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{protocol.name}</h3>
                            <Badge variant="outline">{protocol.version}</Badge>
                            <Badge className={getStatusColor(protocol.status)}>
                              {protocol.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {protocol.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Devices: {protocol.devices.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Last Updated: {protocol.lastUpdated}
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

      {/* Add Device Dialog */}
      <Dialog open={isDeviceOpen} onOpenChange={setIsDeviceOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Device' : 'Add New Device'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="device-name">Device Name</Label>
                <Input id="device-name" placeholder="Enter device name" />
              </div>
              <div>
                <Label htmlFor="manufacturer">Manufacturer</Label>
                <Input id="manufacturer" placeholder="Enter manufacturer" />
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" placeholder="Enter model" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chemistry Analyzer">Chemistry Analyzer</SelectItem>
                    <SelectItem value="Hematology Analyzer">Hematology Analyzer</SelectItem>
                    <SelectItem value="Microbiology Analyzer">Microbiology Analyzer</SelectItem>
                    <SelectItem value="Molecular Analyzer">Molecular Analyzer</SelectItem>
                    <SelectItem value="Immunoassay Analyzer">Immunoassay Analyzer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
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
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="ip-address">IP Address</Label>
                <Input id="ip-address" placeholder="Enter IP address" />
              </div>
              <div>
                <Label htmlFor="port">Port</Label>
                <Input id="port" placeholder="Enter port" type="number" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDeviceOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDeviceOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Device' : 'Add Device'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Interface Dialog */}
      <Dialog open={isInterfaceOpen} onOpenChange={setIsInterfaceOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Interface' : 'Add New Interface'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="device">Device</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select device" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Roche Cobas 6000">Roche Cobas 6000</SelectItem>
                    <SelectItem value="Sysmex XN-1000">Sysmex XN-1000</SelectItem>
                    <SelectItem value="BD BACTEC FX">BD BACTEC FX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="interface-type">Interface Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select interface type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ASTM">ASTM</SelectItem>
                    <SelectItem value="HL7">HL7</SelectItem>
                    <SelectItem value="POCT1-A">POCT1-A</SelectItem>
                    <SelectItem value="Custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="direction">Direction</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select direction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bidirectional">Bidirectional</SelectItem>
                    <SelectItem value="Unidirectional">Unidirectional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="protocol">Protocol</Label>
                <Input id="protocol" placeholder="Enter protocol" />
              </div>
              <div>
                <Label htmlFor="port">Port</Label>
                <Input id="port" placeholder="Enter port" type="number" />
              </div>
              <div>
                <Label htmlFor="timeout">Timeout (seconds)</Label>
                <Input id="timeout" placeholder="Enter timeout" type="number" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsInterfaceOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsInterfaceOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Interface' : 'Add Interface'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
