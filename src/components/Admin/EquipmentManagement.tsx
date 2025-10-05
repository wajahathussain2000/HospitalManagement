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
  Wrench, 
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
  Shield,
  Heart,
  Stethoscope,
  Monitor,
  Zap
} from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  type: 'Medical' | 'Surgical' | 'Diagnostic' | 'Life Support' | 'Monitoring' | 'Therapeutic';
  category: string;
  model: string;
  serialNumber: string;
  manufacturer: string;
  purchaseDate: Date;
  warrantyExpiry: Date;
  status: 'active' | 'maintenance' | 'repair' | 'retired' | 'quarantine';
  location: {
    building: string;
    floor: number;
    room: string;
    ward?: string;
  };
  assignedTo?: string;
  assignedToId?: string;
  lastMaintenance: Date;
  nextMaintenance: Date;
  maintenanceHistory: MaintenanceRecord[];
  specifications: {
    power: string;
    dimensions: string;
    weight: string;
    operatingTemp: string;
    humidity: string;
  };
  cost: {
    purchasePrice: number;
    maintenanceCost: number;
    depreciationRate: number;
  };
  criticality: 'Critical' | 'High' | 'Medium' | 'Low';
  notes?: string;
}

interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  date: Date;
  type: 'Preventive' | 'Corrective' | 'Emergency' | 'Calibration';
  description: string;
  technician: string;
  cost: number;
  status: 'Completed' | 'In Progress' | 'Scheduled';
  nextDue?: Date;
}

