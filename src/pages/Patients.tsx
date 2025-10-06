
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
import { EditPatientForm } from '@/components/Patients/EditPatientForm';
import { ScheduleAppointmentForm } from '@/components/Patients/ScheduleAppointmentForm';
import { VitalSignsForm } from '@/components/Patients/VitalSignsForm';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Plus, 
  FileText,
  Edit,
  Calendar,
  Phone,
  Mail,
  Settings,
  Search,
  Filter,
  X,
  Eye,
  MessageSquare,
  Stethoscope,
  CreditCard,
  AlertCircle,
  Clock,
  MapPin,
  Shield
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
    ],
    totalVisits: 12,
    outstandingBalance: 150.00,
    riskLevel: 'medium' as const,
    preferredProvider: 'Dr. Johnson'
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
    ],
    totalVisits: 8,
    outstandingBalance: 0,
    riskLevel: 'low' as const,
    preferredProvider: 'Dr. Williams'
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
    ],
    totalVisits: 25,
    outstandingBalance: 75.00,
    riskLevel: 'high' as const,
    preferredProvider: 'Dr. Chen'
  },
  {
    id: 'PT-004',
    name: 'Emily Davis',
    age: 28,
    dateOfBirth: '1996-05-12',
    phone: '(555) 456-7890',
    email: 'emily.davis@email.com',
    address: '321 Elm St, Newtown, ST 24680',
    lastVisit: '2024-01-20',
    status: 'active' as const,
    insurance: 'UnitedHealth',
    nextAppointment: '2024-02-25',
    emergencyContact: {
      name: 'Robert Davis',
      phone: '(555) 456-7891',
      relation: 'Father'
    },
    medicalInfo: {
      allergies: ['Peanuts'],
      medications: ['Albuterol'],
      conditions: ['Asthma']
    },
    appointments: [
      {
        date: '2024-02-25',
        time: '11:00 AM',
        type: 'Routine Checkup',
        status: 'confirmed',
        provider: 'Dr. Anderson'
      }
    ],
    documents: [
      {
        name: 'Insurance Card',
        type: 'Insurance',
        date: '2024-01-01'
      }
    ],
    totalVisits: 5,
    outstandingBalance: 0,
    riskLevel: 'low' as const,
    preferredProvider: 'Dr. Anderson'
  },
  {
    id: 'PT-005',
    name: 'David Wilson',
    age: 52,
    dateOfBirth: '1972-09-30',
    phone: '(555) 567-8901',
    email: 'david.wilson@email.com',
    address: '654 Maple Dr, Springfield, ST 97531',
    lastVisit: '2024-01-18',
    status: 'active' as const,
    insurance: 'Cigna',
    nextAppointment: '2024-03-01',
    emergencyContact: {
      name: 'Susan Wilson',
      phone: '(555) 567-8902',
      relation: 'Wife'
    },
    medicalInfo: {
      allergies: [],
      medications: ['Simvastatin', 'Amlodipine'],
      conditions: ['High Cholesterol', 'Hypertension']
    },
    appointments: [
      {
        date: '2024-03-01',
        time: '9:00 AM',
        type: 'Cardiology Consultation',
        status: 'confirmed',
        provider: 'Dr. Thompson'
      }
    ],
    documents: [
      {
        name: 'Insurance Card',
        type: 'Insurance',
        date: '2024-01-01'
      },
      {
        name: 'Lab Results',
        type: 'Medical Records',
        date: '2024-01-18'
      }
    ],
    totalVisits: 18,
    outstandingBalance: 225.50,
    riskLevel: 'medium' as const,
    preferredProvider: 'Dr. Thompson'
  }
];

