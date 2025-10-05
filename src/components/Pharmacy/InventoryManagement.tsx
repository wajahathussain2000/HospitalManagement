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

export default function InventoryManagement() {
  const [activeTab, setActiveTab] = useState('inventory');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isBarcodeOpen, setIsBarcodeOpen] = useState(false);
  const [isBatchOpen, setIsBatchOpen] = useState(false);

  // Mock inventory data
  const inventoryData = {
    medicines: [
      {
        id: 'MED001',
        name: 'Paracetamol 500mg',
        category: 'Analgesic',
        manufacturer: 'PharmaCorp',
        batchNumber: 'BATCH001',
        expiryDate: '2025-12-31',
        currentStock: 150,
        minStock: 50,
        maxStock: 500,
        unitPrice: 2.50,
        totalValue: 375,
        status: 'In Stock',
        shelfLocation: 'A1-B2',
        barcode: '1234567890123',
        controlledDrug: false,
        lastUpdated: '2024-01-20'
      },
      {
        id: 'MED002',
        name: 'Amoxicillin 250mg',
        category: 'Antibiotic',
        manufacturer: 'MedSupply Co.',
        batchNumber: 'BATCH002',
        expiryDate: '2024-06-30',
        currentStock: 75,
        minStock: 30,
        maxStock: 200,
        unitPrice: 4.20,
        totalValue: 315,
        status: 'Low Stock',
        shelfLocation: 'B1-C3',
        barcode: '1234567890124',
        controlledDrug: false,
        lastUpdated: '2024-01-19'
      },
      {
        id: 'MED003',
        name: 'Insulin Glargine',
        category: 'Hormone',
        manufacturer: 'BioPharma',
        batchNumber: 'BATCH003',
        expiryDate: '2024-03-15',
        currentStock: 12,
        minStock: 20,
        maxStock: 100,
        unitPrice: 25.00,
        totalValue: 300,
        status: 'Critical',
        shelfLocation: 'C1-D2',
        barcode: '1234567890125',
        controlledDrug: true,
        lastUpdated: '2024-01-18'
      }
    ],
    batches: [
      {
        id: 'BATCH001',
        medicineId: 'MED001',
        batchNumber: 'BATCH001',
        quantity: 100,
        remainingQuantity: 60,
        expiryDate: '2025-12-31',
        purchaseDate: '2024-01-15',
        supplier: 'PharmaCorp',
        costPrice: 2.00,
        sellingPrice: 2.50,
        status: 'Active'
      },
      {
        id: 'BATCH002',
        medicineId: 'MED002',
        batchNumber: 'BATCH002',
        quantity: 50,
        remainingQuantity: 25,
        expiryDate: '2024-06-30',
        purchaseDate: '2024-01-10',
        supplier: 'MedSupply Co.',
        costPrice: 3.50,
        sellingPrice: 4.20,
        status: 'Active'
      }
    ],
    alerts: [
      {
        id: 'ALERT001',
        type: 'Low Stock',
        medicine: 'Paracetamol 500mg',
        currentStock: 15,
        minStock: 50,
        severity: 'High',
        message: 'Paracetamol 500mg is running low. Reorder immediately.',
        date: '2024-01-20'
      },
      {
        id: 'ALERT002',
        type: 'Expiry',
        medicine: 'Insulin Glargine',
        expiryDate: '2024-03-15',
        daysToExpiry: 54,
        severity: 'Critical',
        message: 'Insulin Glargine expires in 54 days. Move to front shelf.',
        date: '2024-01-20'
      }
    ],
    categories: [
      { name: 'Analgesic', count: 45, value: 12500 },
      { name: 'Antibiotic', count: 32, value: 8900 },
      { name: 'Hormone', count: 18, value: 15600 },
      { name: 'Cardiovascular', count: 28, value: 11200 },
      { name: 'Respiratory', count: 22, value: 7800 }
    ]
  };

  const handleBarcodeScan = () => {
    setIsBarcodeOpen(true);
  };

  const handleAddBatch = () => {
    setIsBatchOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Out of Stock': return 'bg-gray-100 text-gray-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMedicines = inventoryData.medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.batchNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || medicine.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || medicine.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory & Stock Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive inventory control with batch tracking and real-time alerts</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleBarcodeScan}>
            <Search className="h-4 w-4 mr-2" />
            Barcode Scan
          </Button>
          <Button variant="outline" onClick={handleAddBatch}>
            <Plus className="h-4 w-4 mr-2" />
            Add Batch
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
                <p className="text-sm font-medium text-gray-600">Total Medicines</p>
                <p className="text-3xl font-bold text-gray-900">{inventoryData.medicines.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">All systems operational</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                <p className="text-3xl font-bold text-gray-900">
                  {inventoryData.medicines.filter(m => m.status === 'Low Stock').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertCircle className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Need attention</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Alerts</p>
                <p className="text-3xl font-bold text-gray-900">
                  {inventoryData.alerts.filter(a => a.severity === 'Critical').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <AlertCircle className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Immediate action required</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-3xl font-bold text-gray-900">
                  {inventoryData.medicines.reduce((sum, med) => sum + med.totalValue, 0).toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Inventory value</span>
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
                  placeholder="Search medicines, batches, or barcodes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {inventoryData.categories.map(category => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="In Stock">In Stock</SelectItem>
                <SelectItem value="Low Stock">Low Stock</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Out of Stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="batches">Batches</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Inventory Tab */}
        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Medicine Inventory ({filteredMedicines.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{medicine.name}</h3>
                            <Badge className={getStatusColor(medicine.status)}>
                              {medicine.status}
                            </Badge>
                            {medicine.controlledDrug && (
                              <Badge className="bg-red-100 text-red-800">
                                Controlled
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Category: {medicine.category}</div>
                            <div>Manufacturer: {medicine.manufacturer}</div>
                            <div>Batch: {medicine.batchNumber}</div>
                            <div>Expiry: {medicine.expiryDate}</div>
                            <div>Stock: {medicine.currentStock} / {medicine.maxStock}</div>
                            <div>Location: {medicine.shelfLocation}</div>
                            <div>Price: {medicine.unitPrice}</div>
                            <div>Value: {medicine.totalValue}</div>
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
                            <Plus className="h-4 w-4 mr-1" />
                            Add Stock
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

        {/* Batches Tab */}
        <TabsContent value="batches">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Batch Tracking ({inventoryData.batches.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.batches.map((batch) => (
                    <div key={batch.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Batch {batch.batchNumber}</h3>
                            <Badge className={getStatusColor(batch.status)}>
                              {batch.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Quantity: {batch.quantity}</div>
                            <div>Remaining: {batch.remainingQuantity}</div>
                            <div>Expiry: {batch.expiryDate}</div>
                            <div>Purchase: {batch.purchaseDate}</div>
                            <div>Supplier: {batch.supplier}</div>
                            <div>Cost: {batch.costPrice}</div>
                            <div>Selling: {batch.sellingPrice}</div>
                            <div>Profit: {((batch.sellingPrice - batch.costPrice) * batch.remainingQuantity).toFixed(2)}</div>
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

        {/* Alerts Tab */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Stock Alerts ({inventoryData.alerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {inventoryData.alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{alert.medicine}</h3>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity}
                            </Badge>
                            <Badge variant="outline">{alert.type}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">{alert.message}</div>
                          <div className="text-sm text-gray-600">
                            Date: {alert.date}
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

        {/* Categories Tab */}
        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Medicine Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inventoryData.categories.map((category) => (
                  <div key={category.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <Badge variant="outline">{category.count} items</Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Total Value: {category.value.toLocaleString()}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(category.count / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Inventory Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Inventory reports and analytics would be displayed here</p>
                <p className="text-sm text-gray-500">Stock valuation, expiry reports, and performance metrics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Barcode Scan Dialog */}
      <Dialog open={isBarcodeOpen} onOpenChange={setIsBarcodeOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Barcode Scanner
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Scan barcode to search medicine</p>
              <p className="text-sm text-gray-500">Use barcode scanner or enter barcode manually</p>
              <Input placeholder="Enter barcode number..." className="mt-4" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsBarcodeOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsBarcodeOpen(false)}>
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Batch Dialog */}
      <Dialog open={isBatchOpen} onOpenChange={setIsBatchOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add New Batch
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="batch-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    {inventoryData.medicines.map(medicine => (
                      <SelectItem key={medicine.id} value={medicine.id}>
                        {medicine.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="batch-number">Batch Number</Label>
                <Input id="batch-number" placeholder="Enter batch number" />
              </div>
              <div>
                <Label htmlFor="batch-quantity">Quantity</Label>
                <Input id="batch-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div>
                <Label htmlFor="batch-expiry">Expiry Date</Label>
                <Input id="batch-expiry" type="date" />
              </div>
              <div>
                <Label htmlFor="batch-supplier">Supplier</Label>
                <Input id="batch-supplier" placeholder="Enter supplier name" />
              </div>
              <div>
                <Label htmlFor="batch-cost">Cost Price</Label>
                <Input id="batch-cost" type="number" placeholder="Enter cost price" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsBatchOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsBatchOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Batch
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
