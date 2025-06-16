
import { useState, useMemo } from 'react';
import { ClaimData } from '@/components/Claims/ClaimsTable';
import { ClaimFilters } from '@/components/Claims/ClaimsFilter';

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

export function useClaimsData() {
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

  const handleSaveClaim = (updatedClaim: ClaimData) => {
    setClaims(prev => prev.map(claim => 
      claim.id === updatedClaim.id ? updatedClaim : claim
    ));
  };

  return {
    claims,
    filteredClaims,
    filters,
    selectedClaims,
    setFilters,
    handleClearFilters,
    handleSelectClaim,
    handleSelectAll,
    handleSaveClaim
  };
}
