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

export default function ReportsAnalytics() {
  const [activeTab, setActiveTab] = useState('sales');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('month');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isForecastOpen, setIsForecastOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  // Mock reports and analytics data
  const reportsData = {
    salesReports: [
      {
        id: 'SALES001',
        period: 'January 2024',
        totalSales: 125000,
        totalTransactions: 450,
        averageOrderValue: 278,
        topProducts: [
          { name: 'Paracetamol 500mg', sales: 2500, units: 1000 },
          { name: 'Amoxicillin 250mg', sales: 2100, units: 500 },
          { name: 'Metformin 500mg', sales: 1800, units: 900 }
        ],
        categoryBreakdown: [
          { category: 'Analgesics', sales: 35000, percentage: 28 },
          { category: 'Antibiotics', sales: 28000, percentage: 22.4 },
          { category: 'Cardiovascular', sales: 25000, percentage: 20 },
          { category: 'Hormones', sales: 20000, percentage: 16 },
          { category: 'Others', sales: 17000, percentage: 13.6 }
        ],
        growthRate: 12.5,
        status: 'Completed'
      }
    ],
    stockValuation: [
      {
        id: 'STOCK001',
        date: '2024-01-20',
        totalValue: 450000,
        totalItems: 1250,
        averageValue: 360,
        categoryValues: [
          { category: 'Analgesics', value: 125000, percentage: 27.8 },
          { category: 'Antibiotics', value: 100000, percentage: 22.2 },
          { category: 'Cardiovascular', value: 90000, percentage: 20 },
          { category: 'Hormones', value: 80000, percentage: 17.8 },
          { category: 'Others', value: 55000, percentage: 12.2 }
        ],
        slowMoving: 15,
        fastMoving: 85,
        status: 'Current'
      }
    ],
    profitLoss: [
      {
        id: 'PL001',
        period: 'January 2024',
        revenue: 125000,
        costOfGoods: 75000,
        grossProfit: 50000,
        operatingExpenses: 15000,
        netProfit: 35000,
        profitMargin: 28,
        topPerformingProducts: [
          { name: 'Paracetamol 500mg', profit: 5000, margin: 40 },
          { name: 'Amoxicillin 250mg', profit: 4200, margin: 35 },
          { name: 'Metformin 500mg', profit: 3600, margin: 30 }
        ],
        status: 'Completed'
      }
    ],
    fastSlowMoving: [
      {
        id: 'FS001',
        period: 'January 2024',
        fastMoving: [
          { name: 'Paracetamol 500mg', sales: 1000, revenue: 2500, rank: 1 },
          { name: 'Amoxicillin 250mg', sales: 500, revenue: 2100, rank: 2 },
          { name: 'Metformin 500mg', sales: 900, revenue: 1800, rank: 3 }
        ],
        slowMoving: [
          { name: 'Specialty Drug A', sales: 5, revenue: 100, rank: 1 },
          { name: 'Rare Medicine B', sales: 3, revenue: 75, rank: 2 },
          { name: 'Expensive Drug C', sales: 2, revenue: 50, rank: 3 }
        ],
        status: 'Analyzed'
      }
    ],
    expiryWastage: [
      {
        id: 'EW001',
        period: 'January 2024',
        totalExpired: 25,
        totalWastage: 1500,
        expiryValue: 5000,
        wastageValue: 7500,
        topExpired: [
          { name: 'Paracetamol 500mg', quantity: 10, value: 250 },
          { name: 'Amoxicillin 250mg', quantity: 8, value: 400 },
          { name: 'Insulin Glargine', quantity: 5, value: 1250 }
        ],
        wastageReasons: [
          { reason: 'Repackaging Loss', quantity: 50, value: 2500 },
          { reason: 'Broken Vials', quantity: 30, value: 1500 },
          { reason: 'Spillage', quantity: 20, value: 1000 }
        ],
        status: 'Recorded'
      }
    ],
    aiForecasting: [
      {
        id: 'AI001',
        medicine: 'Paracetamol 500mg',
        currentStock: 150,
        predictedRunout: '2024-02-15',
        suggestedOrder: 200,
        confidence: 95,
        seasonalTrend: 'Stable',
        demandPattern: 'Consistent',
        priceFluctuation: 'Low',
        status: 'Recommended'
      },
      {
        id: 'AI002',
        medicine: 'Insulin Glargine',
        currentStock: 8,
        predictedRunout: '2024-01-25',
        suggestedOrder: 50,
        confidence: 98,
        seasonalTrend: 'Stable',
        demandPattern: 'Consistent',
        priceFluctuation: 'Medium',
        status: 'Urgent'
      }
    ],
    performanceAnalytics: [
      {
        id: 'PERF001',
        metric: 'Inventory Turnover',
        value: 4.2,
        target: 4.0,
        status: 'Above Target',
        trend: 'Up',
        description: 'How quickly inventory is sold and replaced'
      },
      {
        id: 'PERF002',
        metric: 'Gross Margin',
        value: 28.5,
        target: 25.0,
        status: 'Above Target',
        trend: 'Up',
        description: 'Percentage of revenue after cost of goods'
      },
      {
        id: 'PERF003',
        metric: 'Customer Satisfaction',
        value: 4.6,
        target: 4.5,
        status: 'Above Target',
        trend: 'Up',
        description: 'Average customer satisfaction rating'
      }
    ]
  };

  const handleGenerateReport = () => {
    setSelectedReport(null);
    setIsReportOpen(true);
  };

  const handleAIForecast = () => {
    setIsForecastOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Current': return 'bg-blue-100 text-blue-800';
      case 'Analyzed': return 'bg-purple-100 text-purple-800';
      case 'Recorded': return 'bg-gray-100 text-gray-800';
      case 'Recommended': return 'bg-blue-100 text-blue-800';
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Above Target': return 'bg-green-100 text-green-800';
      case 'Below Target': return 'bg-red-100 text-red-800';
      case 'On Target': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'Up': return 'text-green-600';
      case 'Down': return 'text-red-600';
      case 'Stable': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const filteredReports = reportsData.salesReports.filter(report => {
    const matchesSearch = report.period.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPeriod = filterPeriod === 'all' || report.period.includes(filterPeriod);
    const matchesCategory = filterCategory === 'all' || report.categoryBreakdown.some(cat => cat.category === filterCategory);
    return matchesSearch && matchesPeriod && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports, Analytics & AI Insights</h1>
          <p className="text-gray-600 mt-1">Comprehensive reporting with AI-powered forecasting and performance analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleGenerateReport}>
            <Plus className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline" onClick={handleAIForecast}>
            <Zap className="h-4 w-4 mr-2" />
            AI Forecast
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export All
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
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-3xl font-bold text-gray-900">
                  {reportsData.salesReports[0]?.totalSales.toLocaleString()}
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <BarChart3 className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-blue-600">This month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stock Value</p>
                <p className="text-3xl font-bold text-gray-900">
                  {reportsData.stockValuation[0]?.totalValue.toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Current inventory</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Net Profit</p>
                <p className="text-3xl font-bold text-gray-900">
                  {reportsData.profitLoss[0]?.netProfit.toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">This month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI Recommendations</p>
                <p className="text-3xl font-bold text-gray-900">{reportsData.aiForecasting.length}</p>
              </div>
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-purple-600">Smart insights</span>
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
                  placeholder="Search reports, products, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Periods</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Analgesics">Analgesics</SelectItem>
                <SelectItem value="Antibiotics">Antibiotics</SelectItem>
                <SelectItem value="Cardiovascular">Cardiovascular</SelectItem>
                <SelectItem value="Hormones">Hormones</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sales" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="stock">Stock Valuation</TabsTrigger>
          <TabsTrigger value="profit">Profit & Loss</TabsTrigger>
          <TabsTrigger value="movement">Fast/Slow Moving</TabsTrigger>
          <TabsTrigger value="expiry">Expiry & Wastage</TabsTrigger>
          <TabsTrigger value="ai">AI Insights</TabsTrigger>
        </TabsList>

        {/* Sales Reports Tab */}
        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Sales Reports ({filteredReports.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{report.period}</h3>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Total Sales: {report.totalSales.toLocaleString()} • Transactions: {report.totalTransactions} • Avg Order: {report.averageOrderValue}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Growth Rate: {report.growthRate}% • Top Products: {report.topProducts.length}
                          </div>
                          <div className="text-sm text-gray-600">
                            Categories: {report.categoryBreakdown.map(cat => `${cat.category} (${cat.percentage}%)`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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

        {/* Stock Valuation Tab */}
        <TabsContent value="stock">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Stock Valuation Reports ({reportsData.stockValuation.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reportsData.stockValuation.map((valuation) => (
                    <div key={valuation.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Stock Valuation - {valuation.date}</h3>
                            <Badge className={getStatusColor(valuation.status)}>
                              {valuation.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Total Value: {valuation.totalValue.toLocaleString()} • Items: {valuation.totalItems} • Avg Value: {valuation.averageValue}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Fast Moving: {valuation.fastMoving}% • Slow Moving: {valuation.slowMoving}%
                          </div>
                          <div className="text-sm text-gray-600">
                            Categories: {valuation.categoryValues.map(cat => `${cat.category} (${cat.percentage}%)`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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

        {/* Profit & Loss Tab */}
        <TabsContent value="profit">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Profit & Loss Reports ({reportsData.profitLoss.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reportsData.profitLoss.map((pl) => (
                    <div key={pl.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">P&L - {pl.period}</h3>
                            <Badge className={getStatusColor(pl.status)}>
                              {pl.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Revenue: {pl.revenue.toLocaleString()} • COGS: {pl.costOfGoods.toLocaleString()} • Gross Profit: {pl.grossProfit.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Operating Expenses: {pl.operatingExpenses.toLocaleString()} • Net Profit: {pl.netProfit.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Profit Margin: {pl.profitMargin}% • Top Products: {pl.topPerformingProducts.length}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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

        {/* Fast/Slow Moving Tab */}
        <TabsContent value="movement">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Fast/Slow Moving Analysis ({reportsData.fastSlowMoving.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reportsData.fastSlowMoving.map((movement) => (
                    <div key={movement.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Movement Analysis - {movement.period}</h3>
                            <Badge className={getStatusColor(movement.status)}>
                              {movement.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Fast Moving: {movement.fastMoving.length} products • Slow Moving: {movement.slowMoving.length} products
                          </div>
                          <div className="text-sm text-gray-600">
                            Top Fast: {movement.fastMoving[0]?.name} • Top Slow: {movement.slowMoving[0]?.name}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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

        {/* Expiry & Wastage Tab */}
        <TabsContent value="expiry">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Expiry & Wastage Reports ({reportsData.expiryWastage.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reportsData.expiryWastage.map((expiry) => (
                    <div key={expiry.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">Expiry & Wastage - {expiry.period}</h3>
                            <Badge className={getStatusColor(expiry.status)}>
                              {expiry.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Total Expired: {expiry.totalExpired} • Total Wastage: {expiry.totalWastage} • Expiry Value: {expiry.expiryValue}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Wastage Value: {expiry.wastageValue} • Top Expired: {expiry.topExpired[0]?.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            Wastage Reasons: {expiry.wastageReasons.map(reason => `${reason.reason} (${reason.quantity})`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Export
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

        {/* AI Insights Tab */}
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                AI Insights & Forecasting ({reportsData.aiForecasting.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reportsData.aiForecasting.map((forecast) => (
                    <div key={forecast.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{forecast.medicine}</h3>
                            <Badge className={getStatusColor(forecast.status)}>
                              {forecast.status}
                            </Badge>
                            <Badge variant="outline">
                              {forecast.confidence}% confidence
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Current Stock: {forecast.currentStock} • Predicted Runout: {forecast.predictedRunout} • Suggested Order: {forecast.suggestedOrder}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Seasonal Trend: {forecast.seasonalTrend} • Demand Pattern: {forecast.demandPattern} • Price Fluctuation: {forecast.priceFluctuation}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Apply
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

      {/* Performance Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Performance Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reportsData.performanceAnalytics.map((metric) => (
              <div key={metric.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                  <Badge className={getStatusColor(metric.status)}>
                    {metric.status}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.description}</div>
                <div className="flex items-center text-sm">
                  <span className={getTrendColor(metric.trend)}>{metric.trend}</span>
                  <span className="text-gray-600 ml-2">Target: {metric.target}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Generation Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Generate Custom Report
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Report</SelectItem>
                    <SelectItem value="stock">Stock Valuation</SelectItem>
                    <SelectItem value="profit">Profit & Loss</SelectItem>
                    <SelectItem value="movement">Fast/Slow Moving</SelectItem>
                    <SelectItem value="expiry">Expiry & Wastage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-period">Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Analgesics">Analgesics</SelectItem>
                    <SelectItem value="Antibiotics">Antibiotics</SelectItem>
                    <SelectItem value="Cardiovascular">Cardiovascular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="report-format">Format</Label>
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
            
            <div>
              <Label htmlFor="report-filters">Additional Filters</Label>
              <Textarea id="report-filters" placeholder="Enter any additional filters or requirements" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsReportOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsReportOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Generate Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AI Forecast Dialog */}
      <Dialog open={isForecastOpen} onOpenChange={setIsForecastOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              AI Forecasting Analysis
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center py-8">
              <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">AI forecasting analysis would be displayed here</p>
              <p className="text-sm text-gray-500">Machine learning predictions and demand forecasting</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsForecastOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsForecastOpen(false)}>
                <Zap className="h-4 w-4 mr-1" />
                Analyze
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
