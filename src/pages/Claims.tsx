
import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ClaimsFilter } from '@/components/Claims/ClaimsFilter';
import { ClaimsTable, ClaimData } from '@/components/Claims/ClaimsTable';
import { ClaimDetailModal } from '@/components/Claims/ClaimDetailModal';
import { ClaimsStats } from '@/components/Claims/ClaimsStats';
import { ClaimsActions } from '@/components/Claims/ClaimsActions';
import { ClaimFormWizard } from '@/components/Claims/ClaimFormWizard';
import { useClaimsData } from '@/hooks/useClaimsData';
import { useToast } from '@/hooks/use-toast';

export default function Claims() {
  const {
    filteredClaims,
    filters,
    selectedClaims,
    setFilters,
    handleClearFilters,
    handleSelectClaim,
    handleSelectAll,
    handleSaveClaim
  } = useClaimsData();

  const { toast } = useToast();
  const [selectedClaim, setSelectedClaim] = useState<ClaimData | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isNewClaimModalOpen, setIsNewClaimModalOpen] = useState(false);

  const handleViewClaim = (claim: ClaimData) => {
    setSelectedClaim(claim);
    setIsDetailModalOpen(true);
  };

  const handleEditClaim = (claim: ClaimData) => {
    setSelectedClaim(claim);
    setIsDetailModalOpen(true);
  };

  const handleNewClaim = () => {
    setIsNewClaimModalOpen(true);
  };

  const handleClaimSubmit = (claimData: any) => {
    // Process the claim submission
    console.log('Submitting claim:', claimData);
    
    toast({
      title: "Claim Submitted Successfully",
      description: `Claim for ${claimData.patient?.name} has been submitted for review.`,
    });
    
    setIsNewClaimModalOpen(false);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Claims Management</h1>
            <p className="text-gray-600 mt-1">Track and manage insurance claims with advanced filtering</p>
          </div>
          <ClaimsActions onNewClaim={handleNewClaim} />
        </div>

        {/* Statistics Cards */}
        <ClaimsStats claims={filteredClaims} />

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

        {/* Enhanced New Claim Modal with Wizard */}
        <Dialog open={isNewClaimModalOpen} onOpenChange={setIsNewClaimModalOpen}>
          <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0">
            <div className="p-6">
              <ClaimFormWizard 
                onSubmit={handleClaimSubmit}
                onCancel={() => setIsNewClaimModalOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
}
