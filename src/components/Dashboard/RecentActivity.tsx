
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, FileText, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'claim',
    title: 'Claim #12345 - Processed',
    description: 'John Doe - Routine Checkup',
    time: '2 minutes ago',
    status: 'success',
    amount: '$150.00'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Received',
    description: 'Insurance payment - Aetna',
    time: '15 minutes ago',
    status: 'success',
    amount: '$1,250.00'
  },
  {
    id: 3,
    type: 'alert',
    title: 'Prior Authorization Required',
    description: 'MRI for Sarah Johnson',
    time: '1 hour ago',
    status: 'warning',
    amount: null
  },
  {
    id: 4,
    type: 'claim',
    title: 'Claim #12344 - Denied',
    description: 'Michael Brown - Physical Therapy',
    time: '2 hours ago',
    status: 'error',
    amount: '$85.00'
  }
];

export function RecentActivity() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'claim': return FileText;
      case 'payment': return DollarSign;
      case 'alert': return AlertCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = getIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <IconComponent className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    {activity.amount && (
                      <span className="text-sm font-semibold text-gray-900">
                        {activity.amount}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-400">{activity.time}</p>
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
