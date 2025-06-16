
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { ClaimData } from './ClaimsTable';

interface DenialAnalyticsProps {
  claims: ClaimData[];
}

const mockDenialByReasonData = [
  { reason: 'Prior Auth', count: 12, percentage: 35 },
  { reason: 'Documentation', count: 8, percentage: 24 },
  { reason: 'Coding Error', count: 5, percentage: 15 },
  { reason: 'Eligibility', count: 4, percentage: 12 },
  { reason: 'Medical Necessity', count: 3, percentage: 9 },
  { reason: 'Other', count: 2, percentage: 5 }
];

const mockDenialTrendData = [
  { month: 'Jan', denials: 15, appeals: 12, approved: 9 },
  { month: 'Feb', denials: 12, appeals: 10, approved: 7 },
  { month: 'Mar', denials: 18, appeals: 15, approved: 11 },
  { month: 'Apr', denials: 8, appeals: 7, approved: 5 },
  { month: 'May', denials: 10, appeals: 8, approved: 6 },
  { month: 'Jun', denials: 6, appeals: 5, approved: 4 }
];

const mockPayerDenialData = [
  { payer: 'Aetna', denials: 8, total: 45, rate: 17.8 },
  { payer: 'BCBS', denials: 12, total: 52, rate: 23.1 },
  { payer: 'Medicare', denials: 3, total: 28, rate: 10.7 },
  { payer: 'UnitedHealth', denials: 7, total: 38, rate: 18.4 },
  { payer: 'Cigna', denials: 4, total: 31, rate: 12.9 }
];

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];

export function DenialAnalytics({ claims }: DenialAnalyticsProps) {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Denials</p>
              <p className="text-2xl font-bold text-red-600">34</p>
              <p className="text-xs text-gray-500">This month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Appeal Success Rate</p>
              <p className="text-2xl font-bold text-green-600">73%</p>
              <p className="text-xs text-gray-500">Last 6 months</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg Days to Appeal</p>
              <p className="text-2xl font-bold text-blue-600">8.5</p>
              <p className="text-xs text-gray-500">Target: < 10 days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Revenue Impact</p>
              <p className="text-2xl font-bold text-orange-600">$45.2K</p>
              <p className="text-xs text-gray-500">Pending appeals</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Denial Reasons Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Denials by Reason</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockDenialByReasonData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ reason, percentage }) => `${reason} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {mockDenialByReasonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Denial Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Denial Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockDenialTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="denials" stroke="#ef4444" name="Denials" />
                <Line type="monotone" dataKey="appeals" stroke="#f97316" name="Appeals" />
                <Line type="monotone" dataKey="approved" stroke="#22c55e" name="Approved" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Payer Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Denial Rates by Payer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={mockPayerDenialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="payer" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rate" fill="#ef4444" name="Denial Rate %" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              {mockPayerDenialData.map((payer, index) => (
                <div key={index} className="text-center p-3 border rounded-lg">
                  <h4 className="font-medium">{payer.payer}</h4>
                  <p className="text-sm text-gray-600">{payer.denials}/{payer.total} claims</p>
                  <Badge 
                    variant={payer.rate > 20 ? "destructive" : payer.rate > 15 ? "default" : "secondary"}
                    className="mt-1"
                  >
                    {payer.rate}%
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
