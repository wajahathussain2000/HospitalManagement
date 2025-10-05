import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Package, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Activity,
  Settings,
  Eye,
  Printer,
  RefreshCw,
  Info,
  Star,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
  Zap,
  FileText,
  ClipboardList,
  Heart,
  Brain,
  Eye as EyeIcon,
  Stethoscope,
  Shield,
  Users,
  Bed,
  Wrench,
  Pill,
  Syringe,
  Thermometer,
  Bandage,
  Package as PackageIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  Activity as ActivityIcon,
  Truck,
  Store,
  ShoppingCart,
  AlertCircle,
  XCircle
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: 'Medication' | 'Medical Supplies' | 'Equipment' | 'Consumables' | 'Emergency' | 'Laboratory';
  subcategory: string;
  description: string;
  sku: string;
  barcode: string;
  unit: string;
  currentStock: number;
  minimumStock: number;
  maximumStock: number;
  reorderPoint: number;
  reorderQuantity: number;
  cost: {
    unit: number;
    total: number;
    average: number;
    lastPurchase: number;
  };
  pricing: {
    sellingPrice: number;
    margin: number;
    discount: number;
  };
  supplier: {
    id: string;
    name: string;
    contact: string;
    email: string;
    phone: string;
    address: string;
    rating: number;
    leadTime: number;
  };
  location: {
    building: string;
    floor: number;
    room: string;
    shelf: string;
    bin: string;
  };
  expiry: {
    hasExpiry: boolean;
    expiryDate?: Date;
    batchNumber?: string;
    lotNumber?: string;
  };
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Expired' | 'Damaged' | 'Quarantine';
  condition: 'Good' | 'Fair' | 'Poor' | 'Damaged';
  usage: {
    daily: number;
    weekly: number;
    monthly: number;
    trend: 'Increasing' | 'Decreasing' | 'Stable';
  };
  alerts: InventoryAlert[];
  lastUpdated: Date;
  createdAt: Date;
}

interface InventoryAlert {
  id: string;
  itemId: string;
  type: 'Low Stock' | 'Out of Stock' | 'Expiry Warning' | 'Expired' | 'Reorder' | 'Overstock';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  message: string;
  date: Date;
  acknowledged: boolean;
  resolved: boolean;
}

interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  rating: number;
  leadTime: number;
  paymentTerms: string;
  deliveryTime: number;
  minimumOrder: number;
  categories: string[];
  certifications: string[];
  performance: {
    onTimeDelivery: number;
    qualityRating: number;
    responseTime: number;
    totalOrders: number;
  };
  createdAt: Date;
}

