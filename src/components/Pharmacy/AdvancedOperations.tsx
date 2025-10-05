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
  Brain,
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

export default function AdvancedOperations() {
  const [activeTab, setActiveTab] = useState('interactions');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isInteractionOpen, setIsInteractionOpen] = useState(false);
  const [isReorderingOpen, setIsReorderingOpen] = useState(false);
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock advanced operations data
  const advancedData = {
    drugInteractions: [
      {
        id: 'INT001',
        drug1: 'Warfarin',
        drug2: 'Aspirin',
        severity: 'Major',
        description: 'Increased risk of bleeding when taken together',
        mechanism: 'Both drugs affect blood clotting',
        recommendation: 'Monitor INR closely, consider alternative',
        status: 'Active',
        lastUpdated: '2024-01-20'
      },
      {
        id: 'INT002',
        drug1: 'Metformin',
        drug2: 'Contrast Dye',
        severity: 'Moderate',
        description: 'Risk of lactic acidosis with contrast procedures',
        mechanism: 'Contrast affects kidney function',
        recommendation: 'Hold metformin 48 hours before procedure',
        status: 'Active',
        lastUpdated: '2024-01-19'
      }
    ],
    aiReordering: [
      {
        id: 'AI001',
        medicine: 'Paracetamol 500mg',
        currentStock: 150,
        minStock: 50,
        maxStock: 500,
        usageRate: 25,
        predictedRunout: '2024-02-15',
        suggestedOrder: 200,
        confidence: 95,
        reason: 'High usage rate, approaching minimum stock',
        status: 'Recommended'
      },
      {
        id: 'AI002',
        medicine: 'Insulin Glargine',
        currentStock: 8,
        minStock: 20,
        maxStock: 100,
        usageRate: 2,
        predictedRunout: '2024-01-25',
        suggestedOrder: 50,
        confidence: 98,
        reason: 'Critical stock level, urgent reorder needed',
        status: 'Urgent'
      }
    ],
    shelfManagement: [
      {
        id: 'SHELF001',
        shelfCode: 'A1-B2',
        location: 'Main Pharmacy',
        medicines: [
          { name: 'Paracetamol 500mg', quantity: 150, expiry: '2025-12-31' },
          { name: 'Aspirin 75mg', quantity: 100, expiry: '2025-06-30' }
        ],
        capacity: 200,
        utilization: 75,
        status: 'Active'
      },
      {
        id: 'SHELF002',
        shelfCode: 'C1-D2',
        location: 'Cold Storage',
        medicines: [
          { name: 'Insulin Glargine', quantity: 8, expiry: '2024-03-15' },
          { name: 'Vaccine A', quantity: 12, expiry: '2024-02-28' }
        ],
        capacity: 50,
        utilization: 40,
        status: 'Active'
      }
    ],
    coldStorage: [
      {
        id: 'COLD001',
        location: 'Vaccine Refrigerator',
        temperature: 2.5,
        targetTemp: 2.0,
        humidity: 45,
        status: 'Normal',
        lastCheck: '2024-01-20 14:30',
        medicines: ['Insulin Glargine', 'Vaccine A', 'Vaccine B']
      },
      {
        id: 'COLD002',
        location: 'Freezer Unit',
        temperature: -18.2,
        targetTemp: -18.0,
        humidity: 30,
        status: 'Normal',
        lastCheck: '2024-01-20 14:30',
        medicines: ['Vaccine C', 'Vaccine D']
      }
    ],
    controlledDrugs: [
      {
        id: 'CD001',
        medicine: 'Morphine 10mg',
        schedule: 'Schedule H',
        currentStock: 5,
        minStock: 10,
        maxStock: 50,
        lastOrder: '2024-01-15',
        nextOrder: '2024-02-15',
        approvalRequired: true,
        status: 'Active'
      },
      {
        id: 'CD002',
        medicine: 'Diazepam 5mg',
        schedule: 'Schedule H',
        currentStock: 8,
        minStock: 5,
        maxStock: 30,
        lastOrder: '2024-01-10',
        nextOrder: '2024-02-10',
        approvalRequired: true,
        status: 'Active'
      }
    ],
    multiStore: [
      {
        id: 'STORE001',
        name: 'Main Pharmacy',
        location: 'Ground Floor',
        medicines: 1250,
        value: 125000,
        status: 'Active'
      },
      {
        id: 'STORE002',
        name: 'ICU Pharmacy',
        location: '3rd Floor',
        medicines: 150,
        value: 25000,
        status: 'Active'
      },
      {
        id: 'STORE003',
        name: 'Emergency Pharmacy',
        location: 'Emergency Ward',
        medicines: 200,
        value: 35000,
        status: 'Active'
      }
    ],
    genericSubstitutions: [
      {
        id: 'GEN001',
        branded: 'Lipitor 20mg',
        generic: 'Atorvastatin 20mg',
        savings: 45,
        availability: 'In Stock',
        status: 'Available'
      },
      {
        id: 'GEN002',
        branded: 'Zoloft 50mg',
        generic: 'Sertraline 50mg',
        savings: 38,
        availability: 'In Stock',
        status: 'Available'
      }
    ]
  };

  const handleCreateInteraction = () => {
    setSelectedItem(null);
    setIsInteractionOpen(true);
  };

  const handleAIReordering = () => {
    setIsReorderingOpen(true);
  };

  const handleShelfManagement = () => {
    setIsShelfOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Recommended': return 'bg-blue-100 text-blue-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Major': return 'bg-red-100 text-red-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Minor': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Major': return 'text-red-600';
      case 'Moderate': return 'text-yellow-600';
      case 'Minor': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const filteredInteractions = advancedData.drugInteractions.filter(interaction => {
    const matchesSearch = interaction.drug1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interaction.drug2.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || interaction.severity === filterType;
    const matchesStatus = filterStatus === 'all' || interaction.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Operations & Smart Modules</h1>
          <p className="text-gray-600 mt-1">AI-powered pharmacy operations with drug interactions, smart reordering, and IoT integration</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleCreateInteraction}>
            <Plus className="h-4 w-4 mr-2" />
            Add Interaction
          </Button>
          <Button variant="outline" onClick={handleAIReordering}>
            <Brain className="h-4 w-4 mr-2" />
            AI Reordering
          </Button>
          <Button variant="outline" onClick={handleShelfManagement}>
            <Target className="h-4 w-4 mr-2" />
            Shelf Management
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
                <p className="text-sm font-medium text-gray-600">Drug Interactions</p>
                <p className="text-3xl font-bold text-gray-900">{advancedData.drugInteractions.length}</p>
              </div>
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Brain className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Active database</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI Recommendations</p>
                <p className="text-3xl font-bold text-gray-900">{advancedData.aiReordering.length}</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Smart suggestions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cold Storage Units</p>
                <p className="text-3xl font-bold text-gray-900">{advancedData.coldStorage.length}</p>
              </div>
              <Thermometer className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Thermometer className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">IoT monitored</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Controlled Drugs</p>
                <p className="text-3xl font-bold text-gray-900">{advancedData.controlledDrugs.length}</p>
              </div>
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-red-600">Schedule H/X</span>
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
                  placeholder="Search drugs, interactions, or AI recommendations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Major">Major</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Minor">Minor</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Recommended">Recommended</SelectItem>
                <SelectItem value="Urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="interactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="ai-reordering">AI Reordering</TabsTrigger>
          <TabsTrigger value="shelf-management">Shelf Management</TabsTrigger>
          <TabsTrigger value="cold-storage">Cold Storage</TabsTrigger>
          <TabsTrigger value="controlled-drugs">Controlled Drugs</TabsTrigger>
          <TabsTrigger value="multi-store">Multi-Store</TabsTrigger>
        </TabsList>

        {/* Drug Interactions Tab */}
        <TabsContent value="interactions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                Drug Interactions ({filteredInteractions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredInteractions.map((interaction) => (
                    <div key={interaction.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{interaction.drug1} + {interaction.drug2}</h3>
                            <Badge className={getStatusColor(interaction.severity)}>
                              {interaction.severity}
                            </Badge>
                            <Badge className={getStatusColor(interaction.status)}>
                              {interaction.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Description: {interaction.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Mechanism: {interaction.mechanism}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Recommendation: {interaction.recommendation}
                          </div>
                          <div className="text-sm text-gray-600">
                            Last Updated: {interaction.lastUpdated}
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
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Reordering Tab */}
        <TabsContent value="ai-reordering">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                AI Reordering Recommendations ({advancedData.aiReordering.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {advancedData.aiReordering.map((recommendation) => (
                    <div key={recommendation.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{recommendation.medicine}</h3>
                            <Badge className={getStatusColor(recommendation.status)}>
                              {recommendation.status}
                            </Badge>
                            <Badge variant="outline">
                              {recommendation.confidence}% confidence
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {recommendation.currentStock} • Min: {recommendation.minStock} • Max: {recommendation.maxStock}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Usage Rate: {recommendation.usageRate}/day • Predicted Runout: {recommendation.predictedRunout}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Suggested Order: {recommendation.suggestedOrder} • Reason: {recommendation.reason}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
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

        {/* Shelf Management Tab */}
        <TabsContent value="shelf-management">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Shelf Management ({advancedData.shelfManagement.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {advancedData.shelfManagement.map((shelf) => (
                    <div key={shelf.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Shelf {shelf.shelfCode}</h3>
                            <Badge className={getStatusColor(shelf.status)}>
                              {shelf.status}
                            </Badge>
                            <Badge variant="outline">
                              {shelf.utilization}% utilized
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {shelf.location} • Capacity: {shelf.capacity} • Medicines: {shelf.medicines.length}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Medicines: {shelf.medicines.map(med => `${med.name} (${med.quantity})`).join(', ')}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${shelf.utilization}%` }}
                            ></div>
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
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cold Storage Tab */}
        <TabsContent value="cold-storage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="h-5 w-5 mr-2" />
                Cold Storage & IoT Monitoring ({advancedData.coldStorage.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {advancedData.coldStorage.map((storage) => (
                    <div key={storage.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{storage.location}</h3>
                            <Badge className={getStatusColor(storage.status)}>
                              {storage.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Temperature: {storage.temperature}°C (Target: {storage.targetTemp}°C)
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Humidity: {storage.humidity}% • Last Check: {storage.lastCheck}
                          </div>
                          <div className="text-sm text-gray-600">
                            Medicines: {storage.medicines.join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4 mr-1" />
                            Settings
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

        {/* Controlled Drugs Tab */}
        <TabsContent value="controlled-drugs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Controlled Drugs Management ({advancedData.controlledDrugs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {advancedData.controlledDrugs.map((drug) => (
                    <div key={drug.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{drug.medicine}</h3>
                            <Badge className={getStatusColor(drug.status)}>
                              {drug.status}
                            </Badge>
                            <Badge variant="outline">{drug.schedule}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {drug.currentStock} • Min: {drug.minStock} • Max: {drug.maxStock}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Order: {drug.lastOrder} • Next Order: {drug.nextOrder}
                          </div>
                          <div className="text-sm text-gray-600">
                            Approval Required: {drug.approvalRequired ? 'Yes' : 'No'}
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
                          <Button size="sm">
                            <Shield className="h-4 w-4 mr-1" />
                            Approve
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

        {/* Multi-Store Tab */}
        <TabsContent value="multi-store">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Multi-Store System ({advancedData.multiStore.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {advancedData.multiStore.map((store) => (
                    <div key={store.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{store.name}</h3>
                            <Badge className={getStatusColor(store.status)}>
                              {store.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Location: {store.location} • Medicines: {store.medicines} • Value: {store.value.toLocaleString()}
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
                          <Button size="sm" variant="outline">
                            <Target className="h-4 w-4 mr-1" />
                            Transfer
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
      </Tabs>

      {/* Interaction Dialog */}
      <Dialog open={isInteractionOpen} onOpenChange={setIsInteractionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add Drug Interaction
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interaction-drug1">Drug 1</Label>
                <Input id="interaction-drug1" placeholder="Enter first drug name" />
              </div>
              <div>
                <Label htmlFor="interaction-drug2">Drug 2</Label>
                <Input id="interaction-drug2" placeholder="Enter second drug name" />
              </div>
              <div>
                <Label htmlFor="interaction-severity">Severity</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Major">Major</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Minor">Minor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="interaction-status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="interaction-description">Description</Label>
              <Textarea id="interaction-description" placeholder="Enter interaction description" />
            </div>
            
            <div>
              <Label htmlFor="interaction-mechanism">Mechanism</Label>
              <Textarea id="interaction-mechanism" placeholder="Enter interaction mechanism" />
            </div>
            
            <div>
              <Label htmlFor="interaction-recommendation">Recommendation</Label>
              <Textarea id="interaction-recommendation" placeholder="Enter recommendation" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsInteractionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsInteractionOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Interaction
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AI Reordering Dialog */}
      <Dialog open={isReorderingOpen} onOpenChange={setIsReorderingOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              AI Reordering Analysis
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center py-8">
              <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">AI reordering analysis would be displayed here</p>
              <p className="text-sm text-gray-500">Machine learning predictions and smart recommendations</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsReorderingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsReorderingOpen(false)}>
                <Brain className="h-4 w-4 mr-1" />
                Analyze
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Shelf Management Dialog */}
      <Dialog open={isShelfOpen} onOpenChange={setIsShelfOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Shelf Management
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="shelf-code">Shelf Code</Label>
                <Input id="shelf-code" placeholder="Enter shelf code" />
              </div>
              <div>
                <Label htmlFor="shelf-location">Location</Label>
                <Input id="shelf-location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="shelf-capacity">Capacity</Label>
                <Input id="shelf-capacity" type="number" placeholder="Enter capacity" />
              </div>
              <div>
                <Label htmlFor="shelf-status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="shelf-medicines">Medicines</Label>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Assign medicines to this shelf</div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Medicine
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsShelfOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsShelfOpen(false)}>
                <Target className="h-4 w-4 mr-1" />
                Save Shelf
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
