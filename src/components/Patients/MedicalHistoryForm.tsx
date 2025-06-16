
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { X, Plus, FileText } from 'lucide-react';
import { useState } from 'react';

const medicalHistorySchema = z.object({
  currentMedications: z.array(z.object({
    name: z.string().min(1, 'Medication name is required'),
    dosage: z.string().min(1, 'Dosage is required'),
    frequency: z.string().min(1, 'Frequency is required'),
  })),
  allergies: z.array(z.object({
    allergen: z.string().min(1, 'Allergen is required'),
    reaction: z.string().min(1, 'Reaction is required'),
    severity: z.enum(['mild', 'moderate', 'severe']),
  })),
  medicalConditions: z.array(z.string()),
  surgicalHistory: z.array(z.object({
    procedure: z.string().min(1, 'Procedure is required'),
    date: z.string().min(1, 'Date is required'),
    hospital: z.string().min(1, 'Hospital is required'),
  })),
  familyHistory: z.object({
    diabetes: z.boolean(),
    heartDisease: z.boolean(),
    cancer: z.boolean(),
    hypertension: z.boolean(),
    stroke: z.boolean(),
    mentalHealth: z.boolean(),
    other: z.string().optional(),
  }),
  socialHistory: z.object({
    smoker: z.boolean(),
    alcoholUse: z.enum(['none', 'occasional', 'moderate', 'heavy']),
    exerciseFrequency: z.enum(['none', 'weekly', 'daily', '2-3times']),
    occupation: z.string().optional(),
  }),
});

type MedicalHistory = z.infer<typeof medicalHistorySchema>;

interface MedicalHistoryFormProps {
  onSubmit: (data: MedicalHistory) => void;
  onCancel: () => void;
  initialData?: Partial<MedicalHistory>;
}

export function MedicalHistoryForm({ onSubmit, onCancel, initialData }: MedicalHistoryFormProps) {
  const [newMedication, setNewMedication] = useState({ name: '', dosage: '', frequency: '' });
  const [newAllergy, setNewAllergy] = useState({ allergen: '', reaction: '', severity: 'mild' as const });
  const [newSurgery, setNewSurgery] = useState({ procedure: '', date: '', hospital: '' });

  const form = useForm<MedicalHistory>({
    resolver: zodResolver(medicalHistorySchema),
    defaultValues: {
      currentMedications: [],
      allergies: [],
      medicalConditions: [],
      surgicalHistory: [],
      familyHistory: {
        diabetes: false,
        heartDisease: false,
        cancer: false,
        hypertension: false,
        stroke: false,
        mentalHealth: false,
      },
      socialHistory: {
        smoker: false,
        alcoholUse: 'none',
        exerciseFrequency: 'none',
      },
      ...initialData,
    },
  });

  const commonConditions = [
    'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Arthritis',
    'Depression', 'Anxiety', 'Migraine', 'Back Pain', 'COPD'
  ];

  const addMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency) {
      const currentMeds = form.getValues('currentMedications');
      form.setValue('currentMedications', [...currentMeds, newMedication]);
      setNewMedication({ name: '', dosage: '', frequency: '' });
    }
  };

  const removeMedication = (index: number) => {
    const currentMeds = form.getValues('currentMedications');
    form.setValue('currentMedications', currentMeds.filter((_, i) => i !== index));
  };

  const addAllergy = () => {
    if (newAllergy.allergen && newAllergy.reaction) {
      const currentAllergies = form.getValues('allergies');
      form.setValue('allergies', [...currentAllergies, newAllergy]);
      setNewAllergy({ allergen: '', reaction: '', severity: 'mild' });
    }
  };

  const removeAllergy = (index: number) => {
    const currentAllergies = form.getValues('allergies');
    form.setValue('allergies', currentAllergies.filter((_, i) => i !== index));
  };

  const addSurgery = () => {
    if (newSurgery.procedure && newSurgery.date && newSurgery.hospital) {
      const currentSurgeries = form.getValues('surgicalHistory');
      form.setValue('surgicalHistory', [...currentSurgeries, newSurgery]);
      setNewSurgery({ procedure: '', date: '', hospital: '' });
    }
  };

  const removeSurgery = (index: number) => {
    const currentSurgeries = form.getValues('surgicalHistory');
    form.setValue('surgicalHistory', currentSurgeries.filter((_, i) => i !== index));
  };

  const toggleCondition = (condition: string) => {
    const currentConditions = form.getValues('medicalConditions');
    const hasCondition = currentConditions.includes(condition);
    
    if (hasCondition) {
      form.setValue('medicalConditions', currentConditions.filter(c => c !== condition));
    } else {
      form.setValue('medicalConditions', [...currentConditions, condition]);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Medical History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Current Medications */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Current Medications</h3>
                <div className="space-y-4">
                  {form.watch('currentMedications').map((medication, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{medication.name}</p>
                        <p className="text-sm text-gray-600">{medication.dosage} - {medication.frequency}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeMedication(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-4 gap-2">
                    <Input
                      placeholder="Medication name"
                      value={newMedication.name}
                      onChange={(e) => setNewMedication(prev => ({ ...prev, name: e.target.value }))}
                    />
                    <Input
                      placeholder="Dosage"
                      value={newMedication.dosage}
                      onChange={(e) => setNewMedication(prev => ({ ...prev, dosage: e.target.value }))}
                    />
                    <Input
                      placeholder="Frequency"
                      value={newMedication.frequency}
                      onChange={(e) => setNewMedication(prev => ({ ...prev, frequency: e.target.value }))}
                    />
                    <Button type="button" onClick={addMedication}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Allergies */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Allergies</h3>
                <div className="space-y-4">
                  {form.watch('allergies').map((allergy, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{allergy.allergen}</p>
                        <p className="text-sm text-gray-600">{allergy.reaction} - {allergy.severity}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAllergy(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-4 gap-2">
                    <Input
                      placeholder="Allergen"
                      value={newAllergy.allergen}
                      onChange={(e) => setNewAllergy(prev => ({ ...prev, allergen: e.target.value }))}
                    />
                    <Input
                      placeholder="Reaction"
                      value={newAllergy.reaction}
                      onChange={(e) => setNewAllergy(prev => ({ ...prev, reaction: e.target.value }))}
                    />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={newAllergy.severity}
                      onChange={(e) => setNewAllergy(prev => ({ ...prev, severity: e.target.value as 'mild' | 'moderate' | 'severe' }))}
                    >
                      <option value="mild">Mild</option>
                      <option value="moderate">Moderate</option>
                      <option value="severe">Severe</option>
                    </select>
                    <Button type="button" onClick={addAllergy}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Medical Conditions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Medical Conditions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {commonConditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={form.watch('medicalConditions').includes(condition)}
                        onCheckedChange={() => toggleCondition(condition)}
                      />
                      <Label htmlFor={condition}>{condition}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Family History */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Family History</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="familyHistory.diabetes"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Diabetes</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="familyHistory.heartDisease"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Heart Disease</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="familyHistory.cancer"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Cancer</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="familyHistory.hypertension"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Hypertension</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit">
                  Save Medical History
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
