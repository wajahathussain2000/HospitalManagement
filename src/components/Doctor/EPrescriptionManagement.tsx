import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Pill,
  Search,
  Plus,
  Edit,
  Trash2,
  Save,
  Send,
  Download,
  Printer,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  User,
  FileText,
  Shield,
  Bell,
  Settings,
  Filter,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Copy,
  Share,
  Bookmark,
  Flag,
  Tag,
  Layers,
  Database,
  Cloud,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Table,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
  BarChart3,
  PieChart,
  Target,
  TrendingUp,
  TrendingDown,
  Zap,
  Users,
  Star,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Thermometer,
  Gauge,
  Scale,
  Ruler,
  Compass,
  MapPin,
  Navigation,
  Route,
  Map,
  Globe,
  Building,
  Home,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Truck,
  Ship,
  Anchor,
  Sailboat,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Beaker,
  TestTube,
  Flask,
  Atom,
  Dna,
  Syringe,
  Bandage,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield as ShieldIcon,
  Sword,
  Bow,
  Arrow,
  Target as TargetIcon,
  Crosshair,
  Focus,
  Zap as ZapIcon,
  Bolt,
  Flash,
  Spark,
  Fire,
  Water,
  Earth,
  Air,
  Leaf,
  Tree,
  Flower,
  Seed,
  Sprout,
  Branch,
  Root,
  Trunk,
  Bark,
  Wood,
  Log,
  Lumber,
  Timber,
  Plank,
  Board,
  Beam,
  Pole,
  Stick,
  Rod,
  Staff,
  Wand,
  Scepter,
  Crown as CrownIcon,
  Tiara,
  Diadem,
  Circlet,
  Ring,
  Gem as GemIcon,
  Jewel,
  Pearl,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Jade,
  Coral,
  Amber,
  Ivory,
  Gold,
  Silver,
  Bronze,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Tin,
  Lead,
  Zinc,
  Nickel,
  Cobalt,
  Chromium,
  Manganese,
  Titanium,
  Vanadium,
  Tungsten,
  Molybdenum,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Hafnium,
  Tantalum,
  Niobium,
  Zirconium,
  Yttrium,
  Scandium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';
import { format } from 'date-fns';

