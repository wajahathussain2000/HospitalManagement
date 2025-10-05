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
import { Progress } from '@/components/ui/progress';
import { 
  Package,
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
  Clock,
  Calendar,
  User,
  Users,
  Pill,
  Stethoscope,
  Shield,
  Key,
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

export default function PackLooseManagement() {
  const [activeTab, setActiveTab] = useState('units');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isConversionOpen, setIsConversionOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // Mock pack/loose data
  const packLooseData = {
    medicines: [
      {
        id: 'MED001',
        name: 'Paracetamol 500mg',
        category: 'Analgesic',
        manufacturer: 'PharmaCorp',
        units: {
          box: {
            quantity: 10,
            strips: 10,
            tablets: 100,
            price: 25.00,
            cost: 20.00,
            markup: 25.00
          },
          strip: {
            quantity: 100,
            tablets: 10,
            price: 2.50,
            cost: 2.00,
            markup: 25.00
          },
          tablet: {
            quantity: 1000,
            price: 0.25,
            cost: 0.20,
            markup: 25.00
          }
        },
        totalStock: {
          boxes: 5,
          strips: 25,
          tablets: 150
        },
        status: 'In Stock',
        lastUpdated: '2024-01-20'
      },
      {
        id: 'MED002',
        name: 'Amoxicillin 250mg',
        category: 'Antibiotic',
        manufacturer: 'MedSupply Co.',
        units: {
          box: {
            quantity: 10,
            strips: 10,
            tablets: 100,
            price: 42.00,
            cost: 35.00,
            markup: 20.00
          },
          strip: {
            quantity: 100,
            tablets: 10,
            price: 4.20,
            cost: 3.50,
            markup: 20.00
          },
          tablet: {
            quantity: 1000,
            price: 0.42,
            cost: 0.35,
            markup: 20.00
          }
        },
        totalStock: {
          boxes: 3,
          strips: 15,
          tablets: 75
        },
        status: 'Low Stock',
        lastUpdated: '2024-01-19'
      }
    ],
    conversions: [
      {
        id: 'CONV001',
        medicine: 'Paracetamol 500mg',
        fromUnit: 'Box',
        fromQuantity: 1,
        toUnit: 'Tablets',
        toQuantity: 100,
        date: '2024-01-20',
        user: 'Pharmacist Sarah',
        status: 'Completed'
      },
      {
        id: 'CONV002',
        medicine: 'Amoxicillin 250mg',
        fromUnit: 'Strip',
        fromQuantity: 5,
        toUnit: 'Tablets',
        toQuantity: 50,
        date: '2024-01-19',
        user: 'Assistant Mike',
        status: 'Completed'
      }
    ],
    pricingRules: [
      {
        id: 'RULE001',
        name: 'Bulk Discount',
        description: '10% discount on orders above 100 tablets',
        type: 'Discount',
        value: 10,
        minQuantity: 100,
        status: 'Active'
      },
      {
        id: 'RULE002',
        name: 'Loose Markup',
        description: '25% markup on loose tablet sales',
        type: 'Markup',
        value: 25,
        minQuantity: 1,
        status: 'Active'
      }
    ]
  };

  const handleUnitConversion = (medicine: any, fromUnit: string, toUnit: string, quantity: number) => {
    console.log('Converting:', medicine.name, fromUnit, toUnit, quantity);
    setIsConversionOpen(false);
  };

  const handlePricingUpdate = (medicine: any, unit: string, newPrice: number) => {
    console.log('Updating price:', medicine.name, unit, newPrice);
    setIsPricingOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMedicines = packLooseData.medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || medicine.status === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pack & Loose Management</h1>
          <p className="text-gray-600 mt-1">Manage box/strip/tablet system with unit conversions and pricing</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => setIsConversionOpen(true)}>
            <Package className="h-4 w-4 mr-2" />
            Unit Conversion
          </Button>
          <Button variant="outline" onClick={() => setIsPricingOpen(true)}>
            <Target className="h-4 w-4 mr-2" />
            Update Pricing
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Medicines</p>
                <p className="text-3xl font-bold text-gray-900">{packLooseData.medicines.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">All units tracked</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Conversions</p>
                <p className="text-3xl font-bold text-gray-900">{packLooseData.conversions.length}</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">This month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pricing Rules</p>
                <p className="text-3xl font-bold text-gray-900">{packLooseData.pricingRules.length}</p>
              </div>
              <Target className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-yellow-600">Active rules</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-3xl font-bold text-gray-900">
                  {packLooseData.medicines.reduce((sum, med) => {
                    const boxValue = med.totalStock.boxes * med.units.box.price;
                    const stripValue = med.totalStock.strips * med.units.strip.price;
                    const tabletValue = med.totalStock.tablets * med.units.tablet.price;
                    return sum + boxValue + stripValue + tabletValue;
                  }, 0).toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">Inventory value</span>
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
                  placeholder="Search medicines, units, or conversions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="In Stock">In Stock</SelectItem>
                <SelectItem value="Low Stock">Low Stock</SelectItem>
                <SelectItem value="Out of Stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="units" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Units Tab */}
        <TabsContent value="units">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Medicine Units ({filteredMedicines.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{medicine.name}</h3>
                            <Badge className={getStatusColor(medicine.status)}>
                              {medicine.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {/* Box Unit */}
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900">Box</h4>
                                <Badge variant="outline">{medicine.totalStock.boxes} boxes</Badge>
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>Price: {medicine.units.box.price}</div>
                                <div>Cost: {medicine.units.box.cost}</div>
                                <div>Markup: {medicine.units.box.markup}%</div>
                                <div>Contains: {medicine.units.box.strips} strips</div>
                              </div>
                            </div>

                            {/* Strip Unit */}
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900">Strip</h4>
                                <Badge variant="outline">{medicine.totalStock.strips} strips</Badge>
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>Price: {medicine.units.strip.price}</div>
                                <div>Cost: {medicine.units.strip.cost}</div>
                                <div>Markup: {medicine.units.strip.markup}%</div>
                                <div>Contains: {medicine.units.strip.tablets} tablets</div>
                              </div>
                            </div>

                            {/* Tablet Unit */}
                            <div className="border rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900">Tablet</h4>
                                <Badge variant="outline">{medicine.totalStock.tablets} tablets</Badge>
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>Price: {medicine.units.tablet.price}</div>
                                <div>Cost: {medicine.units.tablet.cost}</div>
                                <div>Markup: {medicine.units.tablet.markup}%</div>
                                <div>Loose unit</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Package className="h-4 w-4 mr-1" />
                            Convert
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

        {/* Conversions Tab */}
        <TabsContent value="conversions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Unit Conversions ({packLooseData.conversions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {packLooseData.conversions.map((conversion) => (
                    <div key={conversion.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{conversion.medicine}</h3>
                            <Badge className={getStatusColor(conversion.status)}>
                              {conversion.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Converted {conversion.fromQuantity} {conversion.fromUnit} to {conversion.toQuantity} {conversion.toUnit}
                          </div>
                          <div className="text-sm text-gray-600">
                            Date: {conversion.date} • User: {conversion.user}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Pricing Rules ({packLooseData.pricingRules.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {packLooseData.pricingRules.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{rule.name}</h3>
                            <Badge className={getStatusColor(rule.status)}>
                              {rule.status}
                            </Badge>
                            <Badge variant="outline">{rule.type}</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">{rule.description}</div>
                          <div className="text-sm text-gray-600">
                            Value: {rule.value}% • Min Quantity: {rule.minQuantity}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
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
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Pack & Loose Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Pack & loose reports and analytics would be displayed here</p>
                <p className="text-sm text-gray-500">Unit conversion reports, pricing analysis, and inventory valuation</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Unit Conversion Dialog */}
      <Dialog open={isConversionOpen} onOpenChange={setIsConversionOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Unit Conversion
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="conversion-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    {packLooseData.medicines.map(medicine => (
                      <SelectItem key={medicine.id} value={medicine.id}>
                        {medicine.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="conversion-quantity">Quantity</Label>
                <Input id="conversion-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div>
                <Label htmlFor="conversion-from">From Unit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select from unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="box">Box</SelectItem>
                    <SelectItem value="strip">Strip</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="conversion-to">To Unit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select to unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="box">Box</SelectItem>
                    <SelectItem value="strip">Strip</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsConversionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsConversionOpen(false)}>
                <Package className="h-4 w-4 mr-1" />
                Convert
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing Update Dialog */}
      <Dialog open={isPricingOpen} onOpenChange={setIsPricingOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Update Pricing
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pricing-medicine">Medicine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medicine" />
                  </SelectTrigger>
                  <SelectContent>
                    {packLooseData.medicines.map(medicine => (
                      <SelectItem key={medicine.id} value={medicine.id}>
                        {medicine.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pricing-unit">Unit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="box">Box</SelectItem>
                    <SelectItem value="strip">Strip</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pricing-cost">Cost Price</Label>
                <Input id="pricing-cost" type="number" placeholder="Enter cost price" />
              </div>
              <div>
                <Label htmlFor="pricing-selling">Selling Price</Label>
                <Input id="pricing-selling" type="number" placeholder="Enter selling price" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPricingOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPricingOpen(false)}>
                <Target className="h-4 w-4 mr-1" />
                Update Pricing
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
