
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const aiInsights = [
  {
    type: 'revenue',
    title: 'Revenue Optimization',
    insight: 'Consider bundling PT/OT services for 15% higher reimbursement rates',
    impact: 'High',
    confidence: 94,
    icon: TrendingUp
  },
  {
    type: 'denial',
    title: 'Denial Prevention',
    insight: 'Update modifier -25 usage for E&M codes to reduce denials by 23%',
    impact: 'Medium',
    confidence: 87,
    icon: AlertTriangle
  },
  {
    type: 'coding',
    title: 'Coding Suggestion',
    insight: 'ICD-10 code M79.3 may be more specific for recent fibromyalgia cases',
    impact: 'Low',
    confidence: 76,
    icon: Lightbulb
  },
  {
    type: 'workflow',
    title: 'Workflow Enhancement',
    insight: 'Automate prior auth for CPT 97110 to save 2.5 hours daily',
    impact: 'High',
    confidence: 91,
    icon: Target
  }
];

export function AIInsights() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg font-semibold">AI Insights</CardTitle>
          </div>
          <Badge className="bg-blue-100 text-blue-800">
            4 New
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {aiInsights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <IconComponent className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{insight.title}</h4>
                      <Badge className={getImpactColor(insight.impact)}>
                        {insight.impact}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{insight.insight}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Confidence: {insight.confidence}%
                      </span>
                      <Button variant="ghost" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button className="w-full mt-4" variant="outline">
          View All Insights
        </Button>
      </CardContent>
    </Card>
  );
}
