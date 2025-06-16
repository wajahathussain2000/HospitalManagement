
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FileCheck, Clock, AlertTriangle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PriorAuthData {
  patientId: string;
  memberId: string;
  cptCode: string;
  diagnosisCode: string;
  urgency: string;
  clinicalInfo: string;
  requestedDate: string;
  requestedUnits: string;
}

export function PriorAuthForm() {
  const { toast } = useToast();
  const [authData, setAuthData] = useState<PriorAuthData>({
    patientId: '',
    memberId: '',
    cptCode: '',
    diagnosisCode: '',
    urgency: '',
    clinicalInfo: '',
    requestedDate: '',
    requestedUnits: '1'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof PriorAuthData, value: string) => {
    setAuthData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitRequest = async () => {
    if (!authData.patientId || !authData.cptCode || !authData.clinicalInfo) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Prior Authorization Submitted",
        description: "Your prior authorization request has been submitted successfully.",
      });
      
      // Reset form
      setAuthData({
        patientId: '',
        memberId: '',
        cptCode: '',
        diagnosisCode: '',
        urgency: '',
        clinicalInfo: '',
        requestedDate: '',
        requestedUnits: '1'
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Failed to submit prior authorization request.",
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
          <FileCheck className="h-5 w-5 mr-2" />
          Prior Authorization Request
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Patient Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="patientId">Patient ID *</Label>
              <Input
                id="patientId"
                value={authData.patientId}
                onChange={(e) => handleInputChange('patientId', e.target.value)}
                placeholder="Enter patient ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID</Label>
              <Input
                id="memberId"
                value={authData.memberId}
                onChange={(e) => handleInputChange('memberId', e.target.value)}
                placeholder="Enter insurance member ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Request Urgency</Label>
              <Select value={authData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="routine">Routine</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Service Information</h3>

            <div className="space-y-2">
              <Label htmlFor="cptCode">CPT Code *</Label>
              <Input
                id="cptCode"
                value={authData.cptCode}
                onChange={(e) => handleInputChange('cptCode', e.target.value)}
                placeholder="Enter CPT code"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diagnosisCode">Diagnosis Code</Label>
              <Input
                id="diagnosisCode"
                value={authData.diagnosisCode}
                onChange={(e) => handleInputChange('diagnosisCode', e.target.value)}
                placeholder="Enter ICD-10 code"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requestedDate">Requested Service Date</Label>
              <Input
                id="requestedDate"
                type="date"
                value={authData.requestedDate}
                onChange={(e) => handleInputChange('requestedDate', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requestedUnits">Requested Units</Label>
              <Input
                id="requestedUnits"
                type="number"
                value={authData.requestedUnits}
                onChange={(e) => handleInputChange('requestedUnits', e.target.value)}
                placeholder="Number of units"
              />
            </div>
          </div>
        </div>

        {/* Clinical Information */}
        <div className="space-y-2">
          <Label htmlFor="clinicalInfo">Clinical Information *</Label>
          <Textarea
            id="clinicalInfo"
            value={authData.clinicalInfo}
            onChange={(e) => handleInputChange('clinicalInfo', e.target.value)}
            placeholder="Provide detailed clinical justification for the requested service..."
            rows={5}
          />
        </div>

        {/* Urgency Alert */}
        {authData.urgency === 'emergency' && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span className="font-medium text-red-800">Emergency Request</span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Emergency requests require immediate attention and additional documentation.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t">
          <Button onClick={handleSubmitRequest} disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>

        {/* Status Tracker */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Typical Processing Times</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Routine Requests:</span>
              <Badge variant="outline">3-5 business days</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Urgent Requests:</span>
              <Badge variant="outline">1-2 business days</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Emergency Requests:</span>
              <Badge variant="outline">Within 24 hours</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
