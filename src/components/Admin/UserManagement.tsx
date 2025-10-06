import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Shield, 
  UserCheck, 
  UserX,
  Mail,
  Phone,
  Calendar,
  Filter,
  Download,
  Upload,
  MoreHorizontal,
  Eye,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  Target,
  UserPlus,
  UserMinus,
  Key,
  Settings,
  History,
  Bell,
  Zap,
  Award,
  Star,
  AlertCircle,
  Info,
  Globe,
  MapPin,
  Building,
  GraduationCap,
  Briefcase,
  Heart,
  Stethoscope,
  ClipboardList,
  FileText,
  Database,
  ShieldCheck,
  ShieldAlert,
  UserCog,
  UserEdit,
  UserSearch,
  UserSettings,
  UserShield,
  UserStar,
  UserTag,
  UserTimer,
  UserVoice,
  Table as TableIcon,
  Grid,
  Calculator
} from 'lucide-react';
import { UserRole } from '@/entities';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  department?: string;
  specialization?: string;
  employeeId: string;
  hireDate: Date;
  salary?: number;
  address?: string;
  emergencyContact?: string;
  qualifications?: string[];
  certifications?: string[];
  lastLoginAt?: Date;
  loginCount: number;
  createdAt: Date;
  updatedAt: Date;
  permissions: string[];
  twoFactorEnabled: boolean;
  passwordExpiry?: Date;
  profilePicture?: string;
  notes?: string;
  performanceScore?: number;
  isVerified: boolean;
  lastActivityAt?: Date;
  ipAddress?: string;
  deviceInfo?: string;
  timezone?: string;
  language?: string;
  workingHours?: {
    start: string;
    end: string;
    days: string[];
  };
}

interface UserActivity {
  id: string;
  userId: string;
  action: string;
  timestamp: Date;
  ipAddress: string;
  deviceInfo: string;
  details?: string;
}

interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
  required: boolean;
}

interface RolePermission {
  role: UserRole;
  permissions: string[];
  description: string;
}

