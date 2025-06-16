
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Search, Calendar, DollarSign } from 'lucide-react';
import { CodeLookupModal } from '../CodeLookupModal';

const commonProcedures = [
  { code: '99213', description: 'Office visit, established patient, 15 min', amount: 150 },
  { code: '99214', description: 'Office visit, established patient, 25 min', amount: 200 },
  { code: '90834', description: 'Psychotherapy, 45 minutes', amount: 180 },
  { code: '97110', description: 'Therapeutic exercise, 15 minutes', amount: 85 }
];

interface ServiceDetailsStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function ServiceDetailsStep({ data, onUpdate }: ServiceDetailsStepProps) {
  const [procedures, setProcedures] = useState(data.procedures || []);
  const [serviceDate, setServiceDate] = useState(data.serviceDate || '');
  const [notes, setNotes] = useState(data.notes || '');
  const [isCodeLookupOpen, setIsCodeLookupOpen] = useState(false);

  const addProcedure = (procedure: any) => {
    const newProcedures = [...procedures, { ...procedure, id: Date.now() }];
    setProcedures(newProcedures);
    updateFormData({ procedures: newProcedures });
  };

  const removeProcedure = (id: number) => {
    const newProcedures = procedures.filter((p: any) => p.id !== id);
    setProcedures(newProcedures);
    updateFormData({ procedures: newProcedures });
  };

  const updateFormData = (updates: any) => {
    onUpdate({
      procedures,
      serviceDate,
      notes,
      ...updates
    });
  };

  const handleServiceDateChange = (date: string) => {
    setServiceDate(date);
    updateFormData({ serviceDate: date });
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    updateFormData({ notes: value });
  };

  const totalAmount = procedures.reduce((sum: number, proc: any) => sum + (proc.amount * proc.units), 0);

  return (
    <div className="space-y-6">
      {/* Service Date */}
      <div className="space-y-2">
        <Label htmlFor="serviceDate">Date of Service *</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="serviceDate"
            type="date"
            value={serviceDate}
            onChange={(e) => handleServiceDateChange(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      {/* Quick Add Common Procedures */}
      <div className="space-y-3">
        <h3 className="font-medium">Quick Add Common Procedures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonProcedures.map((proc) => (
            <Card key={proc.code} className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{proc.code}</p>
                    <p className="text-sm text-gray-600">{proc.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">${proc.amount}</p>
                    <Button 
                      size="sm" 
                      onClick={() => addProcedure({ ...proc, cptCode: proc.code, units: 1 })}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Procedure Lookup */}
      <div className="space-y-2">
        <Button 
          variant="outline" 
          onClick={() => setIsCodeLookupOpen(true)}
          className="w-full"
        >
          <Search className="h-4 w-4 mr-2" />
          Search CPT Codes
        </Button>
      </div>

      {/* Added Procedures */}
      {procedures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Selected Procedures</span>
              <Badge variant="outline">
                Total: ${totalAmount.toFixed(2)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {procedures.map((proc: any) => (
              <div key={proc.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Badge>{proc.cptCode}</Badge>
                    <span className="font-medium">{proc.description}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Units: {proc.units} × ${proc.amount} = ${(proc.units * proc.amount).toFixed(2)}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeProcedure(proc.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Service Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes">Service Notes</Label>
        <Textarea
          id="notes"
          placeholder="Add any additional notes about the services provided..."
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={4}
        />
      </div>

      <CodeLookupModal
        isOpen={isCodeLookupOpen}
        onClose={() => setIsCodeLookupOpen(false)}
        onSelect={addProcedure}
        type="cpt"
      />
    </div>
  );
}
