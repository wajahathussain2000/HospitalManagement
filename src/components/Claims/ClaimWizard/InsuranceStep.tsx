
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const insuranceProviders = [
  { id: 'aetna', name: 'Aetna', type: 'Commercial' },
  { id: 'bcbs', name: 'Blue Cross Blue Shield', type: 'Commercial' },
  { id: 'cigna', name: 'Cigna', type: 'Commercial' },
  { id: 'united', name: 'UnitedHealth', type: 'Commercial' },
  { id: 'medicare', name: 'Medicare', type: 'Government' },
  { id: 'medicaid', name: 'Medicaid', type: 'Government' }
];

interface InsuranceStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function InsuranceStep({ data, onUpdate }: InsuranceStepProps) {
  const [primaryInsurance, setPrimaryInsurance] = useState(data.insurance?.primary || null);
  const [secondaryInsurance, setSecondaryInsurance] = useState(data.insurance?.secondary || null);
  const [authNumber, setAuthNumber] = useState(data.insurance?.authNumber || '');
  const [eligibilityStatus, setEligibilityStatus] = useState('checking');

  const handlePrimaryInsuranceChange = (insuranceId: string) => {
    const insurance = insuranceProviders.find(ins => ins.id === insuranceId);
    setPrimaryInsurance(insurance);
    updateInsurance({ primary: insurance });
    
    // Simulate eligibility check
    setEligibilityStatus('checking');
    setTimeout(() => {
      setEligibilityStatus('active');
    }, 2000);
  };

  const handleSecondaryInsuranceChange = (insuranceId: string) => {
    const insurance = insuranceProviders.find(ins => ins.id === insuranceId);
    setSecondaryInsurance(insurance);
    updateInsurance({ secondary: insurance });
  };

  const updateInsurance = (updates: any) => {
    const insuranceData = {
      primary: primaryInsurance,
      secondary: secondaryInsurance,
      authNumber,
      ...updates
    };
    onUpdate({ insurance: insuranceData });
  };

  const handleAuthNumberChange = (value: string) => {
    setAuthNumber(value);
    updateInsurance({ authNumber: value });
  };

  const getEligibilityBadge = () => {
    switch (eligibilityStatus) {
      case 'checking':
        return <Badge variant="secondary">Checking...</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'inactive':
        return <Badge variant="destructive">Inactive</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Primary Insurance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Primary Insurance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Insurance Provider *</Label>
            <Select value={primaryInsurance?.id || ''} onValueChange={handlePrimaryInsuranceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select primary insurance provider" />
              </SelectTrigger>
              <SelectContent>
                {insuranceProviders.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{provider.name}</span>
                      <Badge variant="outline" className="ml-2">{provider.type}</Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {primaryInsurance && (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">{primaryInsurance.name}</h4>
                      <p className="text-blue-700 text-sm">{primaryInsurance.type} Insurance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {eligibilityStatus === 'active' && <CheckCircle className="h-5 w-5 text-green-600" />}
                    {eligibilityStatus === 'inactive' && <AlertCircle className="h-5 w-5 text-red-600" />}
                    {getEligibilityBadge()}
                  </div>
                </div>

                {data.patient && (
                  <div className="mt-3 text-sm text-blue-800">
                    <p>Member: {data.patient.name}</p>
                    <p>Member ID: {data.patient.memberNumber}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Secondary Insurance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Secondary Insurance (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Secondary Insurance Provider</Label>
            <Select value={secondaryInsurance?.id || ''} onValueChange={handleSecondaryInsuranceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select secondary insurance provider (if applicable)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                {insuranceProviders.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{provider.name}</span>
                      <Badge variant="outline" className="ml-2">{provider.type}</Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {secondaryInsurance && (
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{secondaryInsurance.name}</h4>
                    <p className="text-gray-700 text-sm">{secondaryInsurance.type} Insurance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Prior Authorization */}
      <Card>
        <CardHeader>
          <CardTitle>Prior Authorization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="authNumber">Authorization Number</Label>
            <Input
              id="authNumber"
              placeholder="Enter prior authorization number (if required)"
              value={authNumber}
              onChange={(e) => handleAuthNumberChange(e.target.value)}
            />
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Prior Authorization Info</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Some procedures may require prior authorization. Check with the insurance provider 
                  if you're unsure about authorization requirements.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
