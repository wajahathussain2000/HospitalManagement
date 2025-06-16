
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  FileText, 
  Activity, 
  Calendar, 
  Pill, 
  AlertTriangle,
  Heart,
  Thermometer,
  Weight,
  Ruler
} from 'lucide-react';
import { SOAPNotes } from './SOAPNotes';
import { VitalSigns } from './VitalSigns';
import { VoiceTranscription } from './VoiceTranscription';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  allergies: string[];
  medications: string[];
  medicalHistory: string[];
  lastVisit: string;
}

interface ClinicalChartProps {
  patient: Patient;
}

export function ClinicalChart({ patient }: ClinicalChartProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
          <p className="text-gray-600">Age: {patient.age} • Gender: {patient.gender} • ID: {patient.id}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Follow-up
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            New Encounter
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vitals">Vitals</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                  Allergies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {patient.allergies.map((allergy, index) => (
                    <Badge key={index} variant="destructive" className="mr-2">
                      {allergy}
                    </Badge>
                  ))}
                  {patient.allergies.length === 0 && (
                    <p className="text-sm text-gray-500">No known allergies</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Pill className="h-4 w-4 mr-2 text-blue-500" />
                  Current Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {patient.medications.map((medication, index) => (
                    <p key={index} className="text-sm">{medication}</p>
                  ))}
                  {patient.medications.length === 0 && (
                    <p className="text-sm text-gray-500">No current medications</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Activity className="h-4 w-4 mr-2 text-green-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Last visit: {patient.lastVisit}</p>
                  <p className="text-sm text-gray-600">Annual physical exam completed</p>
                  <p className="text-sm text-gray-600">Lab results reviewed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vitals">
          <VitalSigns patientId={patient.id} />
        </TabsContent>

        <TabsContent value="notes">
          <SOAPNotes patientId={patient.id} />
        </TabsContent>

        <TabsContent value="medications">
          <Card>
            <CardHeader>
              <CardTitle>Medication Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patient.medications.map((medication, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{medication}</p>
                      <p className="text-sm text-gray-600">Active prescription</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Refill</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">
                  <Pill className="h-4 w-4 mr-2" />
                  Add New Medication
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Medical History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patient.medicalHistory.map((item, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
                {patient.medicalHistory.length === 0 && (
                  <p className="text-sm text-gray-500">No significant medical history</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <VoiceTranscription />
    </div>
  );
}
