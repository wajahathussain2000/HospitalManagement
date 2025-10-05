import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
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
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  User,
  Users,
  Search,
  Filter,
  Download,
  Settings,
  MoreHorizontal,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
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

export default function DoctorAnalytics() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalPatients: 1247,
      totalConsultations: 3421,
      averageRating: 4.6,
      totalRevenue: 125000,
      monthlyGrowth: 12.5,
      patientSatisfaction: 94.2,
      averageConsultationTime: 28,
      followUpRate: 78.5
    },
    patientsTreated: [
      { month: 'Jan', count: 98, revenue: 12500 },
      { month: 'Feb', count: 112, revenue: 14200 },
      { month: 'Mar', count: 134, revenue: 16800 },
      { month: 'Apr', count: 156, revenue: 19200 },
      { month: 'May', count: 178, revenue: 22100 },
      { month: 'Jun', count: 201, revenue: 25100 }
    ],
    diseaseTrends: [
      { condition: 'Hypertension', count: 45, percentage: 18.2, trend: 'up' },
      { condition: 'Diabetes', count: 38, percentage: 15.4, trend: 'up' },
      { condition: 'Cardiovascular', count: 32, percentage: 12.9, trend: 'down' },
      { condition: 'Respiratory', count: 28, percentage: 11.3, trend: 'up' },
      { condition: 'Gastrointestinal', count: 25, percentage: 10.1, trend: 'stable' },
      { condition: 'Neurological', count: 22, percentage: 8.9, trend: 'up' },
      { condition: 'Orthopedic', count: 19, percentage: 7.7, trend: 'down' },
      { condition: 'Dermatological', count: 16, percentage: 6.5, trend: 'stable' }
    ],
    labStats: {
      totalOrders: 1247,
      pendingResults: 23,
      completedResults: 1224,
      averageProcessingTime: 2.4,
      topTests: [
        { test: 'Blood Count', count: 234, percentage: 18.8 },
        { test: 'Lipid Profile', count: 189, percentage: 15.2 },
        { test: 'Glucose Test', count: 156, percentage: 12.5 },
        { test: 'Thyroid Function', count: 134, percentage: 10.7 },
        { test: 'Liver Function', count: 98, percentage: 7.9 }
      ]
    },
    prescriptionStats: {
      totalPrescriptions: 2891,
      averagePerPatient: 2.3,
      topMedications: [
        { medication: 'Metformin', count: 156, percentage: 5.4 },
        { medication: 'Lisinopril', count: 134, percentage: 4.6 },
        { medication: 'Atorvastatin', count: 123, percentage: 4.3 },
        { medication: 'Amlodipine', count: 98, percentage: 3.4 },
        { medication: 'Omeprazole', count: 87, percentage: 3.0 }
      ],
      drugInteractions: 12,
      allergies: 8
    },
    performanceMetrics: {
      consultationEfficiency: 92.5,
      patientRetention: 87.3,
      followUpCompletion: 78.5,
      prescriptionAccuracy: 96.8,
      diagnosisAccuracy: 94.2,
      patientSatisfaction: 94.2,
      averageWaitTime: 12.5,
      noShowRate: 8.7
    },
    monthlyComparison: {
      currentMonth: {
        patients: 201,
        consultations: 456,
        revenue: 25100,
        rating: 4.6
      },
      previousMonth: {
        patients: 178,
        consultations: 398,
        revenue: 22100,
        rating: 4.4
      }
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Target className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Performance</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics and performance metrics for your practice</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
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
                <p className="text-sm font-medium text-gray-600">Total Patients</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalPatients.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+{analyticsData.overview.monthlyGrowth}% this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Consultations</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalConsultations.toLocaleString()}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-gray-600 mr-1" />
                <span className="text-gray-600">Avg: {analyticsData.overview.averageConsultationTime} min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Patient Rating</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.averageRating}/5</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Heart className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-gray-600">{analyticsData.overview.patientSatisfaction}% satisfied</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalRevenue.toLocaleString()}</p>
              </div>
              <Trophy className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+{analyticsData.overview.monthlyGrowth}% growth</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="diseases">Diseases</TabsTrigger>
          <TabsTrigger value="lab">Lab Stats</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(analyticsData.performanceMetrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-gray-600">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Monthly Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Patients</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {analyticsData.monthlyComparison.previousMonth.patients}
                      </span>
                      <span className="text-sm font-medium">
                        {analyticsData.monthlyComparison.currentMonth.patients}
                      </span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Consultations</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {analyticsData.monthlyComparison.previousMonth.consultations}
                      </span>
                      <span className="text-sm font-medium">
                        {analyticsData.monthlyComparison.currentMonth.consultations}
                      </span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Revenue</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {analyticsData.monthlyComparison.previousMonth.revenue.toLocaleString()}
                      </span>
                      <span className="text-sm font-medium">
                        {analyticsData.monthlyComparison.currentMonth.revenue.toLocaleString()}
                      </span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rating</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {analyticsData.monthlyComparison.previousMonth.rating}
                      </span>
                      <span className="text-sm font-medium">
                        {analyticsData.monthlyComparison.currentMonth.rating}
                      </span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Patients Tab */}
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4">
                  {analyticsData.patientsTreated.map((month) => (
                    <div key={month.month} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{month.count}</div>
                      <div className="text-sm text-gray-600">{month.month}</div>
                      <div className="text-xs text-gray-500">{month.revenue.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Patient trend chart would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Diseases Tab */}
        <TabsContent value="diseases">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Disease Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.diseaseTrends.map((disease) => (
                  <div key={disease.condition} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">{disease.condition}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{disease.count} cases</span>
                            <span className="text-sm text-gray-600">({disease.percentage}%)</span>
                            {getTrendIcon(disease.trend)}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${disease.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lab Stats Tab */}
        <TabsContent value="lab">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="h-5 w-5 mr-2" />
                  Lab Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Orders</span>
                    <span className="font-medium">{analyticsData.labStats.totalOrders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pending Results</span>
                    <span className="font-medium text-yellow-600">{analyticsData.labStats.pendingResults}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completed Results</span>
                    <span className="font-medium text-green-600">{analyticsData.labStats.completedResults}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg Processing Time</span>
                    <span className="font-medium">{analyticsData.labStats.averageProcessingTime} days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Top Lab Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.labStats.topTests.map((test) => (
                    <div key={test.test} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium">{test.test}</span>
                          <span className="text-gray-600">{test.count} ({test.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${test.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Prescriptions Tab */}
        <TabsContent value="prescriptions">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="h-5 w-5 mr-2" />
                  Prescription Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Prescriptions</span>
                    <span className="font-medium">{analyticsData.prescriptionStats.totalPrescriptions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg per Patient</span>
                    <span className="font-medium">{analyticsData.prescriptionStats.averagePerPatient}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Drug Interactions</span>
                    <span className="font-medium text-red-600">{analyticsData.prescriptionStats.drugInteractions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Allergies</span>
                    <span className="font-medium text-yellow-600">{analyticsData.prescriptionStats.allergies}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Top Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.prescriptionStats.topMedications.map((medication) => (
                    <div key={medication.medication} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium">{medication.medication}</span>
                          <span className="text-gray-600">{medication.count} ({medication.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${medication.percentage * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
