import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Heart, 
  Activity, 
  Users, 
  Bed, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Stethoscope,
  Pill,
  Thermometer,
  Droplets,
  Zap,
  User,
  Phone,
  Bell,
  TrendingUp,
  Shield,
  Plus,
  Edit,
  Eye
} from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bedNumber: string;
  ward: string;
  admissionDate: Date;
  diagnosis: string;
  condition: 'stable' | 'critical' | 'improving' | 'deteriorating';
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    oxygenSaturation: number;
    respiratoryRate: number;
    lastUpdated: Date;
  };
  medications: Medication[];
  doctorOrders: DoctorOrder[];
  isEmergency: boolean;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  lastGiven: Date;
  nextDue: Date;
  status: 'pending' | 'given' | 'overdue';
}

interface DoctorOrder {
  id: string;
  order: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed';
  orderedBy: string;
  orderedAt: Date;
  notes?: string;
}

interface Ward {
  id: string;
  name: string;
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
  patients: Patient[];
}

export default function NurseDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedWard, setSelectedWard] = useState('all');
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const wards: Ward[] = [
    {
      id: '1',
      name: 'ICU',
      totalBeds: 12,
      occupiedBeds: 10,
      availableBeds: 2,
      patients: [
        {
          id: '1',
          name: 'John Doe',
          age: 65,
          gender: 'Male',
          bedNumber: 'ICU-01',
          ward: 'ICU',
          admissionDate: new Date('2024-01-10'),
          diagnosis: 'Myocardial Infarction',
          condition: 'critical',
          vitalSigns: {
            bloodPressure: '90/60',
            heartRate: 110,
            temperature: 101.2,
            oxygenSaturation: 88,
            respiratoryRate: 24,
            lastUpdated: new Date('2024-01-15T10:30:00')
          },
          medications: [
            {
              id: '1',
              name: 'Morphine',
              dosage: '2mg',
              frequency: 'Every 4 hours',
              lastGiven: new Date('2024-01-15T06:30:00'),
              nextDue: new Date('2024-01-15T10:30:00'),
              status: 'overdue'
            }
          ],
          doctorOrders: [
            {
              id: '1',
              order: 'Monitor vital signs every 2 hours',
              priority: 'high',
              status: 'in_progress',
              orderedBy: 'Dr. Smith',
              orderedAt: new Date('2024-01-15T08:00:00')
            }
          ],
          isEmergency: true
        }
      ]
    },
    {
      id: '2',
      name: 'General Ward',
      totalBeds: 24,
      occupiedBeds: 18,
      availableBeds: 6,
      patients: [
        {
          id: '2',
          name: 'Jane Smith',
          age: 45,
          gender: 'Female',
          bedNumber: 'GW-05',
          ward: 'General Ward',
          admissionDate: new Date('2024-01-12'),
          diagnosis: 'Pneumonia',
          condition: 'improving',
          vitalSigns: {
            bloodPressure: '120/80',
            heartRate: 85,
            temperature: 98.6,
            oxygenSaturation: 95,
            respiratoryRate: 18,
            lastUpdated: new Date('2024-01-15T09:00:00')
          },
          medications: [
            {
              id: '2',
              name: 'Amoxicillin',
              dosage: '500mg',
              frequency: 'Every 8 hours',
              lastGiven: new Date('2024-01-15T08:00:00'),
              nextDue: new Date('2024-01-15T16:00:00'),
              status: 'pending'
            }
          ],
          doctorOrders: [
            {
              id: '2',
              order: 'Chest X-ray in morning',
              priority: 'medium',
              status: 'pending',
              orderedBy: 'Dr. Johnson',
              orderedAt: new Date('2024-01-15T09:00:00')
            }
          ],
          isEmergency: false
        }
      ]
    }
  ];

  const allPatients = wards.flatMap(ward => ward.patients);
  const criticalPatients = allPatients.filter(patient => patient.condition === 'critical');
  const overdueMedications = allPatients.flatMap(patient => 
    patient.medications.filter(med => med.status === 'overdue')
  );

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'deteriorating':
        return 'bg-orange-100 text-orange-800';
      case 'stable':
        return 'bg-green-100 text-green-800';
      case 'improving':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMedicationStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'given':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
        <div className={cn(isRTL && "text-right")}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('nurse.nurseDashboard')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{t('nurse.patientMonitoring')}</p>
        </div>
        <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
          <Button variant="outline" className={cn("flex items-center", isRTL ? "space-x-reverse space-x-2" : "space-x-2")}>
            <Bell className="h-4 w-4" />
            <span>Alerts</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Record Vitals</span>
          </Button>
        </div>
      </div>

      {/* Critical Alerts */}
      {criticalPatients.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">Critical Patients Alert</h3>
                <p className="text-red-700">
                  {criticalPatients.length} patient(s) require immediate attention
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-blue-600">{allPatients.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Cases</p>
                <p className="text-2xl font-bold text-red-600">{criticalPatients.length}</p>
              </div>
              <div className="p-3 rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue Meds</p>
                <p className="text-2xl font-bold text-orange-600">{overdueMedications.length}</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <Pill className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Beds</p>
                <p className="text-2xl font-bold text-green-600">
                  {wards.reduce((sum, ward) => sum + ward.availableBeds, 0)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <Bed className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {allPatients.reduce((sum, patient) => 
                    sum + patient.doctorOrders.filter(order => order.status === 'pending').length, 0
                  )}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Emergency Cases</p>
                <p className="text-2xl font-bold text-purple-600">
                  {allPatients.filter(patient => patient.isEmergency).length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="orders">Doctor Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ward Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  Ward Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wards.map((ward) => (
                    <div key={ward.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{ward.name}</h4>
                        <Badge className="bg-blue-100 text-blue-800">
                          {ward.occupiedBeds}/{ward.totalBeds} beds
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(ward.occupiedBeds / ward.totalBeds) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Occupied: {ward.occupiedBeds}</span>
                        <span>Available: {ward.availableBeds}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Critical Patients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Critical Patients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {criticalPatients.map((patient) => (
                    <div key={patient.id} className="p-4 border border-red-200 rounded-lg bg-red-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.bedNumber} • {patient.diagnosis}</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">
                          {patient.condition}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">BP:</span> {patient.vitalSigns.bloodPressure}
                        </div>
                        <div>
                          <span className="text-gray-600">HR:</span> {patient.vitalSigns.heartRate} bpm
                        </div>
                        <div>
                          <span className="text-gray-600">Temp:</span> {patient.vitalSigns.temperature}°F
                        </div>
                        <div>
                          <span className="text-gray-600">O2:</span> {patient.vitalSigns.oxygenSaturation}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allPatients.map((patient) => (
                  <div key={patient.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-gray-600">
                            {patient.bedNumber} • {patient.age} years, {patient.gender}
                          </p>
                          <p className="text-sm text-gray-600">{patient.diagnosis}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getConditionColor(patient.condition)}>
                          {patient.condition}
                        </Badge>
                        {patient.isEmergency && (
                          <Badge className="bg-red-100 text-red-800">
                            Emergency
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{patient.vitalSigns.bloodPressure}</div>
                        <div className="text-sm text-gray-600">Blood Pressure</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{patient.vitalSigns.heartRate}</div>
                        <div className="text-sm text-gray-600">Heart Rate</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{patient.vitalSigns.temperature}</div>
                        <div className="text-sm text-gray-600">Temperature</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{patient.vitalSigns.oxygenSaturation}%</div>
                        <div className="text-sm text-gray-600">Oxygen Sat</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Last updated: {patient.vitalSigns.lastUpdated.toLocaleString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Update
                        </Button>
                        <Button size="sm">
                          <Activity className="h-4 w-4 mr-1" />
                          Monitor
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Medication Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allPatients.map((patient) => (
                  <div key={patient.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">{patient.name} - {patient.bedNumber}</h4>
                      <Badge className={getConditionColor(patient.condition)}>
                        {patient.condition}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {patient.medications.map((medication) => (
                        <div key={medication.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h5 className="font-medium">{medication.name}</h5>
                              <p className="text-sm text-gray-600">
                                {medication.dosage} • {medication.frequency}
                              </p>
                              <p className="text-sm text-gray-600">
                                Next due: {medication.nextDue.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getMedicationStatusColor(medication.status)}>
                              {medication.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Mark Given
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2" />
                Doctor Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allPatients.map((patient) => (
                  <div key={patient.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">{patient.name} - {patient.bedNumber}</h4>
                      <Badge className={getConditionColor(patient.condition)}>
                        {patient.condition}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {patient.doctorOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h5 className="font-medium">{order.order}</h5>
                            <p className="text-sm text-gray-600">
                              Ordered by {order.orderedBy} • {order.orderedAt.toLocaleString()}
                            </p>
                            {order.notes && (
                              <p className="text-sm text-gray-600 mt-1">{order.notes}</p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getPriorityColor(order.priority)}>
                              {order.priority}
                            </Badge>
                            <Badge className={
                              order.status === 'completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }>
                              {order.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Complete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
