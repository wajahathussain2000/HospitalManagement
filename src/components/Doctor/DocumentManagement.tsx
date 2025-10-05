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
  FileText,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Plus,
  Folder,
  Image,
  File,
  Archive,
  Lock,
  Unlock,
  Share,
  Copy,
  Move,
  Rename,
  Tag,
  Calendar,
  User,
  Clock,
  Shield,
  Cloud,
  Database,
  HardDrive,
  FolderOpen,
  FileImage,
  FileSpreadsheet,
  FileText as FileTextIcon,
  Save,
  Settings,
  MoreHorizontal,
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

export default function DocumentManagement() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('files');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock document categories
  const documentCategories = [
    { id: 'CAT001', name: 'Medical Reports', icon: FileText, color: 'bg-blue-100 text-blue-800' },
    { id: 'CAT002', name: 'Lab Results', icon: TestTube, color: 'bg-green-100 text-green-800' },
    { id: 'CAT003', name: 'Imaging', icon: FileImage, color: 'bg-purple-100 text-purple-800' },
    { id: 'CAT004', name: 'Prescriptions', icon: Pill, color: 'bg-orange-100 text-orange-800' },
    { id: 'CAT005', name: 'Patient Notes', icon: FileTextIcon, color: 'bg-gray-100 text-gray-800' },
    { id: 'CAT006', name: 'Certificates', icon: Award, color: 'bg-yellow-100 text-yellow-800' }
  ];

  // Mock documents
  const documents = [
    {
      id: 'DOC001',
      name: 'Blood Test Results - John Smith.pdf',
      type: 'PDF',
      size: '2.4 MB',
      category: 'Lab Results',
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-20',
      lastModified: '2024-01-20',
      tags: ['blood test', 'routine', 'normal'],
      isEncrypted: true,
      accessLevel: 'Private',
      thumbnail: '/thumbnails/pdf-thumb.png'
    },
    {
      id: 'DOC002',
      name: 'X-Ray Chest - Jane Doe.jpg',
      type: 'Image',
      size: '5.8 MB',
      category: 'Imaging',
      patient: 'Jane Doe',
      doctor: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-19',
      lastModified: '2024-01-19',
      tags: ['x-ray', 'chest', 'pneumonia'],
      isEncrypted: false,
      accessLevel: 'Shared',
      thumbnail: '/thumbnails/xray-thumb.jpg'
    },
    {
      id: 'DOC003',
      name: 'Prescription - Diabetes Management.pdf',
      type: 'PDF',
      size: '1.2 MB',
      category: 'Prescriptions',
      patient: 'Robert Wilson',
      doctor: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-18',
      lastModified: '2024-01-18',
      tags: ['diabetes', 'insulin', 'medication'],
      isEncrypted: true,
      accessLevel: 'Private',
      thumbnail: '/thumbnails/prescription-thumb.png'
    },
    {
      id: 'DOC004',
      name: 'MRI Brain Scan - Alice Brown.dcm',
      type: 'DICOM',
      size: '45.2 MB',
      category: 'Imaging',
      patient: 'Alice Brown',
      doctor: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-17',
      lastModified: '2024-01-17',
      tags: ['mri', 'brain', 'scan'],
      isEncrypted: true,
      accessLevel: 'Private',
      thumbnail: '/thumbnails/mri-thumb.jpg'
    },
    {
      id: 'DOC005',
      name: 'Medical Certificate - Work Leave.pdf',
      type: 'PDF',
      size: '0.8 MB',
      category: 'Certificates',
      patient: 'Michael Chen',
      doctor: 'Dr. Sarah Johnson',
      uploadDate: '2024-01-16',
      lastModified: '2024-01-16',
      tags: ['certificate', 'work leave', 'medical'],
      isEncrypted: false,
      accessLevel: 'Public',
      thumbnail: '/thumbnails/certificate-thumb.png'
    }
  ];

  // Mock folders
  const folders = [
    {
      id: 'FOLDER001',
      name: 'Patient Records 2024',
      documentCount: 45,
      lastModified: '2024-01-20',
      isShared: false,
      accessLevel: 'Private'
    },
    {
      id: 'FOLDER002',
      name: 'Lab Results Archive',
      documentCount: 128,
      lastModified: '2024-01-19',
      isShared: true,
      accessLevel: 'Shared'
    },
    {
      id: 'FOLDER003',
      name: 'Imaging Studies',
      documentCount: 67,
      lastModified: '2024-01-18',
      isShared: false,
      accessLevel: 'Private'
    },
    {
      id: 'FOLDER004',
      name: 'Research Papers',
      documentCount: 23,
      lastModified: '2024-01-17',
      isShared: true,
      accessLevel: 'Public'
    }
  ];

  const handleUploadFile = () => {
    setIsUploadOpen(true);
  };

  const handleViewFile = (file: any) => {
    setSelectedFile(file);
    setIsViewOpen(true);
  };

  const handleDownloadFile = (file: any) => {
    console.log('Downloading file:', file.name);
  };

  const handleDeleteFile = (file: any) => {
    console.log('Deleting file:', file.name);
  };

  const handleShareFile = (file: any) => {
    console.log('Sharing file:', file.name);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-5 w-5 text-red-600" />;
      case 'Image': return <FileImage className="h-5 w-5 text-blue-600" />;
      case 'DICOM': return <FileImage className="h-5 w-5 text-purple-600" />;
      case 'Word': return <FileText className="h-5 w-5 text-blue-600" />;
      case 'Excel': return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
      default: return <File className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'Private': return 'bg-red-100 text-red-800';
      case 'Shared': return 'bg-yellow-100 text-yellow-800';
      case 'Public': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || doc.type === filterType;
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Document & File Management</h1>
          <p className="text-gray-600 mt-1">Upload, organize, and manage medical documents and files</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button onClick={handleUploadFile}>
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
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
                  placeholder="Search documents, patients, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="File Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="PDF">PDF</SelectItem>
                <SelectItem value="Image">Image</SelectItem>
                <SelectItem value="DICOM">DICOM</SelectItem>
                <SelectItem value="Word">Word</SelectItem>
                <SelectItem value="Excel">Excel</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {documentCategories.map(category => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="files" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>

        {/* Files Tab */}
        <TabsContent value="files">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Documents ({filteredDocuments.length})
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {documents.filter(doc => doc.isEncrypted).length} Encrypted
                  </Badge>
                  <Badge variant="outline">
                    {documents.filter(doc => doc.accessLevel === 'Shared').length} Shared
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getFileIcon(doc.type)}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm text-gray-900 truncate">
                              {doc.name}
                            </h3>
                            <p className="text-xs text-gray-500">{doc.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {doc.isEncrypted && <Lock className="h-3 w-3 text-red-500" />}
                          <Badge className={getAccessLevelColor(doc.accessLevel)}>
                            {doc.accessLevel}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="text-xs text-gray-600">
                          <div>Patient: {doc.patient}</div>
                          <div>Category: {doc.category}</div>
                          <div>Uploaded: {doc.uploadDate}</div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {doc.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {doc.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{doc.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" onClick={() => handleViewFile(doc)}>
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDownloadFile(doc)}>
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleShareFile(doc)}>
                            <Share className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteFile(doc)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getFileIcon(doc.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="font-medium text-gray-900">{doc.name}</h3>
                            <Badge className={getAccessLevelColor(doc.accessLevel)}>
                              {doc.accessLevel}
                            </Badge>
                            {doc.isEncrypted && <Lock className="h-4 w-4 text-red-500" />}
                          </div>
                          <div className="text-sm text-gray-600">
                            {doc.patient} • {doc.category} • {doc.size} • {doc.uploadDate}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {doc.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleViewFile(doc)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDownloadFile(doc)}>
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleShareFile(doc)}>
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteFile(doc)}>
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Folders Tab */}
        <TabsContent value="folders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Folder className="h-5 w-5 mr-2" />
                Folders ({folders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {folders.map((folder) => (
                  <div key={folder.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <FolderOpen className="h-5 w-5 text-blue-600" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm text-gray-900 truncate">
                            {folder.name}
                          </h3>
                          <p className="text-xs text-gray-500">{folder.documentCount} documents</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {folder.isShared && <Share className="h-3 w-3 text-green-500" />}
                        <Badge className={getAccessLevelColor(folder.accessLevel)}>
                          {folder.accessLevel}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-600 mb-3">
                      <div>Last modified: {folder.lastModified}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                Document Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documentCategories.map((category) => (
                  <div key={category.id} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-600">
                          {documents.filter(doc => doc.category === category.name).length} documents
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
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
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Storage Tab */}
        <TabsContent value="storage">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HardDrive className="h-5 w-5 mr-2" />
                  Storage Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Used Space</span>
                    <span className="text-sm font-medium">2.4 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Documents</div>
                      <div className="font-medium">1.8 GB</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Images</div>
                      <div className="font-medium">0.6 GB</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="h-5 w-5 mr-2" />
                  Cloud Backup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Backup</span>
                    <span className="text-sm font-medium">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <Button className="w-full">
                    <Cloud className="h-4 w-4 mr-2" />
                    Backup Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Encrypted Files</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Access Level</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Secure</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Security Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Upload Dialog */}
      <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Upload Documents
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop files here, or click to select</p>
              <p className="text-sm text-gray-500">Supports PDF, Images, DICOM, Word, Excel files</p>
              <Button className="mt-4">
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="upload-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {documentCategories.map(category => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="upload-patient">Patient</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-smith">John Smith</SelectItem>
                    <SelectItem value="jane-doe">Jane Doe</SelectItem>
                    <SelectItem value="robert-wilson">Robert Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="upload-tags">Tags</Label>
                <Input id="upload-tags" placeholder="Enter tags separated by commas" />
              </div>
              
              <div>
                <Label htmlFor="upload-access">Access Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="shared">Shared</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View File Dialog */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center">
                {selectedFile && getFileIcon(selectedFile.type)}
                <span className="ml-2">{selectedFile?.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleDownloadFile(selectedFile)}>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleShareFile(selectedFile)}>
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedFile && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">File Size</div>
                  <div className="font-medium">{selectedFile.size}</div>
                </div>
                <div>
                  <div className="text-gray-600">Upload Date</div>
                  <div className="font-medium">{selectedFile.uploadDate}</div>
                </div>
                <div>
                  <div className="text-gray-600">Patient</div>
                  <div className="font-medium">{selectedFile.patient}</div>
                </div>
                <div>
                  <div className="text-gray-600">Category</div>
                  <div className="font-medium">{selectedFile.category}</div>
                </div>
              </div>
              
              <div>
                <div className="text-gray-600 mb-2">Tags</div>
                <div className="flex flex-wrap gap-1">
                  {selectedFile.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="text-center text-gray-600">
                  <FileText className="h-12 w-12 mx-auto mb-2" />
                  <p>File preview would be displayed here</p>
                  <p className="text-sm">Supported formats: PDF, Images, DICOM</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
