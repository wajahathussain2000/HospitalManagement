import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  Activity,
  AlertTriangle,
  Brain,
  Target,
  Zap,
  Shield,
  Clock,
  Heart,
  Stethoscope,
  Bed,
  Pill,
  TestTube,
  Camera
} from 'lucide-react';

interface KPIMetric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: any;
  color: string;
}

interface PatientFlowData {
  hour: number;
  incoming: number;
  outgoing: number;
  waiting: number;
}

interface RevenueData {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

interface DiseaseTrend {
  disease: string;
  cases: number;
  trend: 'up' | 'down' | 'stable';
  severity: 'low' | 'medium' | 'high';
}

interface RiskAlert {
  id: string;
  patientName: string;
  riskType: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendations: string[];
  timestamp: Date;
}

interface PredictiveInsight {
  type: string;
  prediction: string;
  confidence: number;
  timeframe: string;
  impact: 'low' | 'medium' | 'high';
}

export default function AnalyticsAI() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const kpiMetrics: KPIMetric[] = [
    {
      title: 'Total Patients',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Appointment Completion Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'Revenue Growth',
      value: '₹245,680',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-600'
    },
    {
      title: 'Bed Occupancy',
      value: '78.5%',
      change: '-3.2%',
      trend: 'down',
      icon: Bed,
      color: 'text-orange-600'
    },
    {
      title: 'Patient Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      title: 'Emergency Response Time',
      value: '4.2 min',
      change: '-0.8 min',
      trend: 'up',
      icon: Zap,
      color: 'text-red-600'
    }
  ];

  const patientFlowData: PatientFlowData[] = [
    { hour: 8, incoming: 45, outgoing: 12, waiting: 33 },
    { hour: 9, incoming: 52, outgoing: 18, waiting: 67 },
    { hour: 10, incoming: 38, outgoing: 25, waiting: 80 },
    { hour: 11, incoming: 41, outgoing: 30, waiting: 91 },
    { hour: 12, incoming: 28, outgoing: 35, waiting: 84 },
    { hour: 13, incoming: 22, outgoing: 28, waiting: 78 },
    { hour: 14, incoming: 35, outgoing: 20, waiting: 93 },
    { hour: 15, incoming: 48, outgoing: 32, waiting: 109 },
    { hour: 16, incoming: 42, outgoing: 38, waiting: 113 },
    { hour: 17, incoming: 31, outgoing: 45, waiting: 99 },
    { hour: 18, incoming: 25, outgoing: 40, waiting: 84 },
    { hour: 19, incoming: 18, outgoing: 35, waiting: 67 }
  ];

  const revenueData: RevenueData[] = [
    { month: 'Jan', revenue: 180000, expenses: 120000, profit: 60000 },
    { month: 'Feb', revenue: 195000, expenses: 125000, profit: 70000 },
    { month: 'Mar', revenue: 210000, expenses: 130000, profit: 80000 },
    { month: 'Apr', revenue: 225000, expenses: 135000, profit: 90000 },
    { month: 'May', revenue: 240000, expenses: 140000, profit: 100000 },
    { month: 'Jun', revenue: 245680, expenses: 142000, profit: 103680 }
  ];

  const diseaseTrends: DiseaseTrend[] = [
    { disease: 'Hypertension', cases: 156, trend: 'up', severity: 'medium' },
    { disease: 'Diabetes', cases: 134, trend: 'up', severity: 'high' },
    { disease: 'Respiratory Infections', cases: 98, trend: 'down', severity: 'low' },
    { disease: 'Cardiovascular Disease', cases: 87, trend: 'stable', severity: 'high' },
    { disease: 'Gastrointestinal Issues', cases: 76, trend: 'up', severity: 'medium' }
  ];

