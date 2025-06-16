
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  insurance: string;
  lastVisit: string;
}

interface PatientSearchSystemProps {
  patients: Patient[];
  onPatientSelect: (patient: Patient) => void;
}

interface SearchFilters {
  searchTerm: string;
  status: string;
  insurance: string;
  ageRange: string;
}

export function PatientSearchSystem({ patients, onPatientSelect }: PatientSearchSystemProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: '',
    status: 'all',
    insurance: 'all',
    ageRange: 'all',
  });

  const [showFilters, setShowFilters] = useState(false);

  const insuranceProviders = useMemo(() => {
    const providers = new Set(patients.map(p => p.insurance));
    return Array.from(providers);
  }, [patients]);

  const filteredPatients = useMemo(() => {
    return patients.filter(patient => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          patient.name.toLowerCase().includes(searchLower) ||
          patient.id.toLowerCase().includes(searchLower) ||
          patient.email.toLowerCase().includes(searchLower) ||
          patient.phone.includes(filters.searchTerm);
        
        if (!matchesSearch) return false;
      }

      // Status filter
      if (filters.status !== 'all' && patient.status !== filters.status) {
        return false;
      }

      // Insurance filter
      if (filters.insurance !== 'all' && patient.insurance !== filters.insurance) {
        return false;
      }

      // Age range filter
      if (filters.ageRange !== 'all') {
        switch (filters.ageRange) {
          case 'under-18':
            if (patient.age >= 18) return false;
            break;
          case '18-35':
            if (patient.age < 18 || patient.age > 35) return false;
            break;
          case '36-65':
            if (patient.age < 36 || patient.age > 65) return false;
            break;
          case 'over-65':
            if (patient.age <= 65) return false;
            break;
        }
      }

      return true;
    });
  }, [patients, filters]);

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      status: 'all',
      insurance: 'all',
      ageRange: 'all',
    });
  };

  const hasActiveFilters = filters.status !== 'all' || filters.insurance !== 'all' || filters.ageRange !== 'all';

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search patients by name, ID, email, or phone..."
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className={hasActiveFilters ? 'bg-blue-50 border-blue-200' : ''}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {[filters.status, filters.insurance, filters.ageRange].filter(f => f !== 'all').length}
            </Badge>
          )}
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters}>
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Insurance</label>
            <Select value={filters.insurance} onValueChange={(value) => setFilters(prev => ({ ...prev, insurance: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Insurance</SelectItem>
                {insuranceProviders.map(provider => (
                  <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
            <Select value={filters.ageRange} onValueChange={(value) => setFilters(prev => ({ ...prev, ageRange: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="under-18">Under 18</SelectItem>
                <SelectItem value="18-35">18-35</SelectItem>
                <SelectItem value="36-65">36-65</SelectItem>
                <SelectItem value="over-65">Over 65</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Results Summary */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Showing {filteredPatients.length} of {patients.length} patients</span>
      </div>

      {/* Patient List */}
      <div className="space-y-2">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => onPatientSelect(patient)}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-600">ID: {patient.id} • Age: {patient.age}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">{patient.insurance}</p>
                <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
              </div>
              <Badge variant={patient.status === 'active' ? 'default' : 'secondary'}>
                {patient.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No patients found matching your search criteria.</p>
          {hasActiveFilters && (
            <Button variant="link" onClick={clearFilters} className="mt-2">
              Clear filters to see all patients
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
