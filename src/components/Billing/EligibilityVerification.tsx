
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EligibilityData {
  patientId: string;
  memberId: string;
  dateOfBirth: string;
  serviceDate: string;
}

interface EligibilityResult {
  isEligible: boolean;
  plan: string;
  copay: string;
  deductible: string;
  coinsurance: string;
  outOfPocketMax: string;
  priorAuthRequired: boolean;
  effectiveDate: string;
  terminationDate: string;
}

export function EligibilityVerification() {
  const { toast } = useToast();
  const [eligibilityData, setEligibilityData] = useState<EligibilityData>({
    patientId: '',
    memberId: '',
    dateOfBirth: '',
    serviceDate: new Date().toISOString().split('T')[0]
  });

  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleInputChange = (field: keyof EligibilityData, value: string) => {
    setEligibilityData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVerifyEligibility = async () => {
    if (!eligibilityData.patientId || !eligibilityData.memberId) {
      toast({
        title: "Validation Error",
        description: "Please fill in required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    setResult(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response
      setResult({
        isEligible: true,
        plan: "BCBS PPO Premium",
        copay: "$25.00",
        deductible: "$1,500.00",
        coinsurance: "20%",
        outOfPocketMax: "$6,000.00",
        priorAuthRequired: false,
        effectiveDate: "2024-01-01",
        terminationDate: "2024-12-31"
      });

      toast({
        title: "Verification Complete",
        description: "Eligibility has been verified successfully.",
      });
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Failed to verify eligibility. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          Eligibility Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Patient Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="patientId">Patient ID *</Label>
              <Input
                id="patientId"
                value={eligibilityData.patientId}
                onChange={(e) => handleInputChange('patientId', e.target.value)}
                placeholder="Enter patient ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID *</Label>
              <Input
                id="memberId"
                value={eligibilityData.memberId}
                onChange={(e) => handleInputChange('memberId', e.target.value)}
                placeholder="Enter insurance member ID"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Verification Details</h3>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={eligibilityData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceDate">Service Date</Label>
              <Input
                id="serviceDate"
                type="date"
                value={eligibilityData.serviceDate}
                onChange={(e) => handleInputChange('serviceDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pt-4 border-t">
          <Button onClick={handleVerifyEligibility} disabled={isVerifying}>
            <Search className="h-4 w-4 mr-2" />
            {isVerifying ? 'Verifying...' : 'Verify Eligibility'}
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium">Verification Results</h3>
              <Badge className={result.isEligible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {result.isEligible ? (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Eligible
                  </>
                ) : (
                  <>
                    <X className="h-3 w-3 mr-1" />
                    Not Eligible
                  </>
                )}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Plan</div>
                <div className="font-medium">{result.plan}</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Copay</div>
                <div className="font-medium">{result.copay}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Deductible</div>
                <div className="font-medium">{result.deductible}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Coinsurance</div>
                <div className="font-medium">{result.coinsurance}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Out-of-Pocket Max</div>
                <div className="font-medium">{result.outOfPocketMax}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Prior Auth Required</div>
                <div className="font-medium">
                  {result.priorAuthRequired ? (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Required
                    </Badge>
                  ) : (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Not Required
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600">Coverage Period</div>
              <div className="font-medium">{result.effectiveDate} to {result.terminationDate}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
