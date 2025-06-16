
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, User, Phone, Calendar, CreditCard } from 'lucide-react';

const mockPatients = [
  {
    id: 'P001',
    name: 'John Smith',
    dob: '1985-06-15',
    phone: '(555) 123-4567',
    insurance: 'Aetna PPO',
    memberNumber: 'A123456789',
    eligibility: 'Active'
  },
  {
    id: 'P002',
    name: 'Sarah Johnson',
    dob: '1992-03-22',
    phone: '(555) 234-5678',
    insurance: 'BCBS Premium',
    memberNumber: 'B987654321',
    eligibility: 'Active'
  },
  {
    id: 'P003',
    name: 'Mike Wilson',
    dob: '1978-11-08',
    phone: '(555) 345-6789',
    insurance: 'Medicare',
    memberNumber: 'M456789123',
    eligibility: 'Active'
  }
];

interface PatientSelectionStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function PatientSelectionStep({ data, onUpdate }: PatientSelectionStepProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState(data.patient);

  useEffect(() => {
    const filtered = mockPatients.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    );
    setFilteredPatients(filtered);
  }, [searchTerm]);

  const handlePatientSelect = (patient: any) => {
    setSelectedPatient(patient);
    onUpdate({ patient });
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="space-y-2">
        <Label htmlFor="patientSearch">Search Patient</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="patientSearch"
            placeholder="Search by name, ID, or phone number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Selected Patient */}
      {selectedPatient && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <User className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900">Selected Patient</h3>
                  <p className="text-green-700">{selectedPatient.name}</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Selected</Badge>
            </div>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span>DOB: {selectedPatient.dob}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span>{selectedPatient.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-green-600" />
                <span>{selectedPatient.insurance}</span>
              </div>
              <div>
                <Badge variant="outline" className="text-green-700 border-green-300">
                  {selectedPatient.eligibility}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Patient List */}
      <div className="space-y-3">
        <h3 className="font-medium">Available Patients</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredPatients.map((patient) => (
            <Card 
              key={patient.id}
              className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedPatient?.id === patient.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handlePatientSelect(patient)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-gray-600">ID: {patient.id}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium">{patient.insurance}</p>
                    <p className="text-gray-600">{patient.memberNumber}</p>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <span>DOB: {patient.dob}</span>
                  <span>{patient.phone}</span>
                  <Badge 
                    variant={patient.eligibility === 'Active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {patient.eligibility}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <User className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No patients found matching your search.</p>
        </div>
      )}
    </div>
  );
}
