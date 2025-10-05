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
import { Progress } from '@/components/ui/progress';
import { 
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Heart,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
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
  MoreHorizontal,
  Grid,
  List,
  Layout,
  Columns,
  Rows,
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

export default function FeedbackRatings() {
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  const [isResponseOpen, setIsResponseOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  // Mock feedback data
  const feedbackData = [
    {
      id: 'FB001',
      patient: {
        name: 'John Smith',
        avatar: '/avatars/john-smith.jpg',
        age: 45,
        gender: 'Male'
      },
      rating: 5,
      date: '2024-01-20',
      consultation: {
        date: '2024-01-18',
        type: 'Follow-up',
        duration: 30
      },
      feedback: {
        overall: 'Excellent service and care. Dr. Johnson was very thorough and explained everything clearly.',
        communication: 5,
        expertise: 5,
        waitTime: 4,
        facilities: 5,
        recommendations: 5
      },
      comments: 'The doctor was very patient and answered all my questions. The treatment plan was clear and effective.',
      tags: ['excellent', 'thorough', 'clear explanation'],
      status: 'Responded',
      response: {
        date: '2024-01-20',
        message: 'Thank you for your kind words, John. I\'m glad I could help clarify your treatment plan. Please don\'t hesitate to reach out if you have any questions.',
        doctor: 'Dr. Sarah Johnson'
      }
    },
    {
      id: 'FB002',
      patient: {
        name: 'Jane Doe',
        avatar: '/avatars/jane-doe.jpg',
        age: 32,
        gender: 'Female'
      },
      rating: 4,
      date: '2024-01-19',
      consultation: {
        date: '2024-01-17',
        type: 'Initial Consultation',
        duration: 45
      },
      feedback: {
        overall: 'Good experience overall, but had to wait a bit longer than expected.',
        communication: 4,
        expertise: 5,
        waitTime: 3,
        facilities: 4,
        recommendations: 4
      },
      comments: 'The doctor was knowledgeable and professional. The waiting time could be improved.',
      tags: ['good', 'knowledgeable', 'wait time'],
      status: 'Pending',
      response: null
    },
    {
      id: 'FB003',
      patient: {
        name: 'Robert Wilson',
        avatar: '/avatars/robert-wilson.jpg',
        age: 58,
        gender: 'Male'
      },
      rating: 3,
      date: '2024-01-18',
      consultation: {
        date: '2024-01-16',
        type: 'Telemedicine',
        duration: 25
      },
      feedback: {
        overall: 'Average experience. Technical issues with the video call affected the consultation.',
        communication: 3,
        expertise: 4,
        waitTime: 2,
        facilities: 3,
        recommendations: 3
      },
      comments: 'The doctor was competent but the video quality was poor. Had to repeat questions multiple times.',
      tags: ['average', 'technical issues', 'video quality'],
      status: 'Pending',
      response: null
    },
    {
      id: 'FB004',
      patient: {
        name: 'Alice Brown',
        avatar: '/avatars/alice-brown.jpg',
        age: 28,
        gender: 'Female'
      },
      rating: 5,
      date: '2024-01-17',
      consultation: {
        date: '2024-01-15',
        type: 'Emergency',
        duration: 60
      },
      feedback: {
        overall: 'Outstanding care during my emergency visit. Dr. Johnson was incredibly responsive and caring.',
        communication: 5,
        expertise: 5,
        waitTime: 5,
        facilities: 5,
        recommendations: 5
      },
      comments: 'I was very anxious about my condition, but Dr. Johnson put me at ease and provided excellent care.',
      tags: ['outstanding', 'emergency', 'caring', 'responsive'],
      status: 'Responded',
      response: {
        date: '2024-01-17',
        message: 'I\'m so glad I could help during your emergency, Alice. Your health and comfort are my top priorities. Please continue following the treatment plan.',
        doctor: 'Dr. Sarah Johnson'
      }
    },
    {
      id: 'FB005',
      patient: {
        name: 'Michael Chen',
        avatar: '/avatars/michael-chen.jpg',
        age: 41,
        gender: 'Male'
      },
      rating: 2,
      date: '2024-01-16',
      consultation: {
        date: '2024-01-14',
        type: 'Follow-up',
        duration: 20
      },
      feedback: {
        overall: 'Disappointed with the consultation. Felt rushed and didn\'t get answers to my questions.',
        communication: 2,
        expertise: 3,
        waitTime: 4,
        facilities: 3,
        recommendations: 2
      },
      comments: 'The consultation felt rushed and I didn\'t get the detailed explanation I was hoping for.',
      tags: ['disappointed', 'rushed', 'unclear'],
      status: 'Pending',
      response: null
    }
  ];

  // Mock analytics data
  const analyticsData = {
    overallRating: 4.2,
    totalFeedback: 127,
    responseRate: 78,
    averageWaitTime: 15,
    topCategories: [
      { category: 'Communication', rating: 4.5, count: 127 },
      { category: 'Expertise', rating: 4.7, count: 127 },
      { category: 'Wait Time', rating: 3.8, count: 127 },
      { category: 'Facilities', rating: 4.3, count: 127 },
      { category: 'Recommendations', rating: 4.4, count: 127 }
    ],
    ratingDistribution: [
      { rating: 5, count: 45, percentage: 35 },
      { rating: 4, count: 38, percentage: 30 },
      { rating: 3, count: 25, percentage: 20 },
      { rating: 2, count: 12, percentage: 9 },
      { rating: 1, count: 7, percentage: 6 }
    ],
    trends: {
      thisMonth: 4.3,
      lastMonth: 4.1,
      change: 0.2
    }
  };

  const handleRespondToFeedback = (feedback: any) => {
    setSelectedFeedback(feedback);
    setIsResponseOpen(true);
  };

  const handleSaveResponse = () => {
    console.log('Saving response for feedback:', selectedFeedback?.id);
    setIsResponseOpen(false);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Responded': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const filteredFeedback = feedbackData.filter(feedback => {
    const matchesSearch = feedback.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.comments.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRating = filterRating === 'all' || feedback.rating.toString() === filterRating;
    const matchesStatus = filterStatus === 'all' || feedback.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesRating && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Feedback & Ratings</h1>
          <p className="text-gray-600 mt-1">Manage patient feedback, ratings, and satisfaction analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Rating</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.overallRating}</p>
              </div>
              <div className="flex items-center space-x-1">
                {renderStars(Math.round(analyticsData.overallRating))}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+{analyticsData.trends.change} from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.totalFeedback}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                {analyticsData.responseRate}% response rate
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Wait Time</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.averageWaitTime} min</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                Target: 10 minutes
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Responses</p>
                <p className="text-3xl font-bold text-gray-900">
                  {feedbackData.filter(f => f.status === 'Pending').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                Need attention
              </div>
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
                  placeholder="Search feedback, patients, or comments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Rating Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Rating Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-sm font-medium">{item.rating}</span>
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{item.count} reviews</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Ratings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Category Ratings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.topCategories.map((category) => (
                    <div key={category.category} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium">{category.category}</span>
                          <span className="text-gray-600">{category.rating}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(category.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Patient Feedback ({filteredFeedback.length})
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {feedbackData.filter(f => f.status === 'Pending').length} Pending
                  </Badge>
                  <Badge variant="outline">
                    {feedbackData.filter(f => f.status === 'Responded').length} Responded
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredFeedback.map((feedback) => (
                    <div key={feedback.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {feedback.patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900">{feedback.patient.name}</h3>
                              <Badge className={getStatusColor(feedback.status)}>
                                {feedback.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-1 mb-2">
                              {renderStars(feedback.rating)}
                              <span className="text-sm text-gray-600 ml-2">
                                {feedback.rating}/5 • {feedback.date}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {feedback.consultation.type} • {feedback.consultation.duration} min
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {feedback.status === 'Pending' && (
                            <Button size="sm" onClick={() => handleRespondToFeedback(feedback)}>
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Respond
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-700 mb-2">{feedback.comments}</p>
                        <div className="flex flex-wrap gap-1">
                          {feedback.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {feedback.response && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-blue-900">Your Response</span>
                            <span className="text-xs text-blue-700">{feedback.response.date}</span>
                          </div>
                          <p className="text-sm text-blue-800">{feedback.response.message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2" />
                  Feedback Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="font-medium">{analyticsData.trends.thisMonth}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Month</span>
                    <span className="font-medium">{analyticsData.trends.lastMonth}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Change</span>
                    <span className={`font-medium ${analyticsData.trends.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {analyticsData.trends.change > 0 ? '+' : ''}{analyticsData.trends.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Improvement Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Wait Time</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-sm font-medium">3.8/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Facilities</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                      </div>
                      <span className="text-sm font-medium">4.3/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Trend charts would be displayed here</p>
                <p className="text-sm text-gray-500">Monthly rating trends, response time analytics, and patient satisfaction metrics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Response Dialog */}
      <Dialog open={isResponseOpen} onOpenChange={setIsResponseOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Respond to Feedback
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setIsResponseOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSaveResponse}>
                  <Save className="h-4 w-4 mr-1" />
                  Send Response
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          {selectedFeedback && (
            <div className="space-y-6">
              <div className="bg-gray-50 border rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium">{selectedFeedback.patient.name}</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(selectedFeedback.rating)}
                  </div>
                </div>
                <p className="text-sm text-gray-700">{selectedFeedback.comments}</p>
              </div>
              
              <div>
                <Label htmlFor="response-message">Your Response</Label>
                <Textarea
                  id="response-message"
                  placeholder="Write your response to the patient..."
                  className="mt-1"
                  rows={4}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
