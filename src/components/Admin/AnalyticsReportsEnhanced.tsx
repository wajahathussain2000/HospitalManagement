import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  BarChart3, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Download,
  RefreshCw,
  Calendar,
  TrendingUp,
  TrendingDown,
  Target,
  Activity,
  Settings,
  Eye,
  Printer,
  Share,
  Filter,
  Clock,
  DollarSign,
  Users,
  Heart,
  Stethoscope,
  Package,
  Wrench,
  Bed,
  AlertTriangle,
  CheckCircle,
  Info,
  Star,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
  Zap,
  FileText,
  ClipboardList,
  PieChart,
  LineChart,
  AreaChart,
  Scatter,
  Gauge,
  Thermometer,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Target as TargetIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Heart as HeartIcon,
  Stethoscope as StethoscopeIcon,
  Package as PackageIcon,
  Wrench as WrenchIcon,
  Bed as BedIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Building as BuildingIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Zap as ZapIcon,
  FileText as FileTextIcon,
  ClipboardList as ClipboardListIcon,
  Calendar as CalendarIcon,
  Download as DownloadIcon,
  RefreshCw as RefreshCwIcon,
  Settings as SettingsIcon,
  Eye as EyeIcon,
  Printer as PrinterIcon,
  Share as ShareIcon,
  Filter as FilterIcon
} from 'lucide-react';

interface KPIMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  period: string;
  category: 'Financial' | 'Operational' | 'Clinical' | 'Patient' | 'Staff';
  description: string;
  lastUpdated: Date;
}

interface Report {
  id: string;
  name: string;
  type: 'Dashboard' | 'Financial' | 'Operational' | 'Clinical' | 'Custom';
  description: string;
  createdBy: string;
  createdAt: Date;
  lastRun: Date;
  schedule: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'On-Demand';
  status: 'Active' | 'Draft' | 'Archived';
  data: any[];
  filters: {
    dateRange: string;
    departments: string[];
    metrics: string[];
  };
}

interface Dashboard {
  id: string;
  name: string;
  description: string;
  widgets: DashboardWidget[];
  layout: string;
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
  lastModified: Date;
}

interface DashboardWidget {
  id: string;
  type: 'chart' | 'metric' | 'table' | 'gauge' | 'trend';
  title: string;
  data: any;
  position: { x: number; y: number; w: number; h: number };
  config: any;
}

