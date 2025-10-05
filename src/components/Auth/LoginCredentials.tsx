import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginCredentials() {
  const [showPasswords, setShowPasswords] = useState(false);

  const credentials = [
    {
      role: 'Admin',
      email: 'admin@hospital.com',
      password: 'password123',
      name: 'Hospital Admin',
      description: 'Full system access and management'
    },
    {
      role: 'Doctor (Cardiology)',
      email: 'cardio@hospital.com',
      password: 'password123',
      name: 'Dr. Sarah Johnson',
      description: 'Cardiologist with specialized permissions'
    },
    {
      role: 'Doctor (Neurology)',
      email: 'neuro@hospital.com',
      password: 'password123',
      name: 'Dr. Michael Chen',
      description: 'Neurologist with specialized permissions'
    },
    {
      role: 'Doctor (Orthopedics)',
      email: 'ortho@hospital.com',
      password: 'password123',
      name: 'Dr. Emily Rodriguez',
      description: 'Orthopedic surgeon with specialized permissions'
    },
    {
      role: 'Doctor (Pediatrics)',
      email: 'pediatric@hospital.com',
      password: 'password123',
      name: 'Dr. David Wilson',
      description: 'Pediatrician with specialized permissions'
    },
    {
      role: 'Doctor (Emergency)',
      email: 'emergency@hospital.com',
      password: 'password123',
      name: 'Dr. Lisa Anderson',
      description: 'Emergency medicine physician'
    },
    {
      role: 'Lab Technician',
      email: 'lab@hospital.com',
      password: 'password123',
      name: 'Dr. Alex Thompson',
      description: 'Laboratory operations and testing'
    },
    {
      role: 'Pharmacist',
      email: 'pharmacy@hospital.com',
      password: 'password123',
      name: 'Dr. Maria Garcia',
      description: 'Pharmacy management and medication dispensing'
    },
    {
      role: 'Nurse',
      email: 'nurse@hospital.com',
      password: 'password123',
      name: 'Sarah Williams',
      description: 'Patient care and nursing operations'
    },
    {
      role: 'Receptionist',
      email: 'reception@hospital.com',
      password: 'password123',
      name: 'John Brown',
      description: 'Front desk and appointment management'
    },
    {
      role: 'Radiologist',
      email: 'radiology@hospital.com',
      password: 'password123',
      name: 'Dr. Robert Davis',
      description: 'Medical imaging and radiology'
    },
    {
      role: 'Accountant',
      email: 'accounting@hospital.com',
      password: 'password123',
      name: 'Lisa Miller',
      description: 'Financial management and billing'
    },
    {
      role: 'Patient',
      email: 'patient@hospital.com',
      password: 'password123',
      name: 'Jane Doe',
      description: 'Patient portal access'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getRoleColor = (role: string) => {
    if (role.includes('Admin')) return 'bg-red-100 text-red-800';
    if (role.includes('Doctor')) return 'bg-blue-100 text-blue-800';
    if (role.includes('Lab')) return 'bg-green-100 text-green-800';
    if (role.includes('Pharmacy')) return 'bg-purple-100 text-purple-800';
    if (role.includes('Nurse')) return 'bg-pink-100 text-pink-800';
    if (role.includes('Reception')) return 'bg-yellow-100 text-yellow-800';
    if (role.includes('Radiology')) return 'bg-indigo-100 text-indigo-800';
    if (role.includes('Accountant')) return 'bg-orange-100 text-orange-800';
    if (role.includes('Patient')) return 'bg-gray-100 text-gray-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Login Credentials</h1>
          <p className="text-gray-600 mt-1">All available login credentials for testing the system</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowPasswords(!showPasswords)}
          className="flex items-center"
        >
          {showPasswords ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
          {showPasswords ? 'Hide Passwords' : 'Show Passwords'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentials.map((cred, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{cred.name}</CardTitle>
                <Badge className={getRoleColor(cred.role)}>
                  {cred.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <div className="flex items-center space-x-2 mt-1">
                  <code className="flex-1 bg-gray-100 px-2 py-1 rounded text-sm">
                    {cred.email}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(cred.email)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Password</label>
                <div className="flex items-center space-x-2 mt-1">
                  <code className="flex-1 bg-gray-100 px-2 py-1 rounded text-sm">
                    {showPasswords ? cred.password : '•••••••••••'}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(cred.password)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Description</label>
                <p className="text-sm text-gray-700 mt-1">{cred.description}</p>
              </div>

              <div className="pt-2 border-t">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => copyToClipboard(`${cred.email}\n${cred.password}`)}
                  >
                    Copy Both
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Access</h3>
          <p className="text-blue-800 mb-4">
            Use these credentials to test different roles and their specific permissions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-blue-900">Lab Management:</strong>
              <p className="text-blue-700">lab@hospital.com / password123</p>
            </div>
            <div>
              <strong className="text-blue-900">Pharmacy Management:</strong>
              <p className="text-blue-700">pharmacy@hospital.com / password123</p>
            </div>
            <div>
              <strong className="text-blue-900">Doctor Dashboard:</strong>
              <p className="text-blue-700">cardio@hospital.com / password123</p>
            </div>
            <div>
              <strong className="text-blue-900">Admin Panel:</strong>
              <p className="text-blue-700">admin@hospital.com / password123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
