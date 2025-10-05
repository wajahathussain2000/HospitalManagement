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
import { Progress } from '@/components/ui/progress';
import { 
  Rocket,
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
  Rocket as RocketIcon,
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

export default function GoLiveOperations() {
  const [activeTab, setActiveTab] = useState('migration');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isMigrationOpen, setIsMigrationOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock go-live data
  const goLiveData = {
    migrations: [
      {
        id: 'MIG001',
        name: 'Patient Data Migration',
        source: 'Legacy HIS',
        target: 'New LIS',
        status: 'Completed',
        progress: 100,
        records: 50000,
        migrated: 50000,
        errors: 0,
        startDate: '2024-01-15',
        endDate: '2024-01-20',
        notes: 'All patient data successfully migrated'
      },
      {
        id: 'MIG002',
        name: 'Test Results Migration',
        source: 'Old LIS',
        target: 'New LIS',
        status: 'In Progress',
        progress: 75,
        records: 100000,
        migrated: 75000,
        errors: 5,
        startDate: '2024-01-18',
        endDate: '2024-01-25',
        notes: 'Migration in progress, 5 records with errors'
      }
    ],
    validations: [
      {
        id: 'VAL001',
        name: 'Data Integrity Check',
        type: 'Automated',
        status: 'Passed',
        tests: 150,
        passed: 150,
        failed: 0,
        lastRun: '2024-01-21T10:00:00Z',
        nextRun: '2024-01-22T10:00:00Z',
        notes: 'All data integrity checks passed'
      },
      {
        id: 'VAL002',
        name: 'System Performance Test',
        type: 'Manual',
        status: 'In Progress',
        tests: 25,
        passed: 20,
        failed: 5,
        lastRun: '2024-01-21T09:00:00Z',
        nextRun: '2024-01-21T15:00:00Z',
        notes: 'Performance testing ongoing'
      }
    ],
    training: [
      {
        id: 'TRN001',
        name: 'LIS User Training',
        type: 'In-person',
        status: 'Scheduled',
        participants: 25,
        completed: 0,
        scheduledDate: '2024-01-25',
        duration: '4 hours',
        instructor: 'Dr. Sarah Johnson',
        location: 'Training Room A',
        notes: 'Comprehensive LIS training for all users'
      },
      {
        id: 'TRN002',
        name: 'Advanced Features Workshop',
        type: 'Online',
        status: 'Completed',
        participants: 15,
        completed: 15,
        scheduledDate: '2024-01-20',
        duration: '2 hours',
        instructor: 'Tech Support Team',
        location: 'Virtual',
        notes: 'Advanced features training completed'
      }
    ],
    goLivePlan: [
      {
        id: 'GLP001',
        phase: 'Pre-Go-Live',
        name: 'System Preparation',
        status: 'Completed',
        startDate: '2024-01-15',
        endDate: '2024-01-22',
        tasks: 10,
        completed: 10,
        responsible: 'IT Team',
        notes: 'All pre-go-live tasks completed'
      },
      {
        id: 'GLP002',
        phase: 'Go-Live',
        name: 'System Activation',
        status: 'Scheduled',
        startDate: '2024-01-25',
        endDate: '2024-01-26',
        tasks: 15,
        completed: 0,
        responsible: 'Project Team',
        notes: 'System go-live scheduled for January 25th'
      }
    ],
    operations: [
      {
        id: 'OPS001',
        name: 'System Monitoring',
        type: '24/7',
        status: 'Active',
        uptime: '99.9%',
        responseTime: '150ms',
        lastIncident: '2024-01-15',
        sla: '99.5%',
        notes: 'System monitoring active'
      },
      {
        id: 'OPS002',
        name: 'Backup & Recovery',
        type: 'Daily',
        status: 'Active',
        lastBackup: '2024-01-21T02:00:00Z',
        nextBackup: '2024-01-22T02:00:00Z',
        retention: '30 days',
        notes: 'Daily backups running successfully'
      }
    ],
    support: [
      {
        id: 'SUP001',
        ticket: 'TKT-001',
        title: 'Login Issues',
        priority: 'High',
        status: 'Open',
        reporter: 'Dr. John Smith',
        assignee: 'Tech Support',
        created: '2024-01-21T09:00:00Z',
        updated: '2024-01-21T10:00:00Z',
        notes: 'User experiencing login problems'
      },
      {
        id: 'SUP002',
        ticket: 'TKT-002',
        title: 'Report Generation',
        priority: 'Medium',
        status: 'In Progress',
        reporter: 'Lab Manager',
        assignee: 'Development Team',
        created: '2024-01-20T14:00:00Z',
        updated: '2024-01-21T11:00:00Z',
        notes: 'Report generation taking too long'
      }
    ]
  };

  const handleAddMigration = () => {
    setSelectedItem(null);
    setIsMigrationOpen(true);
  };

  const handleAddTraining = () => {
    setSelectedItem(null);
    setIsTrainingOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Passed': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMigrations = goLiveData.migrations.filter(migration => {
    const matchesSearch = migration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         migration.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || migration.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Go-Live & Operations</h1>
          <p className="text-gray-600 mt-1">Data migration, validation, training, and operational management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddMigration}>
            <Plus className="h-4 w-4 mr-2" />
            Add Migration
          </Button>
          <Button variant="outline" onClick={handleAddTraining}>
            <Plus className="h-4 w-4 mr-2" />
            Add Training
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
                <p className="text-sm font-medium text-gray-600">Migrations</p>
                <p className="text-3xl font-bold text-gray-900">{goLiveData.migrations.length}</p>
              </div>
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Database className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Data migration status</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Validations</p>
                <p className="text-3xl font-bold text-gray-900">{goLiveData.validations.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">System validation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Training Sessions</p>
                <p className="text-3xl font-bold text-gray-900">{goLiveData.training.length}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">User training</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Support Tickets</p>
                <p className="text-3xl font-bold text-gray-900">{goLiveData.support.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Active support</span>
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
                  placeholder="Search migrations, training, or support..."
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
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="migration" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="migration">Data Migration</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="go-live">Go-Live Plan</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        {/* Data Migration Tab */}
        <TabsContent value="migration">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Data Migration ({filteredMigrations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredMigrations.map((migration) => (
                    <div key={migration.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{migration.name}</h3>
                            <Badge variant="outline">{migration.source} → {migration.target}</Badge>
                            <Badge className={getStatusColor(migration.status)}>
                              {migration.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Records: {migration.migrated.toLocaleString()}/{migration.records.toLocaleString()} • 
                            Errors: {migration.errors} • 
                            Period: {migration.startDate} - {migration.endDate}
                          </div>
                          <div className="mb-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{migration.progress}%</span>
                            </div>
                            <Progress value={migration.progress} className="h-2" />
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {migration.notes}
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

        {/* Validation Tab */}
        <TabsContent value="validation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                System Validation ({goLiveData.validations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {goLiveData.validations.map((validation) => (
                    <div key={validation.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{validation.name}</h3>
                            <Badge variant="outline">{validation.type}</Badge>
                            <Badge className={getStatusColor(validation.status)}>
                              {validation.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {validation.passed}/{validation.tests} passed • 
                            Last Run: {new Date(validation.lastRun).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Next Run: {new Date(validation.nextRun).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {validation.notes}
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
                Training Management ({goLiveData.training.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {goLiveData.training.map((session) => (
                    <div key={session.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{session.name}</h3>
                            <Badge variant="outline">{session.type}</Badge>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {session.duration}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Participants: {session.completed}/{session.participants} • 
                            Date: {session.scheduledDate} • 
                            Duration: {session.duration}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Instructor: {session.instructor} • Location: {session.location}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {session.notes}
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

        {/* Go-Live Plan Tab */}
        <TabsContent value="go-live">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="h-5 w-5 mr-2" />
                Go-Live Plan ({goLiveData.goLivePlan.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {goLiveData.goLivePlan.map((phase) => (
                    <div key={phase.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{phase.name}</h3>
                            <Badge variant="outline">{phase.phase}</Badge>
                            <Badge className={getStatusColor(phase.status)}>
                              {phase.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Period: {phase.startDate} - {phase.endDate} • 
                            Tasks: {phase.completed}/{phase.tasks} • 
                            Responsible: {phase.responsible}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {phase.notes}
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

        {/* Operations Tab */}
        <TabsContent value="operations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Operations Management ({goLiveData.operations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {goLiveData.operations.map((operation) => (
                    <div key={operation.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{operation.name}</h3>
                            <Badge variant="outline">{operation.type}</Badge>
                            <Badge className={getStatusColor(operation.status)}>
                              {operation.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Uptime: {operation.uptime} • Response Time: {operation.responseTime} • 
                            SLA: {operation.sla}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Incident: {operation.lastIncident} • 
                            Last Backup: {operation.lastBackup ? new Date(operation.lastBackup).toLocaleString() : 'N/A'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {operation.notes}
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

        {/* Support Tab */}
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Support Tickets ({goLiveData.support.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {goLiveData.support.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                            <Badge variant="outline">{ticket.ticket}</Badge>
                            <Badge className={getStatusColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                            <Badge className={getStatusColor(ticket.status)}>
                              {ticket.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reporter: {ticket.reporter} • Assignee: {ticket.assignee}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Created: {new Date(ticket.created).toLocaleString()} • 
                            Updated: {new Date(ticket.updated).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {ticket.notes}
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

      {/* Add Migration Dialog */}
      <Dialog open={isMigrationOpen} onOpenChange={setIsMigrationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Migration' : 'Add New Migration'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Migration Name</Label>
                <Input id="name" placeholder="Enter migration name" />
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
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter migration notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsMigrationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsMigrationOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Migration' : 'Add Migration'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Training Dialog */}
      <Dialog open={isTrainingOpen} onOpenChange={setIsTrainingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Training' : 'Add New Training'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Training Name</Label>
                <Input id="name" placeholder="Enter training name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In-person">In-person</SelectItem>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Scheduled Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="Enter duration" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter training notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsTrainingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsTrainingOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Training' : 'Add Training'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
