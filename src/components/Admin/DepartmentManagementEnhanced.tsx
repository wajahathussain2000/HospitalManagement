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
  Building2, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users, 
  Phone,
  Mail,
  MapPin,
  Activity,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Clock,
  DollarSign,
  Calendar,
  UserCheck,
  UserX,
  AlertTriangle,
  Info,
  Settings,
  FileText,
  Database,
  Shield,
  Zap,
  Star,
  Award,
  Briefcase,
  Heart,
  Stethoscope,
  ClipboardList,
  Package,
  Wrench,
  Bed,
  Eye,
  Brain,
  Pill,
  Activity as ActivityIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Building as BuildingIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon
} from 'lucide-react';

interface Department {
  id: string;
  name: string;
  description: string;
  headDoctorId?: string;
  headDoctorName?: string;
  isActive: boolean;
  location: string;
  phone: string;
  email: string;
  capacity: number;
  currentOccupancy: number;
  services: string[];
  equipment: string[];
  createdAt: Date;
  updatedAt: Date;
  budget: number;
  monthlyRevenue: number;
  staffCount: number;
  patientSatisfaction: number;
  performanceScore: number;
  emergencyCapacity: number;
  operatingRooms: number;
  beds: number;
  specializedEquipment: string[];
  certifications: string[];
  insuranceAccepted: string[];
  workingHours: {
    start: string;
    end: string;
    days: string[];
  };
  hierarchy: {
    level: number;
    parentDepartment?: string;
    subDepartments: string[];
  };
  metrics: {
    averageWaitTime: number;
    patientVolume: number;
    revenuePerPatient: number;
    readmissionRate: number;
    mortalityRate: number;
    infectionRate: number;
  };
}

interface DepartmentStaff {
  id: string;
  name: string;
  role: string;
  department: string;
  specialization?: string;
  shift: string;
  experience: number;
  performanceScore: number;
}

interface DepartmentBudget {
  id: string;
  department: string;
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
  period: string;
}

