
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  AlertTriangle,
  Brain,
  FileText,
  Send,
  Download,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';
import { LetterGenerator } from './LetterGenerator';

interface DenialDetailModalProps {
  claim: ClaimData | null;
  isOpen: boolean;
  onClose: () => void;
}

const mockDenialReasons = [
  {
    code: 'AUTH001',
    description: 'Prior authorization required',
    category: 'authorization' as const,
    isAppealable: true,
    averageAppealSuccessRate: 85
  },
  {
    code: 'DOC002',
    description: 'Insufficient clinical documentation',
    category: 'documentation' as const,
    isAppealable: true,
    averageAppealSuccessRate: 72
  }
];

const mockAISuggestions = [
  'Obtain prior authorization before resubmission',
  'Include additional clinical documentation from the service date',
  'Consider alternative CPT codes that may be more appropriate',
  'Review payer-specific guidelines for this procedure',
  'Submit with medical necessity letter'
];

export function DenialDetailModal({ claim, isOpen, onClose }: DenialDetailModalProps) {
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  if (!claim) return null;

  const handleGenerateLetter = () => {
    setIsLetterModalOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              Denial Analysis - {claim.id}
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
              <TabsTrigger value="details">Denial Details</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="history">Appeal History</TabsTrigger>
            </TabsList>

            <TabsContent value="analysis" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-4 w-4 mr-2" />
                    AI-Powered Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Success Probability</h4>
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-200 rounded-full h-2 flex-1">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-blue-900 font-medium">78%</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-2">
                      High success probability based on similar cases
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Recommended Actions</h4>
                    <div className="space-y-2">
                      {mockAISuggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleGenerateLetter}>
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Appeal Letter
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Denial Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Denial Date</p>
                      <p className="font-medium">2024-01-20</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Days Since Denial</p>
                      <p className="font-medium">5 days</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Appeal Deadline</p>
                      <p className="font-medium text-orange-600">2024-02-19 (30 days)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Denial Reasons</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mockDenialReasons.map((reason, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="destructive">{reason.code}</Badge>
                          <Badge variant="outline">
                            {reason.averageAppealSuccessRate}% success rate
                          </Badge>
                        </div>
                        <p className="text-sm">{reason.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="actions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Take Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Action</label>
                    <Select value={selectedAction} onValueChange={setSelectedAction}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appeal">Submit Appeal</SelectItem>
                        <SelectItem value="correct">Correct & Resubmit</SelectItem>
                        <SelectItem value="write-off">Write Off</SelectItem>
                        <SelectItem value="patient-responsibility">Patient Responsibility</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Notes</label>
                    <Textarea placeholder="Add notes about the action taken..." />
                  </div>

                  <div className="flex space-x-2">
                    <Button>
                      <Send className="h-4 w-4 mr-2" />
                      Process Action
                    </Button>
                    <Button variant="outline" onClick={handleGenerateLetter}>
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Letter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Appeal History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 pb-4 border-b">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Initial Denial</p>
                            <p className="text-sm text-gray-600">Prior authorization required</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">2024-01-20</p>
                            <Badge variant="destructive">Denied</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center py-4 text-gray-500">
                      No appeals submitted yet
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <LetterGenerator
        claim={claim}
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
        denialReasons={mockDenialReasons}
      />
    </>
  );
}
