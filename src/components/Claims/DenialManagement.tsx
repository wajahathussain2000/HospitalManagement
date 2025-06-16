
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertTriangle, 
  TrendingUp, 
  FileText, 
  Brain,
  Calendar,
  BarChart3
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';
import { DenialDetailModal } from './DenialDetailModal';
import { AIAnalysisPanel } from './AIAnalysisPanel';
import { DenialAnalytics } from './DenialAnalytics';

interface DenialManagementProps {
  claims: ClaimData[];
}

export function DenialManagement({ claims }: DenialManagementProps) {
  const [selectedClaim, setSelectedClaim] = useState<ClaimData | null>(null);
  const [isDenialModalOpen, setIsDenialModalOpen] = useState(false);

  const deniedClaims = claims.filter(claim => claim.status === 'denied');
  const resubmittedClaims = claims.filter(claim => claim.status === 'resubmitted');

  const denialStats = {
    totalDenials: deniedClaims.length,
    denialRate: claims.length > 0 ? ((deniedClaims.length / claims.length) * 100).toFixed(1) : '0',
    avgAppealTime: '14 days',
    successRate: '78%'
  };

  const handleViewDenial = (claim: ClaimData) => {
    setSelectedClaim(claim);
    setIsDenialModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Denial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Denials</p>
                <p className="text-2xl font-bold text-red-600">{denialStats.totalDenials}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Denial Rate</p>
                <p className="text-2xl font-bold text-orange-600">{denialStats.denialRate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Appeal Time</p>
                <p className="text-2xl font-bold text-blue-600">{denialStats.avgAppealTime}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-green-600">{denialStats.successRate}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="denials" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="denials">Active Denials</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
        </TabsList>

        <TabsContent value="denials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                Denied Claims Requiring Action
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deniedClaims.map((claim) => (
                  <div key={claim.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="destructive">Denied</Badge>
                          <span className="font-medium">{claim.id}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Patient: {claim.patient} | Provider: {claim.provider}
                        </p>
                        <p className="text-sm text-gray-600">
                          Amount: {claim.amount} | Service Date: {claim.dateOfService}
                        </p>
                        <div className="flex space-x-2">
                          <Badge variant="outline">Auth Required</Badge>
                          <Badge variant="outline">Missing Documentation</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDenial(claim)}
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          AI Analysis
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Appeal
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {deniedClaims.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No denied claims requiring action
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <DenialAnalytics claims={claims} />
        </TabsContent>

        <TabsContent value="ai-insights">
          <AIAnalysisPanel claims={claims} />
        </TabsContent>

        <TabsContent value="workflows">
          <Card>
            <CardHeader>
              <CardTitle>Automated Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Auto-Appeal Generation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Automatically generate appeal letters for common denial reasons
                  </p>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Smart Notifications</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get notified when appeals are due or new denials arrive
                  </p>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <DenialDetailModal
        claim={selectedClaim}
        isOpen={isDenialModalOpen}
        onClose={() => {
          setIsDenialModalOpen(false);
          setSelectedClaim(null);
        }}
      />
    </div>
  );
}
