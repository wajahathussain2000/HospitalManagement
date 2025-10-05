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
import { Progress } from '@/components/ui/progress';
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
  Pill,
  Stethoscope,
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
  MapPin,
  Navigation,
  Route,
  Map,
  Globe,
  Building,
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
  Microscope,
  Beaker,
  TestTube,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield as ShieldIcon,
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

export default function ComplianceSecurity() {
  const [activeTab, setActiveTab] = useState('audit');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('month');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState<any>(null);

  // Mock compliance and security data
  const complianceData = {
    auditLogs: [
      {
        id: 'AUDIT001',
        timestamp: '2024-01-20T10:30:00Z',
        user: 'Dr. Sarah Johnson',
        action: 'Prescription Created',
        resource: 'Patient Record #12345',
        ipAddress: '192.168.1.100',
        userAgent: 'Chrome/120.0.0.0',
        severity: 'Low',
        status: 'Success',
        details: 'Created prescription for Paracetamol 500mg',
        complianceFlags: ['HIPAA', 'FDA']
      },
      {
        id: 'AUDIT002',
        timestamp: '2024-01-20T09:15:00Z',
        user: 'Pharmacy Admin',
        action: 'Controlled Drug Access',
        resource: 'Morphine 10mg',
        ipAddress: '192.168.1.101',
        userAgent: 'Firefox/121.0.0.0',
        severity: 'High',
        status: 'Success',
        details: 'Accessed controlled substance inventory',
        complianceFlags: ['DEA', 'FDA', 'HIPAA']
      },
      {
        id: 'AUDIT003',
        timestamp: '2024-01-20T08:45:00Z',
        user: 'Unknown User',
        action: 'Failed Login Attempt',
        resource: 'System Access',
        ipAddress: '203.0.113.50',
        userAgent: 'Unknown',
        severity: 'Critical',
        status: 'Failed',
        details: 'Multiple failed login attempts detected',
        complianceFlags: ['Security']
      }
    ],
    complianceStatus: [
      {
        id: 'COMP001',
        regulation: 'HIPAA Compliance',
        status: 'Compliant',
        lastAudit: '2024-01-15',
        nextAudit: '2024-04-15',
        score: 95,
        issues: 2,
        description: 'Health Insurance Portability and Accountability Act'
      },
      {
        id: 'COMP002',
        regulation: 'FDA Drug Safety',
        status: 'Compliant',
        lastAudit: '2024-01-10',
        nextAudit: '2024-02-10',
        score: 98,
        issues: 1,
        description: 'Food and Drug Administration regulations'
      },
      {
        id: 'COMP003',
        regulation: 'DEA Controlled Substances',
        status: 'Warning',
        lastAudit: '2024-01-18',
        nextAudit: '2024-01-25',
        score: 85,
        issues: 5,
        description: 'Drug Enforcement Administration requirements'
      }
    ],
    controlledDrugs: [
      {
        id: 'CD001',
        drugName: 'Morphine 10mg',
        schedule: 'Schedule II',
        currentStock: 25,
        maxAllowed: 100,
        lastCount: '2024-01-19',
        nextCount: '2024-01-26',
        accessLog: [
          { user: 'Dr. Sarah Johnson', action: 'Dispensed', quantity: 5, timestamp: '2024-01-20T10:30:00Z' },
          { user: 'Pharmacy Admin', action: 'Received', quantity: 30, timestamp: '2024-01-19T14:20:00Z' }
        ],
        status: 'Normal'
      },
      {
        id: 'CD002',
        drugName: 'Oxycodone 5mg',
        schedule: 'Schedule II',
        currentStock: 15,
        maxAllowed: 50,
        lastCount: '2024-01-18',
        nextCount: '2024-01-25',
        accessLog: [
          { user: 'Dr. Michael Chen', action: 'Dispensed', quantity: 10, timestamp: '2024-01-20T09:15:00Z' }
        ],
        status: 'Low Stock'
      }
    ],
    securityAlerts: [
      {
        id: 'SEC001',
        type: 'Suspicious Activity',
        severity: 'High',
        timestamp: '2024-01-20T11:00:00Z',
        description: 'Multiple failed login attempts from unknown IP',
        source: '203.0.113.50',
        status: 'Active',
        actions: ['IP Blocked', 'Alert Sent']
      },
      {
        id: 'SEC002',
        type: 'Data Access Anomaly',
        severity: 'Medium',
        timestamp: '2024-01-20T10:45:00Z',
        description: 'Unusual access pattern to patient records',
        source: '192.168.1.105',
        status: 'Investigation',
        actions: ['User Notified', 'Access Logged']
      }
    ],
    dataPrivacy: [
      {
        id: 'PRIV001',
        patientId: 'P12345',
        dataType: 'Medical Records',
        accessCount: 15,
        lastAccess: '2024-01-20T10:30:00Z',
        consentStatus: 'Active',
        retentionPeriod: '7 years',
        nextReview: '2024-04-20',
        status: 'Compliant'
      },
      {
        id: 'PRIV002',
        patientId: 'P12346',
        dataType: 'Prescription History',
        accessCount: 8,
        lastAccess: '2024-01-19T15:20:00Z',
        consentStatus: 'Expired',
        retentionPeriod: '5 years',
        nextReview: '2024-02-19',
        status: 'Review Required'
      }
    ],
    complianceReports: [
      {
        id: 'REP001',
        reportType: 'HIPAA Audit Report',
        period: 'Q4 2023',
        generatedDate: '2024-01-15',
        status: 'Completed',
        findings: 2,
        recommendations: 5,
        nextAction: 'Implement recommendations by Feb 15'
      },
      {
        id: 'REP002',
        reportType: 'DEA Compliance Report',
        period: 'January 2024',
        generatedDate: '2024-01-18',
        status: 'In Progress',
        findings: 5,
        recommendations: 3,
        nextAction: 'Complete audit by Jan 25'
      }
    ]
  };

  const handleGenerateComplianceReport = () => {
    setIsComplianceOpen(true);
  };

  const handleSecurityAlert = () => {
    setIsSecurityOpen(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Non-Compliant': return 'bg-red-100 text-red-800';
      case 'Review Required': return 'bg-orange-100 text-orange-800';
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Investigation': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAuditLogs = complianceData.auditLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'all' || log.severity === filterSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance, Security & Audit</h1>
          <p className="text-gray-600 mt-1">Comprehensive compliance tracking, security monitoring, and audit management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleGenerateComplianceReport}>
            <Plus className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline" onClick={handleSecurityAlert}>
            <Shield className="h-4 w-4 mr-2" />
            Security Alert
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Audit
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
                <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                <p className="text-3xl font-bold text-gray-900">92%</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Above threshold</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Security Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{complianceData.securityAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Active monitoring</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Audit Logs</p>
                <p className="text-3xl font-bold text-gray-900">{complianceData.auditLogs.length}</p>
              </div>
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Activity className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Today's activities</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Controlled Drugs</p>
                <p className="text-3xl font-bold text-gray-900">{complianceData.controlledDrugs.length}</p>
              </div>
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Lock className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Under surveillance</span>
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
                  placeholder="Search audit logs, users, or actions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="day">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterSeverity} onValueChange={setFilterSeverity}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="audit" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="controlled">Controlled Drugs</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="privacy">Data Privacy</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Audit Logs Tab */}
        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Audit Logs ({filteredAuditLogs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredAuditLogs.map((log) => (
                    <div key={log.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{log.action}</h3>
                            <Badge className={getSeverityColor(log.severity)}>
                              {log.severity}
                            </Badge>
                            <Badge className={getStatusColor(log.status)}>
                              {log.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            User: {log.user} • Resource: {log.resource} • IP: {log.ipAddress}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Time: {new Date(log.timestamp).toLocaleString()} • User Agent: {log.userAgent}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Details: {log.details}
                          </div>
                          <div className="text-sm text-gray-600">
                            Compliance: {log.complianceFlags.join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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
                Compliance Status ({complianceData.complianceStatus.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {complianceData.complianceStatus.map((compliance) => (
                    <div key={compliance.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{compliance.regulation}</h3>
                            <Badge className={getStatusColor(compliance.status)}>
                              {compliance.status}
                            </Badge>
                            <Badge variant="outline">
                              Score: {compliance.score}%
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {compliance.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Audit: {compliance.lastAudit} • Next Audit: {compliance.nextAudit}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Issues: {compliance.issues} • Score: {compliance.score}%
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${compliance.score}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Report
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

        {/* Controlled Drugs Tab */}
        <TabsContent value="controlled">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Controlled Drugs Management ({complianceData.controlledDrugs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {complianceData.controlledDrugs.map((drug) => (
                    <div key={drug.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{drug.drugName}</h3>
                            <Badge variant="outline">
                              {drug.schedule}
                            </Badge>
                            <Badge className={getStatusColor(drug.status)}>
                              {drug.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {drug.currentStock} • Max Allowed: {drug.maxAllowed}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Count: {drug.lastCount} • Next Count: {drug.nextCount}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Access Log: {drug.accessLog.length} entries
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full" 
                              style={{ width: `${(drug.currentStock / drug.maxAllowed) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Count
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
                <AlertTriangle className="h-5 w-5 mr-2" />
                Security Alerts ({complianceData.securityAlerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {complianceData.securityAlerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{alert.type}</h3>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity}
                            </Badge>
                            <Badge className={getStatusColor(alert.status)}>
                              {alert.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {alert.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Source: {alert.source} • Time: {new Date(alert.timestamp).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Actions: {alert.actions.join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
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

        {/* Data Privacy Tab */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Data Privacy Management ({complianceData.dataPrivacy.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {complianceData.dataPrivacy.map((privacy) => (
                    <div key={privacy.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Patient {privacy.patientId}</h3>
                            <Badge variant="outline">
                              {privacy.dataType}
                            </Badge>
                            <Badge className={getStatusColor(privacy.status)}>
                              {privacy.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Access Count: {privacy.accessCount} • Last Access: {new Date(privacy.lastAccess).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Consent Status: {privacy.consentStatus} • Retention: {privacy.retentionPeriod}
                          </div>
                          <div className="text-sm text-gray-600">
                            Next Review: {privacy.nextReview}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Update
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

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Compliance Reports ({complianceData.complianceReports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {complianceData.complianceReports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.reportType}</h3>
                            <Badge variant="outline">
                              {report.period}
                            </Badge>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Generated: {report.generatedDate} • Findings: {report.findings} • Recommendations: {report.recommendations}
                          </div>
                          <div className="text-sm text-gray-600">
                            Next Action: {report.nextAction}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
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

      {/* Compliance Report Generation Dialog */}
      <Dialog open={isComplianceOpen} onOpenChange={setIsComplianceOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Generate Compliance Report
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hipaa">HIPAA Compliance</SelectItem>
                    <SelectItem value="fda">FDA Drug Safety</SelectItem>
                    <SelectItem value="dea">DEA Controlled Substances</SelectItem>
                    <SelectItem value="audit">Audit Trail</SelectItem>
                    <SelectItem value="security">Security Assessment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-period">Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-format">Format</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-recipients">Recipients</Label>
                <Input placeholder="Enter email addresses" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="report-notes">Additional Notes</Label>
              <Textarea id="report-notes" placeholder="Enter any additional notes or requirements" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsComplianceOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsComplianceOpen(false)}>
                <Shield className="h-4 w-4 mr-1" />
                Generate Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Security Alert Dialog */}
      <Dialog open={isSecurityOpen} onOpenChange={setIsSecurityOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Security Alert Management
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center py-8">
              <AlertTriangle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <p className="text-gray-600">Security alert management would be displayed here</p>
              <p className="text-sm text-gray-500">Real-time monitoring and threat detection</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsSecurityOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsSecurityOpen(false)}>
                <AlertTriangle className="h-4 w-4 mr-1" />
                Manage Alerts
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
