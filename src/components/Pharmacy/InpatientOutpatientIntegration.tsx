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
import { Progress } from '@/components/ui/progress';
import { 
  Bed,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Settings,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Calendar,
  User,
  Users,
  Pill,
  Stethoscope,
  Shield,
  Key,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  PieChart,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Star,
  Heart,
  Smile,
  Frown,
  Meh,
  Zap,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Thermometer,
  Gauge,
  Scale,
  Ruler,
  Compass,
  MapPin,
  Navigation,
  Route,
  Map,
  Globe,
  Building,
  Home,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Truck,
  Ship,
  Anchor,
  Sailboat,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Beaker,
  TestTube,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield as ShieldIcon,
  Sword,
  Bow,
  Arrow,
  Target as TargetIcon,
  Crosshair,
  Focus,
  Zap as ZapIcon,
  Bolt,
  Flash,
  Spark,
  Fire,
  Water,
  Earth,
  Air,
  Leaf,
  Tree,
  Flower,
  Seed,
  Sprout,
  Branch,
  Root,
  Trunk,
  Bark,
  Wood,
  Log,
  Lumber,
  Timber,
  Plank,
  Board,
  Beam,
  Pole,
  Stick,
  Rod,
  Staff,
  Wand,
  Scepter,
  Crown as CrownIcon,
  Tiara,
  Diadem,
  Circlet,
  Ring,
  Gem as GemIcon,
  Jewel,
  Pearl,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Jade,
  Coral,
  Amber,
  Ivory,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Tin,
  Lead,
  Zinc,
  Nickel,
  Cobalt,
  Chromium,
  Manganese,
  Titanium,
  Vanadium,
  Tungsten,
  Molybdenum,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Hafnium,
  Tantalum,
  Niobium,
  Zirconium,
  Yttrium,
  Scandium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';
import { format } from 'date-fns';

export default function InpatientOutpatientIntegration() {
  const [activeTab, setActiveTab] = useState('requests');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterWard, setFilterWard] = useState('all');
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isApprovalOpen, setIsApprovalOpen] = useState(false);
  const [isDischargeOpen, setIsDischargeOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  // Mock inpatient/outpatient data
  const integrationData = {
    wards: [
      { id: 'WARD001', name: 'ICU', floor: '3rd', beds: 20, occupied: 18, available: 2 },
      { id: 'WARD002', name: 'Cardiology', floor: '2nd', beds: 15, occupied: 12, available: 3 },
      { id: 'WARD003', name: 'Pediatrics', floor: '1st', beds: 25, occupied: 20, available: 5 },
      { id: 'WARD004', name: 'Surgery', floor: '4th', beds: 30, occupied: 25, available: 5 }
    ],
    medicineRequests: [
      {
        id: 'REQ001',
        patientId: 'PAT001',
        patientName: 'John Smith',
        ward: 'ICU',
        room: 'ICU-01',
        bed: 'Bed 1',
        doctor: 'Dr. Sarah Johnson',
        nurse: 'Nurse Emily',
        requestDate: '2024-01-20',
        requestTime: '14:30',
        status: 'Pending',
        priority: 'High',
        items: [
          { name: 'Morphine 10mg', quantity: 2, unit: 'vials', reason: 'Pain management' },
          { name: 'Insulin Glargine', quantity: 1, unit: 'vial', reason: 'Diabetes control' }
        ],
        totalValue: 150.00,
        controlledDrug: true,
        approvalRequired: true
      },
      {
        id: 'REQ002',
        patientId: 'PAT002',
        patientName: 'Jane Doe',
        ward: 'Cardiology',
        room: 'CARD-05',
        bed: 'Bed 3',
        doctor: 'Dr. Michael Chen',
        nurse: 'Nurse David',
        requestDate: '2024-01-20',
        requestTime: '15:45',
        status: 'Approved',
        priority: 'Normal',
        items: [
          { name: 'Aspirin 75mg', quantity: 30, unit: 'tablets', reason: 'Cardiac prevention' },
          { name: 'Metformin 500mg', quantity: 60, unit: 'tablets', reason: 'Diabetes management' }
        ],
        totalValue: 45.00,
        controlledDrug: false,
        approvalRequired: false
      }
    ],
    approvals: [
      {
        id: 'APP001',
        requestId: 'REQ001',
        patientName: 'John Smith',
        ward: 'ICU',
        medicine: 'Morphine 10mg',
        quantity: 2,
        requestedBy: 'Dr. Sarah Johnson',
        approvalDate: '2024-01-20',
        approvedBy: 'Dr. Chief Pharmacist',
        status: 'Approved',
        notes: 'Approved for pain management in ICU patient'
      }
    ],
    discharges: [
      {
        id: 'DIS001',
        patientId: 'PAT001',
        patientName: 'John Smith',
        ward: 'ICU',
        dischargeDate: '2024-01-22',
        dischargeTime: '10:00',
        medicines: [
          { name: 'Paracetamol 500mg', quantity: 20, instructions: 'Take 1 tablet every 6 hours' },
          { name: 'Amoxicillin 250mg', quantity: 21, instructions: 'Take 1 tablet three times daily' }
        ],
        totalValue: 85.00,
        status: 'Ready'
      }
    ],
    wardStock: [
      {
        ward: 'ICU',
        medicines: [
          { name: 'Morphine 10mg', currentStock: 5, minStock: 10, status: 'Low' },
          { name: 'Insulin Glargine', currentStock: 8, minStock: 5, status: 'Good' },
          { name: 'Paracetamol 500mg', currentStock: 50, minStock: 20, status: 'Good' }
        ]
      },
      {
        ward: 'Cardiology',
        medicines: [
          { name: 'Aspirin 75mg', currentStock: 100, minStock: 50, status: 'Good' },
          { name: 'Metformin 500mg', currentStock: 80, minStock: 40, status: 'Good' },
          { name: 'Lisinopril 10mg', currentStock: 60, minStock: 30, status: 'Good' }
        ]
      }
    ]
  };

  const handleCreateRequest = () => {
    setSelectedRequest(null);
    setIsRequestOpen(true);
  };

  const handleApproveRequest = (request: any) => {
    setSelectedRequest(request);
    setIsApprovalOpen(true);
  };

  const handleProcessDischarge = () => {
    setIsDischargeOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Ready': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Good': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Normal': return 'text-green-600';
      case 'Low': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const filteredRequests = integrationData.medicineRequests.filter(request => {
    const matchesSearch = request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.ward.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesWard = filterWard === 'all' || request.ward === filterWard;
    return matchesSearch && matchesStatus && matchesWard;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">In-Patient & Out-Patient Integration</h1>
          <p className="text-gray-600 mt-1">Manage ward medicine requests, approvals, and discharge medications</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleCreateRequest}>
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
          <Button variant="outline" onClick={handleProcessDischarge}>
            <Bed className="h-4 w-4 mr-2" />
            Process Discharge
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Wards</p>
                <p className="text-3xl font-bold text-gray-900">{integrationData.wards.length}</p>
              </div>
              <Bed className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">All wards active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900">
                  {integrationData.medicineRequests.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Awaiting approval</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Controlled Drugs</p>
                <p className="text-3xl font-bold text-gray-900">
                  {integrationData.medicineRequests.filter(r => r.controlledDrug).length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Require approval</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Discharge Ready</p>
                <p className="text-3xl font-bold text-gray-900">
                  {integrationData.discharges.filter(d => d.status === 'Ready').length}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Ready for discharge</span>
              </div>
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
                  placeholder="Search requests, patients, or wards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterWard} onValueChange={setFilterWard}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Ward" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Wards</SelectItem>
                {integrationData.wards.map(ward => (
                  <SelectItem key={ward.id} value={ward.name}>
                    {ward.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="discharges">Discharges</TabsTrigger>
          <TabsTrigger value="ward-stock">Ward Stock</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Requests Tab */}
        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Medicine Requests ({filteredRequests.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">REQ #{request.id}</h3>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                            <Badge className={getStatusColor(request.priority)}>
                              {request.priority} Priority
                            </Badge>
                            {request.controlledDrug && (
                              <Badge className="bg-red-100 text-red-800">
                                Controlled Drug
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {request.patientName} • Ward: {request.ward} • Room: {request.room} • Bed: {request.bed}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Doctor: {request.doctor} • Nurse: {request.nurse} • Date: {request.requestDate} {request.requestTime}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Items: {request.items.length} • Total Value: {request.totalValue} • Approval Required: {request.approvalRequired ? 'Yes' : 'No'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {request.items.map(item => `${item.name} (${item.quantity} ${item.unit})`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {request.status === 'Pending' && (
                            <Button size="sm" onClick={() => handleApproveRequest(request)}>
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Approvals Tab */}
        <TabsContent value="approvals">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Medicine Approvals ({integrationData.approvals.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationData.approvals.map((approval) => (
                    <div key={approval.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">APP #{approval.id}</h3>
                            <Badge className={getStatusColor(approval.status)}>
                              {approval.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {approval.patientName} • Ward: {approval.ward} • Medicine: {approval.medicine}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Quantity: {approval.quantity} • Requested by: {approval.requestedBy}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Approved by: {approval.approvedBy} • Date: {approval.approvalDate}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {approval.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Print
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Discharges Tab */}
        <TabsContent value="discharges">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                Discharge Medications ({integrationData.discharges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {integrationData.discharges.map((discharge) => (
                    <div key={discharge.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">DIS #{discharge.id}</h3>
                            <Badge className={getStatusColor(discharge.status)}>
                              {discharge.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {discharge.patientName} • Ward: {discharge.ward} • Discharge: {discharge.dischargeDate} {discharge.dischargeTime}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Medicines: {discharge.medicines.length} • Total Value: {discharge.totalValue}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {discharge.medicines.map(med => `${med.name} (${med.quantity})`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Print
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Process
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ward Stock Tab */}
        <TabsContent value="ward-stock">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                Ward Stock Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {integrationData.wardStock.map((ward) => (
                  <div key={ward.ward} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">{ward.ward} Ward</h3>
                      <Badge variant="outline">{ward.medicines.length} medicines</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ward.medicines.map((medicine, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{medicine.name}</h4>
                            <Badge className={getStatusColor(medicine.status)}>
                              {medicine.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            Current: {medicine.currentStock} • Min: {medicine.minStock}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                              className={`h-2 rounded-full ${
                                medicine.status === 'Low' ? 'bg-red-600' : 'bg-green-600'
                              }`}
                              style={{ width: `${(medicine.currentStock / (medicine.minStock * 2)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Integration Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Integration reports and analytics would be displayed here</p>
                <p className="text-sm text-gray-500">Ward usage, medicine consumption, and discharge analytics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Request Dialog */}
      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create Medicine Request
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="request-patient">Patient</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PAT001">John Smith</SelectItem>
                    <SelectItem value="PAT002">Jane Doe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="request-ward">Ward</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ward" />
                  </SelectTrigger>
                  <SelectContent>
                    {integrationData.wards.map(ward => (
                      <SelectItem key={ward.id} value={ward.name}>
                        {ward.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="request-room">Room</Label>
                <Input id="request-room" placeholder="Enter room number" />
              </div>
              <div>
                <Label htmlFor="request-bed">Bed</Label>
                <Input id="request-bed" placeholder="Enter bed number" />
              </div>
              <div>
                <Label htmlFor="request-doctor">Doctor</Label>
                <Input id="request-doctor" placeholder="Enter doctor name" />
              </div>
              <div>
                <Label htmlFor="request-nurse">Nurse</Label>
                <Input id="request-nurse" placeholder="Enter nurse name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="request-items">Requested Items</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Add medicines to this request</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Medicine
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsRequestOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsRequestOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Create Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Approval Dialog */}
      <Dialog open={isApprovalOpen} onOpenChange={setIsApprovalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Approve Medicine Request
            </DialogTitle>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Request Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Patient: {selectedRequest.patientName}</div>
                  <div>Ward: {selectedRequest.ward}</div>
                  <div>Room: {selectedRequest.room}</div>
                  <div>Bed: {selectedRequest.bed}</div>
                  <div>Doctor: {selectedRequest.doctor}</div>
                  <div>Nurse: {selectedRequest.nurse}</div>
                  <div>Priority: {selectedRequest.priority}</div>
                  <div>Controlled Drug: {selectedRequest.controlledDrug ? 'Yes' : 'No'}</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Requested Items</h3>
                <div className="space-y-2">
                  {selectedRequest.items.map((item: any, index: number) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            Quantity: {item.quantity} {item.unit} • Reason: {item.reason}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-green-600">Approved</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="approval-notes">Approval Notes</Label>
                <Textarea id="approval-notes" placeholder="Enter approval notes" />
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setIsApprovalOpen(false)}>
                  Cancel
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" onClick={() => setIsApprovalOpen(false)}>
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button onClick={() => setIsApprovalOpen(false)}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Discharge Dialog */}
      <Dialog open={isDischargeOpen} onOpenChange={setIsDischargeOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Bed className="h-5 w-5 mr-2" />
              Process Discharge Medications
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="discharge-patient">Patient</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PAT001">John Smith</SelectItem>
                    <SelectItem value="PAT002">Jane Doe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="discharge-ward">Ward</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ward" />
                  </SelectTrigger>
                  <SelectContent>
                    {integrationData.wards.map(ward => (
                      <SelectItem key={ward.id} value={ward.name}>
                        {ward.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="discharge-date">Discharge Date</Label>
                <Input id="discharge-date" type="date" />
              </div>
              <div>
                <Label htmlFor="discharge-time">Discharge Time</Label>
                <Input id="discharge-time" type="time" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="discharge-medicines">Discharge Medicines</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Add medicines for patient discharge</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Medicine
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDischargeOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDischargeOpen(false)}>
                <Bed className="h-4 w-4 mr-1" />
                Process Discharge
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
