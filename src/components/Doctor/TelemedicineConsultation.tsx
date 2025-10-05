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
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Camera,
  CameraOff,
  MessageSquare,
  Send,
  FileText,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Save,
  Plus,
  Search,
  Filter,
  Settings,
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
  Pill,
  Capsule,
  Tablet,
  Injection,
  Vaccine,
  Mask,
  Gloves,
  Goggles,
  Helmet,
  Shield,
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

export default function TelemedicineConsultation() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('sessions');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<any[]>([]);

  // Mock consultation sessions
  const consultationSessions = [
    {
      id: 'CONS001',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        mrn: 'MRN123456789',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        insurance: 'Blue Cross Blue Shield'
      },
      session: {
        type: 'Video Consultation',
        status: 'Completed',
        startTime: '2024-01-20T10:00:00',
        endTime: '2024-01-20T10:45:00',
        duration: '45 minutes',
        quality: 'Good',
        connection: 'Stable'
      },
      diagnosis: {
        primary: 'Hypertension',
        secondary: ['Type 2 Diabetes'],
        notes: 'Patient reports good blood pressure control with current medication'
      },
      prescription: {
        medications: [
          { name: 'Lisinopril 10mg', dosage: 'Once daily', duration: '30 days' },
          { name: 'Metformin 500mg', dosage: 'Twice daily', duration: '30 days' }
        ],
        instructions: 'Continue current medications, monitor blood pressure daily'
      },
      followUp: {
        nextAppointment: '2024-02-20',
        instructions: 'Follow up in 1 month for medication review'
      },
      createdBy: 'Dr. Sarah Johnson',
      createdDate: '2024-01-20'
    },
    {
      id: 'CONS002',
      patient: {
        name: 'Sarah Johnson',
        id: 'P001235',
        age: 32,
        gender: 'Female',
        mrn: 'MRN234567890',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        insurance: 'Aetna'
      },
      session: {
        type: 'Audio Consultation',
        status: 'Scheduled',
        startTime: '2024-01-25T14:00:00',
        endTime: null,
        duration: '30 minutes',
        quality: 'N/A',
        connection: 'N/A'
      },
      diagnosis: {
        primary: 'Migraine',
        secondary: ['Anxiety'],
        notes: 'Patient experiencing frequent migraines, needs medication adjustment'
      },
      prescription: {
        medications: [
          { name: 'Sumatriptan 50mg', dosage: 'As needed', duration: '10 tablets' },
          { name: 'Propranolol 20mg', dosage: 'Twice daily', duration: '30 days' }
        ],
        instructions: 'Take sumatriptan at onset of migraine, continue propranolol for prevention'
      },
      followUp: {
        nextAppointment: '2024-02-10',
        instructions: 'Follow up in 2 weeks to assess migraine frequency'
      },
      createdBy: 'Dr. Michael Chen',
      createdDate: '2024-01-25'
    },
    {
      id: 'CONS003',
      patient: {
        name: 'Michael Brown',
        id: 'P001236',
        age: 58,
        gender: 'Male',
        mrn: 'MRN345678901',
        phone: '+1 (555) 345-6789',
        email: 'michael.brown@email.com',
        insurance: 'Medicare'
      },
      session: {
        type: 'Video Consultation',
        status: 'In Progress',
        startTime: '2024-01-25T15:30:00',
        endTime: null,
        duration: 'Ongoing',
        quality: 'Excellent',
        connection: 'Stable'
      },
      diagnosis: {
        primary: 'Chest Pain',
        secondary: ['Hypertension'],
        notes: 'Patient experiencing chest discomfort, needs evaluation'
      },
      prescription: {
        medications: [
          { name: 'Nitroglycerin 0.4mg', dosage: 'As needed', duration: '30 tablets' },
          { name: 'Aspirin 81mg', dosage: 'Once daily', duration: 'Lifelong' }
        ],
        instructions: 'Take nitroglycerin if chest pain occurs, continue daily aspirin'
      },
      followUp: {
        nextAppointment: '2024-01-30',
        instructions: 'Follow up in 5 days for chest pain evaluation'
      },
      createdBy: 'Dr. Emily Rodriguez',
      createdDate: '2024-01-25'
    }
  ];

  // Mock chat messages
  const mockChatMessages = [
    {
      id: 'MSG001',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'Hello John, how are you feeling today?',
      timestamp: '2024-01-20T10:00:00',
      type: 'text'
    },
    {
      id: 'MSG002',
      sender: 'patient',
      senderName: 'John Smith',
      message: 'Hello Doctor, I\'m feeling much better. My blood pressure has been stable.',
      timestamp: '2024-01-20T10:02:00',
      type: 'text'
    },
    {
      id: 'MSG003',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'That\'s great to hear. Are you taking your medications as prescribed?',
      timestamp: '2024-01-20T10:03:00',
      type: 'text'
    },
    {
      id: 'MSG004',
      sender: 'patient',
      senderName: 'John Smith',
      message: 'Yes, I\'m taking them regularly. I have a question about my diet.',
      timestamp: '2024-01-20T10:05:00',
      type: 'text'
    },
    {
      id: 'MSG005',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'Of course, what would you like to know?',
      timestamp: '2024-01-20T10:06:00',
      type: 'text'
    }
  ];

  const handleStartConsultation = (patient: any) => {
    setSelectedPatient(patient);
    setIsConsultationOpen(true);
    setIsCallActive(true);
    setChatMessages(mockChatMessages);
  };

  const handleEndConsultation = () => {
    setIsCallActive(false);
    setIsConsultationOpen(false);
    setSelectedPatient(null);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: `MSG${Date.now()}`,
        sender: 'doctor',
        senderName: 'Dr. Sarah Johnson',
        message: chatMessage,
        timestamp: new Date().toISOString(),
        type: 'text'
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatMessage('');
    }
  };

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const handleToggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Consultation': return <Video className="h-4 w-4 text-blue-600" />;
      case 'Audio Consultation': return <Phone className="h-4 w-4 text-green-600" />;
      case 'Chat Consultation': return <MessageSquare className="h-4 w-4 text-purple-600" />;
      default: return <Video className="h-4 w-4 text-gray-600" />;
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Telemedicine Consultation</h1>
          <p className="text-gray-600 mt-1">Video consultations, digital prescriptions, and secure patient communication</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setIsConsultationOpen(true)}>
            <Video className="h-4 w-4 mr-2" />
            Start Consultation
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sessions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Sessions Tab */}
        <TabsContent value="sessions">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search sessions, patients, or diagnoses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Video Consultation">Video</SelectItem>
                    <SelectItem value="Audio Consultation">Audio</SelectItem>
                    <SelectItem value="Chat Consultation">Chat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Sessions List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2" />
                Consultation Sessions ({consultationSessions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {consultationSessions.map((session) => (
                    <div key={session.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {session.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{session.patient.name}</h3>
                              <Badge className={getStatusColor(session.session.status)}>
                                {session.session.status}
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                {getTypeIcon(session.session.type)}
                                <span className="ml-1">{session.session.type}</span>
                              </Badge>
                              {session.session.quality !== 'N/A' && (
                                <Badge className={getQualityColor(session.session.quality)}>
                                  {session.session.quality}
                                </Badge>
                              )}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {session.patient.age}y, {session.patient.gender}</div>
                              <div>MRN: {session.patient.mrn}</div>
                              <div>Start: {format(new Date(session.session.startTime), 'MMM dd, yyyy HH:mm')}</div>
                              <div>Duration: {session.session.duration}</div>
                            </div>
                            <div className="mt-2">
                              <div className="text-sm font-medium text-gray-700">Primary Diagnosis:</div>
                              <div className="text-sm text-gray-600">{session.diagnosis.primary}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {session.session.status === 'In Progress' ? (
                            <Button size="sm" onClick={() => handleStartConsultation(session)}>
                              <Video className="h-4 w-4 mr-1" />
                              Join
                            </Button>
                          ) : session.session.status === 'Scheduled' ? (
                            <Button size="sm" variant="outline" onClick={() => handleStartConsultation(session)}>
                              <Video className="h-4 w-4 mr-1" />
                              Start
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>

                      {/* Session Details */}
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-gray-700">Prescription:</div>
                            <div className="text-gray-600">
                              {session.prescription.medications.map((med, index) => (
                                <div key={index}>• {med.name} - {med.dosage}</div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">Follow-up:</div>
                            <div className="text-gray-600">
                              {session.followUp.nextAppointment} - {session.followUp.instructions}
                            </div>
                          </div>
                        </div>
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
                Telemedicine Patients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Patient management</div>
                <div className="text-sm text-gray-500">Manage patients for telemedicine consultations</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Prescriptions Tab */}
        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Digital Prescriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Digital prescriptions</div>
                <div className="text-sm text-gray-500">Manage prescriptions from telemedicine consultations</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Telemedicine Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Video Settings</Label>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Camera</div>
                        <div className="text-sm text-gray-600">Enable camera for video consultations</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Microphone</div>
                        <div className="text-sm text-gray-600">Enable microphone for audio consultations</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Screen Sharing</div>
                        <div className="text-sm text-gray-600">Allow screen sharing during consultations</div>
                      </div>
                      <Checkbox />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Consultation Settings</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="max-duration">Maximum Session Duration (minutes)</Label>
                      <Input id="max-duration" type="number" defaultValue="60" />
                    </div>
                    <div>
                      <Label htmlFor="recording">Enable Session Recording</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enabled">Enabled</SelectItem>
                          <SelectItem value="disabled">Disabled</SelectItem>
                          <SelectItem value="patient-consent">With Patient Consent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Quality Settings</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="video-quality">Video Quality</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto</SelectItem>
                          <SelectItem value="high">High (1080p)</SelectItem>
                          <SelectItem value="medium">Medium (720p)</SelectItem>
                          <SelectItem value="low">Low (480p)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="audio-quality">Audio Quality</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Consultation with {selectedPatient?.patient.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.patient.age}y, {selectedPatient?.patient.gender} • {selectedPatient?.session.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsChatOpen(!isChatOpen)}>
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat
                </Button>
                <Button size="sm" variant="outline" onClick={handleEndConsultation}>
                  <PhoneOff className="h-4 w-4 mr-1" />
                  End Call
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Video Area */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Video className="h-5 w-5 mr-2" />
                        Video Consultation
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant={isVideoOn ? "default" : "outline"}
                          onClick={handleToggleVideo}
                        >
                          {isVideoOn ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant={isMicOn ? "default" : "outline"}
                          onClick={handleToggleMic}
                        >
                          {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                      {isCallActive ? (
                        <div className="text-center text-white">
                          <Video className="h-16 w-16 mx-auto mb-4" />
                          <div className="text-lg font-medium">Video Call Active</div>
                          <div className="text-sm text-gray-400">Connection: {selectedPatient.session.connection}</div>
                          <div className="text-sm text-gray-400">Quality: {selectedPatient.session.quality}</div>
                        </div>
                      ) : (
                        <div className="text-center text-white">
                          <VideoOff className="h-16 w-16 mx-auto mb-4" />
                          <div className="text-lg font-medium">Call Ended</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Patient Information */}
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Patient Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Name:</strong> {selectedPatient.patient.name}</div>
                      <div><strong>Age/Gender:</strong> {selectedPatient.patient.age}y, {selectedPatient.patient.gender}</div>
                      <div><strong>MRN:</strong> {selectedPatient.patient.mrn}</div>
                      <div><strong>Insurance:</strong> {selectedPatient.patient.insurance}</div>
                      <div><strong>Phone:</strong> {selectedPatient.patient.phone}</div>
                      <div><strong>Email:</strong> {selectedPatient.patient.email}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chat and Notes */}
              <div className="lg:col-span-1">
                {isChatOpen && (
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-lg">Chat Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-64 mb-4">
                        <div className="space-y-3">
                          {chatMessages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-xs p-3 rounded-lg ${
                                msg.sender === 'doctor' 
                                  ? 'bg-blue-100 text-blue-900' 
                                  : 'bg-gray-100 text-gray-900'
                              }`}>
                                <div className="text-sm font-medium">{msg.senderName}</div>
                                <div className="text-sm">{msg.message}</div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {format(new Date(msg.timestamp), 'HH:mm')}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Type a message..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Consultation Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Consultation Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="diagnosis">Diagnosis</Label>
                        <Textarea
                          id="diagnosis"
                          placeholder="Enter diagnosis..."
                          defaultValue={selectedPatient.diagnosis.primary}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="notes">Clinical Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Enter clinical notes..."
                          defaultValue={selectedPatient.diagnosis.notes}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="prescription">Prescription</Label>
                        <Textarea
                          id="prescription"
                          placeholder="Enter prescription details..."
                          defaultValue={selectedPatient.prescription.instructions}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="follow-up">Follow-up Instructions</Label>
                        <Textarea
                          id="follow-up"
                          placeholder="Enter follow-up instructions..."
                          defaultValue={selectedPatient.followUp.instructions}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
