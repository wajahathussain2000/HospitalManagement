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
  Globe,
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
  Globe as GlobeIcon,
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

export default function PortalsNotifications() {
  const [activeTab, setActiveTab] = useState('doctor-portal');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock portals data
  const portalsData = {
    doctorPortal: [
      {
        id: 'DOC001',
        doctorName: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        lastLogin: '2024-01-21T10:30:00Z',
        ordersToday: 15,
        resultsViewed: 12,
        pendingResults: 3,
        status: 'Active',
        permissions: ['Order Tests', 'View Results', 'Patient Management'],
        notes: 'Frequent user with high activity'
      },
      {
        id: 'DOC002',
        doctorName: 'Dr. Michael Chen',
        specialty: 'Neurology',
        lastLogin: '2024-01-21T09:15:00Z',
        ordersToday: 8,
        resultsViewed: 6,
        pendingResults: 2,
        status: 'Active',
        permissions: ['Order Tests', 'View Results', 'Patient Management'],
        notes: 'Regular user with good engagement'
      }
    ],
    patientPortal: [
      {
        id: 'PAT001',
        patientName: 'John Doe',
        email: 'john.doe@email.com',
        lastLogin: '2024-01-21T11:00:00Z',
        testsOrdered: 3,
        resultsAvailable: 2,
        pendingResults: 1,
        status: 'Active',
        notifications: ['Email', 'SMS'],
        notes: 'Engaged patient with regular checkups'
      },
      {
        id: 'PAT002',
        patientName: 'Jane Smith',
        email: 'jane.smith@email.com',
        lastLogin: '2024-01-20T14:30:00Z',
        testsOrdered: 5,
        resultsAvailable: 4,
        pendingResults: 1,
        status: 'Active',
        notifications: ['Email'],
        notes: 'Health-conscious patient'
      }
    ],
    notifications: [
      {
        id: 'NOT001',
        type: 'Test Result',
        title: 'CBC Results Available',
        message: 'Your Complete Blood Count results are now available for review.',
        recipient: 'John Doe',
        status: 'Sent',
        channel: 'Email',
        sentDate: '2024-01-21T10:00:00Z',
        readDate: '2024-01-21T10:15:00Z',
        priority: 'Normal',
        notes: 'Standard result notification'
      },
      {
        id: 'NOT002',
        type: 'Appointment Reminder',
        title: 'Lab Appointment Tomorrow',
        message: 'Reminder: You have a lab appointment scheduled for tomorrow at 10:00 AM.',
        recipient: 'Jane Smith',
        status: 'Sent',
        channel: 'SMS',
        sentDate: '2024-01-21T09:00:00Z',
        readDate: null,
        priority: 'High',
        notes: 'Appointment reminder'
      }
    ],
    announcements: [
      {
        id: 'ANN001',
        title: 'New Test Available',
        content: 'We are now offering advanced genetic testing for personalized medicine.',
        type: 'General',
        status: 'Published',
        publishDate: '2024-01-21T08:00:00Z',
        expiryDate: '2024-02-21T08:00:00Z',
        targetAudience: 'All Users',
        views: 125,
        author: 'Lab Admin',
        notes: 'Important announcement for all users'
      },
      {
        id: 'ANN002',
        title: 'System Maintenance',
        content: 'Scheduled maintenance will occur on Sunday from 2:00 AM to 4:00 AM.',
        type: 'System',
        status: 'Published',
        publishDate: '2024-01-20T16:00:00Z',
        expiryDate: '2024-01-22T16:00:00Z',
        targetAudience: 'All Users',
        views: 89,
        author: 'IT Admin',
        notes: 'System maintenance notification'
      }
    ],
    analytics: [
      {
        id: 'ANA001',
        metric: 'Portal Usage',
        period: 'January 2024',
        doctorLogins: 245,
        patientLogins: 189,
        totalSessions: 434,
        averageSessionTime: '12.5 minutes',
        mostActiveHour: '10:00 AM',
        notes: 'Strong portal engagement'
      },
      {
        id: 'ANA002',
        metric: 'Notification Delivery',
        period: 'January 2024',
        totalSent: 1250,
        delivered: 1180,
        opened: 945,
        clickRate: '80.1%',
        bounceRate: '5.6%',
        notes: 'Excellent delivery rates'
      }
    ],
    settings: [
      {
        id: 'SET001',
        category: 'Email Notifications',
        enabled: true,
        settings: {
          testResults: true,
          appointmentReminders: true,
          systemUpdates: false,
          promotional: false
        },
        lastUpdated: '2024-01-21T08:00:00Z',
        notes: 'Standard email notification settings'
      },
      {
        id: 'SET002',
        category: 'SMS Notifications',
        enabled: true,
        settings: {
          urgentResults: true,
          appointmentReminders: true,
          systemAlerts: true,
          promotional: false
        },
        lastUpdated: '2024-01-21T08:00:00Z',
        notes: 'SMS for urgent communications only'
      }
    ]
  };

  const handleAddNotification = () => {
    setSelectedItem(null);
    setIsNotificationOpen(true);
  };

  const handleAddAnnouncement = () => {
    setSelectedItem(null);
    setIsAnnouncementOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Sent': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'General': return 'bg-blue-100 text-blue-800';
      case 'System': return 'bg-orange-100 text-orange-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDoctorPortal = portalsData.doctorPortal.filter(doctor => {
    const matchesSearch = doctor.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || doctor.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portals & Notifications</h1>
          <p className="text-gray-600 mt-1">Doctor portal, patient portal, and notification management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddNotification}>
            <Plus className="h-4 w-4 mr-2" />
            Add Notification
          </Button>
          <Button variant="outline" onClick={handleAddAnnouncement}>
            <Plus className="h-4 w-4 mr-2" />
            Add Announcement
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
                <p className="text-sm font-medium text-gray-600">Doctor Users</p>
                <p className="text-3xl font-bold text-gray-900">{portalsData.doctorPortal.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active doctors</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Patient Users</p>
                <p className="text-3xl font-bold text-gray-900">{portalsData.patientPortal.length}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Active patients</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Notifications</p>
                <p className="text-3xl font-bold text-gray-900">{portalsData.notifications.length}</p>
              </div>
              <Bell className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Bell className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Sent notifications</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Announcements</p>
                <p className="text-3xl font-bold text-gray-900">{portalsData.announcements.length}</p>
              </div>
              <Globe className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Globe className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Published announcements</span>
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
                  placeholder="Search users, notifications, or announcements..."
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
                <SelectItem value="Sent">Sent</SelectItem>
                <SelectItem value="Published">Published</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="doctor-portal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="doctor-portal">Doctor Portal</TabsTrigger>
          <TabsTrigger value="patient-portal">Patient Portal</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Doctor Portal Tab */}
        <TabsContent value="doctor-portal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Doctor Portal Users ({filteredDoctorPortal.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredDoctorPortal.map((doctor) => (
                    <div key={doctor.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{doctor.doctorName}</h3>
                            <Badge variant="outline">{doctor.specialty}</Badge>
                            <Badge className={getStatusColor(doctor.status)}>
                              {doctor.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Login: {new Date(doctor.lastLogin).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Orders Today: {doctor.ordersToday} • Results Viewed: {doctor.resultsViewed} • Pending: {doctor.pendingResults}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Permissions: {doctor.permissions.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {doctor.notes}
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

        {/* Patient Portal Tab */}
        <TabsContent value="patient-portal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Portal Users ({portalsData.patientPortal.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {portalsData.patientPortal.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{patient.patientName}</h3>
                            <Badge variant="outline">{patient.email}</Badge>
                            <Badge className={getStatusColor(patient.status)}>
                              {patient.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Login: {new Date(patient.lastLogin).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests Ordered: {patient.testsOrdered} • Results Available: {patient.resultsAvailable} • Pending: {patient.pendingResults}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Notifications: {patient.notifications.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {patient.notes}
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

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Management ({portalsData.notifications.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {portalsData.notifications.map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{notification.title}</h3>
                            <Badge variant="outline">{notification.type}</Badge>
                            <Badge className={getStatusColor(notification.status)}>
                              {notification.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {notification.channel}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {notification.message}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Recipient: {notification.recipient} • Priority: {notification.priority}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Sent: {new Date(notification.sentDate).toLocaleString()} • Read: {notification.readDate ? new Date(notification.readDate).toLocaleString() : 'Not read'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {notification.notes}
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

        {/* Announcements Tab */}
        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Announcements ({portalsData.announcements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {portalsData.announcements.map((announcement) => (
                    <div key={announcement.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                            <Badge variant="outline">{announcement.type}</Badge>
                            <Badge className={getStatusColor(announcement.status)}>
                              {announcement.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {announcement.views} views
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {announcement.content}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Target: {announcement.targetAudience} • Author: {announcement.author}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Published: {new Date(announcement.publishDate).toLocaleString()} • Expiry: {new Date(announcement.expiryDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {announcement.notes}
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

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Portal Analytics ({portalsData.analytics.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {portalsData.analytics.map((analytic) => (
                    <div key={analytic.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{analytic.metric}</h3>
                            <Badge variant="outline">{analytic.period}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {analytic.metric === 'Portal Usage' ? 
                              `Doctor Logins: ${analytic.doctorLogins} • Patient Logins: ${analytic.patientLogins} • Total Sessions: ${analytic.totalSessions}` :
                              `Total Sent: ${analytic.totalSent} • Delivered: ${analytic.delivered} • Opened: ${analytic.opened}`
                            }
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {analytic.metric === 'Portal Usage' ? 
                              `Avg Session: ${analytic.averageSessionTime} • Most Active: ${analytic.mostActiveHour}` :
                              `Click Rate: ${analytic.clickRate} • Bounce Rate: ${analytic.bounceRate}`
                            }
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {analytic.notes}
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

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Notification Settings ({portalsData.settings.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {portalsData.settings.map((setting) => (
                    <div key={setting.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{setting.category}</h3>
                            <Badge className={getStatusColor(setting.enabled ? 'Active' : 'Inactive')}>
                              {setting.enabled ? 'Enabled' : 'Disabled'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Updated: {new Date(setting.lastUpdated).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Settings: {Object.entries(setting.settings).map(([key, value]) => `${key}: ${value}`).join(', ')}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {setting.notes}
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

      {/* Add Notification Dialog */}
      <Dialog open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Notification' : 'Add New Notification'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Test Result">Test Result</SelectItem>
                    <SelectItem value="Appointment Reminder">Appointment Reminder</SelectItem>
                    <SelectItem value="System Alert">System Alert</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter notification title" />
              </div>
              <div>
                <Label htmlFor="recipient">Recipient</Label>
                <Input id="recipient" placeholder="Enter recipient" />
              </div>
              <div>
                <Label htmlFor="channel">Channel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="SMS">SMS</SelectItem>
                    <SelectItem value="Push">Push</SelectItem>
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
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter notification message" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter notification notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsNotificationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsNotificationOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Notification' : 'Add Notification'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Announcement Dialog */}
      <Dialog open={isAnnouncementOpen} onOpenChange={setIsAnnouncementOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Announcement' : 'Add New Announcement'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter announcement title" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="System">System</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                    <SelectItem value="Update">Update</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="target-audience">Target Audience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Users">All Users</SelectItem>
                    <SelectItem value="Doctors Only">Doctors Only</SelectItem>
                    <SelectItem value="Patients Only">Patients Only</SelectItem>
                    <SelectItem value="Staff Only">Staff Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input id="author" placeholder="Enter author name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" placeholder="Enter announcement content" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter announcement notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsAnnouncementOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAnnouncementOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Announcement' : 'Add Announcement'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
