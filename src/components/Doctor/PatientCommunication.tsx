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
  MessageSquare,
  Send,
  Phone,
  Mail,
  FileText,
  User,
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Eye,
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

export default function PatientCommunication() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('patients');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [noteContent, setNoteContent] = useState('');

  // Mock patients
  const patients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      mrn: 'MRN123456789',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      lastContact: '2024-01-20',
      status: 'Active',
      priority: 'High'
    },
    {
      id: 'P002',
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      mrn: 'MRN234567890',
      phone: '+1 (555) 234-5678',
      email: 'sarah.johnson@email.com',
      lastContact: '2024-01-18',
      status: 'Active',
      priority: 'Medium'
    },
    {
      id: 'P003',
      name: 'Michael Brown',
      age: 58,
      gender: 'Male',
      mrn: 'MRN345678901',
      phone: '+1 (555) 345-6789',
      email: 'michael.brown@email.com',
      lastContact: '2024-01-15',
      status: 'Follow-up Required',
      priority: 'High'
    }
  ];

  // Mock staff members
  const staffMembers = [
    {
      id: 'S001',
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      department: 'Cardiology',
      status: 'Online',
      lastSeen: '2024-01-25T10:30:00'
    },
    {
      id: 'S002',
      name: 'Dr. Michael Chen',
      role: 'Neurologist',
      department: 'Neurology',
      status: 'Online',
      lastSeen: '2024-01-25T10:25:00'
    },
    {
      id: 'S003',
      name: 'Nurse Emily Rodriguez',
      role: 'Registered Nurse',
      department: 'Cardiology',
      status: 'Busy',
      lastSeen: '2024-01-25T10:20:00'
    },
    {
      id: 'S004',
      name: 'Dr. David Wilson',
      role: 'Pediatrician',
      department: 'Pediatrics',
      status: 'Offline',
      lastSeen: '2024-01-24T17:00:00'
    }
  ];

  // Mock chat messages
  const mockChatMessages = [
    {
      id: 'MSG001',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'Hello John, how are you feeling after your last appointment?',
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

  // Mock staff chat messages
  const mockStaffMessages = [
    {
      id: 'MSG001',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'Hi Emily, can you check on Mr. Smith\'s vital signs?',
      timestamp: '2024-01-25T10:00:00',
      type: 'text'
    },
    {
      id: 'MSG002',
      sender: 'nurse',
      senderName: 'Nurse Emily Rodriguez',
      message: 'Sure Dr. Johnson, I\'ll check his vitals right away.',
      timestamp: '2024-01-25T10:01:00',
      type: 'text'
    },
    {
      id: 'MSG003',
      sender: 'nurse',
      senderName: 'Nurse Emily Rodriguez',
      message: 'His BP is 120/80, HR 72, temp 98.6. All within normal range.',
      timestamp: '2024-01-25T10:05:00',
      type: 'text'
    },
    {
      id: 'MSG004',
      sender: 'doctor',
      senderName: 'Dr. Sarah Johnson',
      message: 'Perfect, thank you Emily. Please continue monitoring.',
      timestamp: '2024-01-25T10:06:00',
      type: 'text'
    }
  ];

  // Mock private notes
  const privateNotes = [
    {
      id: 'NOTE001',
      patientId: 'P001',
      patientName: 'John Smith',
      title: 'Blood Pressure Monitoring',
      content: 'Patient shows good response to current medication. BP readings consistently within normal range. Continue current treatment plan.',
      createdDate: '2024-01-20',
      createdBy: 'Dr. Sarah Johnson',
      priority: 'Medium',
      tags: ['Blood Pressure', 'Medication', 'Monitoring']
    },
    {
      id: 'NOTE002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      title: 'Diet Consultation Notes',
      content: 'Patient needs to reduce sodium intake. Recommended Mediterranean diet. Follow up in 2 weeks to assess compliance.',
      createdDate: '2024-01-18',
      createdBy: 'Dr. Sarah Johnson',
      priority: 'High',
      tags: ['Diet', 'Lifestyle', 'Follow-up']
    },
    {
      id: 'NOTE003',
      patientId: 'P003',
      patientName: 'Michael Brown',
      title: 'Medication Adjustment',
      content: 'Patient experiencing side effects from current medication. Need to adjust dosage or consider alternative treatment.',
      createdDate: '2024-01-15',
      createdBy: 'Dr. Sarah Johnson',
      priority: 'High',
      tags: ['Medication', 'Side Effects', 'Adjustment']
    }
  ];

  const handleStartChat = (patient: any) => {
    setSelectedPatient(patient);
    setIsChatOpen(true);
    setChatMessages(mockChatMessages);
  };

  const handleStartStaffChat = (staff: any) => {
    setSelectedStaff(staff);
    setIsChatOpen(true);
    setChatMessages(mockStaffMessages);
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

  const handleCreateNote = (patient: any) => {
    setSelectedPatient(patient);
    setIsNoteOpen(true);
    setNoteContent('');
  };

  const handleSaveNote = () => {
    console.log('Saving note for:', selectedPatient.name);
    console.log('Note content:', noteContent);
    setIsNoteOpen(false);
    setNoteContent('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Follow-up Required': return 'bg-yellow-100 text-yellow-800';
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Busy': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Cardiologist': return <Heart className="h-4 w-4 text-red-600" />;
      case 'Neurologist': return <Brain className="h-4 w-4 text-blue-600" />;
      case 'Pediatrician': return <Baby className="h-4 w-4 text-green-600" />;
      case 'Registered Nurse': return <Stethoscope className="h-4 w-4 text-purple-600" />;
      default: return <User className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Communication & Notes</h1>
          <p className="text-gray-600 mt-1">Internal chat with staff, patient messaging, and private notes management</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setIsNoteOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Note
          </Button>
        </div>
      </div>

      <Tabs defaultValue="patients" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="staff">Staff Chat</TabsTrigger>
          <TabsTrigger value="notes">Private Notes</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Patients Tab */}
        <TabsContent value="patients">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search patients by name, MRN, or contact..."
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
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Follow-up Required">Follow-up Required</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Patients List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Communication ({patients.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{patient.name}</h3>
                              <Badge className={getStatusColor(patient.status)}>
                                {patient.status}
                              </Badge>
                              <Badge className={getPriorityColor(patient.priority)}>
                                {patient.priority}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {patient.age}y, {patient.gender}</div>
                              <div>MRN: {patient.mrn}</div>
                              <div>Phone: {patient.phone}</div>
                              <div>Email: {patient.email}</div>
                              <div>Last Contact: {patient.lastContact}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleStartChat(patient)}>
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleCreateNote(patient)}>
                            <FileText className="h-4 w-4 mr-1" />
                            Note
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4 mr-1" />
                            Email
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

        {/* Staff Chat Tab */}
        <TabsContent value="staff">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Staff Communication ({staffMembers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {staffMembers.map((staff) => (
                    <div key={staff.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-green-100 text-green-800">
                              {staff.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{staff.name}</h3>
                              <Badge className={getStatusColor(staff.status)}>
                                {staff.status}
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                {getRoleIcon(staff.role)}
                                <span className="ml-1">{staff.role}</span>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Department: {staff.department}</div>
                              <div>Last Seen: {format(new Date(staff.lastSeen), 'MMM dd, HH:mm')}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleStartStaffChat(staff)}>
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
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

        {/* Private Notes Tab */}
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Private Notes ({privateNotes.length})
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  New Note
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {privateNotes.map((note) => (
                    <div key={note.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium">{note.title}</div>
                          <div className="text-sm text-gray-600">Patient: {note.patientName}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={getPriorityColor(note.priority)}>
                            {note.priority}
                          </Badge>
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
                      
                      <div className="space-y-2">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Content:</div>
                          <div className="text-sm text-gray-600">{note.content}</div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div>Created: {note.createdDate} by {note.createdBy}</div>
                          <div className="flex space-x-1">
                            {note.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
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

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Communication Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Notification Settings</Label>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">New Messages</div>
                        <div className="text-sm text-gray-600">Get notified of new messages</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Staff Messages</div>
                        <div className="text-sm text-gray-600">Get notified of staff communications</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Patient Messages</div>
                        <div className="text-sm text-gray-600">Get notified of patient messages</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Privacy Settings</Label>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Message Encryption</div>
                        <div className="text-sm text-gray-600">Encrypt all messages for security</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Message Retention</div>
                        <div className="text-sm text-gray-600">Automatically delete old messages</div>
                      </div>
                      <Checkbox />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Read Receipts</div>
                        <div className="text-sm text-gray-600">Show when messages are read</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Auto-Response Settings</Label>
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="auto-response">Auto-Response Message</Label>
                      <Textarea
                        id="auto-response"
                        placeholder="Enter your auto-response message..."
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Enable Auto-Response</div>
                        <div className="text-sm text-gray-600">Automatically respond to messages</div>
                      </div>
                      <Checkbox />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {(selectedPatient?.name || selectedStaff?.name)?.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">
                    Chat with {selectedPatient?.name || selectedStaff?.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient ? `Patient • ${selectedPatient.mrn}` : `${selectedStaff?.role} • ${selectedStaff?.department}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsChatOpen(false)}>
                  Close
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Chat Messages */}
            <Card>
              <CardContent className="p-4">
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
                            {format(new Date(msg.timestamp), 'MMM dd, HH:mm')}
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
          </div>
        </DialogContent>
      </Dialog>

      {/* Note Creation Dialog */}
      <Dialog open={isNoteOpen} onOpenChange={setIsNoteOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Private Note - {selectedPatient?.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.age}y, {selectedPatient?.gender} • {selectedPatient?.mrn}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsNoteOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveNote}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Note
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Note Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="note-title">Note Title</Label>
                  <Input id="note-title" placeholder="Enter note title..." />
                </div>
                <div>
                  <Label htmlFor="note-priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="note-content">Note Content</Label>
                  <Textarea
                    id="note-content"
                    placeholder="Enter your private note..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    className="mt-1 min-h-[200px]"
                  />
                </div>
                <div>
                  <Label htmlFor="note-tags">Tags (comma-separated)</Label>
                  <Input id="note-tags" placeholder="Enter tags..." />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
