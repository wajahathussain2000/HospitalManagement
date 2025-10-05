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
  Users,
  Shield,
  Key,
  Clock,
  Calendar,
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
  CheckCircle,
  XCircle,
  AlertCircle,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  PieChart,
  Target,
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

export default function PharmacyRoles() {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Mock pharmacy roles and permissions
  const pharmacyRoles = {
    admin: {
      name: 'Pharmacy Admin',
      description: 'Full access to all pharmacy operations',
      permissions: [
        'view_dashboard', 'manage_users', 'manage_inventory', 'manage_sales',
        'manage_prescriptions', 'manage_suppliers', 'view_reports', 'manage_settings',
        'approve_orders', 'manage_returns', 'view_audit_logs', 'emergency_access'
      ],
      color: 'bg-red-100 text-red-800'
    },
    pharmacist: {
      name: 'Pharmacist',
      description: 'Professional pharmacy operations and patient care',
      permissions: [
        'view_dashboard', 'manage_prescriptions', 'manage_sales', 'view_inventory',
        'manage_patients', 'view_reports', 'emergency_access'
      ],
      color: 'bg-blue-100 text-blue-800'
    },
    assistant: {
      name: 'Pharmacy Assistant',
      description: 'Support pharmacy operations and customer service',
      permissions: [
        'view_dashboard', 'view_inventory', 'process_sales', 'view_prescriptions',
        'manage_customers', 'view_reports'
      ],
      color: 'bg-green-100 text-green-800'
    },
    cashier: {
      name: 'Cashier',
      description: 'Handle sales transactions and payments',
      permissions: [
        'view_dashboard', 'process_sales', 'handle_payments', 'view_inventory',
        'print_receipts', 'process_returns'
      ],
      color: 'bg-yellow-100 text-yellow-800'
    }
  };

  // Mock pharmacy users
  const pharmacyUsers = [
    {
      id: 'PHAR001',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@pharmacy.com',
      role: 'admin',
      status: 'Active',
      lastLogin: '2024-01-20 14:30',
      permissions: pharmacyRoles.admin.permissions,
      avatar: '/avatars/sarah_johnson.jpg',
      phone: '+1 (555) 123-4567',
      department: 'Pharmacy Administration',
      joinDate: '2020-01-15'
    },
    {
      id: 'PHAR002',
      name: 'Mike Chen',
      email: 'mike.chen@pharmacy.com',
      role: 'pharmacist',
      status: 'Active',
      lastLogin: '2024-01-20 13:45',
      permissions: pharmacyRoles.pharmacist.permissions,
      avatar: '/avatars/mike_chen.jpg',
      phone: '+1 (555) 234-5678',
      department: 'Pharmacy Operations',
      joinDate: '2021-03-20'
    },
    {
      id: 'PHAR003',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@pharmacy.com',
      role: 'assistant',
      status: 'Active',
      lastLogin: '2024-01-20 12:15',
      permissions: pharmacyRoles.assistant.permissions,
      avatar: '/avatars/emily_rodriguez.jpg',
      phone: '+1 (555) 345-6789',
      department: 'Customer Service',
      joinDate: '2022-06-10'
    },
    {
      id: 'PHAR004',
      name: 'David Wilson',
      email: 'david.wilson@pharmacy.com',
      role: 'cashier',
      status: 'Inactive',
      lastLogin: '2024-01-18 16:20',
      permissions: pharmacyRoles.cashier.permissions,
      avatar: '/avatars/david_wilson.jpg',
      phone: '+1 (555) 456-7890',
      department: 'Sales',
      joinDate: '2023-01-05'
    }
  ];

  // Mock activity logs
  const activityLogs = [
    {
      id: 'LOG001',
      user: 'Dr. Sarah Johnson',
      action: 'User Created',
      details: 'Created new user: Mike Chen',
      timestamp: '2024-01-20 14:30',
      ipAddress: '192.168.1.100',
      status: 'Success'
    },
    {
      id: 'LOG002',
      user: 'Mike Chen',
      action: 'Prescription Processed',
      details: 'Processed prescription for John Smith',
      timestamp: '2024-01-20 13:45',
      ipAddress: '192.168.1.101',
      status: 'Success'
    },
    {
      id: 'LOG003',
      user: 'Emily Rodriguez',
      action: 'Sale Completed',
      details: 'Completed sale transaction #12345',
      timestamp: '2024-01-20 12:15',
      ipAddress: '192.168.1.102',
      status: 'Success'
    },
    {
      id: 'LOG004',
      user: 'David Wilson',
      action: 'Login Failed',
      details: 'Failed login attempt with wrong password',
      timestamp: '2024-01-20 11:30',
      ipAddress: '192.168.1.103',
      status: 'Failed'
    }
  ];

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsUserOpen(true);
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setIsUserOpen(true);
  };

  const handleSaveUser = () => {
    console.log('Saving user:', selectedUser);
    setIsUserOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    return pharmacyRoles[role as keyof typeof pharmacyRoles]?.color || 'bg-gray-100 text-gray-800';
  };

  const filteredUsers = pharmacyUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pharmacy Roles & Access</h1>
          <p className="text-gray-600 mt-1">Manage pharmacy staff roles, permissions, and access control</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button onClick={handleCreateUser}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
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
                  placeholder="Search users, roles, or departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterRole} onValueChange={setFilterRole}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="pharmacist">Pharmacist</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
                <SelectItem value="cashier">Cashier</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Pharmacy Staff ({filteredUsers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900">{user.name}</h3>
                              <Badge className={getStatusColor(user.status)}>
                                {user.status}
                              </Badge>
                              <Badge className={getRoleColor(user.role)}>
                                {pharmacyRoles[user.role as keyof typeof pharmacyRoles]?.name}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                            <div className="text-sm text-gray-600">{user.department}</div>
                            <div className="text-xs text-gray-500">
                              Last login: {user.lastLogin}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditUser(user)}>
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

        {/* Roles Tab */}
        <TabsContent value="roles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pharmacyRoles).map(([roleKey, role]) => (
              <Card key={roleKey}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    {role.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Permissions:</div>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.slice(0, 3).map((permission, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {permission.replace('_', ' ')}
                        </Badge>
                      ))}
                      {role.permissions.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{role.permissions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activity Log Tab */}
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Activity Log ({activityLogs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {activityLogs.map((log) => (
                    <div key={log.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{log.action}</h3>
                            <Badge className={getStatusColor(log.status)}>
                              {log.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">{log.details}</div>
                          <div className="text-sm text-gray-600">
                            User: {log.user} • IP: {log.ipAddress}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {log.timestamp}
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

      {/* User Creation/Edit Dialog */}
      <Dialog open={isUserOpen} onOpenChange={setIsUserOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <UserPlus className="h-5 w-5 mr-2" />
              {selectedUser ? 'Edit User' : 'Create New User'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="user-name">Full Name</Label>
                <Input id="user-name" defaultValue={selectedUser?.name || ''} />
              </div>
              <div>
                <Label htmlFor="user-email">Email</Label>
                <Input id="user-email" type="email" defaultValue={selectedUser?.email || ''} />
              </div>
              <div>
                <Label htmlFor="user-phone">Phone</Label>
                <Input id="user-phone" defaultValue={selectedUser?.phone || ''} />
              </div>
              <div>
                <Label htmlFor="user-role">Role</Label>
                <Select defaultValue={selectedUser?.role || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Pharmacy Admin</SelectItem>
                    <SelectItem value="pharmacist">Pharmacist</SelectItem>
                    <SelectItem value="assistant">Pharmacy Assistant</SelectItem>
                    <SelectItem value="cashier">Cashier</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="user-department">Department</Label>
                <Input id="user-department" defaultValue={selectedUser?.department || ''} />
              </div>
              <div>
                <Label htmlFor="user-status">Status</Label>
                <Select defaultValue={selectedUser?.status || 'Active'}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="user-permissions">Permissions</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {pharmacyRoles.admin.permissions.map((permission) => (
                  <div key={permission} className="flex items-center space-x-2">
                    <Checkbox id={permission} />
                    <Label htmlFor={permission} className="text-sm">
                      {permission.replace('_', ' ')}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsUserOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveUser}>
                <UserCheck className="h-4 w-4 mr-1" />
                {selectedUser ? 'Update User' : 'Create User'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