export default function UserManagement() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      firstName: 'Dr. John',
      lastName: 'Doe',
      email: 'john.doe@hospital.com',
      phone: '+1-555-0123',
      role: UserRole.DOCTOR,
      isActive: true,
      department: 'Cardiology',
      specialization: 'Interventional Cardiology',
      employeeId: 'EMP001',
      hireDate: new Date('2020-03-15'),
      salary: 150000,
      address: '123 Medical Drive, Health City, HC 12345',
      emergencyContact: '+1-555-0124',
      qualifications: ['MD', 'FACC', 'Board Certified'],
      certifications: ['ACLS', 'BLS', 'Advanced Cardiac Life Support'],
      lastLoginAt: new Date('2024-01-15T08:30:00'),
      loginCount: 247,
      createdAt: new Date('2020-03-15'),
      updatedAt: new Date('2024-01-15'),
      permissions: ['patient_read', 'patient_write', 'prescription_write', 'surgery_schedule'],
      twoFactorEnabled: true,
      passwordExpiry: new Date('2024-07-15'),
      notes: 'Senior cardiologist with 15+ years experience',
      performanceScore: 95,
      isVerified: true,
      lastActivityAt: new Date('2024-01-15T17:45:00'),
      ipAddress: '192.168.1.100',
      deviceInfo: 'Chrome 120.0 on Windows 11',
      timezone: 'EST',
      language: 'en-US',
      workingHours: {
        start: '08:00',
        end: '17:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@hospital.com',
      phone: '+1-555-0125',
      role: UserRole.NURSE,
      isActive: true,
      department: 'Emergency',
      specialization: 'Emergency Nursing',
      employeeId: 'EMP002',
      hireDate: new Date('2021-06-01'),
      salary: 75000,
      address: '456 Care Lane, Medical Town, MT 67890',
      emergencyContact: '+1-555-0126',
      qualifications: ['BSN', 'RN', 'CEN'],
      certifications: ['ACLS', 'PALS', 'Trauma Nursing Core Course'],
      lastLoginAt: new Date('2024-01-15T06:00:00'),
      loginCount: 189,
      createdAt: new Date('2021-06-01'),
      updatedAt: new Date('2024-01-15'),
      permissions: ['patient_read', 'vital_signs', 'medication_admin'],
      twoFactorEnabled: false,
      passwordExpiry: new Date('2024-06-01'),
      notes: 'Experienced ER nurse, night shift supervisor',
      performanceScore: 88,
      isVerified: true,
      lastActivityAt: new Date('2024-01-15T18:30:00'),
      ipAddress: '192.168.1.101',
      deviceInfo: 'Safari 17.1 on macOS Sonoma',
      timezone: 'EST',
      language: 'en-US',
      workingHours: {
        start: '22:00',
        end: '06:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    },
    {
      id: '3',
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@hospital.com',
      phone: '+1-555-0127',
      role: UserRole.RECEPTIONIST,
      isActive: false,
      department: 'Front Desk',
      employeeId: 'EMP003',
      hireDate: new Date('2022-01-10'),
      salary: 45000,
      address: '789 Service Street, Care City, CC 54321',
      emergencyContact: '+1-555-0128',
      qualifications: ['High School Diploma', 'Customer Service Certificate'],
      certifications: ['CPR', 'HIPAA Compliance'],
      lastLoginAt: new Date('2024-01-10T09:15:00'),
      loginCount: 156,
      createdAt: new Date('2022-01-10'),
      updatedAt: new Date('2024-01-10'),
      permissions: ['patient_read', 'appointment_schedule', 'billing_view'],
      twoFactorEnabled: false,
      passwordExpiry: new Date('2024-01-10'),
      notes: 'On leave - maternity',
      performanceScore: 82,
      isVerified: true,
      lastActivityAt: new Date('2024-01-10T16:45:00'),
      ipAddress: '192.168.1.102',
      deviceInfo: 'Edge 120.0 on Windows 10',
      timezone: 'EST',
      language: 'en-US',
      workingHours: {
        start: '09:00',
        end: '18:00',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isBulkActionDialogOpen, setIsBulkActionDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'analytics'>('table');
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Enhanced filtering with multiple criteria
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.specialization?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && user.isActive) ||
                         (statusFilter === 'inactive' && !user.isActive) ||
                         (statusFilter === 'verified' && user.isVerified) ||
                         (statusFilter === 'unverified' && !user.isVerified);
    const matchesDepartment = departmentFilter === 'all' || user.department === departmentFilter;
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  // Sorting logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'name':
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
        break;
      case 'email':
        aValue = a.email;
        bValue = b.email;
        break;
      case 'role':
        aValue = a.role;
        bValue = b.role;
        break;
      case 'department':
        aValue = a.department || '';
        bValue = b.department || '';
        break;
      case 'lastLogin':
        aValue = a.lastLoginAt?.getTime() || 0;
        bValue = b.lastLoginAt?.getTime() || 0;
        break;
      case 'hireDate':
        aValue = a.hireDate.getTime();
        bValue = b.hireDate.getTime();
        break;
      case 'performance':
        aValue = a.performanceScore || 0;
        bValue = b.performanceScore || 0;
        break;
      default:
        aValue = a.firstName;
        bValue = b.firstName;
    }
    
    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  // Analytics data
  const analytics = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.isActive).length,
    inactiveUsers: users.filter(u => !u.isActive).length,
    verifiedUsers: users.filter(u => u.isVerified).length,
    twoFactorEnabled: users.filter(u => u.twoFactorEnabled).length,
    passwordExpiring: users.filter(u => u.passwordExpiry && u.passwordExpiry <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)).length,
    avgPerformanceScore: Math.round(users.reduce((sum, u) => sum + (u.performanceScore || 0), 0) / users.length),
    roleDistribution: Object.values(UserRole).reduce((acc, role) => {
      acc[role] = users.filter(u => u.role === role).length;
      return acc;
    }, {} as Record<UserRole, number>),
    departmentDistribution: users.reduce((acc, user) => {
      const dept = user.department || 'Unassigned';
      acc[dept] = (acc[dept] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    recentLogins: users.filter(u => u.lastLoginAt && u.lastLoginAt >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length
  };

  // Helper functions
  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case UserRole.ADMIN:
      case UserRole.SUPER_ADMIN:
        return 'bg-red-100 text-red-800 border-red-200';
      case UserRole.DOCTOR:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case UserRole.NURSE:
        return 'bg-green-100 text-green-800 border-green-200';
      case UserRole.RECEPTIONIST:
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case UserRole.LAB_TECHNICIAN:
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case UserRole.PHARMACIST:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case UserRole.ACCOUNTANT:
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case UserRole.HR_MANAGER:
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case UserRole.RADIOLOGIST:
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleDisplayName = (role: UserRole) => {
    return role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case UserRole.ADMIN:
      case UserRole.SUPER_ADMIN:
        return Shield;
      case UserRole.DOCTOR:
        return Stethoscope;
      case UserRole.NURSE:
        return Heart;
      case UserRole.RECEPTIONIST:
        return User;
      case UserRole.LAB_TECHNICIAN:
        return ClipboardList;
      case UserRole.PHARMACIST:
        return Briefcase;
      case UserRole.ACCOUNTANT:
        return Calculator;
      case UserRole.HR_MANAGER:
        return Users;
      case UserRole.RADIOLOGIST:
        return Eye;
      default:
        return User;
    }
  };

  const getPerformanceColor = (score?: number) => {
    if (!score) return 'text-gray-500';
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatNumber = (amount?: number) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(amount);
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  const handleBulkAction = (action: string) => {
    // Implement bulk actions
    console.log(`Bulk action: ${action}`, selectedUsers);
  };

  const handleExportUsers = () => {
    // Implement export functionality
    console.log('Exporting users...');
  };

  const handleImportUsers = () => {
    // Implement import functionality
    console.log('Importing users...');
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Analytics Overview */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced User Management</h1>
          <p className="text-gray-600 mt-1">Comprehensive staff management with analytics and security controls</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleExportUsers} className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button variant="outline" onClick={handleImportUsers} className="flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Add User</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5" />
                  <span>Create New User Account</span>
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="permissions">Permissions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="user@hospital.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input id="employeeId" placeholder="EMP001" />
                    </div>
                    <div>
                      <Label htmlFor="hireDate">Hire Date</Label>
                      <Input id="hireDate" type="date" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter full address" rows={2} />
                  </div>
                </TabsContent>
                
                <TabsContent value="professional" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="role">Role *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(UserRole).map(role => {
                            const Icon = getRoleIcon(role);
                            return (
                              <SelectItem key={role} value={role}>
                                <div className="flex items-center space-x-2">
                                  <Icon className="h-4 w-4" />
                                  <span>{getRoleDisplayName(role)}</span>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="radiology">Radiology</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                          <SelectItem value="laboratory">Laboratory</SelectItem>
                          <SelectItem value="administration">Administration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" placeholder="e.g., Interventional Cardiology" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salary">Salary</Label>
                      <Input id="salary" type="number" placeholder="75000" />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact</Label>
                      <Input id="emergencyContact" placeholder="+1 (555) 987-6543" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="qualifications">Qualifications</Label>
                    <Textarea id="qualifications" placeholder="MD, PhD, Board Certified, etc." rows={2} />
                  </div>
                  <div>
                    <Label htmlFor="certifications">Certifications</Label>
                    <Textarea id="certifications" placeholder="ACLS, BLS, etc." rows={2} />
                  </div>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">Enable 2FA for enhanced security</p>
                      </div>
                      <Switch id="twoFactor" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailVerification">Email Verification Required</Label>
                        <p className="text-sm text-gray-600">User must verify email before activation</p>
                      </div>
                      <Switch id="emailVerification" defaultChecked />
                    </div>
                    <div>
                      <Label htmlFor="passwordExpiry">Password Expiry Date</Label>
                      <Input id="passwordExpiry" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                          <SelectItem value="CST">Central Time (CST)</SelectItem>
                          <SelectItem value="MST">Mountain Time (MST)</SelectItem>
                          <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="es-ES">Spanish</SelectItem>
                          <SelectItem value="fr-FR">French</SelectItem>
                          <SelectItem value="de-DE">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="permissions" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div>
                      <Label>System Permissions</Label>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        {[
                          { id: 'patient_read', label: 'Read Patient Data', desc: 'View patient information' },
                          { id: 'patient_write', label: 'Write Patient Data', desc: 'Create/Edit patient records' },
                          { id: 'prescription_write', label: 'Write Prescriptions', desc: 'Create prescriptions' },
                          { id: 'billing_view', label: 'View Billing', desc: 'Access billing information' },
                          { id: 'reports_generate', label: 'Generate Reports', desc: 'Create system reports' },
                          { id: 'admin_access', label: 'Admin Access', desc: 'Full system access' }
                        ].map(permission => (
                          <div key={permission.id} className="flex items-center space-x-2">
                            <Checkbox id={permission.id} />
                            <div className="flex-1">
                              <Label htmlFor={permission.id} className="text-sm font-medium">
                                {permission.label}
                              </Label>
                              <p className="text-xs text-gray-600">{permission.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea id="notes" placeholder="Additional notes about this user..." rows={3} />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="flex items-center space-x-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Create User</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total Users</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalUsers}</p>
                <p className="text-xs text-blue-600 mt-1">+{analytics.recentLogins} active this week</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Active Users</p>
                <p className="text-3xl font-bold text-green-900">{analytics.activeUsers}</p>
                <p className="text-xs text-green-600 mt-1">
                  {Math.round((analytics.activeUsers / analytics.totalUsers) * 100)}% of total
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <UserCheck className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">2FA Enabled</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.twoFactorEnabled}</p>
                <p className="text-xs text-purple-600 mt-1">Security compliance</p>
              </div>
              <div className="p-3 rounded-full bg-purple-200">
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Avg Performance</p>
                <p className="text-3xl font-bold text-orange-900">{analytics.avgPerformanceScore}%</p>
                <p className="text-xs text-orange-600 mt-1">Team productivity</p>
              </div>
              <div className="p-3 rounded-full bg-orange-200">
                <Target className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Filters and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, email, employee ID, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    {Object.values(UserRole).map(role => {
                      const Icon = getRoleIcon(role);
                      return (
                        <SelectItem key={role} value={role}>
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4" />
                            <span>{getRoleDisplayName(role)}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="unverified">Unverified</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Emergency">Emergency</SelectItem>
                    <SelectItem value="Surgery">Surgery</SelectItem>
                    <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="Radiology">Radiology</SelectItem>
                    <SelectItem value="Pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="Laboratory">Laboratory</SelectItem>
                    <SelectItem value="Administration">Administration</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Advanced</span>
                </Button>
              </div>
            </div>
            
            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label>Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="role">Role</SelectItem>
                      <SelectItem value="department">Department</SelectItem>
                      <SelectItem value="lastLogin">Last Login</SelectItem>
                      <SelectItem value="hireDate">Hire Date</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Sort Order</Label>
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Items Per Page</Label>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-end">
                  <Button variant="outline" onClick={() => {
                    setSearchTerm('');
                    setRoleFilter('all');
                    setStatusFilter('all');
                    setDepartmentFilter('all');
                  }} className="w-full">
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
            
            {/* Bulk Actions */}
            {selectedUsers.length > 0 && (
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleBulkAction('activate')}>
                    <UserCheck className="h-4 w-4 mr-2" />
                    Activate
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleBulkAction('deactivate')}>
                    <UserX className="h-4 w-4 mr-2" />
                    Deactivate
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleBulkAction('export')}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setSelectedUsers([])}>
                    Clear
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Users Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Users ({sortedUsers.length})</span>
              {selectedUsers.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {selectedUsers.length} selected
                </Badge>
              )}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button 
                variant={viewMode === 'table' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('table')}
              >
                <TableIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'analytics' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('analytics')}
              >
                <BarChart3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'table' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox 
                          checked={selectedUsers.length === paginatedUsers.length && paginatedUsers.length > 0}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedUsers(paginatedUsers.map(u => u.id));
                            } else {
                              setSelectedUsers([]);
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Role & Department</TableHead>
                      <TableHead>Status & Security</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedUsers.map((user) => {
                      const RoleIcon = getRoleIcon(user.role);
                      return (
                        <TableRow key={user.id} className="hover:bg-gray-50">
                          <TableCell>
                            <Checkbox 
                              checked={selectedUsers.includes(user.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedUsers([...selectedUsers, user.id]);
                                } else {
                                  setSelectedUsers(selectedUsers.filter(id => id !== user.id));
                                }
                              }}
                            />
                          </TableCell>
                          
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                                {user.firstName[0]}{user.lastName[0]}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {user.firstName} {user.lastName}
                                </p>
                                <p className="text-sm text-gray-500">ID: {user.employeeId}</p>
                                {user.specialization && (
                                  <p className="text-xs text-blue-600">{user.specialization}</p>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-3 w-3 text-gray-400" />
                                <span className="text-sm">{user.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="h-3 w-3 text-gray-400" />
                                <span className="text-sm">{user.phone}</span>
                              </div>
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="space-y-2">
                              <Badge className={`${getRoleBadgeColor(user.role)} flex items-center w-fit space-x-1`}>
                                <RoleIcon className="h-3 w-3" />
                                <span>{getRoleDisplayName(user.role)}</span>
                              </Badge>
                              {user.department && (
                                <p className="text-sm text-gray-600">{user.department}</p>
                              )}
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                {user.isActive ? (
                                  <Badge className="bg-green-100 text-green-800 border-green-200">
                                    <UserCheck className="h-3 w-3 mr-1" />
                                    Active
                                  </Badge>
                                ) : (
                                  <Badge className="bg-red-100 text-red-800 border-red-200">
                                    <UserX className="h-3 w-3 mr-1" />
                                    Inactive
                                  </Badge>
                                )}
                                {user.isVerified && (
                                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                {user.twoFactorEnabled ? (
                                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                                    <Shield className="h-3 w-3 mr-1" />
                                    2FA
                                  </Badge>
                                ) : (
                                  <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                                    <Shield className="h-3 w-3 mr-1" />
                                    No 2FA
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="space-y-1">
                              {user.performanceScore ? (
                                <div className="flex items-center space-x-2">
                                  <span className={`text-sm font-medium ${getPerformanceColor(user.performanceScore)}`}>
                                    {user.performanceScore}%
                                  </span>
                                  <Progress value={user.performanceScore} className="w-16 h-2" />
                                </div>
                              ) : (
                                <span className="text-sm text-gray-500">No data</span>
                              )}
                              {user.salary && (
                                <p className="text-xs text-gray-600">{formatNumber(user.salary)}</p>
                              )}
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="space-y-1">
                              {user.lastLoginAt ? (
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-3 w-3 text-gray-400" />
                                  <span className="text-sm">{getTimeAgo(user.lastLoginAt)}</span>
                                </div>
                              ) : (
                                <span className="text-sm text-gray-500">Never logged in</span>
                              )}
                              <p className="text-xs text-gray-600">{user.loginCount} logins</p>
                            </div>
                          </TableCell>
                          
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end space-x-1">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setSelectedUser(user);
                                  setIsViewDialogOpen(true);
                                }}
                                className="h-8 w-8 p-0"
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setSelectedUser(user);
                                  setIsEditDialogOpen(true);
                                }}
                                className="h-8 w-8 p-0"
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {startIndex + 1} to {Math.min(endIndex, sortedUsers.length)} of {sortedUsers.length} users
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role);
                return (
                  <Card key={user.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {user.firstName[0]}{user.lastName[0]}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{user.firstName} {user.lastName}</h3>
                            <p className="text-sm text-gray-600">{user.employeeId}</p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <RoleIcon className="h-4 w-4 text-gray-400" />
                          <Badge className={getRoleBadgeColor(user.role)}>
                            {getRoleDisplayName(user.role)}
                          </Badge>
                        </div>
                        
                        {user.department && (
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{user.department}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600 truncate">{user.email}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {user.isActive ? (
                              <Badge className="bg-green-100 text-green-800">
                                <UserCheck className="h-3 w-3 mr-1" />
                                Active
                              </Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800">
                                <UserX className="h-3 w-3 mr-1" />
                                Inactive
                              </Badge>
                            )}
                          </div>
                          {user.performanceScore && (
                            <span className={`text-sm font-medium ${getPerformanceColor(user.performanceScore)}`}>
                              {user.performanceScore}%
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
          
          {viewMode === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PieChart className="h-5 w-5" />
                      <span>Role Distribution</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(analytics.roleDistribution).map(([role, count]) => {
                        const percentage = Math.round((count / analytics.totalUsers) * 100);
                        const Icon = getRoleIcon(role as UserRole);
                        return (
                          <div key={role} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{getRoleDisplayName(role as UserRole)}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Progress value={percentage} className="w-20 h-2" />
                              <span className="text-sm font-medium w-12 text-right">{count}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Department Distribution</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(analytics.departmentDistribution).map(([dept, count]) => {
                        const percentage = Math.round((count / analytics.totalUsers) * 100);
                        return (
                          <div key={dept} className="flex items-center justify-between">
                            <span className="text-sm">{dept}</span>
                            <div className="flex items-center space-x-2">
                              <Progress value={percentage} className="w-20 h-2" />
                              <span className="text-sm font-medium w-12 text-right">{count}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Security & Performance Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{analytics.twoFactorEnabled}</div>
                      <div className="text-sm text-gray-600">2FA Enabled</div>
                      <Progress value={(analytics.twoFactorEnabled / analytics.totalUsers) * 100} className="mt-2" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{analytics.verifiedUsers}</div>
                      <div className="text-sm text-gray-600">Verified Users</div>
                      <Progress value={(analytics.verifiedUsers / analytics.totalUsers) * 100} className="mt-2" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">{analytics.avgPerformanceScore}%</div>
                      <div className="text-sm text-gray-600">Avg Performance</div>
                      <Progress value={analytics.avgPerformanceScore} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* View User Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>User Details</span>
            </DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-xl">
                  {selectedUser.firstName[0]}{selectedUser.lastName[0]}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </h2>
                  <p className="text-gray-600">{selectedUser.employeeId}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className={getRoleBadgeColor(selectedUser.role)}>
                      {getRoleDisplayName(selectedUser.role)}
                    </Badge>
                    {selectedUser.isActive ? (
                      <Badge className="bg-green-100 text-green-800">
                        <UserCheck className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">
                        <UserX className="h-3 w-3 mr-1" />
                        Inactive
                      </Badge>
                    )}
                    {selectedUser.isVerified && (
                      <Badge className="bg-blue-100 text-blue-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{selectedUser.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{selectedUser.phone}</span>
                    </div>
                    {selectedUser.address && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{selectedUser.address}</span>
                      </div>
                    )}
                    {selectedUser.emergencyContact && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-red-400" />
                        <span className="text-sm">Emergency: {selectedUser.emergencyContact}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Professional Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedUser.department && (
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-gray-400" />
                        <span>{selectedUser.department}</span>
                      </div>
                    )}
                    {selectedUser.specialization && (
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-gray-400" />
                        <span>{selectedUser.specialization}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>Hired: {selectedUser.hireDate.toLocaleDateString()}</span>
                    </div>
                    {selectedUser.salary && (
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span>{formatNumber(selectedUser.salary)}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Security & Access</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Two-Factor Authentication</span>
                      {selectedUser.twoFactorEnabled ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Enabled
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-800">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Disabled
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Verified</span>
                      {selectedUser.isVerified ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Key className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">
                        Login Count: {selectedUser.loginCount}
                      </span>
                    </div>
                    {selectedUser.lastLoginAt && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          Last Login: {getTimeAgo(selectedUser.lastLoginAt)}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Performance & Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedUser.performanceScore && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Performance Score</span>
                          <span className={`font-medium ${getPerformanceColor(selectedUser.performanceScore)}`}>
                            {selectedUser.performanceScore}%
                          </span>
                        </div>
                        <Progress value={selectedUser.performanceScore} className="h-2" />
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">
                        Last Activity: {selectedUser.lastActivityAt ? getTimeAgo(selectedUser.lastActivityAt) : 'N/A'}
                      </span>
                    </div>
                    {selectedUser.timezone && (
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Timezone: {selectedUser.timezone}</span>
                      </div>
                    )}
                    {selectedUser.language && (
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Language: {selectedUser.language}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {selectedUser.qualifications && selectedUser.qualifications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Qualifications & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Qualifications</h4>
                        <div className="space-y-1">
                          {selectedUser.qualifications.map((qual, index) => (
                            <Badge key={index} variant="outline" className="mr-2 mb-1">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              {qual}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {selectedUser.certifications && selectedUser.certifications.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Certifications</h4>
                          <div className="space-y-1">
                            {selectedUser.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="mr-2 mb-1">
                                <Award className="h-3 w-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {selectedUser.notes && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{selectedUser.notes}</p>
                  </CardContent>
                </Card>
              )}
              
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => {
                  setIsViewDialogOpen(false);
                  setIsEditDialogOpen(true);
                }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit User
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Edit className="h-5 w-5" />
              <span>Edit User</span>
            </DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editFirstName">First Name</Label>
                  <Input id="editFirstName" defaultValue={selectedUser.firstName} />
                </div>
                <div>
                  <Label htmlFor="editLastName">Last Name</Label>
                  <Input id="editLastName" defaultValue={selectedUser.lastName} />
                </div>
              </div>
              <div>
                <Label htmlFor="editEmail">Email</Label>
                <Input id="editEmail" type="email" defaultValue={selectedUser.email} />
              </div>
              <div>
                <Label htmlFor="editPhone">Phone</Label>
                <Input id="editPhone" defaultValue={selectedUser.phone} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editRole">Role</Label>
                  <Select defaultValue={selectedUser.role}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(UserRole).map(role => (
                        <SelectItem key={role} value={role}>
                          {getRoleDisplayName(role)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="editDepartment">Department</Label>
                  <Input id="editDepartment" defaultValue={selectedUser.department || ''} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Update User</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
