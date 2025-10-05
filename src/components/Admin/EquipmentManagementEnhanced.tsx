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
  Wrench, 
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
  Package,
  Wrench as WrenchIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  Activity as ActivityIcon
} from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  type: 'Medical' | 'Diagnostic' | 'Surgical' | 'Therapeutic' | 'Monitoring' | 'Emergency' | 'Laboratory';
  category: string;
  model: string;
  manufacturer: string;
  serialNumber: string;
  assetTag: string;
  location: {
    building: string;
    floor: number;
    room: string;
    department: string;
  };
  status: 'Operational' | 'Maintenance' | 'Out of Service' | 'Calibration Due' | 'Retired';
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Critical';
  purchaseDate: Date;
  warrantyExpiry: Date;
  lastMaintenance: Date;
  nextMaintenance: Date;
  maintenanceFrequency: string;
  responsibleTechnician: string;
  cost: {
    purchase: number;
    maintenance: number;
    depreciation: number;
    currentValue: number;
  };
  specifications: {
    power: string;
    dimensions: string;
    weight: string;
    operatingTemperature: string;
    humidity: string;
  };
  certifications: string[];
  compliance: {
    fdaApproved: boolean;
    ceMarked: boolean;
    isoCertified: boolean;
    lastInspection: Date;
    nextInspection: Date;
  };
  usage: {
    totalHours: number;
    dailyUsage: number;
    efficiency: number;
    downtime: number;
  };
  maintenanceHistory: MaintenanceRecord[];
  serviceContracts: ServiceContract[];
  alerts: EquipmentAlert[];
  createdAt: Date;
  updatedAt: Date;
}

interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  type: 'Preventive' | 'Corrective' | 'Calibration' | 'Inspection';
  date: Date;
  technician: string;
  description: string;
  cost: number;
  duration: number;
  status: 'Completed' | 'In Progress' | 'Scheduled' | 'Cancelled';
  parts: string[];
  notes: string;
}

interface ServiceContract {
  id: string;
  equipmentId: string;
  provider: string;
  startDate: Date;
  endDate: Date;
  cost: number;
  coverage: string[];
  contactInfo: {
    phone: string;
    email: string;
    technician: string;
  };
  status: 'Active' | 'Expired' | 'Cancelled';
}

interface EquipmentAlert {
  id: string;
  equipmentId: string;
  type: 'Maintenance Due' | 'Calibration Due' | 'Warranty Expiry' | 'Performance Issue' | 'Safety Concern';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  message: string;
  date: Date;
  acknowledged: boolean;
  resolved: boolean;
}