export default function Patients() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<typeof patients[0] | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'dashboard'>('list');
  
  // New form states
  const [showEditPatient, setShowEditPatient] = useState(false);
  const [showScheduleAppointment, setShowScheduleAppointment] = useState(false);
  const [showVitalSigns, setShowVitalSigns] = useState(false);
  const [showProgressNotes, setShowProgressNotes] = useState(false);
  const [showTreatmentPlan, setShowTreatmentPlan] = useState(false);
  const [showMessaging, setShowMessaging] = useState(false);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);

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

  const handleEditPatient = () => {
    setShowEditPatient(true);
  };

  const handleScheduleAppointment = () => {
    setShowScheduleAppointment(true);
  };

  const handleViewMedicalHistory = () => {
    setShowMedicalHistory(true);
  };

  const handleVitalSigns = () => {
    setShowVitalSigns(true);
  };

  const handleProgressNotes = () => {
    setShowProgressNotes(true);
  };

  const handleTreatmentPlan = () => {
    setShowTreatmentPlan(true);
  };

  const handleSendMessage = () => {
    setShowMessaging(true);
  };

  const handleVerifyCoverage = () => {
    console.log('Verifying coverage for:', selectedPatient?.id);
    // In a real app, this would make an API call to verify insurance
    alert(`Insurance coverage verified for ${selectedPatient?.name}`);
  };

  const handleDownloadCard = () => {
    console.log('Downloading insurance card for:', selectedPatient?.id);
    // In a real app, this would generate and download the insurance card
    alert(`Insurance card downloaded for ${selectedPatient?.name}`);
  };

  const handleUploadDocument = () => {
    setShowDocumentUpload(true);
  };

  const handleViewDocument = (documentName: string) => {
    console.log('Viewing document:', documentName);
    // In a real app, this would open the document viewer
    alert(`Opening document: ${documentName}`);
  };

  const handleDownloadDocument = (documentName: string) => {
    console.log('Downloading document:', documentName);
    // In a real app, this would download the document
    alert(`Downloading document: ${documentName}`);
  };

  // New handlers for form submissions
  const handleEditPatientSave = (updatedPatient: any) => {
    console.log('Patient updated:', updatedPatient);
    setShowEditPatient(false);
    // In a real app, this would update the patient in the database
    alert(`Patient ${updatedPatient.name} updated successfully!`);
  };

  const handleAppointmentScheduled = (appointment: any) => {
    console.log('Appointment scheduled:', appointment);
    setShowScheduleAppointment(false);
    // In a real app, this would save the appointment to the database
    alert(`Appointment scheduled for ${appointment.date} at ${appointment.time} with ${appointment.provider}`);
  };

  const handleVitalSignsSaved = (vitals: any) => {
    console.log('Vital signs saved:', vitals);
    setShowVitalSigns(false);
    // In a real app, this would save the vital signs to the database
    alert(`Vital signs recorded successfully for ${selectedPatient?.name}`);
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
            onEdit={handleEditPatient}
            onScheduleAppointment={handleScheduleAppointment}
            onViewMedicalHistory={handleViewMedicalHistory}
            onVitalSigns={handleVitalSigns}
            onProgressNotes={handleProgressNotes}
            onTreatmentPlan={handleTreatmentPlan}
            onSendMessage={handleSendMessage}
            onVerifyCoverage={handleVerifyCoverage}
            onDownloadCard={handleDownloadCard}
            onUploadDocument={handleUploadDocument}
            onViewDocument={handleViewDocument}
            onDownloadDocument={handleDownloadDocument}
          />

          {/* Real Working Forms */}
          {selectedPatient && (
            <>
              <EditPatientForm
                patient={selectedPatient}
                isOpen={showEditPatient}
                onClose={() => setShowEditPatient(false)}
                onSave={handleEditPatientSave}
              />
              
              <ScheduleAppointmentForm
                patientId={selectedPatient.id}
                patientName={selectedPatient.name}
                isOpen={showScheduleAppointment}
                onClose={() => setShowScheduleAppointment(false)}
                onSchedule={handleAppointmentScheduled}
              />
              
              <VitalSignsForm
                patientId={selectedPatient.id}
                patientName={selectedPatient.name}
                isOpen={showVitalSigns}
                onClose={() => setShowVitalSigns(false)}
                onSave={handleVitalSignsSaved}
              />
            </>
          )}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
          <div className={cn(isRTL && "text-right")}>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('patient.patientManagement')}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{t('patient.comprehensiveManagement')}</p>
          </div>
          <Button onClick={() => setShowRegistrationForm(true)} className={cn(isRTL && "flex-row-reverse")}>
            <Plus className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
            {t('patient.addPatient')}
          </Button>
        </div>

        {/* Enhanced Patient Directory */}
        <Card className="shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-4">
            <div className={cn("flex items-center justify-between", isRTL && "flex-row-reverse")}>
              <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-3" : "space-x-3")}>
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className={cn(isRTL && "text-right")}>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{t('patient.patientList')}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('patient.manageEfficiently')}</p>
                </div>
              </div>
              <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
                <Button variant="outline" size="sm" className={cn(isRTL && "flex-row-reverse")}>
                  <FileText className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                  {t('patient.exportPatients')}
                </Button>
                <Button variant="outline" size="sm" className={cn(isRTL && "flex-row-reverse")}>
                  <Settings className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                  {t('settings.settings')}
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <PatientSearchSystem
              patients={patients}
              onPatientSelect={handlePatientSelect}
            />
          </CardContent>
        </Card>

        {/* Patient Registration Dialog */}
        <Dialog open={showRegistrationForm} onOpenChange={setShowRegistrationForm}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-gray-100">{t('patient.patientRegistration')}</DialogTitle>
            </DialogHeader>
            <PatientRegistrationForm
              onSubmit={handlePatientRegistration}
              onCancel={() => setShowRegistrationForm(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Medical History Dialog */}
        <Dialog open={showMedicalHistory} onOpenChange={setShowMedicalHistory}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-gray-100">{t('patient.medicalHistory')}</DialogTitle>
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
