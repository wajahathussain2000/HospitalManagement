import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User,
  Lock,
  Mail,
  Phone,
  Stethoscope,
  Shield,
  Clock,
  DollarSign,
  Award,
  Calendar,
  Activity,
  Heart,
  Brain,
  Zap,
  Users,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';

export default function DoctorLoginDemo() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Mock doctor data for demonstration
  const doctors = [
    {
      id: 'DOC001',
      email: 'cardio@hospital.com',
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiology',
      department: 'Cardiology',
      experience: 15,
      consultationFee: 200,
      workingHours: '09:00 - 17:00',
      qualifications: ['MD', 'FACC'],
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 'DOC002',
      email: 'neuro@hospital.com',
      name: 'Dr. Michael Chen',
      specialization: 'Neurology',
      department: 'Neurology',
      experience: 12,
      consultationFee: 180,
      workingHours: '08:00 - 16:00',
      qualifications: ['MD', 'PhD'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'DOC003',
      email: 'ortho@hospital.com',
      name: 'Dr. Emily Rodriguez',
      specialization: 'Orthopedics',
      department: 'Orthopedics',
      experience: 8,
      consultationFee: 220,
      workingHours: '07:00 - 15:00',
      qualifications: ['MD', 'FACS'],
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'DOC004',
      email: 'pediatric@hospital.com',
      name: 'Dr. David Wilson',
      specialization: 'Pediatrics',
      department: 'Pediatrics',
      experience: 20,
      consultationFee: 150,
      workingHours: '08:30 - 16:30',
      qualifications: ['MD', 'FAAP'],
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'DOC005',
      email: 'emergency@hospital.com',
      name: 'Dr. Lisa Anderson',
      specialization: 'Emergency Medicine',
      department: 'Emergency Medicine',
      experience: 10,
      consultationFee: 300,
      workingHours: '06:00 - 18:00',
      qualifications: ['MD', 'FACEP'],
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const getSpecializationIcon = (specialization: string) => {
    switch (specialization) {
      case 'Cardiology': return <Heart className="h-5 w-5 text-red-600" />;
      case 'Neurology': return <Brain className="h-5 w-5 text-blue-600" />;
      case 'Orthopedics': return <Zap className="h-5 w-5 text-green-600" />;
      case 'Pediatrics': return <Users className="h-5 w-5 text-yellow-600" />;
      case 'Emergency Medicine': return <AlertTriangle className="h-5 w-5 text-purple-600" />;
      default: return <Stethoscope className="h-5 w-5 text-gray-600" />;
    }
  };

  const handleDoctorSelect = (doctorEmail: string) => {
    setSelectedDoctor(doctorEmail);
  };

  const handleLogin = () => {
    if (selectedDoctor) {
      // In real app, this would trigger the login process
      console.log('Logging in as:', selectedDoctor);
      alert(`Login as ${doctors.find(d => d.email === selectedDoctor)?.name}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Multi-Doctor Authentication System</h1>
        <p className="text-gray-600">Each doctor has unique credentials and specialization-based access</p>
      </div>

      <Tabs defaultValue="doctors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="doctors">Available Doctors</TabsTrigger>
          <TabsTrigger value="login">Doctor Login</TabsTrigger>
        </TabsList>

        {/* Available Doctors Tab */}
        <TabsContent value="doctors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-full">
                        {getSpecializationIcon(doctor.specialization)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <p className="text-sm text-gray-600">{doctor.specialization}</p>
                      </div>
                    </div>
                    <Badge className={doctor.color}>
                      {doctor.department}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Label className="text-gray-600">Experience</Label>
                      <p className="font-medium">{doctor.experience} years</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Consultation Fee</Label>
                      <p className="font-medium">${doctor.consultationFee}</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Working Hours</Label>
                      <p className="font-medium">{doctor.workingHours}</p>
                    </div>
                    <div>
                      <Label className="text-gray-600">Qualifications</Label>
                      <p className="font-medium">{doctor.qualifications.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <strong>Email:</strong> {doctor.email}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDoctorSelect(doctor.email)}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Doctor Login Tab */}
        <TabsContent value="login">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  Doctor Login
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Each doctor has unique credentials and specialization-based access
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Doctor Selection */}
                <div>
                  <Label htmlFor="doctor-select">Select Doctor</Label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a doctor to login as..." />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.email}>
                          <div className="flex items-center space-x-3">
                            {getSpecializationIcon(doctor.specialization)}
                            <div>
                              <div className="font-medium">{doctor.name}</div>
                              <div className="text-sm text-gray-600">{doctor.specialization}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Login Form */}
                {selectedDoctor && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      {getSpecializationIcon(doctors.find(d => d.email === selectedDoctor)?.specialization || '')}
                      <div>
                        <div className="font-medium">
                          {doctors.find(d => d.email === selectedDoctor)?.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {doctors.find(d => d.email === selectedDoctor)?.specialization}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            value={selectedDoctor}
                            readOnly
                            className="pl-10 bg-gray-100"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            defaultValue="password123"
                            className="pl-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button onClick={handleLogin} className="w-full">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Login as {doctors.find(d => d.email === selectedDoctor)?.name}
                      </Button>
                    </div>
                  </div>
                )}

                {/* System Features */}
                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-4">System Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Unique Doctor ID & Password</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-600" />
                      <span>Specialization-based Access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span>Individual Working Hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-yellow-600" />
                      <span>Personal Consultation Fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-red-600" />
                      <span>Unique Qualifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span>Separate Session Management</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
