import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import NotFound from "./pages/NotFound";
import RoleBasedDashboard from "./pages/dashboard/RoleBasedDashboard";
import { UserRole } from "@/entities";
import UserManagementPage from "./pages/Admin/UserManagementPage";
import DepartmentManagementPage from "./pages/Admin/DepartmentManagementPage";
import DoctorManagementPage from "./pages/Admin/DoctorManagementPage";
import BillingFinancePage from "./pages/Admin/BillingFinancePage";
import AnalyticsAIPage from "./pages/Admin/AnalyticsAIPage";
import SettingsPage from "./pages/Admin/SettingsPage";
import WardManagementPage from "./pages/Admin/WardManagementPage";
import EquipmentManagementPage from "./pages/Admin/EquipmentManagementPage";
import InventoryManagementPage from "./pages/Admin/InventoryManagementPage";
import AppointmentManagementPage from "./pages/Doctor/AppointmentManagementPage";
import PatientRecordsPage from "./pages/Doctor/PatientRecordsPage";
import DoctorLoginDemoPage from "./pages/Doctor/DoctorLoginDemoPage";
import ConsultationManagementPage from "./pages/Doctor/ConsultationManagementPage";
import EPrescriptionManagementPage from "./pages/Doctor/EPrescriptionManagementPage";
import LabRadiologyOrdersPage from "./pages/Doctor/LabRadiologyOrdersPage";
import PatientFollowUpPage from "./pages/Doctor/PatientFollowUpPage";
import DischargeAdmissionPage from "./pages/Doctor/DischargeAdmissionPage";
import TelemedicineConsultationPage from "./pages/Doctor/TelemedicineConsultationPage";
import PatientCommunicationPage from "./pages/Doctor/PatientCommunicationPage";
import DoctorBillingPage from "./pages/Doctor/DoctorBillingPage";
import DoctorSchedulePage from "./pages/Doctor/DoctorSchedulePage";
import DocumentManagementPage from "./pages/Doctor/DocumentManagementPage";
import FeedbackRatingsPage from "./pages/Doctor/FeedbackRatingsPage";
import DoctorAnalyticsPage from "./pages/Doctor/DoctorAnalyticsPage";
import DoctorCollaborationPage from "./pages/Doctor/DoctorCollaborationPage";
import DoctorNotificationsPage from "./pages/Doctor/DoctorNotificationsPage";
import DoctorProfilePage from "./pages/Doctor/DoctorProfilePage";
import PharmacyDashboardPage from "./pages/Pharmacy/PharmacyDashboardPage";
import PharmacyRolesPage from "./pages/Pharmacy/PharmacyRolesPage";
import CatalogPage from "./pages/Pharmacy/CatalogPage";
import PrescriptionsPage from "./pages/Pharmacy/PrescriptionsPage";
import SalesPage from "./pages/Pharmacy/SalesPage";
import PharmacyInventoryManagementPage from "./pages/Pharmacy/InventoryManagementPage";
import ProcurementManagementPage from "./pages/Pharmacy/ProcurementManagementPage";
import PackLooseManagementPage from "./pages/Pharmacy/PackLooseManagementPage";
import PrescriptionIntegrationPage from "./pages/Pharmacy/PrescriptionIntegrationPage";
import SalesPOSBillingPage from "./pages/Pharmacy/SalesPOSBillingPage";
import ReturnsExpiryRepackagingPage from "./pages/Pharmacy/ReturnsExpiryRepackagingPage";
import InpatientOutpatientIntegrationPage from "./pages/Pharmacy/InpatientOutpatientIntegrationPage";
import AdvancedOperationsPage from "./pages/Pharmacy/AdvancedOperationsPage";
import ReportsAnalyticsPage from "./pages/Pharmacy/ReportsAnalyticsPage";
import ComplianceSecurityPage from "./pages/Pharmacy/ComplianceSecurityPage";
import LabCoreSetupPage from "./pages/Lab/LabCoreSetupPage";
import TestCatalogPage from "./pages/Lab/TestCatalogPage";
import OrderEntryPage from "./pages/Lab/OrderEntryPage";
import SpecimenProcessingPage from "./pages/Lab/SpecimenProcessingPage";
import AnalyzerIntegrationPage from "./pages/Lab/AnalyzerIntegrationPage";
import ResultEntryValidationPage from "./pages/Lab/ResultEntryValidationPage";
import MicrobiologyModulePage from "./pages/Lab/MicrobiologyModulePage";
import MolecularPCRModulePage from "./pages/Lab/MolecularPCRModulePage";
import AnatomicPathologyCytologyPage from "./pages/Lab/AnatomicPathologyCytologyPage";
import QualityControlCompliancePage from "./pages/Lab/QualityControlCompliancePage";
import LogisticsHomeCollectionPage from "./pages/Lab/LogisticsHomeCollectionPage";
import InventoryReagentsPage from "./pages/Lab/InventoryReagentsPage";
import BillingInsurancePage from "./pages/Lab/BillingInsurancePage";
import PortalsNotificationsPage from "./pages/Lab/PortalsNotificationsPage";
import IntegrationsInteroperabilityPage from "./pages/Lab/IntegrationsInteroperabilityPage";
import LabAnalyticsAIPage from "./pages/Lab/AnalyticsAIPage";
import SecurityAuditPage from "./pages/Lab/SecurityAuditPage";
import OptionalModulesPage from "./pages/Lab/OptionalModulesPage";
import GoLiveOperationsPage from "./pages/Lab/GoLiveOperationsPage";
import LoginCredentialsPage from "./pages/Auth/LoginCredentialsPage";

