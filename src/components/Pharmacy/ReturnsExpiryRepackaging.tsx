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
import { 
  AlertTriangle,
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
  AlertCircle,
  Clock,
  Calendar,
  User,
  Users,
  Pill,
  Stethoscope,
  Shield,
  Key,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  PieChart,
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
  Oganesson
} from 'lucide-react';
import { format } from 'date-fns';

export default function ReturnsExpiryRepackaging() {
  const [activeTab, setActiveTab] = useState('expiry');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isReturnOpen, setIsReturnOpen] = useState(false);
  const [isRepackagingOpen, setIsRepackagingOpen] = useState(false);
  const [isWastageOpen, setIsWastageOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock returns/expiry/repackaging data
  const returnsData = {
    expiryAlerts: [
      {
        id: 'EXP001',
        medicine: 'Paracetamol 500mg',
        batchNumber: 'BATCH001',
        expiryDate: '2024-02-15',
        daysToExpiry: 26,
        currentStock: 150,
        alertLevel: '30-day',
        status: 'Active',
        lastChecked: '2024-01-20',
        action: 'Move to front shelf'
      },
      {
        id: 'EXP002',
        medicine: 'Insulin Glargine',
        batchNumber: 'BATCH002',
        expiryDate: '2024-01-25',
        daysToExpiry: 5,
        currentStock: 8,
        alertLevel: 'Critical',
        status: 'Urgent',
        lastChecked: '2024-01-20',
        action: 'Return to supplier'
      },
      {
        id: 'EXP003',
        medicine: 'Amoxicillin 250mg',
        batchNumber: 'BATCH003',
        expiryDate: '2024-03-10',
        daysToExpiry: 49,
        currentStock: 75,
        alertLevel: '60-day',
        status: 'Active',
        lastChecked: '2024-01-20',
        action: 'Monitor closely'
      }
    ],
    returns: [
      {
        id: 'RET001',
        medicine: 'Paracetamol 500mg',
        batchNumber: 'BATCH001',
        quantity: 50,
        reason: 'Expired',
        returnDate: '2024-01-15',
        supplier: 'PharmaCorp Ltd.',
        status: 'Processed',
        creditNote: 'CN001',
        value: 125.00,
        returnType: 'Supplier Return'
      },
      {
        id: 'RET002',
        medicine: 'Damaged Vials',
        batchNumber: 'BATCH002',
        quantity: 10,
        reason: 'Damaged during transport',
        returnDate: '2024-01-18',
        supplier: 'MedSupply Co.',
        status: 'Pending',
        creditNote: 'CN002',
        value: 250.00,
        returnType: 'Damage Return'
      }
    ],
    repackaging: [
      {
        id: 'REP001',
        parentBatch: 'BATCH001',
        parentMedicine: 'Paracetamol 500mg',
        parentQuantity: 1000,
        repackDate: '2024-01-20',
        repackedBy: 'Pharmacist Sarah',
        childBatches: [
          { batch: 'BATCH001A', quantity: 100, unit: 'tablets' },
          { batch: 'BATCH001B', quantity: 200, unit: 'tablets' },
          { batch: 'BATCH001C', quantity: 300, unit: 'tablets' }
        ],
        wastage: 5,
        status: 'Completed',
        totalValue: 2500.00
      }
    ],
    wastage: [
      {
        id: 'WAS001',
        medicine: 'Paracetamol 500mg',
        batchNumber: 'BATCH001',
        quantity: 5,
        reason: 'Repackaging loss',
        date: '2024-01-20',
        recordedBy: 'Pharmacist Sarah',
        value: 12.50,
        status: 'Recorded'
      },
      {
        id: 'WAS002',
        medicine: 'Insulin Glargine',
        batchNumber: 'BATCH002',
        quantity: 2,
        reason: 'Broken vials',
        date: '2024-01-19',
        recordedBy: 'Assistant Mike',
        value: 50.00,
        status: 'Recorded'
      }
    ],
    creditNotes: [
      {
        id: 'CN001',
        supplier: 'PharmaCorp Ltd.',
        returnId: 'RET001',
        amount: 125.00,
        date: '2024-01-15',
        status: 'Issued',
        reason: 'Expired goods return'
      },
      {
        id: 'CN002',
        supplier: 'MedSupply Co.',
        returnId: 'RET002',
        amount: 250.00,
        date: '2024-01-18',
        status: 'Pending',
        reason: 'Damaged goods return'
      }
    ]
  };

  const handleCreateReturn = () => {
    setSelectedItem(null);
    setIsReturnOpen(true);
  };

  const handleRepackaging = () => {
    setIsRepackagingOpen(true);
  };

  const handleRecordWastage = () => {
    setIsWastageOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Processed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Recorded': return 'bg-blue-100 text-blue-800';
      case 'Issued': return 'bg-green-100 text-green-800';
      case '30-day': return 'bg-yellow-100 text-yellow-800';
      case '60-day': return 'bg-blue-100 text-blue-800';
      case '90-day': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertLevelColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-red-600';
      case '30-day': return 'text-yellow-600';
      case '60-day': return 'text-blue-600';
      case '90-day': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const filteredExpiryAlerts = returnsData.expiryAlerts.filter(alert => {
    const matchesSearch = alert.medicine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.batchNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus;
    const matchesType = filterType === 'all' || alert.alertLevel === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Returns, Expiry & Repackaging</h1>
          <p className="text-gray-600 mt-1">Manage expiry alerts, returns, repackaging, and wastage tracking</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleCreateReturn}>
            <Plus className="h-4 w-4 mr-2" />
            Create Return
          </Button>
          <Button variant="outline" onClick={handleRepackaging}>
            <Target className="h-4 w-4 mr-2" />
            Repackaging
          </Button>
          <Button variant="outline" onClick={handleRecordWastage}>
            <AlertTriangle className="h-4 w-4 mr-2" />
            Record Wastage
          </Button>
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
                <p className="text-sm font-medium text-gray-600">Expiry Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{returnsData.expiryAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Active alerts</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Returns</p>
                <p className="text-3xl font-bold text-gray-900">
                  {returnsData.returns.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <XCircle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Awaiting processing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Repackaging</p>
                <p className="text-3xl font-bold text-gray-900">{returnsData.repackaging.length}</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Completed this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Wastage Value</p>
                <p className="text-3xl font-bold text-gray-900">
                  {returnsData.wastage.reduce((sum, w) => sum + w.value, 0).toLocaleString()}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertCircle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">This month</span>
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
                  placeholder="Search medicines, batches, or suppliers..."
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
                <SelectItem value="Urgent">Urgent</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Processed">Processed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="30-day">30-day</SelectItem>
                <SelectItem value="60-day">60-day</SelectItem>
                <SelectItem value="90-day">90-day</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="expiry" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="expiry">Expiry Alerts</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
          <TabsTrigger value="repackaging">Repackaging</TabsTrigger>
          <TabsTrigger value="wastage">Wastage</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Expiry Alerts Tab */}
        <TabsContent value="expiry">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Expiry Alerts ({filteredExpiryAlerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredExpiryAlerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{alert.medicine}</h3>
                            <Badge className={getStatusColor(alert.status)}>
                              {alert.status}
                            </Badge>
                            <Badge className={getStatusColor(alert.alertLevel)}>
                              {alert.alertLevel}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Batch: {alert.batchNumber} • Expiry: {alert.expiryDate} • Days to Expiry: {alert.daysToExpiry}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {alert.currentStock} • Last Checked: {alert.lastChecked}
                          </div>
                          <div className="text-sm text-gray-600">
                            Action: {alert.action}
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

        {/* Returns Tab */}
        <TabsContent value="returns">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Returns ({returnsData.returns.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {returnsData.returns.map((returnItem) => (
                    <div key={returnItem.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">RET #{returnItem.id}</h3>
                            <Badge className={getStatusColor(returnItem.status)}>
                              {returnItem.status}
                            </Badge>
                            <Badge variant="outline">{returnItem.returnType}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Medicine: {returnItem.medicine} • Batch: {returnItem.batchNumber} • Quantity: {returnItem.quantity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reason: {returnItem.reason} • Supplier: {returnItem.supplier} • Date: {returnItem.returnDate}
                          </div>
                          <div className="text-sm text-gray-600">
                            Value: {returnItem.value} • Credit Note: {returnItem.creditNote}
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

        {/* Repackaging Tab */}
        <TabsContent value="repackaging">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Repackaging ({returnsData.repackaging.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {returnsData.repackaging.map((repack) => (
                    <div key={repack.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">REP #{repack.id}</h3>
                            <Badge className={getStatusColor(repack.status)}>
                              {repack.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Parent Batch: {repack.parentBatch} • Medicine: {repack.parentMedicine} • Quantity: {repack.parentQuantity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Repack Date: {repack.repackDate} • Repacked by: {repack.repackedBy}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Wastage: {repack.wastage} • Total Value: {repack.totalValue}
                          </div>
                          <div className="text-sm text-gray-600">
                            Child Batches: {repack.childBatches.map(child => `${child.batch} (${child.quantity} ${child.unit})`).join(', ')}
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

        {/* Wastage Tab */}
        <TabsContent value="wastage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Wastage Records ({returnsData.wastage.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {returnsData.wastage.map((wastage) => (
                    <div key={wastage.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">WAS #{wastage.id}</h3>
                            <Badge className={getStatusColor(wastage.status)}>
                              {wastage.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Medicine: {wastage.medicine} • Batch: {wastage.batchNumber} • Quantity: {wastage.quantity}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reason: {wastage.reason} • Date: {wastage.date} • Recorded by: {wastage.recordedBy}
                          </div>
                          <div className="text-sm text-gray-600">
                            Value: {wastage.value}
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
                <BarChart3 className="h-5 w-5 mr-2" />
                Returns & Expiry Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Returns and expiry reports would be displayed here</p>
                <p className="text-sm text-gray-500">Expiry trends, return analysis, and wastage reports</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Return Dialog */}
      <Dialog open={isReturnOpen} onOpenChange={setIsReturnOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create Return
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="return-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MED001">Paracetamol 500mg</SelectItem>
                    <SelectItem value="MED002">Amoxicillin 250mg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="return-batch">Batch Number</Label>
                <Input id="return-batch" placeholder="Enter batch number" />
              </div>
              <div>
                <Label htmlFor="return-quantity">Quantity</Label>
                <Input id="return-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div>
                <Label htmlFor="return-supplier">Supplier</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VEN001">PharmaCorp Ltd.</SelectItem>
                    <SelectItem value="VEN002">MedSupply Co.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="return-reason">Reason</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="damaged">Damaged</SelectItem>
                    <SelectItem value="defective">Defective</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="return-type">Return Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select return type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supplier">Supplier Return</SelectItem>
                    <SelectItem value="damage">Damage Return</SelectItem>
                    <SelectItem value="defective">Defective Return</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="return-notes">Notes</Label>
              <Textarea id="return-notes" placeholder="Enter return notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsReturnOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsReturnOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Create Return
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Repackaging Dialog */}
      <Dialog open={isRepackagingOpen} onOpenChange={setIsRepackagingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Repackaging
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="repack-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MED001">Paracetamol 500mg</SelectItem>
                    <SelectItem value="MED002">Amoxicillin 250mg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="repack-batch">Parent Batch</Label>
                <Input id="repack-batch" placeholder="Enter parent batch number" />
              </div>
              <div>
                <Label htmlFor="repack-quantity">Parent Quantity</Label>
                <Input id="repack-quantity" type="number" placeholder="Enter parent quantity" />
              </div>
              <div>
                <Label htmlFor="repack-date">Repack Date</Label>
                <Input id="repack-date" type="date" />
              </div>
              <div>
                <Label htmlFor="repack-by">Repacked By</Label>
                <Input id="repack-by" placeholder="Enter repacker name" />
              </div>
              <div>
                <Label htmlFor="repack-wastage">Wastage</Label>
                <Input id="repack-wastage" type="number" placeholder="Enter wastage amount" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="repack-children">Child Batches</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Add child batches created from repackaging</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Child Batch
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsRepackagingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsRepackagingOpen(false)}>
                <Target className="h-4 w-4 mr-1" />
                Process Repackaging
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Wastage Dialog */}
      <Dialog open={isWastageOpen} onOpenChange={setIsWastageOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Record Wastage
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="wastage-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MED001">Paracetamol 500mg</SelectItem>
                    <SelectItem value="MED002">Amoxicillin 250mg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="wastage-batch">Batch Number</Label>
                <Input id="wastage-batch" placeholder="Enter batch number" />
              </div>
              <div>
                <Label htmlFor="wastage-quantity">Quantity</Label>
                <Input id="wastage-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div>
                <Label htmlFor="wastage-reason">Reason</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repackaging">Repackaging Loss</SelectItem>
                    <SelectItem value="broken">Broken Vials</SelectItem>
                    <SelectItem value="spillage">Spillage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="wastage-date">Date</Label>
                <Input id="wastage-date" type="date" />
              </div>
              <div>
                <Label htmlFor="wastage-recorded-by">Recorded By</Label>
                <Input id="wastage-recorded-by" placeholder="Enter recorder name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="wastage-notes">Notes</Label>
              <Textarea id="wastage-notes" placeholder="Enter wastage notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsWastageOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsWastageOpen(false)}>
                <AlertTriangle className="h-4 w-4 mr-1" />
                Record Wastage
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
