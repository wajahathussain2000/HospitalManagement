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