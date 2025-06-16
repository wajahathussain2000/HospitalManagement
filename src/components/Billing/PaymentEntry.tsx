
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CreditCard, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentData {
  claimId: string;
  paymentType: string;
  paymentMethod: string;
  amount: string;
  paymentDate: string;
  referenceNumber: string;
  adjustmentAmount: string;
  adjustmentReason: string;
}

export function PaymentEntry() {
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState<PaymentData>({
    claimId: '',
    paymentType: '',
    paymentMethod: '',
    amount: '',
    paymentDate: new Date().toISOString().split('T')[0],
    referenceNumber: '',
    adjustmentAmount: '',
    adjustmentReason: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: keyof PaymentData, value: string) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProcessPayment = async () => {
    setIsProcessing(true);
    
    if (!paymentData.claimId || !paymentData.amount) {
      toast({
        title: "Validation Error",
        description: "Please fill in required fields.",
        variant: "destructive",
      });
      setIsProcessing(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Payment Processed",
        description: "Payment has been recorded successfully.",
      });
      
      // Reset form
      setPaymentData({
        claimId: '',
        paymentType: '',
        paymentMethod: '',
        amount: '',
        paymentDate: new Date().toISOString().split('T')[0],
        referenceNumber: '',
        adjustmentAmount: '',
        adjustmentReason: ''
      });
    } catch (error) {
      toast({
        title: "Processing Failed",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Payment Entry
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Payment Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="claimId">Claim ID *</Label>
              <Input
                id="claimId"
                value={paymentData.claimId}
                onChange={(e) => handleInputChange('claimId', e.target.value)}
                placeholder="Enter claim ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentType">Payment Type</Label>
              <Select value={paymentData.paymentType} onValueChange={(value) => handleInputChange('paymentType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="insurance">Insurance Payment</SelectItem>
                  <SelectItem value="patient">Patient Payment</SelectItem>
                  <SelectItem value="era">ERA Payment</SelectItem>
                  <SelectItem value="adjustment">Adjustment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select value={paymentData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="ach">ACH Transfer</SelectItem>
                  <SelectItem value="electronic">Electronic Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Payment Amount *</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  className="pl-10"
                  value={paymentData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Additional Information</h3>

            <div className="space-y-2">
              <Label htmlFor="paymentDate">Payment Date</Label>
              <Input
                id="paymentDate"
                type="date"
                value={paymentData.paymentDate}
                onChange={(e) => handleInputChange('paymentDate', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referenceNumber">Reference Number</Label>
              <Input
                id="referenceNumber"
                value={paymentData.referenceNumber}
                onChange={(e) => handleInputChange('referenceNumber', e.target.value)}
                placeholder="Check number, transaction ID, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adjustmentAmount">Adjustment Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="adjustmentAmount"
                  type="number"
                  step="0.01"
                  className="pl-10"
                  value={paymentData.adjustmentAmount}
                  onChange={(e) => handleInputChange('adjustmentAmount', e.target.value)}
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="adjustmentReason">Adjustment Reason</Label>
              <Select value={paymentData.adjustmentReason} onValueChange={(value) => handleInputChange('adjustmentReason', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contractual">Contractual Adjustment</SelectItem>
                  <SelectItem value="discount">Patient Discount</SelectItem>
                  <SelectItem value="writeoff">Write-off</SelectItem>
                  <SelectItem value="refund">Refund</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Quick Payment Summary */}
        {paymentData.amount && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Payment Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Payment Amount:</span>
                <span className="ml-2 font-medium">${paymentData.amount}</span>
              </div>
              <div>
                <span className="text-gray-600">Adjustment:</span>
                <span className="ml-2 font-medium">${paymentData.adjustmentAmount || '0.00'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t">
          <Button onClick={handleProcessPayment} disabled={isProcessing}>
            <CheckCircle className="h-4 w-4 mr-2" />
            {isProcessing ? 'Processing...' : 'Process Payment'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
