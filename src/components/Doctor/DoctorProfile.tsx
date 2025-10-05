import { useState } from 'react';
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
  User,
  Edit,
  Save,
  Camera,
  Upload,
  Download,
  Settings,
  Shield,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Star,
  Heart,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Users,
  Search,
  Filter,
  Plus,
  Trash2,
  Eye,
  MoreHorizontal,
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
  Pill,
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

export default function DoctorProfile() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSignatureOpen, setIsSignatureOpen] = useState(false);

  // Mock doctor profile data
  const doctorProfile = {
    personalInfo: {
      firstName: 'Dr. Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@hospital.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1985-03-15',
      gender: 'Female',
      address: '123 Medical Center Dr, City, State 12345',
      emergencyContact: {
        name: 'Mike Johnson',
        phone: '+1 (555) 987-6543',
        relationship: 'Spouse'
      }
    },
    professionalInfo: {
      specialization: 'Cardiology',
      department: 'Cardiology',
      licenseNumber: 'MD123456',
      experience: 15,
      consultationFee: 200,
      workingHours: {
        monday: '09:00-17:00',
        tuesday: '09:00-17:00',
        wednesday: '09:00-17:00',
        thursday: '09:00-17:00',
        friday: '09:00-17:00',
        saturday: '10:00-14:00',
        sunday: 'Off'
      },
      bio: 'Experienced cardiologist with a focus on preventive care and interventional procedures. Dedicated to providing comprehensive cardiovascular care to patients.',
      profilePicture: '/avatars/sarah_johnson.jpg'
    },
    qualifications: [
      {
        id: 'QUAL001',
        degree: 'MD',
        institution: 'Harvard Medical School',
        year: 2010,
        specialization: 'Medicine'
      },
      {
        id: 'QUAL002',
        degree: 'FACC',
        institution: 'American College of Cardiology',
        year: 2015,
        specialization: 'Cardiology'
      },
      {
        id: 'QUAL003',
        degree: 'PhD',
        institution: 'Johns Hopkins University',
        year: 2012,
        specialization: 'Cardiovascular Research'
      }
    ],
    certifications: [
      {
        id: 'CERT001',
        name: 'Board Certified Cardiologist',
        issuingBody: 'American Board of Internal Medicine',
        issueDate: '2015-06-15',
        expiryDate: '2025-06-15',
        status: 'Active'
      },
      {
        id: 'CERT002',
        name: 'Echocardiography Specialist',
        issuingBody: 'American Society of Echocardiography',
        issueDate: '2016-03-20',
        expiryDate: '2026-03-20',
        status: 'Active'
      },
      {
        id: 'CERT003',
        name: 'Advanced Cardiac Life Support',
        issuingBody: 'American Heart Association',
        issueDate: '2023-01-10',
        expiryDate: '2025-01-10',
        status: 'Active'
      }
    ],
    achievements: [
      {
        id: 'ACH001',
        title: 'Best Cardiologist Award',
        organization: 'City Medical Association',
        year: 2023,
        description: 'Recognized for outstanding patient care and clinical excellence'
      },
      {
        id: 'ACH002',
        title: 'Research Excellence Award',
        organization: 'American Heart Association',
        year: 2022,
        description: 'For groundbreaking research in cardiovascular disease prevention'
      },
      {
        id: 'ACH003',
        title: 'Patient Satisfaction Award',
        organization: 'Hospital Administration',
        year: 2023,
        description: 'Highest patient satisfaction rating in the cardiology department'
      }
    ],
    signature: {
      digitalSignature: '/signatures/sarah_johnson_signature.png',
      lastUpdated: '2024-01-15',
      isActive: true
    }
  };

  const handleSaveProfile = () => {
    console.log('Saving profile changes');
    setIsEditOpen(false);
  };

  const handleSaveSignature = () => {
    console.log('Saving signature');
    setIsSignatureOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Profile & Credentials</h1>
          <p className="text-gray-600 mt-1">Manage your professional profile, qualifications, and credentials</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => setIsSignatureOpen(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Update Signature
          </Button>
          <Button onClick={() => setIsEditOpen(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">
                {doctorProfile.personalInfo.firstName.split(' ')[0][0]}{doctorProfile.personalInfo.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {doctorProfile.personalInfo.firstName} {doctorProfile.personalInfo.lastName}
                  </h2>
                  <p className="text-lg text-gray-600">{doctorProfile.professionalInfo.specialization}</p>
                  <p className="text-sm text-gray-500">{doctorProfile.professionalInfo.department} Department</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">
                    {doctorProfile.professionalInfo.experience} years experience
                  </Badge>
                  <Badge className="bg-green-100 text-green-800">
                    License: {doctorProfile.professionalInfo.licenseNumber}
                  </Badge>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{doctorProfile.professionalInfo.bio}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Consultation Fee:</span>
                  <span className="ml-2">{doctorProfile.professionalInfo.consultationFee}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email:</span>
                  <span className="ml-2">{doctorProfile.personalInfo.email}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Phone:</span>
                  <span className="ml-2">{doctorProfile.personalInfo.phone}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Emergency Contact:</span>
                  <span className="ml-2">{doctorProfile.personalInfo.emergencyContact.name}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" value={doctorProfile.personalInfo.firstName} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" value={doctorProfile.personalInfo.lastName} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={doctorProfile.personalInfo.email} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={doctorProfile.personalInfo.phone} readOnly />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" value={doctorProfile.personalInfo.dateOfBirth} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" value={doctorProfile.personalInfo.gender} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" value={doctorProfile.personalInfo.address} readOnly />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Professional Information Tab */}
        <TabsContent value="professional">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" value={doctorProfile.professionalInfo.specialization} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" value={doctorProfile.professionalInfo.department} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="license">License Number</Label>
                    <Input id="license" value={doctorProfile.professionalInfo.licenseNumber} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience (years)</Label>
                    <Input id="experience" value={doctorProfile.professionalInfo.experience} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="consultation-fee">Consultation Fee</Label>
                    <Input id="consultation-fee" value={doctorProfile.professionalInfo.consultationFee} readOnly />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" value={doctorProfile.professionalInfo.bio} readOnly rows={4} />
                </div>
                
                <div>
                  <Label>Working Hours</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {Object.entries(doctorProfile.professionalInfo.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="font-medium capitalize">{day}</span>
                        <span className="text-sm text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Qualifications Tab */}
        <TabsContent value="qualifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Qualifications ({doctorProfile.qualifications.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {doctorProfile.qualifications.map((qualification) => (
                    <div key={qualification.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{qualification.degree}</h3>
                            <Badge variant="outline">{qualification.specialization}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {qualification.institution} • {qualification.year}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
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

        {/* Certifications Tab */}
        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Certifications ({doctorProfile.certifications.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {doctorProfile.certifications.map((certification) => (
                    <div key={certification.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{certification.name}</h3>
                            <Badge className={getStatusColor(certification.status)}>
                              {certification.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {certification.issuingBody}
                          </div>
                          <div className="text-sm text-gray-600">
                            Issued: {certification.issueDate} • Expires: {certification.expiryDate}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
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

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Medal className="h-5 w-5 mr-2" />
                Achievements ({doctorProfile.achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {doctorProfile.achievements.map((achievement) => (
                    <div key={achievement.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                            <Badge variant="outline">{achievement.year}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {achievement.organization}
                          </div>
                          <div className="text-sm text-gray-700">
                            {achievement.description}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
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
      </Tabs>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Edit className="h-5 w-5 mr-2" />
              Edit Profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-first-name">First Name</Label>
                <Input id="edit-first-name" defaultValue={doctorProfile.personalInfo.firstName} />
              </div>
              <div>
                <Label htmlFor="edit-last-name">Last Name</Label>
                <Input id="edit-last-name" defaultValue={doctorProfile.personalInfo.lastName} />
              </div>
              <div>
                <Label htmlFor="edit-email">Email</Label>
                <Input id="edit-email" defaultValue={doctorProfile.personalInfo.email} />
              </div>
              <div>
                <Label htmlFor="edit-phone">Phone</Label>
                <Input id="edit-phone" defaultValue={doctorProfile.personalInfo.phone} />
              </div>
            </div>
            
            <div>
              <Label htmlFor="edit-bio">Bio</Label>
              <Textarea id="edit-bio" defaultValue={doctorProfile.professionalInfo.bio} rows={4} />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-1" />
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Signature Dialog */}
      <Dialog open={isSignatureOpen} onOpenChange={setIsSignatureOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Edit className="h-5 w-5 mr-2" />
              Update Digital Signature
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload your digital signature</p>
              <p className="text-sm text-gray-500">Supports PNG, JPG, PDF files</p>
              <Button className="mt-4">
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsSignatureOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveSignature}>
                <Save className="h-4 w-4 mr-1" />
                Save Signature
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
