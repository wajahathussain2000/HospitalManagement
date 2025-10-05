import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/entities';
import { MainLayout } from '@/components/Layout/MainLayout';
import AdminDashboard from './AdminDashboard';
import DoctorDashboard from './DoctorDashboard';
import NurseDashboard from '@/components/Nurse/NurseDashboard';
import ReceptionistDashboard from '@/components/Receptionist/ReceptionistDashboard';
import PatientDashboard from './PatientDashboard';
import PharmacyDashboardSimple from '@/components/Pharmacy/PharmacyDashboardSimple';
import LabDashboardSimple from '@/components/Lab/LabDashboardSimple';
import SimpleDashboard from '@/components/Test/SimpleDashboard';

export default function RoleBasedDashboard() {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  switch (user.role) {
    case UserRole.ADMIN:
    case UserRole.SUPER_ADMIN:
      return (
        <MainLayout>
          <AdminDashboard />
        </MainLayout>
      );
    case UserRole.DOCTOR:
      return (
        <MainLayout>
          <DoctorDashboard />
        </MainLayout>
      );
    case UserRole.NURSE:
      return (
        <MainLayout>
          <NurseDashboard />
        </MainLayout>
      );
    case UserRole.RECEPTIONIST:
      return (
        <MainLayout>
          <ReceptionistDashboard />
        </MainLayout>
      );
    case UserRole.PATIENT:
      return (
        <MainLayout>
          <PatientDashboard />
        </MainLayout>
      );
    case UserRole.LAB_TECHNICIAN:
      return (
        <MainLayout>
          <LabDashboardSimple />
        </MainLayout>
      );
    case UserRole.PHARMACIST:
      return (
        <MainLayout>
          <PharmacyDashboardSimple />
        </MainLayout>
      );
    case UserRole.ACCOUNTANT:
    case UserRole.HR_MANAGER:
    case UserRole.RADIOLOGIST:
      // For now, show a generic dashboard for these roles
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome, {user.firstName} {user.lastName}</p>
              <p className="text-sm text-gray-500 mt-1">Role: {user.role.replace('_', ' ')}</p>
            </div>
          </div>
        </MainLayout>
      );
    default:
      return <div>Access denied</div>;
  }
}
