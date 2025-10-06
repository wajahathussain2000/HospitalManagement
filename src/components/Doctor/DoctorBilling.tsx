import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
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
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  Clock,
  User,
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Eye,
  Settings,
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
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Table,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
  Target,
  Zap,
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
  Microscope,
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
  Shield,
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

export default function DoctorBilling() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Mock billing data
  const billingData = {
    currentMonth: {
      totalEarnings: 12500.00,
      consultationFees: 8500.00,
      procedureFees: 2500.00,
      telemedicineFees: 1500.00,
      pendingPayments: 3200.00,
      paidAmount: 9300.00
    },
    lastMonth: {
      totalEarnings: 11800.00,
      consultationFees: 7800.00,
      procedureFees: 2200.00,
      telemedicineFees: 1800.00,
      pendingPayments: 2100.00,
      paidAmount: 9700.00
    },
    yearToDate: {
      totalEarnings: 145600.00,
      consultationFees: 98000.00,
      procedureFees: 32000.00,
      telemedicineFees: 15600.00,
      pendingPayments: 8500.00,
      paidAmount: 137100.00
    }
  };

  // Mock consultation fees
  const consultationFees = [
    {
      id: 'CF001',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        mrn: 'MRN123456789',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        insurance: 'Blue Cross Blue Shield'
      },
      consultation: {
        date: '2024-01-20',
        time: '10:00 AM',
        type: 'In-Person Consultation',
        duration: '45 minutes',
        diagnosis: 'Hypertension',
        status: 'Completed'
      },
      billing: {
        consultationFee: 200.00,
        procedureFee: 0.00,
        totalAmount: 200.00,
        insuranceCoverage: 160.00,
        patientCopay: 40.00,
        status: 'Paid',
        paymentDate: '2024-01-20',
        paymentMethod: 'Insurance + Copay'
      },
      createdBy: 'Dr. Sarah Johnson',
      createdDate: '2024-01-20'
    },
    {
      id: 'CF002',
      patient: {
        name: 'Sarah Johnson',
        id: 'P001235',
        age: 32,
        gender: 'Female',
        mrn: 'MRN234567890',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        insurance: 'Aetna'
      },
      consultation: {
        date: '2024-01-22',
        time: '02:00 PM',
        type: 'Telemedicine Consultation',
        duration: '30 minutes',
        diagnosis: 'Migraine',
        status: 'Completed'
      },
      billing: {
        consultationFee: 150.00,
        procedureFee: 0.00,
        totalAmount: 150.00,
        insuranceCoverage: 120.00,
        patientCopay: 30.00,
        status: 'Pending',
        paymentDate: null,
        paymentMethod: 'Insurance + Copay'
      },
      createdBy: 'Dr. Sarah Johnson',
      createdDate: '2024-01-22'
    },
    {
      id: 'CF003',
      patient: {
        name: 'Michael Brown',
        id: 'P001236',
        age: 58,
        gender: 'Male',
        mrn: 'MRN345678901',
        phone: '+1 (555) 345-6789',
        email: 'michael.brown@email.com',
        insurance: 'Medicare'
      },
      consultation: {
        date: '2024-01-25',
        time: '11:30 AM',
        type: 'In-Person Consultation',
        duration: '60 minutes',
        diagnosis: 'Chest Pain',
        status: 'Completed'
      },
      billing: {
        consultationFee: 250.00,
        procedureFee: 100.00,
        totalAmount: 350.00,
        insuranceCoverage: 280.00,
        patientCopay: 70.00,
        status: 'Paid',
        paymentDate: '2024-01-25',
        paymentMethod: 'Insurance + Copay'
      },
      createdBy: 'Dr. Sarah Johnson',
      createdDate: '2024-01-25'
    }
  ];

  // Mock revenue analytics
  const revenueAnalytics = {
    monthlyTrend: [
      { month: 'Jan', earnings: 12500 },
      { month: 'Feb', earnings: 13200 },
      { month: 'Mar', earnings: 11800 },
      { month: 'Apr', earnings: 14500 },
      { month: 'May', earnings: 13800 },
      { month: 'Jun', earnings: 15200 }
    ],
    consultationTypes: [
      { type: 'In-Person', count: 45, revenue: 8500 },
      { type: 'Telemedicine', count: 30, revenue: 4500 },
      { type: 'Follow-up', count: 25, revenue: 3750 },
      { type: 'Emergency', count: 10, revenue: 2000 }
    ],
    paymentMethods: [
      { method: 'Insurance', percentage: 75, amount: 9375 },
      { method: 'Cash', percentage: 15, amount: 1875 },
      { method: 'Credit Card', percentage: 10, amount: 1250 }
    ]
  };

  const handleCreatePayment = (patient: any) => {
    setSelectedPatient(patient);
    setIsPaymentOpen(true);
  };

  const handleSavePayment = () => {
    console.log('Saving payment for:', selectedPatient.name);
    setIsPaymentOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'In-Person Consultation': return <User className="h-4 w-4 text-blue-600" />;
      case 'Telemedicine Consultation': return <Video className="h-4 w-4 text-green-600" />;
      case 'Follow-up Consultation': return <Calendar className="h-4 w-4 text-purple-600" />;
      case 'Emergency Consultation': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <User className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'Insurance + Copay': return <Shield className="h-4 w-4 text-blue-600" />;
      case 'Cash': return <DollarSign className="h-4 w-4 text-green-600" />;
      case 'Credit Card': return <CreditCard className="h-4 w-4 text-purple-600" />;
      default: return <DollarSign className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Revenue Insights</h1>
          <p className="text-gray-600 mt-1">Track consultation fees, earnings, and revenue analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setIsPaymentOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Payment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          {/* Revenue Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{billingData.currentMonth.totalEarnings.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +{((billingData.currentMonth.totalEarnings - billingData.lastMonth.totalEarnings) / billingData.lastMonth.totalEarnings * 100).toFixed(1)}% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consultation Fees</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{billingData.currentMonth.consultationFees.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {((billingData.currentMonth.consultationFees / billingData.currentMonth.totalEarnings) * 100).toFixed(1)}% of total earnings
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{billingData.currentMonth.pendingPayments.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {((billingData.currentMonth.pendingPayments / billingData.currentMonth.totalEarnings) * 100).toFixed(1)}% of total earnings
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{billingData.currentMonth.paidAmount.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {((billingData.currentMonth.paidAmount / billingData.currentMonth.totalEarnings) * 100).toFixed(1)}% of total earnings
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Revenue Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Consultation Fees</span>
                    </div>
                    <span className="text-sm font-medium">{billingData.currentMonth.consultationFees.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Procedure Fees</span>
                    </div>
                    <span className="text-sm font-medium">{billingData.currentMonth.procedureFees.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Telemedicine Fees</span>
                    </div>
                    <span className="text-sm font-medium">{billingData.currentMonth.telemedicineFees.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Monthly Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueAnalytics.monthlyTrend.slice(-3).map((month, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{month.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${(month.earnings / 16000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{month.earnings.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Consultations Tab */}
        <TabsContent value="consultations">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search consultations, patients, or amounts..."
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
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Overdue">Overdue</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="In-Person Consultation">In-Person</SelectItem>
                    <SelectItem value="Telemedicine Consultation">Telemedicine</SelectItem>
                    <SelectItem value="Follow-up Consultation">Follow-up</SelectItem>
                    <SelectItem value="Emergency Consultation">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Consultations List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="h-5 w-5 mr-2" />
                Consultation Fees ({consultationFees.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {consultationFees.map((consultation) => (
                    <div key={consultation.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {consultation.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{consultation.patient.name}</h3>
                              <Badge className={getStatusColor(consultation.billing.status)}>
                                {consultation.billing.status}
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                {getTypeIcon(consultation.consultation.type)}
                                <span className="ml-1">{consultation.consultation.type}</span>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {consultation.patient.age}y, {consultation.patient.gender}</div>
                              <div>MRN: {consultation.patient.mrn}</div>
                              <div>Date: {consultation.consultation.date} at {consultation.consultation.time}</div>
                              <div>Duration: {consultation.consultation.duration}</div>
                            </div>
                            <div className="mt-2">
                              <div className="text-sm font-medium text-gray-700">Diagnosis:</div>
                              <div className="text-sm text-gray-600">{consultation.consultation.diagnosis}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleCreatePayment(consultation)}>
                            <DollarSign className="h-4 w-4 mr-1" />
                            Payment
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Invoice
                          </Button>
                        </div>
                      </div>

                      {/* Billing Details */}
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-gray-700">Billing Details:</div>
                            <div className="space-y-1">
                              <div>Consultation Fee: {consultation.billing.consultationFee.toLocaleString()}</div>
                              <div>Procedure Fee: {consultation.billing.procedureFee.toLocaleString()}</div>
                              <div>Total Amount: {consultation.billing.totalAmount.toLocaleString()}</div>
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">Payment Details:</div>
                            <div className="space-y-1">
                              <div>Insurance Coverage: {consultation.billing.insuranceCoverage.toLocaleString()}</div>
                              <div>Patient Copay: {consultation.billing.patientCopay.toLocaleString()}</div>
                              <div>Payment Method: {consultation.billing.paymentMethod}</div>
                            </div>
                          </div>
                        </div>
                        {consultation.billing.paymentDate && (
                          <div className="text-sm text-gray-600">
                            <strong>Payment Date:</strong> {consultation.billing.paymentDate}
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

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2" />
                  Consultation Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueAnalytics.consultationTypes.map((type, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          index === 0 ? 'bg-blue-500' : 
                          index === 1 ? 'bg-green-500' : 
                          index === 2 ? 'bg-purple-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-sm font-medium">{type.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{type.count} consultations</div>
                        <div className="text-sm text-gray-600">{type.revenue.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueAnalytics.paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          index === 0 ? 'bg-blue-500' : 
                          index === 1 ? 'bg-green-500' : 'bg-purple-500'
                        }`}></div>
                        <span className="text-sm font-medium">{method.method}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{method.percentage}%</div>
                        <div className="text-sm text-gray-600">{method.amount.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Billing Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Consultation Fees</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="in-person-fee">In-Person Consultation Fee</Label>
                      <Input id="in-person-fee" type="number" defaultValue="200" />
                    </div>
                    <div>
                      <Label htmlFor="telemedicine-fee">Telemedicine Consultation Fee</Label>
                      <Input id="telemedicine-fee" type="number" defaultValue="150" />
                    </div>
                    <div>
                      <Label htmlFor="follow-up-fee">Follow-up Consultation Fee</Label>
                      <Input id="follow-up-fee" type="number" defaultValue="100" />
                    </div>
                    <div>
                      <Label htmlFor="emergency-fee">Emergency Consultation Fee</Label>
                      <Input id="emergency-fee" type="number" defaultValue="300" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Payment Settings</Label>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Auto-Generate Invoices</div>
                        <div className="text-sm text-gray-600">Automatically generate invoices for consultations</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Payment Reminders</div>
                        <div className="text-sm text-gray-600">Send automatic payment reminders</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Online Payments</div>
                        <div className="text-sm text-gray-600">Accept online payments from patients</div>
                      </div>
                      <Checkbox />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Reporting Settings</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="report-frequency">Report Frequency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="report-format">Report Format</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Payment - {selectedPatient?.patient.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.patient.age}y, {selectedPatient?.patient.gender} • {selectedPatient?.patient.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsPaymentOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSavePayment}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Payment
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Payment Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="payment-amount">Payment Amount</Label>
                      <Input 
                        id="payment-amount" 
                        type="number" 
                        defaultValue={selectedPatient.billing.totalAmount}
                      />
                    </div>
                    <div>
                      <Label htmlFor="payment-method">Payment Method</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="credit-card">Credit Card</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="payment-date">Payment Date</Label>
                      <Input 
                        id="payment-date" 
                        type="date" 
                        defaultValue={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="payment-status">Payment Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="partial">Partial</SelectItem>
                          <SelectItem value="overdue">Overdue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="payment-notes">Payment Notes</Label>
                    <Textarea
                      id="payment-notes"
                      placeholder="Enter payment notes..."
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
