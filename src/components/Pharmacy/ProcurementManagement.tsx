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
  Building2,
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

export default function ProcurementManagement() {
  const [activeTab, setActiveTab] = useState('vendors');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isVendorOpen, setIsVendorOpen] = useState(false);
  const [isPOOpen, setIsPOOpen] = useState(false);
  const [isGRNOpen, setIsGRNOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<any>(null);

  // Mock procurement data
  const procurementData = {
    vendors: [
      {
        id: 'VEN001',
        name: 'PharmaCorp Ltd.',
        contactPerson: 'John Smith',
        email: 'john@pharmacorp.com',
        phone: '+1 (555) 123-4567',
        address: '123 Pharma Street, Medical City, MC 12345',
        license: 'PHAR-LIC-001',
        rating: 4.8,
        reliability: 'Excellent',
        paymentTerms: 'Net 30',
        deliveryTime: '3-5 days',
        specialties: ['Analgesics', 'Antibiotics', 'Cardiovascular'],
        totalOrders: 45,
        totalValue: 125000,
        lastOrder: '2024-01-15',
        status: 'Active'
      },
      {
        id: 'VEN002',
        name: 'MedSupply Co.',
        contactPerson: 'Sarah Johnson',
        email: 'sarah@medsupply.com',
        phone: '+1 (555) 234-5678',
        address: '456 Medical Ave, Health Town, HT 67890',
        license: 'MED-LIC-002',
        rating: 4.5,
        reliability: 'Good',
        paymentTerms: 'Net 15',
        deliveryTime: '2-3 days',
        specialties: ['Hormones', 'Vitamins', 'Supplements'],
        totalOrders: 32,
        totalValue: 89000,
        lastOrder: '2024-01-18',
        status: 'Active'
      },
      {
        id: 'VEN003',
        name: 'BioPharma Solutions',
        contactPerson: 'Mike Chen',
        email: 'mike@biopharma.com',
        phone: '+1 (555) 345-6789',
        address: '789 Bio Street, Science City, SC 54321',
        license: 'BIO-LIC-003',
        rating: 4.2,
        reliability: 'Fair',
        paymentTerms: 'Net 45',
        deliveryTime: '5-7 days',
        specialties: ['Biologics', 'Specialty Drugs'],
        totalOrders: 18,
        totalValue: 156000,
        lastOrder: '2024-01-10',
        status: 'Active'
      }
    ],
    purchaseOrders: [
      {
        id: 'PO001',
        vendorId: 'VEN001',
        vendorName: 'PharmaCorp Ltd.',
        orderDate: '2024-01-20',
        expectedDelivery: '2024-01-25',
        status: 'Pending',
        totalAmount: 15000,
        items: [
          { name: 'Paracetamol 500mg', quantity: 100, unitPrice: 2.50, total: 250 },
          { name: 'Amoxicillin 250mg', quantity: 50, unitPrice: 4.20, total: 210 }
        ],
        approvedBy: 'Dr. Sarah Johnson',
        approvedDate: '2024-01-20'
      },
      {
        id: 'PO002',
        vendorId: 'VEN002',
        vendorName: 'MedSupply Co.',
        orderDate: '2024-01-18',
        expectedDelivery: '2024-01-22',
        status: 'Approved',
        totalAmount: 8500,
        items: [
          { name: 'Insulin Glargine', quantity: 20, unitPrice: 25.00, total: 500 },
          { name: 'Metformin 500mg', quantity: 100, unitPrice: 1.80, total: 180 }
        ],
        approvedBy: 'Dr. Michael Chen',
        approvedDate: '2024-01-18'
      }
    ],
    grns: [
      {
        id: 'GRN001',
        poId: 'PO001',
        vendorName: 'PharmaCorp Ltd.',
        receivedDate: '2024-01-25',
        receivedBy: 'Pharmacist Sarah',
        status: 'Received',
        items: [
          { name: 'Paracetamol 500mg', ordered: 100, received: 100, condition: 'Good' },
          { name: 'Amoxicillin 250mg', ordered: 50, received: 50, condition: 'Good' }
        ],
        totalValue: 15000
      }
    ],
    returns: [
      {
        id: 'RET001',
        vendorId: 'VEN001',
        vendorName: 'PharmaCorp Ltd.',
        returnDate: '2024-01-15',
        reason: 'Expired goods',
        status: 'Processed',
        items: [
          { name: 'Paracetamol 500mg', quantity: 10, value: 25.00 }
        ],
        totalValue: 25.00,
        creditNote: 'CN001'
      }
    ],
    performance: {
      topVendors: [
        { name: 'PharmaCorp Ltd.', orders: 45, value: 125000, rating: 4.8 },
        { name: 'MedSupply Co.', orders: 32, value: 89000, rating: 4.5 },
        { name: 'BioPharma Solutions', orders: 18, value: 156000, rating: 4.2 }
      ],
      deliveryStats: {
        onTime: 85,
        late: 12,
        early: 3
      },
      costSavings: 12500
    }
  };

  const handleCreateVendor = () => {
    setSelectedVendor(null);
    setIsVendorOpen(true);
  };

  const handleEditVendor = (vendor: any) => {
    setSelectedVendor(vendor);
    setIsVendorOpen(true);
  };

  const handleCreatePO = () => {
    setIsPOOpen(true);
  };

  const handleCreateGRN = () => {
    setIsGRNOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Received': return 'bg-blue-100 text-blue-800';
      case 'Processed': return 'bg-green-100 text-green-800';
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'Excellent': return 'text-green-600';
      case 'Good': return 'text-blue-600';
      case 'Fair': return 'text-yellow-600';
      case 'Poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredVendors = procurementData.vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || vendor.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procurement & Purchase Management</h1>
          <p className="text-gray-600 mt-1">Manage vendors, purchase orders, and procurement workflows</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleCreateVendor}>
            <Plus className="h-4 w-4 mr-2" />
            Add Vendor
          </Button>
          <Button variant="outline" onClick={handleCreatePO}>
            <Plus className="h-4 w-4 mr-2" />
            Create PO
          </Button>
          <Button variant="outline" onClick={handleCreateGRN}>
            <Plus className="h-4 w-4 mr-2" />
            Create GRN
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
                <p className="text-sm font-medium text-gray-600">Total Vendors</p>
                <p className="text-3xl font-bold text-gray-900">{procurementData.vendors.length}</p>
              </div>
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Active suppliers</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending POs</p>
                <p className="text-3xl font-bold text-gray-900">
                  {procurementData.purchaseOrders.filter(po => po.status === 'Pending').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Awaiting approval</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On-Time Delivery</p>
                <p className="text-3xl font-bold text-gray-900">{procurementData.performance.deliveryStats.onTime}%</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Delivery performance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cost Savings</p>
                <p className="text-3xl font-bold text-gray-900">
                  {procurementData.performance.costSavings.toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">This month</span>
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
                  placeholder="Search vendors, POs, or items..."
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
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="vendors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="purchase-orders">Purchase Orders</TabsTrigger>
          <TabsTrigger value="grns">GRNs</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Vendors Tab */}
        <TabsContent value="vendors">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                Vendor Management ({filteredVendors.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{vendor.name}</h3>
                            <Badge className={getStatusColor(vendor.status)}>
                              {vendor.status}
                            </Badge>
                            <Badge variant="outline">
                              Rating: {vendor.rating}/5
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Contact: {vendor.contactPerson}</div>
                            <div>Email: {vendor.email}</div>
                            <div>Phone: {vendor.phone}</div>
                            <div>License: {vendor.license}</div>
                            <div>Reliability: <span className={getReliabilityColor(vendor.reliability)}>{vendor.reliability}</span></div>
                            <div>Payment Terms: {vendor.paymentTerms}</div>
                            <div>Delivery: {vendor.deliveryTime}</div>
                            <div>Specialties: {vendor.specialties.join(', ')}</div>
                            <div>Total Orders: {vendor.totalOrders}</div>
                            <div>Total Value: {vendor.totalValue.toLocaleString()}</div>
                            <div>Last Order: {vendor.lastOrder}</div>
                            <div>Address: {vendor.address}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditVendor(vendor)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Plus className="h-4 w-4 mr-1" />
                            Create PO
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

        {/* Purchase Orders Tab */}
        <TabsContent value="purchase-orders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Purchase Orders ({procurementData.purchaseOrders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {procurementData.purchaseOrders.map((po) => (
                    <div key={po.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">PO #{po.id}</h3>
                            <Badge className={getStatusColor(po.status)}>
                              {po.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Vendor: {po.vendorName} • Order Date: {po.orderDate} • Expected: {po.expectedDelivery}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Total Amount: {po.totalAmount.toLocaleString()} • Approved by: {po.approvedBy}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {po.items.length} • Approved: {po.approvedDate}
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

        {/* GRNs Tab */}
        <TabsContent value="grns">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Goods Received Notes ({procurementData.grns.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {procurementData.grns.map((grn) => (
                    <div key={grn.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">GRN #{grn.id}</h3>
                            <Badge className={getStatusColor(grn.status)}>
                              {grn.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            PO: {grn.poId} • Vendor: {grn.vendorName} • Received: {grn.receivedDate}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Received by: {grn.receivedBy} • Total Value: {grn.totalValue.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {grn.items.length} • All items received in good condition
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

        {/* Returns Tab */}
        <TabsContent value="returns">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Purchase Returns ({procurementData.returns.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {procurementData.returns.map((returnItem) => (
                    <div key={returnItem.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Return #{returnItem.id}</h3>
                            <Badge className={getStatusColor(returnItem.status)}>
                              {returnItem.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Vendor: {returnItem.vendorName} • Return Date: {returnItem.returnDate}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Reason: {returnItem.reason} • Credit Note: {returnItem.creditNote}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {returnItem.items.length} • Total Value: {returnItem.totalValue.toLocaleString()}
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

        {/* Performance Tab */}
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Supplier Performance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{procurementData.performance.deliveryStats.onTime}%</div>
                    <div className="text-sm text-gray-600">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">{procurementData.performance.deliveryStats.late}%</div>
                    <div className="text-sm text-gray-600">Late Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{procurementData.performance.deliveryStats.early}%</div>
                    <div className="text-sm text-gray-600">Early Delivery</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Top Vendors by Performance</h3>
                  <div className="space-y-3">
                    {procurementData.performance.topVendors.map((vendor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{vendor.name}</div>
                            <div className="text-sm text-gray-600">{vendor.orders} orders • {vendor.value.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">Rating: {vendor.rating}/5</div>
                          <div className="text-sm text-gray-600">Performance</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Vendor Dialog */}
      <Dialog open={isVendorOpen} onOpenChange={setIsVendorOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              {selectedVendor ? 'Edit Vendor' : 'Add New Vendor'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vendor-name">Vendor Name</Label>
                <Input id="vendor-name" defaultValue={selectedVendor?.name || ''} />
              </div>
              <div>
                <Label htmlFor="vendor-contact">Contact Person</Label>
                <Input id="vendor-contact" defaultValue={selectedVendor?.contactPerson || ''} />
              </div>
              <div>
                <Label htmlFor="vendor-email">Email</Label>
                <Input id="vendor-email" type="email" defaultValue={selectedVendor?.email || ''} />
              </div>
              <div>
                <Label htmlFor="vendor-phone">Phone</Label>
                <Input id="vendor-phone" defaultValue={selectedVendor?.phone || ''} />
              </div>
              <div>
                <Label htmlFor="vendor-license">License Number</Label>
                <Input id="vendor-license" defaultValue={selectedVendor?.license || ''} />
              </div>
              <div>
                <Label htmlFor="vendor-rating">Rating</Label>
                <Select defaultValue={selectedVendor?.rating?.toString() || '4.0'}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5.0">5.0 - Excellent</SelectItem>
                    <SelectItem value="4.5">4.5 - Very Good</SelectItem>
                    <SelectItem value="4.0">4.0 - Good</SelectItem>
                    <SelectItem value="3.5">3.5 - Fair</SelectItem>
                    <SelectItem value="3.0">3.0 - Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vendor-reliability">Reliability</Label>
                <Select defaultValue={selectedVendor?.reliability || 'Good'}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reliability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vendor-payment">Payment Terms</Label>
                <Select defaultValue={selectedVendor?.paymentTerms || 'Net 30'}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Net 15">Net 15</SelectItem>
                    <SelectItem value="Net 30">Net 30</SelectItem>
                    <SelectItem value="Net 45">Net 45</SelectItem>
                    <SelectItem value="Net 60">Net 60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vendor-delivery">Delivery Time</Label>
                <Input id="vendor-delivery" defaultValue={selectedVendor?.deliveryTime || ''} />
              </div>
            </div>
            
            <div>
              <Label htmlFor="vendor-address">Address</Label>
              <Textarea id="vendor-address" defaultValue={selectedVendor?.address || ''} />
            </div>
            
            <div>
              <Label htmlFor="vendor-specialties">Specialties</Label>
              <Input id="vendor-specialties" defaultValue={selectedVendor?.specialties?.join(', ') || ''} />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsVendorOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsVendorOpen(false)}>
                <Building2 className="h-4 w-4 mr-1" />
                {selectedVendor ? 'Update Vendor' : 'Add Vendor'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Purchase Order Dialog */}
      <Dialog open={isPOOpen} onOpenChange={setIsPOOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create Purchase Order
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="po-vendor">Vendor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    {procurementData.vendors.map(vendor => (
                      <SelectItem key={vendor.id} value={vendor.id}>
                        {vendor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="po-date">Order Date</Label>
                <Input id="po-date" type="date" />
              </div>
              <div>
                <Label htmlFor="po-delivery">Expected Delivery</Label>
                <Input id="po-delivery" type="date" />
              </div>
              <div>
                <Label htmlFor="po-approver">Approver</Label>
                <Input id="po-approver" placeholder="Enter approver name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="po-items">Items</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Add items to this purchase order</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Item
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPOOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPOOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Create PO
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* GRN Dialog */}
      <Dialog open={isGRNOpen} onOpenChange={setIsGRNOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Create Goods Received Note
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="grn-po">Purchase Order</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select PO" />
                  </SelectTrigger>
                  <SelectContent>
                    {procurementData.purchaseOrders.map(po => (
                      <SelectItem key={po.id} value={po.id}>
                        PO #{po.id} - {po.vendorName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="grn-date">Received Date</Label>
                <Input id="grn-date" type="date" />
              </div>
              <div>
                <Label htmlFor="grn-received-by">Received By</Label>
                <Input id="grn-received-by" placeholder="Enter receiver name" />
              </div>
              <div>
                <Label htmlFor="grn-status">Status</Label>
                <Select defaultValue="Received">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Received">Received</SelectItem>
                    <SelectItem value="Partial">Partial</SelectItem>
                    <SelectItem value="Damaged">Damaged</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="grn-items">Received Items</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Items received from the purchase order</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Item
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsGRNOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsGRNOpen(false)}>
                <CheckCircle className="h-4 w-4 mr-1" />
                Create GRN
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
