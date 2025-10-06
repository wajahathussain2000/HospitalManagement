import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Thermometer, 
  Activity, 
  Weight,
  Save,
  X,
  TrendingUp,
  TrendingDown,
  AlertCircle
} from 'lucide-react';

interface VitalSignsData {
  bloodPressureSystolic: string;
  bloodPressureDiastolic: string;
  heartRate: string;
  temperature: string;
  respiratoryRate: string;
  oxygenSaturation: string;
  weight: string;
  height: string;
  bmi: string;
  notes: string;
  recordedAt: string;
}

interface VitalSignsFormProps {
  patientId: string;
  patientName: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (vitals: VitalSignsData) => void;
}

export function VitalSignsForm({ 
  patientId, 
  patientName, 
  isOpen, 
  onClose, 
  onSave 
}: VitalSignsFormProps) {
  const [formData, setFormData] = useState<VitalSignsData>({
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    heartRate: '',
    temperature: '',
    respiratoryRate: '',
    oxygenSaturation: '',
    weight: '',
    height: '',
    bmi: '',
    notes: '',
    recordedAt: new Date().toISOString().slice(0, 16)
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSave(formData);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Auto-calculate BMI if weight and height are provided
    if (field === 'weight' || field === 'height') {
      const weight = field === 'weight' ? parseFloat(value) : parseFloat(prev.weight);
      const height = field === 'height' ? parseFloat(value) : parseFloat(prev.height);
      
      if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        setFormData(prev => ({
          ...prev,
          bmi: bmi
        }));
      }
    }
  };

  const getBloodPressureStatus = (systolic: string, diastolic: string) => {
    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);
    
    if (!sys || !dia) return { status: 'normal', color: 'bg-gray-100 text-gray-800' };
    
    if (sys >= 140 || dia >= 90) return { status: 'high', color: 'bg-red-100 text-red-800' };
    if (sys >= 120 || dia >= 80) return { status: 'elevated', color: 'bg-yellow-100 text-yellow-800' };
    if (sys < 90 || dia < 60) return { status: 'low', color: 'bg-blue-100 text-blue-800' };
    return { status: 'normal', color: 'bg-green-100 text-green-800' };
  };

  const getBMICategory = (bmi: string) => {
    const bmiValue = parseFloat(bmi);
    if (!bmiValue) return { category: 'Unknown', color: 'bg-gray-100 text-gray-800' };
    
    if (bmiValue < 18.5) return { category: 'Underweight', color: 'bg-blue-100 text-blue-800' };
    if (bmiValue < 25) return { category: 'Normal', color: 'bg-green-100 text-green-800' };
    if (bmiValue < 30) return { category: 'Overweight', color: 'bg-yellow-100 text-yellow-800' };
    return { category: 'Obese', color: 'bg-red-100 text-red-800' };
  };

  const bpStatus = getBloodPressureStatus(formData.bloodPressureSystolic, formData.bloodPressureDiastolic);
  const bmiCategory = getBMICategory(formData.bmi);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Heart className="h-6 w-6 mr-2" />
            Record Vital Signs
          </DialogTitle>
          <p className="text-sm text-gray-600">Recording vitals for {patientName}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cardiovascular */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Cardiovascular
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="bloodPressureSystolic">Blood Pressure (Systolic)</Label>
                  <Input
                    id="bloodPressureSystolic"
                    type="number"
                    value={formData.bloodPressureSystolic}
                    onChange={(e) => handleInputChange('bloodPressureSystolic', e.target.value)}
                    placeholder="120"
                  />
                </div>
                <div>
                  <Label htmlFor="bloodPressureDiastolic">Blood Pressure (Diastolic)</Label>
                  <Input
                    id="bloodPressureDiastolic"
                    type="number"
                    value={formData.bloodPressureDiastolic}
                    onChange={(e) => handleInputChange('bloodPressureDiastolic', e.target.value)}
                    placeholder="80"
                  />
                </div>
                <div>
                  <Label htmlFor="heartRate">Heart Rate (BPM)</Label>
                  <Input
                    id="heartRate"
                    type="number"
                    value={formData.heartRate}
                    onChange={(e) => handleInputChange('heartRate', e.target.value)}
                    placeholder="72"
                  />
                </div>
              </div>
              
              {formData.bloodPressureSystolic && formData.bloodPressureDiastolic && (
                <div className="flex items-center space-x-2">
                  <Badge className={bpStatus.color}>
                    {bpStatus.status.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Blood Pressure: {formData.bloodPressureSystolic}/{formData.bloodPressureDiastolic} mmHg
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Respiratory */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Respiratory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="temperature">Temperature (°F)</Label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1"
                    value={formData.temperature}
                    onChange={(e) => handleInputChange('temperature', e.target.value)}
                    placeholder="98.6"
                  />
                </div>
                <div>
                  <Label htmlFor="respiratoryRate">Respiratory Rate (per min)</Label>
                  <Input
                    id="respiratoryRate"
                    type="number"
                    value={formData.respiratoryRate}
                    onChange={(e) => handleInputChange('respiratoryRate', e.target.value)}
                    placeholder="16"
                  />
                </div>
                <div>
                  <Label htmlFor="oxygenSaturation">Oxygen Saturation (%)</Label>
                  <Input
                    id="oxygenSaturation"
                    type="number"
                    value={formData.oxygenSaturation}
                    onChange={(e) => handleInputChange('oxygenSaturation', e.target.value)}
                    placeholder="98"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Physical Measurements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Weight className="h-5 w-5 mr-2" />
                Physical Measurements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    placeholder="150"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    placeholder="170"
                  />
                </div>
                <div>
                  <Label htmlFor="bmi">BMI (Auto-calculated)</Label>
                  <Input
                    id="bmi"
                    value={formData.bmi}
                    readOnly
                    className="bg-gray-50"
                  />
                </div>
              </div>
              
              {formData.bmi && (
                <div className="flex items-center space-x-2">
                  <Badge className={bmiCategory.color}>
                    {bmiCategory.category}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    BMI: {formData.bmi}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="recordedAt">Recorded At</Label>
                <Input
                  id="recordedAt"
                  type="datetime-local"
                  value={formData.recordedAt}
                  onChange={(e) => handleInputChange('recordedAt', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="notes">Notes</Label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any additional observations or notes..."
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Vital Signs'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
