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
  Link,
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

export default function IntegrationsInteroperability() {
  const [activeTab, setActiveTab] = useState('hl7');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isIntegrationOpen, setIsIntegrationOpen] = useState(false);
  const [isMappingOpen, setIsMappingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock integrations data
  const integrationsData = {
    hl7: [
      {
        id: 'HL7001',
        name: 'Epic Integration',
        type: 'HL7 v2.5',
        status: 'Active',
        messages: ['ADT', 'ORM', 'ORU'],
        lastMessage: '2024-01-21T10:30:00Z',
        totalMessages: 1250,
        successRate: 98.5,
        endpoint: 'https://epic.hospital.com/hl7',
        version: '2.5.1',
        notes: 'Primary EMR integration'
      },
      {
        id: 'HL7002',
        name: 'Cerner Integration',
        type: 'HL7 v2.6',
        status: 'Active',
        messages: ['ADT', 'ORM', 'ORU', 'MDM'],
        lastMessage: '2024-01-21T09:15:00Z',
        totalMessages: 890,
        successRate: 97.2,
        endpoint: 'https://cerner.hospital.com/hl7',
        version: '2.6.0',
        notes: 'Secondary EMR integration'
      }
    ],
    fhir: [
      {
        id: 'FHIR001',
        name: 'Patient Portal API',
        type: 'FHIR R4',
        status: 'Active',
        resources: ['Patient', 'Observation', 'DiagnosticReport'],
        lastSync: '2024-01-21T11:00:00Z',
        totalRequests: 2100,
        successRate: 99.1,
        endpoint: 'https://api.hospital.com/fhir',
        version: 'R4',
        notes: 'Patient portal FHIR API'
      },
      {
        id: 'FHIR002',
        name: 'Provider API',
        type: 'FHIR R4',
        status: 'Active',
        resources: ['Patient', 'Practitioner', 'Encounter', 'Observation'],
        lastSync: '2024-01-21T10:45:00Z',
        totalRequests: 1850,
        successRate: 98.8,
        endpoint: 'https://api.hospital.com/fhir/providers',
        version: 'R4',
        notes: 'Provider access FHIR API'
      }
    ],
    emr: [
      {
        id: 'EMR001',
        name: 'Epic MyChart',
        vendor: 'Epic Systems',
        status: 'Connected',
        lastSync: '2024-01-21T10:30:00Z',
        syncFrequency: 'Real-time',
        dataTypes: ['Patient Demographics', 'Lab Orders', 'Lab Results'],
        totalRecords: 15000,
        successRate: 99.2,
        notes: 'Primary EMR system'
      },
      {
        id: 'EMR002',
        name: 'Cerner PowerChart',
        vendor: 'Cerner Corporation',
        status: 'Connected',
        lastSync: '2024-01-21T09:15:00Z',
        syncFrequency: 'Every 15 minutes',
        dataTypes: ['Patient Demographics', 'Lab Orders', 'Lab Results', 'Medications'],
        totalRecords: 12000,
        successRate: 98.7,
        notes: 'Secondary EMR system'
      }
    ],
    security: [
      {
        id: 'SEC001',
        name: 'HIPAA Compliance',
        type: 'Compliance',
        status: 'Compliant',
        lastAudit: '2024-01-15',
        nextAudit: '2024-04-15',
        encryption: 'AES-256',
        authentication: 'OAuth 2.0',
        notes: 'HIPAA compliance maintained'
      },
      {
        id: 'SEC002',
        name: 'Data Encryption',
        type: 'Security',
        status: 'Active',
        lastUpdate: '2024-01-10',
        algorithm: 'AES-256-GCM',
        keyManagement: 'AWS KMS',
        notes: 'End-to-end encryption enabled'
      }
    ],
    api: [
      {
        id: 'API001',
        name: 'Lab Results API',
        endpoint: '/api/v1/results',
        method: 'GET',
        rateLimit: '1000/hour',
        authentication: 'Bearer Token',
        status: 'Active',
        lastUsed: '2024-01-21T10:30:00Z',
        totalCalls: 15000,
        successRate: 99.5,
        notes: 'Primary results API'
      },
      {
        id: 'API002',
        name: 'Order Management API',
        endpoint: '/api/v1/orders',
        method: 'POST',
        rateLimit: '500/hour',
        authentication: 'API Key',
        status: 'Active',
        lastUsed: '2024-01-21T09:45:00Z',
        totalCalls: 8500,
        successRate: 98.9,
        notes: 'Order management API'
      }
    ],
    mappings: [
      {
        id: 'MAP001',
        name: 'Patient Demographics',
        source: 'Epic ADT',
        target: 'Lab System',
        status: 'Active',
        lastUpdated: '2024-01-20',
        fields: 25,
        transformations: 8,
        notes: 'Patient demographic mapping'
      },
      {
        id: 'MAP002',
        name: 'Lab Results',
        source: 'Lab System',
        target: 'Epic ORU',
        status: 'Active',
        lastUpdated: '2024-01-19',
        fields: 45,
        transformations: 12,
        notes: 'Lab results mapping'
      }
    ]
  };

  const handleAddIntegration = () => {
    setSelectedItem(null);
    setIsIntegrationOpen(true);
  };

  const handleAddMapping = () => {
    setSelectedItem(null);
    setIsMappingOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Disconnected': return 'bg-red-100 text-red-800';
      case 'Compliant': return 'bg-green-100 text-green-800';
      case 'Non-compliant': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredHL7 = integrationsData.hl7.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || integration.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations & Interoperability</h1>
          <p className="text-gray-600 mt-1">HL7, FHIR, EMR/HIS integration, and security management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddIntegration}>
            <Plus className="h-4 w-4 mr-2" />
            Add Integration
          </Button>
          <Button variant="outline" onClick={handleAddMapping}>
            <Plus className="h-4 w-4 mr-2" />
            Add Mapping
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
                <p className="text-sm font-medium text-gray-600">HL7 Integrations</p>
                <p className="text-3xl font-bold text-gray-900">{integrationsData.hl7.length}</p>
              </div>
              <Link className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Link className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active HL7 connections</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">FHIR APIs</p>
                <p className="text-3xl font-bold text-gray-900">{integrationsData.fhir.length}</p>
              </div>
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Globe className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">FHIR endpoints</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">EMR Systems</p>
                <p className="text-3xl font-bold text-gray-900">{integrationsData.emr.length}</p>
              </div>
              <Building className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Connected EMRs</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Security Score</p>
                <p className="text-3xl font-bold text-gray-900">98%</p>
              </div>
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Security compliance</span>
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
                  placeholder="Search integrations, APIs, or systems..."
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
                <SelectItem value="Connected">Connected</SelectItem>
                <SelectItem value="Compliant">Compliant</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="hl7" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="hl7">HL7</TabsTrigger>
          <TabsTrigger value="fhir">FHIR</TabsTrigger>
          <TabsTrigger value="emr">EMR/HIS</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API Management</TabsTrigger>
          <TabsTrigger value="mappings">Data Mappings</TabsTrigger>
        </TabsList>

        {/* HL7 Tab */}
        <TabsContent value="hl7">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="h-5 w-5 mr-2" />
                HL7 Integrations ({filteredHL7.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredHL7.map((integration) => (
                    <div key={integration.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{integration.name}</h3>
                            <Badge variant="outline">{integration.type}</Badge>
                            <Badge className={getStatusColor(integration.status)}>
                              {integration.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {integration.successRate}% success
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Messages: {integration.messages.join(', ')} • Version: {integration.version}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Endpoint: {integration.endpoint}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Message: {new Date(integration.lastMessage).toLocaleString()} • Total: {integration.totalMessages}
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

        {/* FHIR Tab */}
        <TabsContent value="fhir">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                FHIR APIs ({integrationsData.fhir.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationsData.fhir.map((fhir) => (
                    <div key={fhir.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{fhir.name}</h3>
                            <Badge variant="outline">{fhir.type}</Badge>
                            <Badge className={getStatusColor(fhir.status)}>
                              {fhir.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {fhir.successRate}% success
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Resources: {fhir.resources.join(', ')} • Version: {fhir.version}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Endpoint: {fhir.endpoint}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Sync: {new Date(fhir.lastSync).toLocaleString()} • Total Requests: {fhir.totalRequests}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {fhir.notes}
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

        {/* EMR/HIS Tab */}
        <TabsContent value="emr">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                EMR/HIS Systems ({integrationsData.emr.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationsData.emr.map((emr) => (
                    <div key={emr.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{emr.name}</h3>
                            <Badge variant="outline">{emr.vendor}</Badge>
                            <Badge className={getStatusColor(emr.status)}>
                              {emr.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {emr.successRate}% success
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Data Types: {emr.dataTypes.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Sync Frequency: {emr.syncFrequency}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Sync: {new Date(emr.lastSync).toLocaleString()} • Total Records: {emr.totalRecords}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {emr.notes}
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

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security & Compliance ({integrationsData.security.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationsData.security.map((security) => (
                    <div key={security.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{security.name}</h3>
                            <Badge variant="outline">{security.type}</Badge>
                            <Badge className={getStatusColor(security.status)}>
                              {security.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Encryption: {security.encryption || security.algorithm} • Authentication: {security.authentication}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {security.lastAudit ? `Last Audit: ${security.lastAudit} • Next: ${security.nextAudit}` : `Last Update: ${security.lastUpdate}`}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {security.keyManagement && `Key Management: ${security.keyManagement}`}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {security.notes}
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

        {/* API Management Tab */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2" />
                API Management ({integrationsData.api.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationsData.api.map((api) => (
                    <div key={api.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{api.name}</h3>
                            <Badge variant="outline">{api.method}</Badge>
                            <Badge className={getStatusColor(api.status)}>
                              {api.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {api.successRate}% success
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Endpoint: {api.endpoint} • Rate Limit: {api.rateLimit}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Authentication: {api.authentication}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Used: {new Date(api.lastUsed).toLocaleString()} • Total Calls: {api.totalCalls}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {api.notes}
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

        {/* Data Mappings Tab */}
        <TabsContent value="mappings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="h-5 w-5 mr-2" />
                Data Mappings ({integrationsData.mappings.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationsData.mappings.map((mapping) => (
                    <div key={mapping.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{mapping.name}</h3>
                            <Badge variant="outline">{mapping.source}</Badge>
                            <Badge className={getStatusColor(mapping.status)}>
                              {mapping.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {mapping.fields} fields
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Source: {mapping.source} → Target: {mapping.target}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Updated: {mapping.lastUpdated} • Transformations: {mapping.transformations}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {mapping.notes}
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

      {/* Add Integration Dialog */}
      <Dialog open={isIntegrationOpen} onOpenChange={setIsIntegrationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Integration' : 'Add New Integration'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Integration Name</Label>
                <Input id="name" placeholder="Enter integration name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HL7 v2.5">HL7 v2.5</SelectItem>
                    <SelectItem value="HL7 v2.6">HL7 v2.6</SelectItem>
                    <SelectItem value="FHIR R4">FHIR R4</SelectItem>
                    <SelectItem value="REST API">REST API</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="endpoint">Endpoint</Label>
                <Input id="endpoint" placeholder="Enter endpoint URL" />
              </div>
              <div>
                <Label htmlFor="version">Version</Label>
                <Input id="version" placeholder="Enter version" />
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
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter integration notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsIntegrationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsIntegrationOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Integration' : 'Add Integration'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Mapping Dialog */}
      <Dialog open={isMappingOpen} onOpenChange={setIsMappingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Mapping' : 'Add New Mapping'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Mapping Name</Label>
                <Input id="name" placeholder="Enter mapping name" />
              </div>
              <div>
                <Label htmlFor="source">Source System</Label>
                <Input id="source" placeholder="Enter source system" />
              </div>
              <div>
                <Label htmlFor="target">Target System</Label>
                <Input id="target" placeholder="Enter target system" />
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
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter mapping notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsMappingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsMappingOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Mapping' : 'Add Mapping'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
