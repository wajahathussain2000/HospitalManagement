
import { useState, useMemo } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Plus, 
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  Settings
} from 'lucide-react';
import { ClaimsFilter, ClaimFilters } from '@/components/Claims/ClaimsFilter';
import { ClaimsTable, ClaimData } from '@/components/Claims/ClaimsTable';
import { ClaimDetailModal } from '@/components/Claims/ClaimDetailModal';
import { ClaimForm } from '@/components/Billing/ClaimForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Enhanced mock data with more realistic claims
const initialClaims: ClaimData[] = [
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
  },
  {
    id: 'CLM-2024-005',
    patient: 'Robert Brown',
    provider: 'Dr. Johnson',
    dateOfService: '2024-01-15',
    submissionDate: '2024-01-16',
    amount: '$450.00',
    status: 'approved',
    payer: 'Cigna',
    cptCodes: ['99215', '90837']
  },
  {
    id: 'CLM-2024-006',
    patient: 'Lisa Martinez',
    provider: 'Dr. Wilson',
    dateOfService: '2024-01-13',
    submissionDate: '2024-01-15',
    amount: '$125.00',
    status: 'resubmitted',
    payer: 'Aetna',
    cptCodes: ['99213']
  }
];

export default function Claims() {
  const [claims, setClaims] = useState<ClaimData[]>(initialClaims);
  const [filters, setFilters] = useState<ClaimFilters>({
    status: '',
    payer: '',
    provider: '',
    patientSearch: '',
    cptCode: '',
    serviceStartDate: '',
    serviceEndDate: '',
    submissionStartDate: '',
    submissionEndDate: '',
    amountMin: '',
    amountMax: ''
  });
  const [selectedClaims, setSelectedClaims] = useState<string[]>([]);
  const [selectedClaim, setSelectedClaim] = useState<ClaimData | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isNewClaimModalOpen, setIsNewClaimModalOpen] = useState(false);

  // Filter claims based on active filters
  const filteredClaims = useMemo(() => {
    return claims.filter(claim => {
      // Status filter
      if (filters.status && claim.status !== filters.status) return false;
      
      // Payer filter
      if (filters.payer && claim.payer !== filters.payer) return false;
      
      // Provider filter
      if (filters.provider && claim.provider !== filters.provider) return false;
      
      // Patient search
      if (filters.patientSearch && !claim.patient.toLowerCase().includes(filters.patientSearch.toLowerCase()) && !claim.id.toLowerCase().includes(filters.patientSearch.toLowerCase())) return false;
      
      // CPT code filter
      if (filters.cptCode && !claim.cptCodes.some(code => code.includes(filters.cptCode))) return false;
      
      // Service date range
      if (filters.serviceStartDate && claim.dateOfService < filters.serviceStartDate) return false;
      if (filters.serviceEndDate && claim.dateOfService > filters.serviceEndDate) return false;
      
      // Amount range
      const amount = parseFloat(claim.amount.replace('$', '').replace(',', ''));
      if (filters.amountMin && amount < parseFloat(filters.amountMin)) return false;
      if (filters.amountMax && amount > parseFloat(filters.amountMax)) return false;
      
      return true;
    });
  }, [claims, filters]);

  // Calculate statistics
  const claimStats = useMemo(() => {
    const total = filteredClaims.length;
    const approved = filteredClaims.filter(c => c.status === 'approved').length;
    const pending = filteredClaims.filter(c => c.status === 'pending').length;
    const denied = filteredClaims.filter(c => c.status === 'denied').length;
    const processing = filteredClaims.filter(c => c.status === 'processing').length;
    const resubmitted = filteredClaims.filter(c => c.status === 'resubmitted').length;

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
  }, [filteredClaims]);

  const getStatColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      case 'red': return 'text-red-600 bg-red-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleClearFilters = () => {
    setFilters({
      status: '',
      payer: '',
      provider: '',
      patientSearch: '',
      cptCode: '',
      serviceStartDate: '',
      serviceEndDate: '',
      submissionStartDate: '',
      submissionEndDate: '',
      amountMin: '',
      amountMax: ''
    });
  };

  const handleSelectClaim = (claimId: string) => {
    setSelectedClaims(prev => 
      prev.includes(claimId) 
        ? prev.filter(id => id !== claimId)
        : [...prev, claimId]
    );
  };

  const handleSelectAll = (selected: boolean) => {
    setSelectedClaims(selected ? filteredClaims.map(claim => claim.id) : []);
  };

  const handleViewClaim = (claim: ClaimData) => {
    setSelectedClaim(claim);
    setIsDetailModalOpen(true);
  };

  const handleEditClaim = (claim: ClaimData) => {
    setSelectedClaim(claim);
    setIsDetailModalOpen(true);
  };

  const handleSaveClaim = (updatedClaim: ClaimData) => {
    setClaims(prev => prev.map(claim => 
      claim.id === updatedClaim.id ? updatedClaim : claim
    ));
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Claims Management</h1>
            <p className="text-gray-600 mt-1">Track and manage insurance claims with advanced filtering</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync Claims
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button onClick={() => setIsNewClaimModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Claim
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
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

        {/* Advanced Filters */}
        <ClaimsFilter 
          filters={filters}
          onFiltersChange={setFilters}
          onClearFilters={handleClearFilters}
        />

        {/* Enhanced Claims Table */}
        <ClaimsTable
          claims={filteredClaims}
          selectedClaims={selectedClaims}
          onSelectClaim={handleSelectClaim}
          onSelectAll={handleSelectAll}
          onViewClaim={handleViewClaim}
          onEditClaim={handleEditClaim}
        />

        {/* Claim Detail Modal */}
        <ClaimDetailModal
          claim={selectedClaim}
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedClaim(null);
          }}
          onSave={handleSaveClaim}
        />

        {/* New Claim Modal */}
        <Dialog open={isNewClaimModalOpen} onOpenChange={setIsNewClaimModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Claim</DialogTitle>
            </DialogHeader>
            <ClaimForm />
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
}
