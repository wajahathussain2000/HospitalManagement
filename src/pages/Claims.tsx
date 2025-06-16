
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Plus, 
  Search, 
  Download, 
  RefreshCw,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const claims = [
  {
    id: 'CLM-2024-001',
    patient: 'John Smith',
    provider: 'Dr. Johnson',
    dateOfService: '2024-01-10',
    submissionDate: '2024-01-12',
    amount: '$320.00',
    status: 'approved',
    payer: 'Aetna',
    cptCodes: ['99213', '90834']
  },
  {
    id: 'CLM-2024-002',
    patient: 'Sarah Johnson',
    provider: 'Dr. Smith',
    dateOfService: '2024-01-11',
    submissionDate: '2024-01-13',
    amount: '$150.00',
    status: 'pending',
    payer: 'BCBS',
    cptCodes: ['99212']
  },
  {
    id: 'CLM-2024-003',
    patient: 'Mike Wilson',
    provider: 'Dr. Brown',
    dateOfService: '2024-01-09',
    submissionDate: '2024-01-11',
    amount: '$85.00',
    status: 'denied',
    payer: 'Medicare',
    cptCodes: ['97110']
  },
  {
    id: 'CLM-2024-004',
    patient: 'Emily Davis',
    provider: 'Dr. Smith',
    dateOfService: '2024-01-12',
    submissionDate: '2024-01-14',
    amount: '$275.00',
    status: 'processing',
    payer: 'UnitedHealth',
    cptCodes: ['99214', '96116']
  }
];

const claimStats = [
  {
    title: 'Total Claims',
    value: '234',
    icon: FileText,
    color: 'blue'
  },
  {
    title: 'Approved',
    value: '198',
    icon: CheckCircle,
    color: 'green'
  },
  {
    title: 'Pending',
    value: '23',
    icon: Clock,
    color: 'yellow'
  },
  {
    title: 'Denied',
    value: '13',
    icon: XCircle,
    color: 'red'
  }
];

export default function Claims() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'denied': return 'bg-red-100 text-red-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Claims Management</h1>
            <p className="text-gray-600 mt-1">Track and manage insurance claims</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync Claims
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Claim
            </Button>
          </div>
        </div>

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

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Claims List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Claim ID</th>
                    <th className="text-left py-3 px-4">Patient</th>
                    <th className="text-left py-3 px-4">Provider</th>
                    <th className="text-left py-3 px-4">Date of Service</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Payer</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {claims.map((claim) => (
                    <tr key={claim.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{claim.id}</td>
                      <td className="py-3 px-4">{claim.patient}</td>
                      <td className="py-3 px-4">{claim.provider}</td>
                      <td className="py-3 px-4">{claim.dateOfService}</td>
                      <td className="py-3 px-4 font-medium text-green-600">{claim.amount}</td>
                      <td className="py-3 px-4">{claim.payer}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(claim.status)}>
                          {claim.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
