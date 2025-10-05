
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  Settings, 
  BarChart3,
  Stethoscope,
  Shield,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Building2,
  UserCheck,
  Heart,
  Pill,
  TestTube,
  Camera,
  CreditCard,
  Clock,
  AlertTriangle,
  TrendingUp,
  Bed,
  Phone,
  Mail,
  UserPlus,
  ClipboardList,
  Receipt,
  PieChart,
  Target,
  Zap,
  Wrench,
  Package
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/entities';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Role-based navigation items
const getNavItems = (userRole: string) => {
  const allItems = [
    // Dashboard - Available to all roles
    { icon: Activity, label: 'Dashboard', path: '/', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
    // Admin/Super Admin specific
    { icon: Users, label: 'User Management', path: '/admin/users', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Building2, label: 'Departments', path: '/admin/departments', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: UserCheck, label: 'Doctor Management', path: '/admin/doctors', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: DollarSign, label: 'Billing & Finance', path: '/admin/billing', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: 'Analytics & Reports', path: '/admin/analytics', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: 'System Settings', path: '/admin/settings', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Hospital Management
    { icon: Bed, label: 'Ward Management', path: '/admin/wards', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Wrench, label: 'Equipment Management', path: '/admin/equipment', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: 'Inventory Management', path: '/admin/inventory', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Doctor specific
    { icon: Users, label: 'My Patients', path: '/doctor/patients', roles: [UserRole.DOCTOR] },
    { icon: Calendar, label: 'My Appointments', path: '/doctor/appointments', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: 'Medical Records', path: '/doctor/records', roles: [UserRole.DOCTOR] },
    { icon: Pill, label: 'Prescriptions', path: '/doctor/prescriptions', roles: [UserRole.DOCTOR] },
    
    // Nurse specific
    { icon: Heart, label: 'Patient Monitoring', path: '/nurse/monitoring', roles: [UserRole.NURSE] },
    { icon: Bed, label: 'Ward Management', path: '/nurse/wards', roles: [UserRole.NURSE] },
    { icon: Clock, label: 'Medication Schedule', path: '/nurse/medications', roles: [UserRole.NURSE] },
    { icon: AlertTriangle, label: 'Emergency Alerts', path: '/nurse/alerts', roles: [UserRole.NURSE] },
    
    // Receptionist specific
    { icon: UserPlus, label: 'Patient Registration', path: '/receptionist/registration', roles: [UserRole.RECEPTIONIST] },
    { icon: Calendar, label: 'Appointment Booking', path: '/receptionist/booking', roles: [UserRole.RECEPTIONIST] },
    { icon: Clock, label: 'Queue Management', path: '/receptionist/queue', roles: [UserRole.RECEPTIONIST] },
    { icon: CreditCard, label: 'Payments', path: '/receptionist/payments', roles: [UserRole.RECEPTIONIST] },
    
    // Lab Technician specific
    { icon: TestTube, label: 'Lab Tests', path: '/lab/tests', roles: [UserRole.LAB_TECHNICIAN] },
    { icon: ClipboardList, label: 'Sample Collection', path: '/lab/samples', roles: [UserRole.LAB_TECHNICIAN] },
    { icon: FileText, label: 'Test Results', path: '/lab/results', roles: [UserRole.LAB_TECHNICIAN] },
    { icon: BarChart3, label: 'Lab Analytics', path: '/lab/analytics', roles: [UserRole.LAB_TECHNICIAN] },
    
    // Pharmacist specific
    { icon: Pill, label: 'Medicine Catalog', path: '/pharmacy/catalog', roles: [UserRole.PHARMACIST] },
    { icon: FileText, label: 'Prescriptions', path: '/pharmacy/prescriptions', roles: [UserRole.PHARMACIST] },
    { icon: Receipt, label: 'Sales & Billing', path: '/pharmacy/sales', roles: [UserRole.PHARMACIST] },
    { icon: TrendingUp, label: 'Inventory', path: '/pharmacy/inventory', roles: [UserRole.PHARMACIST] },
    
    // Accountant specific
    { icon: DollarSign, label: 'Financial Dashboard', path: '/accountant/dashboard', roles: [UserRole.ACCOUNTANT] },
    { icon: Receipt, label: 'Invoices', path: '/accountant/invoices', roles: [UserRole.ACCOUNTANT] },
    { icon: CreditCard, label: 'Payments', path: '/accountant/payments', roles: [UserRole.ACCOUNTANT] },
    { icon: BarChart3, label: 'Financial Reports', path: '/accountant/reports', roles: [UserRole.ACCOUNTANT] },
    
    // HR Manager specific
    { icon: Users, label: 'Employee Management', path: '/hr/employees', roles: [UserRole.HR_MANAGER] },
    { icon: Clock, label: 'Attendance', path: '/hr/attendance', roles: [UserRole.HR_MANAGER] },
    { icon: FileText, label: 'Leave Management', path: '/hr/leaves', roles: [UserRole.HR_MANAGER] },
    { icon: DollarSign, label: 'Payroll', path: '/hr/payroll', roles: [UserRole.HR_MANAGER] },
    
    // Radiologist specific
    { icon: Camera, label: 'Imaging Orders', path: '/radiology/orders', roles: [UserRole.RADIOLOGIST] },
    { icon: FileText, label: 'Reports', path: '/radiology/reports', roles: [UserRole.RADIOLOGIST] },
    { icon: BarChart3, label: 'Radiology Analytics', path: '/radiology/analytics', roles: [UserRole.RADIOLOGIST] },
    
    // Patient specific
    { icon: Calendar, label: 'My Appointments', path: '/patient/appointments', roles: [UserRole.PATIENT] },
    { icon: FileText, label: 'Medical Records', path: '/patient/records', roles: [UserRole.PATIENT] },
    { icon: TestTube, label: 'Lab Results', path: '/patient/lab-results', roles: [UserRole.PATIENT] },
    { icon: Pill, label: 'Prescriptions', path: '/patient/prescriptions', roles: [UserRole.PATIENT] },
    { icon: CreditCard, label: 'Billing', path: '/patient/billing', roles: [UserRole.PATIENT] },
    { icon: Phone, label: 'Emergency', path: '/patient/emergency', roles: [UserRole.PATIENT] },
    
    // Common modules for multiple roles
    { icon: Users, label: 'Patients', path: '/patients', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST] },
  ];

  return allItems.filter(item => item.roles.includes(userRole as UserRole));
};

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const navItems = getNavItems(user?.role || 'patient');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-blue-900 text-white transition-all duration-300 z-50 flex flex-col",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        <div className={cn("flex items-center space-x-3", !isOpen && "justify-center")}>
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="h-6 w-6" />
          </div>
          {isOpen && (
            <div>
              <h1 className="font-bold text-lg">Hospital Management</h1>
              <p className="text-blue-200 text-sm">Healthcare System</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-white hover:bg-blue-800"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* User Info */}
      {isOpen && user && (
        <div className="p-4 border-b border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-blue-200 capitalize">
                {user.role.replace('_', ' ')}
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto mt-6 scrollbar-hide">
        <div className="px-2 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-3 text-blue-100 hover:bg-blue-800 hover:text-white transition-colors rounded-lg mx-2 mb-1",
                  isActive && "bg-blue-800 text-white border-r-2 border-blue-400",
                  !isOpen && "justify-center px-4"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="ml-3 truncate">{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-800 mt-auto">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full text-white border-white hover:bg-white hover:text-blue-900"
        >
          <LogOut className="h-4 w-4 mr-2" />
          {isOpen && "Logout"}
        </Button>
      </div>
    </div>
  );
}