export default function AnalyticsReportsEnhanced() {
  const [kpis, setKpis] = useState<KPIMetric[]>([
    {
      id: '1',
      name: 'Patient Satisfaction',
      value: 94.2,
      target: 90.0,
      unit: '%',
      trend: 'up',
      change: 2.1,
      period: 'This Month',
      category: 'Patient',
      description: 'Overall patient satisfaction score',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Revenue Growth',
      value: 15.8,
      target: 12.0,
      unit: '%',
      trend: 'up',
      change: 3.2,
      period: 'This Quarter',
      category: 'Financial',
      description: 'Quarter-over-quarter revenue growth',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: '3',
      name: 'Bed Occupancy',
      value: 87.5,
      target: 85.0,
      unit: '%',
      trend: 'up',
      change: 1.2,
      period: 'This Month',
      category: 'Operational',
      description: 'Average bed occupancy rate',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: '4',
      name: 'Average Wait Time',
      value: 18.5,
      target: 20.0,
      unit: 'minutes',
      trend: 'down',
      change: -1.5,
      period: 'This Week',
      category: 'Operational',
      description: 'Average patient wait time',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: '5',
      name: 'Staff Productivity',
      value: 92.3,
      target: 88.0,
      unit: '%',
      trend: 'up',
      change: 4.3,
      period: 'This Month',
      category: 'Staff',
      description: 'Staff efficiency and productivity score',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: '6',
      name: 'Readmission Rate',
      value: 8.7,
      target: 10.0,
      unit: '%',
      trend: 'down',
      change: -1.3,
      period: 'This Quarter',
      category: 'Clinical',
      description: 'Patient readmission rate within 30 days',
      lastUpdated: new Date('2024-01-15')
    }
  ]);

  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      name: 'Monthly Financial Summary',
      type: 'Financial',
      description: 'Comprehensive financial performance report',
      createdBy: 'Finance Team',
      createdAt: new Date('2024-01-01'),
      lastRun: new Date('2024-01-15'),
      schedule: 'Monthly',
      status: 'Active',
      data: [],
      filters: {
        dateRange: '2024-01-01 to 2024-01-31',
        departments: ['All'],
        metrics: ['Revenue', 'Expenses', 'Profit']
      }
    },
    {
      id: '2',
      name: 'Patient Flow Analysis',
      type: 'Operational',
      description: 'Patient admission and discharge patterns',
      createdBy: 'Operations Team',
      createdAt: new Date('2024-01-05'),
      lastRun: new Date('2024-01-14'),
      schedule: 'Weekly',
      status: 'Active',
      data: [],
      filters: {
        dateRange: '2024-01-08 to 2024-01-14',
        departments: ['Emergency', 'Cardiology', 'Surgery'],
        metrics: ['Admissions', 'Discharges', 'Wait Times']
      }
    },
    {
      id: '3',
      name: 'Clinical Outcomes Report',
      type: 'Clinical',
      description: 'Patient outcomes and treatment effectiveness',
      createdBy: 'Clinical Team',
      createdAt: new Date('2024-01-10'),
      lastRun: new Date('2024-01-13'),
      schedule: 'Monthly',
      status: 'Active',
      data: [],
      filters: {
        dateRange: '2024-01-01 to 2024-01-31',
        departments: ['All'],
        metrics: ['Success Rate', 'Complications', 'Recovery Time']
      }
    }
  ]);

  const [dashboards, setDashboards] = useState<Dashboard[]>([
    {
      id: '1',
      name: 'Executive Dashboard',
      description: 'High-level KPIs and metrics for executives',
      widgets: [],
      layout: 'grid',
      isPublic: true,
      createdBy: 'Admin',
      createdAt: new Date('2024-01-01'),
      lastModified: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Operations Dashboard',
      description: 'Operational metrics and real-time data',
      widgets: [],
      layout: 'grid',
      isPublic: false,
      createdBy: 'Operations Manager',
      createdAt: new Date('2024-01-05'),
      lastModified: new Date('2024-01-14')
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'kpis' | 'reports' | 'dashboards' | 'custom'>('overview');
  const [isCreateReportDialogOpen, setIsCreateReportDialogOpen] = useState(false);
  const [isCreateDashboardDialogOpen, setIsCreateDashboardDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredKpis = kpis.filter(kpi => {
    const matchesSearch = kpi.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kpi.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || kpi.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4 text-blue-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Financial':
        return <DollarSign className="h-5 w-5" />;
      case 'Operational':
        return <Activity className="h-5 w-5" />;
      case 'Clinical':
        return <Stethoscope className="h-5 w-5" />;
      case 'Patient':
        return <Heart className="h-5 w-5" />;
      case 'Staff':
        return <Users className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };

  const getReportTypeIcon = (type: string) => {
    switch (type) {
      case 'Dashboard':
        return <BarChart3 className="h-5 w-5" />;
      case 'Financial':
        return <DollarSign className="h-5 w-5" />;
      case 'Operational':
        return <Activity className="h-5 w-5" />;
      case 'Clinical':
        return <Stethoscope className="h-5 w-5" />;
      case 'Custom':
        return <Settings className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const analytics = {
    totalKpis: kpis.length,
    totalReports: reports.length,
    totalDashboards: dashboards.length,
    avgPerformance: Math.round(kpis.reduce((sum, kpi) => sum + (kpi.value / kpi.target) * 100, 0) / kpis.length),
    onTargetKpis: kpis.filter(kpi => kpi.value >= kpi.target).length,
    trendingUp: kpis.filter(kpi => kpi.trend === 'up').length,
    lastUpdated: new Date(Math.max(...kpis.map(kpi => kpi.lastUpdated.getTime())))
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics & Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics with real-time dashboards and predictive insights</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh Data</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Dialog open={isCreateReportDialogOpen} onOpenChange={setIsCreateReportDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create Report</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Report</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="data">Data Sources</TabsTrigger>
                  <TabsTrigger value="filters">Filters</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reportName">Report Name</Label>
                      <Input id="reportName" placeholder="Enter report name" />
                    </div>
                    <div>
                      <Label htmlFor="reportType">Report Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dashboard">Dashboard</SelectItem>
                          <SelectItem value="Financial">Financial</SelectItem>
                          <SelectItem value="Operational">Operational</SelectItem>
                          <SelectItem value="Clinical">Clinical</SelectItem>
                          <SelectItem value="Custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter report description" rows={3} />
                  </div>
                </TabsContent>
                
                <TabsContent value="data" className="space-y-4 mt-4">
                  <div>
                    <Label>Data Sources</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Patient Data', 'Financial Data', 'Operational Data', 'Clinical Data', 'Staff Data', 'Equipment Data'].map(source => (
                        <div key={source} className="flex items-center space-x-2">
                          <Checkbox id={source} />
                          <Label htmlFor={source} className="text-sm">{source}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="filters" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateRange">Date Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="last7days">Last 7 Days</SelectItem>
                          <SelectItem value="last30days">Last 30 Days</SelectItem>
                          <SelectItem value="last90days">Last 90 Days</SelectItem>
                          <SelectItem value="thisyear">This Year</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="departments">Departments</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select departments" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="schedule">Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ondemand">On-Demand</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsCreateReportDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Report</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total KPIs</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalKpis}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.onTargetKpis} on target</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Target className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Avg Performance</p>
                <p className="text-3xl font-bold text-green-900">{analytics.avgPerformance}%</p>
                <p className="text-xs text-green-600 mt-1">Overall performance</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <TrendingUp className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Active Reports</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.totalReports}</p>
                <p className="text-xs text-purple-600 mt-1">Scheduled reports</p>
              </div>
              <div className="p-3 rounded-full bg-purple-200">
                <FileText className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Dashboards</p>
                <p className="text-3xl font-bold text-orange-900">{analytics.totalDashboards}</p>
                <p className="text-xs text-orange-600 mt-1">Active dashboards</p>
              </div>
              <div className="p-3 rounded-full bg-orange-200">
                <BarChart3 className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search KPIs, reports, or dashboards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Financial">Financial</SelectItem>
                  <SelectItem value="Operational">Operational</SelectItem>
                  <SelectItem value="Clinical">Clinical</SelectItem>
                  <SelectItem value="Patient">Patient</SelectItem>
                  <SelectItem value="Staff">Staff</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="kpis">KPIs</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {viewMode === 'kpis' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredKpis.map((kpi) => (
            <Card key={kpi.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {getCategoryIcon(kpi.category)}
                    </div>
                    <span className="text-lg">{kpi.name}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(kpi.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                      {kpi.change > 0 ? '+' : ''}{kpi.change.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{kpi.value.toFixed(1)}{kpi.unit}</span>
                    <Badge variant="outline" className="text-xs">
                      Target: {kpi.target}{kpi.unit}
                    </Badge>
                  </div>
                  <Progress value={(kpi.value / kpi.target) * 100} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{kpi.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{kpi.period}</span>
                    <span>Updated: {kpi.lastUpdated.toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Performance</p>
                      <p className={`text-sm font-medium ${
                        kpi.value >= kpi.target ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {Math.round((kpi.value / kpi.target) * 100)}%
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Category</p>
                      <p className="text-sm font-medium">{kpi.category}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'reports' && (
        <Card>
          <CardHeader>
            <CardTitle>Reports & Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Created By</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <p className="text-sm text-gray-600">{report.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getReportTypeIcon(report.type)}
                        <span>{report.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{report.createdBy}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.schedule}</Badge>
                    </TableCell>
                    <TableCell>{report.lastRun.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'dashboards' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {dashboards.map((dashboard) => (
            <Card key={dashboard.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>{dashboard.name}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    {dashboard.isPublic && (
                      <Badge className="bg-green-100 text-green-800">Public</Badge>
                    )}
                    <Badge variant="outline">{dashboard.widgets.length} widgets</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{dashboard.description}</p>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Created</p>
                      <p className="text-sm font-medium">{dashboard.createdAt.toLocaleDateString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Modified</p>
                      <p className="text-sm font-medium">{dashboard.lastModified.toLocaleDateString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">By</p>
                      <p className="text-sm font-medium">{dashboard.createdBy}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing KPIs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {kpis.filter(kpi => kpi.value >= kpi.target).slice(0, 5).map((kpi) => (
                  <div key={kpi.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{kpi.name}</span>
                      <span className="text-sm font-medium text-green-600">{kpi.value.toFixed(1)}{kpi.unit}</span>
                    </div>
                    <Progress value={(kpi.value / kpi.target) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.slice(0, 5).map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        {getReportTypeIcon(report.type)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{report.name}</p>
                        <p className="text-xs text-gray-600">{report.lastRun.toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
