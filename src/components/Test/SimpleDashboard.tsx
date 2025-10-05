import { useAuth } from '@/contexts/AuthContext';

export default function SimpleDashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-2">
          Welcome, {user?.firstName} {user?.lastName}
        </p>
        <p className="text-sm text-gray-500">
          Role: {user?.role?.replace('_', ' ')}
        </p>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Quick Stats</h3>
              <p className="text-blue-700">System is working properly</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">Status</h3>
              <p className="text-green-700">All systems operational</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Navigation</h3>
              <p className="text-purple-700">Use sidebar to navigate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
