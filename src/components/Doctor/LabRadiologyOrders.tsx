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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  TestTube,
  Microscope,
  Camera,
  X,
  Search,
  Plus,
  Edit,
  Trash2,
  Save,
  Send,
  Download,
  Upload,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  User,
  FileText,
  Shield,
  Bell,
  Settings,
  Filter,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Copy,
  Share,
  Bookmark,
  Flag,
  Tag,
  Layers,
  Database,
  Cloud,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Table,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
  BarChart3,
  PieChart,
  Target,
  TrendingUp,
  TrendingDown,
  Zap,
  Users,
  Star,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
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
  Microscope as MicroscopeIcon,
  Beaker,
  TestTube as TestTubeIcon,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Pill,
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

export default function LabRadiologyOrders() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedTests, setSelectedTests] = useState<any[]>([]);

  // Mock lab tests catalog
  const labTests = [
    {
      id: 'LAB001',
      name: 'Complete Blood Count (CBC)',
      category: 'Hematology',
      description: 'Measures different components of blood including red blood cells, white blood cells, and platelets',
      preparation: 'No special preparation required',
      fasting: false,
      duration: '5-10 minutes',
      cost: 45.00,
      normalRange: 'Varies by component',
      indications: ['Routine screening', 'Infection monitoring', 'Anemia evaluation'],
      turnaroundTime: 'Same day',
      inStock: true
    },
    {
      id: 'LAB002',
      name: 'Basic Metabolic Panel (BMP)',
      category: 'Chemistry',
      description: 'Measures glucose, electrolytes, and kidney function',
      preparation: 'Fasting required (8-12 hours)',
      fasting: true,
      duration: '5 minutes',
      cost: 35.00,
      normalRange: 'Glucose: 70-100 mg/dL',
      indications: ['Diabetes monitoring', 'Kidney function', 'Electrolyte balance'],
      turnaroundTime: 'Same day',
      inStock: true
    },
    {
      id: 'LAB003',
      name: 'Lipid Panel',
      category: 'Chemistry',
      description: 'Measures cholesterol, triglycerides, and other lipids',
      preparation: 'Fasting required (12 hours)',
      fasting: true,
      duration: '5 minutes',
      cost: 55.00,
      normalRange: 'Total cholesterol <200 mg/dL',
      indications: ['Cardiovascular risk assessment', 'Cholesterol monitoring'],
      turnaroundTime: 'Same day',
      inStock: true
    },
    {
      id: 'LAB004',
      name: 'Thyroid Function Tests (TFT)',
      category: 'Endocrinology',
      description: 'Measures thyroid hormone levels (TSH, T3, T4)',
      preparation: 'No special preparation',
      fasting: false,
      duration: '5 minutes',
      cost: 85.00,
      normalRange: 'TSH: 0.4-4.0 mIU/L',
      indications: ['Thyroid disorders', 'Fatigue evaluation', 'Weight changes'],
      turnaroundTime: '1-2 days',
      inStock: true
    },
    {
      id: 'LAB005',
      name: 'HbA1c',
      category: 'Diabetes',
      description: 'Measures average blood glucose over 2-3 months',
      preparation: 'No special preparation',
      fasting: false,
      duration: '5 minutes',
      cost: 65.00,
      normalRange: '<7.0%',
      indications: ['Diabetes diagnosis', 'Diabetes monitoring', 'Treatment adjustment'],
      turnaroundTime: 'Same day',
      inStock: true
    }
  ];

  // Mock radiology tests catalog
  const radiologyTests = [
    {
      id: 'RAD001',
      name: 'Chest X-ray',
      category: 'Radiology',
      description: 'X-ray imaging of the chest to evaluate heart, lungs, and bones',
      preparation: 'Remove jewelry and metal objects',
      fasting: false,
      duration: '10-15 minutes',
      cost: 120.00,
      normalRange: 'Normal chest appearance',
      indications: ['Chest pain', 'Shortness of breath', 'Cough', 'Infection screening'],
      turnaroundTime: 'Same day',
      inStock: true
    },
    {
      id: 'RAD002',
      name: 'CT Scan - Chest',
      category: 'Radiology',
      description: 'Computed tomography of the chest for detailed imaging',
      preparation: 'Fasting may be required, remove metal objects',
      fasting: true,
      duration: '30-45 minutes',
      cost: 450.00,
      normalRange: 'Normal chest CT appearance',
      indications: ['Lung cancer screening', 'Pulmonary embolism', 'Complex chest conditions'],
      turnaroundTime: '1-2 days',
      inStock: true
    },
    {
      id: 'RAD003',
      name: 'MRI - Brain',
      category: 'Radiology',
      description: 'Magnetic resonance imaging of the brain',
      preparation: 'Remove all metal objects, no pacemaker',
      fasting: false,
      duration: '45-60 minutes',
      cost: 800.00,
      normalRange: 'Normal brain MRI appearance',
      indications: ['Headaches', 'Neurological symptoms', 'Brain tumor evaluation'],
      turnaroundTime: '2-3 days',
      inStock: true
    },
    {
      id: 'RAD004',
      name: 'Ultrasound - Abdomen',
      category: 'Radiology',
      description: 'Ultrasound imaging of abdominal organs',
      preparation: 'Fasting required (6-8 hours)',
      fasting: true,
      duration: '20-30 minutes',
      cost: 200.00,
      normalRange: 'Normal abdominal ultrasound',
      indications: ['Abdominal pain', 'Liver evaluation', 'Gallbladder assessment'],
      turnaroundTime: 'Same day',
      inStock: true
    },
    {
      id: 'RAD005',
      name: 'Echocardiogram',
      category: 'Cardiology',
      description: 'Ultrasound of the heart to evaluate function and structure',
      preparation: 'No special preparation',
      fasting: false,
      duration: '30-45 minutes',
      cost: 350.00,
      normalRange: 'Normal heart function',
      indications: ['Heart murmur', 'Chest pain', 'Heart failure evaluation'],
      turnaroundTime: 'Same day',
      inStock: true
    }
  ];

  // Mock patients
  const patients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      mrn: 'MRN123456789',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      insurance: 'Blue Cross Blue Shield'
    },
    {
      id: 'P002',
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      mrn: 'MRN234567890',
      phone: '+1 (555) 234-5678',
      email: 'sarah.johnson@email.com',
      insurance: 'Aetna'
    }
  ];

  // Mock orders
  const orders = [
    {
      id: 'ORD001',
      patientId: 'P001',
      patientName: 'John Smith',
      tests: [
        { name: 'Complete Blood Count (CBC)', type: 'Lab', status: 'Completed', result: 'Normal' },
        { name: 'Basic Metabolic Panel (BMP)', type: 'Lab', status: 'Completed', result: 'Glucose: 95 mg/dL' }
      ],
      orderedDate: '2024-01-15',
      orderedBy: 'Dr. Sarah Johnson',
      status: 'Completed',
      totalCost: 80.00,
      results: 'All results within normal limits',
      notes: 'Patient doing well, continue current treatment'
    },
    {
      id: 'ORD002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      tests: [
        { name: 'Chest X-ray', type: 'Radiology', status: 'Pending', result: 'Awaiting results' },
        { name: 'Lipid Panel', type: 'Lab', status: 'In Progress', result: 'Processing' }
      ],
      orderedDate: '2024-01-20',
      orderedBy: 'Dr. Michael Chen',
      status: 'In Progress',
      totalCost: 175.00,
      results: 'Results pending',
      notes: 'Routine screening and chest evaluation'
    }
  ];

  const handleAddTest = (test: any) => {
    setSelectedTests(prev => [...prev, test]);
  };

  const handleRemoveTest = (testId: string) => {
    setSelectedTests(prev => prev.filter(test => test.id !== testId));
  };

  const handleCreateOrder = (patient: any) => {
    setSelectedPatient(patient);
    setIsOrderOpen(true);
    setSelectedTests([]);
  };

  const handleSaveOrder = () => {
    console.log('Saving order for:', selectedPatient.name);
    console.log('Tests:', selectedTests);
    setIsOrderOpen(false);
    setSelectedTests([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTestTypeIcon = (type: string) => {
    switch (type) {
      case 'Lab': return <TestTube className="h-4 w-4 text-blue-600" />;
      case 'Radiology': return <Camera className="h-4 w-4 text-purple-600" />;
      default: return <Microscope className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lab & Radiology Orders</h1>
          <p className="text-gray-600 mt-1">Request tests, view results, and manage diagnostic orders</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </Button>
        </div>
      </div>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="lab-tests">Lab Tests</TabsTrigger>
          <TabsTrigger value="radiology">Radiology</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search orders, patients, or tests..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Lab">Lab Tests</SelectItem>
                    <SelectItem value="Radiology">Radiology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Test Orders ({orders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {order.patientName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-3 mb-1">
                              <h3 className="font-medium text-gray-900">{order.patientName}</h3>
                              <Badge className={getStatusColor(order.status)}>
                                {order.status}
                              </Badge>
                              <Badge variant="outline">ORD{order.id}</Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              Ordered by {order.orderedBy} on {order.orderedDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Tests Ordered:</div>
                          <div className="space-y-2">
                            {order.tests.map((test, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <div className="flex items-center space-x-2">
                                  {getTestTypeIcon(test.type)}
                                  <span className="text-sm font-medium">{test.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {test.type}
                                  </Badge>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Badge className={getStatusColor(test.status)}>
                                    {test.status}
                                  </Badge>
                                  <span className="text-sm text-gray-600">{test.result}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div><strong>Total Cost:</strong> ${order.totalCost}</div>
                          <div><strong>Results:</strong> {order.results}</div>
                        </div>

                        {order.notes && (
                          <div>
                            <div className="text-sm font-medium text-gray-700">Notes:</div>
                            <div className="text-sm text-gray-600">{order.notes}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lab Tests Tab */}
        <TabsContent value="lab-tests">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Laboratory Tests Catalog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labTests.map((test) => (
                    <div key={test.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{test.name}</h3>
                            <Badge variant="outline">{test.category}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">Lab Test</Badge>
                            {test.inStock ? (
                              <Badge className="bg-green-100 text-green-800">Available</Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800">Unavailable</Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                            <div><strong>Description:</strong> {test.description}</div>
                            <div><strong>Preparation:</strong> {test.preparation}</div>
                            <div><strong>Duration:</strong> {test.duration}</div>
                            <div><strong>Cost:</strong> ${test.cost}</div>
                            <div><strong>Turnaround:</strong> {test.turnaroundTime}</div>
                            <div><strong>Fasting:</strong> {test.fasting ? 'Yes' : 'No'}</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-gray-700">Indications:</div>
                            <div className="text-gray-600">{test.indications.join(', ')}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={() => handleAddTest(test)}
                            disabled={!test.inStock}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
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

        {/* Radiology Tab */}
        <TabsContent value="radiology">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                Radiology Tests Catalog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {radiologyTests.map((test) => (
                    <div key={test.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{test.name}</h3>
                            <Badge variant="outline">{test.category}</Badge>
                            <Badge className="bg-purple-100 text-purple-800">Radiology</Badge>
                            {test.inStock ? (
                              <Badge className="bg-green-100 text-green-800">Available</Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800">Unavailable</Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                            <div><strong>Description:</strong> {test.description}</div>
                            <div><strong>Preparation:</strong> {test.preparation}</div>
                            <div><strong>Duration:</strong> {test.duration}</div>
                            <div><strong>Cost:</strong> ${test.cost}</div>
                            <div><strong>Turnaround:</strong> {test.turnaroundTime}</div>
                            <div><strong>Fasting:</strong> {test.fasting ? 'Yes' : 'No'}</div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-gray-700">Indications:</div>
                            <div className="text-gray-600">{test.indications.join(', ')}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={() => handleAddTest(test)}
                            disabled={!test.inStock}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
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

        {/* Results Tab */}
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Test Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Test results and reports</div>
                <div className="text-sm text-gray-500">View and manage diagnostic test results</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Order Creation Dialog */}
      <Dialog open={isOrderOpen} onOpenChange={setIsOrderOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{selectedPatient?.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.age}y, {selectedPatient?.gender} • {selectedPatient?.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsOrderOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveOrder}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Order
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedPatient.name}</div>
                    <div><strong>Age/Gender:</strong> {selectedPatient.age}y, {selectedPatient.gender}</div>
                    <div><strong>MRN:</strong> {selectedPatient.mrn}</div>
                    <div><strong>Insurance:</strong> {selectedPatient.insurance}</div>
                    <div><strong>Phone:</strong> {selectedPatient.phone}</div>
                    <div><strong>Email:</strong> {selectedPatient.email}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Tests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TestTube className="h-5 w-5 mr-2" />
                      Selected Tests ({selectedTests.length})
                    </div>
                    <Button size="sm" onClick={() => setActiveTab('lab-tests')}>
                      <Plus className="h-4 w-4 mr-1" />
                      Add Tests
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedTests.length > 0 ? (
                    <div className="space-y-4">
                      {selectedTests.map((test, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{test.name}</div>
                              <div className="text-sm text-gray-600">{test.description}</div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleRemoveTest(test.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><strong>Category:</strong> {test.category}</div>
                            <div><strong>Cost:</strong> ${test.cost}</div>
                            <div><strong>Duration:</strong> {test.duration}</div>
                            <div><strong>Turnaround:</strong> {test.turnaroundTime}</div>
                          </div>
                          
                          <div className="mt-3">
                            <Label htmlFor={`notes-${index}`}>Special Instructions</Label>
                            <Textarea
                              id={`notes-${index}`}
                              placeholder="Any special instructions for this test..."
                              className="mt-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <TestTube className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <div className="text-gray-600">No tests selected</div>
                      <div className="text-sm text-gray-500">Add tests from the catalog to create an order</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="routine">Routine</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="stat">STAT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="scheduled-date">Scheduled Date</Label>
                      <Input
                        id="scheduled-date"
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="clinical-notes">Clinical Notes</Label>
                    <Textarea
                      id="clinical-notes"
                      placeholder="Clinical indication and notes for the tests..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
