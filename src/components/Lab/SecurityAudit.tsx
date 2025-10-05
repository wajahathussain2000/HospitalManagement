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
  Shield,
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

export default function SecurityAudit() {
  const [activeTab, setActiveTab] = useState('access-control');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock security data
  const securityData = {
    accessControl: [
      {
        id: 'AC001',
        user: 'Dr. Sarah Johnson',
        role: 'Doctor',
        permissions: ['View Results', 'Order Tests', 'Patient Management'],
        lastLogin: '2024-01-21T10:30:00Z',
        ipAddress: '192.168.1.100',
        status: 'Active',
        sessionTimeout: '8 hours',
        mfaEnabled: true,
        notes: 'High-privilege user with full access'
      },
      {
        id: 'AC002',
        user: 'Lisa Brown',
        role: 'Lab Technician',
        permissions: ['View Results', 'Process Tests'],
        lastLogin: '2024-01-21T09:15:00Z',
        ipAddress: '192.168.1.101',
        status: 'Active',
        sessionTimeout: '4 hours',
        mfaEnabled: false,
        notes: 'Standard lab technician access'
      }
    ],
    auditTrails: [
      {
        id: 'AT001',
        user: 'Dr. Sarah Johnson',
        action: 'Viewed Patient Results',
        resource: 'Patient ID: 12345',
        timestamp: '2024-01-21T10:30:00Z',
        ipAddress: '192.168.1.100',
        status: 'Success',
        details: 'Accessed CBC results for patient John Doe',
        riskLevel: 'Low',
        notes: 'Normal clinical access'
      },
      {
        id: 'AT002',
        user: 'Lisa Brown',
        action: 'Modified Test Results',
        resource: 'Test ID: TST001',
        timestamp: '2024-01-21T09:15:00Z',
        ipAddress: '192.168.1.101',
        status: 'Success',
        details: 'Updated glucose result from 95 to 97 mg/dL',
        riskLevel: 'Medium',
        notes: 'Result modification requires review'
      }
    ],
    phiProtection: [
      {
        id: 'PHI001',
        dataType: 'Patient Demographics',
        encryption: 'AES-256',
        accessLevel: 'Restricted',
        retentionPeriod: '7 years',
        lastAudit: '2024-01-15',
        complianceStatus: 'Compliant',
        notes: 'HIPAA compliant encryption'
      },
      {
        id: 'PHI002',
        dataType: 'Lab Results',
        encryption: 'AES-256',
        accessLevel: 'Restricted',
        retentionPeriod: '10 years',
        lastAudit: '2024-01-10',
        complianceStatus: 'Compliant',
        notes: 'Critical health data with enhanced protection'
      }
    ],
    securityMonitoring: [
      {
        id: 'SM001',
        alertType: 'Failed Login Attempts',
        severity: 'Medium',
        description: 'Multiple failed login attempts detected',
        timestamp: '2024-01-21T08:30:00Z',
        source: '192.168.1.200',
        status: 'Investigated',
        resolution: 'IP blocked, no further attempts',
        notes: 'Potential brute force attack prevented'
      },
      {
        id: 'SM002',
        alertType: 'Unusual Data Access',
        severity: 'High',
        description: 'Large volume of patient data accessed',
        timestamp: '2024-01-21T07:45:00Z',
        source: '192.168.1.150',
        status: 'Under Investigation',
        resolution: 'Pending',
        notes: 'Requires immediate attention'
      }
    ],
    compliance: [
      {
        id: 'COMP001',
        standard: 'HIPAA',
        requirement: 'Administrative Safeguards',
        status: 'Compliant',
        lastAssessment: '2024-01-15',
        nextAssessment: '2024-04-15',
        findings: 0,
        correctiveActions: 0,
        notes: 'Full HIPAA compliance maintained'
      },
      {
        id: 'COMP002',
        standard: 'GDPR',
        requirement: 'Data Protection',
        status: 'Compliant',
        lastAssessment: '2024-01-10',
        nextAssessment: '2024-04-10',
        findings: 0,
        correctiveActions: 0,
        notes: 'GDPR requirements met'
      }
    ],
    securityPolicies: [
      {
        id: 'POL001',
        name: 'Password Policy',
        type: 'Authentication',
        status: 'Active',
        requirements: {
          minLength: 12,
          complexity: 'High',
          expiration: '90 days',
          history: '5 passwords'
        },
        lastUpdated: '2024-01-01',
        notes: 'Strong password requirements enforced'
      },
      {
        id: 'POL002',
        name: 'Session Management',
        type: 'Access Control',
        status: 'Active',
        requirements: {
          timeout: '8 hours',
          concurrent: '3 sessions',
          idle: '30 minutes'
        },
        lastUpdated: '2024-01-01',
        notes: 'Session security controls active'
      }
    ]
  };

  const handleAddPolicy = () => {
    setSelectedItem(null);
    setIsPolicyOpen(true);
  };

  const handleAddAudit = () => {
    setSelectedItem(null);
    setIsAuditOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Compliant': return 'bg-green-100 text-green-800';
      case 'Non-compliant': return 'bg-red-100 text-red-800';
      case 'Under Investigation': return 'bg-yellow-100 text-yellow-800';
      case 'Investigated': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAccessControl = securityData.accessControl.filter(access => {
    const matchesSearch = access.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         access.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || access.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Security & Audit</h1>
          <p className="text-gray-600 mt-1">Access control, audit trails, PHI/PII protection, and compliance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddPolicy}>
            <Plus className="h-4 w-4 mr-2" />
            Add Policy
          </Button>
          <Button variant="outline" onClick={handleAddAudit}>
            <Plus className="h-4 w-4 mr-2" />
            Add Audit
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
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-gray-900">{securityData.accessControl.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Access control</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Audit Events</p>
                <p className="text-3xl font-bold text-gray-900">{securityData.auditTrails.length}</p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Activity className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Audit trails</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Security Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{securityData.securityMonitoring.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Security monitoring</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                <p className="text-3xl font-bold text-gray-900">98%</p>
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Security compliance</span>
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
                  placeholder="Search users, events, or policies..."
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
                <SelectItem value="Success">Success</SelectItem>
                <SelectItem value="Compliant">Compliant</SelectItem>
                <SelectItem value="Under Investigation">Under Investigation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="access-control" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="access-control">Access Control</TabsTrigger>
          <TabsTrigger value="audit-trails">Audit Trails</TabsTrigger>
          <TabsTrigger value="phi-protection">PHI Protection</TabsTrigger>
          <TabsTrigger value="monitoring">Security Monitoring</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="policies">Security Policies</TabsTrigger>
        </TabsList>

        {/* Access Control Tab */}
        <TabsContent value="access-control">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Access Control ({filteredAccessControl.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredAccessControl.map((access) => (
                    <div key={access.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{access.user}</h3>
                            <Badge variant="outline">{access.role}</Badge>
                            <Badge className={getStatusColor(access.status)}>
                              {access.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {access.mfaEnabled ? 'MFA' : 'No MFA'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Permissions: {access.permissions.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Login: {new Date(access.lastLogin).toLocaleString()} • IP: {access.ipAddress}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Session Timeout: {access.sessionTimeout}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {access.notes}
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

        {/* Audit Trails Tab */}
        <TabsContent value="audit-trails">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Audit Trails ({securityData.auditTrails.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {securityData.auditTrails.map((audit) => (
                    <div key={audit.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{audit.action}</h3>
                            <Badge variant="outline">{audit.user}</Badge>
                            <Badge className={getStatusColor(audit.status)}>
                              {audit.status}
                            </Badge>
                            <Badge className={getStatusColor(audit.riskLevel)}>
                              {audit.riskLevel} Risk
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Resource: {audit.resource} • IP: {audit.ipAddress}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Timestamp: {new Date(audit.timestamp).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Details: {audit.details}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {audit.notes}
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

        {/* PHI Protection Tab */}
        <TabsContent value="phi-protection">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                PHI/PII Protection ({securityData.phiProtection.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {securityData.phiProtection.map((phi) => (
                    <div key={phi.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{phi.dataType}</h3>
                            <Badge variant="outline">{phi.accessLevel}</Badge>
                            <Badge className={getStatusColor(phi.complianceStatus)}>
                              {phi.complianceStatus}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {phi.encryption}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Encryption: {phi.encryption} • Retention: {phi.retentionPeriod}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Audit: {phi.lastAudit}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {phi.notes}
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

        {/* Security Monitoring Tab */}
        <TabsContent value="monitoring">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Security Monitoring ({securityData.securityMonitoring.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {securityData.securityMonitoring.map((monitor) => (
                    <div key={monitor.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{monitor.alertType}</h3>
                            <Badge variant="outline">{monitor.severity}</Badge>
                            <Badge className={getStatusColor(monitor.status)}>
                              {monitor.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {monitor.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Timestamp: {new Date(monitor.timestamp).toLocaleString()} • Source: {monitor.source}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Resolution: {monitor.resolution}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {monitor.notes}
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

        {/* Compliance Tab */}
        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Compliance Management ({securityData.compliance.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {securityData.compliance.map((comp) => (
                    <div key={comp.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{comp.standard}</h3>
                            <Badge variant="outline">{comp.requirement}</Badge>
                            <Badge className={getStatusColor(comp.status)}>
                              {comp.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Assessment: {comp.lastAssessment} • Next: {comp.nextAssessment}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Findings: {comp.findings} • Corrective Actions: {comp.correctiveActions}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {comp.notes}
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

        {/* Security Policies Tab */}
        <TabsContent value="policies">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Security Policies ({securityData.securityPolicies.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {securityData.securityPolicies.map((policy) => (
                    <div key={policy.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{policy.name}</h3>
                            <Badge variant="outline">{policy.type}</Badge>
                            <Badge className={getStatusColor(policy.status)}>
                              {policy.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Requirements: {Object.entries(policy.requirements).map(([key, value]) => `${key}: ${value}`).join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Updated: {policy.lastUpdated}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {policy.notes}
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

      {/* Add Policy Dialog */}
      <Dialog open={isPolicyOpen} onOpenChange={setIsPolicyOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Policy' : 'Add New Policy'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Policy Name</Label>
                <Input id="name" placeholder="Enter policy name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Authentication">Authentication</SelectItem>
                    <SelectItem value="Access Control">Access Control</SelectItem>
                    <SelectItem value="Data Protection">Data Protection</SelectItem>
                    <SelectItem value="Session Management">Session Management</SelectItem>
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
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea id="requirements" placeholder="Enter policy requirements" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter policy notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPolicyOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPolicyOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Policy' : 'Add Policy'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Audit Dialog */}
      <Dialog open={isAuditOpen} onOpenChange={setIsAuditOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Audit' : 'Add New Audit'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="user">User</Label>
                <Input id="user" placeholder="Enter user name" />
              </div>
              <div>
                <Label htmlFor="action">Action</Label>
                <Input id="action" placeholder="Enter action" />
              </div>
              <div>
                <Label htmlFor="resource">Resource</Label>
                <Input id="resource" placeholder="Enter resource" />
              </div>
              <div>
                <Label htmlFor="ip-address">IP Address</Label>
                <Input id="ip-address" placeholder="Enter IP address" />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Success">Success</SelectItem>
                    <SelectItem value="Failed">Failed</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="risk-level">Risk Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="details">Details</Label>
              <Textarea id="details" placeholder="Enter audit details" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter audit notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsAuditOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAuditOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Audit' : 'Add Audit'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
