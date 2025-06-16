
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Target,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';

interface AIAnalysisPanelProps {
  claims: ClaimData[];
}

export function AIAnalysisPanel({ claims }: AIAnalysisPanelProps) {
  const deniedClaims = claims.filter(claim => claim.status === 'denied');
  const totalClaims = claims.length;

  // Mock AI insights
  const aiInsights = {
    denialRiskScore: 23,
    topRiskFactors: [
      { factor: 'Missing Prior Authorization', risk: 85, count: 12 },
      { factor: 'Incomplete Documentation', risk: 72, count: 8 },
      { factor: 'Incorrect Coding', risk: 45, count: 5 }
    ],
    optimizationSuggestions: [
      'Implement prior auth checking before service delivery',
      'Standardize documentation templates for common procedures',
      'Regular coding accuracy training for staff',
      'Set up automated eligibility verification'
    ],
    trendAnalysis: {
      weeklyDenialTrend: -12, // 12% decrease
      costImpact: '$15,420',
      timeToAppeal: '8.5 days average'
    }
  };

  const getRiskColor = (risk: number) => {
    if (risk >= 70) return 'text-red-600';
    if (risk >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* AI Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Risk Score</p>
                <p className="text-2xl font-bold text-green-600">{aiInsights.denialRiskScore}%</p>
                <p className="text-xs text-gray-500">Low Risk</p>
              </div>
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Weekly Trend</p>
                <p className="text-2xl font-bold text-green-600">
                  {aiInsights.trendAnalysis.weeklyDenialTrend > 0 ? '+' : ''}
                  {aiInsights.trendAnalysis.weeklyDenialTrend}%
                </p>
                <p className="text-xs text-gray-500">Denial Rate</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cost Impact</p>
                <p className="text-2xl font-bold text-orange-600">{aiInsights.trendAnalysis.costImpact}</p>
                <p className="text-xs text-gray-500">Monthly Denials</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Factors Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Top Risk Factors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiInsights.topRiskFactors.map((factor, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{factor.factor}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{factor.count} claims</Badge>
                    <span className={`text-sm font-bold ${getRiskColor(factor.risk)}`}>
                      {factor.risk}%
                    </span>
                  </div>
                </div>
                <Progress value={factor.risk} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Optimization Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
              AI Optimization Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiInsights.optimizationSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">{suggestion}</p>
                </div>
                <Button variant="outline" size="sm">
                  Implement
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Predictive Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-purple-500" />
            Predictive Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900">Predicted Monthly Denials</h4>
              <p className="text-2xl font-bold text-blue-600 mt-2">8-12</p>
              <p className="text-sm text-gray-500">Based on current trends</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900">Potential Revenue at Risk</h4>
              <p className="text-2xl font-bold text-orange-600 mt-2">$8,400</p>
              <p className="text-sm text-gray-500">Next 30 days</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900">Recommended Action Priority</h4>
              <p className="text-2xl font-bold text-green-600 mt-2">High</p>
              <p className="text-sm text-gray-500">Implement prior auth checks</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
