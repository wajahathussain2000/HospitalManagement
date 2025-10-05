export interface RadiologyTest {
  id: string;
  testName: string;
  testCode: string;
  category: RadiologyCategory;
  description?: string;
  isActive: boolean;
  price: number;
  duration: number; // in minutes
  preparationInstructions?: string;
  contraindications?: string[];
  requiresContrast?: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export enum RadiologyCategory {
  X_RAY = 'x_ray',
  CT_SCAN = 'ct_scan',
  MRI = 'mri',
  ULTRASOUND = 'ultrasound',
  MAMMOGRAPHY = 'mammography',
  DEXA_SCAN = 'dexa_scan',
  NUCLEAR_MEDICINE = 'nuclear_medicine',
  FLUOROSCOPY = 'fluoroscopy',
  ANGIOGRAPHY = 'angiography',
  OTHER = 'other'
}

export interface RadiologyOrder {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  orderDate: Date;
  status: RadiologyOrderStatus;
  priority: 'routine' | 'urgent' | 'stat';
  clinicalHistory?: string;
  clinicalQuestion?: string;
  notes?: string;
  tests: RadiologyOrderItem[];
  scheduledAt?: Date;
  completedAt?: Date;
  reportReadyAt?: Date;
  reportVerifiedAt?: Date;
  reportVerifiedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum RadiologyOrderStatus {
  ORDERED = 'ordered',
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  REJECTED = 'rejected'
}

export interface RadiologyOrderItem {
  id: string;
  orderId: string;
  testId: string;
  status: RadiologyOrderStatus;
  bodyPart?: string;
  views?: string[];
  contrastUsed?: boolean;
  contrastType?: string;
  notes?: string;
  completedAt?: Date;
  completedBy?: string;
}

export interface RadiologyReport {
  id: string;
  orderId: string;
  testId: string;
  findings: string;
  impression: string;
  recommendations?: string;
  reportDate: Date;
  reportedBy: string;
  verifiedBy?: string;
  verifiedAt?: Date;
  images: RadiologyImage[];
  reportFile?: string;
  status: 'draft' | 'final' | 'amended';
}

export interface RadiologyImage {
  id: string;
  reportId: string;
  imageUrl: string;
  imageType: 'original' | 'processed' | 'annotated';
  description?: string;
  uploadedAt: Date;
  uploadedBy: string;
}
