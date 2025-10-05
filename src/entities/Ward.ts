export interface Ward {
  id: string;
  name: string;
  type: WardType;
  departmentId: string;
  capacity: number;
  currentOccupancy: number;
  isActive: boolean;
  location?: string;
  phone?: string;
  headNurseId?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum WardType {
  GENERAL = 'general',
  ICU = 'icu',
  CCU = 'ccu',
  NICU = 'nicu',
  PICU = 'picu',
  EMERGENCY = 'emergency',
  SURGICAL = 'surgical',
  MEDICAL = 'medical',
  PEDIATRIC = 'pediatric',
  MATERNITY = 'maternity',
  PSYCHIATRIC = 'psychiatric',
  ISOLATION = 'isolation'
}

export interface Bed {
  id: string;
  wardId: string;
  bedNumber: string;
  bedType: BedType;
  isOccupied: boolean;
  isActive: boolean;
  patientId?: string;
  admissionId?: string;
  lastCleanedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum BedType {
  GENERAL = 'general',
  PRIVATE = 'private',
  SEMI_PRIVATE = 'semi_private',
  ICU = 'icu',
  CCU = 'ccu',
  NICU = 'nicu',
  PICU = 'picu',
  ISOLATION = 'isolation',
  EMERGENCY = 'emergency'
}

export interface Admission {
  id: string;
  patientId: string;
  wardId: string;
  bedId: string;
  admissionDate: Date;
  dischargeDate?: Date;
  status: AdmissionStatus;
  admissionType: AdmissionType;
  reason: string;
  doctorId: string;
  notes?: string;
  emergencyContact?: string;
  insuranceDetails?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export enum AdmissionStatus {
  ADMITTED = 'admitted',
  DISCHARGED = 'discharged',
  TRANSFERRED = 'transferred',
  ABSENT = 'absent',
  DECEASED = 'deceased'
}

export enum AdmissionType {
  EMERGENCY = 'emergency',
  ELECTIVE = 'elective',
  TRANSFER = 'transfer',
  OBSERVATION = 'observation'
}
