
import { MainLayout } from '@/components/Layout/MainLayout';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { RecentActivity } from '@/components/Dashboard/RecentActivity';
import { PatientOverview } from '@/components/Dashboard/PatientOverview';
import { BillingMetrics } from '@/components/Dashboard/BillingMetrics';
import { AIInsights } from '@/components/Dashboard/AIInsights';
import { 
  Users, 
  DollarSign, 
  FileText, 
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your practice today.</p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <StatsCard
            title="Active Patients"
            value="1,247"
            change="+12%"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Revenue (MTD)"
            value="$124,580"
            change="+8.2%"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Claims Submitted"
            value="89"
            change="+15"
            changeType="positive"
            icon={FileText}
          />
          <StatsCard
            title="Collection Rate"
            value="94.2%"
            change="+2.1%"
            changeType="positive"
            icon={TrendingUp}
          />
          <StatsCard
            title="Pending Claims"
            value="23"
            change="-5"
            changeType="positive"
            icon={CheckCircle}
          />
          <StatsCard
            title="Denials"
            value="7"
            change="+2"
            changeType="negative"
            icon={AlertTriangle}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BillingMetrics />
            <RecentActivity />
          </div>
          <div className="space-y-6">
            <AIInsights />
            <PatientOverview />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
