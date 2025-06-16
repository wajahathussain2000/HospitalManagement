
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2, Search, Star } from 'lucide-react';
import { CodeLookupModal } from '../CodeLookupModal';

const commonDiagnoses = [
  { code: 'Z00.00', description: 'Encounter for general adult medical examination without abnormal findings' },
  { code: 'I10', description: 'Essential hypertension' },
  { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications' },
  { code: 'M25.511', description: 'Pain in right shoulder' }
];

interface DiagnosisStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function DiagnosisStep({ data, onUpdate }: DiagnosisStepProps) {
  const [diagnoses, setDiagnoses] = useState(data.diagnoses || []);
  const [isCodeLookupOpen, setIsCodeLookupOpen] = useState(false);

  const addDiagnosis = (diagnosis: any) => {
    const newDiagnoses = [...diagnoses, { ...diagnosis, id: Date.now() }];
    setDiagnoses(newDiagnoses);
    onUpdate({ diagnoses: newDiagnoses });
  };

  const removeDiagnosis = (id: number) => {
    const newDiagnoses = diagnoses.filter((d: any) => d.id !== id);
    setDiagnoses(newDiagnoses);
    onUpdate({ diagnoses: newDiagnoses });
  };

  const setPrimaryDiagnosis = (id: number) => {
    const newDiagnoses = diagnoses.map((d: any) => ({
      ...d,
      primary: d.id === id
    }));
    setDiagnoses(newDiagnoses);
    onUpdate({ diagnoses: newDiagnoses });
  };

  return (
    <div className="space-y-6">
      {/* Quick Add Common Diagnoses */}
      <div className="space-y-3">
        <h3 className="font-medium">Quick Add Common Diagnoses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonDiagnoses.map((diagnosis) => (
            <Card key={diagnosis.code} className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{diagnosis.code}</p>
                    <p className="text-sm text-gray-600">{diagnosis.description}</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => addDiagnosis({ ...diagnosis, icdCode: diagnosis.code, primary: diagnoses.length === 0 })}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Diagnosis Lookup */}
      <div className="space-y-2">
        <Button 
          variant="outline" 
          onClick={() => setIsCodeLookupOpen(true)}
          className="w-full"
        >
          <Search className="h-4 w-4 mr-2" />
          Search ICD-10 Codes
        </Button>
      </div>

      {/* Added Diagnoses */}
      {diagnoses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Selected Diagnoses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {diagnoses.map((diagnosis: any, index: number) => (
              <div key={diagnosis.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="flex items-center space-x-2">
                    <Badge>{diagnosis.icdCode}</Badge>
                    {diagnosis.primary && (
                      <Badge variant="default" className="bg-blue-100 text-blue-800">
                        <Star className="h-3 w-3 mr-1" />
                        Primary
                      </Badge>
                    )}
                  </div>
                  <span className="font-medium">{diagnosis.description}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={diagnosis.primary}
                      onCheckedChange={() => setPrimaryDiagnosis(diagnosis.id)}
                    />
                    <span className="text-sm text-gray-600">Primary</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeDiagnosis(diagnosis.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {diagnoses.length === 0 && (
        <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
          <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No diagnoses added yet.</p>
          <p className="text-sm">Add at least one diagnosis to continue.</p>
        </div>
      )}

      <CodeLookupModal
        isOpen={isCodeLookupOpen}
        onClose={() => setIsCodeLookupOpen(false)}
        onSelect={addDiagnosis}
        type="icd"
      />
    </div>
  );
}
