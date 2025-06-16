
import { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PatientRegistrationForm } from '@/components/Patients/PatientRegistrationForm';
import { MedicalHistoryForm } from '@/components/Patients/MedicalHistoryForm';
import { PatientSearchSystem } from '@/components/Patients/PatientSearchSystem';
import { PatientDashboard } from '@/components/Patients/PatientDashboard';
import { 
  Users, 
  Plus, 
  FileText,
  Edit,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';

// Expanded patient data structure
const patients = [
  {
    id: 'PT-001',
    name: 'John Smith',
    age: 45,
    dateOfBirth: '1979-03-15',
    phone: '(555) 123-4567',
    email: 'john.smith@email.com',
    address: '123 Main St, Anytown, ST 12345',
    lastVisit: '2024-01-15',
    status: 'active' as const,
    insurance: 'Aetna',
    nextAppointment: '2024-01-20',
    emergencyContact: {
      name: 'Jane Smith',
      phone: '(555) 123-4568',
      relation: 'Spouse'
    },
    medicalInfo: {
      allergies: ['Penicillin', 'Peanuts'],
      medications: ['Metformin 500mg', 'Lisinopril 10mg'],
      conditions: ['Type 2 Diabetes', 'Hypertension']
    },
    appointments: [
      {
        date: '2024-01-20',
        time: '10:00 AM',
        type: 'Follow-up',
        status: 'confirmed',
        provider: 'Dr. Johnson'
      },
      {
        date: '2024-01-15',
        time: '2:00 PM',
        type: 'Consultation',
        status: 'completed',
        provider: 'Dr. Smith'
      }
    ],
    documents: [
      {
        name: 'Lab Results - Blood Panel',
        type: 'Lab Report',
        date: '2024-01-15'
      },
      {
        name: 'Insurance Card',
        type: 'Insurance',
        date: '2024-01-01'
      }
    ]
  },
  {
    id: 'PT-002',
    name: 'Sarah Johnson',
    age: 32,
    dateOfBirth: '1992-07-22',
    phone: '(555) 987-6543',
    email: 'sarah.j@email.com',
    address: '456 Oak Ave, Somewhere, ST 67890',
    lastVisit: '2024-01-10',
    status: 'active' as const,
    insurance: 'BCBS',
    nextAppointment: '2024-01-22',
    emergencyContact: {
      name: 'Michael Johnson',
      phone: '(555) 987-6544',
      relation: 'Husband'
    },
    medicalInfo: {
      allergies: ['Latex'],
      medications: ['Birth Control'],
      conditions: ['Asthma']
    },
    appointments: [
      {
        date: '2024-01-22',
        time: '11:30 AM',
        type: 'Annual Physical',
        status: 'confirmed',
        provider: 'Dr. Williams'
      }
    ],
    documents: [
      {
        name: 'Annual Physical Report',
        type: 'Medical Report',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: 'PT-003',
    name: 'Michael Brown',
    age: 67,
    dateOfBirth: '1957-11-08',
    phone: '(555) 456-7890',
    email: 'mbrown@email.com',
    address: '789 Pine St, Elsewhere, ST 13579',
    lastVisit: '2024-01-05',
    status: 'inactive' as const,
    insurance: 'Medicare',
    nextAppointment: null,
    emergencyContact: {
      name: 'Linda Brown',
      phone: '(555) 456-7891',
      relation: 'Daughter'
    },
    medicalInfo: {
      allergies: ['Codeine'],
      medications: ['Warfarin 5mg', 'Metoprolol 25mg'],
      conditions: ['Atrial Fibrillation', 'Arthritis']
    },
    appointments: [
      {
        date: '2024-01-05',
        time: '3:00 PM',
        type: 'Cardiology',
        status: 'completed',
        provider: 'Dr. Chen'
      }
    ],
    documents: [
      {
        name: 'EKG Results',
        type: 'Cardiac Test',
        date: '2024-01-05'
      }
    ]
  }
];

export default function Patients() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<typeof patients[0] | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'dashboard'>('list');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handlePatientRegistration = (data: any) => {
    console.log('New patient registration:', data);
    setShowRegistrationForm(false);
    // In a real app, this would save to the database
  };

  const handleMedicalHistorySubmit = (data: any) => {
    console.log('Medical history submitted:', data);
    setShowMedicalHistory(false);
    // In a real app, this would save to the database
  };

  const handlePatientSelect = (patient: typeof patients[0]) => {
    setSelectedPatient(patient);
    setViewMode('dashboard');
  };

  const handleBackToList = () => {
    setSelectedPatient(null);
    setViewMode('list');
  };

  if (viewMode === 'dashboard' && selectedPatient) {
    return (
      <MainLayout>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleBackToList}>
              ← Back to Patient List
            </Button>
          </div>
          
          <PatientDashboard
            patient={selectedPatient}
            onEdit={() => console.log('Edit patient')}
            onScheduleAppointment={() => console.log('Schedule appointment')}
            onViewMedicalHistory={() => setShowMedicalHistory(true)}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
            <p className="text-gray-600 mt-1">Comprehensive patient management and records</p>
          </div>
          <Button onClick={() => setShowRegistrationForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Register New Patient
          </Button>
        </div>

        {/* Patient Search and Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Patient Directory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PatientSearchSystem
              patients={patients}
              onPatientSelect={handlePatientSelect}
            />
          </CardContent>
        </Card>

        {/* Patient Registration Dialog */}
        <Dialog open={showRegistrationForm} onOpenChange={setShowRegistrationForm}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Register New Patient</DialogTitle>
            </DialogHeader>
            <PatientRegistrationForm
              onSubmit={handlePatientRegistration}
              onCancel={() => setShowRegistrationForm(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Medical History Dialog */}
        <Dialog open={showMedicalHistory} onOpenChange={setShowMedicalHistory}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Medical History</DialogTitle>
            </DialogHeader>
            <MedicalHistoryForm
              onSubmit={handleMedicalHistorySubmit}
              onCancel={() => setShowMedicalHistory(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
}
