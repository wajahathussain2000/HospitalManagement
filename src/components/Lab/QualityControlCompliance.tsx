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

export default function QualityControlCompliance() {
  const [activeTab, setActiveTab] = useState('internal-qc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isQCOpen, setIsQCOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock quality control data
  const qcData = {
    internalQC: [
      {
        id: 'QC001',
        test: 'Glucose',
        level: 'Level 1',
        targetValue: '95 mg/dL',
        measuredValue: '94.2 mg/dL',
        deviation: '-0.8%',
        status: 'Pass',
        runDate: '2024-01-21T08:00:00Z',
        technician: 'Lisa Brown',
        instrument: 'Roche Cobas 6000',
        lotNumber: 'QC2024001',
        expiryDate: '2024-02-15',
        notes: 'Within acceptable limits'
      },
      {
        id: 'QC002',
        test: 'Creatinine',
        level: 'Level 2',
        targetValue: '1.2 mg/dL',
        measuredValue: '1.25 mg/dL',
        deviation: '+4.2%',
        status: 'Pass',
        runDate: '2024-01-21T08:30:00Z',
        technician: 'Tom Davis',
        instrument: 'Roche Cobas 6000',
        lotNumber: 'QC2024002',
        expiryDate: '2024-02-20',
        notes: 'Slightly high but acceptable'
      }
    ],
    externalQA: [
      {
        id: 'EQA001',
        program: 'CAP Proficiency Testing',
        test: 'Chemistry Panel',
        cycle: '2024-1',
        status: 'Completed',
        score: '95%',
        dueDate: '2024-01-15',
        submissionDate: '2024-01-14',
        results: 'Pass',
        correctiveActions: 'None required',
        notes: 'Excellent performance'
      },
      {
        id: 'EQA002',
        program: 'CLIA Proficiency Testing',
        test: 'Hematology',
        cycle: '2024-1',
        status: 'Pending',
        score: null,
        dueDate: '2024-01-25',
        submissionDate: null,
        results: 'Pending',
        correctiveActions: null,
        notes: 'Results due next week'
      }
    ],
    equipment: [
      {
        id: 'EQ001',
        name: 'Roche Cobas 6000',
        type: 'Chemistry Analyzer',
        location: 'Central Lab',
        lastCalibration: '2024-01-15',
        nextCalibration: '2024-02-15',
        status: 'Active',
        maintenanceSchedule: 'Monthly',
        performance: 'Good',
        issues: 0,
        notes: 'Operating within specifications'
      },
      {
        id: 'EQ002',
        name: 'Sysmex XN-1000',
        type: 'Hematology Analyzer',
        location: 'Central Lab',
        lastCalibration: '2024-01-10',
        nextCalibration: '2024-02-10',
        status: 'Active',
        maintenanceSchedule: 'Monthly',
        performance: 'Good',
        issues: 0,
        notes: 'No issues reported'
      }
    ],
    nonConformances: [
      {
        id: 'NC001',
        type: 'QC Failure',
        description: 'Glucose QC Level 2 failed Westgard rules',
        date: '2024-01-20T10:00:00Z',
        severity: 'High',
        status: 'Under Investigation',
        assignedTo: 'Dr. Sarah Johnson',
        rootCause: 'Under investigation',
        correctiveAction: 'Pending',
        preventiveAction: 'Pending',
        closureDate: null,
        notes: 'QC material may be expired'
      },
      {
        id: 'NC002',
        type: 'Equipment Malfunction',
        description: 'Temperature deviation in incubator',
        date: '2024-01-19T14:30:00Z',
        severity: 'Medium',
        status: 'Resolved',
        assignedTo: 'Tom Davis',
        rootCause: 'Thermostat calibration drift',
        correctiveAction: 'Thermostat recalibrated',
        preventiveAction: 'Monthly temperature monitoring',
        closureDate: '2024-01-20T09:00:00Z',
        notes: 'Issue resolved successfully'
      }
    ],
    training: [
      {
        id: 'TR001',
        employee: 'Lisa Brown',
        course: 'QC Management',
        status: 'Completed',
        completionDate: '2024-01-15',
        expiryDate: '2025-01-15',
        score: '92%',
        instructor: 'Dr. Sarah Johnson',
        notes: 'Excellent performance'
      },
      {
        id: 'TR002',
        employee: 'Tom Davis',
        course: 'Equipment Calibration',
        status: 'In Progress',
        completionDate: null,
        expiryDate: null,
        score: null,
        instructor: 'Dr. Michael Chen',
        notes: 'Training in progress'
      }
    ],
    accreditation: [
      {
        id: 'ACC001',
        standard: 'ISO 15189',
        requirement: 'Quality Management System',
        status: 'Compliant',
        lastAudit: '2024-01-10',
        nextAudit: '2024-07-10',
        findings: 0,
        correctiveActions: 0,
        notes: 'Fully compliant'
      },
      {
        id: 'ACC002',
        standard: 'CLIA',
        requirement: 'Proficiency Testing',
        status: 'Compliant',
        lastAudit: '2024-01-05',
        nextAudit: '2024-07-05',
        findings: 0,
        correctiveActions: 0,
        notes: 'All requirements met'
      }
    ]
  };

  const handleAddQC = () => {
    setSelectedItem(null);
    setIsQCOpen(true);
  };

  const handleAddEquipment = () => {
    setSelectedItem(null);
    setIsEquipmentOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pass': return 'bg-green-100 text-green-800';
      case 'Fail': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Under Investigation': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Compliant': return 'bg-green-100 text-green-800';
      case 'Non-compliant': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInternalQC = qcData.internalQC.filter(qc => {
    const matchesSearch = qc.test.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         qc.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         qc.instrument.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || qc.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quality Control & Compliance</h1>
          <p className="text-gray-600 mt-1">Internal QC, external QA, equipment management, and accreditation</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddQC}>
            <Plus className="h-4 w-4 mr-2" />
            Add QC
          </Button>
          <Button variant="outline" onClick={handleAddEquipment}>
            <Plus className="h-4 w-4 mr-2" />
            Add Equipment
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
                <p className="text-sm font-medium text-gray-600">QC Runs</p>
                <p className="text-3xl font-bold text-gray-900">{qcData.internalQC.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TestTube className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Internal QC runs</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Equipment</p>
                <p className="text-3xl font-bold text-gray-900">{qcData.equipment.length}</p>
              </div>
              <Settings className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Settings className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Active equipment</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Non-conformances</p>
                <p className="text-3xl font-bold text-gray-900">{qcData.nonConformances.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Open issues</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Training</p>
                <p className="text-3xl font-bold text-gray-900">{qcData.training.length}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Training records</span>
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
                  placeholder="Search tests, equipment, or technicians..."
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
                <SelectItem value="Pass">Pass</SelectItem>
                <SelectItem value="Fail">Fail</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="internal-qc" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="internal-qc">Internal QC</TabsTrigger>
          <TabsTrigger value="external-qa">External QA</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="non-conformances">Non-conformances</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="accreditation">Accreditation</TabsTrigger>
        </TabsList>

        {/* Internal QC Tab */}
        <TabsContent value="internal-qc">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Internal Quality Control ({filteredInternalQC.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredInternalQC.map((qc) => (
                    <div key={qc.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{qc.test}</h3>
                            <Badge variant="outline">{qc.level}</Badge>
                            <Badge className={getStatusColor(qc.status)}>
                              {qc.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {qc.deviation}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {qc.targetValue} • Measured: {qc.measuredValue} • Technician: {qc.technician}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instrument: {qc.instrument} • Lot: {qc.lotNumber} • Expiry: {qc.expiryDate}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Run Date: {new Date(qc.runDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {qc.notes}
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

        {/* External QA Tab */}
        <TabsContent value="external-qa">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                External Quality Assurance ({qcData.externalQA.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {qcData.externalQA.map((eqa) => (
                    <div key={eqa.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{eqa.program}</h3>
                            <Badge variant="outline">{eqa.test}</Badge>
                            <Badge className={getStatusColor(eqa.status)}>
                              {eqa.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {eqa.cycle}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Due: {eqa.dueDate} • Submission: {eqa.submissionDate || 'Pending'}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Score: {eqa.score || 'Pending'} • Results: {eqa.results}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Corrective Actions: {eqa.correctiveActions || 'None'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {eqa.notes}
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

        {/* Equipment Tab */}
        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Equipment Management ({qcData.equipment.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {qcData.equipment.map((equipment) => (
                    <div key={equipment.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{equipment.name}</h3>
                            <Badge variant="outline">{equipment.type}</Badge>
                            <Badge className={getStatusColor(equipment.status)}>
                              {equipment.status}
                            </Badge>
                            <Badge className={getStatusColor(equipment.performance)}>
                              {equipment.performance}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {equipment.location} • Maintenance: {equipment.maintenanceSchedule}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Calibration: {equipment.lastCalibration} • Next: {equipment.nextCalibration}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Issues: {equipment.issues} • Performance: {equipment.performance}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {equipment.notes}
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

        {/* Non-conformances Tab */}
        <TabsContent value="non-conformances">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Non-conformances ({qcData.nonConformances.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {qcData.nonConformances.map((nc) => (
                    <div key={nc.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{nc.type}</h3>
                            <Badge variant="outline">{nc.severity}</Badge>
                            <Badge className={getStatusColor(nc.status)}>
                              {nc.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {nc.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(nc.date).toLocaleString()} • Assigned: {nc.assignedTo}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Root Cause: {nc.rootCause}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Corrective Action: {nc.correctiveAction}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Preventive Action: {nc.preventiveAction}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {nc.notes}
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

        {/* Training Tab */}
        <TabsContent value="training">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Training & Competency ({qcData.training.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {qcData.training.map((training) => (
                    <div key={training.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{training.employee}</h3>
                            <Badge variant="outline">{training.course}</Badge>
                            <Badge className={getStatusColor(training.status)}>
                              {training.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Completion: {training.completionDate || 'Pending'} • Expiry: {training.expiryDate || 'N/A'}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Score: {training.score || 'Pending'} • Instructor: {training.instructor}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {training.notes}
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

        {/* Accreditation Tab */}
        <TabsContent value="accreditation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Accreditation Status ({qcData.accreditation.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {qcData.accreditation.map((acc) => (
                    <div key={acc.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{acc.standard}</h3>
                            <Badge variant="outline">{acc.requirement}</Badge>
                            <Badge className={getStatusColor(acc.status)}>
                              {acc.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Audit: {acc.lastAudit} • Next Audit: {acc.nextAudit}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Findings: {acc.findings} • Corrective Actions: {acc.correctiveActions}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {acc.notes}
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

      {/* Add QC Dialog */}
      <Dialog open={isQCOpen} onOpenChange={setIsQCOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit QC' : 'Add New QC'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="test">Test</Label>
                <Input id="test" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="level">Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Level 1">Level 1</SelectItem>
                    <SelectItem value="Level 2">Level 2</SelectItem>
                    <SelectItem value="Level 3">Level 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="target-value">Target Value</Label>
                <Input id="target-value" placeholder="Enter target value" />
              </div>
              <div>
                <Label htmlFor="measured-value">Measured Value</Label>
                <Input id="measured-value" placeholder="Enter measured value" />
              </div>
              <div>
                <Label htmlFor="technician">Technician</Label>
                <Input id="technician" placeholder="Enter technician name" />
              </div>
              <div>
                <Label htmlFor="instrument">Instrument</Label>
                <Input id="instrument" placeholder="Enter instrument name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter QC notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsQCOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsQCOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update QC' : 'Add QC'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Equipment Dialog */}
      <Dialog open={isEquipmentOpen} onOpenChange={setIsEquipmentOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Equipment' : 'Add New Equipment'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Equipment Name</Label>
                <Input id="name" placeholder="Enter equipment name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Input id="type" placeholder="Enter equipment type" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="maintenance-schedule">Maintenance Schedule</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter equipment notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsEquipmentOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsEquipmentOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Equipment' : 'Add Equipment'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
