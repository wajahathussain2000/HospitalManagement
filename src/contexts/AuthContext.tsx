import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';
import { User, UserRole } from '@/entities';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  isRole: (role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Role-based permissions
const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  [UserRole.ADMIN]: [
    'view_dashboard', 'manage_users', 'manage_doctors', 'manage_patients',
    'view_appointments', 'manage_appointments', 'view_billing', 'manage_billing',
    'view_reports', 'manage_settings', 'emergency_access'
  ],
  [UserRole.SUPER_ADMIN]: [
    'view_dashboard', 'manage_users', 'manage_doctors', 'manage_patients',
    'view_appointments', 'manage_appointments', 'view_billing', 'manage_billing',
    'view_reports', 'manage_settings', 'emergency_access', 'system_admin'
  ],
  [UserRole.DOCTOR]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_appointments',
    'view_medical_records', 'manage_medical_records', 'prescribe_medications',
    'view_lab_results', 'emergency_access'
  ],
  [UserRole.PATIENT]: [
    'view_dashboard', 'view_appointments', 'book_appointments', 'view_medical_records',
    'view_prescriptions', 'view_lab_results', 'emergency_access'
  ],
  [UserRole.NURSE]: [
    'view_dashboard', 'view_patients', 'view_appointments', 'manage_vital_signs',
    'view_medical_records', 'emergency_access'
  ],
  [UserRole.RECEPTIONIST]: [
    'view_dashboard', 'manage_appointments', 'register_patients', 'view_patients',
    'emergency_access'
  ],
  [UserRole.PHARMACIST]: [
    'view_dashboard', 'view_prescriptions', 'manage_medications', 'emergency_access'
  ],
  [UserRole.LAB_TECHNICIAN]: [
    'view_dashboard', 'manage_lab_tests', 'view_lab_results', 'emergency_access'
  ],
  [UserRole.ACCOUNTANT]: [
    'view_dashboard', 'view_billing', 'manage_payments', 'view_reports', 'emergency_access'
  ],
  [UserRole.HR_MANAGER]: [
    'view_dashboard', 'manage_employees', 'view_attendance', 'manage_payroll', 'emergency_access'
  ],
  [UserRole.RADIOLOGIST]: [
    'view_dashboard', 'manage_imaging', 'view_reports', 'emergency_access'
  ]
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('hospital_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('hospital_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on email (for demo purposes)
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
        'doctor@hospital.com': {
          id: '2',
          email: 'doctor@hospital.com',
          role: UserRole.DOCTOR,
          firstName: 'Dr. John',
          lastName: 'Smith',
          phone: '+1234567891',
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

      const user = mockUsers[credentials.email];
      if (user && credentials.password === 'password') {
        setUser(user);
        localStorage.setItem('hospital_user', JSON.stringify(user));
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: credentials.email,
        role: UserRole.PATIENT, // Only patients can register
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        phone: credentials.phone,
        isActive: true,
        createdAt: new Date().toISOString()
      };

      setUser(newUser);
      localStorage.setItem('hospital_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hospital_user');
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    return ROLE_PERMISSIONS[user.role]?.includes(permission) || false;
  };

  const isRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      register,
      logout,
      hasPermission,
      isRole
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
