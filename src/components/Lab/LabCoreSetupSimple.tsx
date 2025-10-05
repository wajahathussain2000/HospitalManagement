import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { 
  Microscope,
  Search,
  Plus,
  Edit,
  Eye,
  Download,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Users,
  Building,
  Phone,
  Mail,
  Shield,
  Key,
  Activity,
  BarChart3,
  Target,
  TestTube,
  Flask,
  Syringe,
  Zap
} from 'lucide-react';

export default function LabCoreSetupSimple() {
  const [activeTab, setActiveTab] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock lab setup data
  const labSetupData = {
    general: {
      labName: 'Central Laboratory',
      labCode: 'CL001',
      address: '123 Medical Center, Healthcare District',
      phone: '+1-555-0123',
      email: 'lab@hospital.com',
      website: 'www.hospital.com/lab',
      establishedDate: '2020-01-15',
      accreditation: 'CAP, CLIA, ISO 15189',
      status: 'Active'
    },
    departments: [
      {
        id: 'DEPT001',
        name: 'Clinical Chemistry',
        code: 'CC',
        head: 'Dr. Sarah Johnson',
        staff: 12,
        tests: 45,
        status: 'Active'
      },
      {
        id: 'DEPT002',
        name: 'Hematology',
        code: 'HEM',
        head: 'Dr. Michael Chen',
        staff: 8,
        tests: 32,
        status: 'Active'
      },
      {
        id: 'DEPT003',
        name: 'Microbiology',
        code: 'MIC',
        head: 'Dr. Emily Rodriguez',
        staff: 15,
        tests: 28,
        status: 'Active'
      }
    ],
    equipment: [
      {
        id: 'EQ001',
        name: 'Automated Chemistry Analyzer',
        model: 'Roche Cobas 8000',
        serialNumber: 'RC8000-001',
        location: 'Chemistry Lab',
        status: 'Operational',
        lastMaintenance: '2024-01-15'
      },
      {
        id: 'EQ002',
        name: 'Hematology Analyzer',
        model: 'Sysmex XN-1000',
        serialNumber: 'SXN1000-002',
        location: 'Hematology Lab',
        status: 'Operational',
        lastMaintenance: '2024-01-10'
      }
    ],
    tests: [
      {
        id: 'TEST001',
        name: 'Complete Blood Count',
        code: 'CBC',
        category: 'Hematology',
        price: 25.00,
        turnaroundTime: '2 hours',
        status: 'Active'
      },
      {
        id: 'TEST002',
        name: 'Basic Metabolic Panel',
        code: 'BMP',
        category: 'Chemistry',
        price: 35.00,
        turnaroundTime: '4 hours',
        status: 'Active'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Operational': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lab Core Setup</h1>
          <p className="text-gray-600 mt-1">Configure laboratory settings, departments, equipment, and test catalog</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Config
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-3xl font-bold text-gray-900">{labSetupData.departments.length}</p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Equipment</p>
                <p className="text-3xl font-bold text-gray-900">{labSetupData.equipment.length}</p>
              </div>
              <Microscope className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Test Catalog</p>
                <p className="text-3xl font-bold text-gray-900">{labSetupData.tests.length}</p>
              </div>
              <TestTube className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Staff</p>
                <p className="text-3xl font-bold text-gray-900">
                  {labSetupData.departments.reduce((sum, dept) => sum + dept.staff, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search departments, equipment, or tests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="departments">Departments</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="tests">Tests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General Info</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="tests">Test Catalog</TabsTrigger>
        </TabsList>

        {/* General Info Tab */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Laboratory Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="labName">Laboratory Name</Label>
                    <Input id="labName" value={labSetupData.general.labName} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="labCode">Laboratory Code</Label>
                    <Input id="labCode" value={labSetupData.general.labCode} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" value={labSetupData.general.address} readOnly />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={labSetupData.general.phone} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={labSetupData.general.email} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="accreditation">Accreditation</Label>
                    <Input id="accreditation" value={labSetupData.general.accreditation} readOnly />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Departments Tab */}
        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Laboratory Departments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labSetupData.departments.map((dept) => (
                  <div key={dept.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{dept.name}</h3>
                          <Badge className={getStatusColor(dept.status)}>
                            {dept.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Code: {dept.code} • Head: {dept.head} • Staff: {dept.staff} • Tests: {dept.tests}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Equipment Tab */}
        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Microscope className="h-5 w-5 mr-2" />
                Laboratory Equipment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labSetupData.equipment.map((equipment) => (
                  <div key={equipment.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{equipment.name}</h3>
                          <Badge className={getStatusColor(equipment.status)}>
                            {equipment.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Model: {equipment.model} • Serial: {equipment.serialNumber} • Location: {equipment.location}
                        </div>
                        <div className="text-sm text-gray-600">
                          Last Maintenance: {equipment.lastMaintenance}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test Catalog Tab */}
        <TabsContent value="tests">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Test Catalog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labSetupData.tests.map((test) => (
                  <div key={test.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{test.name}</h3>
                          <Badge className={getStatusColor(test.status)}>
                            {test.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Code: {test.code} • Category: {test.category} • Price: ${test.price} • TAT: {test.turnaroundTime}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add New Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add New Item
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="itemType">Item Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="test">Test</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
