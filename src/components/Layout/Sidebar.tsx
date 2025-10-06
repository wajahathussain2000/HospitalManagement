
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
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Role-based navigation items
const getNavItems = (userRole: string, t: any) => {
  const allItems = [
    // Dashboard - Available to all roles
    { icon: Activity, label: t('navigation.dashboard'), path: '/', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
    // Admin/Super Admin specific
    { icon: Users, label: t('navigation.userManagement'), path: '/admin/users', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Building2, label: t('navigation.departments'), path: '/admin/departments', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: UserCheck, label: t('navigation.doctorManagement'), path: '/admin/doctors', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: DollarSign, label: t('navigation.billingFinance'), path: '/admin/billing', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: t('navigation.analyticsReports'), path: '/admin/analytics', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: t('navigation.systemSettings'), path: '/admin/settings', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Hospital Management
    { icon: Bed, label: t('navigation.wardManagement'), path: '/admin/wards', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Wrench, label: t('admin.equipmentManagement'), path: '/admin/equipment', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: t('admin.inventoryManagement'), path: '/admin/inventory', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Doctor specific
    { icon: Users, label: t('doctor.patientRecords'), path: '/doctor/patients', roles: [UserRole.DOCTOR] },
    { icon: Calendar, label: t('doctor.appointments'), path: '/doctor/appointments', roles: [UserRole.DOCTOR] },
    { icon: Stethoscope, label: t('doctor.consultations'), path: '/doctor/consultations', roles: [UserRole.DOCTOR] },
    { icon: TestTube, label: t('doctor.labOrders'), path: '/doctor/lab-orders', roles: [UserRole.DOCTOR] },
    { icon: Bell, label: t('doctor.patientFollowUp'), path: '/doctor/follow-up', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: t('doctor.dischargeManagement'), path: '/doctor/discharge', roles: [UserRole.DOCTOR] },
    { icon: Video, label: t('doctor.telemedicineConsultation'), path: '/doctor/telemedicine', roles: [UserRole.DOCTOR] },
    { icon: MessageSquare, label: t('doctor.patientCommunication'), path: '/doctor/communication', roles: [UserRole.DOCTOR] },
    { icon: DollarSign, label: t('doctor.doctorBilling'), path: '/doctor/billing', roles: [UserRole.DOCTOR] },
    { icon: Calendar, label: t('doctor.scheduleManagement'), path: '/doctor/schedule', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: t('doctor.documentManagement'), path: '/doctor/documents', roles: [UserRole.DOCTOR] },
    { icon: Star, label: t('doctor.feedbackRatings'), path: '/doctor/feedback', roles: [UserRole.DOCTOR] },
    { icon: BarChart3, label: t('doctor.clinicalAnalytics'), path: '/doctor/analytics', roles: [UserRole.DOCTOR] },
    { icon: Users, label: t('doctor.doctorCollaboration'), path: '/doctor/collaboration', roles: [UserRole.DOCTOR] },
    { icon: Bell, label: t('doctor.doctorNotifications'), path: '/doctor/notifications', roles: [UserRole.DOCTOR] },
    { icon: User, label: t('doctor.doctorProfile'), path: '/doctor/profile', roles: [UserRole.DOCTOR] },
    { icon: FileText, label: t('doctor.medicalRecords'), path: '/doctor/records', roles: [UserRole.DOCTOR] },
    { icon: Pill, label: t('doctor.prescriptions'), path: '/doctor/prescriptions', roles: [UserRole.DOCTOR] },
    
    // Pharmacy specific
    { icon: Pill, label: t('pharmacy.medicineCatalog'), path: '/pharmacy/catalog', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: t('pharmacy.prescriptions'), path: '/pharmacy/prescriptions', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Receipt, label: t('pharmacy.salesBilling'), path: '/pharmacy/sales', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: t('pharmacy.pharmacyRoles'), path: '/pharmacy/roles', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: t('pharmacy.inventoryManagement'), path: '/pharmacy/inventory', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: ShoppingCart, label: t('pharmacy.procurementManagement'), path: '/pharmacy/procurement', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: t('pharmacy.packLooseManagement'), path: '/pharmacy/pack-loose', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: t('pharmacy.prescriptionIntegration'), path: '/pharmacy/prescription-integration', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: CreditCard, label: t('pharmacy.salesPOSBilling'), path: '/pharmacy/sales-pos', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: RotateCcw, label: t('pharmacy.returnsExpiry'), path: '/pharmacy/returns-expiry', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Users, label: t('pharmacy.inpatientOutpatientIntegration'), path: '/pharmacy/inpatient-outpatient', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Settings, label: t('pharmacy.advancedOperations'), path: '/pharmacy/advanced-operations', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: t('pharmacy.reportsAnalytics'), path: '/pharmacy/reports', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: t('pharmacy.complianceSecurity'), path: '/pharmacy/compliance', roles: [UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Lab specific
    { icon: Microscope, label: t('lab.labCoreSetup'), path: '/lab/setup', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: TestTube, label: t('lab.testCatalog'), path: '/lab/catalog', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: ClipboardList, label: t('lab.orderEntry'), path: '/lab/orders', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: t('lab.specimenProcessing'), path: '/lab/processing', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Cpu, label: t('lab.analyzerIntegration'), path: '/lab/analyzers', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: FileText, label: t('lab.resultEntryValidation'), path: '/lab/results', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Microscope, label: t('lab.microbiologyModule'), path: '/lab/microbiology', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Dna, label: t('lab.molecularPCRModule'), path: '/lab/molecular', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Microscope, label: t('lab.anatomicPathologyCytology'), path: '/lab/pathology', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: t('lab.qualityControlCompliance'), path: '/lab/quality', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Truck, label: t('lab.logisticsHomeCollection'), path: '/lab/logistics', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Package, label: t('lab.inventoryReagents'), path: '/lab/inventory', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: CreditCard, label: t('lab.billingInsurance'), path: '/lab/billing', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Globe, label: t('lab.portalsNotifications'), path: '/lab/portals', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Link, label: t('lab.integrationsInteroperability'), path: '/lab/integrations', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: BarChart3, label: t('lab.analyticsAI'), path: '/lab/analytics', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Shield, label: t('lab.securityAudit'), path: '/lab/security', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Heart, label: t('lab.optionalModules'), path: '/lab/optional', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    { icon: Rocket, label: t('lab.goLiveOperations'), path: '/lab/go-live', roles: [UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    
    // Multi-Doctor Demo (Available to all for demonstration)
    { icon: Key, label: t('navigation.multiDoctorDemo'), path: '/doctor/login-demo', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
    // Login Credentials (Available to all for reference)
    { icon: Key, label: t('navigation.loginCredentials'), path: '/login-credentials', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST, UserRole.LAB_TECHNICIAN, UserRole.PHARMACIST, UserRole.ACCOUNTANT, UserRole.HR_MANAGER, UserRole.RADIOLOGIST, UserRole.PATIENT] },
    
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
    { icon: Users, label: t('navigation.patients'), path: '/patients', roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST] },
  ];

  return allItems.filter(item => item.roles.includes(userRole as UserRole));
};

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const navItems = getNavItems(user?.role || 'patient', t);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={cn(
      "fixed top-0 h-full bg-blue-900 dark:bg-gray-900 text-white transition-all duration-300 z-50 flex flex-col",
      isOpen ? "w-64" : "w-16",
      isRTL ? "right-0" : "left-0"
    )}>
      <div className={cn("flex items-center justify-between p-4 border-b border-blue-800 dark:border-gray-700", isRTL && "flex-row-reverse")}>
        <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-3" : "space-x-3", !isOpen && "justify-center")}>
          <div className="bg-blue-600 dark:bg-blue-700 p-2 rounded-lg">
            <Activity className="h-6 w-6" />
          </div>
          {isOpen && (
            <div className={cn("text-right", !isRTL && "text-left")}>
                  <h1 className="font-bold text-lg">{t('common.hospitalManagement')}</h1>
                  <p className="text-blue-200 dark:text-gray-300 text-sm">{t('common.healthcareSystem')}</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-white hover:bg-blue-800 dark:hover:bg-gray-700"
        >
          {isOpen ? (isRTL ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />) : (isRTL ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
        </Button>
      </div>

      {/* User Info */}
      {isOpen && user && (
        <div className="p-4 border-b border-blue-800 dark:border-gray-700">
          <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-3" : "space-x-3")}>
            <div className="bg-blue-600 dark:bg-blue-700 p-2 rounded-full">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm font-medium truncate", isRTL && "text-right")}>
                {user.firstName} {user.lastName}
              </p>
              <p className={cn("text-xs text-blue-200 dark:text-gray-300 capitalize", isRTL && "text-right")}>
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
                  "flex items-center px-4 py-3 text-blue-100 dark:text-gray-300 hover:bg-blue-800 dark:hover:bg-gray-700 hover:text-white transition-colors rounded-lg mx-2 mb-1",
                isActive && "bg-blue-800 dark:bg-blue-600 text-white border-r-2 border-blue-400",
                !isOpen && "justify-center px-4",
                isRTL && "flex-row-reverse"
              )
            }
          >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className={cn("truncate", isRTL ? "mr-3" : "ml-3")}>{item.label}</span>}
          </NavLink>
        ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-800 dark:border-gray-700 mt-auto">
            <Button
              onClick={handleLogout}
              variant="outline"
              className={cn(
                "w-full text-white border-red-500 bg-red-600 hover:bg-red-700 hover:text-white",
                isRTL && "flex-row-reverse"
              )}
            >
              <LogOut className="h-4 w-4" />
              <span className={cn(isRTL ? "mr-2" : "ml-2")}>{t('navigation.logout')}</span>
          </Button>
      </div>
    </div>
  );
}
