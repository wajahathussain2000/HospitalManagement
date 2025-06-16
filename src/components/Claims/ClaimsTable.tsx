
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  FileText,
  Edit,
  Eye,
  Download,
  RefreshCw,
  ArrowUpDown,
  MoreHorizontal
} from 'lucide-react';

export interface ClaimData {
  id: string;
  patient: string;
  provider: string;
  dateOfService: string;
  submissionDate: string;
  amount: string;
  status: string;
  payer: string;
  cptCodes: string[];
}

interface ClaimsTableProps {
  claims: ClaimData[];
  selectedClaims: string[];
  onSelectClaim: (claimId: string) => void;
  onSelectAll: (selected: boolean) => void;
  onViewClaim: (claim: ClaimData) => void;
  onEditClaim: (claim: ClaimData) => void;
}

export function ClaimsTable({
  claims,
  selectedClaims,
  onSelectClaim,
  onSelectAll,
  onViewClaim,
  onEditClaim
}: ClaimsTableProps) {
  const [sortField, setSortField] = useState<keyof ClaimData>('submissionDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'denied': return 'bg-red-100 text-red-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'resubmitted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSort = (field: keyof ClaimData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedClaims = [...claims].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const totalPages = Math.ceil(sortedClaims.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClaims = sortedClaims.slice(startIndex, startIndex + itemsPerPage);

  const isAllSelected = selectedClaims.length === claims.length;
  const isPartiallySelected = selectedClaims.length > 0 && selectedClaims.length < claims.length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Claims List ({claims.length} total)
          </CardTitle>
          <div className="flex space-x-2">
            {selectedClaims.length > 0 && (
              <Badge variant="secondary">
                {selectedClaims.length} selected
              </Badge>
            )}
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={onSelectAll}
                    aria-label="Select all claims"
                    {...(isPartiallySelected && { 'data-state': 'indeterminate' })}
                  />
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-medium"
                    onClick={() => handleSort('id')}
                  >
                    Claim ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-medium"
                    onClick={() => handleSort('patient')}
                  >
                    Patient
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-medium"
                    onClick={() => handleSort('provider')}
                  >
                    Provider
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-medium"
                    onClick={() => handleSort('dateOfService')}
                  >
                    Service Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-medium"
                    onClick={() => handleSort('amount')}
                  >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Payer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>CPT Codes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedClaims.map((claim) => (
                <TableRow key={claim.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox
                      checked={selectedClaims.includes(claim.id)}
                      onCheckedChange={() => onSelectClaim(claim.id)}
                      aria-label={`Select claim ${claim.id}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{claim.id}</TableCell>
                  <TableCell>{claim.patient}</TableCell>
                  <TableCell>{claim.provider}</TableCell>
                  <TableCell>{claim.dateOfService}</TableCell>
                  <TableCell className="font-medium text-green-600">{claim.amount}</TableCell>
                  <TableCell>{claim.payer}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(claim.status)}>
                      {claim.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {claim.cptCodes.map((code, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {code}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex space-x-1 justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onViewClaim(claim)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEditClaim(claim)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {totalPages > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
