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
  Bed, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Wifi,
  Shield,
  Heart,
  Stethoscope
} from 'lucide-react';

interface Ward {
  id: string;
  name: string;
  type: 'General' | 'ICU' | 'Emergency' | 'Maternity' | 'Pediatric' | 'Surgical' | 'Cardiac' | 'Neurology';
  floor: number;
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
  status: 'active' | 'maintenance' | 'closed';
  headNurse: string;
  headNurseId: string;
  equipment: string[];
  facilities: string[];
  lastCleaned: Date;
  nextMaintenance: Date;
  capacity: {
    maxPatients: number;
    currentPatients: number;
    reservedBeds: number;
  };
  location: {
    building: string;
    floor: number;
    wing: string;
  };
}

interface Bed {
  id: string;
  wardId: string;
  bedNumber: string;
  type: 'Standard' | 'Private' | 'ICU' | 'Emergency';
  status: 'available' | 'occupied' | 'maintenance' | 'reserved';
  patientId?: string;
  patientName?: string;
  admissionDate?: Date;
  expectedDischarge?: Date;
  assignedNurse?: string;
  equipment: string[];
  notes?: string;
}

export default function WardManagement() {
  const [wards, setWards] = useState<Ward[]>([
    {
      id: '1',
      name: 'General Ward A',
      type: 'General',
      floor: 2,
      totalBeds: 20,
      occupiedBeds: 15,
      availableBeds: 5,
      status: 'active',
      headNurse: 'Sarah Johnson',
      headNurseId: 'N001',
      equipment: ['Ventilator', 'Monitor', 'IV Stand'],
      facilities: ['WiFi', 'TV', 'Private Bathroom'],
      lastCleaned: new Date('2024-01-15'),
      nextMaintenance: new Date('2024-02-15'),
      capacity: { maxPatients: 20, currentPatients: 15, reservedBeds: 2 },
      location: { building: 'Main Building', floor: 2, wing: 'East Wing' }
    },
    {
      id: '2',
      name: 'ICU Unit 1',
      type: 'ICU',
      floor: 3,
      totalBeds: 8,
      occupiedBeds: 6,
      availableBeds: 2,
      status: 'active',
      headNurse: 'Michael Chen',
      headNurseId: 'N002',
      equipment: ['Ventilator', 'Cardiac Monitor', 'Defibrillator', 'IV Pump'],
      facilities: ['WiFi', 'Private Room', 'Emergency Equipment'],
      lastCleaned: new Date('2024-01-14'),
      nextMaintenance: new Date('2024-02-10'),
      capacity: { maxPatients: 8, currentPatients: 6, reservedBeds: 1 },
      location: { building: 'Main Building', floor: 3, wing: 'North Wing' }
    }
  ]);

  const [beds, setBeds] = useState<Bed[]>([
    {
      id: '1',
      wardId: '1',
      bedNumber: 'A-01',
      type: 'Standard',
      status: 'occupied',
      patientId: 'P001',
      patientName: 'John Doe',
      admissionDate: new Date('2024-01-10'),
      expectedDischarge: new Date('2024-01-20'),
      assignedNurse: 'Sarah Johnson',
      equipment: ['Monitor', 'IV Stand'],
      notes: 'Stable condition'
    },
    {
      id: '2',
      wardId: '1',
      bedNumber: 'A-02',
      type: 'Standard',
      status: 'available',
      equipment: ['Monitor', 'IV Stand'],
      notes: 'Ready for new patient'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [wardTypeFilter, setWardTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null);

  const filteredWards = wards.filter(ward => {
    const matchesSearch = ward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ward.headNurse.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = wardTypeFilter === 'all' || ward.type === wardTypeFilter;
    const matchesStatus = statusFilter === 'all' || ward.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (ward: Ward) => {
    switch (ward.status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'maintenance':
        return <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>;
      case 'closed':
        return <Badge className="bg-red-100 text-red-800">Closed</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getOccupancyColor = (ward: Ward) => {
    const occupancyRate = (ward.occupiedBeds / ward.totalBeds) * 100;
    if (occupancyRate >= 90) return 'text-red-600';
    if (occupancyRate >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  const wardTypes = ['General', 'ICU', 'Emergency', 'Maternity', 'Pediatric', 'Surgical', 'Cardiac', 'Neurology'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ward Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital wards, beds, and patient assignments</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Ward</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Ward</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="wardName">Ward Name</Label>
                    <Input id="wardName" placeholder="Enter ward name" />
                  </div>
                  <div>
                    <Label htmlFor="wardType">Ward Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ward type" />
                      </SelectTrigger>
                      <SelectContent>
                        {wardTypes.map(type => (
                          <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="floor">Floor</Label>
                    <Input id="floor" type="number" placeholder="Enter floor number" />
                  </div>
                  <div>
                    <Label htmlFor="totalBeds">Total Beds</Label>
                    <Input id="totalBeds" type="number" placeholder="Enter total beds" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="headNurse">Head Nurse</Label>
                  <Input id="headNurse" placeholder="Enter head nurse name" />
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="building">Building</Label>
                    <Input id="building" placeholder="Enter building name" />
                  </div>
                  <div>
                    <Label htmlFor="wing">Wing</Label>
                    <Input id="wing" placeholder="Enter wing name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="equipment">Equipment (comma separated)</Label>
                  <Input id="equipment" placeholder="Ventilator, Monitor, IV Stand" />
                </div>
                <div>
                  <Label htmlFor="facilities">Facilities (comma separated)</Label>
                  <Input id="facilities" placeholder="WiFi, TV, Private Bathroom" />
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
              <Button>Create Ward</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Bed className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Wards</p>
                <p className="text-2xl font-bold">{wards.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Beds</p>
                <p className="text-2xl font-bold">{wards.reduce((sum, ward) => sum + ward.totalBeds, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Occupied Beds</p>
                <p className="text-2xl font-bold">{wards.reduce((sum, ward) => sum + ward.occupiedBeds, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available Beds</p>
                <p className="text-2xl font-bold">{wards.reduce((sum, ward) => sum + ward.availableBeds, 0)}</p>
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
                  placeholder="Search wards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={wardTypeFilter} onValueChange={setWardTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {wardTypes.map(type => (
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
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wards Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bed className="h-5 w-5 mr-2" />
            Hospital Wards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ward Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Head Nurse</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWards.map((ward) => (
                <TableRow key={ward.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bed className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{ward.name}</p>
                        <p className="text-sm text-gray-600">Floor {ward.floor}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{ward.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{ward.location.building} - {ward.location.wing}</span>
                    </div>
                  </TableCell>
                  <TableCell>{ward.headNurse}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium ${getOccupancyColor(ward)}`}>
                        {ward.occupiedBeds}/{ward.totalBeds}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({Math.round((ward.occupiedBeds / ward.totalBeds) * 100)}%)
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(ward)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedWard(ward);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="h-4 w-4" />
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

      {/* Edit Ward Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Ward</DialogTitle>
          </DialogHeader>
          {selectedWard && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editWardName">Ward Name</Label>
                  <Input id="editWardName" defaultValue={selectedWard.name} />
                </div>
                <div>
                  <Label htmlFor="editWardType">Ward Type</Label>
                  <Select defaultValue={selectedWard.type.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ward type" />
                    </SelectTrigger>
                    <SelectContent>
                      {wardTypes.map(type => (
                        <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editFloor">Floor</Label>
                  <Input id="editFloor" type="number" defaultValue={selectedWard.floor} />
                </div>
                <div>
                  <Label htmlFor="editTotalBeds">Total Beds</Label>
                  <Input id="editTotalBeds" type="number" defaultValue={selectedWard.totalBeds} />
                </div>
              </div>
              <div>
                <Label htmlFor="editHeadNurse">Head Nurse</Label>
                <Input id="editHeadNurse" defaultValue={selectedWard.headNurse} />
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update Ward</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
