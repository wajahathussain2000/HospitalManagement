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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  availability: {
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
    sunday: string[];
  };
  qualifications: string[];
  createdAt: Date;
}

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: '1',
      firstName: 'Dr. John',
      lastName: 'Smith',
      email: 'john.smith@hospital.com',
      phone: '+1234567890',
      specialization: 'Cardiologist',
      department: 'Cardiology',
      licenseNumber: 'MD12345',
      experience: 15,
      consultationFee: 500,
      isActive: true,
      isApproved: true,
      rating: 4.8,
      totalPatients: 1250,
      availability: {
        monday: ['09:00-17:00'],
        tuesday: ['09:00-17:00'],
        wednesday: ['09:00-17:00'],
        thursday: ['09:00-17:00'],
        friday: ['09:00-17:00'],
        saturday: ['09:00-13:00'],
        sunday: []
      },
      qualifications: ['MBBS', 'MD Cardiology', 'Fellowship in Interventional Cardiology'],
      createdAt: new Date('2024-01-01')
    },
    {
      id: '2',
      firstName: 'Dr. Jane',
      lastName: 'Doe',
      email: 'jane.doe@hospital.com',
      phone: '+1234567891',
      specialization: 'Emergency Medicine',
      department: 'Emergency',
      licenseNumber: 'MD12346',
      experience: 12,
      consultationFee: 400,
      isActive: true,
      isApproved: true,
      rating: 4.9,
      totalPatients: 2100,
      availability: {
        monday: ['08:00-20:00'],
        tuesday: ['08:00-20:00'],
        wednesday: ['08:00-20:00'],
        thursday: ['08:00-20:00'],
        friday: ['08:00-20:00'],
        saturday: ['08:00-20:00'],
        sunday: ['08:00-20:00']
      },
      qualifications: ['MBBS', 'MD Emergency Medicine', 'ATLS Certified'],
      createdAt: new Date('2024-01-02')
    },
    {
      id: '3',
      firstName: 'Dr. Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@hospital.com',
      phone: '+1234567892',
      specialization: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      licenseNumber: 'MD12347',
      experience: 20,
      consultationFee: 600,
      isActive: false,
      isApproved: false,
      rating: 4.7,
      totalPatients: 980,
      availability: {
        monday: ['10:00-18:00'],
        tuesday: ['10:00-18:00'],
        wednesday: ['10:00-18:00'],
        thursday: ['10:00-18:00'],
        friday: ['10:00-18:00'],
        saturday: [],
        sunday: []
      },
      qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Joint Replacement'],
      createdAt: new Date('2024-01-03')
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || doctor.department === departmentFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && doctor.isActive) ||
                         (statusFilter === 'inactive' && !doctor.isActive) ||
                         (statusFilter === 'pending' && !doctor.isApproved);
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (doctor: Doctor) => {
    if (!doctor.isApproved) {
      return <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>;
    }
    if (!doctor.isActive) {
      return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
    }
    return <Badge className="bg-green-100 text-green-800">Active</Badge>;
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
          <p className="text-gray-600 mt-1">Manage doctor profiles, schedules, and approvals</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Doctor</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Create New Doctor</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4">
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
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
              </TabsContent>
              <TabsContent value="professional" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" placeholder="Enter specialization" />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input id="licenseNumber" placeholder="Enter license number" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience (Years)</Label>
                    <Input id="experience" type="number" placeholder="Enter experience" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="consultationFee">Consultation Fee</Label>
                  <Input id="consultationFee" type="number" placeholder="Enter consultation fee" />
                </div>
              </TabsContent>
              <TabsContent value="schedule" className="space-y-4">
                <div className="text-sm text-gray-600">
                  Schedule configuration will be available after doctor creation.
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button>Create Doctor</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                  <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Doctors Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Stethoscope className="h-5 w-5 mr-2" />
            Doctors ({filteredDoctors.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{doctor.firstName} {doctor.lastName}</p>
                        <p className="text-sm text-gray-600">{doctor.licenseNumber}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{doctor.specialization}</Badge>
                  </TableCell>
                  <TableCell>{doctor.department}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-gray-400" />
                      <span>{doctor.experience} years</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {getRatingStars(doctor.rating)}
                      <span className="text-sm text-gray-600">({doctor.totalPatients})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>₹{doctor.consultationFee}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(doctor)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedDoctor(doctor);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      {!doctor.isApproved && (
                        <Button variant="outline" size="sm" className="text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
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

      {/* Edit Doctor Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit Doctor</DialogTitle>
          </DialogHeader>
          {selectedDoctor && (
            <div className="space-y-4">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="editFirstName">First Name</Label>
                      <Input id="editFirstName" defaultValue={selectedDoctor.firstName} />
                    </div>
                    <div>
                      <Label htmlFor="editLastName">Last Name</Label>
                      <Input id="editLastName" defaultValue={selectedDoctor.lastName} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="editEmail">Email</Label>
                    <Input id="editEmail" type="email" defaultValue={selectedDoctor.email} />
                  </div>
                  <div>
                    <Label htmlFor="editPhone">Phone</Label>
                    <Input id="editPhone" defaultValue={selectedDoctor.phone} />
                  </div>
                </TabsContent>
                <TabsContent value="professional" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="editSpecialization">Specialization</Label>
                      <Input id="editSpecialization" defaultValue={selectedDoctor.specialization} />
                    </div>
                    <div>
                      <Label htmlFor="editDepartment">Department</Label>
                      <Select defaultValue={selectedDoctor.department}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="editLicenseNumber">License Number</Label>
                      <Input id="editLicenseNumber" defaultValue={selectedDoctor.licenseNumber} />
                    </div>
                    <div>
                      <Label htmlFor="editExperience">Experience (Years)</Label>
                      <Input id="editExperience" type="number" defaultValue={selectedDoctor.experience} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="editConsultationFee">Consultation Fee</Label>
                    <Input id="editConsultationFee" type="number" defaultValue={selectedDoctor.consultationFee} />
                  </div>
                </TabsContent>
                <TabsContent value="schedule" className="space-y-4">
                  <div className="text-sm text-gray-600">
                    Schedule management interface will be implemented here.
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Doctor</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
