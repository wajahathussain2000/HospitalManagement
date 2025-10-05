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
  XCircle
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
}

export default function DepartmentManagement() {
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: '1',
      name: 'Cardiology',
      description: 'Heart and cardiovascular care department',
      headDoctorId: 'doc1',
      headDoctorName: 'Dr. John Smith',
      isActive: true,
      location: 'Floor 2, Wing A',
      phone: '+1234567890',
      email: 'cardiology@hospital.com',
      capacity: 50,
      currentOccupancy: 35,
      services: ['Echocardiogram', 'Angiography', 'Cardiac Surgery'],
      equipment: ['ECG Machine', 'Echo Machine', 'Cath Lab'],
      createdAt: new Date('2024-01-01')
    },
    {
      id: '2',
      name: 'Emergency',
      description: 'Emergency medical services and trauma care',
      headDoctorId: 'doc2',
      headDoctorName: 'Dr. Jane Doe',
      isActive: true,
      location: 'Ground Floor, Main Building',
      phone: '+1234567891',
      email: 'emergency@hospital.com',
      capacity: 30,
      currentOccupancy: 28,
      services: ['Trauma Care', 'Emergency Surgery', 'Critical Care'],
      equipment: ['Ventilator', 'Defibrillator', 'X-Ray Machine'],
      createdAt: new Date('2024-01-02')
    },
    {
      id: '3',
      name: 'Orthopedics',
      description: 'Bone, joint, and musculoskeletal care',
      headDoctorId: 'doc3',
      headDoctorName: 'Dr. Mike Johnson',
      isActive: false,
      location: 'Floor 3, Wing B',
      phone: '+1234567892',
      email: 'orthopedics@hospital.com',
      capacity: 40,
      currentOccupancy: 0,
      services: ['Joint Replacement', 'Fracture Care', 'Sports Medicine'],
      equipment: ['X-Ray Machine', 'CT Scanner', 'Surgical Tools'],
      createdAt: new Date('2024-01-03')
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
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

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Department Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital departments and their configurations</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Department</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Department</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Department Name</Label>
                <Input id="name" placeholder="Enter department name" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter department description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter location" />
                </div>
                <div>
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" type="number" placeholder="Enter capacity" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Department</Button>
              </div>
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
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDepartments.map((dept) => (
          <Card key={dept.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5" />
                    <span>{dept.name}</span>
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{dept.description}</p>
                </div>
                <Badge variant={dept.isActive ? 'default' : 'secondary'}>
                  {dept.isActive ? (
                    <><CheckCircle className="h-3 w-3 mr-1" /> Active</>
                  ) : (
                    <><XCircle className="h-3 w-3 mr-1" /> Inactive</>
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{dept.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{dept.email}</span>
                  </div>
                </div>

                {/* Head Doctor */}
                {dept.headDoctorName && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>Head: {dept.headDoctorName}</span>
                  </div>
                )}

                {/* Occupancy */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Occupancy</span>
                    <span className={`text-sm font-bold ${getOccupancyColor(dept.currentOccupancy, dept.capacity)}`}>
                      {dept.currentOccupancy}/{dept.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        (dept.currentOccupancy / dept.capacity) >= 0.9 ? 'bg-red-500' :
                        (dept.currentOccupancy / dept.capacity) >= 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(dept.currentOccupancy / dept.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-sm font-medium mb-2">Services</p>
                  <div className="flex flex-wrap gap-1">
                    {dept.services.slice(0, 3).map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {dept.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{dept.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-2 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedDepartment(dept);
                      setIsEditDialogOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Department Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Department</DialogTitle>
          </DialogHeader>
          {selectedDepartment && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="editName">Department Name</Label>
                <Input id="editName" defaultValue={selectedDepartment.name} />
              </div>
              <div>
                <Label htmlFor="editDescription">Description</Label>
                <Textarea id="editDescription" defaultValue={selectedDepartment.description} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editLocation">Location</Label>
                  <Input id="editLocation" defaultValue={selectedDepartment.location} />
                </div>
                <div>
                  <Label htmlFor="editCapacity">Capacity</Label>
                  <Input id="editCapacity" type="number" defaultValue={selectedDepartment.capacity} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editPhone">Phone</Label>
                  <Input id="editPhone" defaultValue={selectedDepartment.phone} />
                </div>
                <div>
                  <Label htmlFor="editEmail">Email</Label>
                  <Input id="editEmail" type="email" defaultValue={selectedDepartment.email} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Department</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