  const riskAlerts: RiskAlert[] = [
    {
      id: '1',
      patientName: 'John Doe',
      riskType: 'Medication Interaction',
      riskLevel: 'high',
      description: 'Potential drug interaction between prescribed medications',
      recommendations: ['Review medication list', 'Consult with pharmacist', 'Monitor patient closely'],
      timestamp: new Date('2024-01-15T10:30:00')
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      riskType: 'Fall Risk',
      riskLevel: 'medium',
      description: 'Patient shows signs of increased fall risk',
      recommendations: ['Implement fall prevention measures', 'Regular mobility assessment', 'Safety equipment check'],
      timestamp: new Date('2024-01-15T09:15:00')
    },
    {
      id: '3',
      patientName: 'Mike Johnson',
      riskType: 'Readmission Risk',
      riskLevel: 'critical',
      description: 'High probability of readmission within 30 days',
      recommendations: ['Enhanced discharge planning', 'Follow-up appointment scheduling', 'Patient education'],
      timestamp: new Date('2024-01-15T08:45:00')
    }
  ];

  const predictiveInsights: PredictiveInsight[] = [
    {
      type: 'Patient Inflow',
      prediction: 'Expected 15% increase in patient volume next week',
      confidence: 87,
      timeframe: 'Next 7 days',
      impact: 'high'
    },
    {
      type: 'Bed Occupancy',
      prediction: 'ICU beds will reach 95% capacity by Friday',
      confidence: 92,
      timeframe: 'Next 3 days',
      impact: 'critical'
    },
    {
      type: 'Revenue Forecast',
      prediction: 'Monthly revenue expected to reach ₹280,000',
      confidence: 78,
      timeframe: 'Next 30 days',
      impact: 'medium'
    },
    {
      type: 'Staff Requirement',
      prediction: 'Need 2 additional nurses for weekend shifts',
      confidence: 85,
      timeframe: 'Next 2 weeks',
      impact: 'medium'
    }
  ];

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
      case 'critical':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & AI Insights</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics and AI-powered predictions</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="emergency">Emergency</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {kpiMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {getTrendIcon(metric.trend)}
                    <span className={`text-sm ${
                      metric.trend === 'up' ? 'text-green-600' :
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          <TabsTrigger value="risks">Risk Alerts</TabsTrigger>
          <TabsTrigger value="trends">Disease Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Patient Flow Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Patient Flow (Today)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patientFlowData.slice(8, 18).map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 text-sm text-gray-600">{data.hour}:00</div>
                        <div className="flex-1">
                          <div className="flex space-x-2">
                            <div className="flex-1 bg-blue-100 rounded h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded" 
                                style={{ width: `${(data.incoming / 60) * 100}%` }}
                              />
                            </div>
                            <div className="flex-1 bg-green-100 rounded h-2">
                              <div 
                                className="bg-green-500 h-2 rounded" 
                                style={{ width: `${(data.outgoing / 60) * 100}%` }}
                              />
                            </div>
                            <div className="flex-1 bg-yellow-100 rounded h-2">
                              <div 
                                className="bg-yellow-500 h-2 rounded" 
                                style={{ width: `${(data.waiting / 60) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {data.incoming}→{data.outgoing} ({data.waiting} waiting)
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Incoming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Outgoing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span>Waiting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Revenue Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{data.month}</span>
                        <span className="text-sm text-gray-600">₹{data.revenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(data.revenue / 250000) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Profit: ₹{data.profit.toLocaleString()}</span>
                        <span>Expenses: ₹{data.expenses.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {predictiveInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      {insight.type}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{insight.prediction}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Timeframe: {insight.timeframe}</span>
                    <span className={`font-medium ${getImpactColor(insight.impact)}`}>
                      {insight.impact.toUpperCase()} IMPACT
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Patient Risk Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium">{alert.patientName}</h4>
                          <Badge className={getRiskLevelColor(alert.riskLevel)}>
                            {alert.riskLevel.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{alert.riskType}</Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{alert.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-600">Recommendations:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {alert.recommendations.map((rec, index) => (
                              <li key={index}>{rec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {alert.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Disease Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {diseaseTrends.map((disease, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{disease.disease}</h4>
                        <p className="text-sm text-gray-600">{disease.cases} cases</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={
                        disease.severity === 'high' ? 'bg-red-100 text-red-800' :
                        disease.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }>
                        {disease.severity}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {disease.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-red-600" />
                        ) : disease.trend === 'down' ? (
                          <TrendingDown className="h-4 w-4 text-green-600" />
                        ) : (
                          <Activity className="h-4 w-4 text-gray-600" />
                        )}
                        <span className="text-sm text-gray-600">{disease.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
