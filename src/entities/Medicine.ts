export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  manufacturer: string;
  category: MedicineCategory;
  dosageForm: DosageForm;
  strength: string;
  unit: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  requiresPrescription: boolean;
  sideEffects?: string[];
  contraindications?: string[];
  drugInteractions?: string[];
}

export enum MedicineCategory {
  ANTIBIOTIC = 'antibiotic',
  ANALGESIC = 'analgesic',
  ANTIHISTAMINE = 'antihistamine',
  CARDIOVASCULAR = 'cardiovascular',
  DIABETES = 'diabetes',
  RESPIRATORY = 'respiratory',
  GASTROINTESTINAL = 'gastrointestinal',
  NEUROLOGICAL = 'neurological',
  VITAMIN = 'vitamin',
  OTHER = 'other'
}

export enum DosageForm {
  TABLET = 'tablet',
  CAPSULE = 'capsule',
  SYRUP = 'syrup',
  INJECTION = 'injection',
  CREAM = 'cream',
  OINTMENT = 'ointment',
  DROPS = 'drops',
  INHALER = 'inhaler',
  PATCH = 'patch',
  OTHER = 'other'
}

export interface MedicineStock {
  id: string;
  medicineId: string;
  batchNumber: string;
  expiryDate: Date;
  quantity: number;
  unitPrice: number;
  sellingPrice: number;
  supplier: string;
  purchaseDate: Date;
  isActive: boolean;
  location?: string;
  reorderLevel: number;
  minimumStock: number;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  prescriptionDate: Date;
  status: PrescriptionStatus;
  notes?: string;
  items: PrescriptionItem[];
  createdAt: Date;
  updatedAt: Date;
}

export enum PrescriptionStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  DISPENSED = 'dispensed',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired'
}

export interface PrescriptionItem {
  id: string;
  prescriptionId: string;
  medicineId: string;
  dosage: string;
  frequency: string;
  duration: string;
  quantity: number;
  instructions?: string;
  isDispensed: boolean;
  dispensedAt?: Date;
  dispensedBy?: string;
}
