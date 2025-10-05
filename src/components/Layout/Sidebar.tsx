
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
  Package,
  Key,
  Users2,
  Bell,
  Video,
  MessageSquare,
  Star,
  Microscope,
  Dna,
  Cpu,
  Truck,
  Globe,
  Link,
  Rocket,
  RotateCcw,
  ShoppingCart
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
    { icon: Stethoscope, label: 'Consultations', path: '/doctor/consultations', roles: [UserRole.DOCTOR] },
    { icon: TestTube, label: 'Lab Orders', path: '/doctor/lab-orders', roles: [UserRole.DOCTOR] },
    { icon: Bell, label: 'Follow-ups', path: '/doctor/follow-up', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: 'Discharge', path: '/doctor/discharge', roles: [UserRole.DOCTOR] },
    { icon: Video, label: 'Telemedicine', path: '/doctor/telemedicine', roles: [UserRole.DOCTOR] },
    { icon: MessageSquare, label: 'Communication', path: '/doctor/communication', roles: [UserRole.DOCTOR] },
    { icon: DollarSign, label: 'Billing', path: '/doctor/billing', roles: [UserRole.DOCTOR] },
    { icon: Calendar, label: 'Schedule', path: '/doctor/schedule', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: 'Documents', path: '/doctor/documents', roles: [UserRole.DOCTOR] },
    { icon: Star, label: 'Feedback', path: '/doctor/feedback', roles: [UserRole.DOCTOR] },
    { icon: BarChart3, label: 'Analytics', path: '/doctor/analytics', roles: [UserRole.DOCTOR] },
    { icon: Users, label: 'Collaboration', path: '/doctor/collaboration', roles: [UserRole.DOCTOR] },
    { icon: Bell, label: 'Notifications', path: '/doctor/notifications', roles: [UserRole.DOCTOR] },
    { icon: User, label: 'Profile', path: '/doctor/profile', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: 'Medical Records', path: '/doctor/records', roles: [UserRole.DOCTOR] },
    { icon: Pill, label: 'Prescriptions', path: '/doctor/prescriptions', roles: [UserRole.DOCTOR] },
    
    // Pharmacy specific
    { icon: Pill, label: 'Medicine Catalog', path: '/pharmacy/catalog', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: 'Prescriptions', path: '/pharmacy/prescriptions', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Receipt, label: 'Sales & Billing', path: '/pharmacy/sales', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: 'Pharmacy Roles', path: '/pharmacy/roles', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: 'Inventory Management', path: '/pharmacy/inventory', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: ShoppingCart, label: 'Procurement Management', path: '/pharmacy/procurement', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: 'Pack/Loose Management', path: '/pharmacy/pack-loose', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: 'Prescription Integration', path: '/pharmacy/prescription-integration', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: CreditCard, label: 'Sales & POS Billing', path: '/pharmacy/sales-pos', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: RotateCcw, label: 'Returns & Expiry', path: '/pharmacy/returns-expiry', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Users, label: 'Inpatient/Outpatient Integration', path: '/pharmacy/inpatient-outpatient', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Settings, label: 'Advanced Operations', path: '/pharmacy/advanced-operations', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: 'Reports & Analytics', path: '/pharmacy/reports', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: 'Compliance & Security', path: '/pharmacy/compliance', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Lab specific
    { icon: Microscope, label: 'Lab Core Setup', path: '/lab/setup', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: TestTube, label: 'Test Catalog', path: '/lab/catalog', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: ClipboardList, label: 'Order Entry', path: '/lab/orders', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: 'Specimen Processing', path: '/lab/processing', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Cpu, label: 'Analyzer Integration', path: '/lab/analyzers', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: 'Result Entry', path: '/lab/results', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Microscope, label: 'Microbiology', path: '/lab/microbiology', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Dna, label: 'Molecular/PCR', path: '/lab/molecular', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Microscope, label: 'Anatomic Pathology', path: '/lab/pathology', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: 'Quality Control', path: '/lab/quality', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Truck, label: 'Logistics & Home Collection', path: '/lab/logistics', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: 'Inventory & Reagents', path: '/lab/inventory', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: CreditCard, label: 'Billing & Insurance', path: '/lab/billing', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Globe, label: 'Portals & Notifications', path: '/lab/portals', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Link, label: 'Integrations & Interoperability', path: '/lab/integrations', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: 'Analytics & AI', path: '/lab/analytics', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: 'Security & Audit', path: '/lab/security', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Heart, label: 'Optional Modules', path: '/lab/optional', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Rocket, label: 'Go-Live & Operations', path: '/lab/go-live', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Multi-Doctor Demo (Available to all for demonstration)
    { icon: Key, label: 'Multi-Doctor Demo', path: '/doctor/login-demo', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
    // Login Credentials (Available to all for reference)
    { icon: Key, label: 'Login Credentials', path: '/login-credentials', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
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
    
    // Pharmacist specific - removed duplicates (already in main pharmacy section above)
    
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
              className="w-full text-white border-red-500 bg-red-600 hover:bg-red-700 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              <span className="ml-2">Logout</span>
          </Button>
      </div>
    </div>
  );
}