export default function DepartmentManagementEnhanced() {
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: '1',
      name: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care with advanced diagnostic and treatment capabilities',
      headDoctorId: 'doc1',
      headDoctorName: 'Dr. Sarah Johnson',
      isActive: true,
      location: 'Building A, Floor 3',
      phone: '+1-555-CARDIO',
      email: 'cardiology@hospital.com',
      capacity: 120,
      currentOccupancy: 85,
      services: ['Cardiac Surgery', 'Angiography', 'Echocardiography', 'Stress Testing', 'Cardiac Rehabilitation'],
      equipment: ['MRI', 'CT Scanner', 'Echo Machine', 'ECG Machine', 'Defibrillator'],
      createdAt: new Date('2020-01-15'),
      updatedAt: new Date('2024-01-15'),
      budget: 2500000,
      monthlyRevenue: 450000,
      staffCount: 45,
      patientSatisfaction: 94,
      performanceScore: 92,
      emergencyCapacity: 20,
      operatingRooms: 4,
      beds: 120,
      specializedEquipment: ['3T MRI', '64-Slice CT', 'Cath Lab', 'Echo Machine'],
      certifications: ['JCI Accredited', 'AHA Certified', 'ISO 15189'],
      insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross', 'Aetna', 'Cigna'],
      workingHours: {
        start: '07:00',
        end: '19:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      hierarchy: {
        level: 1,
        subDepartments: ['Interventional Cardiology', 'Cardiac Surgery', 'Electrophysiology']
      },
      metrics: {
        averageWaitTime: 25,
        patientVolume: 1250,
        revenuePerPatient: 850,
        readmissionRate: 8.5,
        mortalityRate: 2.1,
        infectionRate: 0.8
      }
    },
    {
      id: '2',
      name: 'Emergency Medicine',
      description: '24/7 emergency care with trauma center and critical care capabilities',
      headDoctorId: 'doc2',
      headDoctorName: 'Dr. Michael Chen',
      isActive: true,
      location: 'Ground Floor, Main Building',
      phone: '+1-555-EMERGENCY',
      email: 'emergency@hospital.com',
      capacity: 80,
      currentOccupancy: 65,
      services: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Poison Control', 'Emergency Psychiatry'],
      equipment: ['Ventilators', 'Defibrillators', 'X-Ray', 'Ultrasound', 'Blood Bank'],
      createdAt: new Date('2019-03-20'),
      updatedAt: new Date('2024-01-10'),
      budget: 1800000,
      monthlyRevenue: 320000,
      staffCount: 38,
      patientSatisfaction: 89,
      performanceScore: 88,
      emergencyCapacity: 80,
      operatingRooms: 2,
      beds: 80,
      specializedEquipment: ['Trauma Bay', 'Ventilator', 'Portable X-Ray', 'Ultrasound'],
      certifications: ['Trauma Center Level 1', 'Emergency Medicine Certified'],
      insuranceAccepted: ['All Major Insurances'],
      workingHours: {
        start: '00:00',
        end: '23:59',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      hierarchy: {
        level: 1,
        subDepartments: ['Trauma Unit', 'Critical Care', 'Pediatric Emergency']
      },
      metrics: {
        averageWaitTime: 12,
        patientVolume: 2100,
        revenuePerPatient: 650,
        readmissionRate: 12.3,
        mortalityRate: 4.2,
        infectionRate: 1.2
      }
    },
    {
      id: '3',
      name: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents',
      headDoctorId: 'doc3',
      headDoctorName: 'Dr. Emily Rodriguez',
      isActive: true,
      location: 'Building B, Floor 2',
      phone: '+1-555-PEDIATRIC',
      email: 'pediatrics@hospital.com',
      capacity: 60,
      currentOccupancy: 45,
      services: ['General Pediatrics', 'Neonatal Care', 'Pediatric Surgery', 'Child Psychology', 'Vaccination'],
      equipment: ['Pediatric Monitors', 'Incubators', 'Pediatric Ventilators', 'X-Ray', 'Ultrasound'],
      createdAt: new Date('2021-06-10'),
      updatedAt: new Date('2024-01-12'),
      budget: 1200000,
      monthlyRevenue: 280000,
      staffCount: 32,
      patientSatisfaction: 96,
      performanceScore: 94,
      emergencyCapacity: 15,
      operatingRooms: 3,
      beds: 60,
      specializedEquipment: ['NICU', 'PICU', 'Pediatric OR', 'Child Life Services'],
      certifications: ['Pediatric Certified', 'NICU Level 3'],
      insuranceAccepted: ['Medicaid', 'CHIP', 'Private Insurance'],
      workingHours: {
        start: '08:00',
        end: '18:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      hierarchy: {
        level: 1,
        subDepartments: ['NICU', 'PICU', 'General Pediatrics']
      },
      metrics: {
        averageWaitTime: 18,
        patientVolume: 890,
        revenuePerPatient: 720,
        readmissionRate: 6.8,
        mortalityRate: 1.2,
        infectionRate: 0.5
      }
    }
  ]);

  const [staff, setStaff] = useState<DepartmentStaff[]>([
    { id: '1', name: 'Dr. Sarah Johnson', role: 'Department Head', department: 'Cardiology', specialization: 'Interventional Cardiology', shift: 'Day', experience: 15, performanceScore: 95 },
    { id: '2', name: 'Dr. Michael Chen', role: 'Department Head', department: 'Emergency Medicine', specialization: 'Trauma Surgery', shift: 'Night', experience: 12, performanceScore: 92 },
    { id: '3', name: 'Dr. Emily Rodriguez', role: 'Department Head', department: 'Pediatrics', specialization: 'Neonatology', shift: 'Day', experience: 18, performanceScore: 96 },
    { id: '4', name: 'Nurse Alice Wilson', role: 'Head Nurse', department: 'Cardiology', shift: 'Day', experience: 10, performanceScore: 88 },
    { id: '5', name: 'Nurse Bob Martinez', role: 'Nurse', department: 'Emergency Medicine', shift: 'Night', experience: 8, performanceScore: 85 }
  ]);

  const [budgets, setBudgets] = useState<DepartmentBudget[]>([
    { id: '1', department: 'Cardiology', category: 'Equipment', allocated: 500000, spent: 320000, remaining: 180000, period: '2024 Q1' },
    { id: '2', department: 'Cardiology', category: 'Staff', allocated: 1200000, spent: 1150000, remaining: 50000, period: '2024 Q1' },
    { id: '3', department: 'Emergency Medicine', category: 'Equipment', allocated: 300000, spent: 250000, remaining: 50000, period: '2024 Q1' },
    { id: '4', department: 'Emergency Medicine', category: 'Staff', allocated: 800000, spent: 780000, remaining: 20000, period: '2024 Q1' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'staff' | 'budget' | 'analytics'>('overview');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && dept.isActive) ||
                         (statusFilter === 'inactive' && !dept.isActive);
    
    return matchesSearch && matchesStatus;
  });

  const getDepartmentIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'cardiology':
        return <Heart className="h-5 w-5" />;
      case 'emergency medicine':
        return <ActivityIcon className="h-5 w-5" />;
      case 'pediatrics':
        return <Users className="h-5 w-5" />;
      case 'surgery':
        return <Stethoscope className="h-5 w-5" />;
      case 'radiology':
        return <Eye className="h-5 w-5" />;
      case 'neurology':
        return <Brain className="h-5 w-5" />;
      case 'orthopedics':
        return <Zap className="h-5 w-5" />;
      case 'pulmonology':
        return <Heart className="h-5 w-5" />;
      case 'pharmacy':
        return <Pill className="h-5 w-5" />;
      default:
        return <Building2 className="h-5 w-5" />;
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getOccupancyColor = (occupancy: number) => {
    if (occupancy >= 90) return 'bg-red-100 text-red-800';
    if (occupancy >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const analytics = {
    totalDepartments: departments.length,
    activeDepartments: departments.filter(d => d.isActive).length,
    totalCapacity: departments.reduce((sum, d) => sum + d.capacity, 0),
    totalOccupancy: departments.reduce((sum, d) => sum + d.currentOccupancy, 0),
    totalStaff: departments.reduce((sum, d) => sum + d.staffCount, 0),
    totalBudget: departments.reduce((sum, d) => sum + d.budget, 0),
    totalRevenue: departments.reduce((sum, d) => sum + d.monthlyRevenue, 0),
    avgSatisfaction: Math.round(departments.reduce((sum, d) => sum + d.patientSatisfaction, 0) / departments.length),
    avgPerformance: Math.round(departments.reduce((sum, d) => sum + d.performanceScore, 0) / departments.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Department Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive department oversight with analytics and resource management</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Department</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Department</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Department Name</Label>
                    <Input id="name" placeholder="Enter department name" />
                  </div>
                  <div>
                    <Label htmlFor="headDoctor">Head Doctor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select head doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doc1">Dr. Sarah Johnson</SelectItem>
                        <SelectItem value="doc2">Dr. Michael Chen</SelectItem>
                        <SelectItem value="doc3">Dr. Emily Rodriguez</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter department description" rows={3} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Building, Floor" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Phone number" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="department@hospital.com" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="capacity">Total Capacity</Label>
                    <Input id="capacity" type="number" placeholder="120" />
                  </div>
                  <div>
                    <Label htmlFor="beds">Number of Beds</Label>
                    <Input id="beds" type="number" placeholder="120" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="operatingRooms">Operating Rooms</Label>
                    <Input id="operatingRooms" type="number" placeholder="4" />
                  </div>
                  <div>
                    <Label htmlFor="emergencyCapacity">Emergency Capacity</Label>
                    <Input id="emergencyCapacity" type="number" placeholder="20" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="budget">Annual Budget</Label>
                  <Input id="budget" type="number" placeholder="2500000" />
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4 mt-4">
                <div>
                  <Label>Services Offered</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Cardiac Surgery', 'Angiography', 'Echocardiography', 'Stress Testing', 'Emergency Care', 'Trauma Care', 'Pediatric Care', 'General Surgery'].map(service => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service} />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workingHoursStart">Working Hours Start</Label>
                    <Input id="workingHoursStart" type="time" defaultValue="08:00" />
                  </div>
                  <div>
                    <Label htmlFor="workingHoursEnd">Working Hours End</Label>
                    <Input id="workingHoursEnd" type="time" defaultValue="18:00" />
                  </div>
                </div>
                <div>
                  <Label>Working Days</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox id={day} defaultChecked={day !== 'Sunday'} />
                        <Label htmlFor={day} className="text-sm">{day}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button>Create Department</Button>
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
                <p className="text-sm font-medium text-blue-700">Total Departments</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalDepartments}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.activeDepartments} active</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Building2 className="h-6 w-6 text-blue-700" />
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
                <p className="text-sm font-medium text-purple-700">Total Staff</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.totalStaff}</p>
                <p className="text-xs text-purple-600 mt-1">Across all departments</p>
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
                <p className="text-sm font-medium text-orange-700">Monthly Revenue</p>
                <p className="text-3xl font-bold text-orange-900">{(analytics.totalRevenue / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-orange-600 mt-1">Total revenue</p>
              </div>
              <div className="p-3 rounded-full bg-orange-200">
                <DollarSign className="h-6 w-6 text-orange-700" />
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
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
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
                  <TabsTrigger value="staff">Staff</TabsTrigger>
                  <TabsTrigger value="budget">Budget</TabsTrigger>
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
          {filteredDepartments.map((dept) => (
            <Card key={dept.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {getDepartmentIcon(dept.name)}
                    </div>
                    <span>{dept.name}</span>
                  </CardTitle>
                  <Badge className={dept.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    {dept.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{dept.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Staff: {dept.staffCount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Capacity: {dept.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{dept.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Occupancy</span>
                      <span className={`text-sm font-medium ${getOccupancyColor(dept.currentOccupancy)}`}>
                        {Math.round((dept.currentOccupancy / dept.capacity) * 100)}%
                      </span>
                    </div>
                    <Progress value={(dept.currentOccupancy / dept.capacity) * 100} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Performance</span>
                      <span className={`text-sm font-medium ${getPerformanceColor(dept.performanceScore)}`}>
                        {dept.performanceScore}%
                      </span>
                    </div>
                    <Progress value={dept.performanceScore} className="h-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-sm font-medium">{(dept.monthlyRevenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Satisfaction</p>
                      <p className="text-sm font-medium">{dept.patientSatisfaction}%</p>
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

      {viewMode === 'staff' && (
        <Card>
          <CardHeader>
            <CardTitle>Department Staff Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Shift</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{member.role}</Badge>
                    </TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.specialization || '-'}</TableCell>
                    <TableCell>
                      <Badge className={member.shift === 'Day' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}>
                        {member.shift}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.experience} years</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getPerformanceColor(member.performanceScore)}`}>
                          {member.performanceScore}%
                        </span>
                        <Progress value={member.performanceScore} className="w-16 h-2" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'budget' && (
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Allocated</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead>Remaining</TableHead>
                  <TableHead>Utilization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {budgets.map((budget) => (
                  <TableRow key={budget.id}>
                    <TableCell className="font-medium">{budget.department}</TableCell>
                    <TableCell>{budget.category}</TableCell>
                    <TableCell>{budget.allocated.toLocaleString()}</TableCell>
                    <TableCell>{budget.spent.toLocaleString()}</TableCell>
                    <TableCell>{budget.remaining.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={(budget.spent / budget.allocated) * 100} className="w-16 h-2" />
                        <span className="text-sm">
                          {Math.round((budget.spent / budget.allocated) * 100)}%
                        </span>
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
              <CardTitle>Department Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className={`text-sm font-medium ${getPerformanceColor(dept.performanceScore)}`}>
                        {dept.performanceScore}%
                      </span>
                    </div>
                    <Progress value={dept.performanceScore} className="h-2" />
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
                {departments.map((dept) => (
                  <div key={dept.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-sm font-medium text-green-600">{dept.patientSatisfaction}%</span>
                    </div>
                    <Progress value={dept.patientSatisfaction} className="h-2" />
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
