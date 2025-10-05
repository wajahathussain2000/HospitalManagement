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
  Bed, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users,
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Calendar,
  User,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Shield,
  Settings,
  Eye as EyeIcon,
  Printer,
  RefreshCw,
  Info,
  Star,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
  Wrench,
  Zap,
  FileText,
  ClipboardList,
  DollarSign,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Activity as ActivityIcon,
  Users as UsersIcon,
  Bed as BedIcon,
  AlertTriangle as AlertTriangleIcon
} from 'lucide-react';

interface Ward {
  id: string;
  name: string;
  type: 'General' | 'ICU' | 'Emergency' | 'Pediatric' | 'Cardiac' | 'Surgical' | 'Maternity' | 'Psychiatric';
  floor: number;
  building: string;
  capacity: number;
  currentOccupancy: number;
  availableBeds: number;
  reservedBeds: number;
  maintenanceBeds: number;
  headNurse: string;
  headNurseId: string;
  isActive: boolean;
  description: string;
  equipment: string[];
  services: string[];
  visitingHours: {
    start: string;
    end: string;
    days: string[];
  };
  policies: string[];
  emergencyProcedures: string[];
  contactInfo: {
    phone: string;
    email: string;
    extension: string;
  };
  location: {
    building: string;
    floor: number;
    wing: string;
    room: string;
  };
  amenities: string[];
  specialRequirements: string[];
  cleaningSchedule: {
    daily: string[];
    weekly: string[];
    monthly: string[];
  };
  maintenanceSchedule: {
    nextMaintenance: Date;
    lastMaintenance: Date;
    frequency: string;
    responsible: string;
  };
  performanceMetrics: {
    patientSatisfaction: number;
    averageStayDuration: number;
    readmissionRate: number;
    infectionRate: number;
    turnoverRate: number;
    utilizationRate: number;
  };
  financialMetrics: {
    dailyRevenue: number;
    monthlyRevenue: number;
    costPerBed: number;
    profitMargin: number;
  };
  staff: {
    nurses: number;
    doctors: number;
    support: number;
    total: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  admissionDate: Date;
  expectedDischarge: Date;
  diagnosis: string;
  condition: 'Stable' | 'Critical' | 'Improving' | 'Deteriorating';
  bedNumber: string;
  doctor: string;
  nurse: string;
  insurance: string;
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
}

interface Bed {
  id: string;
  number: string;
  type: 'Standard' | 'Private' | 'ICU' | 'Isolation';
  status: 'Available' | 'Occupied' | 'Maintenance' | 'Reserved';
  patientId?: string;
  patientName?: string;
  admissionDate?: Date;
  equipment: string[];
  lastCleaned: Date;
  nextMaintenance: Date;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

export default function WardManagementEnhanced() {
  const [wards, setWards] = useState<Ward[]>([
    {
      id: '1',
      name: 'Cardiology Ward',
      type: 'Cardiac',
      floor: 3,
      building: 'Main Building',
      capacity: 25,
      currentOccupancy: 18,
      availableBeds: 5,
      reservedBeds: 2,
      maintenanceBeds: 0,
      headNurse: 'Sarah Wilson',
      headNurseId: 'NURSE001',
      isActive: true,
      description: 'Specialized cardiac care unit with advanced monitoring equipment',
      equipment: ['Cardiac Monitors', 'Defibrillators', 'Ventilators', 'IV Pumps'],
      services: ['Cardiac Monitoring', 'Post-Surgical Care', 'Rehabilitation'],
      visitingHours: {
        start: '10:00',
        end: '20:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      policies: ['No smoking', 'Quiet hours 22:00-06:00', 'Visitors must check-in'],
      emergencyProcedures: ['Code Blue', 'Rapid Response', 'Emergency Evacuation'],
      contactInfo: {
        phone: '+1-555-CARDIO',
        email: 'cardiology@hospital.com',
        extension: '3001'
      },
      location: {
        building: 'Main Building',
        floor: 3,
        wing: 'East Wing',
        room: '3E-100'
      },
      amenities: ['Private Bathrooms', 'TV', 'WiFi', 'Family Area'],
      specialRequirements: ['Cardiac Monitoring', 'Special Diet', 'Restricted Movement'],
      cleaningSchedule: {
        daily: ['Room cleaning', 'Equipment sanitization'],
        weekly: ['Deep cleaning', 'Equipment maintenance'],
        monthly: ['HVAC cleaning', 'Window cleaning']
      },
      maintenanceSchedule: {
        nextMaintenance: new Date('2024-02-15'),
        lastMaintenance: new Date('2024-01-15'),
        frequency: 'Monthly',
        responsible: 'Maintenance Team A'
      },
      performanceMetrics: {
        patientSatisfaction: 94,
        averageStayDuration: 4.2,
        readmissionRate: 8.5,
        infectionRate: 1.2,
        turnoverRate: 2.1,
        utilizationRate: 72
      },
      financialMetrics: {
        dailyRevenue: 8500,
        monthlyRevenue: 255000,
        costPerBed: 1200,
        profitMargin: 28.5
      },
      staff: {
        nurses: 8,
        doctors: 3,
        support: 2,
        total: 13
      },
      createdAt: new Date('2020-03-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Emergency Ward',
      type: 'Emergency',
      floor: 1,
      building: 'Emergency Building',
      capacity: 40,
      currentOccupancy: 35,
      availableBeds: 3,
      reservedBeds: 2,
      maintenanceBeds: 0,
      headNurse: 'Michael Brown',
      headNurseId: 'NURSE002',
      isActive: true,
      description: '24/7 emergency care with trauma capabilities',
      equipment: ['Trauma Bays', 'Ventilators', 'Defibrillators', 'X-Ray', 'Ultrasound'],
      services: ['Trauma Care', 'Emergency Surgery', 'Critical Care'],
      visitingHours: {
        start: '00:00',
        end: '23:59',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      policies: ['24/7 access', 'Emergency protocols', 'Limited visitors'],
      emergencyProcedures: ['Trauma Alert', 'Code Blue', 'Mass Casualty'],
      contactInfo: {
        phone: '+1-555-EMERGENCY',
        email: 'emergency@hospital.com',
        extension: '911'
      },
      location: {
        building: 'Emergency Building',
        floor: 1,
        wing: 'Main Wing',
        room: '1M-200'
      },
      amenities: ['Emergency Equipment', 'Family Waiting Area', 'Cafeteria'],
      specialRequirements: ['Emergency Access', 'Trauma Equipment', 'Rapid Response'],
      cleaningSchedule: {
        daily: ['Continuous cleaning', 'Equipment sterilization'],
        weekly: ['Deep sanitization', 'Equipment calibration'],
        monthly: ['System maintenance', 'Safety checks']
      },
      maintenanceSchedule: {
        nextMaintenance: new Date('2024-01-25'),
        lastMaintenance: new Date('2024-01-10'),
        frequency: 'Bi-weekly',
        responsible: 'Emergency Maintenance Team'
      },
      performanceMetrics: {
        patientSatisfaction: 89,
        averageStayDuration: 2.8,
        readmissionRate: 12.3,
        infectionRate: 2.1,
        turnoverRate: 3.5,
        utilizationRate: 87.5
      },
      financialMetrics: {
        dailyRevenue: 12500,
        monthlyRevenue: 375000,
        costPerBed: 1500,
        profitMargin: 32.1
      },
      staff: {
        nurses: 15,
        doctors: 8,
        support: 5,
        total: 28
      },
      createdAt: new Date('2019-01-10'),
      updatedAt: new Date('2024-01-10')
    }
  ]);

  const [patients, setPatients] = useState<Patient[]>([
    {
      id: '1',
      name: 'John Smith',
      age: 65,
      gender: 'Male',
      admissionDate: new Date('2024-01-10'),
      expectedDischarge: new Date('2024-01-18'),
      diagnosis: 'Myocardial Infarction',
      condition: 'Improving',
      bedNumber: '3E-101',
      doctor: 'Dr. Sarah Johnson',
      nurse: 'Alice Wilson',
      insurance: 'Blue Cross',
      priority: 'High'
    },
    {
      id: '2',
      name: 'Mary Johnson',
      age: 45,
      gender: 'Female',
      admissionDate: new Date('2024-01-12'),
      expectedDischarge: new Date('2024-01-16'),
      diagnosis: 'Pneumonia',
      condition: 'Stable',
      bedNumber: '3E-102',
      doctor: 'Dr. Michael Chen',
      nurse: 'Bob Martinez',
      insurance: 'Aetna',
      priority: 'Medium'
    }
  ]);

  const [beds, setBeds] = useState<Bed[]>([
    {
      id: '1',
      number: '3E-101',
      type: 'Standard',
      status: 'Occupied',
      patientId: '1',
      patientName: 'John Smith',
      admissionDate: new Date('2024-01-10'),
      equipment: ['Cardiac Monitor', 'IV Pump'],
      lastCleaned: new Date('2024-01-15'),
      nextMaintenance: new Date('2024-02-15'),
      condition: 'Good'
    },
    {
      id: '2',
      number: '3E-102',
      type: 'Standard',
      status: 'Occupied',
      patientId: '2',
      patientName: 'Mary Johnson',
      admissionDate: new Date('2024-01-12'),
      equipment: ['Oxygen Tank', 'IV Pump'],
      lastCleaned: new Date('2024-01-15'),
      nextMaintenance: new Date('2024-02-15'),
      condition: 'Excellent'
    },
    {
      id: '3',
      number: '3E-103',
      type: 'Standard',
      status: 'Available',
      equipment: ['Cardiac Monitor', 'IV Pump'],
      lastCleaned: new Date('2024-01-15'),
      nextMaintenance: new Date('2024-02-15'),
      condition: 'Good'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'beds' | 'patients' | 'analytics'>('overview');
  const [isCreateWardDialogOpen, setIsCreateWardDialogOpen] = useState(false);
  const [isEditWardDialogOpen, setIsEditWardDialogOpen] = useState(false);
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null);

  const filteredWards = wards.filter(ward => {
    const matchesSearch = ward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ward.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ward.location.building.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || ward.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && ward.isActive) ||
                         (statusFilter === 'inactive' && !ward.isActive);
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getWardTypeIcon = (type: string) => {
    switch (type) {
      case 'Cardiac':
        return <Heart className="h-5 w-5" />;
      case 'Emergency':
        return <Activity className="h-5 w-5" />;
      case 'Pediatric':
        return <Users className="h-5 w-5" />;
      case 'ICU':
        return <Shield className="h-5 w-5" />;
      case 'Surgical':
        return <Stethoscope className="h-5 w-5" />;
      case 'Maternity':
        return <Users className="h-5 w-5" />;
      case 'Psychiatric':
        return <Brain className="h-5 w-5" />;
      default:
        return <Bed className="h-5 w-5" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Stable':
        return 'bg-green-100 text-green-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'Improving':
        return 'bg-blue-100 text-blue-800';
      case 'Deteriorating':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBedStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Occupied':
        return 'bg-blue-100 text-blue-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reserved':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const analytics = {
    totalWards: wards.length,
    activeWards: wards.filter(w => w.isActive).length,
    totalCapacity: wards.reduce((sum, w) => sum + w.capacity, 0),
    totalOccupancy: wards.reduce((sum, w) => sum + w.currentOccupancy, 0),
    totalAvailableBeds: wards.reduce((sum, w) => sum + w.availableBeds, 0),
    totalStaff: wards.reduce((sum, w) => sum + w.staff.total, 0),
    avgUtilization: Math.round(wards.reduce((sum, w) => sum + w.performanceMetrics.utilizationRate, 0) / wards.length),
    avgSatisfaction: Math.round(wards.reduce((sum, w) => sum + w.performanceMetrics.patientSatisfaction, 0) / wards.length),
    totalRevenue: wards.reduce((sum, w) => sum + w.financialMetrics.monthlyRevenue, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Ward Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive ward oversight with bed allocation and patient flow analytics</p>
        </div>
        <Dialog open={isCreateWardDialogOpen} onOpenChange={setIsCreateWardDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Ward</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Ward</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="capacity">Capacity</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ward Name</Label>
                    <Input id="name" placeholder="Enter ward name" />
                  </div>
                  <div>
                    <Label htmlFor="type">Ward Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ward type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="ICU">ICU</SelectItem>
                        <SelectItem value="Emergency">Emergency</SelectItem>
                        <SelectItem value="Pediatric">Pediatric</SelectItem>
                        <SelectItem value="Cardiac">Cardiac</SelectItem>
                        <SelectItem value="Surgical">Surgical</SelectItem>
                        <SelectItem value="Maternity">Maternity</SelectItem>
                        <SelectItem value="Psychiatric">Psychiatric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter ward description" rows={3} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="building">Building</Label>
                    <Input id="building" placeholder="Building name" />
                  </div>
                  <div>
                    <Label htmlFor="floor">Floor</Label>
                    <Input id="floor" type="number" placeholder="Floor number" />
                  </div>
                  <div>
                    <Label htmlFor="wing">Wing</Label>
                    <Input id="wing" placeholder="Wing name" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="capacity" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="capacity">Total Capacity</Label>
                    <Input id="capacity" type="number" placeholder="25" />
                  </div>
                  <div>
                    <Label htmlFor="headNurse">Head Nurse</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select head nurse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nurse1">Sarah Wilson</SelectItem>
                        <SelectItem value="nurse2">Michael Brown</SelectItem>
                        <SelectItem value="nurse3">Emily Davis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="nurses">Nurses</Label>
                    <Input id="nurses" type="number" placeholder="8" />
                  </div>
                  <div>
                    <Label htmlFor="doctors">Doctors</Label>
                    <Input id="doctors" type="number" placeholder="3" />
                  </div>
                  <div>
                    <Label htmlFor="support">Support Staff</Label>
                    <Input id="support" type="number" placeholder="2" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4 mt-4">
                <div>
                  <Label>Services Offered</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Monitoring', 'Post-Surgical Care', 'Rehabilitation', 'Emergency Care', 'Trauma Care', 'Critical Care'].map(service => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service} />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Equipment Available</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Cardiac Monitors', 'Ventilators', 'Defibrillators', 'IV Pumps', 'X-Ray', 'Ultrasound'].map(equipment => (
                      <div key={equipment} className="flex items-center space-x-2">
                        <Checkbox id={equipment} />
                        <Label htmlFor={equipment} className="text-sm">{equipment}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="visitingStart">Visiting Hours Start</Label>
                    <Input id="visitingStart" type="time" defaultValue="10:00" />
                  </div>
                  <div>
                    <Label htmlFor="visitingEnd">Visiting Hours End</Label>
                    <Input id="visitingEnd" type="time" defaultValue="20:00" />
                  </div>
                </div>
                <div>
                  <Label>Contact Information</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1-555-XXXX" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="ward@hospital.com" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsCreateWardDialogOpen(false)}>
                Cancel
              </Button>
              <Button>Create Ward</Button>
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
                <p className="text-sm font-medium text-blue-700">Total Wards</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalWards}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.activeWards} active</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Building className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Capacity</p>
                <p className="text-3xl font-bold text-green-900">{analytics.totalCapacity}</p>
                <p className="text-xs text-green-600 mt-1">{analytics.totalOccupancy} occupied</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <Bed className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Available Beds</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.totalAvailableBeds}</p>
                <p className="text-xs text-purple-600 mt-1">Ready for patients</p>
              </div>
              <div className="p-3 rounded-full bg-purple-200">
                <Users className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Avg Utilization</p>
                <p className="text-3xl font-bold text-orange-900">{analytics.avgUtilization}%</p>
                <p className="text-xs text-orange-600 mt-1">Ward efficiency</p>
              </div>
              <div className="p-3 rounded-full bg-orange-200">
                <Target className="h-6 w-6 text-orange-700" />
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
                  placeholder="Search wards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Ward Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="ICU">ICU</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                  <SelectItem value="Pediatric">Pediatric</SelectItem>
                  <SelectItem value="Cardiac">Cardiac</SelectItem>
                  <SelectItem value="Surgical">Surgical</SelectItem>
                  <SelectItem value="Maternity">Maternity</SelectItem>
                  <SelectItem value="Psychiatric">Psychiatric</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="beds">Beds</TabsTrigger>
                  <TabsTrigger value="patients">Patients</TabsTrigger>
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
          {filteredWards.map((ward) => (
            <Card key={ward.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {getWardTypeIcon(ward.type)}
                    </div>
                    <span>{ward.name}</span>
                  </CardTitle>
                  <Badge className={ward.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    {ward.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{ward.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Bed className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Capacity: {ward.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Occupancy: {ward.currentOccupancy}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{ward.location.building} - Floor {ward.floor}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Utilization</span>
                      <span className="text-sm font-medium">{ward.performanceMetrics.utilizationRate}%</span>
                    </div>
                    <Progress value={ward.performanceMetrics.utilizationRate} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Satisfaction</span>
                      <span className="text-sm font-medium text-green-600">{ward.performanceMetrics.patientSatisfaction}%</span>
                    </div>
                    <Progress value={ward.performanceMetrics.patientSatisfaction} className="h-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Available</p>
                      <p className="text-sm font-medium text-green-600">{ward.availableBeds}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Staff</p>
                      <p className="text-sm font-medium">{ward.staff.total}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-sm font-medium">${(ward.financialMetrics.monthlyRevenue / 1000).toFixed(0)}K</p>
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

      {viewMode === 'beds' && (
        <Card>
          <CardHeader>
            <CardTitle>Bed Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bed Number</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Admission Date</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Next Maintenance</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beds.map((bed) => (
                  <TableRow key={bed.id}>
                    <TableCell className="font-medium">{bed.number}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{bed.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getBedStatusColor(bed.status)}>
                        {bed.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {bed.patientName ? (
                        <div>
                          <p className="font-medium">{bed.patientName}</p>
                          <p className="text-sm text-gray-600">ID: {bed.patientId}</p>
                        </div>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {bed.admissionDate ? bed.admissionDate.toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{bed.condition}</Badge>
                    </TableCell>
                    <TableCell>{bed.nextMaintenance.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
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

      {viewMode === 'patients' && (
        <Card>
          <CardHeader>
            <CardTitle>Current Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Bed</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Admission Date</TableHead>
                  <TableHead>Expected Discharge</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.bedNumber}</TableCell>
                    <TableCell>{patient.diagnosis}</TableCell>
                    <TableCell>
                      <Badge className={getConditionColor(patient.condition)}>
                        {patient.condition}
                      </Badge>
                    </TableCell>
                    <TableCell>{patient.doctor}</TableCell>
                    <TableCell>{patient.admissionDate.toLocaleDateString()}</TableCell>
                    <TableCell>{patient.expectedDischarge.toLocaleDateString()}</TableCell>
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
              <CardTitle>Ward Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wards.map((ward) => (
                  <div key={ward.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{ward.name}</span>
                      <span className="text-sm font-medium">{ward.performanceMetrics.utilizationRate}%</span>
                    </div>
                    <Progress value={ward.performanceMetrics.utilizationRate} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Patient Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wards.map((ward) => (
                  <div key={ward.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{ward.name}</span>
                      <span className="text-sm font-medium text-green-600">{ward.performanceMetrics.patientSatisfaction}%</span>
                    </div>
                    <Progress value={ward.performanceMetrics.patientSatisfaction} className="h-2" />
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
