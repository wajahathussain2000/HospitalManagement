
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mic, Save, Sparkles, FileText } from 'lucide-react';
import { AIDocumentationAssistant } from './AIDocumentationAssistant';
import { ClinicalCoding } from './ClinicalCoding';

interface SOAPNotesProps {
  patientId: string;
}

export function SOAPNotes({ patientId }: SOAPNotesProps) {
  const [soapData, setSoapData] = useState({
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
    chiefComplaint: '',
    hpi: '',
    ros: '',
    physicalExam: '',
    diagnosis: '',
    treatment: ''
  });
  
  const [isRecording, setIsRecording] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSoapData(prev => ({ ...prev, [field]: value }));
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      // Voice recording logic would be implemented here
      console.log('Recording started for SOAP notes');
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log('Recording stopped');
  };

  const handleSave = () => {
    console.log('Saving SOAP notes:', soapData);
    // Save logic would be implemented here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">SOAP Notes</h3>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setShowAIAssistant(!showAIAssistant)}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            AI Assistant
          </Button>
          <Button
            variant="outline"
            onClick={isRecording ? stopRecording : startRecording}
            className={isRecording ? 'bg-red-50 text-red-600' : ''}
          >
            <Mic className="h-4 w-4 mr-2" />
            {isRecording ? 'Stop Recording' : 'Voice Input'}
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Notes
          </Button>
        </div>
      </div>

      {showAIAssistant && (
        <AIDocumentationAssistant
          currentNotes={soapData}
          onSuggestion={(suggestion) => {
            console.log('AI suggestion received:', suggestion);
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Chief Complaint & HPI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="chiefComplaint">Chief Complaint</Label>
              <Input
                id="chiefComplaint"
                value={soapData.chiefComplaint}
                onChange={(e) => handleInputChange('chiefComplaint', e.target.value)}
                placeholder="Patient's primary concern..."
              />
            </div>
            <div>
              <Label htmlFor="hpi">History of Present Illness</Label>
              <Textarea
                id="hpi"
                value={soapData.hpi}
                onChange={(e) => handleInputChange('hpi', e.target.value)}
                placeholder="Detailed history of the current condition..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Review of Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="ros">Systems Review</Label>
              <Textarea
                id="ros"
                value={soapData.ros}
                onChange={(e) => handleInputChange('ros', e.target.value)}
                placeholder="Systematic review of body systems..."
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Subjective</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="subjective">Patient's Description</Label>
              <Textarea
                id="subjective"
                value={soapData.subjective}
                onChange={(e) => handleInputChange('subjective', e.target.value)}
                placeholder="What the patient tells you..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="objective">Clinical Observations</Label>
              <Textarea
                id="objective"
                value={soapData.objective}
                onChange={(e) => handleInputChange('objective', e.target.value)}
                placeholder="Physical exam findings, vital signs, test results..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="assessment">Clinical Assessment</Label>
              <Textarea
                id="assessment"
                value={soapData.assessment}
                onChange={(e) => handleInputChange('assessment', e.target.value)}
                placeholder="Diagnosis, differential diagnosis, clinical reasoning..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="plan">Treatment Plan</Label>
              <Textarea
                id="plan"
                value={soapData.plan}
                onChange={(e) => handleInputChange('plan', e.target.value)}
                placeholder="Treatment plan, medications, follow-up, patient education..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <ClinicalCoding soapNotes={soapData} />
    </div>
  );
}
