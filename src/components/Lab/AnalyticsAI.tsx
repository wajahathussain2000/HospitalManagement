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
  BarChart3,
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

export default function AnalyticsAI() {
  const [activeTab, setActiveTab] = useState('kpis');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isPredictionOpen, setIsPredictionOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock analytics data
  const analyticsData = {
    kpis: [
      {
        id: 'KPI001',
        name: 'Test Turnaround Time',
        currentValue: '2.3 hours',
        targetValue: '2.0 hours',
        trend: 'Improving',
        change: '-15%',
        period: 'Last 30 days',
        status: 'Good',
        notes: 'TAT trending downward, approaching target'
      },
      {
        id: 'KPI002',
        name: 'Result Accuracy Rate',
        currentValue: '99.2%',
        targetValue: '99.5%',
        trend: 'Stable',
        change: '+0.1%',
        period: 'Last 30 days',
        status: 'Good',
        notes: 'Accuracy rate maintaining high standards'
      },
      {
        id: 'KPI003',
        name: 'Equipment Utilization',
        currentValue: '78%',
        targetValue: '85%',
        trend: 'Declining',
        change: '-5%',
        period: 'Last 30 days',
        status: 'Warning',
        notes: 'Utilization below target, need optimization'
      }
    ],
    businessMetrics: [
      {
        id: 'BM001',
        name: 'Monthly Revenue',
        value: 125000,
        currency: 'USD',
        change: '+12%',
        period: 'January 2024',
        category: 'Financial',
        notes: 'Strong revenue growth month-over-month'
      },
      {
        id: 'BM002',
        name: 'Test Volume',
        value: 15420,
        unit: 'Tests',
        change: '+8%',
        period: 'January 2024',
        category: 'Operational',
        notes: 'Increased test volume driving revenue growth'
      },
      {
        id: 'BM003',
        name: 'Cost Per Test',
        value: 8.10,
        currency: 'USD',
        change: '-3%',
        period: 'January 2024',
        category: 'Efficiency',
        notes: 'Cost optimization initiatives showing results'
      }
    ],
    predictions: [
      {
        id: 'PRED001',
        name: 'Test Volume Forecast',
        type: 'Volume Prediction',
        prediction: '18,500 tests',
        confidence: 85,
        timeframe: 'Next 30 days',
        factors: ['Seasonal trends', 'Historical data', 'Current growth rate'],
        lastUpdated: '2024-01-21T08:00:00Z',
        notes: 'AI model predicts continued growth in test volume'
      },
      {
        id: 'PRED002',
        name: 'Equipment Maintenance',
        type: 'Maintenance Prediction',
        prediction: 'Maintenance needed in 15 days',
        confidence: 92,
        timeframe: 'Next 30 days',
        factors: ['Usage patterns', 'Performance metrics', 'Historical maintenance'],
        lastUpdated: '2024-01-21T09:00:00Z',
        notes: 'Predictive maintenance model suggests upcoming service'
      }
    ],
    reports: [
      {
        id: 'RPT001',
        name: 'Monthly Performance Report',
        type: 'Performance',
        frequency: 'Monthly',
        lastGenerated: '2024-01-21T08:00:00Z',
        nextGeneration: '2024-02-21T08:00:00Z',
        recipients: ['Lab Manager', 'Admin', 'Quality Team'],
        status: 'Scheduled',
        notes: 'Comprehensive monthly performance analysis'
      },
      {
        id: 'RPT002',
        name: 'Revenue Analysis',
        type: 'Financial',
        frequency: 'Weekly',
        lastGenerated: '2024-01-20T09:00:00Z',
        nextGeneration: '2024-01-27T09:00:00Z',
        recipients: ['Finance Team', 'Lab Manager'],
        status: 'Active',
        notes: 'Weekly revenue tracking and analysis'
      }
    ],
    dashboards: [
      {
        id: 'DASH001',
        name: 'Executive Dashboard',
        type: 'Executive',
        widgets: 12,
        lastUpdated: '2024-01-21T10:00:00Z',
        users: 5,
        status: 'Active',
        notes: 'High-level KPIs for executive team'
      },
      {
        id: 'DASH002',
        name: 'Operations Dashboard',
        type: 'Operational',
        widgets: 18,
        lastUpdated: '2024-01-21T09:30:00Z',
        users: 15,
        status: 'Active',
        notes: 'Detailed operational metrics for lab staff'
      }
    ],
    insights: [
      {
        id: 'INS001',
        title: 'Peak Usage Hours',
        category: 'Operational',
        insight: 'Test volume peaks between 10 AM - 12 PM and 2 PM - 4 PM',
        impact: 'High',
        confidence: 88,
        generatedDate: '2024-01-21T08:00:00Z',
        notes: 'Consider staffing adjustments during peak hours'
      },
      {
        id: 'INS002',
        title: 'Equipment Efficiency',
        category: 'Efficiency',
        insight: 'Chemistry analyzers operating at 78% capacity, room for optimization',
        impact: 'Medium',
        confidence: 92,
        generatedDate: '2024-01-21T09:00:00Z',
        notes: 'Opportunity to increase throughput with current equipment'
      }
    ]
  };

  const handleAddReport = () => {
    setSelectedItem(null);
    setIsReportOpen(true);
  };

  const handleAddPrediction = () => {
    setSelectedItem(null);
    setIsPredictionOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      case 'Improving': return 'bg-green-100 text-green-800';
      case 'Declining': return 'bg-red-100 text-red-800';
      case 'Stable': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredKPIs = analyticsData.kpis.filter(kpi => {
    const matchesSearch = kpi.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kpi.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || kpi.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & AI</h1>
          <p className="text-gray-600 mt-1">KPIs, business metrics, AI/ML predictions, and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleAddReport}>
            <Plus className="h-4 w-4 mr-2" />
            Add Report
          </Button>
          <Button variant="outline" onClick={handleAddPrediction}>
            <Plus className="h-4 w-4 mr-2" />
            Add Prediction
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
                <p className="text-sm font-medium text-gray-600">KPIs</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.kpis.length}</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">Key performance indicators</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Predictions</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.predictions.length}</p>
              </div>
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">AI predictions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reports</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.reports.length}</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <FileText className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Scheduled reports</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Insights</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.insights.length}</p>
              </div>
              <Sparkles className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Sparkles className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-orange-600">AI insights</span>
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
                  placeholder="Search KPIs, reports, or insights..."
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
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Warning">Warning</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="kpis" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="business">Business Metrics</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        {/* KPIs Tab */}
        <TabsContent value="kpis">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Key Performance Indicators ({filteredKPIs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredKPIs.map((kpi) => (
                    <div key={kpi.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{kpi.name}</h3>
                            <Badge variant="outline">{kpi.period}</Badge>
                            <Badge className={getStatusColor(kpi.status)}>
                              {kpi.status}
                            </Badge>
                            <Badge className={getStatusColor(kpi.trend)}>
                              {kpi.trend}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current: {kpi.currentValue} • Target: {kpi.targetValue} • Change: {kpi.change}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {kpi.notes}
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

        {/* Business Metrics Tab */}
        <TabsContent value="business">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Business Metrics ({analyticsData.businessMetrics.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyticsData.businessMetrics.map((metric) => (
                    <div key={metric.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{metric.name}</h3>
                            <Badge variant="outline">{metric.category}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {metric.change}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Value: {metric.currency ? `${metric.currency} ${metric.value.toLocaleString()}` : `${metric.value.toLocaleString()} ${metric.unit}`}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Period: {metric.period}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {metric.notes}
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

        {/* Predictions Tab */}
        <TabsContent value="predictions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                AI Predictions ({analyticsData.predictions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyticsData.predictions.map((prediction) => (
                    <div key={prediction.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{prediction.name}</h3>
                            <Badge variant="outline">{prediction.type}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {prediction.confidence}% confidence
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Prediction: {prediction.prediction} • Timeframe: {prediction.timeframe}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Factors: {prediction.factors.join(', ')}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Updated: {new Date(prediction.lastUpdated).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {prediction.notes}
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
                <FileText className="h-5 w-5 mr-2" />
                Scheduled Reports ({analyticsData.reports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyticsData.reports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.name}</h3>
                            <Badge variant="outline">{report.type}</Badge>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {report.frequency}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Generated: {new Date(report.lastGenerated).toLocaleString()} • Next: {new Date(report.nextGeneration).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Recipients: {report.recipients.join(', ')}
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

        {/* Dashboards Tab */}
        <TabsContent value="dashboards">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Dashboards ({analyticsData.dashboards.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyticsData.dashboards.map((dashboard) => (
                    <div key={dashboard.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{dashboard.name}</h3>
                            <Badge variant="outline">{dashboard.type}</Badge>
                            <Badge className={getStatusColor(dashboard.status)}>
                              {dashboard.status}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {dashboard.widgets} widgets
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Last Updated: {new Date(dashboard.lastUpdated).toLocaleString()} • Users: {dashboard.users}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {dashboard.notes}
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

        {/* Insights Tab */}
        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                AI Insights ({analyticsData.insights.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {analyticsData.insights.map((insight) => (
                    <div key={insight.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{insight.title}</h3>
                            <Badge variant="outline">{insight.category}</Badge>
                            <Badge className={getStatusColor(insight.impact)}>
                              {insight.impact} Impact
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              {insight.confidence}% confidence
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {insight.insight}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Generated: {new Date(insight.generatedDate).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Notes: {insight.notes}
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
      </Tabs>

      {/* Add Report Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Report' : 'Add New Report'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Report Name</Label>
                <Input id="name" placeholder="Enter report name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Performance">Performance</SelectItem>
                    <SelectItem value="Financial">Financial</SelectItem>
                    <SelectItem value="Operational">Operational</SelectItem>
                    <SelectItem value="Quality">Quality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="recipients">Recipients</Label>
                <Input id="recipients" placeholder="Enter recipients (comma separated)" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter report notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsReportOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsReportOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Report' : 'Add Report'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Prediction Dialog */}
      <Dialog open={isPredictionOpen} onOpenChange={setIsPredictionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              {selectedItem ? 'Edit Prediction' : 'Add New Prediction'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Prediction Name</Label>
                <Input id="name" placeholder="Enter prediction name" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Volume Prediction">Volume Prediction</SelectItem>
                    <SelectItem value="Maintenance Prediction">Maintenance Prediction</SelectItem>
                    <SelectItem value="Revenue Forecast">Revenue Forecast</SelectItem>
                    <SelectItem value="Quality Prediction">Quality Prediction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeframe">Timeframe</Label>
                <Input id="timeframe" placeholder="Enter timeframe" />
              </div>
              <div>
                <Label htmlFor="confidence">Confidence</Label>
                <Input id="confidence" type="number" placeholder="Enter confidence percentage" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="prediction">Prediction</Label>
              <Input id="prediction" placeholder="Enter prediction details" />
            </div>
            
            <div>
              <Label htmlFor="factors">Factors</Label>
              <Input id="factors" placeholder="Enter factors (comma separated)" />
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Enter prediction notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPredictionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPredictionOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                {selectedItem ? 'Update Prediction' : 'Add Prediction'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
