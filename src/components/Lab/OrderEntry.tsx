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
  ClipboardList,
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

export default function OrderEntry() {
  const [activeTab, setActiveTab] = useState('orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock order entry data
  const orderData = {
    orders: [
      {
        id: 'ORD001',
        patientId: 'P12345',
        patientName: 'John Doe',
        mrn: 'MRN123456',
        dob: '1985-03-15',
        gender: 'Male',
        phone: '+1-555-0123',
        email: 'john.doe@email.com',
        doctor: 'Dr. Sarah Johnson',
        department: 'Internal Medicine',
        orderDate: '2024-01-20T10:30:00Z',
        priority: 'Routine',
        status: 'Pending',
        tests: ['CBC', 'BMP', 'Lipid Panel'],
        totalPrice: 95.00,
        insurance: 'Blue Cross Blue Shield',
        authorization: 'AUTH123456',
        notes: 'Patient has diabetes, monitor glucose levels',
        fasting: true,
        collectionTime: '2024-01-21T08:00:00Z',
        location: 'Central Lab'
      },
      {
        id: 'ORD002',
        patientId: 'P12346',
        patientName: 'Jane Smith',
        mrn: 'MRN123457',
        dob: '1990-07-22',
        gender: 'Female',
        phone: '+1-555-0124',
        email: 'jane.smith@email.com',
        doctor: 'Dr. Michael Chen',
        department: 'Cardiology',
        orderDate: '2024-01-20T11:15:00Z',
        priority: 'STAT',
        status: 'In Progress',
        tests: ['Troponin I', 'CK-MB', 'BNP'],
        totalPrice: 150.00,
        insurance: 'Aetna',
        authorization: 'AUTH123457',
        notes: 'Chest pain, rule out MI',
        fasting: false,
        collectionTime: '2024-01-20T11:30:00Z',
        location: 'Emergency Lab'
      }
    ],
    schedules: [
      {
        id: 'SCH001',
        patientId: 'P12345',
        patientName: 'John Doe',
        test: 'Fasting Blood Glucose',
        scheduledDate: '2024-01-21',
        scheduledTime: '08:00',
        location: 'Central Lab',
        status: 'Scheduled',
        instructions: 'Fast for 8-12 hours before test',
        reminderSent: true,
        collectionType: 'In-House'
      },
      {
        id: 'SCH002',
        patientId: 'P12347',
        patientName: 'Bob Wilson',
        test: 'Home Collection - CBC',
        scheduledDate: '2024-01-22',
        scheduledTime: '10:00',
        location: 'Home',
        status: 'Confirmed',
        instructions: 'Home collection service',
        reminderSent: false,
        collectionType: 'Home Collection'
      }
    ],
    requisitions: [
      {
        id: 'REQ001',
        orderId: 'ORD001',
        patientName: 'John Doe',
        tests: ['CBC', 'BMP', 'Lipid Panel'],
        status: 'Generated',
        generatedDate: '2024-01-20T10:35:00Z',
        printed: false,
        barcode: 'BC001234567890'
      },
      {
        id: 'REQ002',
        orderId: 'ORD002',
        patientName: 'Jane Smith',
        tests: ['Troponin I', 'CK-MB', 'BNP'],
        status: 'Printed',
        generatedDate: '2024-01-20T11:20:00Z',
        printed: true,
        barcode: 'BC001234567891'
      }
    ],
    validations: [
      {
        id: 'VAL001',
        orderId: 'ORD001',
        validationType: 'Demographics',
        status: 'Passed',
        message: 'Patient demographics validated successfully',
        timestamp: '2024-01-20T10:32:00Z'
      },
      {
        id: 'VAL002',
        orderId: 'ORD001',
        validationType: 'Insurance',
        status: 'Passed',
        message: 'Insurance eligibility confirmed',
        timestamp: '2024-01-20T10:33:00Z'
      },
      {
        id: 'VAL003',
        orderId: 'ORD002',
        validationType: 'Duplicate Check',
        status: 'Failed',
        message: 'Similar order found within 24 hours',
        timestamp: '2024-01-20T11:18:00Z'
      }
    ]
  };

  const handleAddOrder = () => {
    setSelectedItem(null);
    setIsOrderOpen(true);
  };

  const handleSchedule = () => {
    setSelectedItem(null);
    setIsScheduleOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Scheduled': return 'bg-purple-100 text-purple-800';
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Generated': return 'bg-blue-100 text-blue-800';
      case 'Printed': return 'bg-green-100 text-green-800';
      case 'Passed': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'STAT': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Routine': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orderData.orders.filter(order => {
    const matchesSearch = order.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || order.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Order Entry & Scheduling</h1>
          <p className="text-gray-600 mt-1">Comprehensive order management with validation, scheduling, and requisitions</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddOrder}>
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </Button>
          <Button variant="outline" onClick={handleSchedule}>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
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
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{orderData.orders.length}</p>
              </div>
              <ClipboardList className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <ClipboardList className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Lab orders</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Scheduled</p>
                <p className="text-3xl font-bold text-gray-900">{orderData.schedules.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Scheduled tests</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Requisitions</p>
                <p className="text-3xl font-bold text-gray-900">{orderData.requisitions.length}</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Generated forms</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Validations</p>
                <p className="text-3xl font-bold text-gray-900">{orderData.validations.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Validation checks</span>
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
                  placeholder="Search orders, patients, or doctors..."
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
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="STAT">STAT</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Routine">Routine</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
          <TabsTrigger value="requisitions">Requisitions</TabsTrigger>
          <TabsTrigger value="validations">Validations</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="h-5 w-5 mr-2" />
                Lab Orders ({filteredOrders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{order.patientName}</h3>
                            <Badge variant="outline">{order.mrn}</Badge>
                            <Badge className={getPriorityColor(order.priority)}>
                              {order.priority}
                            </Badge>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Doctor: {order.doctor} • Department: {order.department} • DOB: {order.dob}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {order.tests.join(', ')} • Price: {order.totalPrice}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Insurance: {order.insurance} • Auth: {order.authorization}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collection: {new Date(order.collectionTime).toLocaleString()} • Location: {order.location}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {order.notes} • Fasting: {order.fasting ? 'Yes' : 'No'}
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

        {/* Schedules Tab */}
        <TabsContent value="schedules">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Scheduled Tests ({orderData.schedules.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {orderData.schedules.map((schedule) => (
                    <div key={schedule.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{schedule.patientName}</h3>
                            <Badge variant="outline">{schedule.test}</Badge>
                            <Badge className={getStatusColor(schedule.status)}>
                              {schedule.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {schedule.scheduledDate} • Time: {schedule.scheduledTime} • Location: {schedule.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Collection Type: {schedule.collectionType} • Reminder: {schedule.reminderSent ? 'Sent' : 'Not Sent'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Instructions: {schedule.instructions}
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

        {/* Requisitions Tab */}
        <TabsContent value="requisitions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Requisitions ({orderData.requisitions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {orderData.requisitions.map((req) => (
                    <div key={req.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{req.patientName}</h3>
                            <Badge variant="outline">{req.orderId}</Badge>
                            <Badge className={getStatusColor(req.status)}>
                              {req.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {req.tests.join(', ')} • Barcode: {req.barcode}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Generated: {new Date(req.generatedDate).toLocaleString()} • Printed: {req.printed ? 'Yes' : 'No'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Print
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

        {/* Validations Tab */}
        <TabsContent value="validations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Validation Results ({orderData.validations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {orderData.validations.map((validation) => (
                    <div key={validation.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{validation.validationType}</h3>
                            <Badge variant="outline">{validation.orderId}</Badge>
                            <Badge className={getStatusColor(validation.status)}>
                              {validation.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {validation.message}
                          </div>
                          <div className="text-sm text-gray-600">
                            Time: {new Date(validation.timestamp).toLocaleString()}
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
      </Tabs>

      {/* Add Order Dialog */}
      <Dialog open={isOrderOpen} onOpenChange={setIsOrderOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Order' : 'Add New Order'}
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
                <Label htmlFor="doctor">Ordering Doctor</Label>
                <Input id="doctor" placeholder="Enter doctor name" />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Internal Medicine">Internal Medicine</SelectItem>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Endocrinology">Endocrinology</SelectItem>
                    <SelectItem value="Gastroenterology">Gastroenterology</SelectItem>
                    <SelectItem value="Neurology">Neurology</SelectItem>
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
                    <SelectItem value="STAT">STAT</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Routine">Routine</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="collection-time">Collection Time</Label>
                <Input id="collection-time" type="datetime-local" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="tests">Tests</Label>
              <Textarea id="tests" placeholder="Enter tests to order" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter any special instructions or notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsOrderOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOrderOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Order' : 'Create Order'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Schedule' : 'Schedule Test'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="schedule-patient">Patient</Label>
                <Input id="schedule-patient" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="schedule-test">Test</Label>
                <Input id="schedule-test" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="schedule-date">Date</Label>
                <Input id="schedule-date" type="date" />
              </div>
              <div>
                <Label htmlFor="schedule-time">Time</Label>
                <Input id="schedule-time" type="time" />
              </div>
              <div>
                <Label htmlFor="schedule-location">Location</Label>
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
                <Label htmlFor="collection-type">Collection Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select collection type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In-House">In-House</SelectItem>
                    <SelectItem value="Home Collection">Home Collection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea id="instructions" placeholder="Enter collection instructions" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsScheduleOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsScheduleOpen(false)}>
                <Calendar className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Schedule' : 'Schedule Test'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
