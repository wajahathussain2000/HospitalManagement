
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  FileText,
  Download,
  Send,
  Copy,
  RefreshCw,
  Wand2
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';
import { DenialReason } from '@/types/denial';

interface LetterGeneratorProps {
  claim: ClaimData | null;
  isOpen: boolean;
  onClose: () => void;
  denialReasons: DenialReason[];
}

const letterTemplates = [
  {
    id: 'appeal-standard',
    name: 'Standard Appeal Letter',
    type: 'appeal',
    description: 'General appeal letter for denied claims'
  },
  {
    id: 'appeal-medical-necessity',
    name: 'Medical Necessity Appeal',
    type: 'appeal',
    description: 'Appeal focusing on medical necessity'
  },
  {
    id: 'prior-auth-request',
    name: 'Prior Authorization Request',
    type: 'prior_auth',
    description: 'Request for prior authorization'
  },
  {
    id: 'patient-communication',
    name: 'Patient Communication',
    type: 'patient_communication',
    description: 'Letter to patient about denial'
  }
];

export function LetterGenerator({ claim, isOpen, onClose, denialReasons }: LetterGeneratorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!claim) return null;

  const generateLetter = async () => {
    setIsGenerating(true);
    
    // Simulate AI letter generation
    setTimeout(() => {
      const mockLetter = `
[Date]

[Insurance Company Name]
[Address]

Re: Appeal for Claim ${claim.id}
Patient: ${claim.patient}
Provider: ${claim.provider}
Date of Service: ${claim.dateOfService}
Claim Amount: ${claim.amount}

Dear Claims Review Team,

I am writing to formally appeal the denial of the above-referenced claim. Based on my review of the denial reasons and clinical documentation, I believe this claim was incorrectly denied and should be reconsidered for payment.

DENIAL REASONS ADDRESSED:
${denialReasons.map(reason => `• ${reason.code}: ${reason.description}`).join('\n')}

CLINICAL JUSTIFICATION:
The services provided were medically necessary and appropriate for the patient's condition. The procedure was performed according to accepted medical standards and was essential for the patient's care and treatment.

SUPPORTING DOCUMENTATION:
• Medical records from ${claim.dateOfService}
• Provider notes supporting medical necessity
• Relevant diagnostic codes: ${claim.cptCodes.join(', ')}

REQUESTED ACTION:
I respectfully request that you reverse the denial decision and process payment for this claim in the amount of ${claim.amount}. The services were appropriately rendered and meet all coverage criteria.

If you require any additional information or documentation, please contact our office at your earliest convenience. I look forward to your prompt reconsideration of this matter.

Sincerely,

[Provider Name]
[Title]
[Practice Name]
[Contact Information]

Attachments:
- Copy of original claim
- Medical records
- Supporting clinical documentation
      `.trim();
      
      setGeneratedLetter(mockLetter);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(generatedLetter);
  };

  const handleDownloadLetter = () => {
    const blob = new Blob([generatedLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appeal-letter-${claim.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            AI Letter Generator - {claim.id}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Template Selection */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Letter Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="template-select">Select Template</Label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose template" />
                    </SelectTrigger>
                    <SelectContent>
                      {letterTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedTemplate && (
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium mb-1">
                      {letterTemplates.find(t => t.id === selectedTemplate)?.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {letterTemplates.find(t => t.id === selectedTemplate)?.description}
                    </p>
                    <Badge variant="outline" className="mt-2">
                      {letterTemplates.find(t => t.id === selectedTemplate)?.type}
                    </Badge>
                  </div>
                )}

                <Button 
                  onClick={generateLetter} 
                  disabled={!selectedTemplate || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Letter
                    </>
                  )}
                </Button>

                {denialReasons.length > 0 && (
                  <div>
                    <Label className="text-sm font-medium">Denial Reasons to Address</Label>
                    <div className="space-y-2 mt-2">
                      {denialReasons.map((reason, index) => (
                        <div key={index} className="text-xs border rounded p-2">
                          <Badge variant="destructive" className="text-xs mb-1">
                            {reason.code}
                          </Badge>
                          <p>{reason.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Generated Letter */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Generated Letter</span>
                  {generatedLetter && (
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={handleCopyLetter}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleDownloadLetter}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {generatedLetter ? (
                  <Textarea
                    value={generatedLetter}
                    onChange={(e) => setGeneratedLetter(e.target.value)}
                    className="min-h-[500px] font-mono text-sm"
                    placeholder="Generated letter will appear here..."
                  />
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">
                      Select a template and click "Generate Letter" to create an AI-powered appeal letter
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {generatedLetter && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Writing Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Review all bracketed placeholders and replace with actual information</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Customize the clinical justification section with specific patient details</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Attach all referenced supporting documentation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Submit within the appeal deadline (typically 30-365 days depending on payer)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