export default function EPrescriptionManagement() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('catalog');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedMedications, setSelectedMedications] = useState<any[]>([]);

  // Mock medicine catalog
  const medicineCatalog = [
    {
      id: 'MED001',
      name: 'Metformin',
      genericName: 'Metformin Hydrochloride',
      category: 'Antidiabetic',
      dosage: '500mg, 850mg, 1000mg',
      form: 'Tablet',
      manufacturer: 'Generic Pharma',
      description: 'Biguanide antidiabetic agent used to treat type 2 diabetes',
      indications: ['Type 2 Diabetes Mellitus'],
      contraindications: ['Severe renal impairment', 'Lactic acidosis'],
      sideEffects: ['Nausea', 'Diarrhea', 'Metallic taste'],
      interactions: ['Contrast media', 'Alcohol'],
      storage: 'Store at room temperature',
      prescriptionRequired: true,
      controlledSubstance: false,
      price: 25.99,
      inStock: true,
      quantity: 100
    },
    {
      id: 'MED002',
      name: 'Lisinopril',
      genericName: 'Lisinopril',
      category: 'ACE Inhibitor',
      dosage: '5mg, 10mg, 20mg, 40mg',
      form: 'Tablet',
      manufacturer: 'CardioMed',
      description: 'ACE inhibitor used to treat hypertension and heart failure',
      indications: ['Hypertension', 'Heart Failure', 'Post-MI'],
      contraindications: ['Pregnancy', 'Bilateral renal artery stenosis'],
      sideEffects: ['Dry cough', 'Dizziness', 'Fatigue'],
      interactions: ['Potassium supplements', 'NSAIDs'],
      storage: 'Store at room temperature',
      prescriptionRequired: true,
      controlledSubstance: false,
      price: 18.50,
      inStock: true,
      quantity: 150
    },
    {
      id: 'MED003',
      name: 'Atorvastatin',
      genericName: 'Atorvastatin Calcium',
      category: 'Statin',
      dosage: '10mg, 20mg, 40mg, 80mg',
      form: 'Tablet',
      manufacturer: 'LipidCare',
      description: 'HMG-CoA reductase inhibitor for cholesterol management',
      indications: ['Hypercholesterolemia', 'Cardiovascular disease prevention'],
      contraindications: ['Active liver disease', 'Pregnancy'],
      sideEffects: ['Muscle pain', 'Liver enzyme elevation', 'Digestive issues'],
      interactions: ['Grapefruit juice', 'Warfarin'],
      storage: 'Store at room temperature',
      prescriptionRequired: true,
      controlledSubstance: false,
      price: 32.75,
      inStock: true,
      quantity: 80
    },
    {
      id: 'MED004',
      name: 'Amlodipine',
      genericName: 'Amlodipine Besylate',
      category: 'Calcium Channel Blocker',
      dosage: '2.5mg, 5mg, 10mg',
      form: 'Tablet',
      manufacturer: 'VasculoMed',
      description: 'Dihydropyridine calcium channel blocker for hypertension',
      indications: ['Hypertension', 'Angina'],
      contraindications: ['Severe hypotension', 'Cardiogenic shock'],
      sideEffects: ['Peripheral edema', 'Headache', 'Flushing'],
      interactions: ['Grapefruit juice', 'Simvastatin'],
      storage: 'Store at room temperature',
      prescriptionRequired: true,
      controlledSubstance: false,
      price: 22.30,
      inStock: true,
      quantity: 120
    },
    {
      id: 'MED005',
      name: 'Omeprazole',
      genericName: 'Omeprazole',
      category: 'Proton Pump Inhibitor',
      dosage: '10mg, 20mg, 40mg',
      form: 'Capsule',
      manufacturer: 'GastroMed',
      description: 'Proton pump inhibitor for acid-related disorders',
      indications: ['GERD', 'Peptic ulcer', 'Zollinger-Ellison syndrome'],
      contraindications: ['Hypersensitivity to PPIs'],
      sideEffects: ['Headache', 'Nausea', 'Diarrhea'],
      interactions: ['Clopidogrel', 'Warfarin'],
      storage: 'Store at room temperature',
      prescriptionRequired: true,
      controlledSubstance: false,
      price: 28.90,
      inStock: true,
      quantity: 90
    }
  ];

  // Mock patients for prescription
  const patients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      mrn: 'MRN123456789',
      allergies: ['Penicillin', 'Sulfa'],
      currentMedications: ['Metformin 1000mg', 'Lisinopril 10mg'],
      conditions: ['Type 2 Diabetes', 'Hypertension'],
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      insurance: 'Blue Cross Blue Shield'
    },
    {
      id: 'P002',
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      mrn: 'MRN234567890',
      allergies: ['None known'],
      currentMedications: ['Multivitamin'],
      conditions: ['None'],
      phone: '+1 (555) 234-5678',
      email: 'sarah.johnson@email.com',
      insurance: 'Aetna'
    }
  ];

  // Mock prescription history
  const prescriptionHistory = [
    {
      id: 'RX001',
      patientId: 'P001',
      patientName: 'John Smith',
      medications: [
        { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily', quantity: 60, instructions: 'Take with food' },
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', quantity: 30, instructions: 'Take in the morning' }
      ],
      prescribedDate: '2024-01-15',
      prescribedBy: 'Dr. Sarah Johnson',
      status: 'Active',
      refills: 3,
      totalCost: 44.49,
      pharmacy: 'CVS Pharmacy',
      notes: 'Continue current regimen. Monitor blood sugar and blood pressure.'
    },
    {
      id: 'RX002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      medications: [
        { name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily', quantity: 30, instructions: 'Take at bedtime' }
      ],
      prescribedDate: '2024-01-10',
      prescribedBy: 'Dr. Michael Chen',
      status: 'Completed',
      refills: 0,
      totalCost: 32.75,
      pharmacy: 'Walgreens',
      notes: 'First prescription. Monitor for muscle pain.'
    }
  ];

  const handleAddMedication = (medication: any) => {
    const newMedication = {
      ...medication,
      dosage: medication.dosage.split(',')[0], // Take first dosage option
      frequency: 'Once daily',
      quantity: 30,
      instructions: '',
      duration: '30 days'
    };
    setSelectedMedications(prev => [...prev, newMedication]);
  };

  const handleRemoveMedication = (medicationId: string) => {
    setSelectedMedications(prev => prev.filter(med => med.id !== medicationId));
  };

  const handleCreatePrescription = (patient: any) => {
    setSelectedPatient(patient);
    setIsPrescriptionOpen(true);
    setSelectedMedications([]);
  };

  const handleSavePrescription = () => {
    console.log('Saving prescription for:', selectedPatient.name);
    console.log('Medications:', selectedMedications);
    setIsPrescriptionOpen(false);
    setSelectedMedications([]);
  };

  const filteredMedicines = medicineCatalog.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || medicine.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">E-Prescription Management</h1>
          <p className="text-gray-600 mt-1">Digital prescription system with medicine catalog and pharmacy integration</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Prescription
          </Button>
        </div>
      </div>

      <Tabs defaultValue="catalog" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="catalog">Medicine Catalog</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
        </TabsList>

        {/* Medicine Catalog Tab */}
        <TabsContent value="catalog">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search medicines by name, generic name, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Antidiabetic">Antidiabetic</SelectItem>
                    <SelectItem value="ACE Inhibitor">ACE Inhibitor</SelectItem>
                    <SelectItem value="Statin">Statin</SelectItem>
                    <SelectItem value="Calcium Channel Blocker">Calcium Channel Blocker</SelectItem>
                    <SelectItem value="Proton Pump Inhibitor">Proton Pump Inhibitor</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Medicine List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Medicine Catalog ({filteredMedicines.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{medicine.name}</h3>
                            <Badge variant="outline">{medicine.category}</Badge>
                            <Badge className="bg-blue-100 text-blue-800">{medicine.form}</Badge>
                            {medicine.inStock ? (
                              <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div><strong>Generic:</strong> {medicine.genericName}</div>
                            <div><strong>Dosage:</strong> {medicine.dosage}</div>
                            <div><strong>Manufacturer:</strong> {medicine.manufacturer}</div>
                            <div><strong>Price:</strong> ${medicine.price}</div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm font-medium text-gray-700">Indications:</div>
                            <div className="text-sm text-gray-600">
                              {medicine.indications.join(', ')}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={() => handleAddMedication(medicine)}
                            disabled={!medicine.inStock}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Prescriptions Tab */}
        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Prescription History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {prescriptionHistory.map((prescription) => (
                    <div key={prescription.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="font-medium text-gray-900">{prescription.patientName}</h3>
                            <Badge className={getStatusColor(prescription.status)}>
                              {prescription.status}
                            </Badge>
                            <Badge variant="outline">RX{prescription.id}</Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            Prescribed by {prescription.prescribedBy} on {prescription.prescribedDate}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                            <Button size="sm" variant="outline">
                              <Printer className="h-4 w-4 mr-1" />
                              Print
                            </Button>
                          <Button size="sm" variant="outline">
                            <Send className="h-4 w-4 mr-1" />
                            Send
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Medications:</div>
                          <div className="space-y-2">
                            {prescription.medications.map((med, index) => (
                              <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                                <div className="font-medium">{med.name} {med.dosage}</div>
                                <div className="text-gray-600">
                                  {med.frequency} • Quantity: {med.quantity} • Refills: {prescription.refills}
                                </div>
                                <div className="text-gray-600">Instructions: {med.instructions}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div><strong>Pharmacy:</strong> {prescription.pharmacy}</div>
                          <div><strong>Total Cost:</strong> ${prescription.totalCost}</div>
                        </div>
                        
                        {prescription.notes && (
                          <div>
                            <div className="text-sm font-medium text-gray-700">Notes:</div>
                            <div className="text-sm text-gray-600">{prescription.notes}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patients Tab */}
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patients for Prescription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {patients.map((patient) => (
                  <div key={patient.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-blue-100 text-blue-800">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{patient.name}</div>
                          <div className="text-sm text-gray-600">{patient.age}y, {patient.gender}</div>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => handleCreatePrescription(patient)}>
                        <Plus className="h-4 w-4 mr-1" />
                        Prescribe
                      </Button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong>MRN:</strong> {patient.mrn}</div>
                      <div><strong>Allergies:</strong> {patient.allergies.join(', ')}</div>
                      <div><strong>Current Medications:</strong> {patient.currentMedications.join(', ')}</div>
                      <div><strong>Conditions:</strong> {patient.conditions.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pharmacy Tab */}
        <TabsContent value="pharmacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Pharmacy Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Pharmacy integration features</div>
                <div className="text-sm text-gray-500">Connect with local pharmacies for prescription delivery</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Prescription Creation Dialog */}
      <Dialog open={isPrescriptionOpen} onOpenChange={setIsPrescriptionOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{selectedPatient?.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.age}y, {selectedPatient?.gender} • {selectedPatient?.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsPrescriptionOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSavePrescription}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Prescription
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Allergies:</strong> {selectedPatient.allergies.join(', ')}</div>
                    <div><strong>Current Medications:</strong> {selectedPatient.currentMedications.join(', ')}</div>
                    <div><strong>Conditions:</strong> {selectedPatient.conditions.join(', ')}</div>
                    <div><strong>Insurance:</strong> {selectedPatient.insurance}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Medications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Pill className="h-5 w-5 mr-2" />
                      Selected Medications ({selectedMedications.length})
                    </div>
                    <Button size="sm" onClick={() => setActiveTab('catalog')}>
                      <Plus className="h-4 w-4 mr-1" />
                      Add Medicine
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedMedications.length > 0 ? (
                    <div className="space-y-4">
                      {selectedMedications.map((medication, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{medication.name}</div>
                              <div className="text-sm text-gray-600">{medication.genericName}</div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleRemoveMedication(medication.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor={`dosage-${index}`}>Dosage</Label>
                              <Select defaultValue={medication.dosage}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {medication.dosage.split(',').map(dosage => (
                                    <SelectItem key={dosage.trim()} value={dosage.trim()}>
                                      {dosage.trim()}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor={`frequency-${index}`}>Frequency</Label>
                              <Select defaultValue={medication.frequency}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Once daily">Once daily</SelectItem>
                                  <SelectItem value="Twice daily">Twice daily</SelectItem>
                                  <SelectItem value="Three times daily">Three times daily</SelectItem>
                                  <SelectItem value="Four times daily">Four times daily</SelectItem>
                                  <SelectItem value="As needed">As needed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor={`quantity-${index}`}>Quantity</Label>
                              <Input
                                id={`quantity-${index}`}
                                type="number"
                                defaultValue={medication.quantity}
                                min="1"
                                max="90"
                              />
                            </div>
                            <div>
                              <Label htmlFor={`duration-${index}`}>Duration</Label>
                              <Select defaultValue={medication.duration}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="7 days">7 days</SelectItem>
                                  <SelectItem value="14 days">14 days</SelectItem>
                                  <SelectItem value="30 days">30 days</SelectItem>
                                  <SelectItem value="60 days">60 days</SelectItem>
                                  <SelectItem value="90 days">90 days</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <Label htmlFor={`instructions-${index}`}>Instructions</Label>
                            <Textarea
                              id={`instructions-${index}`}
                              placeholder="Special instructions for the patient..."
                              defaultValue={medication.instructions}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <div className="text-gray-600">No medications selected</div>
                      <div className="text-sm text-gray-500">Add medications from the catalog to create a prescription</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
