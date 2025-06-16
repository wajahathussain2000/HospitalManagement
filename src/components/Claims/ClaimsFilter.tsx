
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, CalendarDays, Filter, X, Save, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export interface ClaimFilters {
  status: string;
  payer: string;
  provider: string;
  patientSearch: string;
  cptCode: string;
  serviceStartDate: string;
  serviceEndDate: string;
  submissionStartDate: string;
  submissionEndDate: string;
  amountMin: string;
  amountMax: string;
}

interface ClaimsFilterProps {
  filters: ClaimFilters;
  onFiltersChange: (filters: ClaimFilters) => void;
  onClearFilters: () => void;
}

export function ClaimsFilter({ filters, onFiltersChange, onClearFilters }: ClaimsFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [savedFilters, setSavedFilters] = useState<{ name: string; filters: ClaimFilters }[]>([]);

  const handleFilterChange = (key: keyof ClaimFilters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(filters).filter(value => value !== '').length;
  };

  const quickFilters = [
    { name: 'Today\'s Claims', action: () => {
      const today = new Date().toISOString().split('T')[0];
      onFiltersChange({ ...filters, serviceStartDate: today, serviceEndDate: today });
    }},
    { name: 'Pending Claims', action: () => handleFilterChange('status', 'pending') },
    { name: 'Denied Claims', action: () => handleFilterChange('status', 'denied') },
    { name: 'This Week', action: () => {
      const today = new Date();
      const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
      const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
      onFiltersChange({ 
        ...filters, 
        serviceStartDate: weekStart.toISOString().split('T')[0],
        serviceEndDate: weekEnd.toISOString().split('T')[0]
      });
    }}
  ];

  const saveCurrentFilter = () => {
    const name = prompt('Enter filter name:');
    if (name) {
      setSavedFilters([...savedFilters, { name, filters: { ...filters } }]);
    }
  };

  const loadSavedFilter = (savedFilter: { name: string; filters: ClaimFilters }) => {
    onFiltersChange(savedFilter.filters);
  };

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {getActiveFilterCount()} active
                  </Badge>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={onClearFilters}>
                  Clear All
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="space-y-6">
            {/* Quick Filters */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Quick Filters</Label>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={filter.action}
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Main Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All statuses</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="denied">Denied</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="resubmitted">Resubmitted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payer">Payer</Label>
                <Select value={filters.payer} onValueChange={(value) => handleFilterChange('payer', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All payers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All payers</SelectItem>
                    <SelectItem value="Aetna">Aetna</SelectItem>
                    <SelectItem value="BCBS">Blue Cross Blue Shield</SelectItem>
                    <SelectItem value="Medicare">Medicare</SelectItem>
                    <SelectItem value="UnitedHealth">UnitedHealth</SelectItem>
                    <SelectItem value="Cigna">Cigna</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Provider</Label>
                <Select value={filters.provider} onValueChange={(value) => handleFilterChange('provider', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All providers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All providers</SelectItem>
                    <SelectItem value="Dr. Johnson">Dr. Johnson</SelectItem>
                    <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
                    <SelectItem value="Dr. Brown">Dr. Brown</SelectItem>
                    <SelectItem value="Dr. Wilson">Dr. Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientSearch">Patient Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="patientSearch"
                    placeholder="Patient name or ID"
                    className="pl-10"
                    value={filters.patientSearch}
                    onChange={(e) => handleFilterChange('patientSearch', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cptCode">CPT Code</Label>
                <Input
                  id="cptCode"
                  placeholder="Enter CPT code"
                  value={filters.cptCode}
                  onChange={(e) => handleFilterChange('cptCode', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceStartDate">Service Date From</Label>
                <Input
                  id="serviceStartDate"
                  type="date"
                  value={filters.serviceStartDate}
                  onChange={(e) => handleFilterChange('serviceStartDate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceEndDate">Service Date To</Label>
                <Input
                  id="serviceEndDate"
                  type="date"
                  value={filters.serviceEndDate}
                  onChange={(e) => handleFilterChange('serviceEndDate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amountMin">Amount Range</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Min"
                    type="number"
                    value={filters.amountMin}
                    onChange={(e) => handleFilterChange('amountMin', e.target.value)}
                  />
                  <Input
                    placeholder="Max"
                    type="number"
                    value={filters.amountMax}
                    onChange={(e) => handleFilterChange('amountMax', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Saved Filters */}
            {savedFilters.length > 0 && (
              <div>
                <Label className="text-sm font-medium mb-2 block">Saved Filters</Label>
                <div className="flex flex-wrap gap-2">
                  {savedFilters.map((savedFilter, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => loadSavedFilter(savedFilter)}
                    >
                      {savedFilter.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Save Filter */}
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={saveCurrentFilter}>
                <Save className="h-4 w-4 mr-2" />
                Save Current Filter
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
