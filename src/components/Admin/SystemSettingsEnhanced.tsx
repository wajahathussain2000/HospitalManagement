import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { 
  Settings, 
  Shield, 
  Database, 
  Bell, 
  Key, 
  Lock, 
  Unlock, 
  Download, 
  Upload, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  Globe, 
  Server, 
  HardDrive, 
  Wifi, 
  Eye, 
  EyeOff, 
  Trash2, 
  Edit, 
  Plus, 
  Search, 
  Filter, 
  Download as DownloadIcon, 
  Upload as UploadIcon, 
  RefreshCw as RefreshCwIcon, 
  AlertTriangle as AlertTriangleIcon, 
  CheckCircle as CheckCircleIcon, 
  Clock as ClockIcon, 
  Calendar as CalendarIcon, 
  Users as UsersIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Globe as GlobeIcon, 
  Server as ServerIcon, 
  HardDrive as HardDriveIcon, 
  Wifi as WifiIcon, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon, 
  Trash2 as Trash2Icon, 
  Edit as EditIcon, 
  Plus as PlusIcon, 
  Search as SearchIcon, 
  Filter as FilterIcon, 
  Settings as SettingsIcon, 
  Shield as ShieldIcon, 
  Database as DatabaseIcon, 
  Bell as BellIcon, 
  Key as KeyIcon, 
  Lock as LockIcon, 
  Unlock as UnlockIcon
} from 'lucide-react';

interface SecurityConfig {
  id: string;
  name: string;
  type: 'Password Policy' | 'Two-Factor Auth' | 'Session Timeout' | 'IP Whitelist' | 'Encryption';
  status: 'Enabled' | 'Disabled';
  description: string;
  lastModified: Date;
  modifiedBy: string;
}

interface BackupConfig {
  id: string;
  name: string;
  type: 'Full' | 'Incremental' | 'Differential';
  schedule: 'Daily' | 'Weekly' | 'Monthly';
  lastBackup: Date;
  nextBackup: Date;
  size: string;
  status: 'Success' | 'Failed' | 'In Progress';
  location: string;
}

interface Integration {
  id: string;
  name: string;
  type: 'API' | 'Database' | 'File Transfer' | 'Webhook';
  status: 'Active' | 'Inactive' | 'Error';
  endpoint: string;
  lastSync: Date;
  description: string;
}

interface AuditLog {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: Date;
  ipAddress: string;
  status: 'Success' | 'Failed';
  details: string;
}