export default function EquipmentManagement() {
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: '1',
      name: 'Ventilator V60',
      type: 'Life Support',
      category: 'Respiratory',
      model: 'V60',
      serialNumber: 'VT001234',
      manufacturer: 'Philips',
      purchaseDate: new Date('2022-01-15'),
      warrantyExpiry: new Date('2025-01-15'),
      status: 'active',
      location: {
        building: 'Main Building',
        floor: 3,
        room: 'ICU-01',
        ward: 'ICU Unit 1'
      },
      assignedTo: 'Dr. Sarah Johnson',
      assignedToId: 'D001',
      lastMaintenance: new Date('2024-01-10'),
      nextMaintenance: new Date('2024-02-10'),
      maintenanceHistory: [],
      specifications: {
        power: '220V AC',
        dimensions: '45x35x25 cm',
        weight: '8.5 kg',
        operatingTemp: '15-35°C',
        humidity: '15-85% RH'
      },
      cost: {
        purchasePrice: 25000,
        maintenanceCost: 2500,
        depreciationRate: 20
      },
      criticality: 'Critical',
      notes: 'Primary ventilator for ICU patients'
    },
    {
      id: '2',
      name: 'Cardiac Monitor',
      type: 'Monitoring',
      category: 'Cardiology',
      model: 'IntelliVue MX800',
      serialNumber: 'CM002345',
      manufacturer: 'Philips',
      purchaseDate: new Date('2023-03-20'),
      warrantyExpiry: new Date('2026-03-20'),
      status: 'active',
      location: {
        building: 'Main Building',
        floor: 2,
        room: 'Cardiac-05',
        ward: 'Cardiac Ward'
      },
      assignedTo: 'Dr. Michael Chen',
      assignedToId: 'D002',
      lastMaintenance: new Date('2024-01-05'),
      nextMaintenance: new Date('2024-04-05'),
      maintenanceHistory: [],
      specifications: {
        power: '110-240V AC',
        dimensions: '40x30x20 cm',
        weight: '5.2 kg',
        operatingTemp: '10-40°C',
        humidity: '10-90% RH'
      },
      cost: {
        purchasePrice: 15000,
        maintenanceCost: 1500,
        depreciationRate: 15
      },
      criticality: 'High',
      notes: 'Multi-parameter patient monitor'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [criticalityFilter, setCriticalityFilter] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesCriticality = criticalityFilter === 'all' || item.criticality === criticalityFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesCriticality;
  });

  const getStatusBadge = (equipment: Equipment) => {
    switch (equipment.status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'maintenance':
        return <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>;
      case 'repair':
        return <Badge className="bg-red-100 text-red-800">Repair</Badge>;
      case 'retired':
        return <Badge className="bg-gray-100 text-gray-800">Retired</Badge>;
      case 'quarantine':
        return <Badge className="bg-orange-100 text-orange-800">Quarantine</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getCriticalityBadge = (criticality: string) => {
    switch (criticality) {
      case 'Critical':
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
      case 'High':
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'Low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getDaysUntilMaintenance = (equipment: Equipment) => {
    const today = new Date();
    const nextMaintenance = new Date(equipment.nextMaintenance);
    const diffTime = nextMaintenance.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getMaintenanceUrgency = (equipment: Equipment) => {
    const daysUntil = getDaysUntilMaintenance(equipment);
    if (daysUntil <= 7) return 'text-red-600';
    if (daysUntil <= 30) return 'text-yellow-600';
    return 'text-green-600';
  };

  const equipmentTypes = ['Medical', 'Surgical', 'Diagnostic', 'Life Support', 'Monitoring', 'Therapeutic'];
  const criticalityLevels = ['Critical', 'High', 'Medium', 'Low'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Equipment Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital equipment, maintenance, and inventory</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Equipment</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Add New Equipment</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="location">Location & Assignment</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="equipmentName">Equipment Name</Label>
                    <Input id="equipmentName" placeholder="Enter equipment name" />
                  </div>
                  <div>
                    <Label htmlFor="equipmentType">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentTypes.map(type => (
                          <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="Enter model" />
                  </div>
                  <div>
                    <Label htmlFor="serialNumber">Serial Number</Label>
                    <Input id="serialNumber" placeholder="Enter serial number" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="manufacturer">Manufacturer</Label>
                    <Input id="manufacturer" placeholder="Enter manufacturer" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="Enter category" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purchaseDate">Purchase Date</Label>
                    <Input id="purchaseDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="warrantyExpiry">Warranty Expiry</Label>
                    <Input id="warrantyExpiry" type="date" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="power">Power Requirements</Label>
                    <Input id="power" placeholder="220V AC" />
                  </div>
                  <div>
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input id="dimensions" placeholder="45x35x25 cm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" placeholder="8.5 kg" />
                  </div>
                  <div>
                    <Label htmlFor="operatingTemp">Operating Temperature</Label>
                    <Input id="operatingTemp" placeholder="15-35°C" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="humidity">Humidity Range</Label>
                  <Input id="humidity" placeholder="15-85% RH" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purchasePrice">Purchase Price</Label>
                    <Input id="purchasePrice" type="number" placeholder="25000" />
                  </div>
                  <div>
                    <Label htmlFor="criticality">Criticality Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select criticality" />
                      </SelectTrigger>
                      <SelectContent>
                        {criticalityLevels.map(level => (
                          <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="location" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="building">Building</Label>
                    <Input id="building" placeholder="Main Building" />
                  </div>
                  <div>
                    <Label htmlFor="floor">Floor</Label>
                    <Input id="floor" type="number" placeholder="3" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="room">Room</Label>
                    <Input id="room" placeholder="ICU-01" />
                  </div>
                  <div>
                    <Label htmlFor="ward">Ward (Optional)</Label>
                    <Input id="ward" placeholder="ICU Unit 1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <Input id="assignedTo" placeholder="Dr. Sarah Johnson" />
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Enter any additional notes" />
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button>Add Equipment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Equipment</p>
                <p className="text-2xl font-bold">{equipment.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Equipment</p>
                <p className="text-2xl font-bold">{equipment.filter(e => e.status === 'active').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Maintenance Due</p>
                <p className="text-2xl font-bold">{equipment.filter(e => getDaysUntilMaintenance(e) <= 30).length}</p>
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
                <p className="text-2xl font-bold">${equipment.reduce((sum, e) => sum + e.cost.purchasePrice, 0).toLocaleString()}</p>
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
                  placeholder="Search equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {equipmentTypes.map(type => (
                    <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
              <Select value={criticalityFilter} onValueChange={setCriticalityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by criticality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Criticality</SelectItem>
                  {criticalityLevels.map(level => (
                    <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Equipment Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wrench className="h-5 w-5 mr-2" />
            Hospital Equipment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Criticality</TableHead>
                <TableHead>Next Maintenance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEquipment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Wrench className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.model} - {item.serialNumber}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{item.location.building} - {item.location.room}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.assignedTo || 'Unassigned'}</TableCell>
                  <TableCell>{getStatusBadge(item)}</TableCell>
                  <TableCell>{getCriticalityBadge(item.criticality)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className={getMaintenanceUrgency(item)}>
                        {getDaysUntilMaintenance(item)} days
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedEquipment(item);
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

      {/* Edit Equipment Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Equipment</DialogTitle>
          </DialogHeader>
          {selectedEquipment && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editEquipmentName">Equipment Name</Label>
                  <Input id="editEquipmentName" defaultValue={selectedEquipment.name} />
                </div>
                <div>
                  <Label htmlFor="editEquipmentType">Type</Label>
                  <Select defaultValue={selectedEquipment.type.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select equipment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipmentTypes.map(type => (
                        <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editModel">Model</Label>
                  <Input id="editModel" defaultValue={selectedEquipment.model} />
                </div>
                <div>
                  <Label htmlFor="editSerialNumber">Serial Number</Label>
                  <Input id="editSerialNumber" defaultValue={selectedEquipment.serialNumber} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editStatus">Status</Label>
                  <Select defaultValue={selectedEquipment.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="repair">Repair</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="quarantine">Quarantine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="editCriticality">Criticality</Label>
                  <Select defaultValue={selectedEquipment.criticality.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select criticality" />
                    </SelectTrigger>
                    <SelectContent>
                      {criticalityLevels.map(level => (
                        <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Equipment</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
