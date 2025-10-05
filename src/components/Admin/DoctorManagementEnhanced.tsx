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
  Stethoscope, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Mail,
  Phone,
  Calendar,
  Clock,
  DollarSign,
  Award,
  MapPin,
  Star,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Activity,
  Users,
  Heart,
  Brain,
  Eye,
  Zap,
  Shield,
  FileText,
  ClipboardList,
  GraduationCap,
  Briefcase,
  Settings,
  AlertTriangle,
  Info
} from 'lucide-react';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string;
  department: string;
  licenseNumber: string;
  experience: number;
  consultationFee: number;
  isActive: boolean;
  isApproved: boolean;
  rating: number;
  totalPatients: number;
  employeeId: string;
  hireDate: Date;
  salary: number;
  address: string;
  emergencyContact: string;
  performanceScore: number;
  patientSatisfaction: number;
  averageConsultationTime: number;
  monthlyRevenue: number;
  currentAppointments: number;
  maxAppointments: number;
  qualifications: string[];
  certifications: string[];
  languages: string[];
  insuranceAccepted: string[];
  procedures: string[];
  researchInterests: string[];
  publications: number;
  awards: string[];
  mentorshipStatus: string;
  createdAt: Date;
  metrics: {
    patientVolume: number;
    revenuePerPatient: number;
    readmissionRate: number;
    patientOutcomeScore: number;
    efficiencyScore: number;
    collaborationScore: number;
  };
}

