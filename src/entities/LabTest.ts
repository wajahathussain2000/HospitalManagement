export interface LabTest {
  id: string;
  testName: string;
  testCode: string;
  category: LabTestCategory;
  description?: string;
  normalRange?: string;
  unit?: string;
  isActive: boolean;
  price: number;
  duration: number; // in hours
  requiresFasting?: boolean;
  preparationInstructions?: string;
  sampleType: SampleType;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export enum LabTestCategory {
  BLOOD = 'blood',
  URINE = 'urine',
  STOOL = 'stool',
  SPUTUM = 'sputum',
  TISSUE = 'tissue',
  CULTURE = 'culture',
  HORMONE = 'hormone',
  IMMUNOLOGY = 'immunology',
  MICROBIOLOGY = 'microbiology',
  OTHER = 'other'
}

export enum SampleType {
  BLOOD = 'blood',
  URINE = 'urine',
  STOOL = 'stool',
  SPUTUM = 'sputum',
  TISSUE = 'tissue',
  SWAB = 'swab',
  CEREBROSPINAL_FLUID = 'cerebrospinal_fluid',
  OTHER = 'other'
}

export interface LabTestOrder {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  orderDate: Date;
  status: LabTestOrderStatus;
  priority: 'routine' | 'urgent' | 'stat';
  notes?: string;
  tests: LabTestOrderItem[];
  sampleCollectedAt?: Date;
  sampleCollectedBy?: string;
  resultsReadyAt?: Date;
  resultsVerifiedAt?: Date;
  resultsVerifiedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum LabTestOrderStatus {
  ORDERED = 'ordered',
  SAMPLE_COLLECTED = 'sample_collected',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  REJECTED = 'rejected'
}

export interface LabTestOrderItem {
  id: string;
  orderId: string;
  testId: string;
  status: LabTestOrderStatus;
  result?: string;
  normalRange?: string;
  unit?: string;
  isAbnormal?: boolean;
  notes?: string;
  completedAt?: Date;
  completedBy?: string;
}

export interface LabTestResult {
  id: string;
  orderId: string;
  testId: string;
  result: string;
  normalRange?: string;
  unit?: string;
  isAbnormal: boolean;
  notes?: string;
  completedAt: Date;
  completedBy: string;
  verifiedAt?: Date;
  verifiedBy?: string;
  reportFile?: string;
}
