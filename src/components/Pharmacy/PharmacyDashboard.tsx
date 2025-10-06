import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Pill, 
  Users, 
  Package, 
  BarChart3, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Activity,
  Shield,
  Settings,
  Bell,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Calendar,
  FileText,
  CreditCard,
  Star,
  Award,
  Target,
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
  Oganesson,
  FileText as FileTextIcon,
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

export default function PharmacyDashboard() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Mock pharmacy data
  const pharmacyStats = {
    totalPrescriptions: 1247,
    pendingPrescriptions: 23,
    completedToday: 89,
    inventoryAlerts: 5,
    revenue: 45680,
    patientsServed: 156,
    averageWaitTime: '8 minutes',
    stockLevel: 87
  };

  const recentPrescriptions = [
    {
      id: 'RX001',
      patientName: 'John Smith',
      medication: 'Lisinopril 10mg',
      status: 'Ready',
      time: '2:30 PM',
      doctor: 'Dr. Johnson'
    },
    {
      id: 'RX002',
      patientName: 'Sarah Wilson',
      medication: 'Metformin 500mg',
      status: 'Processing',
      time: '2:15 PM',
      doctor: 'Dr. Chen'
    },
    {
      id: 'RX003',
      patientName: 'Mike Davis',
      medication: 'Atorvastatin 20mg',
      status: 'Ready',
      time: '2:00 PM',
      doctor: 'Dr. Rodriguez'
    }
  ];

  const inventoryAlerts = [
    {
      medication: 'Insulin Glargine',
      currentStock: 12,
      minStock: 20,
      status: 'Low Stock'
    },
    {
      medication: 'Warfarin 5mg',
      currentStock: 8,
      minStock: 15,
      status: 'Critical'
    },
    {
      medication: 'Metformin 1000mg',
      currentStock: 25,
      minStock: 30,
      status: 'Low Stock'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pharmacy Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, {user?.firstName} {user?.lastName} - {user?.role.replace('_', ' ')}
          </p>
          <p className="text-sm text-gray-500">Today is {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
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
                <p className="text-sm font-medium text-gray-600">Total Prescriptions</p>
                <p className="text-3xl font-bold text-gray-900">{pharmacyStats.totalPrescriptions.toLocaleString()}</p>
              </div>
              <Pill className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+12% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Prescriptions</p>
                <p className="text-3xl font-bold text-gray-900">{pharmacyStats.pendingPrescriptions}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Awaiting processing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Today</p>
                <p className="text-3xl font-bold text-gray-900">{pharmacyStats.completedToday}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Successfully dispensed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Inventory Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{pharmacyStats.inventoryAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Low stock items</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue Today</p>
                <p className="text-2xl font-bold text-gray-900">${pharmacyStats.revenue.toLocaleString()}</p>
              </div>
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Patients Served</p>
                <p className="text-2xl font-bold text-gray-900">{pharmacyStats.patientsServed}</p>
              </div>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Wait Time</p>
                <p className="text-2xl font-bold text-gray-900">{pharmacyStats.averageWaitTime}</p>
              </div>
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stock Level</p>
                <p className="text-2xl font-bold text-gray-900">{pharmacyStats.stockLevel}%</p>
              </div>
              <Package className="h-6 w-6 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pill className="h-5 w-5 mr-2" />
              Recent Prescriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPrescriptions.map((prescription) => (
                <div key={prescription.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{prescription.patientName}</h4>
                      <Badge variant="outline" className="text-xs">
                        {prescription.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{prescription.medication}</p>
                    <p className="text-xs text-gray-500">Dr. {prescription.doctor} • {prescription.time}</p>
                  </div>
                  <Badge className={
                    prescription.status === 'Ready' ? 'bg-green-100 text-green-800' : 
                    prescription.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'
                  }>
                    {prescription.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventory Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Inventory Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventoryAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{alert.medication}</h4>
                    <p className="text-sm text-gray-600">
                      Current: {alert.currentStock} • Min: {alert.minStock}
                    </p>
                  </div>
                  <Badge className={
                    alert.status === 'Critical' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }>
                    {alert.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2">
              <Pill className="h-6 w-6" />
              <span className="text-sm">New Prescription</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Inventory</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Patients</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}