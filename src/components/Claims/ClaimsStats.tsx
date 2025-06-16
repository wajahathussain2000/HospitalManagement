
import { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';

interface ClaimsStatsProps {
  claims: ClaimData[];
}

export function ClaimsStats({ claims }: ClaimsStatsProps) {
  const claimStats = useMemo(() => {
    const total = claims.length;
    const approved = claims.filter(c => c.status === 'approved').length;
    const pending = claims.filter(c => c.status === 'pending').length;
    const denied = claims.filter(c => c.status === 'denied').length;
    const processing = claims.filter(c => c.status === 'processing').length;
    const resubmitted = claims.filter(c => c.status === 'resubmitted').length;

    return [
      {
        title: 'Total Claims',
        value: total.toString(),
        icon: FileText,
        color: 'blue'
      },
      {
        title: 'Approved',
        value: approved.toString(),
        icon: CheckCircle,
        color: 'green'
      },
      {
        title: 'Pending',
        value: (pending + processing + resubmitted).toString(),
        icon: Clock,
        color: 'yellow'
      },
      {
        title: 'Denied',
        value: denied.toString(),
        icon: XCircle,
        color: 'red'
      }
    ];
  }, [claims]);

  const getStatColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      case 'red': return 'text-red-600 bg-red-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {claimStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${getStatColor(stat.color)}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