export default function SystemSettingsEnhanced() {
  const [securityConfigs, setSecurityConfigs] = useState<SecurityConfig[]>([
    {
      id: '1',
      name: 'Password Policy',
      type: 'Password Policy',
      status: 'Enabled',
      description: 'Minimum 8 characters, mixed case, numbers, special characters',
      lastModified: new Date('2024-01-10'),
      modifiedBy: 'Admin'
    },
    {
      id: '2',
      name: 'Two-Factor Authentication',
      type: 'Two-Factor Auth',
      status: 'Enabled',
      description: 'SMS and email verification for all users',
      lastModified: new Date('2024-01-12'),
      modifiedBy: 'Security Admin'
    }
  ]);

  const [backupConfigs, setBackupConfigs] = useState<BackupConfig[]>([
    {
      id: '1',
      name: 'Daily Full Backup',
      type: 'Full',
      schedule: 'Daily',
      lastBackup: new Date('2024-01-15'),
      nextBackup: new Date('2024-01-16'),
      size: '2.5 GB',
      status: 'Success',
      location: '/backups/daily/'
    },
    {
      id: '2',
      name: 'Weekly Incremental',
      type: 'Incremental',
      schedule: 'Weekly',
      lastBackup: new Date('2024-01-14'),
      nextBackup: new Date('2024-01-21'),
      size: '450 MB',
      status: 'Success',
      location: '/backups/weekly/'
    }
  ]);

  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: '1',
      name: 'EHR System',
      type: 'API',
      status: 'Active',
      endpoint: 'https://ehr-api.hospital.com',
      lastSync: new Date('2024-01-15'),
      description: 'Electronic Health Records integration'
    },
    {
      id: '2',
      name: 'Insurance Provider API',
      type: 'API',
      status: 'Active',
      endpoint: 'https://insurance-api.provider.com',
      lastSync: new Date('2024-01-15'),
      description: 'Insurance verification and claims processing'
    }
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: '1',
      user: 'admin@hospital.com',
      action: 'Login',
      resource: 'System',
      timestamp: new Date('2024-01-15T10:30:00'),
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Successful login from office network'
    },
    {
      id: '2',
      user: 'doctor@hospital.com',
      action: 'View Patient',
      resource: 'Patient Records',
      timestamp: new Date('2024-01-15T10:25:00'),
      ipAddress: '192.168.1.105',
      status: 'Success',
      details: 'Accessed patient record ID: P001'
    }
  ]);

  const [viewMode, setViewMode] = useState<'overview' | 'security' | 'backup' | 'integrations' | 'audit'>('overview');
  const [isCreateBackupDialogOpen, setIsCreateBackupDialogOpen] = useState(false);
  const [isCreateIntegrationDialogOpen, setIsCreateIntegrationDialogOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Enabled':
      case 'Active':
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Disabled':
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Failed':
      case 'Error':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Password Policy':
        return <Key className="h-5 w-5" />;
      case 'Two-Factor Auth':
        return <Shield className="h-5 w-5" />;
      case 'Session Timeout':
        return <Clock className="h-5 w-5" />;
      case 'IP Whitelist':
        return <Globe className="h-5 w-5" />;
      case 'Encryption':
        return <Lock className="h-5 w-5" />;
      case 'API':
        return <Server className="h-5 w-5" />;
      case 'Database':
        return <Database className="h-5 w-5" />;
      case 'File Transfer':
        return <Upload className="h-5 w-5" />;
      case 'Webhook':
        return <Wifi className="h-5 w-5" />;
      default:
        return <Settings className="h-5 w-5" />;
    }
  };

  const analytics = {
    totalSecurityConfigs: securityConfigs.length,
    enabledSecurity: securityConfigs.filter(s => s.status === 'Enabled').length,
    totalBackups: backupConfigs.length,
    successfulBackups: backupConfigs.filter(b => b.status === 'Success').length,
    totalIntegrations: integrations.length,
    activeIntegrations: integrations.filter(i => i.status === 'Active').length,
    totalAuditLogs: auditLogs.length,
    recentLogs: auditLogs.filter(log => new Date(log.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-1">Comprehensive system configuration with security, backup, and integration management</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Config</span>
          </Button>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Security Configs</p>
                <p className="text-3xl font-bold text-blue-900">{analytics.totalSecurityConfigs}</p>
                <p className="text-xs text-blue-600 mt-1">{analytics.enabledSecurity} enabled</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Backups</p>
                <p className="text-3xl font-bold text-green-900">{analytics.totalBackups}</p>
                <p className="text-xs text-green-600 mt-1">{analytics.successfulBackups} successful</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <Database className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Integrations</p>
                <p className="text-3xl font-bold text-purple-900">{analytics.totalIntegrations}</p>
                <p className="text-xs text-purple-600 mt-1">{analytics.activeIntegrations} active</p>
              </div>
              <div className="p-3 rounded-full bg-purple-200">
                <Server className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Audit Logs</p>
                <p className="text-3xl font-bold text-orange-900">{analytics.totalAuditLogs}</p>
                <p className="text-xs text-orange-600 mt-1">{analytics.recentLogs} today</p>
              </div>
              <div className="p-3 rounded-full bg-orange-200">
                <Bell className="h-6 w-6 text-orange-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Card>
        <CardContent className="p-6">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="backup">Backup</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Main Content */}
      {viewMode === 'security' && (
        <Card>
          <CardHeader>
            <CardTitle>Security Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Configuration</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead>Modified By</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {securityConfigs.map((config) => (
                  <TableRow key={config.id}>
                    <TableCell className="font-medium">{config.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(config.type)}
                        <span>{config.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(config.status)}>
                        {config.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{config.description}</TableCell>
                    <TableCell>{config.lastModified.toLocaleDateString()}</TableCell>
                    <TableCell>{config.modifiedBy}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'backup' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Backup Management</CardTitle>
              <Dialog open={isCreateBackupDialogOpen} onOpenChange={setIsCreateBackupDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Create Backup</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Backup</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="backupName">Backup Name</Label>
                      <Input id="backupName" placeholder="Enter backup name" />
                    </div>
                    <div>
                      <Label htmlFor="backupType">Backup Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full">Full Backup</SelectItem>
                          <SelectItem value="Incremental">Incremental</SelectItem>
                          <SelectItem value="Differential">Differential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="schedule">Schedule</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Daily">Daily</SelectItem>
                          <SelectItem value="Weekly">Weekly</SelectItem>
                          <SelectItem value="Monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button variant="outline" onClick={() => setIsCreateBackupDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button>Create Backup</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Backup Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Last Backup</TableHead>
                  <TableHead>Next Backup</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backupConfigs.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell className="font-medium">{backup.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{backup.type}</Badge>
                    </TableCell>
                    <TableCell>{backup.schedule}</TableCell>
                    <TableCell>{backup.lastBackup.toLocaleDateString()}</TableCell>
                    <TableCell>{backup.nextBackup.toLocaleDateString()}</TableCell>
                    <TableCell>{backup.size}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(backup.status)}>
                        {backup.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'integrations' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>System Integrations</CardTitle>
              <Dialog open={isCreateIntegrationDialogOpen} onOpenChange={setIsCreateIntegrationDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Integration</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Integration</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="integrationName">Integration Name</Label>
                      <Input id="integrationName" placeholder="Enter integration name" />
                    </div>
                    <div>
                      <Label htmlFor="integrationType">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="API">API</SelectItem>
                          <SelectItem value="Database">Database</SelectItem>
                          <SelectItem value="File Transfer">File Transfer</SelectItem>
                          <SelectItem value="Webhook">Webhook</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="endpoint">Endpoint</Label>
                      <Input id="endpoint" placeholder="Enter endpoint URL" />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button variant="outline" onClick={() => setIsCreateIntegrationDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button>Add Integration</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Integration</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {integrations.map((integration) => (
                  <TableRow key={integration.id}>
                    <TableCell className="font-medium">{integration.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(integration.type)}
                        <span>{integration.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{integration.endpoint}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(integration.status)}>
                        {integration.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{integration.lastSync.toLocaleDateString()}</TableCell>
                    <TableCell>{integration.description}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'audit' && (
        <Card>
          <CardHeader>
            <CardTitle>Audit Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.resource}</TableCell>
                    <TableCell>{log.timestamp.toLocaleString()}</TableCell>
                    <TableCell>{log.ipAddress}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{log.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {viewMode === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityConfigs.slice(0, 3).map((config) => (
                  <div key={config.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        {getTypeIcon(config.type)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{config.name}</p>
                        <p className="text-xs text-gray-600">{config.lastModified.toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(config.status)}>
                      {config.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Status</span>
                  <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Status</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Status</span>
                  <Badge className="bg-green-100 text-green-800">Up to Date</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Status</span>
                  <Badge className="bg-green-100 text-green-800">Secure</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
