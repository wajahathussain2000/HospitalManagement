
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Thermometer, 
  Weight, 
  Ruler, 
  Activity,
  TrendingUp,
  TrendingDown,
  Save
} from 'lucide-react';

interface VitalSignsProps {
  patientId: string;
}

interface VitalSign {
  temperature: string;
  bloodPressureSystolic: string;
  bloodPressureDiastolic: string;
  heartRate: string;
  respiratoryRate: string;
  oxygenSaturation: string;
  weight: string;
  height: string;
  bmi: string;
  painScore: string;
  timestamp: string;
}

export function VitalSigns({ patientId }: VitalSignsProps) {
  const [vitals, setVitals] = useState<VitalSign>({
    temperature: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    heartRate: '',
    respiratoryRate: '',
    oxygenSaturation: '',
    weight: '',
    height: '',
    bmi: '',
    painScore: '',
    timestamp: new Date().toISOString()
  });

  const [previousVitals] = useState<VitalSign[]>([
    {
      temperature: '98.6',
      bloodPressureSystolic: '120',
      bloodPressureDiastolic: '80',
      heartRate: '72',
      respiratoryRate: '16',
      oxygenSaturation: '98',
      weight: '150',
      height: '68',
      bmi: '22.8',
      painScore: '2',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      temperature: '99.1',
      bloodPressureSystolic: '125',
      bloodPressureDiastolic: '82',
      heartRate: '75',
      respiratoryRate: '18',
      oxygenSaturation: '97',
      weight: '152',
      height: '68',
      bmi: '23.1',
      painScore: '3',
      timestamp: '2024-01-10T14:15:00Z'
    }
  ]);

  const handleInputChange = (field: keyof VitalSign, value: string) => {
    setVitals(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-calculate BMI when weight or height changes
      if ((field === 'weight' || field === 'height') && updated.weight && updated.height) {
        const weightKg = parseFloat(updated.weight) * 0.453592; // lbs to kg
        const heightM = parseFloat(updated.height) * 0.0254; // inches to meters
        const bmi = weightKg / (heightM * heightM);
        updated.bmi = bmi.toFixed(1);
      }
      
      return updated;
    });
  };

  const saveVitals = () => {
    console.log('Saving vital signs for patient:', patientId, vitals);
    // Save logic would be implemented here
  };

  const getStatusColor = (value: string, normal: { min: number; max: number }) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '';
    
    if (numValue < normal.min || numValue > normal.max) {
      return 'text-red-600 bg-red-50 border-red-200';
    }
    return 'text-green-600 bg-green-50 border-green-200';
  };

  const getTrend = (current: string, previous: string) => {
    const curr = parseFloat(current);
    const prev = parseFloat(previous);
    
    if (isNaN(curr) || isNaN(prev)) return null;
    
    if (curr > prev) return <TrendingUp className="h-4 w-4 text-red-500" />;
    if (curr < prev) return <TrendingDown className="h-4 w-4 text-green-500" />;
    return <div className="h-4 w-4" />; // No change
  };

  const normalRanges = {
    temperature: { min: 97.0, max: 99.5 },
    heartRate: { min: 60, max: 100 },
    respiratoryRate: { min: 12, max: 20 },
    oxygenSaturation: { min: 95, max: 100 },
    systolic: { min: 90, max: 140 },
    diastolic: { min: 60, max: 90 }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Vital Signs</h3>
        <Button onClick={saveVitals}>
          <Save className="h-4 w-4 mr-2" />
          Save Vitals
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Thermometer className="h-4 w-4 mr-2 text-red-500" />
              Temperature (°F)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                value={vitals.temperature}
                onChange={(e) => handleInputChange('temperature', e.target.value)}
                placeholder="98.6"
                className={getStatusColor(vitals.temperature, normalRanges.temperature)}
              />
              {previousVitals[0] && getTrend(vitals.temperature, previousVitals[0].temperature)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal: 97.0-99.5°F</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              Blood Pressure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                value={vitals.bloodPressureSystolic}
                onChange={(e) => handleInputChange('bloodPressureSystolic', e.target.value)}
                placeholder="120"
                className={`w-20 ${getStatusColor(vitals.bloodPressureSystolic, normalRanges.systolic)}`}
              />
              <span>/</span>
              <Input
                value={vitals.bloodPressureDiastolic}
                onChange={(e) => handleInputChange('bloodPressureDiastolic', e.target.value)}
                placeholder="80"
                className={`w-20 ${getStatusColor(vitals.bloodPressureDiastolic, normalRanges.diastolic)}`}
              />
              {previousVitals[0] && getTrend(vitals.bloodPressureSystolic, previousVitals[0].bloodPressureSystolic)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal: 90-140/60-90</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Activity className="h-4 w-4 mr-2 text-blue-500" />
              Heart Rate (BPM)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                value={vitals.heartRate}
                onChange={(e) => handleInputChange('heartRate', e.target.value)}
                placeholder="72"
                className={getStatusColor(vitals.heartRate, normalRanges.heartRate)}
              />
              {previousVitals[0] && getTrend(vitals.heartRate, previousVitals[0].heartRate)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal: 60-100 BPM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Activity className="h-4 w-4 mr-2 text-green-500" />
              Respiratory Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                value={vitals.respiratoryRate}
                onChange={(e) => handleInputChange('respiratoryRate', e.target.value)}
                placeholder="16"
                className={getStatusColor(vitals.respiratoryRate, normalRanges.respiratoryRate)}
              />
              {previousVitals[0] && getTrend(vitals.respiratoryRate, previousVitals[0].respiratoryRate)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal: 12-20/min</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Activity className="h-4 w-4 mr-2 text-purple-500" />
              O2 Saturation (%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                value={vitals.oxygenSaturation}
                onChange={(e) => handleInputChange('oxygenSaturation', e.target.value)}
                placeholder="98"
                className={getStatusColor(vitals.oxygenSaturation, normalRanges.oxygenSaturation)}
              />
              {previousVitals[0] && getTrend(vitals.oxygenSaturation, previousVitals[0].oxygenSaturation)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal: 95-100%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <Weight className="h-4 w-4 mr-2 text-orange-500" />
              Weight & BMI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Input
                  value={vitals.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  placeholder="150"
                  className="w-20"
                />
                <span className="text-sm">lbs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  value={vitals.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  placeholder="68"
                  className="w-20"
                />
                <span className="text-sm">in</span>
              </div>
              {vitals.bmi && (
                <Badge variant="outline" className="text-xs">
                  BMI: {vitals.bmi}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {previousVitals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Previous Readings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Temp</th>
                    <th className="text-left p-2">BP</th>
                    <th className="text-left p-2">HR</th>
                    <th className="text-left p-2">RR</th>
                    <th className="text-left p-2">O2 Sat</th>
                    <th className="text-left p-2">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {previousVitals.map((vital, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{new Date(vital.timestamp).toLocaleDateString()}</td>
                      <td className="p-2">{vital.temperature}°F</td>
                      <td className="p-2">{vital.bloodPressureSystolic}/{vital.bloodPressureDiastolic}</td>
                      <td className="p-2">{vital.heartRate}</td>
                      <td className="p-2">{vital.respiratoryRate}</td>
                      <td className="p-2">{vital.oxygenSaturation}%</td>
                      <td className="p-2">{vital.weight} lbs</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