const queryClient = new QueryClient();

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <RoleBasedDashboard />
        </ProtectedRoute>
      } />
      <Route path="/patients" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST]}>
          <Patients />
        </ProtectedRoute>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/users" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <UserManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/departments" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <DepartmentManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/doctors" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <DoctorManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/billing" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <BillingFinancePage />
        </ProtectedRoute>
      } />
      <Route path="/admin/analytics" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <AnalyticsAIPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/settings" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <SettingsPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/wards" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <WardManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/equipment" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <EquipmentManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/inventory" element={
        <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
          <InventoryManagementPage />
        </ProtectedRoute>
      } />
      
      {/* Doctor Routes */}
      <Route path="/doctor/appointments" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <AppointmentManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/patients" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <PatientRecordsPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/login-demo" element={
        <DoctorLoginDemoPage />
      } />
      <Route path="/doctor/consultations" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <ConsultationManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/prescriptions" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <EPrescriptionManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/lab-orders" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <LabRadiologyOrdersPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/follow-up" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <PatientFollowUpPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/discharge" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DischargeAdmissionPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/telemedicine" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <TelemedicineConsultationPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/communication" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <PatientCommunicationPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/billing" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorBillingPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/schedule" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorSchedulePage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/documents" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DocumentManagementPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/feedback" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <FeedbackRatingsPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/analytics" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorAnalyticsPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/collaboration" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorCollaborationPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/notifications" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorNotificationsPage />
        </ProtectedRoute>
      } />
      <Route path="/doctor/profile" element={
        <ProtectedRoute allowedRoles={[UserRole.DOCTOR]}>
          <DoctorProfilePage />
        </ProtectedRoute>
      } />
      
    {/* Pharmacy Routes */}
    <Route path="/pharmacy/dashboard" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PharmacyDashboardPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/roles" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PharmacyRolesPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/catalog" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <CatalogPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/prescriptions" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PrescriptionsPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/sales" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <SalesPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/reports" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ReportsAnalyticsPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/inventory" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PharmacyInventoryManagementPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/procurement" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ProcurementManagementPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/pack-loose" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PackLooseManagementPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/prescription-integration" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PrescriptionIntegrationPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/sales-pos" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <SalesPOSBillingPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/returns-expiry" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ReturnsExpiryRepackagingPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/inpatient-outpatient" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <InpatientOutpatientIntegrationPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/advanced-operations" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <AdvancedOperationsPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/reports" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ReportsAnalyticsPage />
      </ProtectedRoute>
    } />
    <Route path="/pharmacy/compliance" element={
      <ProtectedRoute allowedRoles={[UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ComplianceSecurityPage />
      </ProtectedRoute>
    } />
    
    {/* Lab Routes */}
    <Route path="/lab/setup" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <LabCoreSetupPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/tests" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <TestCatalogPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/samples" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <SpecimenProcessingPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/catalog" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <TestCatalogPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/orders" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <OrderEntryPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/processing" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <SpecimenProcessingPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/analyzers" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <AnalyzerIntegrationPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/results" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <ResultEntryValidationPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/microbiology" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <MicrobiologyModulePage />
      </ProtectedRoute>
    } />
    <Route path="/lab/molecular" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <MolecularPCRModulePage />
      </ProtectedRoute>
    } />
    <Route path="/lab/pathology" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <AnatomicPathologyCytologyPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/quality" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <QualityControlCompliancePage />
      </ProtectedRoute>
    } />
    <Route path="/lab/logistics" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <LogisticsHomeCollectionPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/inventory" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <InventoryReagentsPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/billing" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <BillingInsurancePage />
      </ProtectedRoute>
    } />
    <Route path="/lab/portals" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <PortalsNotificationsPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/integrations" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <IntegrationsInteroperabilityPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/analytics" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <LabAnalyticsAIPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/security" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <SecurityAuditPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/optional" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <OptionalModulesPage />
      </ProtectedRoute>
    } />
    <Route path="/lab/go-live" element={
      <ProtectedRoute allowedRoles={[UserRole.LAB_TECHNICIAN, UserRole.ADMIN, UserRole.SUPER_ADMIN]}>
        <GoLiveOperationsPage />
      </ProtectedRoute>
    } />
    
    {/* Login Credentials Page (Public) */}
    <Route path="/login-credentials" element={<LoginCredentialsPage />} />
      
      <Route path="/unauthorized" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Unauthorized Access</h1>
            <p className="text-gray-600 mt-2">You don't have permission to access this page.</p>
          </div>
        </div>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;