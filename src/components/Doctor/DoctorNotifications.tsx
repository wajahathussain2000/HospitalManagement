import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Bell,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  User,
  Users,
  Search,
  Filter,
  Settings,
  MoreHorizontal,
  Eye,
  Trash2,
  Archive,
  Star,
  Heart,
  MessageSquare,
  Phone,
  Video,
  Mail,
  FileText,
  Pill,
  TestTube,
  Stethoscope,
  Shield,
  Zap,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
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
  TestTube as TestTubeIcon,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Pill as PillIcon,
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
  Crown,
  Tiara,
  Diadem,
  Circlet,
  Ring,
  Gem,
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
  Oganesson
} from 'lucide-react';
import { format } from 'date-fns';

export default function DoctorNotifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  // Mock notifications data
  const notifications = [
    {
      id: 'NOT001',
      type: 'appointment',
      title: 'New Appointment Scheduled',
      message: 'John Smith has scheduled an appointment for tomorrow at 2:00 PM',
      priority: 'High',
      status: 'Unread',
      timestamp: '2024-01-20 14:30',
      patient: 'John Smith',
      appointmentTime: '2024-01-21 14:00',
      icon: Calendar
    },
    {
      id: 'NOT002',
      type: 'lab_result',
      title: 'Lab Results Available',
      message: 'Blood test results for Jane Doe are now available',
      priority: 'Medium',
      status: 'Unread',
      timestamp: '2024-01-20 13:45',
      patient: 'Jane Doe',
      testType: 'Blood Count',
      icon: TestTube
    },
    {
      id: 'NOT003',
      type: 'follow_up',
      title: 'Follow-up Reminder',
      message: 'Robert Wilson is due for a follow-up consultation',
      priority: 'Medium',
      status: 'Read',
      timestamp: '2024-01-20 12:15',
      patient: 'Robert Wilson',
      dueDate: '2024-01-22',
      icon: Clock
    },
    {
      id: 'NOT004',
      type: 'emergency',
      title: 'Emergency Alert',
      message: 'Patient Alice Brown requires immediate attention in Ward 3',
      priority: 'Critical',
      status: 'Unread',
      timestamp: '2024-01-20 11:30',
      patient: 'Alice Brown',
      location: 'Ward 3',
      icon: AlertCircle
    },
    {
      id: 'NOT005',
      type: 'prescription',
      title: 'Prescription Refill Request',
      message: 'Michael Chen has requested a refill for his medication',
      priority: 'Low',
      status: 'Read',
      timestamp: '2024-01-20 10:45',
      patient: 'Michael Chen',
      medication: 'Metformin',
      icon: Pill
    },
    {
      id: 'NOT006',
      type: 'hospital_announcement',
      title: 'Hospital Announcement',
      message: 'Monthly staff meeting scheduled for Friday at 3:00 PM',
      priority: 'Low',
      status: 'Read',
      timestamp: '2024-01-20 09:00',
      meetingTime: '2024-01-26 15:00',
      icon: Bell
    }
  ];

  const handleMarkAsRead = (notificationId: string) => {
    console.log('Marking notification as read:', notificationId);
  };

  const handleMarkAllAsRead = () => {
    console.log('Marking all notifications as read');
  };

  const handleDeleteNotification = (notificationId: string) => {
    console.log('Deleting notification:', notificationId);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Unread': return 'bg-blue-100 text-blue-800';
      case 'Read': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.patient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || notification.type === filterType;
    const matchesPriority = filterPriority === 'all' || notification.priority === filterPriority;
    return matchesSearch && matchesType && matchesPriority;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications & Alerts</h1>
          <p className="text-gray-600 mt-1">Stay updated with appointments, lab results, and hospital announcements</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleMarkAllAsRead}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="appointment">Appointments</SelectItem>
                <SelectItem value="lab_result">Lab Results</SelectItem>
                <SelectItem value="follow_up">Follow-ups</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="prescription">Prescriptions</SelectItem>
                <SelectItem value="hospital_announcement">Announcements</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        {/* All Notifications Tab */}
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  All Notifications ({filteredNotifications.length})
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {notifications.filter(n => n.status === 'Unread').length} Unread
                  </Badge>
                  <Badge variant="outline">
                    {notifications.filter(n => n.priority === 'Critical').length} Critical
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div key={notification.id} className={`border rounded-lg p-4 ${notification.status === 'Unread' ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg ${notification.status === 'Unread' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                            <notification.icon className={`h-5 w-5 ${notification.status === 'Unread' ? 'text-blue-600' : 'text-gray-600'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <Badge className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                              <Badge className={getStatusColor(notification.status)}>
                                {notification.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="text-xs text-gray-500">
                              {notification.timestamp}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {notification.status === 'Unread' && (
                            <Button size="sm" variant="outline" onClick={() => handleMarkAsRead(notification.id)}>
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Mark Read
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDeleteNotification(notification.id)}>
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
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

        {/* Unread Notifications Tab */}
        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Unread Notifications ({notifications.filter(n => n.status === 'Unread').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {notifications.filter(n => n.status === 'Unread').map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-blue-100">
                            <notification.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <Badge className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="text-xs text-gray-500">
                              {notification.timestamp}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleMarkAsRead(notification.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Mark Read
                          </Button>
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

        {/* Appointments Tab */}
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Appointment Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {notifications.filter(n => n.type === 'appointment').map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-green-100">
                            <Calendar className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <Badge className={getPriorityColor(notification.priority)}>
                                {notification.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="text-xs text-gray-500">
                              {notification.timestamp}
                            </div>
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

        {/* Alerts Tab */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {notifications.filter(n => n.priority === 'Critical').map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4 bg-red-50 border-red-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-red-100">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <Badge className="bg-red-100 text-red-800">
                                Critical
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="text-xs text-gray-500">
                              {notification.timestamp}
                            </div>
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
    </div>
  );
}
