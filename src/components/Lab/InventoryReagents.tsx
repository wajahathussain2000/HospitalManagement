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
  Package,
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

export default function InventoryReagents() {
  const [activeTab, setActiveTab] = useState('items');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [isMovementOpen, setIsMovementOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock inventory data
  const inventoryData = {
    items: [
      {
        id: 'ITM001',
        name: 'Glucose Reagent',
        category: 'Chemistry',
        type: 'Reagent',
        supplier: 'Roche Diagnostics',
        currentStock: 45,
        minStock: 20,
        maxStock: 100,
        unit: 'Bottles',
        unitPrice: 125.50,
        totalValue: 5647.50,
        location: 'Cold Storage A',
        expiryDate: '2024-06-15',
        lotNumber: 'GLU2024001',
        status: 'Active',
        lastUpdated: '2024-01-21T08:00:00Z',
        notes: 'High-quality glucose reagent'
      },
      {
        id: 'ITM002',
        name: 'Blood Collection Tubes',
        category: 'Consumables',
        type: 'Consumable',
        supplier: 'BD Biosciences',
        currentStock: 1200,
        minStock: 500,
        maxStock: 2000,
        unit: 'Tubes',
        unitPrice: 0.85,
        totalValue: 1020.00,
        location: 'Room Temperature Storage',
        expiryDate: '2025-12-31',
        lotNumber: 'BCT2024001',
        status: 'Active',
        lastUpdated: '2024-01-21T09:00:00Z',
        notes: 'Standard blood collection tubes'
      }
    ],
    movements: [
      {
        id: 'MOV001',
        itemId: 'ITM001',
        itemName: 'Glucose Reagent',
        type: 'Issue',
        quantity: 5,
        unit: 'Bottles',
        date: '2024-01-21T10:00:00Z',
        user: 'Lisa Brown',
        department: 'Chemistry Lab',
        reason: 'Daily testing',
        reference: 'REQ001',
        status: 'Completed',
        notes: 'Issued for routine testing'
      },
      {
        id: 'MOV002',
        itemId: 'ITM002',
        itemName: 'Blood Collection Tubes',
        type: 'Receipt',
        quantity: 500,
        unit: 'Tubes',
        date: '2024-01-21T11:00:00Z',
        user: 'Tom Davis',
        department: 'Central Lab',
        reason: 'Stock replenishment',
        reference: 'PO001',
        status: 'Completed',
        notes: 'New stock received'
      }
    ],
    reorders: [
      {
        id: 'REO001',
        itemId: 'ITM001',
        itemName: 'Glucose Reagent',
        currentStock: 15,
        minStock: 20,
        reorderQuantity: 50,
        supplier: 'Roche Diagnostics',
        status: 'Pending',
        requestedDate: '2024-01-21T12:00:00Z',
        requestedBy: 'Lisa Brown',
        priority: 'High',
        estimatedDelivery: '2024-01-25',
        notes: 'Critical reagent running low'
      },
      {
        id: 'REO002',
        itemId: 'ITM003',
        itemName: 'Creatinine Reagent',
        currentStock: 8,
        minStock: 15,
        reorderQuantity: 30,
        supplier: 'Siemens Healthineers',
        status: 'Approved',
        requestedDate: '2024-01-20T14:00:00Z',
        requestedBy: 'Mike Chen',
        priority: 'Normal',
        estimatedDelivery: '2024-01-24',
        notes: 'Regular reorder'
      }
    ],
    suppliers: [
      {
        id: 'SUP001',
        name: 'Roche Diagnostics',
        contact: 'John Smith',
        phone: '+1234567890',
        email: 'john.smith@roche.com',
        address: '123 Medical Drive, City',
        status: 'Active',
        rating: 4.8,
        lastOrder: '2024-01-15',
        totalOrders: 25,
        totalValue: 125000,
        notes: 'Reliable supplier with good quality'
      },
      {
        id: 'SUP002',
        name: 'BD Biosciences',
        contact: 'Sarah Johnson',
        phone: '+1234567891',
        email: 'sarah.johnson@bd.com',
        address: '456 Lab Street, City',
        status: 'Active',
        rating: 4.6,
        lastOrder: '2024-01-18',
        totalOrders: 18,
        totalValue: 85000,
        notes: 'Good supplier for consumables'
      }
    ],
    storage: [
      {
        id: 'STO001',
        name: 'Cold Storage A',
        type: 'Refrigerated',
        temperature: '2-8°C',
        capacity: 100,
        currentItems: 45,
        status: 'Active',
        location: 'Central Lab',
        lastMaintenance: '2024-01-15',
        nextMaintenance: '2024-02-15',
        notes: 'Primary cold storage unit'
      },
      {
        id: 'STO002',
        name: 'Room Temperature Storage',
        type: 'Ambient',
        temperature: '20-25°C',
        capacity: 200,
        currentItems: 120,
        status: 'Active',
        location: 'Central Lab',
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-02-10',
        notes: 'General storage area'
      }
    ],
    reports: [
      {
        id: 'RPT001',
        type: 'Stock Report',
        period: 'January 2024',
        totalItems: 150,
        totalValue: 125000,
        lowStock: 5,
        expired: 2,
        generatedDate: '2024-01-21T08:00:00Z',
        generatedBy: 'System',
        notes: 'Monthly inventory report'
      },
      {
        id: 'RPT002',
        type: 'Usage Report',
        period: 'January 2024',
        totalMovements: 45,
        totalIssued: 200,
        totalReceived: 180,
        generatedDate: '2024-01-21T09:00:00Z',
        generatedBy: 'System',
        notes: 'Monthly usage analysis'
      }
    ]
  };

  const handleAddItem = () => {
    setSelectedItem(null);
    setIsItemOpen(true);
  };

  const handleAddMovement = () => {
    setSelectedItem(null);
    setIsMovementOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Issue': return 'bg-blue-100 text-blue-800';
      case 'Receipt': return 'bg-green-100 text-green-800';
      case 'Return': return 'bg-orange-100 text-orange-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredItems = inventoryData.items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory & Reagents</h1>
          <p className="text-gray-600 mt-1">Items, lot/batch tracking, reorder management, and stock movements</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddItem}>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
          <Button variant="outline" onClick={handleAddMovement}>
            <Plus className="h-4 w-4 mr-2" />
            Add Movement
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
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-3xl font-bold text-gray-900">{inventoryData.items.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Package className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Inventory items</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-3xl font-bold text-gray-900">$6,667.50</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <BarChart3 className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Inventory value</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reorder Items</p>
                <p className="text-3xl font-bold text-gray-900">{inventoryData.reorders.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Pending reorders</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Suppliers</p>
                <p className="text-3xl font-bold text-gray-900">{inventoryData.suppliers.length}</p>
              </div>
              <Building className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Active suppliers</span>
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
                  placeholder="Search items, suppliers, or categories..."
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
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="items" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="movements">Movements</TabsTrigger>
          <TabsTrigger value="reorders">Reorders</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Items Tab */}
        <TabsContent value="items">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Inventory Items ({filteredItems.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <Badge variant="outline">{item.category}</Badge>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {item.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Supplier: {item.supplier} • Location: {item.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Stock: {item.currentStock} {item.unit} • Min: {item.minStock} • Max: {item.maxStock}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Unit Price: ${item.unitPrice} • Total Value: ${item.totalValue}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Lot: {item.lotNumber} • Expiry: {item.expiryDate}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {item.notes}
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

        {/* Movements Tab */}
        <TabsContent value="movements">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Stock Movements ({inventoryData.movements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.movements.map((movement) => (
                    <div key={movement.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{movement.itemName}</h3>
                            <Badge variant="outline">{movement.type}</Badge>
                            <Badge className={getStatusColor(movement.status)}>
                              {movement.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {movement.quantity} {movement.unit}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(movement.date).toLocaleString()} • User: {movement.user}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Department: {movement.department} • Reason: {movement.reason}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reference: {movement.reference}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {movement.notes}
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

        {/* Reorders Tab */}
        <TabsContent value="reorders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Reorder Management ({inventoryData.reorders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.reorders.map((reorder) => (
                    <div key={reorder.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{reorder.itemName}</h3>
                            <Badge variant="outline">{reorder.status}</Badge>
                            <Badge className={getStatusColor(reorder.priority)}>
                              {reorder.priority}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {reorder.reorderQuantity} units
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {reorder.currentStock} • Min Stock: {reorder.minStock}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Supplier: {reorder.supplier} • Requested: {new Date(reorder.requestedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Requested By: {reorder.requestedBy} • Delivery: {reorder.estimatedDelivery}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {reorder.notes}
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

        {/* Suppliers Tab */}
        <TabsContent value="suppliers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Supplier Management ({inventoryData.suppliers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.suppliers.map((supplier) => (
                    <div key={supplier.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{supplier.name}</h3>
                            <Badge variant="outline">{supplier.status}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {supplier.rating}★
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Contact: {supplier.contact} • Phone: {supplier.phone} • Email: {supplier.email}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Address: {supplier.address}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Order: {supplier.lastOrder} • Total Orders: {supplier.totalOrders} • Value: ${supplier.totalValue}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {supplier.notes}
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

        {/* Storage Tab */}
        <TabsContent value="storage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Storage Management ({inventoryData.storage.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.storage.map((storage) => (
                    <div key={storage.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{storage.name}</h3>
                            <Badge variant="outline">{storage.type}</Badge>
                            <Badge className={getStatusColor(storage.status)}>
                              {storage.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {storage.currentItems}/{storage.capacity}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Temperature: {storage.temperature} • Location: {storage.location}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Maintenance: {storage.lastMaintenance} • Next: {storage.nextMaintenance}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {storage.notes}
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

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Inventory Reports ({inventoryData.reports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.reports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.type}</h3>
                            <Badge variant="outline">{report.period}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {report.generatedBy}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Generated: {new Date(report.generatedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {report.type === 'Stock Report' ? 
                              `Total Items: ${report.totalItems} • Total Value: $${report.totalValue} • Low Stock: ${report.lowStock} • Expired: ${report.expired}` :
                              `Total Movements: ${report.totalMovements} • Issued: ${report.totalIssued} • Received: ${report.totalReceived}`
                            }
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {report.notes}
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

      {/* Add Item Dialog */}
      <Dialog open={isItemOpen} onOpenChange={setIsItemOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Item' : 'Add New Item'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Item Name</Label>
                <Input id="name" placeholder="Enter item name" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Consumables">Consumables</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Reagent">Reagent</SelectItem>
                    <SelectItem value="Consumable">Consumable</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="supplier">Supplier</Label>
                <Input id="supplier" placeholder="Enter supplier name" />
              </div>
              <div>
                <Label htmlFor="current-stock">Current Stock</Label>
                <Input id="current-stock" type="number" placeholder="Enter current stock" />
              </div>
              <div>
                <Label htmlFor="min-stock">Min Stock</Label>
                <Input id="min-stock" type="number" placeholder="Enter min stock" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter item notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsItemOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsItemOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Item' : 'Add Item'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Movement Dialog */}
      <Dialog open={isMovementOpen} onOpenChange={setIsMovementOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Movement' : 'Add New Movement'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="item">Item</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ITM001">Glucose Reagent</SelectItem>
                    <SelectItem value="ITM002">Blood Collection Tubes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type">Movement Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Issue">Issue</SelectItem>
                    <SelectItem value="Receipt">Receipt</SelectItem>
                    <SelectItem value="Return">Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div>
                <Label htmlFor="user">User</Label>
                <Input id="user" placeholder="Enter user name" />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Enter department" />
              </div>
              <div>
                <Label htmlFor="reason">Reason</Label>
                <Input id="reason" placeholder="Enter reason" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter movement notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsMovementOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsMovementOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Movement' : 'Add Movement'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
