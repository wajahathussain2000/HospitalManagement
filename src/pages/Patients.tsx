
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Plus, 
  Search, 
  Phone, 
  Mail, 
  Calendar,
  FileText,
  Edit
} from 'lucide-react';

const patients = [
  {
    id: 'PT-001',
    name: 'John Smith',
    age: 45,
    phone: '(555) 123-4567',
    email: 'john.smith@email.com',
    lastVisit: '2024-01-15',
    status: 'active',
    insurance: 'Aetna',
    nextAppointment: '2024-01-20'
  },
  {
    id: 'PT-002',
    name: 'Sarah Johnson',
    age: 32,
    phone: '(555) 987-6543',
    email: 'sarah.j@email.com',
    lastVisit: '2024-01-10',
    status: 'active',
    insurance: 'BCBS',
    nextAppointment: '2024-01-22'
  },
  {
    id: 'PT-003',
    name: 'Michael Brown',
    age: 67,
    phone: '(555) 456-7890',
    email: 'mbrown@email.com',
    lastVisit: '2024-01-05',
    status: 'inactive',
    insurance: 'Medicare',
    nextAppointment: null
  }
];

export default function Patients() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
            <p className="text-gray-600 mt-1">Manage patient records and information</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Patient List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Patient ID</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Contact</th>
                    <th className="text-left py-3 px-4">Insurance</th>
                    <th className="text-left py-3 px-4">Last Visit</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{patient.id}</td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-600">Age: {patient.age}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Phone className="h-3 w-3 mr-1" />
                            {patient.phone}
                          </div>
                          <div className="flex items-center text-sm">
                            <Mail className="h-3 w-3 mr-1" />
                            {patient.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{patient.insurance}</td>
                      <td className="py-3 px-4">{patient.lastVisit}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Calendar className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
