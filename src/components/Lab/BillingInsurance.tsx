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
  CreditCard,
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
  AlertTriangle,
  Clock,
  Calendar,
  User,
  Users,
  Building,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Key,
  Lock,
  Unlock,
  Activity,
  BarChart3,
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
  Navigation,
  Route,
  Map,
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
  Beaker,
  TestTube,
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
  Oganesson,
  FileText,
  Database,
  Server,
  Wifi,
  WifiOff,
  Signal,
  SignalZero,
  SignalLow,
  SignalMedium,
  SignalHigh,
  SignalMax,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  Plug,
  PlugZap,
  Zap as ZapIcon2,
  Lightning,
  Thunder,
  Storm,
  Hurricane,
  Tornado,
  Earthquake,
  Tsunami,
  Volcano,
  Lava,
  Magma,
  Ash,
  Smoke,
  Steam,
  Vapor,
  Mist,
  Fog,
  Haze,
  Smog,
  Dust,
  Sand,
  Dirt,
  Mud,
  Clay,
  Rock,
  Stone,
  Pebble,
  Boulder,
  Mountain,
  Hill,
  Valley,
  Canyon,
  Gorge,
  Ravine,
  Cliff,
  Peak,
  Summit,
  Ridge,
  Crest,
  Slope,
  Incline,
  Decline,
  Ascent,
  Descent,
  Climb,
  Fall,
  Drop,
  Plunge,
  Dive,
  Jump,
  Leap,
  Hop,
  Skip,
  Run,
  Walk,
  Jog,
  Sprint,
  Dash,
  Rush,
  Hurry,
  Speed,
  Velocity,
  Acceleration,
  Momentum,
  Force,
  Energy,
  Power as PowerIcon,
  Strength,
  Might,
  Vigor,
  Vitality,
  Life,
  Health,
  Wellness,
  Fitness,
  Exercise,
  Workout,
  Training,
  Practice,
  Study,
  Learn,
  Teach,
  Educate,
  Instruct,
  Guide,
  Mentor,
  Coach,
  Trainer,
  Teacher,
  Professor,
  Doctor,
  Nurse,
  Patient,
  Client,
  Customer,
  User as UserIcon,
  Person,
  People,
  Human,
  Individual,
  Someone,
  Anyone,
  Everyone,
  Nobody,
  Somebody,
  Anybody,
  Everybody,
  Noone,
  Someone as SomeoneIcon,
  Anyone as AnyoneIcon,
  Everyone as EveryoneIcon,
  Nobody as NobodyIcon,
  Somebody as SomebodyIcon,
  Anybody as AnybodyIcon,
  Everybody as EverybodyIcon,
  Noone as NooneIcon
} from 'lucide-react';
import { format } from 'date-fns';

