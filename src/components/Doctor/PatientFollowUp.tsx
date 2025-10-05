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
  Bell,
  Calendar,
  Clock,
  Mail,
  Phone,
  MessageSquare,
  User,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Save,
  Send,
  Download,
  Upload,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
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

export default function PatientFollowUp() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Mock follow-up data
  const followUps = [
    {
      id: 'FU001',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        mrn: 'MRN123456789'
      },
      followUp: {
        type: 'Appointment',
        reason: 'Diabetes follow-up - Review HbA1c results',
        scheduledDate: '2024-01-27',
        scheduledTime: '10:00 AM',
        priority: 'High',
        status: 'Pending',
        createdDate: '2024-01-15',
        createdBy: 'Dr. Sarah Johnson',
        notes: 'Patient needs to review blood sugar control and medication effectiveness'
      },
      reminders: [
        {
          id: 'REM001',
          type: 'Email',
          sentDate: '2024-01-20',
          status: 'Sent',
          content: 'Reminder: You have an appointment scheduled for January 27th at 10:00 AM'
        },
        {
          id: 'REM002',
          type: 'SMS',
          sentDate: '2024-01-25',
          status: 'Sent',
          content: 'Reminder: Your appointment is tomorrow at 10:00 AM. Please arrive 15 minutes early.'
        }
      ],
      lastContact: '2024-01-15',
      nextReminder: '2024-01-26'
    },
    {
      id: 'FU002',
      patient: {
        name: 'Sarah Johnson',
        id: 'P001235',
        age: 32,
        gender: 'Female',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        mrn: 'MRN234567890'
      },
      followUp: {
        type: 'Lab Results',
        reason: 'Review cholesterol panel results',
        scheduledDate: '2024-01-30',
        scheduledTime: '02:00 PM',
        priority: 'Medium',
        status: 'Pending',
        createdDate: '2024-01-20',
        createdBy: 'Dr. Michael Chen',
        notes: 'Patient needs to discuss lipid panel results and treatment plan'
      },
      reminders: [
        {
          id: 'REM003',
          type: 'Email',
          sentDate: '2024-01-25',
          status: 'Sent',
          content: 'Your lab results are ready for review. Please schedule a follow-up appointment.'
        }
      ],
      lastContact: '2024-01-20',
      nextReminder: '2024-01-29'
    },
    {
      id: 'FU003',
      patient: {
        name: 'Michael Brown',
        id: 'P001236',
        age: 58,
        gender: 'Male',
        phone: '+1 (555) 345-6789',
        email: 'michael.brown@email.com',
        mrn: 'MRN345678901'
      },
      followUp: {
        type: 'Medication Review',
        reason: 'Blood pressure medication adjustment',
        scheduledDate: '2024-02-05',
        scheduledTime: '11:30 AM',
        priority: 'High',
        status: 'Overdue',
        createdDate: '2024-01-10',
        createdBy: 'Dr. Emily Rodriguez',
        notes: 'Patient needs medication adjustment based on blood pressure readings'
      },
      reminders: [
        {
          id: 'REM004',
          type: 'Phone',
          sentDate: '2024-01-28',
          status: 'Failed',
          content: 'Attempted to call patient for medication review appointment'
        },
        {
          id: 'REM005',
          type: 'SMS',
          sentDate: '2024-01-29',
          status: 'Sent',
          content: 'Urgent: Please contact us to reschedule your medication review appointment'
        }
      ],
      lastContact: '2024-01-10',
      nextReminder: '2024-01-31'
    }
  ];

  // Mock reminder templates
  const reminderTemplates = [
    {
      id: 'TEMP001',
      name: 'Appointment Reminder',
      type: 'Appointment',
      subject: 'Appointment Reminder - {PatientName}',
      content: 'Dear {PatientName},\n\nThis is a reminder that you have an appointment scheduled for {Date} at {Time}.\n\nPlease arrive 15 minutes early and bring your insurance card and ID.\n\nIf you need to reschedule, please call us at {PhoneNumber}.\n\nBest regards,\n{DoctorName}',
      channels: ['Email', 'SMS']
    },
    {
      id: 'TEMP002',
      name: 'Lab Results Ready',
      type: 'Lab Results',
      subject: 'Lab Results Ready - {PatientName}',
      content: 'Dear {PatientName},\n\nYour lab results are ready for review. Please schedule a follow-up appointment to discuss your results.\n\nYou can call us at {PhoneNumber} or schedule online.\n\nBest regards,\n{DoctorName}',
      channels: ['Email', 'SMS']
    },
    {
      id: 'TEMP003',
      name: 'Medication Review',
      type: 'Medication',
      subject: 'Medication Review Required - {PatientName}',
      content: 'Dear {PatientName},\n\nIt\'s time for your medication review appointment. Please schedule an appointment to discuss your current medications and any concerns.\n\nCall us at {PhoneNumber} to schedule.\n\nBest regards,\n{DoctorName}',
      channels: ['Email', 'SMS', 'Phone']
    }
  ];

  const handleCreateReminder = (patient: any) => {
    setSelectedPatient(patient);
    setIsReminderOpen(true);
  };

  const handleSendReminder = () => {
    console.log('Sending reminder to:', selectedPatient.name);
    setIsReminderOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-gray-100 text-gray-800';
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Appointment': return <Calendar className="h-4 w-4 text-blue-600" />;
      case 'Lab Results': return <TestTube className="h-4 w-4 text-green-600" />;
      case 'Medication': return <Pill className="h-4 w-4 text-purple-600" />;
      default: return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'Email': return <Mail className="h-4 w-4 text-blue-600" />;
      case 'SMS': return <MessageSquare className="h-4 w-4 text-green-600" />;
      case 'Phone': return <Phone className="h-4 w-4 text-purple-600" />;
      default: return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Follow-Up & Reminders</h1>
          <p className="text-gray-600 mt-1">Manage patient follow-ups, automated reminders, and notifications</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Follow-up
          </Button>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">Pending Follow-ups</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Pending Follow-ups Tab */}
        <TabsContent value="pending">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search patients, follow-ups, or reasons..."
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
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Overdue">Overdue</SelectItem>
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
                    <SelectItem value="Appointment">Appointment</SelectItem>
                    <SelectItem value="Lab Results">Lab Results</SelectItem>
                    <SelectItem value="Medication">Medication</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Follow-ups List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Pending Follow-ups ({followUps.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {followUps.map((followUp) => (
                    <div key={followUp.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {followUp.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">{followUp.patient.name}</h3>
                              <Badge className={getStatusColor(followUp.followUp.status)}>
                                {followUp.followUp.status}
                              </Badge>
                              <Badge className={getPriorityColor(followUp.followUp.priority)}>
                                {followUp.followUp.priority}
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                {getTypeIcon(followUp.followUp.type)}
                                <span className="ml-1">{followUp.followUp.type}</span>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>Age: {followUp.patient.age}y, {followUp.patient.gender}</div>
                              <div>Phone: {followUp.patient.phone}</div>
                              <div>Scheduled: {followUp.followUp.scheduledDate} at {followUp.followUp.scheduledTime}</div>
                              <div>Created: {followUp.followUp.createdDate} by {followUp.followUp.createdBy}</div>
                            </div>
                            <div className="mt-2">
                              <div className="text-sm font-medium text-gray-700">Reason:</div>
                              <div className="text-sm text-gray-600">{followUp.followUp.reason}</div>
                            </div>
                            <div className="mt-1">
                              <div className="text-sm font-medium text-gray-700">Notes:</div>
                              <div className="text-sm text-gray-600">{followUp.followUp.notes}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleCreateReminder(followUp)}>
                            <Bell className="h-4 w-4 mr-1" />
                            Remind
                          </Button>
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

                      {/* Reminders History */}
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-sm font-medium text-gray-700 mb-2">Reminders Sent:</div>
                        <div className="space-y-2">
                          {followUp.reminders.map((reminder, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center space-x-2">
                                {getChannelIcon(reminder.type)}
                                <span className="text-sm font-medium">{reminder.type}</span>
                                <span className="text-sm text-gray-600">- {reminder.sentDate}</span>
                              </div>
                              <Badge className={reminder.status === 'Sent' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                                {reminder.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <strong>Next Reminder:</strong> {followUp.nextReminder}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reminders Tab */}
        <TabsContent value="reminders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Reminder Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">Reminder management features</div>
                <div className="text-sm text-gray-500">Send and track automated reminders to patients</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Reminder Templates
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  New Template
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {reminderTemplates.map((template) => (
                    <div key={template.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium">{template.name}</div>
                          <div className="text-sm text-gray-600">{template.type}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Subject:</div>
                          <div className="text-sm text-gray-600">{template.subject}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Channels:</div>
                          <div className="flex space-x-2">
                            {template.channels.map((channel, index) => (
                              <Badge key={index} variant="outline" className="flex items-center">
                                {getChannelIcon(channel)}
                                <span className="ml-1">{channel}</span>
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Content Preview:</div>
                          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                            {template.content.substring(0, 100)}...
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
                Follow-up Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Automated Reminders</Label>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Reminders</div>
                        <div className="text-sm text-gray-600">Send email reminders to patients</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">SMS Reminders</div>
                        <div className="text-sm text-gray-600">Send SMS text reminders to patients</div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Phone Call Reminders</div>
                        <div className="text-sm text-gray-600">Make automated phone calls for urgent reminders</div>
                      </div>
                      <Checkbox />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Reminder Timing</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="first-reminder">First Reminder (days before)</Label>
                      <Input id="first-reminder" type="number" defaultValue="7" />
                    </div>
                    <div>
                      <Label htmlFor="second-reminder">Second Reminder (days before)</Label>
                      <Input id="second-reminder" type="number" defaultValue="1" />
                    </div>
                    <div>
                      <Label htmlFor="overdue-reminder">Overdue Reminder (days after)</Label>
                      <Input id="overdue-reminder" type="number" defaultValue="3" />
                    </div>
                    <div>
                      <Label htmlFor="max-reminders">Maximum Reminders</Label>
                      <Input id="max-reminders" type="number" defaultValue="3" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Notification Channels</Label>
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="email-template">Default Email Template</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Appointment Reminder</SelectItem>
                          <SelectItem value="lab-results">Lab Results Ready</SelectItem>
                          <SelectItem value="medication">Medication Review</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="sms-template">Default SMS Template</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Appointment Reminder</SelectItem>
                          <SelectItem value="lab-results">Lab Results Ready</SelectItem>
                          <SelectItem value="medication">Medication Review</SelectItem>
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

      {/* Reminder Creation Dialog */}
      <Dialog open={isReminderOpen} onOpenChange={setIsReminderOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {selectedPatient?.patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Send Reminder to {selectedPatient?.patient.name}</div>
                  <div className="text-sm text-gray-600">
                    {selectedPatient?.patient.phone} • {selectedPatient?.patient.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsReminderOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSendReminder}>
                  <Send className="h-4 w-4 mr-1" />
                  Send Reminder
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              {/* Reminder Type */}
              <div>
                <Label htmlFor="reminder-type">Reminder Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reminder type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appointment">Appointment Reminder</SelectItem>
                    <SelectItem value="lab-results">Lab Results Ready</SelectItem>
                    <SelectItem value="medication">Medication Review</SelectItem>
                    <SelectItem value="custom">Custom Message</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Communication Channels */}
              <div>
                <Label className="text-base font-medium">Send Via</Label>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="email" defaultChecked />
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email ({selectedPatient.patient.email})
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="sms" defaultChecked />
                    <Label htmlFor="sms" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      SMS ({selectedPatient.patient.phone})
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="phone" />
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Call ({selectedPatient.patient.phone})
                    </Label>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div>
                <Label htmlFor="message-content">Message Content</Label>
                <Textarea
                  id="message-content"
                  placeholder="Enter your reminder message..."
                  defaultValue={`Dear ${selectedPatient.patient.name},\n\nThis is a reminder that you have a follow-up scheduled for ${selectedPatient.followUp.scheduledDate} at ${selectedPatient.followUp.scheduledTime}.\n\nReason: ${selectedPatient.followUp.reason}\n\nPlease contact us if you need to reschedule.\n\nBest regards,\nDr. Smith`}
                  className="mt-1 min-h-[150px]"
                />
              </div>

              {/* Scheduling */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="send-date">Send Date</Label>
                  <Input
                    id="send-date"
                    type="date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="send-time">Send Time</Label>
                  <Input
                    id="send-time"
                    type="time"
                    defaultValue="09:00"
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
