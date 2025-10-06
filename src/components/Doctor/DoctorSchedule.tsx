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
  Calendar,
  Clock,
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

export default function DoctorSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Mock working hours
  const workingHours = {
    monday: { start: '09:00', end: '17:00', isWorking: true },
    tuesday: { start: '09:00', end: '17:00', isWorking: true },
    wednesday: { start: '09:00', end: '17:00', isWorking: true },
    thursday: { start: '09:00', end: '17:00', isWorking: true },
    friday: { start: '09:00', end: '17:00', isWorking: true },
    saturday: { start: '10:00', end: '14:00', isWorking: true },
    sunday: { start: '00:00', end: '00:00', isWorking: false }
  };

  // Mock consultation slots
  const consultationSlots = [
    {
      id: 'SLOT001',
      date: '2024-01-25',
      time: '09:00',
      duration: 30,
      type: 'In-Person',
      status: 'Available',
      patient: null,
      notes: 'Regular consultation slot'
    },
    {
      id: 'SLOT002',
      date: '2024-01-25',
      time: '09:30',
      duration: 30,
      type: 'In-Person',
      status: 'Booked',
      patient: {
        name: 'John Smith',
        phone: '+1 (555) 123-4567',
        reason: 'Follow-up consultation'
      },
      notes: 'Patient follow-up appointment'
    },
    {
      id: 'SLOT003',
      date: '2024-01-25',
      time: '10:00',
      duration: 30,
      type: 'Telemedicine',
      status: 'Available',
      patient: null,
      notes: 'Telemedicine consultation slot'
    },
    {
      id: 'SLOT004',
      date: '2024-01-25',
      time: '10:30',
      duration: 30,
      type: 'In-Person',
      status: 'Blocked',
      patient: null,
      notes: 'Lunch break'
    },
    {
      id: 'SLOT005',
      date: '2024-01-25',
      time: '11:00',
      duration: 30,
      type: 'In-Person',
      status: 'Available',
      patient: null,
      notes: 'Regular consultation slot'
    }
  ];

  // Mock leaves and breaks
  const leavesAndBreaks = [
    {
      id: 'LEAVE001',
      type: 'Leave',
      title: 'Annual Leave',
      startDate: '2024-02-15',
      endDate: '2024-02-20',
      status: 'Approved',
      reason: 'Family vacation',
      createdDate: '2024-01-10'
    },
    {
      id: 'LEAVE002',
      type: 'Break',
      title: 'Lunch Break',
      startDate: '2024-01-25',
      endDate: '2024-01-25',
      startTime: '12:00',
      endTime: '13:00',
      status: 'Scheduled',
      reason: 'Daily lunch break',
      createdDate: '2024-01-20'
    },
    {
      id: 'LEAVE003',
      type: 'Leave',
      title: 'Medical Leave',
      startDate: '2024-03-01',
      endDate: '2024-03-05',
      status: 'Pending',
      reason: 'Medical procedure',
      createdDate: '2024-01-22'
    }
  ];

  // Mock calendar events
  const calendarEvents = [
    {
      id: 'EVENT001',
      title: 'Team Meeting',
      date: '2024-01-25',
      time: '08:00',
      duration: 60,
      type: 'Meeting',
      location: 'Conference Room A',
      attendees: ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Nurse Emily']
    },
    {
      id: 'EVENT002',
      title: 'Training Session',
      date: '2024-01-26',
      time: '14:00',
      duration: 120,
      type: 'Training',
      location: 'Training Room',
      attendees: ['Dr. Sarah Johnson', 'Dr. Emily Rodriguez']
    },
    {
      id: 'EVENT003',
      title: 'Department Review',
      date: '2024-01-27',
      time: '16:00',
      duration: 90,
      type: 'Review',
      location: 'Department Office',
      attendees: ['Dr. Sarah Johnson', 'Department Head']
    }
  ];

  const handleCreateSlot = () => {
    setSelectedSlot(null);
    setIsSlotOpen(true);
  };

  const handleEditSlot = (slot: any) => {
    setSelectedSlot(slot);
    setIsSlotOpen(true);
  };

  const handleCreateLeave = () => {
    setIsLeaveOpen(true);
  };

  const handleSaveSlot = () => {
    console.log('Saving slot:', selectedSlot);
    setIsSlotOpen(false);
  };

  const handleSaveLeave = () => {
    console.log('Saving leave/break');
    setIsLeaveOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Booked': return 'bg-blue-100 text-blue-800';
      case 'Blocked': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'In-Person': return <User className="h-4 w-4 text-blue-600" />;
      case 'Telemedicine': return <Video className="h-4 w-4 text-green-600" />;
      case 'Meeting': return <Users className="h-4 w-4 text-purple-600" />;
      case 'Training': return <BookOpen className="h-4 w-4 text-orange-600" />;
      case 'Review': return <FileText className="h-4 w-4 text-red-600" />;
      default: return <Calendar className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule & Availability Management</h1>
          <p className="text-gray-600 mt-1">Manage working hours, consultation slots, breaks, and calendar sync</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={handleCreateSlot}>
            <Plus className="h-4 w-4 mr-2" />
            New Slot
          </Button>
          <Button onClick={handleCreateLeave}>
            <Plus className="h-4 w-4 mr-2" />
            Request Leave
          </Button>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="leaves">Leaves & Breaks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        {/* Schedule Tab */}
        <TabsContent value="schedule">
          {/* Date Selector */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="schedule-date">Select Date</Label>
                  <Input
                    id="schedule-date"
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  {format(selectedDate, 'EEEE, MMMM dd, yyyy')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consultation Slots */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Consultation Slots ({consultationSlots.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {consultationSlots.map((slot) => (
                    <div key={slot.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{slot.time}</div>
                            <div className="text-sm text-gray-600">{slot.duration} min</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-gray-900">
                                {slot.patient ? slot.patient.name : 'Available Slot'}
                              </h3>
                              <Badge className={getStatusColor(slot.status)}>
                                {slot.status}
                              </Badge>
                              <Badge variant="outline" className="flex items-center">
                                {getTypeIcon(slot.type)}
                                <span className="ml-1">{slot.type}</span>
                              </Badge>
                            </div>
                            {slot.patient ? (
                              <div className="text-sm text-gray-600">
                                <div>Phone: {slot.patient.phone}</div>
                                <div>Reason: {slot.patient.reason}</div>
                              </div>
                            ) : (
                              <div className="text-sm text-gray-600">{slot.notes}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleEditSlot(slot)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
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

        {/* Availability Tab */}
        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Working Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(workingHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 text-sm font-medium capitalize">{day}</div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={hours.isWorking}
                          onChange={() => {}}
                        />
                        <span className="text-sm">Working Day</span>
                      </div>
                    </div>
                    {hours.isWorking ? (
                      <div className="flex items-center space-x-4">
                        <div>
                          <Label htmlFor={`${day}-start`}>Start Time</Label>
                          <Input
                            id={`${day}-start`}
                            type="time"
                            value={hours.start}
                            className="w-32"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`${day}-end`}>End Time</Label>
                          <Input
                            id={`${day}-end`}
                            type="time"
                            value={hours.end}
                            className="w-32"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">Day Off</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Consultation Settings */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Consultation Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="slot-duration">Default Slot Duration (minutes)</Label>
                  <Input id="slot-duration" type="number" defaultValue="30" />
                </div>
                <div>
                  <Label htmlFor="break-duration">Break Duration (minutes)</Label>
                  <Input id="break-duration" type="number" defaultValue="15" />
                </div>
                <div>
                  <Label htmlFor="max-patients">Max Patients per Day</Label>
                  <Input id="max-patients" type="number" defaultValue="20" />
                </div>
                <div>
                  <Label htmlFor="advance-booking">Advance Booking (days)</Label>
                  <Input id="advance-booking" type="number" defaultValue="30" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leaves & Breaks Tab */}
        <TabsContent value="leaves">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Leaves & Breaks ({leavesAndBreaks.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {leavesAndBreaks.map((leave) => (
                    <div key={leave.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{leave.title}</h3>
                            <Badge className={getStatusColor(leave.status)}>
                              {leave.status}
                            </Badge>
                            <Badge variant="outline">{leave.type}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Start: {leave.startDate}</div>
                            <div>End: {leave.endDate}</div>
                            {leave.startTime && (
                              <div>Time: {leave.startTime} - {leave.endTime}</div>
                            )}
                            <div>Created: {leave.createdDate}</div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm font-medium text-gray-700">Reason:</div>
                            <div className="text-sm text-gray-600">{leave.reason}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Cancel
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

        {/* Calendar Tab */}
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Calendar Events ({calendarEvents.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {calendarEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{event.title}</h3>
                            <Badge variant="outline" className="flex items-center">
                              {getTypeIcon(event.type)}
                              <span className="ml-1">{event.type}</span>
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Date: {event.date}</div>
                            <div>Time: {event.time}</div>
                            <div>Duration: {event.duration} minutes</div>
                            <div>Location: {event.location}</div>
                          </div>
                          <div className="mt-2">
                            <div className="text-sm font-medium text-gray-700">Attendees:</div>
                            <div className="text-sm text-gray-600">{event.attendees.join(', ')}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
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

      {/* Slot Creation/Edit Dialog */}
      <Dialog open={isSlotOpen} onOpenChange={setIsSlotOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {selectedSlot ? 'Edit Slot' : 'Create New Slot'}
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsSlotOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveSlot}>
                  <Save className="h-4 w-4 mr-1" />
                  Save Slot
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Slot Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="slot-date">Date</Label>
                  <Input id="slot-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="slot-time">Time</Label>
                  <Input id="slot-time" type="time" />
                </div>
                <div>
                  <Label htmlFor="slot-duration">Duration (minutes)</Label>
                  <Input id="slot-duration" type="number" defaultValue="30" />
                </div>
                <div>
                  <Label htmlFor="slot-type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-person">In-Person</SelectItem>
                      <SelectItem value="telemedicine">Telemedicine</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="slot-notes">Notes</Label>
                <Textarea
                  id="slot-notes"
                  placeholder="Enter slot notes..."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Leave Creation Dialog */}
      <Dialog open={isLeaveOpen} onOpenChange={setIsLeaveOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Request Leave/Break
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsLeaveOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveLeave}>
                  <Save className="h-4 w-4 mr-1" />
                  Submit Request
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Leave Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="leave-type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leave">Leave</SelectItem>
                      <SelectItem value="break">Break</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="leave-title">Title</Label>
                  <Input id="leave-title" placeholder="Enter title..." />
                </div>
                <div>
                  <Label htmlFor="leave-start">Start Date</Label>
                  <Input id="leave-start" type="date" />
                </div>
                <div>
                  <Label htmlFor="leave-end">End Date</Label>
                  <Input id="leave-end" type="date" />
                </div>
                <div>
                  <Label htmlFor="leave-start-time">Start Time (for breaks)</Label>
                  <Input id="leave-start-time" type="time" />
                </div>
                <div>
                  <Label htmlFor="leave-end-time">End Time (for breaks)</Label>
                  <Input id="leave-end-time" type="time" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="leave-reason">Reason</Label>
                <Textarea
                  id="leave-reason"
                  placeholder="Enter reason for leave/break..."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
