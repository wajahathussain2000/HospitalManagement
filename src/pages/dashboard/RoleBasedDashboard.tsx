import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/entities';
import AdminDashboard from './AdminDashboard';
import DoctorDashboard from './DoctorDashboard';
import NurseDashboard from '@/components/Nurse/NurseDashboard';
import ReceptionistDashboard from '@/components/Receptionist/ReceptionistDashboard';
import PatientDashboard from './PatientDashboard';

export default function RoleBasedDashboard() {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  switch (user.role) {
    case UserRole.ADMIN:
    case UserRole.SUPER_ADMIN:
      return <AdminDashboard />;
    case UserRole.DOCTOR:
      return <DoctorDashboard />;
    case UserRole.NURSE:
      return <NurseDashboard />;
    case UserRole.RECEPTIONIST:
      return <ReceptionistDashboard />;
    case UserRole.PATIENT:
      return <PatientDashboard />;
    case UserRole.LAB_TECHNICIAN:
    case UserRole.PHARMACIST:
    case UserRole.ACCOUNTANT:
    case UserRole.HR_MANAGER:
    case UserRole.RADIOLOGIST:
      // For now, show a generic dashboard for these roles
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome, {user.firstName} {user.lastName}</p>
            <p className="text-sm text-gray-500 mt-1">Role: {user.role.replace('_', ' ')}</p>
          </div>
        </div>
      );
    default:
      return <div>Access denied</div>;
  }
}
