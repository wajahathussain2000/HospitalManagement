export interface Employee {
  id: string;
  userId: string;
  employeeId: string;
  departmentId: string;
  position: string;
  hireDate: Date;
  salary: number;
  isActive: boolean;
  managerId?: string;
  shiftId?: string;
  workLocation?: string;
  emergencyContact: string;
  emergencyContactPhone: string;
  bankDetails?: BankDetails;
  documents: EmployeeDocument[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branchName: string;
  accountHolderName: string;
}

export interface EmployeeDocument {
  id: string;
  employeeId: string;
  documentType: DocumentType;
  documentName: string;
  documentUrl: string;
  expiryDate?: Date;
  isActive: boolean;
  uploadedAt: Date;
}

export enum DocumentType {
  PAN_CARD = 'pan_card',
  AADHAAR_CARD = 'aadhaar_card',
  PASSPORT = 'passport',
  DRIVING_LICENSE = 'driving_license',
  MEDICAL_LICENSE = 'medical_license',
  DEGREE_CERTIFICATE = 'degree_certificate',
  EXPERIENCE_CERTIFICATE = 'experience_certificate',
  SALARY_CERTIFICATE = 'salary_certificate',
  OTHER = 'other'
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: Date;
  checkIn: Date;
  checkOut?: Date;
  totalHours?: number;
  status: AttendanceStatus;
  notes?: string;
  approvedBy?: string;
  approvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
  HALF_DAY = 'half_day',
  LEAVE = 'leave',
  HOLIDAY = 'holiday'
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  leaveType: LeaveType;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  reason: string;
  status: LeaveRequestStatus;
  approvedBy?: string;
  approvedAt?: Date;
  rejectedAt?: Date;
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum LeaveType {
  SICK_LEAVE = 'sick_leave',
  CASUAL_LEAVE = 'casual_leave',
  ANNUAL_LEAVE = 'annual_leave',
  MATERNITY_LEAVE = 'maternity_leave',
  PATERNITY_LEAVE = 'paternity_leave',
  EMERGENCY_LEAVE = 'emergency_leave',
  UNPAID_LEAVE = 'unpaid_leave'
}

export enum LeaveRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

export interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
