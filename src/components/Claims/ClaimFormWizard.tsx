
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, ArrowLeft, ArrowRight, User, FileText, Code, CreditCard, Eye } from 'lucide-react';
import { PatientSelectionStep } from './ClaimWizard/PatientSelectionStep';
import { ServiceDetailsStep } from './ClaimWizard/ServiceDetailsStep';
import { DiagnosisStep } from './ClaimWizard/DiagnosisStep';
import { InsuranceStep } from './ClaimWizard/InsuranceStep';
import { ReviewStep } from './ClaimWizard/ReviewStep';

interface ClaimFormData {
  patient: any;
  serviceDate: string;
  procedures: Array<{
    cptCode: string;
    description: string;
    units: number;
    amount: number;
  }>;
  diagnoses: Array<{
    icdCode: string;
    description: string;
    primary: boolean;
  }>;
  insurance: {
    primary: any;
    secondary?: any;
    authNumber?: string;
  };
  provider: any;
  notes: string;
}

const steps = [
  { id: 1, title: 'Patient', icon: User, description: 'Select and verify patient' },
  { id: 2, title: 'Services', icon: FileText, description: 'Add procedures and services' },
  { id: 3, title: 'Diagnosis', icon: Code, description: 'Add diagnosis codes' },
  { id: 4, title: 'Insurance', icon: CreditCard, description: 'Insurance and billing info' },
  { id: 5, title: 'Review', icon: Eye, description: 'Review and submit' }
];

export function ClaimFormWizard({ onSubmit, onCancel }: { onSubmit: (data: ClaimFormData) => void; onCancel: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ClaimFormData>({
    patient: null,
    serviceDate: '',
    procedures: [],
    diagnoses: [],
    insurance: { primary: null },
    provider: null,
    notes: ''
  });

  const updateFormData = (stepData: Partial<ClaimFormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const isStepComplete = (stepId: number) => {
    switch (stepId) {
      case 1: return !!formData.patient;
      case 2: return formData.procedures.length > 0;
      case 3: return formData.diagnoses.length > 0;
      case 4: return !!formData.insurance.primary;
      case 5: return true;
      default: return false;
    }
  };

  const currentStepData = steps[currentStep - 1];
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header with Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Create New Claim</CardTitle>
            <Badge variant="outline">Step {currentStep} of {steps.length}</Badge>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {/* Step Navigation */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = isStepComplete(step.id);
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                isActive ? 'bg-blue-50 border-blue-200' : 
                isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
              }`}>
                {isCompleted && !isActive ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                )}
                <div>
                  <p className={`font-medium ${isActive ? 'text-blue-900' : 'text-gray-700'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-12 h-px bg-gray-200 mx-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <currentStepData.icon className="h-5 w-5 mr-2" />
            {currentStepData.title}: {currentStepData.description}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <PatientSelectionStep 
              data={formData} 
              onUpdate={updateFormData} 
            />
          )}
          {currentStep === 2 && (
            <ServiceDetailsStep 
              data={formData} 
              onUpdate={updateFormData} 
            />
          )}
          {currentStep === 3 && (
            <DiagnosisStep 
              data={formData} 
              onUpdate={updateFormData} 
            />
          )}
          {currentStep === 4 && (
            <InsuranceStep 
              data={formData} 
              onUpdate={updateFormData} 
            />
          )}
          {currentStep === 5 && (
            <ReviewStep 
              data={formData} 
              onUpdate={updateFormData} 
            />
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <div className="space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          {currentStep > 1 && (
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          )}
        </div>
        <div>
          {currentStep < steps.length ? (
            <Button 
              onClick={nextStep} 
              disabled={!isStepComplete(currentStep)}
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Submit Claim
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
