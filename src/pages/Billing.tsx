import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Plus,
  Download,
  Shield,
  FileCheck
} from 'lucide-react';

// Import new billing components
import { ClaimForm } from '@/components/Billing/ClaimForm';
import { PaymentEntry } from '@/components/Billing/PaymentEntry';
import { EligibilityVerification } from '@/components/Billing/EligibilityVerification';
import { PriorAuthForm } from '@/components/Billing/PriorAuthForm';

const billingMetrics = [
  {
    title: 'Monthly Revenue',
    value: '$124,580',
    change: '+8.2%',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Outstanding A/R',
    value: '$45,230',
    change: '-3.1%',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    title: 'Collection Rate',
    value: '94.2%',
    change: '+2.1%',
    icon: CheckCircle,
    color: 'green'
  },
  {
    title: 'Aged A/R >90 Days',
    value: '$12,450',
    change: '-15.3%',
    icon: AlertTriangle,
    color: 'red'
  }
];

const recentTransactions = [
  {
    id: 'TXN-001',
    patient: 'John Smith',
    amount: '$150.00',
    type: 'Insurance Payment',
    date: '2024-01-15',
    status: 'completed',
    payer: 'Aetna'
  },
  {
    id: 'TXN-002',
    patient: 'Sarah Johnson',
    amount: '$75.00',
    type: 'Patient Payment',
    date: '2024-01-15',
    status: 'completed',
    payer: 'Self-Pay'
  },
  {
    id: 'TXN-003',
    patient: 'Mike Wilson',
    amount: '$320.00',
    type: 'Insurance Payment',
    date: '2024-01-14',
    status: 'pending',
    payer: 'BCBS'
  }
];

const paymentMethods = [
  {
    method: 'Insurance Payments',
    percentage: 68,
    amount: '$84,714'
  },
  {
    method: 'Patient Payments',
    percentage: 25,
    amount: '$31,145'
  },
  {
    method: 'Other',
    percentage: 7,
    amount: '$8,721'
  }
];

export default function Billing() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMetricColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      case 'red': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Billing & Revenue</h1>
            <p className="text-gray-600 mt-1">Monitor financial performance and manage payments</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Quick Action
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="claims">Claims</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="prior-auth">Prior Auth</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {billingMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                          <p className={`text-sm ${metric.color === 'green' ? 'text-green-600' : metric.color === 'red' ? 'text-red-600' : 'text-blue-600'}`}>
                            {metric.change} from last month
                          </p>
                        </div>
                        <div className={`p-3 rounded-lg ${getMetricColor(metric.color)}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Payment Distribution and Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{method.method}</span>
                          <span className="text-sm text-gray-600">{method.amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${method.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">{method.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Recent Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-gray-900">{transaction.patient}</p>
                            <span className="font-medium text-green-600">{transaction.amount}</span>
                          </div>
                          <p className="text-sm text-gray-600">{transaction.type} • {transaction.payer}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="claims">
            <ClaimForm />
          </TabsContent>

          <TabsContent value="payments">
            <PaymentEntry />
          </TabsContent>

          <TabsContent value="eligibility">
            <EligibilityVerification />
          </TabsContent>

          <TabsContent value="prior-auth">
            <PriorAuthForm />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