export default function DoctorManagementEnhanced() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: '1',
      firstName: 'Dr. Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@hospital.com',
      phone: '+1-555-0101',
      specialization: 'Interventional Cardiology',
      department: 'Cardiology',
      licenseNumber: 'MD123456',
      experience: 15,
      consultationFee: 250,
      isActive: true,
      isApproved: true,
      rating: 4.8,
      totalPatients: 1247,
      employeeId: 'DOC001',
      hireDate: new Date('2018-03-15'),
      salary: 180000,
      address: '123 Medical Plaza, Health City',
      emergencyContact: '+1-555-0102',
      performanceScore: 95,
      patientSatisfaction: 96,
      averageConsultationTime: 45,
      monthlyRevenue: 85000,
      currentAppointments: 8,
      maxAppointments: 12,
      qualifications: ['MD', 'FACC', 'Board Certified'],
      certifications: ['ACLS', 'BLS', 'Advanced Cardiac Life Support'],
      languages: ['English', 'Spanish'],
      insuranceAccepted: ['Medicare', 'Medicaid', 'Blue Cross', 'Aetna'],
      procedures: ['Angioplasty', 'Stent Placement', 'Cardiac Catheterization'],
      researchInterests: ['Preventive Cardiology', 'Heart Failure Management'],
      publications: 23,
      awards: ['Physician of the Year 2023', 'Excellence in Patient Care'],
      mentorshipStatus: 'Active',
      createdAt: new Date('2018-03-15'),
      metrics: {
        patientVolume: 1250,
        revenuePerPatient: 680,
        readmissionRate: 8.5,
        patientOutcomeScore: 94,
        efficiencyScore: 92,
        collaborationScore: 89
      }
    },
    {
      id: '2',
      firstName: 'Dr. Michael',
      lastName: 'Chen',
      email: 'michael.chen@hospital.com',
      phone: '+1-555-0201',
      specialization: 'Trauma Surgery',
      department: 'Emergency Medicine',
      licenseNumber: 'MD789012',
      experience: 12,
      consultationFee: 300,
      isActive: true,
      isApproved: true,
      rating: 4.7,
      totalPatients: 892,
      employeeId: 'DOC002',
      hireDate: new Date('2020-06-01'),
      salary: 165000,
      address: '456 Emergency Lane, Trauma Center',
      emergencyContact: '+1-555-0202',
      performanceScore: 88,
      patientSatisfaction: 91,
      averageConsultationTime: 30,
      monthlyRevenue: 72000,
      currentAppointments: 5,
      maxAppointments: 15,
      qualifications: ['MD', 'FACS', 'Trauma Certified'],
      certifications: ['ATLS', 'ACLS', 'Trauma Surgery Certified'],
      languages: ['English', 'Mandarin'],
      insuranceAccepted: ['All Major Insurances'],
      procedures: ['Emergency Surgery', 'Trauma Assessment', 'Critical Care'],
      researchInterests: ['Trauma Outcomes', 'Emergency Protocols'],
      publications: 18,
      awards: ['Trauma Excellence Award'],
      mentorshipStatus: 'Active',
      createdAt: new Date('2020-06-01'),
      metrics: {
        patientVolume: 900,
        revenuePerPatient: 800,
        readmissionRate: 12.3,
        patientOutcomeScore: 89,
        efficiencyScore: 85,
        collaborationScore: 92
      }
    },
    {
      id: '3',
      firstName: 'Dr. Emily',
      lastName: 'Rodriguez',
      email: 'emily.rodriguez@hospital.com',
      phone: '+1-555-0301',
      specialization: 'Neonatology',
      department: 'Pediatrics',
      licenseNumber: 'MD345678',
      experience: 18,
      consultationFee: 200,
      isActive: true,
      isApproved: true,
      rating: 4.9,
      totalPatients: 756,
      employeeId: 'DOC003',
      hireDate: new Date('2015-08-20'),
      salary: 155000,
      address: '789 Pediatric Way, Children\'s Hospital',
      emergencyContact: '+1-555-0302',
      performanceScore: 97,
      patientSatisfaction: 98,
      averageConsultationTime: 35,
      monthlyRevenue: 68000,
      currentAppointments: 6,
      maxAppointments: 10,
      qualifications: ['MD', 'Pediatric Certified', 'Neonatology Fellowship'],
      certifications: ['NALS', 'PALS', 'Neonatal Resuscitation'],
      languages: ['English', 'Spanish', 'Portuguese'],
      insuranceAccepted: ['Medicaid', 'CHIP', 'Private Insurance'],
      procedures: ['Neonatal Care', 'Preterm Birth Management', 'NICU Procedures'],
      researchInterests: ['Preterm Birth Prevention', 'Neonatal Outcomes'],
      publications: 31,
      awards: ['Pediatric Excellence Award', 'Research Innovation Award'],
      mentorshipStatus: 'Senior Mentor',
      createdAt: new Date('2015-08-20'),
      metrics: {
        patientVolume: 760,
        revenuePerPatient: 895,
        readmissionRate: 6.8,
        patientOutcomeScore: 96,
        efficiencyScore: 94,
        collaborationScore: 95
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [specializationFilter, setSpecializationFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'schedule' | 'performance' | 'analytics'>('overview');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || doctor.department === departmentFilter;
    const matchesSpecialization = specializationFilter === 'all' || doctor.specialization === specializationFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && doctor.isActive) ||
                         (statusFilter === 'inactive' && !doctor.isActive) ||
                         (statusFilter === 'approved' && doctor.isApproved);
    
    return matchesSearch && matchesDepartment && matchesSpecialization && matchesStatus;
  });

  const getSpecializationIcon = (specialization: string) => {
    const spec = specialization.toLowerCase();
    if (spec.includes('cardio')) return <Heart className="h-5 w-5" />;
    if (spec.includes('neuro')) return <Brain className="h-5 w-5" />;
    if (spec.includes('ortho')) return <Zap className="h-5 w-5" />;
    if (spec.includes('pedia')) return <Users className="h-5 w-5" />;
    if (spec.includes('pulmo')) return <Heart className="h-5 w-5" />;
    if (spec.includes('trauma') || spec.includes('emergency')) return <Activity className="h-5 w-5" />;
    if (spec.includes('radio')) return <Eye className="h-5 w-5" />;
    return <Stethoscope className="h-5 w-5" />;
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const analytics = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter(d => d.isActive).length,
    totalPatients: doctors.reduce((sum, d) => sum + d.totalPatients, 0),
    totalRevenue: doctors.reduce((sum, d) => sum + d.monthlyRevenue, 0),
    avgRating: Math.round((doctors.reduce((sum, d) => sum + d.rating, 0) / doctors.length) * 10) / 10,
    avgPerformance: Math.round(doctors.reduce((sum, d) => sum + d.performanceScore, 0) / doctors.length),
    avgSatisfaction: Math.round(doctors.reduce((sum, d) => sum + d.patientSatisfaction, 0) / doctors.length),
    totalAppointments: doctors.reduce((sum, d) => sum + d.currentAppointments, 0),
    departmentDistribution: doctors.reduce((acc, doctor) => {
      acc[doctor.department] = (acc[doctor.department] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive physician oversight with performance analytics and scheduling</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Doctor</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="doctor@hospital.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1-555-XXXX" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter full address" rows={2} />
                </div>
              </TabsContent>
              
              <TabsContent value="professional" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="specialization">Specialization</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="emergency">Emergency Medicine</SelectItem>
                        <SelectItem value="surgery">General Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cardiology">Cardiology</SelectItem>
                        <SelectItem value="Emergency Medicine">Emergency Medicine</SelectItem>
                        <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="Surgery">Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input id="licenseNumber" placeholder="MD123456" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="qualifications">Qualifications</Label>
                  <Textarea id="qualifications" placeholder="MD, PhD, Board Certified, etc." rows={2} />
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="consultationFee">Consultation Fee</Label>
                    <Input id="consultationFee" type="number" placeholder="250" />
                  </div>
                  <div>
                    <Label htmlFor="maxAppointments">Max Daily Appointments</Label>
                    <Input id="maxAppointments" type="number" placeholder="12" />
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
              
              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salary">Annual Salary</Label>
                    <Input id="salary" type="number" placeholder="150000" />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input id="emergencyContact" placeholder="+1-555-XXXX" />
                  </div>
                </div>
                <div>
                  <Label>Languages</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['English', 'Spanish', 'French', 'German', 'Mandarin', 'Portuguese'].map(lang => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox id={lang} defaultChecked={lang === 'English'} />
                        <Label htmlFor={lang} className="text-sm">{lang}</Label>
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
              <Button>Add Doctor</Button>
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
                <p className="text-sm font-medium text-blue-700">Total Doctors</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalDoctors}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.activeDoctors} active</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Stethoscope className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Patients</p>
                <p className="text-3xl font-bold text-green-900">{analytics.totalPatients.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">Across all doctors</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <Users className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Avg Rating</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.avgRating}</p>
                <p className="text-xs text-purple-600 mt-1">Patient satisfaction</p>
              </div>
              <div className="p-3 rounded-full bg-purple-200">
                <Star className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Monthly Revenue</p>
                <p className="text-3xl font-bold text-orange-900">{(analytics.totalRevenue / 1000).toFixed(0)}K</p>
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
                  placeholder="Search doctors by name, email, or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Emergency Medicine">Emergency Medicine</SelectItem>
                  <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="Surgery">Surgery</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={specializationFilter} onValueChange={setSpecializationFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  <SelectItem value="Interventional Cardiology">Interventional Cardiology</SelectItem>
                  <SelectItem value="Trauma Surgery">Trauma Surgery</SelectItem>
                  <SelectItem value="Neonatology">Neonatology</SelectItem>
                  <SelectItem value="General Surgery">General Surgery</SelectItem>
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
                  <SelectItem value="approved">Approved</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {viewMode === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {getSpecializationIcon(doctor.specialization)}
                    </div>
                    <span>Dr. {doctor.lastName}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    {getRatingStars(doctor.rating)}
                    <span className="text-sm text-gray-600 ml-1">({doctor.rating})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600">{doctor.department}</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{doctor.phone}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Performance</span>
                      <span className={`text-sm font-medium ${getPerformanceColor(doctor.performanceScore)}`}>
                        {doctor.performanceScore}%
                      </span>
                    </div>
                    <Progress value={doctor.performanceScore} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Satisfaction</span>
                      <span className="text-sm font-medium text-green-600">
                        {doctor.patientSatisfaction}%
                      </span>
                    </div>
                    <Progress value={doctor.patientSatisfaction} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Patients</p>
                      <p className="text-sm font-medium">{doctor.totalPatients}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm font-medium">{doctor.experience}y</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-sm font-medium">{(doctor.monthlyRevenue / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-2">
                    <Badge className={doctor.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {doctor.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    {doctor.isApproved && (
                      <Badge className="bg-blue-100 text-blue-800">Approved</Badge>
                    )}
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

      {viewMode === 'performance' && (
        <Card>
          <CardHeader>
            <CardTitle>Doctor Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Performance Score</TableHead>
                  <TableHead>Patient Satisfaction</TableHead>
                  <TableHead>Patient Volume</TableHead>
                  <TableHead>Revenue/Patient</TableHead>
                  <TableHead>Readmission Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDoctors.map((doctor) => (
                  <TableRow key={doctor.id}>
                    <TableCell className="font-medium">
                      Dr. {doctor.firstName} {doctor.lastName}
                    </TableCell>
                    <TableCell>{doctor.specialization}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getPerformanceColor(doctor.performanceScore)}`}>
                          {doctor.performanceScore}%
                        </span>
                        <Progress value={doctor.performanceScore} className="w-16 h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-green-600">
                          {doctor.patientSatisfaction}%
                        </span>
                        <Progress value={doctor.patientSatisfaction} className="w-16 h-2" />
                      </div>
                    </TableCell>
                    <TableCell>{doctor.totalPatients}</TableCell>
                    <TableCell>{doctor.metrics.revenuePerPatient}</TableCell>
                    <TableCell>{doctor.metrics.readmissionRate}%</TableCell>
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
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(analytics.departmentDistribution).map(([dept, count]) => (
                  <div key={dept} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{dept}</span>
                      <span className="text-sm font-medium">{count} doctors</span>
                    </div>
                    <Progress value={(count / analytics.totalDoctors) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Performance Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredDoctors.map((doctor) => (
                  <div key={doctor.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Dr. {doctor.lastName}</span>
                      <span className={`text-sm font-medium ${getPerformanceColor(doctor.performanceScore)}`}>
                        {doctor.performanceScore}%
                      </span>
                    </div>
                    <Progress value={doctor.performanceScore} className="h-2" />
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
