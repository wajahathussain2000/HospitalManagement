export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  profileImage?: string;
  departmentId?: string;
  specialization?: string;
  licenseNumber?: string;
  experience?: number;
  consultationFee?: number;
  emergencyContact?: string;
  address?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
}

export enum UserRole {
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  RECEPTIONIST = 'receptionist',
  LAB_TECHNICIAN = 'lab_technician',
  PHARMACIST = 'pharmacist',
  ACCOUNTANT = 'accountant',
  HR_MANAGER = 'hr_manager',
  RADIOLOGIST = 'radiologist',
  PATIENT = 'patient'
}

export interface UserPermissions {
  id: string;
  userId: string;
  canViewPatients: boolean;
  canEditPatients: boolean;
  canDeletePatients: boolean;
  canViewAppointments: boolean;
  canEditAppointments: boolean;
  canDeleteAppointments: boolean;
  canViewBilling: boolean;
  canEditBilling: boolean;
  canViewReports: boolean;
  canEditReports: boolean;
  canManageUsers: boolean;
  canManageInventory: boolean;
  canManageLab: boolean;
  canManagePharmacy: boolean;
  canManageFinance: boolean;
  canManageHR: boolean;
  canManageRadiology: boolean;
  canViewAnalytics: boolean;
  canManageSettings: boolean;
}
