export interface Doctor {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  specialization: DoctorSpecialization;
  department: string;
  licenseNumber: string;
  experience: number; // years
  consultationFee: number;
  isActive: boolean;
  workingHours: {
    start: string;
    end: string;
    days: string[]; // ['Monday', 'Tuesday', etc.]
  };
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  qualifications: string[];
  certifications: string[];
  createdAt: string;
  lastLogin?: string;
}

export enum DoctorSpecialization {
  CARDIOLOGY = 'Cardiology',
  NEUROLOGY = 'Neurology',
  ORTHOPEDICS = 'Orthopedics',
  PEDIATRICS = 'Pediatrics',
  EMERGENCY = 'Emergency Medicine',
  SURGERY = 'General Surgery',
  DERMATOLOGY = 'Dermatology',
  PSYCHIATRY = 'Psychiatry',
  RADIOLOGY = 'Radiology',
  ANESTHESIOLOGY = 'Anesthesiology',
  ONCOLOGY = 'Oncology',
  GYNECOLOGY = 'Gynecology',
  UROLOGY = 'Urology',
  OPHTHALMOLOGY = 'Ophthalmology',
  ENT = 'ENT (Ear, Nose, Throat)',
  ENDOCRINOLOGY = 'Endocrinology',
  GASTROENTEROLOGY = 'Gastroenterology',
  PULMONOLOGY = 'Pulmonology',
  NEPHROLOGY = 'Nephrology',
  RHEUMATOLOGY = 'Rheumatology'
}

export interface DoctorSession {
  doctorId: string;
  specialization: DoctorSpecialization;
  department: string;
  permissions: string[];
  loginTime: string;
  lastActivity: string;
  ipAddress: string;
  userAgent: string;
}
