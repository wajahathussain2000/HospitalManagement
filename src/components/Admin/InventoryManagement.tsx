import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  DollarSign,
  Activity,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Truck,
  Warehouse
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: 'Medication' | 'Medical Supplies' | 'Surgical Instruments' | 'Laboratory' | 'Cleaning' | 'Food' | 'Office';
  subcategory: string;
  sku: string;
  description: string;
  currentStock: number;
  minimumStock: number;
  maximumStock: number;
  unit: string;
  unitPrice: number;
  totalValue: number;
  supplier: {
    name: string;
    contact: string;
    email: string;
    address: string;
  };
  location: {
    building: string;
    floor: number;
    room: string;
    shelf: string;
  };
  expiryDate?: Date;
  batchNumber?: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Expired' | 'Damaged';
  lastRestocked: Date;
  lastUsed: Date;
  usageRate: number; // items per day
  reorderPoint: number;
  reorderQuantity: number;
  notes?: string;
}

interface StockMovement {
  id: string;
  itemId: string;
  type: 'In' | 'Out' | 'Transfer' | 'Adjustment' | 'Expired' | 'Damaged';
  quantity: number;
  reason: string;
  performedBy: string;
  performedById: string;
  date: Date;
  reference?: string; // PO number, patient ID, etc.
  location?: string;
  notes?: string;
}

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Paracetamol 500mg',
      category: 'Medication',
      subcategory: 'Pain Relief',
      sku: 'MED-001',
      description: 'Paracetamol tablets 500mg, 100 tablets per bottle',
      currentStock: 45,
      minimumStock: 20,
      maximumStock: 100,
      unit: 'bottles',
      unitPrice: 25.50,
      totalValue: 1147.50,
      supplier: {
        name: 'MedSupply Co.',
        contact: '+1-555-0123',
        email: 'orders@medsupply.com',
        address: '123 Medical Ave, City'
      },
      location: {
        building: 'Main Building',
        floor: 1,
        room: 'Pharmacy',
        shelf: 'A-01'
      },
      expiryDate: new Date('2025-12-31'),
      batchNumber: 'BATCH-2024-001',
      status: 'In Stock',
      lastRestocked: new Date('2024-01-10'),
      lastUsed: new Date('2024-01-15'),
      usageRate: 2.5,
      reorderPoint: 30,
      reorderQuantity: 50,
      notes: 'Essential pain medication'
    },
    {
      id: '2',
      name: 'Surgical Gloves',
      category: 'Medical Supplies',
      subcategory: 'Protective Equipment',
      sku: 'SUP-002',
      description: 'Latex-free surgical gloves, size M, 100 pairs per box',
      currentStock: 8,
      minimumStock: 15,
      maximumStock: 50,
      unit: 'boxes',
      unitPrice: 12.99,
      totalValue: 103.92,
      supplier: {
        name: 'SafeMed Supplies',
        contact: '+1-555-0456',
        email: 'sales@safemed.com',
        address: '456 Supply St, City'
      },
      location: {
        building: 'Main Building',
        floor: 2,
        room: 'Storage',
        shelf: 'B-03'
      },
      status: 'Low Stock',
      lastRestocked: new Date('2024-01-05'),
      lastUsed: new Date('2024-01-16'),
      usageRate: 1.2,
      reorderPoint: 20,
      reorderQuantity: 30,
      notes: 'Critical for surgical procedures'
    }
  ]);

  const [stockMovements, setStockMovements] = useState<StockMovement[]>([
    {
      id: '1',
      itemId: '1',
      type: 'In',
      quantity: 50,
      reason: 'Purchase Order #PO-2024-001',
      performedBy: 'Dr. Sarah Johnson',
      performedById: 'D001',
      date: new Date('2024-01-10'),
      reference: 'PO-2024-001',
      location: 'Pharmacy',
      notes: 'Monthly restock'
    },
    {
      id: '2',
      itemId: '1',
      type: 'Out',
      quantity: 5,
      reason: 'Patient prescription',
      performedBy: 'Nurse Mike',
      performedById: 'N001',
      date: new Date('2024-01-15'),
      reference: 'P001',
      location: 'Ward A',
      notes: 'Prescribed to John Doe'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isMovementDialogOpen, setIsMovementDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (item: InventoryItem) => {
    switch (item.status) {
      case 'In Stock':
        return <Badge className="bg-green-100 text-green-800">In Stock</Badge>;
      case 'Low Stock':
        return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
      case 'Out of Stock':
        return <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>;
      case 'Expired':
        return <Badge className="bg-orange-100 text-orange-800">Expired</Badge>;
      case 'Damaged':
        return <Badge className="bg-gray-100 text-gray-800">Damaged</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getStockLevelColor = (item: InventoryItem) => {
    const stockPercentage = (item.currentStock / item.maximumStock) * 100;
    if (stockPercentage <= 20) return 'text-red-600';
    if (stockPercentage <= 50) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getDaysUntilExpiry = (item: InventoryItem) => {
    if (!item.expiryDate) return null;
    const today = new Date();
    const expiry = new Date(item.expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getExpiryUrgency = (item: InventoryItem) => {
    const daysUntil = getDaysUntilExpiry(item);
    if (!daysUntil) return '';
    if (daysUntil <= 30) return 'text-red-600';
    if (daysUntil <= 90) return 'text-yellow-600';
    return 'text-green-600';
  };

  const categories = ['Medication', 'Medical Supplies', 'Surgical Instruments', 'Laboratory', 'Cleaning', 'Food', 'Office'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital inventory, stock levels, and supplies</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isMovementDialogOpen} onOpenChange={setIsMovementDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Stock Movement</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Record Stock Movement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="movementItem">Item</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select item" />
                    </SelectTrigger>
                    <SelectContent>
                      {inventory.map(item => (
                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="movementType">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="In">Stock In</SelectItem>
                        <SelectItem value="Out">Stock Out</SelectItem>
                        <SelectItem value="Transfer">Transfer</SelectItem>
                        <SelectItem value="Adjustment">Adjustment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="movementQuantity">Quantity</Label>
                    <Input id="movementQuantity" type="number" placeholder="Enter quantity" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="movementReason">Reason</Label>
                  <Input id="movementReason" placeholder="Enter reason" />
                </div>
                <div>
                  <Label htmlFor="movementNotes">Notes</Label>
                  <Textarea id="movementNotes" placeholder="Enter notes" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsMovementDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Record Movement</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Item</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Inventory Item</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="stock">Stock & Pricing</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="itemName">Item Name</Label>
                      <Input id="itemName" placeholder="Enter item name" />
                    </div>
                    <div>
                      <Label htmlFor="itemCategory">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="itemSku">SKU</Label>
                      <Input id="itemSku" placeholder="Enter SKU" />
                    </div>
                    <div>
                      <Label htmlFor="itemUnit">Unit</Label>
                      <Input id="itemUnit" placeholder="bottles, boxes, etc." />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="itemDescription">Description</Label>
                    <Textarea id="itemDescription" placeholder="Enter item description" />
                  </div>
                </TabsContent>
                <TabsContent value="stock" className="space-y-4">
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
                      <Label htmlFor="unitPrice">Unit Price</Label>
                      <Input id="unitPrice" type="number" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reorderPoint">Reorder Point</Label>
                      <Input id="reorderPoint" type="number" placeholder="20" />
                    </div>
                    <div>
                      <Label htmlFor="reorderQuantity">Reorder Quantity</Label>
                      <Input id="reorderQuantity" type="number" placeholder="50" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Add Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold">{inventory.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <p className="text-2xl font-bold">{inventory.filter(item => item.status === 'In Stock').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold">{inventory.filter(item => item.status === 'Low Stock').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold">${inventory.reduce((sum, item) => sum + item.totalValue, 0).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="In Stock">In Stock</SelectItem>
                  <SelectItem value="Low Stock">Low Stock</SelectItem>
                  <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                  <SelectItem value="Expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Inventory Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.sku}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium ${getStockLevelColor(item)}`}>
                        {item.currentStock}/{item.maximumStock}
                      </span>
                      <span className="text-sm text-gray-600">{item.unit}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(item)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>${item.unitPrice.toFixed(2)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {item.expiryDate ? (
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className={getExpiryUrgency(item)}>
                          {getDaysUntilExpiry(item)} days
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{item.location.room}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedItem(item);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Activity className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Inventory Item</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editItemName">Item Name</Label>
                  <Input id="editItemName" defaultValue={selectedItem.name} />
                </div>
                <div>
                  <Label htmlFor="editItemCategory">Category</Label>
                  <Select defaultValue={selectedItem.category.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editCurrentStock">Current Stock</Label>
                  <Input id="editCurrentStock" type="number" defaultValue={selectedItem.currentStock} />
                </div>
                <div>
                  <Label htmlFor="editMinimumStock">Minimum Stock</Label>
                  <Input id="editMinimumStock" type="number" defaultValue={selectedItem.minimumStock} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editUnitPrice">Unit Price</Label>
                  <Input id="editUnitPrice" type="number" defaultValue={selectedItem.unitPrice} />
                </div>
                <div>
                  <Label htmlFor="editStatus">Status</Label>
                  <Select defaultValue={selectedItem.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In Stock">In Stock</SelectItem>
                      <SelectItem value="Low Stock">Low Stock</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                      <SelectItem value="Expired">Expired</SelectItem>
                      <SelectItem value="Damaged">Damaged</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Item</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
