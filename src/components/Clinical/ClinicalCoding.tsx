
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Check, AlertTriangle } from 'lucide-react';

interface CodeSuggestion {
  code: string;
  description: string;
  type: 'ICD-10' | 'CPT' | 'HCPCS';
  confidence: number;
  billable: boolean;
}

interface ClinicalCodingProps {
  soapNotes: any;
}

export function ClinicalCoding({ soapNotes }: ClinicalCodingProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCodes, setSelectedCodes] = useState<CodeSuggestion[]>([]);
  const [suggestions, setSuggestions] = useState<CodeSuggestion[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (soapNotes.assessment || soapNotes.diagnosis) {
      analyzeForCodes();
    }
  }, [soapNotes.assessment, soapNotes.diagnosis]);

  const analyzeForCodes = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis of clinical notes
    setTimeout(() => {
      const mockSuggestions: CodeSuggestion[] = [
        {
          code: 'Z00.00',
          description: 'Encounter for general adult medical examination without abnormal findings',
          type: 'ICD-10',
          confidence: 0.92,
          billable: true
        },
        {
          code: '99213',
          description: 'Office or other outpatient visit for evaluation and management of established patient',
          type: 'CPT',
          confidence: 0.88,
          billable: true
        },
        {
          code: 'M79.3',
          description: 'Panniculitis, unspecified',
          type: 'ICD-10',
          confidence: 0.75,
          billable: true
        },
        {
          code: '36415',
          description: 'Collection of venous blood by venipuncture',
          type: 'CPT',
          confidence: 0.65,
          billable: true
        }
      ];
      
      setSuggestions(mockSuggestions);
      setIsAnalyzing(false);
    }, 1500);
  };

  const addCode = (code: CodeSuggestion) => {
    if (!selectedCodes.find(c => c.code === code.code)) {
      setSelectedCodes([...selectedCodes, code]);
    }
  };

  const removeCode = (codeToRemove: string) => {
    setSelectedCodes(selectedCodes.filter(code => code.code !== codeToRemove));
  };

  const searchCodes = () => {
    // Simulate code search
    console.log('Searching for codes:', searchTerm);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600 bg-green-50';
    if (confidence >= 0.6) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Medical Coding Assistant
            <Button 
              onClick={analyzeForCodes}
              disabled={isAnalyzing}
              variant="outline"
            >
              {isAnalyzing ? (
                <div className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full mr-2" />
              ) : (
                <Search className="h-4 w-4 mr-2" />
              )}
              Analyze Notes
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search ICD-10, CPT, or HCPCS codes..."
              className="flex-1"
            />
            <Button onClick={searchCodes}>
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 mb-3">AI Code Suggestions</h4>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline">{suggestion.type}</Badge>
                        <code className="font-mono text-sm font-medium">{suggestion.code}</code>
                        {suggestion.billable && (
                          <Badge variant="secondary" className="text-xs">Billable</Badge>
                        )}
                        <Badge className={`text-xs ${getConfidenceColor(suggestion.confidence)}`}>
                          {Math.round(suggestion.confidence * 100)}%
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{suggestion.description}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addCode(suggestion)}
                      disabled={selectedCodes.some(c => c.code === suggestion.code)}
                    >
                      {selectedCodes.some(c => c.code === suggestion.code) ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedCodes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Selected Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {selectedCodes.map((code, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline">{code.type}</Badge>
                      <code className="font-mono text-sm font-medium">{code.code}</code>
                      {code.billable && (
                        <Badge variant="secondary" className="text-xs">Billable</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{code.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCode(code.code)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Billable Codes: {selectedCodes.filter(c => c.billable).length}</span>
                <div className="flex space-x-2">
                  <Button variant="outline">Review Compliance</Button>
                  <Button>Submit for Billing</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
