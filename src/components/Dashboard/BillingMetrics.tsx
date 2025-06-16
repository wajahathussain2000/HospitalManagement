
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, FileText, Clock } from 'lucide-react';

const billingData = [
  {
    period: 'Today',
    claims: 12,
    amount: '$8,450',
    status: 'submitted',
    processed: 8,
    pending: 4
  },
  {
    period: 'This Week',
    claims: 67,
    amount: '$42,300',
    status: 'processing',
    processed: 52,
    pending: 15
  },
  {
    period: 'This Month',
    claims: 234,
    amount: '$156,780',
    status: 'completed',
    processed: 198,
    pending: 36
  }
];

const recentClaims = [
  {
    id: 'CLM-2024-001',
    patient: 'John Smith',
    amount: '$150.00',
    status: 'approved',
    date: '2024-01-15',
    payer: 'Aetna'
  },
  {
    id: 'CLM-2024-002',
    patient: 'Sarah Johnson',
    amount: '$320.00',
    status: 'pending',
    date: '2024-01-15',
    payer: 'BCBS'
  },
  {
    id: 'CLM-2024-003',
    patient: 'Mike Wilson',
    amount: '$85.00',
    status: 'denied',
    date: '2024-01-14',
    payer: 'Medicare'
  }
];

export function BillingMetrics() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'denied': return 'bg-red-100 text-red-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Billing Overview</CardTitle>
          <Button variant="outline" size="sm">
            View All Claims
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Billing Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {billingData.map((period, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{period.period}</h4>
                  <Badge className={getStatusColor(period.status)}>
                    {period.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Claims</span>
                    <span className="font-medium">{period.claims}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-medium text-green-600">{period.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Processed</span>
                    <span className="font-medium">{period.processed}/{period.claims}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Claims */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Recent Claims</h4>
            <div className="space-y-3">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{claim.id}</p>
                      <p className="text-sm text-gray-600">{claim.patient} • {claim.payer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{claim.amount}</p>
                    <Badge className={getStatusColor(claim.status)}>
                      {claim.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