interface PurchaseOrder {
  id: string;
  supplierId: string;
  supplierName: string;
  items: {
    itemId: string;
    itemName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  totalAmount: number;
  status: 'Draft' | 'Sent' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
  orderDate: Date;
  expectedDelivery: Date;
  actualDelivery?: Date;
  notes: string;
  createdBy: string;
}

export default function InventoryManagementEnhanced() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Surgical Gloves (Size M)',
      category: 'Medical Supplies',
      subcategory: 'Protective Equipment',
      description: 'Sterile surgical gloves, powder-free, latex-free',
      sku: 'SG-M-001',
      barcode: '1234567890123',
      unit: 'Box (100 pcs)',
      currentStock: 15,
      minimumStock: 20,
      maximumStock: 100,
      reorderPoint: 25,
      reorderQuantity: 50,
      cost: {
        unit: 25.50,
        total: 382.50,
        average: 24.80,
        lastPurchase: 25.50
      },
      pricing: {
        sellingPrice: 35.00,
        margin: 37.3,
        discount: 0
      },
      supplier: {
        id: 'SUP001',
        name: 'MedSupply Corp',
        contact: 'John Smith',
        email: 'john@medsupply.com',
        phone: '+1-555-0101',
        address: '123 Medical Supply St, Health City',
        rating: 4.5,
        leadTime: 3
      },
      location: {
        building: 'Main Building',
        floor: 1,
        room: 'Storage Room A',
        shelf: 'A-1',
        bin: 'B-15'
      },
      expiry: {
        hasExpiry: true,
        expiryDate: new Date('2025-12-31'),
        batchNumber: 'SG2024001',
        lotNumber: 'LOT001'
      },
      status: 'Low Stock',
      condition: 'Good',
      usage: {
        daily: 2,
        weekly: 14,
        monthly: 60,
        trend: 'Stable'
      },
      alerts: [],
      lastUpdated: new Date('2024-01-15'),
      createdAt: new Date('2023-06-01')
    },
    {
      id: '2',
      name: 'Amoxicillin 500mg',
      category: 'Medication',
      subcategory: 'Antibiotics',
      description: 'Antibiotic medication, 500mg capsules',
      sku: 'AMX-500-001',
      barcode: '1234567890124',
      unit: 'Bottle (100 caps)',
      currentStock: 8,
      minimumStock: 15,
      maximumStock: 50,
      reorderPoint: 20,
      reorderQuantity: 30,
      cost: {
        unit: 45.00,
        total: 360.00,
        average: 42.50,
        lastPurchase: 45.00
      },
      pricing: {
        sellingPrice: 65.00,
        margin: 44.4,
        discount: 0
      },
      supplier: {
        id: 'SUP002',
        name: 'PharmaDirect',
        contact: 'Sarah Johnson',
        email: 'sarah@pharmadirect.com',
        phone: '+1-555-0102',
        address: '456 Pharma Ave, Medicine City',
        rating: 4.8,
        leadTime: 2
      },
      location: {
        building: 'Pharmacy Building',
        floor: 1,
        room: 'Controlled Storage',
        shelf: 'C-2',
        bin: 'B-08'
      },
      expiry: {
        hasExpiry: true,
        expiryDate: new Date('2025-06-30'),
        batchNumber: 'AMX2024001',
        lotNumber: 'LOT002'
      },
      status: 'Low Stock',
      condition: 'Good',
      usage: {
        daily: 1,
        weekly: 7,
        monthly: 30,
        trend: 'Stable'
      },
      alerts: [],
      lastUpdated: new Date('2024-01-15'),
      createdAt: new Date('2023-08-15')
    }
  ]);

  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      id: 'SUP001',
      name: 'MedSupply Corp',
      contact: 'John Smith',
      email: 'john@medsupply.com',
      phone: '+1-555-0101',
      address: '123 Medical Supply St, Health City',
      rating: 4.5,
      leadTime: 3,
      paymentTerms: 'Net 30',
      deliveryTime: 2,
      minimumOrder: 500,
      categories: ['Medical Supplies', 'Protective Equipment'],
      certifications: ['ISO 13485', 'FDA Approved'],
      performance: {
        onTimeDelivery: 95,
        qualityRating: 4.5,
        responseTime: 2,
        totalOrders: 45
      },
      createdAt: new Date('2020-01-15')
    },
    {
      id: 'SUP002',
      name: 'PharmaDirect',
      contact: 'Sarah Johnson',
      email: 'sarah@pharmadirect.com',
      phone: '+1-555-0102',
      address: '456 Pharma Ave, Medicine City',
      rating: 4.8,
      leadTime: 2,
      paymentTerms: 'Net 15',
      deliveryTime: 1,
      minimumOrder: 1000,
      categories: ['Medication', 'Pharmaceuticals'],
      certifications: ['FDA Approved', 'GMP Certified'],
      performance: {
        onTimeDelivery: 98,
        qualityRating: 4.8,
        responseTime: 1,
        totalOrders: 78
      },
      createdAt: new Date('2019-03-20')
    }
  ]);

  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([
    {
      id: 'PO001',
      supplierId: 'SUP001',
      supplierName: 'MedSupply Corp',
      items: [
        {
          itemId: '1',
          itemName: 'Surgical Gloves (Size M)',
          quantity: 50,
          unitPrice: 25.50,
          totalPrice: 1275.00
        }
      ],
      totalAmount: 1275.00,
      status: 'Sent',
      orderDate: new Date('2024-01-10'),
      expectedDelivery: new Date('2024-01-13'),
      notes: 'Urgent reorder for low stock items',
      createdBy: 'Inventory Manager'
    }
  ]);

  const [alerts, setAlerts] = useState<InventoryAlert[]>([
    {
      id: '1',
      itemId: '1',
      type: 'Low Stock',
      severity: 'Medium',
      message: 'Surgical Gloves (Size M) is below minimum stock level',
      date: new Date('2024-01-15'),
      acknowledged: false,
      resolved: false
    },
    {
      id: '2',
      itemId: '2',
      type: 'Low Stock',
      severity: 'High',
      message: 'Amoxicillin 500mg is critically low on stock',
      date: new Date('2024-01-15'),
      acknowledged: true,
      resolved: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'suppliers' | 'orders' | 'analytics'>('overview');
  const [isCreateItemDialogOpen, setIsCreateItemDialogOpen] = useState(false);
  const [isCreateOrderDialogOpen, setIsCreateOrderDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Medication':
        return <Pill className="h-5 w-5" />;
      case 'Medical Supplies':
        return <Syringe className="h-5 w-5" />;
      case 'Equipment':
        return <Wrench className="h-5 w-5" />;
      case 'Consumables':
        return <Package className="h-5 w-5" />;
      case 'Emergency':
        return <AlertTriangle className="h-5 w-5" />;
      case 'Laboratory':
        return <Stethoscope className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      case 'Damaged':
        return 'bg-orange-100 text-orange-800';
      case 'Quarantine':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockLevel = (current: number, minimum: number, maximum: number) => {
    const percentage = (current / maximum) * 100;
    if (current <= minimum) return { level: 'Critical', color: 'text-red-600' };
    if (current <= minimum * 1.5) return { level: 'Low', color: 'text-yellow-600' };
    if (percentage >= 80) return { level: 'High', color: 'text-green-600' };
    return { level: 'Normal', color: 'text-blue-600' };
  };

  const analytics = {
    totalItems: inventory.length,
    lowStockItems: inventory.filter(i => i.status === 'Low Stock').length,
    outOfStockItems: inventory.filter(i => i.status === 'Out of Stock').length,
    totalValue: inventory.reduce((sum, i) => sum + i.cost.total, 0),
    totalSuppliers: suppliers.length,
    pendingOrders: purchaseOrders.filter(o => o.status === 'Sent' || o.status === 'Confirmed').length,
    criticalAlerts: alerts.filter(a => a.severity === 'Critical' && !a.resolved).length,
    expiringItems: inventory.filter(i => i.expiry.hasExpiry && i.expiry.expiryDate && new Date(i.expiry.expiryDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)).length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Inventory Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive inventory oversight with automated reordering and analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Auto Reorder</span>
          </Button>
          <Dialog open={isCreateItemDialogOpen} onOpenChange={setIsCreateItemDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Item</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Inventory Item</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="stock">Stock Levels</TabsTrigger>
                  <TabsTrigger value="supplier">Supplier</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4 mt-4">
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
                          <SelectItem value="Medication">Medication</SelectItem>
                          <SelectItem value="Medical Supplies">Medical Supplies</SelectItem>
                          <SelectItem value="Equipment">Equipment</SelectItem>
                          <SelectItem value="Consumables">Consumables</SelectItem>
                          <SelectItem value="Emergency">Emergency</SelectItem>
                          <SelectItem value="Laboratory">Laboratory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter item description" rows={3} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sku">SKU</Label>
                      <Input id="sku" placeholder="Enter SKU" />
                    </div>
                    <div>
                      <Label htmlFor="barcode">Barcode</Label>
                      <Input id="barcode" placeholder="Enter barcode" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="stock" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentStock">Current Stock</Label>
                      <Input id="currentStock" type="number" placeholder="0" />
                    </div>
                    <div>
                      <Label htmlFor="minimumStock">Minimum Stock</Label>
                      <Input id="minimumStock" type="number" placeholder="10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maximumStock">Maximum Stock</Label>
                      <Input id="maximumStock" type="number" placeholder="100" />
                    </div>
                    <div>
                      <Label htmlFor="reorderQuantity">Reorder Quantity</Label>
                      <Input id="reorderQuantity" type="number" placeholder="50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="unitPrice">Unit Price</Label>
                      <Input id="unitPrice" type="number" placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="sellingPrice">Selling Price</Label>
                      <Input id="sellingPrice" type="number" placeholder="0.00" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="supplier" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="supplier">Supplier</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        {suppliers.map(supplier => (
                          <SelectItem key={supplier.id} value={supplier.id}>
                            {supplier.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="leadTime">Lead Time (days)</Label>
                      <Input id="leadTime" type="number" placeholder="3" />
                    </div>
                    <div>
                      <Label htmlFor="minimumOrder">Minimum Order</Label>
                      <Input id="minimumOrder" type="number" placeholder="100" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="building">Building</Label>
                      <Input id="building" placeholder="Building name" />
                    </div>
                    <div>
                      <Label htmlFor="floor">Floor</Label>
                      <Input id="floor" type="number" placeholder="1" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="room">Room</Label>
                      <Input id="room" placeholder="Room name" />
                    </div>
                    <div>
                      <Label htmlFor="shelf">Shelf</Label>
                      <Input id="shelf" placeholder="Shelf identifier" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bin">Bin</Label>
                    <Input id="bin" placeholder="Bin identifier" />
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsCreateItemDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Add Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total Items</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalItems}</p>
                <p className="text-xs text-blue-600 mt-1">In inventory</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Package className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Low Stock</p>
                <p className="text-3xl font-bold text-yellow-900">{analytics.lowStockItems}</p>
                <p className="text-xs text-yellow-600 mt-1">Items need reorder</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-200">
                <AlertTriangle className="h-6 w-6 text-yellow-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Value</p>
                <p className="text-3xl font-bold text-green-900">${(analytics.totalValue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-green-600 mt-1">Inventory value</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <DollarSign className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Critical Alerts</p>
                <p className="text-3xl font-bold text-red-900">{analytics.criticalAlerts}</p>
                <p className="text-xs text-red-600 mt-1">Require attention</p>
              </div>
              <div className="p-3 rounded-full bg-red-200">
                <AlertCircle className="h-6 w-6 text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search inventory items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Medication">Medication</SelectItem>
                  <SelectItem value="Medical Supplies">Medical Supplies</SelectItem>
                  <SelectItem value="Equipment">Equipment</SelectItem>
                  <SelectItem value="Consumables">Consumables</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                  <SelectItem value="Laboratory">Laboratory</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="In Stock">In Stock</SelectItem>
                  <SelectItem value="Low Stock">Low Stock</SelectItem>
                  <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                  <SelectItem value="Expired">Expired</SelectItem>
                  <SelectItem value="Damaged">Damaged</SelectItem>
                  <SelectItem value="Quarantine">Quarantine</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {viewMode === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredInventory.map((item) => {
            const stockLevel = getStockLevel(item.currentStock, item.minimumStock, item.maximumStock);
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <div className="p-2 bg-blue-100 rounded-full">
                        {getCategoryIcon(item.category)}
                      </div>
                      <span>{item.name}</span>
                    </CardTitle>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">SKU: {item.sku}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{item.location.building} - {item.location.room}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Store className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{item.supplier.name}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Stock Level</span>
                        <span className={`text-sm font-medium ${stockLevel.color}`}>
                          {stockLevel.level}
                        </span>
                      </div>
                      <Progress value={(item.currentStock / item.maximumStock) * 100} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Current: {item.currentStock}</span>
                        <span className="text-sm">Min: {item.minimumStock}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Unit Price</p>
                        <p className="text-sm font-medium">${item.cost.unit.toFixed(2)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Total Value</p>
                        <p className="text-sm font-medium">${item.cost.total.toFixed(2)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Usage</p>
                        <p className="text-sm font-medium">{item.usage.monthly}/mo</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {viewMode === 'suppliers' && (
        <Card>
          <CardHeader>
            <CardTitle>Supplier Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Lead Time</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{supplier.contact}</p>
                        <p className="text-sm text-gray-600">{supplier.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{supplier.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{supplier.leadTime} days</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">On-time Delivery</span>
                          <span className="text-xs font-medium">{supplier.performance.onTimeDelivery}%</span>
                        </div>
                        <Progress value={supplier.performance.onTimeDelivery} className="h-1" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {supplier.categories.map(category => (
                          <Badge key={category} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'orders' && (
        <Card>
          <CardHeader>
            <CardTitle>Purchase Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.supplierName}</TableCell>
                    <TableCell>{order.items.length} items</TableCell>
                    <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Confirmed' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.orderDate.toLocaleDateString()}</TableCell>
                    <TableCell>{order.expectedDelivery.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Stock Levels by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Medication', 'Medical Supplies', 'Equipment', 'Consumables'].map(category => {
                  const categoryItems = inventory.filter(i => i.category === category);
                  const totalStock = categoryItems.reduce((sum, i) => sum + i.currentStock, 0);
                  const totalValue = categoryItems.reduce((sum, i) => sum + i.cost.total, 0);
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category}</span>
                        <span className="text-sm font-medium">{categoryItems.length} items</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Stock: {totalStock}</span>
                        <span>Value: ${(totalValue / 1000).toFixed(0)}K</span>
                      </div>
                      <Progress value={(categoryItems.length / inventory.length) * 100} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Inventory Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        alert.severity === 'Critical' ? 'bg-red-100' :
                        alert.severity === 'High' ? 'bg-orange-100' :
                        alert.severity === 'Medium' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        <AlertTriangle className={`h-4 w-4 ${
                          alert.severity === 'Critical' ? 'text-red-600' :
                          alert.severity === 'High' ? 'text-orange-600' :
                          alert.severity === 'Medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-gray-600">{alert.date.toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getAlertSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      {alert.acknowledged && (
                        <Badge className="bg-green-100 text-green-800">Acknowledged</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
