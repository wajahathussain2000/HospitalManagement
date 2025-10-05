import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';
import { User, UserRole } from '@/entities';
import { Doctor, DoctorSpecialization, DoctorSession } from '@/entities/Doctor';

interface AuthContextType {
  user: User | null;
  doctor: Doctor | null;
  doctorSession: DoctorSession | null;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isDoctor: boolean;
  isAdmin: boolean;
  isPatient: boolean;
  getDoctorSpecialization: () => DoctorSpecialization | null;
  getDoctorDepartment: () => string | null;
  getDoctorPermissions: () => string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Enhanced mock doctors with different specializations
const mockDoctors: Record<string, Doctor> = {
  'cardio@hospital.com': {
    id: 'DOC001',
    email: 'cardio@hospital.com',
    password: 'password123',
    firstName: 'Dr. Sarah',
    lastName: 'Johnson',
    phone: '+1234567890',
    specialization: DoctorSpecialization.CARDIOLOGY,
    department: 'Cardiology',
    licenseNumber: 'MD123456',
    experience: 15,
    consultationFee: 200,
    isActive: true,
    workingHours: {
      start: '09:00',
      end: '17:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    emergencyContact: {
      name: 'Mike Johnson',
      phone: '+1234567891',
      relationship: 'Spouse'
    },
    qualifications: ['MD', 'FACC'],
    certifications: ['Board Certified Cardiologist', 'Echocardiography Specialist'],
    createdAt: '2020-01-15T00:00:00Z'
  },
  'neuro@hospital.com': {
    id: 'DOC002',
    email: 'neuro@hospital.com',
    password: 'password123',
    firstName: 'Dr. Michael',
    lastName: 'Chen',
    phone: '+1234567892',
    specialization: DoctorSpecialization.NEUROLOGY,
    department: 'Neurology',
    licenseNumber: 'MD234567',
    experience: 12,
    consultationFee: 180,
    isActive: true,
    workingHours: {
      start: '08:00',
      end: '16:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    emergencyContact: {
      name: 'Lisa Chen',
      phone: '+1234567893',
      relationship: 'Wife'
    },
    qualifications: ['MD', 'PhD'],
    certifications: ['Board Certified Neurologist', 'Epilepsy Specialist'],
    createdAt: '2021-03-20T00:00:00Z'
  },
  'ortho@hospital.com': {
    id: 'DOC003',
    email: 'ortho@hospital.com',
    password: 'password123',
    firstName: 'Dr. Emily',
    lastName: 'Rodriguez',
    phone: '+1234567894',
    specialization: DoctorSpecialization.ORTHOPEDICS,
    department: 'Orthopedics',
    licenseNumber: 'MD345678',
    experience: 8,
    consultationFee: 220,
    isActive: true,
    workingHours: {
      start: '07:00',
      end: '15:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    emergencyContact: {
      name: 'Carlos Rodriguez',
      phone: '+1234567895',
      relationship: 'Husband'
    },
    qualifications: ['MD', 'FACS'],
    certifications: ['Board Certified Orthopedic Surgeon', 'Sports Medicine Specialist'],
    createdAt: '2022-06-10T00:00:00Z'
  },
  'pediatric@hospital.com': {
    id: 'DOC004',
    email: 'pediatric@hospital.com',
    password: 'password123',
    firstName: 'Dr. David',
    lastName: 'Wilson',
    phone: '+1234567896',
    specialization: DoctorSpecialization.PEDIATRICS,
    department: 'Pediatrics',
    licenseNumber: 'MD456789',
    experience: 20,
    consultationFee: 150,
    isActive: true,
    workingHours: {
      start: '08:30',
      end: '16:30',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    emergencyContact: {
      name: 'Susan Wilson',
      phone: '+1234567897',
      relationship: 'Wife'
    },
    qualifications: ['MD', 'FAAP'],
    certifications: ['Board Certified Pediatrician', 'Child Development Specialist'],
    createdAt: '2019-08-25T00:00:00Z'
  },
  'emergency@hospital.com': {
    id: 'DOC005',
    email: 'emergency@hospital.com',
    password: 'password123',
    firstName: 'Dr. Lisa',
    lastName: 'Anderson',
    phone: '+1234567898',
    specialization: DoctorSpecialization.EMERGENCY,
    department: 'Emergency Medicine',
    licenseNumber: 'MD567890',
    experience: 10,
    consultationFee: 300,
    isActive: true,
    workingHours: {
      start: '06:00',
      end: '18:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    emergencyContact: {
      name: 'Tom Anderson',
      phone: '+1234567899',
      relationship: 'Husband'
    },
    qualifications: ['MD', 'FACEP'],
    certifications: ['Board Certified Emergency Physician', 'Trauma Specialist'],
    createdAt: '2021-11-12T00:00:00Z'
  }
};

// Role-based permissions for doctors
const doctorPermissions: Record<DoctorSpecialization, string[]> = {
  [DoctorSpecialization.CARDIOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'cardiology_patients', 'heart_surgery',
    'echocardiogram', 'stress_testing', 'cardiac_catheterization'
  ],
  [DoctorSpecialization.NEUROLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'neurology_patients', 'brain_surgery',
    'eeg', 'emg', 'lumbar_puncture'
  ],
  [DoctorSpecialization.ORTHOPEDICS]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'orthopedics_patients', 'bone_surgery',
    'xray_interpretation', 'physical_therapy'
  ],
  [DoctorSpecialization.PEDIATRICS]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'pediatric_patients', 'child_development',
    'vaccination', 'growth_monitoring'
  ],
  [DoctorSpecialization.EMERGENCY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'emergency_patients', 'trauma_care',
    'critical_care', 'resuscitation'
  ],
  [DoctorSpecialization.SURGERY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'surgery_patients', 'general_surgery',
    'surgical_procedures', 'post_op_care'
  ],
  [DoctorSpecialization.DERMATOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'dermatology_patients', 'skin_surgery',
    'biopsy', 'dermatopathology'
  ],
  [DoctorSpecialization.PSYCHIATRY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'psychiatry_patients', 'mental_health',
    'therapy', 'psychiatric_evaluation'
  ],
  [DoctorSpecialization.RADIOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'radiology_patients', 'imaging',
    'ct_scan', 'mri', 'ultrasound'
  ],
  [DoctorSpecialization.ANESTHESIOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'anesthesia_patients', 'surgery_anesthesia',
    'pain_management', 'critical_care'
  ],
  [DoctorSpecialization.ONCOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'oncology_patients', 'cancer_treatment',
    'chemotherapy', 'radiation_therapy'
  ],
  [DoctorSpecialization.GYNECOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'gynecology_patients', 'women_health',
    'prenatal_care', 'reproductive_health'
  ],
  [DoctorSpecialization.UROLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'urology_patients', 'urinary_surgery',
    'prostate_care', 'kidney_treatment'
  ],
  [DoctorSpecialization.OPHTHALMOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'ophthalmology_patients', 'eye_surgery',
    'vision_care', 'retinal_treatment'
  ],
  [DoctorSpecialization.ENT]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'ent_patients', 'ear_nose_throat',
    'hearing_care', 'sinus_treatment'
  ],
  [DoctorSpecialization.ENDOCRINOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'endocrinology_patients', 'diabetes_care',
    'hormone_treatment', 'thyroid_care'
  ],
  [DoctorSpecialization.GASTROENTEROLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'gastroenterology_patients', 'digestive_care',
    'endoscopy', 'colonoscopy'
  ],
  [DoctorSpecialization.PULMONOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'pulmonology_patients', 'lung_care',
    'respiratory_treatment', 'asthma_management'
  ],
  [DoctorSpecialization.NEPHROLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'nephrology_patients', 'kidney_care',
    'dialysis', 'kidney_transplant'
  ],
  [DoctorSpecialization.RHEUMATOLOGY]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access', 'rheumatology_patients', 'joint_care',
    'arthritis_treatment', 'autoimmune_care'
  ]
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [doctorSession, setDoctorSession] = useState<DoctorSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    const savedDoctor = localStorage.getItem('doctor');
    const savedSession = localStorage.getItem('doctorSession');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedDoctor) {
      setDoctor(JSON.parse(savedDoctor));
    }
    if (savedSession) {
      setDoctorSession(JSON.parse(savedSession));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if it's a doctor login
      if (mockDoctors[credentials.email]) {
        const doctorData = mockDoctors[credentials.email];
        
        if (doctorData.password === credentials.password && doctorData.isActive) {
          // Create doctor session
          const session: DoctorSession = {
            doctorId: doctorData.id,
            specialization: doctorData.specialization,
            department: doctorData.department,
            permissions: doctorPermissions[doctorData.specialization],
            loginTime: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            ipAddress: '192.168.1.1', // In real app, get from request
            userAgent: navigator.userAgent
          };

          // Create user object for doctor
          const userData: User = {
            id: doctorData.id,
            email: doctorData.email,
            role: UserRole.DOCTOR,
            firstName: doctorData.firstName,
            lastName: doctorData.lastName,
            phone: doctorData.phone,
            isActive: doctorData.isActive,
            createdAt: doctorData.createdAt
          };

          setUser(userData);
          setDoctor(doctorData);
          setDoctorSession(session);

          // Save to localStorage
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('doctor', JSON.stringify(doctorData));
          localStorage.setItem('doctorSession', JSON.stringify(session));

          setIsLoading(false);
          return true;
        }
      }

      // Check for admin/other users (existing logic)
      const mockUsers: Record<string, User> = {
        'admin@hospital.com': {
          id: '1',
          email: 'admin@hospital.com',
          role: UserRole.ADMIN,
          firstName: 'Hospital',
          lastName: 'Admin',
          phone: '+1234567890',
          isActive: true,
          createdAt: new Date().toISOString()
        },
        'patient@hospital.com': {
          id: '3',
          email: 'patient@hospital.com',
          role: UserRole.PATIENT,
          firstName: 'Jane',
          lastName: 'Doe',
          phone: '+1234567892',
          isActive: true,
          createdAt: new Date().toISOString()
        }
      };

      if (mockUsers[credentials.email] && credentials.password === 'password123') {
        setUser(mockUsers[credentials.email]);
        localStorage.setItem('user', JSON.stringify(mockUsers[credentials.email]));
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: credentials.email,
        role: UserRole.PATIENT,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        phone: credentials.phone,
        isActive: true,
        createdAt: new Date().toISOString()
      };

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setDoctor(null);
    setDoctorSession(null);
    localStorage.removeItem('user');
    localStorage.removeItem('doctor');
    localStorage.removeItem('doctorSession');
  };

  const getDoctorSpecialization = (): DoctorSpecialization | null => {
    return doctor?.specialization || null;
  };

  const getDoctorDepartment = (): string | null => {
    return doctor?.department || null;
  };

  const getDoctorPermissions = (): string[] => {
    return doctorSession?.permissions || [];
  };

  const value: AuthContextType = {
    user,
    doctor,
    doctorSession,
    login,
    register,
    logout,
    isLoading,
    isDoctor: user?.role === UserRole.DOCTOR,
    isAdmin: user?.role === UserRole.ADMIN,
    isPatient: user?.role === UserRole.PATIENT,
    getDoctorSpecialization,
    getDoctorDepartment,
    getDoctorPermissions
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
