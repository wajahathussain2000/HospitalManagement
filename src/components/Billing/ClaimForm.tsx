
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, CalendarDays, User, FileText, DollarSign, Save, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ClaimData {
  patientId: string;
  providerId: string;
  serviceDate: string;
  cptCode: string;
  icdCode: string;
  chargeAmount: string;
  insuranceType: string;
  notes: string;
}

export function ClaimForm() {
  const { toast } = useToast();
  const [claimData, setClaimData] = useState<ClaimData>({
    patientId: '',
    providerId: '',
    serviceDate: '',
    cptCode: '',
    icdCode: '',
    chargeAmount: '',
    insuranceType: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ClaimData, value: string) => {
    setClaimData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Claim has been saved as draft successfully.",
    });
  };

  const handleSubmitClaim = async () => {
    setIsSubmitting(true);
    
    // Validate required fields
    if (!claimData.patientId || !claimData.cptCode || !claimData.chargeAmount) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Claim Submitted",
        description: "Claim has been submitted successfully.",
      });
      
      // Reset form
      setClaimData({
        patientId: '',
        providerId: '',
        serviceDate: '',
        cptCode: '',
        icdCode: '',
        chargeAmount: '',
        insuranceType: '',
        notes: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Failed to submit claim. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Create New Claim
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <User className="h-4 w-4" />
              <h3 className="font-medium">Patient Information</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="patientId">Patient ID *</Label>
              <Input
                id="patientId"
                value={claimData.patientId}
                onChange={(e) => handleInputChange('patientId', e.target.value)}
                placeholder="Enter patient ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="providerId">Provider ID</Label>
              <Input
                id="providerId"
                value={claimData.providerId}
                onChange={(e) => handleInputChange('providerId', e.target.value)}
                placeholder="Enter provider ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceDate">Service Date</Label>
              <Input
                id="serviceDate"
                type="date"
                value={claimData.serviceDate}
                onChange={(e) => handleInputChange('serviceDate', e.target.value)}
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <CalendarDays className="h-4 w-4" />
              <h3 className="font-medium">Service Information</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cptCode">CPT Code *</Label>
              <Input
                id="cptCode"
                value={claimData.cptCode}
                onChange={(e) => handleInputChange('cptCode', e.target.value)}
                placeholder="Enter CPT code"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="icdCode">ICD-10 Code</Label>
              <Input
                id="icdCode"
                value={claimData.icdCode}
                onChange={(e) => handleInputChange('icdCode', e.target.value)}
                placeholder="Enter ICD-10 code"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chargeAmount">Charge Amount *</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="chargeAmount"
                  type="number"
                  step="0.01"
                  className="pl-10"
                  value={claimData.chargeAmount}
                  onChange={(e) => handleInputChange('chargeAmount', e.target.value)}
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="space-y-4">
          <h3 className="font-medium">Insurance Information</h3>
          <div className="space-y-2">
            <Label htmlFor="insuranceType">Insurance Type</Label>
            <Select value={claimData.insuranceType} onValueChange={(value) => handleInputChange('insuranceType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary">Primary Insurance</SelectItem>
                <SelectItem value="secondary">Secondary Insurance</SelectItem>
                <SelectItem value="medicare">Medicare</SelectItem>
                <SelectItem value="medicaid">Medicaid</SelectItem>
                <SelectItem value="self-pay">Self Pay</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={claimData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            placeholder="Enter any additional notes or comments"
            rows={3}
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="h-4 w-4 mr-2" />
            Save as Draft
          </Button>
          <Button onClick={handleSubmitClaim} disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Submitting...' : 'Submit Claim'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
