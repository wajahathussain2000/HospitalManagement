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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users,
  MessageSquare,
  Phone,
  Video,
  Mail,
  Calendar,
  FileText,
  Send,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Settings,
  MoreHorizontal,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Bell,
  Heart,
  Star,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
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

export default function DoctorCollaboration() {
  const [activeTab, setActiveTab] = useState('referrals');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  // Mock collaboration data
  const referrals = [
    {
      id: 'REF001',
      patient: {
        name: 'John Smith',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567'
      },
      fromDoctor: 'Dr. Sarah Johnson',
      toSpecialist: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      reason: 'Chest pain and shortness of breath',
      urgency: 'High',
      status: 'Pending',
      date: '2024-01-20',
      notes: 'Patient experiencing chest pain during exercise. ECG shows abnormalities.'
    },
    {
      id: 'REF002',
      patient: {
        name: 'Jane Doe',
        age: 32,
        gender: 'Female',
        phone: '+1 (555) 234-5678'
      },
      fromDoctor: 'Dr. Sarah Johnson',
      toSpecialist: 'Dr. Emily Rodriguez',
      specialty: 'Orthopedics',
      reason: 'Knee injury from sports',
      urgency: 'Medium',
      status: 'Accepted',
      date: '2024-01-19',
      notes: 'Patient injured knee during basketball. X-ray shows possible ligament damage.'
    },
    {
      id: 'REF003',
      patient: {
        name: 'Robert Wilson',
        age: 58,
        gender: 'Male',
        phone: '+1 (555) 345-6789'
      },
      fromDoctor: 'Dr. Sarah Johnson',
      toSpecialist: 'Dr. David Wilson',
      specialty: 'Neurology',
      reason: 'Memory issues and confusion',
      urgency: 'High',
      status: 'Completed',
      date: '2024-01-18',
      notes: 'Patient showing signs of cognitive decline. Family concerned about dementia.'
    }
  ];

  const labCoordination = [
    {
      id: 'LAB001',
      patient: 'John Smith',
      test: 'Blood Count',
      status: 'In Progress',
      priority: 'High',
      requestedBy: 'Dr. Sarah Johnson',
      labTech: 'Nurse Emily',
      dueDate: '2024-01-22',
      notes: 'Patient showing signs of infection'
    },
    {
      id: 'LAB002',
      patient: 'Jane Doe',
      test: 'Lipid Profile',
      status: 'Completed',
      priority: 'Medium',
      requestedBy: 'Dr. Sarah Johnson',
      labTech: 'Tech Mike',
      dueDate: '2024-01-21',
      notes: 'Routine check-up'
    }
  ];

  const nursingCommunication = [
    {
      id: 'NUR001',
      patient: 'Alice Brown',
      ward: 'Cardiology Ward',
      nurse: 'Nurse Sarah',
      message: 'Patient BP elevated, needs immediate attention',
      priority: 'High',
      status: 'Unread',
      timestamp: '2024-01-20 14:30',
      response: null
    },
    {
      id: 'NUR002',
      patient: 'Michael Chen',
      ward: 'General Ward',
      nurse: 'Nurse Mike',
      message: 'Patient requesting pain medication',
      priority: 'Medium',
      status: 'Read',
      timestamp: '2024-01-20 13:45',
      response: 'Administered pain medication as prescribed'
    }
  ];

  const handleSendMessage = () => {
    setIsMessageOpen(true);
  };

  const handleReplyToMessage = (message: any) => {
    setSelectedMessage(message);
    setIsMessageOpen(true);
  };

  const handleSaveMessage = () => {
    console.log('Saving message');
    setIsMessageOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Accepted': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Unread': return 'bg-red-100 text-red-800';
      case 'Read': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredReferrals = referrals.filter(referral => {
    const matchesSearch = referral.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         referral.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         referral.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || referral.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Collaboration & Communication</h1>
          <p className="text-gray-600 mt-1">Coordinate with specialists, lab staff, and nursing team</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button onClick={handleSendMessage}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search referrals, messages, or patients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="referrals" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="lab">Lab Coordination</TabsTrigger>
          <TabsTrigger value="nursing">Nursing</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        {/* Referrals Tab */}
        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Patient Referrals ({filteredReferrals.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredReferrals.map((referral) => (
                    <div key={referral.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {referral.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900">{referral.patient.name}</h3>
                              <Badge className={getStatusColor(referral.status)}>
                                {referral.status}
                              </Badge>
                              <Badge className={getStatusColor(referral.urgency)}>
                                {referral.urgency} Priority
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              {referral.patient.age} years, {referral.patient.gender} • {referral.patient.phone}
                            </div>
                            <div className="text-sm text-gray-600">
                              Referred to {referral.toSpecialist} ({referral.specialty})
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-1">Reason for Referral:</div>
                        <p className="text-sm text-gray-600 mb-2">{referral.reason}</p>
                        <div className="text-sm font-medium text-gray-700 mb-1">Notes:</div>
                        <p className="text-sm text-gray-600">{referral.notes}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Referral Date: {referral.date}</span>
                        <span>From: {referral.fromDoctor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lab Coordination Tab */}
        <TabsContent value="lab">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TestTube className="h-5 w-5 mr-2" />
                Lab Coordination ({labCoordination.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {labCoordination.map((lab) => (
                    <div key={lab.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{lab.test}</h3>
                            <Badge className={getStatusColor(lab.status)}>
                              {lab.status}
                            </Badge>
                            <Badge className={getStatusColor(lab.priority)}>
                              {lab.priority} Priority
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {lab.patient} • Lab Tech: {lab.labTech}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Requested by: {lab.requestedBy} • Due: {lab.dueDate}
                          </div>
                          <div className="text-sm text-gray-700">
                            Notes: {lab.notes}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
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

        {/* Nursing Communication Tab */}
        <TabsContent value="nursing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Nursing Communication ({nursingCommunication.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {nursingCommunication.map((message) => (
                    <div key={message.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{message.patient}</h3>
                            <Badge className={getStatusColor(message.status)}>
                              {message.status}
                            </Badge>
                            <Badge className={getStatusColor(message.priority)}>
                              {message.priority} Priority
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Ward: {message.ward} • Nurse: {message.nurse}
                          </div>
                          <div className="text-sm text-gray-700 mb-2">
                            {message.message}
                          </div>
                          {message.response && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <div className="text-sm font-medium text-blue-900 mb-1">Your Response:</div>
                              <p className="text-sm text-blue-800">{message.response}</p>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleReplyToMessage(message)}>
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {message.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                All Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Message center would be displayed here</p>
                <p className="text-sm text-gray-500">Centralized communication hub for all department interactions</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Message Dialog */}
      <Dialog open={isMessageOpen} onOpenChange={setIsMessageOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              {selectedMessage ? 'Reply to Message' : 'Send New Message'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {selectedMessage && (
              <div className="bg-gray-50 border rounded-lg p-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Original Message:</div>
                <p className="text-sm text-gray-600">{selectedMessage.message}</p>
              </div>
            )}
            
            <div>
              <Label htmlFor="message-recipient">Recipient</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select recipient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nurse-sarah">Nurse Sarah</SelectItem>
                  <SelectItem value="nurse-mike">Nurse Mike</SelectItem>
                  <SelectItem value="lab-tech-emily">Lab Tech Emily</SelectItem>
                  <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                  <SelectItem value="dr-rodriguez">Dr. Emily Rodriguez</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message-subject">Subject</Label>
              <Input id="message-subject" placeholder="Enter message subject" />
            </div>
            
            <div>
              <Label htmlFor="message-content">Message</Label>
              <Textarea
                id="message-content"
                placeholder="Enter your message..."
                rows={4}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsMessageOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveMessage}>
                  <Send className="h-4 w-4 mr-1" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