export default function EquipmentManagementEnhanced() {
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: '1',
      name: 'MRI Scanner 3T',
      type: 'Diagnostic',
      category: 'Imaging',
      model: 'Magnetom Vida',
      manufacturer: 'Siemens',
      serialNumber: 'SI123456789',
      assetTag: 'EQ001',
      location: {
        building: 'Main Building',
        floor: 1,
        room: 'Radiology Suite',
        department: 'Radiology'
      },
      status: 'Operational',
      condition: 'Excellent',
      purchaseDate: new Date('2022-01-15'),
      warrantyExpiry: new Date('2027-01-15'),
      lastMaintenance: new Date('2024-01-10'),
      nextMaintenance: new Date('2024-02-10'),
      maintenanceFrequency: 'Monthly',
      responsibleTechnician: 'John Smith',
      cost: {
        purchase: 2500000,
        maintenance: 125000,
        depreciation: 500000,
        currentValue: 2000000
      },
      specifications: {
        power: '50kW',
        dimensions: '2.5m x 2.5m x 2.0m',
        weight: '8000kg',
        operatingTemperature: '18-24°C',
        humidity: '30-70%'
      },
      certifications: ['FDA Approved', 'CE Marked', 'ISO 13485'],
      compliance: {
        fdaApproved: true,
        ceMarked: true,
        isoCertified: true,
        lastInspection: new Date('2024-01-15'),
        nextInspection: new Date('2024-07-15')
      },
      usage: {
        totalHours: 8760,
        dailyUsage: 12,
        efficiency: 95,
        downtime: 2.5
      },
      maintenanceHistory: [],
      serviceContracts: [],
      alerts: [],
      createdAt: new Date('2022-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Ventilator ICU',
      type: 'Therapeutic',
      category: 'Life Support',
      model: 'Servo-U',
      manufacturer: 'Getinge',
      serialNumber: 'GE987654321',
      assetTag: 'EQ002',
      location: {
        building: 'ICU Building',
        floor: 2,
        room: 'ICU Room 201',
        department: 'Intensive Care'
      },
      status: 'Operational',
      condition: 'Good',
      purchaseDate: new Date('2021-06-01'),
      warrantyExpiry: new Date('2024-06-01'),
      lastMaintenance: new Date('2024-01-05'),
      nextMaintenance: new Date('2024-02-05'),
      maintenanceFrequency: 'Bi-weekly',
      responsibleTechnician: 'Sarah Wilson',
      cost: {
        purchase: 45000,
        maintenance: 8500,
        depreciation: 15000,
        currentValue: 30000
      },
      specifications: {
        power: '500W',
        dimensions: '60cm x 40cm x 30cm',
        weight: '25kg',
        operatingTemperature: '15-35°C',
        humidity: '10-95%'
      },
      certifications: ['FDA Approved', 'CE Marked'],
      compliance: {
        fdaApproved: true,
        ceMarked: true,
        isoCertified: true,
        lastInspection: new Date('2024-01-10'),
        nextInspection: new Date('2024-04-10')
      },
      usage: {
        totalHours: 17520,
        dailyUsage: 24,
        efficiency: 88,
        downtime: 1.2
      },
      maintenanceHistory: [],
      serviceContracts: [],
      alerts: [],
      createdAt: new Date('2021-06-01'),
      updatedAt: new Date('2024-01-10')
    }
  ]);

  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    {
      id: '1',
      equipmentId: '1',
      type: 'Preventive',
      date: new Date('2024-01-10'),
      technician: 'John Smith',
      description: 'Monthly preventive maintenance - system check, calibration, cleaning',
      cost: 2500,
      duration: 4,
      status: 'Completed',
      parts: ['Filter Set', 'Calibration Kit'],
      notes: 'All systems functioning normally'
    },
    {
      id: '2',
      equipmentId: '2',
      type: 'Calibration',
      date: new Date('2024-01-05'),
      technician: 'Sarah Wilson',
      description: 'Bi-weekly calibration and performance check',
      cost: 800,
      duration: 2,
      status: 'Completed',
      parts: ['Calibration Gas'],
      notes: 'Ventilator calibrated successfully'
    }
  ]);

  const [alerts, setAlerts] = useState<EquipmentAlert[]>([
    {
      id: '1',
      equipmentId: '1',
      type: 'Maintenance Due',
      severity: 'Medium',
      message: 'MRI Scanner maintenance due in 5 days',
      date: new Date('2024-01-20'),
      acknowledged: false,
      resolved: false
    },
    {
      id: '2',
      equipmentId: '2',
      type: 'Warranty Expiry',
      severity: 'High',
      message: 'Ventilator warranty expires in 3 months',
      date: new Date('2024-01-15'),
      acknowledged: true,
      resolved: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'maintenance' | 'alerts' | 'analytics'>('overview');
  const [isCreateEquipmentDialogOpen, setIsCreateEquipmentDialogOpen] = useState(false);
  const [isMaintenanceDialogOpen, setIsMaintenanceDialogOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getEquipmentTypeIcon = (type: string) => {
    switch (type) {
      case 'Medical':
        return <Stethoscope className="h-5 w-5" />;
      case 'Diagnostic':
        return <Eye className="h-5 w-5" />;
      case 'Surgical':
        return <Wrench className="h-5 w-5" />;
      case 'Therapeutic':
        return <Heart className="h-5 w-5" />;
      case 'Monitoring':
        return <Activity className="h-5 w-5" />;
      case 'Emergency':
        return <AlertTriangle className="h-5 w-5" />;
      case 'Laboratory':
        return <Package className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Service':
        return 'bg-red-100 text-red-800';
      case 'Calibration Due':
        return 'bg-orange-100 text-orange-800';
      case 'Retired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent':
        return 'text-green-600';
      case 'Good':
        return 'text-blue-600';
      case 'Fair':
        return 'text-yellow-600';
      case 'Poor':
        return 'text-orange-600';
      case 'Critical':
        return 'text-red-600';
      default:
        return 'text-gray-600';
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

  const analytics = {
    totalEquipment: equipment.length,
    operationalEquipment: equipment.filter(e => e.status === 'Operational').length,
    maintenanceDue: equipment.filter(e => new Date(e.nextMaintenance) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).length,
    totalValue: equipment.reduce((sum, e) => sum + e.cost.currentValue, 0),
    totalMaintenanceCost: equipment.reduce((sum, e) => sum + e.cost.maintenance, 0),
    avgEfficiency: Math.round(equipment.reduce((sum, e) => sum + e.usage.efficiency, 0) / equipment.length),
    criticalAlerts: alerts.filter(a => a.severity === 'Critical' && !a.resolved).length,
    warrantyExpiring: equipment.filter(e => new Date(e.warrantyExpiry) <= new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)).length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Equipment Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive equipment oversight with maintenance tracking and analytics</p>
        </div>
        <Dialog open={isCreateEquipmentDialogOpen} onOpenChange={setIsCreateEquipmentDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Equipment</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Equipment</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Equipment Name</Label>
                    <Input id="name" placeholder="Enter equipment name" />
                  </div>
                  <div>
                    <Label htmlFor="type">Equipment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Medical">Medical</SelectItem>
                        <SelectItem value="Diagnostic">Diagnostic</SelectItem>
                        <SelectItem value="Surgical">Surgical</SelectItem>
                        <SelectItem value="Therapeutic">Therapeutic</SelectItem>
                        <SelectItem value="Monitoring">Monitoring</SelectItem>
                        <SelectItem value="Emergency">Emergency</SelectItem>
                        <SelectItem value="Laboratory">Laboratory</SelectItem>
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
                    <Label htmlFor="manufacturer">Manufacturer</Label>
                    <Input id="manufacturer" placeholder="Enter manufacturer" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serialNumber">Serial Number</Label>
                    <Input id="serialNumber" placeholder="Enter serial number" />
                  </div>
                  <div>
                    <Label htmlFor="assetTag">Asset Tag</Label>
                    <Input id="assetTag" placeholder="Enter asset tag" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="power">Power Requirements</Label>
                    <Input id="power" placeholder="e.g., 50kW" />
                  </div>
                  <div>
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input id="dimensions" placeholder="e.g., 2.5m x 2.5m x 2.0m" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" placeholder="e.g., 8000kg" />
                  </div>
                  <div>
                    <Label htmlFor="operatingTemp">Operating Temperature</Label>
                    <Input id="operatingTemp" placeholder="e.g., 18-24°C" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="humidity">Humidity Range</Label>
                  <Input id="humidity" placeholder="e.g., 30-70%" />
                </div>
              </TabsContent>
              
              <TabsContent value="maintenance" className="space-y-4 mt-4">
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="maintenanceFreq">Maintenance Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Daily">Daily</SelectItem>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                        <SelectItem value="Quarterly">Quarterly</SelectItem>
                        <SelectItem value="Annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="technician">Responsible Technician</Label>
                    <Input id="technician" placeholder="Enter technician name" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="compliance" className="space-y-4 mt-4">
                <div>
                  <Label>Certifications</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['FDA Approved', 'CE Marked', 'ISO 13485', 'ISO 9001', 'UL Listed'].map(cert => (
                      <div key={cert} className="flex items-center space-x-2">
                        <Checkbox id={cert} />
                        <Label htmlFor={cert} className="text-sm">{cert}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lastInspection">Last Inspection</Label>
                    <Input id="lastInspection" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="nextInspection">Next Inspection</Label>
                    <Input id="nextInspection" type="date" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsCreateEquipmentDialogOpen(false)}>
                Cancel
              </Button>
              <Button>Add Equipment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total Equipment</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalEquipment}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.operationalEquipment} operational</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Wrench className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Value</p>
                <p className="text-3xl font-bold text-green-900">${(analytics.totalValue / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-green-600 mt-1">Current asset value</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <DollarSign className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Maintenance Due</p>
                <p className="text-3xl font-bold text-yellow-900">{analytics.maintenanceDue}</p>
                <p className="text-xs text-yellow-600 mt-1">Next 7 days</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-200">
                <Clock className="h-6 w-6 text-yellow-700" />
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
                <AlertTriangle className="h-6 w-6 text-red-700" />
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
                  <SelectValue placeholder="Equipment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Medical">Medical</SelectItem>
                  <SelectItem value="Diagnostic">Diagnostic</SelectItem>
                  <SelectItem value="Surgical">Surgical</SelectItem>
                  <SelectItem value="Therapeutic">Therapeutic</SelectItem>
                  <SelectItem value="Monitoring">Monitoring</SelectItem>
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
                  <SelectItem value="Operational">Operational</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Out of Service">Out of Service</SelectItem>
                  <SelectItem value="Calibration Due">Calibration Due</SelectItem>
                  <SelectItem value="Retired">Retired</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
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
          {filteredEquipment.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {getEquipmentTypeIcon(item.type)}
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
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{item.location.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{item.location.building} - {item.location.room}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{item.manufacturer} {item.model}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Condition</span>
                      <span className={`text-sm font-medium ${getConditionColor(item.condition)}`}>
                        {item.condition}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Efficiency</span>
                      <span className="text-sm font-medium">{item.usage.efficiency}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Value</span>
                      <span className="text-sm font-medium">${(item.cost.currentValue / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Next Maintenance</p>
                      <p className="text-sm font-medium">{item.nextMaintenance.toLocaleDateString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Warranty</p>
                      <p className="text-sm font-medium">{item.warrantyExpiry.toLocaleDateString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Usage</p>
                      <p className="text-sm font-medium">{item.usage.totalHours}h</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'maintenance' && (
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Technician</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maintenanceRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">
                      {equipment.find(e => e.id === record.equipmentId)?.name || 'Unknown'}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{record.type}</Badge>
                    </TableCell>
                    <TableCell>{record.date.toLocaleDateString()}</TableCell>
                    <TableCell>{record.technician}</TableCell>
                    <TableCell className="max-w-xs truncate">{record.description}</TableCell>
                    <TableCell>${record.cost.toLocaleString()}</TableCell>
                    <TableCell>{record.duration}h</TableCell>
                    <TableCell>
                      <Badge className={
                        record.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        record.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {record.status}
                      </Badge>
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

      {viewMode === 'alerts' && (
        <Card>
          <CardHeader>
            <CardTitle>Equipment Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Alert Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">
                      {equipment.find(e => e.id === alert.equipmentId)?.name || 'Unknown'}
                    </TableCell>
                    <TableCell>{alert.type}</TableCell>
                    <TableCell>
                      <Badge className={getAlertSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{alert.message}</TableCell>
                    <TableCell>{alert.date.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Badge className={alert.acknowledged ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}>
                          {alert.acknowledged ? 'Acknowledged' : 'New'}
                        </Badge>
                        {alert.resolved && (
                          <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4" />
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
              <CardTitle>Equipment Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipment.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-medium">{item.usage.efficiency}%</span>
                    </div>
                    <Progress value={item.usage.efficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipment.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-medium">${(item.cost.maintenance / 1000).toFixed(0)}K</span>
                    </div>
                    <Progress value={(item.cost.maintenance / item.cost.purchase) * 100} className="h-2" />
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
