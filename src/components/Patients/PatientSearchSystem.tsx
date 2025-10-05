import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  X, 
  Eye, 
  MessageSquare, 
  Stethoscope, 
  CreditCard, 
  AlertCircle, 
  Clock, 
  MapPin, 
  Shield,
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Grid3X3,
  List,
  SortAsc,
  SortDesc
} from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  insurance: string;
  lastVisit: string;
  address: string;
  dateOfBirth: string;
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  medicalInfo: {
    allergies: string[];
    medications: string[];
    conditions: string[];
  };
  appointments: Array<{
    date: string;
    time: string;
    type: string;
    status: string;
    provider: string;
  }>;
  documents: Array<{
    name: string;
    type: string;
    date: string;
  }>;
  nextAppointment: string | null;
  totalVisits: number;
  outstandingBalance: number;
  riskLevel: 'low' | 'medium' | 'high';
  preferredProvider: string;
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
  riskLevel: string;
  provider: string;
  hasOutstandingBalance: string;
  hasUpcomingAppointment: string;
  sortBy: string;
  sortOrder: string;
}

export function PatientSearchSystem({ patients, onPatientSelect }: PatientSearchSystemProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: '',
    status: 'all',
    insurance: 'all',
    ageRange: 'all',
    riskLevel: 'all',
    provider: 'all',
    hasOutstandingBalance: 'all',
    hasUpcomingAppointment: 'all',
    sortBy: 'name',
    sortOrder: 'asc',
  });

  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list'); // Default to list for better performance
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const insuranceProviders = useMemo(() => {
    const providers = new Set(patients.map(p => p.insurance));
    return Array.from(providers);
  }, [patients]);

  const providers = useMemo(() => {
    const providerSet = new Set(patients.map(p => p.preferredProvider));
    return Array.from(providerSet);
  }, [patients]);

  const filteredPatients = useMemo(() => {
    let filtered = patients.filter(patient => {
      const matchesSearch = !filters.searchTerm || 
        patient.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        patient.id.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        patient.phone.includes(filters.searchTerm) ||
        patient.address.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesStatus = filters.status === 'all' || patient.status === filters.status;
      const matchesInsurance = filters.insurance === 'all' || patient.insurance === filters.insurance;
      const matchesRiskLevel = filters.riskLevel === 'all' || patient.riskLevel === filters.riskLevel;
      const matchesProvider = filters.provider === 'all' || patient.preferredProvider === filters.provider;
      
      const matchesAgeRange = (() => {
        if (filters.ageRange === 'all') return true;
        if (filters.ageRange === '0-18') return patient.age >= 0 && patient.age <= 18;
        if (filters.ageRange === '19-35') return patient.age >= 19 && patient.age <= 35;
        if (filters.ageRange === '36-55') return patient.age >= 36 && patient.age <= 55;
        if (filters.ageRange === '56+') return patient.age >= 56;
        return true;
      })();

      const matchesOutstandingBalance = (() => {
        if (filters.hasOutstandingBalance === 'all') return true;
        if (filters.hasOutstandingBalance === 'yes') return patient.outstandingBalance > 0;
        if (filters.hasOutstandingBalance === 'no') return patient.outstandingBalance === 0;
        return true;
      })();

      const matchesUpcomingAppointment = (() => {
        if (filters.hasUpcomingAppointment === 'all') return true;
        if (filters.hasUpcomingAppointment === 'yes') return patient.nextAppointment !== null;
        if (filters.hasUpcomingAppointment === 'no') return patient.nextAppointment === null;
        return true;
      })();

      return matchesSearch && matchesStatus && matchesInsurance && matchesAgeRange && 
             matchesRiskLevel && matchesProvider && matchesOutstandingBalance && matchesUpcomingAppointment;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'age':
          comparison = a.age - b.age;
            break;
        case 'lastVisit':
          comparison = new Date(a.lastVisit).getTime() - new Date(b.lastVisit).getTime();
            break;
        case 'totalVisits':
          comparison = a.totalVisits - b.totalVisits;
            break;
        case 'outstandingBalance':
          comparison = a.outstandingBalance - b.outstandingBalance;
            break;
        default:
          comparison = a.name.localeCompare(b.name);
      }
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [patients, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPatients = filteredPatients.slice(startIndex, endIndex);

  // Reset page when filters change
  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      status: 'all',
      insurance: 'all',
      ageRange: 'all',
      riskLevel: 'all',
      provider: 'all',
      hasOutstandingBalance: 'all',
      hasUpcomingAppointment: 'all',
      sortBy: 'name',
      sortOrder: 'asc',
    });
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== 'all' && value !== 'name' && value !== 'asc');

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderPatientCard = (patient: Patient) => (
    <Card 
      key={patient.id} 
      className="hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-l-blue-500"
      onClick={() => onPatientSelect(patient)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                {patient.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                <Badge className={getStatusBadgeColor(patient.status)}>
                  {patient.status}
                </Badge>
                <Badge className={getRiskBadgeColor(patient.riskLevel)}>
                  {patient.riskLevel} risk
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-1">
                  <p className="flex items-center"><span className="font-medium mr-2">ID:</span> {patient.id}</p>
                  <p className="flex items-center"><span className="font-medium mr-2">Age:</span> {patient.age}</p>
                  <p className="flex items-center"><span className="font-medium mr-2">DOB:</span> {patient.dateOfBirth}</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center"><Phone className="h-3 w-3 mr-2" /> {patient.phone}</p>
                  <p className="flex items-center"><Mail className="h-3 w-3 mr-2" /> {patient.email}</p>
                  <p className="flex items-center"><MapPin className="h-3 w-3 mr-2" /> {patient.address}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Insurance</span>
                    <Shield className="h-4 w-4 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-600">{patient.insurance}</p>
                  {patient.outstandingBalance > 0 && (
                    <p className="text-xs text-red-600 mt-1">
                      Outstanding: ${patient.outstandingBalance.toFixed(2)}
                    </p>
                  )}
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Medical Info</span>
                    <Stethoscope className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="text-xs text-gray-600">
                    <p>Allergies: {patient.medicalInfo.allergies.length}</p>
                    <p>Conditions: {patient.medicalInfo.conditions.length}</p>
                    <p>Visits: {patient.totalVisits}</p>
                  </div>
                </div>
              </div>

              {patient.nextAppointment && (
                <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">Next Appointment</span>
                    </div>
                    <span className="text-sm text-blue-600">{patient.nextAppointment}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); }}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); }}>
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); }}>
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPatientListItem = (patient: Patient) => (
    <div
      key={patient.id}
      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors bg-white"
      onClick={() => onPatientSelect(patient)}
    >
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-blue-100 text-blue-600">
            {patient.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-gray-900">{patient.name}</h3>
            <Badge className={getStatusBadgeColor(patient.status)} variant="outline">
              {patient.status}
            </Badge>
            <Badge className={getRiskBadgeColor(patient.riskLevel)} variant="outline">
              {patient.riskLevel}
            </Badge>
          </div>
          <p className="text-sm text-gray-600">
            ID: {patient.id} • Age: {patient.age} • {patient.insurance} • 
            {patient.outstandingBalance > 0 && (
              <span className="text-red-600 ml-2">Outstanding: ${patient.outstandingBalance.toFixed(2)}</span>
            )}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right text-sm">
          <p className="text-gray-600">Last visit: {patient.lastVisit}</p>
          <p className="text-gray-500">Total visits: {patient.totalVisits}</p>
          {patient.nextAppointment && (
            <p className="text-blue-600">Next: {patient.nextAppointment}</p>
          )}
        </div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
            <MessageSquare className="h-4 w-4" />
          </Button>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Enhanced Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
              placeholder="Search patients by name, ID, email, phone, or address..."
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
              className="pl-10 h-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
            className={hasActiveFilters ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                {Object.values(filters).filter(f => f !== 'all' && f !== 'name' && f !== 'asc').length}
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
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
            <Select value={filters.insurance} onValueChange={(value) => handleFilterChange('insurance', value)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
            <Select value={filters.ageRange} onValueChange={(value) => handleFilterChange('ageRange', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="0-18">0-18</SelectItem>
                <SelectItem value="19-35">19-35</SelectItem>
                <SelectItem value="36-55">36-55</SelectItem>
                <SelectItem value="56+">56+</SelectItem>
              </SelectContent>
            </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Risk Level</label>
              <Select value={filters.riskLevel} onValueChange={(value) => handleFilterChange('riskLevel', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Provider</label>
              <Select value={filters.provider} onValueChange={(value) => handleFilterChange('provider', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Providers</SelectItem>
                  {providers.map(provider => (
                    <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Outstanding Balance</label>
              <Select value={filters.hasOutstandingBalance} onValueChange={(value) => handleFilterChange('hasOutstandingBalance', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="yes">Has Balance</SelectItem>
                  <SelectItem value="no">No Balance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upcoming Appointment</label>
              <Select value={filters.hasUpcomingAppointment} onValueChange={(value) => handleFilterChange('hasUpcomingAppointment', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="yes">Has Appointment</SelectItem>
                  <SelectItem value="no">No Appointment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="age">Age</SelectItem>
                  <SelectItem value="lastVisit">Last Visit</SelectItem>
                  <SelectItem value="totalVisits">Total Visits</SelectItem>
                  <SelectItem value="outstandingBalance">Outstanding Balance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      </div>

      {/* Results Summary and View Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredPatients.length)}</span> of{' '}
            <span className="font-medium">{filteredPatients.length}</span> patients
            {filteredPatients.length !== patients.length && (
              <span className="text-gray-500"> (filtered from {patients.length} total)</span>
            )}
          </span>
          {hasActiveFilters && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Activity className="h-3 w-3 mr-1" />
              Filtered
            </Badge>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Select value={itemsPerPage.toString()} onValueChange={(value) => { setItemsPerPage(parseInt(value)); setCurrentPage(1); }}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          
          <Button
            variant={filters.sortOrder === 'asc' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilters(prev => ({ ...prev, sortOrder: 'asc' }))}
          >
            <SortAsc className="h-4 w-4" />
          </Button>
          <Button
            variant={filters.sortOrder === 'desc' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilters(prev => ({ ...prev, sortOrder: 'desc' }))}
          >
            <SortDesc className="h-4 w-4" />
          </Button>
          <div className="h-6 w-px bg-gray-300 mx-2" />
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
          </div>
      </div>

      {/* Performance Warning for Grid View */}
      {viewMode === 'grid' && filteredPatients.length > 100 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="text-sm text-yellow-800">
              Grid view may be slow with large datasets. Consider using list view for better performance with {filteredPatients.length}+ patients.
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-auto"
              onClick={() => setViewMode('list')}
            >
              Switch to List View
            </Button>
                </div>
              </div>
      )}

      {/* Patient Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paginatedPatients.map(renderPatientCard)}
        </div>
      ) : (
        <div className="space-y-3">
          {paginatedPatients.map(renderPatientListItem)}
            </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
              </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                if (pageNumber > totalPages) return null;
                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNumber)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
      </div>
      )}

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
          <p className="text-gray-600 mb-4">
            {hasActiveFilters 
              ? "No patients match your current search criteria." 
              : "No patients are currently registered in the system."}
          </p>
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
}