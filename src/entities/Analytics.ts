export interface HospitalKPI {
  id: string;
  date: Date;
  totalAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  noShowAppointments: number;
  totalRevenue: number;
  totalPatients: number;
  newPatients: number;
  totalAdmissions: number;
  totalDischarges: number;
  bedOccupancyRate: number;
  averageWaitTime: number;
  patientSatisfactionScore?: number;
  departmentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PatientFlow {
  id: string;
  date: Date;
  hour: number;
  patientCount: number;
  departmentId?: string;
  wardId?: string;
  type: 'incoming' | 'outgoing' | 'waiting';
  createdAt: Date;
}

export interface RevenueAnalytics {
  id: string;
  date: Date;
  totalRevenue: number;
  consultationRevenue: number;
  labRevenue: number;
  pharmacyRevenue: number;
  radiologyRevenue: number;
  roomCharges: number;
  procedureRevenue: number;
  otherRevenue: number;
  departmentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResourceUtilization {
  id: string;
  date: Date;
  resourceType: 'doctor' | 'nurse' | 'bed' | 'equipment';
  resourceId: string;
  utilizationRate: number; // percentage
  totalCapacity: number;
  usedCapacity: number;
  departmentId?: string;
  wardId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DiseaseTrend {
  id: string;
  date: Date;
  diseaseName: string;
  patientCount: number;
  departmentId?: string;
  ageGroup?: string;
  gender?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  createdAt: Date;
}

export interface PatientRiskAlert {
  id: string;
  patientId: string;
  riskType: RiskType;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendations: string[];
  isActive: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum RiskType {
  MEDICATION_INTERACTION = 'medication_interaction',
  ALLERGY_ALERT = 'allergy_alert',
  VITAL_SIGNS_ABNORMAL = 'vital_signs_abnormal',
  FALL_RISK = 'fall_risk',
  INFECTION_RISK = 'infection_risk',
  READMISSION_RISK = 'readmission_risk',
  FINANCIAL_RISK = 'financial_risk',
  OTHER = 'other'
}

export interface PredictiveAnalytics {
  id: string;
  predictionType: PredictionType;
  predictedDate: Date;
  predictedValue: number;
  confidence: number; // percentage
  factors: string[];
  departmentId?: string;
  wardId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum PredictionType {
  PATIENT_INFLOW = 'patient_inflow',
  BED_OCCUPANCY = 'bed_occupancy',
  REVENUE_FORECAST = 'revenue_forecast',
  STAFF_REQUIREMENT = 'staff_requirement',
  EQUIPMENT_MAINTENANCE = 'equipment_maintenance',
  DISEASE_OUTBREAK = 'disease_outbreak',
  OTHER = 'other'
}
