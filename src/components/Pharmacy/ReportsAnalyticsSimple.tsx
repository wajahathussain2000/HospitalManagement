import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BarChart3,
  Search,
  Plus,
  Eye,
  Download,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  Zap
} from 'lucide-react';

export default function ReportsAnalyticsSimple() {
  const [activeTab, setActiveTab] = useState('sales');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('month');

  // Mock data
  const reportsData = {
    salesReports: [
      {
        id: 'SALES001',
        period: 'January 2024',
        totalSales: 125000,
        totalTransactions: 450,
        averageOrderValue: 278,
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
        status: 'Completed'
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
        status: 'Recommended'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Current': return 'bg-blue-100 text-blue-800';
      case 'Recommended': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports, Analytics & AI Insights</h1>
          <p className="text-gray-600 mt-1">Comprehensive reporting with AI-powered forecasting and performance analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline">
            <Zap className="h-4 w-4 mr-2" />
            AI Forecast
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export All
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
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sales" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="stock">Stock Valuation</TabsTrigger>
          <TabsTrigger value="profit">Profit & Loss</TabsTrigger>
          <TabsTrigger value="ai">AI Insights</TabsTrigger>
        </TabsList>

        {/* Sales Reports Tab */}
        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Sales Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportsData.salesReports.map((report) => (
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
                        <div className="text-sm text-gray-600">
                          Growth Rate: {report.growthRate}%
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stock Valuation Tab */}
        <TabsContent value="stock">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Stock Valuation Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                        <div className="text-sm text-gray-600">
                          Total Value: {valuation.totalValue.toLocaleString()} • Items: {valuation.totalItems} • Avg Value: {valuation.averageValue}
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profit & Loss Tab */}
        <TabsContent value="profit">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Profit & Loss Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                        <div className="text-sm text-gray-600">
                          Operating Expenses: {pl.operatingExpenses.toLocaleString()} • Net Profit: {pl.netProfit.toLocaleString()} • Margin: {pl.profitMargin}%
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Insights Tab */}
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                AI Insights & Forecasting
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                        <div className="text-sm text-gray-600">
                          Current Stock: {forecast.currentStock} • Predicted Runout: {forecast.predictedRunout} • Suggested Order: {forecast.suggestedOrder}
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
