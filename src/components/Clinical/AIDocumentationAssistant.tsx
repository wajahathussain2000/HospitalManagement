
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Send, 
  Copy, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  FileText
} from 'lucide-react';

interface AIDocumentationAssistantProps {
  currentNotes: any;
  onSuggestion: (suggestion: string) => void;
}

export function AIDocumentationAssistant({ currentNotes, onSuggestion }: AIDocumentationAssistantProps) {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{
    type: 'completion' | 'improvement' | 'coding' | 'alert';
    title: string;
    content: string;
    confidence: number;
  }>>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateSuggestions = async () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockSuggestions = [
        {
          type: 'completion' as const,
          title: 'Complete Assessment',
          content: 'Based on the symptoms described, consider adding: "Differential diagnosis includes acute gastroenteritis, IBS flare, or possible food intolerance. Recommend conservative management with dietary modifications."',
          confidence: 0.85
        },
        {
          type: 'coding' as const,
          title: 'Suggested ICD-10 Codes',
          content: 'K59.00 - Constipation, unspecified\nR10.9 - Unspecified abdominal pain\nK59.1 - Diarrhea, unspecified',
          confidence: 0.92
        },
        {
          type: 'improvement' as const,
          title: 'Documentation Enhancement',
          content: 'Consider adding more specific details about pain location, duration, and severity using a pain scale (1-10). Include any precipitating or alleviating factors.',
          confidence: 0.78
        },
        {
          type: 'alert' as const,
          title: 'Clinical Alert',
          content: 'Patient has documented allergy to Penicillin. Consider alternative antibiotic if bacterial infection is suspected.',
          confidence: 0.95
        }
      ];
      
      setSuggestions(mockSuggestions);
      setIsProcessing(false);
    }, 2000);
  };

  const applySuggestion = (suggestion: string) => {
    onSuggestion(suggestion);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'completion': return <FileText className="h-4 w-4" />;
      case 'improvement': return <Lightbulb className="h-4 w-4" />;
      case 'coding': return <CheckCircle className="h-4 w-4" />;
      case 'alert': return <AlertCircle className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'completion': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'improvement': return 'bg-green-50 text-green-700 border-green-200';
      case 'coding': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'alert': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
          AI Documentation Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask AI to help with documentation, coding suggestions, or clinical decision support..."
            className="flex-1"
            rows={2}
          />
          <Button 
            onClick={generateSuggestions}
            disabled={isProcessing}
            className="self-end"
          >
            {isProcessing ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setPrompt('Suggest ICD-10 codes for current diagnosis');
              generateSuggestions();
            }}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Suggest Coding
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setPrompt('Complete the clinical documentation');
              generateSuggestions();
            }}
          >
            <FileText className="h-4 w-4 mr-2" />
            Complete Notes
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setPrompt('Review for clinical accuracy and completeness');
              generateSuggestions();
            }}
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Improve Quality
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setPrompt('Check for drug interactions and allergies');
              generateSuggestions();
            }}
          >
            <AlertCircle className="h-4 w-4 mr-2" />
            Safety Check
          </Button>
        </div>

        {suggestions.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">AI Suggestions</h4>
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${getTypeColor(suggestion.type)}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(suggestion.type)}
                    <span className="font-medium text-sm">{suggestion.title}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Badge variant="secondary" className="text-xs">
                      {Math.round(suggestion.confidence * 100)}% confidence
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(suggestion.content)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm mb-3">{suggestion.content}</p>
                <Button
                  size="sm"
                  onClick={() => applySuggestion(suggestion.content)}
                >
                  Apply Suggestion
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