export default function BillingInsurance() {
  const [activeTab, setActiveTab] = useState('price-books');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isClaimOpen, setIsClaimOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock billing data
  const billingData = {
    priceBooks: [
      {
        id: 'PB001',
        testName: 'Complete Blood Count (CBC)',
        category: 'Hematology',
        basePrice: 25.00,
        insurancePrice: 20.00,
        cashPrice: 15.00,
        status: 'Active',
        effectiveDate: '2024-01-01',
        expiryDate: '2024-12-31',
        notes: 'Standard CBC pricing'
      },
      {
        id: 'PB002',
        testName: 'Basic Metabolic Panel (BMP)',
        category: 'Chemistry',
        basePrice: 35.00,
        insurancePrice: 28.00,
        cashPrice: 20.00,
        status: 'Active',
        effectiveDate: '2024-01-01',
        expiryDate: '2024-12-31',
        notes: 'Standard BMP pricing'
      }
    ],
    bundles: [
      {
        id: 'BUN001',
        name: 'Executive Health Package',
        description: 'Comprehensive health screening package',
        tests: ['CBC', 'BMP', 'Lipid Panel', 'HbA1c', 'PSA'],
        regularPrice: 150.00,
        bundlePrice: 120.00,
        savings: 30.00,
        status: 'Active',
        validFrom: '2024-01-01',
        validTo: '2024-12-31',
        notes: 'Popular executive screening package'
      },
      {
        id: 'BUN002',
        name: 'Diabetes Monitoring Package',
        description: 'Essential tests for diabetes management',
        tests: ['HbA1c', 'Glucose', 'Creatinine', 'Microalbumin'],
        regularPrice: 80.00,
        bundlePrice: 60.00,
        savings: 20.00,
        status: 'Active',
        validFrom: '2024-01-01',
        validTo: '2024-12-31',
        notes: 'Diabetes management bundle'
      }
    ],
    claims: [
      {
        id: 'CLM001',
        patientName: 'John Doe',
        insuranceProvider: 'Blue Cross Blue Shield',
        policyNumber: 'BC123456789',
        claimNumber: 'CLM2024001',
        totalAmount: 150.00,
        coveredAmount: 120.00,
        patientResponsibility: 30.00,
        status: 'Submitted',
        submissionDate: '2024-01-21T10:00:00Z',
        processedDate: null,
        tests: ['CBC', 'BMP', 'Lipid Panel'],
        notes: 'Routine health checkup'
      },
      {
        id: 'CLM002',
        patientName: 'Jane Smith',
        insuranceProvider: 'Aetna',
        policyNumber: 'AET987654321',
        claimNumber: 'CLM2024002',
        totalAmount: 85.00,
        coveredAmount: 68.00,
        patientResponsibility: 17.00,
        status: 'Approved',
        submissionDate: '2024-01-20T14:00:00Z',
        processedDate: '2024-01-21T09:00:00Z',
        tests: ['HbA1c', 'Glucose'],
        notes: 'Diabetes monitoring'
      }
    ],
    payments: [
      {
        id: 'PAY001',
        patientName: 'John Doe',
        amount: 30.00,
        method: 'Credit Card',
        status: 'Completed',
        transactionId: 'TXN123456789',
        date: '2024-01-21T11:00:00Z',
        reference: 'INV001',
        notes: 'Patient copay'
      },
      {
        id: 'PAY002',
        patientName: 'Jane Smith',
        amount: 17.00,
        method: 'Cash',
        status: 'Completed',
        transactionId: 'CASH001',
        date: '2024-01-21T15:00:00Z',
        reference: 'INV002',
        notes: 'Patient responsibility'
      }
    ],
    insuranceProviders: [
      {
        id: 'INS001',
        name: 'Blue Cross Blue Shield',
        contact: 'Insurance Support',
        phone: '+1234567890',
        email: 'support@bcbs.com',
        address: '123 Insurance Ave, City',
        status: 'Active',
        coverageRate: 80,
        copayAmount: 20,
        notes: 'Primary insurance provider'
      },
      {
        id: 'INS002',
        name: 'Aetna',
        contact: 'Provider Relations',
        phone: '+1234567891',
        email: 'providers@aetna.com',
        address: '456 Health St, City',
        status: 'Active',
        coverageRate: 75,
        copayAmount: 25,
        notes: 'Secondary insurance provider'
      }
    ],
    reports: [
      {
        id: 'RPT001',
        type: 'Revenue Report',
        period: 'January 2024',
        totalRevenue: 25000.00,
        insuranceRevenue: 20000.00,
        cashRevenue: 5000.00,
        generatedDate: '2024-01-21T08:00:00Z',
        generatedBy: 'System',
        notes: 'Monthly revenue analysis'
      },
      {
        id: 'RPT002',
        type: 'Claims Report',
        period: 'January 2024',
        totalClaims: 45,
        approvedClaims: 40,
        pendingClaims: 5,
        totalClaimAmount: 15000.00,
        generatedDate: '2024-01-21T09:00:00Z',
        generatedBy: 'System',
        notes: 'Monthly claims analysis'
      }
    ]
  };

  const handleAddPrice = () => {
    setSelectedItem(null);
    setIsPriceOpen(true);
  };

  const handleAddClaim = () => {
    setSelectedItem(null);
    setIsClaimOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Submitted': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Credit Card': return 'bg-blue-100 text-blue-800';
      case 'Cash': return 'bg-green-100 text-green-800';
      case 'Check': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPriceBooks = billingData.priceBooks.filter(price => {
    const matchesSearch = price.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         price.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || price.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Insurance</h1>
          <p className="text-gray-600 mt-1">Price books, bundles, claims, and payment processing</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddPrice}>
            <Plus className="h-4 w-4 mr-2" />
            Add Price
          </Button>
          <Button variant="outline" onClick={handleAddClaim}>
            <Plus className="h-4 w-4 mr-2" />
            Add Claim
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
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
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">$25,000</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <BarChart3 className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Monthly revenue</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Claims</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.claims.length}</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Insurance claims</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Payments</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.payments.length}</p>
              </div>
              <CreditCard className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CreditCard className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Payment transactions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Bundles</p>
                <p className="text-3xl font-bold text-gray-900">{billingData.bundles.length}</p>
              </div>
              <Package className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Package className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">Test bundles</span>
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
                  placeholder="Search tests, patients, or insurance providers..."
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Submitted">Submitted</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="price-books" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="price-books">Price Books</TabsTrigger>
          <TabsTrigger value="bundles">Bundles</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Price Books Tab */}
        <TabsContent value="price-books">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Price Books ({filteredPriceBooks.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredPriceBooks.map((price) => (
                    <div key={price.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{price.testName}</h3>
                            <Badge variant="outline">{price.category}</Badge>
                            <Badge className={getStatusColor(price.status)}>
                              {price.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Base Price: ${price.basePrice} • Insurance: ${price.insurancePrice} • Cash: ${price.cashPrice}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Effective: {price.effectiveDate} • Expiry: {price.expiryDate}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {price.notes}
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

        {/* Bundles Tab */}
        <TabsContent value="bundles">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Test Bundles ({billingData.bundles.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {billingData.bundles.map((bundle) => (
                    <div key={bundle.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{bundle.name}</h3>
                            <Badge variant="outline">{bundle.status}</Badge>
                            <Badge className="bg-green-100 text-green-800">
                              Save ${bundle.savings}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {bundle.description}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {bundle.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Regular: ${bundle.regularPrice} • Bundle: ${bundle.bundlePrice} • Valid: {bundle.validFrom} to {bundle.validTo}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {bundle.notes}
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

        {/* Claims Tab */}
        <TabsContent value="claims">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Insurance Claims ({billingData.claims.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {billingData.claims.map((claim) => (
                    <div key={claim.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{claim.patientName}</h3>
                            <Badge variant="outline">{claim.insuranceProvider}</Badge>
                            <Badge className={getStatusColor(claim.status)}>
                              {claim.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              ${claim.totalAmount}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Policy: {claim.policyNumber} • Claim: {claim.claimNumber}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Covered: ${claim.coveredAmount} • Patient: ${claim.patientResponsibility}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Tests: {claim.tests.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Submitted: {new Date(claim.submissionDate).toLocaleString()} • Processed: {claim.processedDate ? new Date(claim.processedDate).toLocaleString() : 'Pending'}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {claim.notes}
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

        {/* Payments Tab */}
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Transactions ({billingData.payments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {billingData.payments.map((payment) => (
                    <div key={payment.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{payment.patientName}</h3>
                            <Badge variant="outline">{payment.method}</Badge>
                            <Badge className={getStatusColor(payment.status)}>
                              {payment.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              ${payment.amount}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Transaction: {payment.transactionId} • Reference: {payment.reference}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {new Date(payment.date).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {payment.notes}
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

        {/* Insurance Tab */}
        <TabsContent value="insurance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Insurance Providers ({billingData.insuranceProviders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {billingData.insuranceProviders.map((provider) => (
                    <div key={provider.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{provider.name}</h3>
                            <Badge variant="outline">{provider.status}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {provider.coverageRate}% coverage
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Contact: {provider.contact} • Phone: {provider.phone} • Email: {provider.email}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Address: {provider.address}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Coverage: {provider.coverageRate}% • Copay: ${provider.copayAmount}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {provider.notes}
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

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Financial Reports ({billingData.reports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {billingData.reports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.type}</h3>
                            <Badge variant="outline">{report.period}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {report.generatedBy}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Generated: {new Date(report.generatedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {report.type === 'Revenue Report' ? 
                              `Total: $${report.totalRevenue} • Insurance: $${report.insuranceRevenue} • Cash: $${report.cashRevenue}` :
                              `Claims: ${report.totalClaims} • Approved: ${report.approvedClaims} • Pending: ${report.pendingClaims} • Amount: $${report.totalClaimAmount}`
                            }
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {report.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
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

      {/* Add Price Dialog */}
      <Dialog open={isPriceOpen} onOpenChange={setIsPriceOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Price' : 'Add New Price'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="test-name">Test Name</Label>
                <Input id="test-name" placeholder="Enter test name" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Hematology">Hematology</SelectItem>
                    <SelectItem value="Microbiology">Microbiology</SelectItem>
                    <SelectItem value="Immunology">Immunology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="base-price">Base Price</Label>
                <Input id="base-price" type="number" placeholder="Enter base price" />
              </div>
              <div>
                <Label htmlFor="insurance-price">Insurance Price</Label>
                <Input id="insurance-price" type="number" placeholder="Enter insurance price" />
              </div>
              <div>
                <Label htmlFor="cash-price">Cash Price</Label>
                <Input id="cash-price" type="number" placeholder="Enter cash price" />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
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
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter price notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPriceOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPriceOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Price' : 'Add Price'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Claim Dialog */}
      <Dialog open={isClaimOpen} onOpenChange={setIsClaimOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Claim' : 'Add New Claim'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-name">Patient Name</Label>
                <Input id="patient-name" placeholder="Enter patient name" />
              </div>
              <div>
                <Label htmlFor="insurance-provider">Insurance Provider</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blue Cross Blue Shield">Blue Cross Blue Shield</SelectItem>
                    <SelectItem value="Aetna">Aetna</SelectItem>
                    <SelectItem value="Cigna">Cigna</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="policy-number">Policy Number</Label>
                <Input id="policy-number" placeholder="Enter policy number" />
              </div>
              <div>
                <Label htmlFor="total-amount">Total Amount</Label>
                <Input id="total-amount" type="number" placeholder="Enter total amount" />
              </div>
              <div>
                <Label htmlFor="covered-amount">Covered Amount</Label>
                <Input id="covered-amount" type="number" placeholder="Enter covered amount" />
              </div>
              <div>
                <Label htmlFor="patient-responsibility">Patient Responsibility</Label>
                <Input id="patient-responsibility" type="number" placeholder="Enter patient responsibility" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="tests">Tests</Label>
              <Input id="tests" placeholder="Enter tests (comma separated)" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter claim notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsClaimOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsClaimOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Claim' : 'Add Claim'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
