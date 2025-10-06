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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Eye,
  RefreshCw,
  Download,
  Upload,
  Video,
  Mic,
  Camera,
  Bell,
  Settings,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Square,
  MoreHorizontal,
  Send,
  Archive,
  Star,
  Heart,
  Zap,
  Users,
  Stethoscope,
  Pill,
  Activity,
  BarChart3,
  PieChart,
  Target,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { format } from 'date-fns';

export default function AppointmentManagement() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Comprehensive appointment data
  const appointments = [
    {
      id: '1',
      patient: {
        name: 'John Smith',
        id: 'P001234',
        age: 45,
        gender: 'Male',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        insurance: 'Blue Cross Blue Shield',
        emergencyContact: '+1 (555) 123-4568',
        address: '123 Main St, City, State 12345'
      },
      appointment: {
        date: '2024-01-20',
        time: '09:00 AM',
        duration: 30,
        type: 'Follow-up',
        status: 'pending',
        priority: 'normal',
        department: 'Cardiology',
        room: 'Room 101',
        reason: 'Diabetes management follow-up - Check HbA1c results',
        chiefComplaint: 'Diabetes control review',
        notes: 'Patient reports good blood sugar control. Review medication effectiveness.',
        previousVisit: '2024-01-15',
        followUpRequired: true,
        followUpDate: '2024-02-15'
      },
      medical: {
        allergies: ['Penicillin', 'Sulfa'],
        currentMedications: ['Metformin 1000mg', 'Lisinopril 10mg'],
        conditions: ['Type 2 Diabetes', 'Hypertension'],
        lastLabResults: 'HbA1c: 6.8% (Good control)',
        vitalSigns: 'BP: 130/80, HR: 72, Weight: 180 lbs'
      },
      queue: {
        position: 1,
        estimatedWaitTime: 15,
        checkInTime: '08:45 AM',
        status: 'checked-in'
      },
      actions: {
        canAccept: true,
        canReject: true,
        canReschedule: true,
        canStart: false,
        canComplete: false
      }
    },
    {
      id: '2',
      patient: {
        name: 'Sarah Johnson',
        id: 'P001235',
        age: 32,
        gender: 'Female',
        phone: '+1 (555) 234-5678',
        email: 'sarah.johnson@email.com',
        insurance: 'Aetna',
        emergencyContact: '+1 (555) 234-5679',
        address: '456 Oak Ave, City, State 12345'
      },
      appointment: {
        date: '2024-01-20',
        time: '09:30 AM',
        duration: 45,
        type: 'New Consultation',
        status: 'confirmed',
        priority: 'normal',
        department: 'Cardiology',
        room: 'Room 102',
        reason: 'New patient consultation - Comprehensive health assessment',
        chiefComplaint: 'Annual physical examination',
        notes: 'First-time patient. Comprehensive health assessment required.',
        previousVisit: null,
        followUpRequired: false,
        followUpDate: null
      },
      medical: {
        allergies: ['None known'],
        currentMedications: ['Multivitamin'],
        conditions: ['None'],
        lastLabResults: 'Not available',
        vitalSigns: 'BP: 120/75, HR: 68, Weight: 140 lbs'
      },
      queue: {
        position: 2,
        estimatedWaitTime: 30,
        checkInTime: '09:15 AM',
        status: 'checked-in'
      },
      actions: {
        canAccept: false,
        canReject: true,
        canReschedule: true,
        canStart: true,
        canComplete: false
      }
    },
    {
      id: '3',
      patient: {
        name: 'Michael Brown',
        id: 'P001236',
        age: 58,
        gender: 'Male',
        phone: '+1 (555) 345-6789',
        email: 'michael.brown@email.com',
        insurance: 'Medicare',
        emergencyContact: '+1 (555) 345-6790',
        address: '789 Pine St, City, State 12345'
      },
      appointment: {
        date: '2024-01-20',
        time: '10:15 AM',
        duration: 20,
        type: 'Emergency',
        status: 'urgent',
        priority: 'high',
        department: 'Cardiology',
        room: 'Emergency Room 1',
        reason: 'Chest pain - Immediate attention required - ECG needed',
        chiefComplaint: 'Acute chest pain',
        notes: 'Patient reports sudden onset chest pain. ECG and cardiac enzymes needed immediately.',
        previousVisit: '2024-01-10',
        followUpRequired: true,
        followUpDate: '2024-01-22'
      },
      medical: {
        allergies: ['Aspirin'],
        currentMedications: ['Atorvastatin 40mg', 'Metoprolol 50mg'],
        conditions: ['Coronary Artery Disease', 'Hyperlipidemia'],
        lastLabResults: 'Cholesterol: 180 mg/dL, LDL: 110 mg/dL',
        vitalSigns: 'BP: 150/95, HR: 95, Weight: 200 lbs'
      },
      queue: {
        position: 0,
        estimatedWaitTime: 0,
        checkInTime: '10:10 AM',
        status: 'emergency'
      },
      actions: {
        canAccept: false,
        canReject: false,
        canReschedule: false,
        canStart: true,
        canComplete: false
      }
    },
    {
      id: '4',
      patient: {
        name: 'Emily Davis',
        id: 'P001237',
        age: 28,
        gender: 'Female',
        phone: '+1 (555) 456-7890',
        email: 'emily.davis@email.com',
        insurance: 'Cigna',
        emergencyContact: '+1 (555) 456-7891',
        address: '321 Elm St, City, State 12345'
      },
      appointment: {
        date: '2024-01-20',
        time: '11:00 AM',
        duration: 30,
        type: 'Routine Check',
        status: 'confirmed',
        priority: 'normal',
        department: 'Cardiology',
        room: 'Room 103',
        reason: 'Annual physical examination - Vaccination due',
        chiefComplaint: 'Routine health check',
        notes: 'Annual physical examination. Check vaccination status.',
        previousVisit: '2023-12-20',
        followUpRequired: false,
        followUpDate: null
      },
      medical: {
        allergies: ['Latex'],
        currentMedications: ['Birth Control Pill'],
        conditions: ['None'],
        lastLabResults: 'All normal',
        vitalSigns: 'BP: 110/70, HR: 65, Weight: 125 lbs'
      },
      queue: {
        position: 3,
        estimatedWaitTime: 45,
        checkInTime: null,
        status: 'scheduled'
      },
      actions: {
        canAccept: false,
        canReject: true,
        canReschedule: true,
        canStart: false,
        canComplete: false
      }
    },
    {
      id: '5',
      patient: {
        name: 'Robert Wilson',
        id: 'P001238',
        age: 67,
        gender: 'Male',
        phone: '+1 (555) 567-8901',
        email: 'robert.wilson@email.com',
        insurance: 'UnitedHealth',
        emergencyContact: '+1 (555) 567-8902',
        address: '654 Maple Dr, City, State 12345'
      },
      appointment: {
        date: '2024-01-20',
        time: '11:45 AM',
        duration: 25,
        type: 'Follow-up',
        status: 'pending',
        priority: 'normal',
        department: 'Cardiology',
        room: 'Room 104',
        reason: 'Hypertension follow-up - Review medication effectiveness',
        chiefComplaint: 'Blood pressure monitoring',
        notes: 'Patient reports good BP control with current medication.',
        previousVisit: '2024-01-05',
        followUpRequired: true,
        followUpDate: '2024-02-05'
      },
      medical: {
        allergies: ['ACE Inhibitors'],
        currentMedications: ['Amlodipine 10mg', 'Hydrochlorothiazide 25mg'],
        conditions: ['Essential Hypertension', 'Benign Prostatic Hyperplasia'],
        lastLabResults: 'Creatinine: 1.1 mg/dL, eGFR: 65',
        vitalSigns: 'BP: 135/85, HR: 78, Weight: 175 lbs'
      },
      queue: {
        position: 4,
        estimatedWaitTime: 60,
        checkInTime: null,
        status: 'scheduled'
      },
      actions: {
        canAccept: true,
        canReject: true,
        canReschedule: true,
        canStart: false,
        canComplete: false
      }
    }
  ];

  // Filter appointments based on search and filters
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.appointment.reason.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || appointment.appointment.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || appointment.appointment.department === departmentFilter;
    const matchesPriority = priorityFilter === 'all' || appointment.appointment.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesDepartment && matchesPriority;
  });

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50 border-red-200';
      case 'normal': return 'bg-green-50 border-green-200';
      case 'low': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  // Get queue status color
  const getQueueStatusColor = (status: string) => {
    switch (status) {
      case 'checked-in': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      case 'waiting': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle appointment actions
  const handleAccept = (appointmentId: string) => {
    console.log('Accept appointment:', appointmentId);
    // Implementation for accepting appointment
  };

  const handleReject = (appointmentId: string) => {
    console.log('Reject appointment:', appointmentId);
    // Implementation for rejecting appointment
  };

  const handleReschedule = (appointmentId: string) => {
    console.log('Reschedule appointment:', appointmentId);
    setSelectedAppointment(appointments.find(apt => apt.id === appointmentId));
    setIsRescheduleOpen(true);
  };

  const handleStart = (appointmentId: string) => {
    console.log('Start appointment:', appointmentId);
    // Implementation for starting consultation
  };

  const handleComplete = (appointmentId: string) => {
    console.log('Complete appointment:', appointmentId);
    // Implementation for completing appointment
  };

  const handleViewDetails = (appointmentId: string) => {
    setSelectedAppointment(appointments.find(apt => apt.id === appointmentId));
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
          <p className="text-gray-600 mt-1">Manage patient appointments, queue, and consultations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients, ID, or reason..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Cardiology">Cardiology</SelectItem>
                <SelectItem value="Neurology">Neurology</SelectItem>
                <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                <SelectItem value="Emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="queue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="queue">Patient Queue</TabsTrigger>
          <TabsTrigger value="schedule">Schedule View</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        {/* Patient Queue Tab */}
        <TabsContent value="queue">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Queue List */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Patient Queue ({filteredAppointments.filter(apt => apt.queue.status === 'checked-in').length})
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {filteredAppointments.filter(apt => apt.queue.status === 'checked-in').length} Checked-in
                      </Badge>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        <Clock className="h-3 w-3 mr-1" />
                        Avg Wait: 25 min
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {filteredAppointments
                        .filter(apt => apt.queue.status === 'checked-in' || apt.queue.status === 'emergency')
                        .sort((a, b) => a.queue.position - b.queue.position)
                        .map((appointment) => (
                        <div key={appointment.id} className={`p-4 border rounded-lg ${getPriorityColor(appointment.appointment.priority)}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <div>
                                  <div className="font-medium text-gray-900">{appointment.patient.name}</div>
                                  <div className="text-sm text-gray-600">{appointment.patient.id} • {appointment.patient.age}y, {appointment.patient.gender}</div>
                                </div>
                                <Badge className={getStatusColor(appointment.appointment.status)}>
                                  {appointment.appointment.status}
                                </Badge>
                                <Badge variant="outline" className={getQueueStatusColor(appointment.queue.status)}>
                                  {appointment.queue.status}
                                </Badge>
                                <Badge variant="outline">
                                  #{appointment.queue.position}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                                <div>
                                  <span className="text-gray-600">Time:</span> {appointment.appointment.time}
                                </div>
                                <div>
                                  <span className="text-gray-600">Room:</span> {appointment.appointment.room}
                                </div>
                                <div>
                                  <span className="text-gray-600">Check-in:</span> {appointment.queue.checkInTime || 'Not checked-in'}
                                </div>
                                <div>
                                  <span className="text-gray-600">Wait Time:</span> {appointment.queue.estimatedWaitTime} min
                                </div>
                              </div>
                              <div className="text-sm text-gray-700">
                                <strong>Chief Complaint:</strong> {appointment.appointment.chiefComplaint}
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              {appointment.actions.canStart && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <Play className="h-4 w-4 mr-1" />
                                  Start
                                </Button>
                              )}
                              {appointment.actions.canAccept && (
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Accept
                                </Button>
                              )}
                              <div className="flex space-x-1">
                                <Button size="sm" variant="outline" onClick={() => handleViewDetails(appointment.id)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                                {appointment.actions.canReject && (
                                  <Button size="sm" variant="outline" onClick={() => handleReject(appointment.id)}>
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                )}
                                {appointment.actions.canReschedule && (
                                  <Button size="sm" variant="outline" onClick={() => handleReschedule(appointment.id)}>
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Queue Statistics */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Queue Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total in Queue</span>
                    <span className="text-lg font-bold">{filteredAppointments.filter(apt => apt.queue.status === 'checked-in').length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Average Wait Time</span>
                    <span className="text-lg font-bold">25 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Next Patient</span>
                    <span className="text-lg font-bold">5 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Emergency Cases</span>
                    <span className="text-lg font-bold text-red-600">
                      {filteredAppointments.filter(apt => apt.appointment.priority === 'high').length}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Bell className="h-4 w-4 mr-2" />
                    Call Next Patient
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Queue Settings
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Queue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Schedule View Tab */}
        <TabsContent value="schedule">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Daily Schedule
                    </div>
                    <div className="flex items-center space-x-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {filteredAppointments.map((appointment) => (
                        <div key={appointment.id} className={`p-4 border rounded-lg ${getPriorityColor(appointment.appointment.priority)}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <div>
                                  <div className="font-medium text-gray-900">{appointment.patient.name}</div>
                                  <div className="text-sm text-gray-600">{appointment.patient.id} • {appointment.patient.age}y, {appointment.patient.gender}</div>
                                </div>
                                <Badge className={getStatusColor(appointment.appointment.status)}>
                                  {appointment.appointment.status}
                                </Badge>
                                <Badge variant="outline">
                                  {appointment.appointment.type}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                                <div>
                                  <span className="text-gray-600">Time:</span> {appointment.appointment.time} ({appointment.appointment.duration}min)
                                </div>
                                <div>
                                  <span className="text-gray-600">Room:</span> {appointment.appointment.room}
                                </div>
                                <div>
                                  <span className="text-gray-600">Phone:</span> {appointment.patient.phone}
                                </div>
                                <div>
                                  <span className="text-gray-600">Insurance:</span> {appointment.patient.insurance}
                                </div>
                              </div>
                              <div className="text-sm text-gray-700">
                                <strong>Chief Complaint:</strong> {appointment.appointment.chiefComplaint}
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              {appointment.actions.canStart && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <Play className="h-4 w-4 mr-1" />
                                  Start
                                </Button>
                              )}
                              <div className="flex space-x-1">
                                <Button size="sm" variant="outline" onClick={() => handleViewDetails(appointment.id)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MessageSquare className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Phone className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Appointments</span>
                    <span className="font-bold">{filteredAppointments.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Completed</span>
                    <span className="font-bold text-green-600">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pending</span>
                    <span className="font-bold text-yellow-600">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Emergency</span>
                    <span className="font-bold text-red-600">2</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Pending Approval Tab */}
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Pending Approval ({filteredAppointments.filter(apt => apt.appointment.status === 'pending').length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredAppointments
                    .filter(apt => apt.appointment.status === 'pending')
                    .map((appointment) => (
                    <div key={appointment.id} className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div>
                              <div className="font-medium text-gray-900">{appointment.patient.name}</div>
                              <div className="text-sm text-gray-600">{appointment.patient.id} • {appointment.patient.age}y, {appointment.patient.gender}</div>
                            </div>
                            <Badge className={getStatusColor(appointment.appointment.status)}>
                              {appointment.appointment.status}
                            </Badge>
                            <Badge variant="outline">
                              {appointment.appointment.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-700 mb-2">
                            <strong>Request:</strong> {appointment.appointment.reason}
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Preferred Time:</strong> {appointment.appointment.time} • {appointment.appointment.room}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleAccept(appointment.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Accept
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleReject(appointment.id)}>
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleReschedule(appointment.id)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Reschedule
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

        {/* Completed Tab */}
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Completed Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-gray-600">No completed appointments for today</div>
                <div className="text-sm text-gray-500">Completed appointments will appear here</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Appointment Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Name</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Patient ID</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Age & Gender</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.age}y, {selectedAppointment.patient.gender}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Phone</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.phone}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Email</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.email}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Insurance</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.insurance}</p>
                    </div>
                    <div className="col-span-2">
                      <Label className="text-sm font-medium">Address</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.patient.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Appointment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Date & Time</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.date} at {selectedAppointment.appointment.time}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Duration</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.duration} minutes</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Type</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.type}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Room</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.room}</p>
                    </div>
                    <div className="col-span-2">
                      <Label className="text-sm font-medium">Reason</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.reason}</p>
                    </div>
                    <div className="col-span-2">
                      <Label className="text-sm font-medium">Chief Complaint</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.chiefComplaint}</p>
                    </div>
                    <div className="col-span-2">
                      <Label className="text-sm font-medium">Notes</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.appointment.notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    Medical Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Allergies</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.medical.allergies.join(', ')}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Current Medications</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.medical.currentMedications.join(', ')}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Conditions</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.medical.conditions.join(', ')}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Last Lab Results</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.medical.lastLabResults}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Vital Signs</Label>
                      <p className="text-sm text-gray-600">{selectedAppointment.medical.vitalSigns}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reschedule Dialog */}
      <Dialog open={isRescheduleOpen} onOpenChange={setIsRescheduleOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Patient</Label>
                <p className="text-sm text-gray-600">{selectedAppointment.patient.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Current Appointment</Label>
                <p className="text-sm text-gray-600">{selectedAppointment.appointment.date} at {selectedAppointment.appointment.time}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="new-date">New Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Select date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="new-time">New Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 AM</SelectItem>
                      <SelectItem value="09:30">09:30 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="10:30">10:30 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="11:30">11:30 AM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="reason">Reason for Reschedule</Label>
                <Textarea
                  id="reason"
                  placeholder="Enter reason for rescheduling..."
                  className="mt-1"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsRescheduleOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsRescheduleOpen(false)}>
                  Reschedule
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
