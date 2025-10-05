export interface Patient {
  id: string;
  patientId: string; // Unique patient number
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  phone: string;
  email?: string;
  address: string;
  emergencyContact: string;
  emergencyContactPhone: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  allergies?: string[];
  medicalHistory?: string[];
  currentMedications?: string[];
  insuranceProvider?: string;
  insuranceNumber?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  profileImage?: string;
  occupation?: string;
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
  nationality?: string;
  religion?: string;
}

export interface PatientVitalSigns {
  id: string;
  patientId: string;
  recordedBy: string;
  recordedAt: Date;
  bloodPressure?: string;
  heartRate?: number;
  temperature?: number;
  respiratoryRate?: number;
  oxygenSaturation?: number;
  weight?: number;
  height?: number;
  bmi?: number;
  notes?: string;
}

export interface PatientMedicalHistory {
  id: string;
  patientId: string;
  condition: string;
  diagnosis: string;
  treatment: string;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  doctorId: string;
  notes?: string;
}
