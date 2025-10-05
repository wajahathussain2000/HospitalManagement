import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { 
  Settings,
  Search,
  Plus,
  Edit,
  Eye,
  Download,
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Building,
  Shield,
  Activity,
  BarChart3,
  Target,
  TestTube,
  Zap,
  Heart
} from 'lucide-react';

export default function OptionalModulesSimple() {
  const [activeTab, setActiveTab] = useState('available');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock optional modules data
  const modulesData = {
    available: [
      {
        id: 'MOD001',
        name: 'Advanced Analytics',
        description: 'AI-powered lab analytics and predictive insights',
        category: 'Analytics',
        price: 2500,
        features: ['Predictive Analytics', 'Trend Analysis', 'Performance Metrics'],
        status: 'Available'
      },
      {
        id: 'MOD002',
        name: 'Mobile App',
        description: 'Mobile application for lab technicians and staff',
        category: 'Mobile',
        price: 1500,
        features: ['Mobile Access', 'Push Notifications', 'Offline Mode'],
        status: 'Available'
      },
      {
        id: 'MOD003',
        name: 'API Integration',
        description: 'RESTful API for third-party integrations',
        category: 'Integration',
        price: 3000,
        features: ['REST API', 'Webhooks', 'Documentation'],
        status: 'Available'
      }
    ],
    installed: [
      {
        id: 'MOD004',
        name: 'Quality Control Plus',
        description: 'Enhanced quality control and compliance management',
        category: 'Quality',
        price: 2000,
        features: ['QC Charts', 'Compliance Reports', 'Audit Trail'],
        status: 'Installed',
        version: '2.1.0',
        installDate: '2024-01-15'
      },
      {
        id: 'MOD005',
        name: 'Inventory Management',
        description: 'Advanced inventory tracking and management',
        category: 'Inventory',
        price: 1800,
        features: ['Stock Tracking', 'Reorder Alerts', 'Supplier Management'],
        status: 'Installed',
        version: '1.5.2',
        installDate: '2024-01-10'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-blue-100 text-blue-800';
      case 'Installed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Optional Modules</h1>
          <p className="text-gray-600 mt-1">Manage additional lab modules, extensions, and integrations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export List
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Module
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Modules</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.available.length}</p>
              </div>
              <Settings className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Installed Modules</p>
                <p className="text-3xl font-bold text-gray-900">{modulesData.installed.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${modulesData.available.reduce((sum, mod) => sum + mod.price, 0).toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">System Status</p>
                <p className="text-3xl font-bold text-green-600">Healthy</p>
              </div>
              <Heart className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search modules, categories, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="installed">Installed</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
                <SelectItem value="integration">Integration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Modules</TabsTrigger>
          <TabsTrigger value="installed">Installed Modules</TabsTrigger>
        </TabsList>

        {/* Available Modules Tab */}
        <TabsContent value="available">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Available Optional Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modulesData.available.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{module.name}</h3>
                          <Badge className={getStatusColor(module.status)}>
                            {module.status}
                          </Badge>
                          <Badge variant="outline">
                            {module.category}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {module.description}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Price: ${module.price} • Features: {module.features.join(', ')}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Install
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Installed Modules Tab */}
        <TabsContent value="installed">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Installed Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modulesData.installed.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{module.name}</h3>
                          <Badge className={getStatusColor(module.status)}>
                            {module.status}
                          </Badge>
                          <Badge variant="outline">
                            {module.category}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {module.description}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Version: {module.version} • Installed: {module.installDate} • Features: {module.features.join(', ')}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4 mr-1" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add New Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add New Module
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="moduleType">Module Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select module type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="integration">Integration</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="quality">Quality</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Module
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
