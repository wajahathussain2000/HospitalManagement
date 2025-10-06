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
import { Progress } from '@/components/ui/progress';
import { 
  ShoppingCart,
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

export default function SalesPOSBilling() {
  const [activeTab, setActiveTab] = useState('pos');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);

  // Mock POS data
  const posData = {
    cart: [
      {
        id: 'ITEM001',
        name: 'Paracetamol 500mg',
        quantity: 2,
        unitPrice: 2.50,
        total: 5.00,
        barcode: '1234567890123',
        category: 'Analgesic'
      },
      {
        id: 'ITEM002',
        name: 'Amoxicillin 250mg',
        quantity: 1,
        unitPrice: 4.20,
        total: 4.20,
        barcode: '1234567890124',
        category: 'Antibiotic'
      }
    ],
    transactions: [
      {
        id: 'TXN001',
        date: '2024-01-20',
        time: '14:30',
        customer: 'John Smith',
        items: 3,
        subtotal: 12.50,
        tax: 1.25,
        discount: 0.50,
        total: 13.25,
        paymentMethod: 'Cash',
        status: 'Completed',
        cashier: 'Sarah Johnson'
      },
      {
        id: 'TXN002',
        date: '2024-01-20',
        time: '15:45',
        customer: 'Jane Doe',
        items: 2,
        subtotal: 8.40,
        tax: 0.84,
        discount: 0.00,
        total: 9.24,
        paymentMethod: 'Card',
        status: 'Completed',
        cashier: 'Mike Chen'
      }
    ],
    prescriptions: [
      {
        id: 'PRES001',
        patient: 'John Smith',
        doctor: 'Dr. Sarah Johnson',
        items: [
          { name: 'Paracetamol 500mg', quantity: 2, price: 2.50 },
          { name: 'Amoxicillin 250mg', quantity: 1, price: 4.20 }
        ],
        total: 9.20,
        status: 'Ready'
      }
    ],
    customers: [
      {
        id: 'CUST001',
        name: 'John Smith',
        phone: '+1 (555) 123-4567',
        email: 'john@email.com',
        loyaltyPoints: 150,
        totalPurchases: 1250.00,
        lastVisit: '2024-01-20'
      }
    ],
    paymentMethods: [
      { name: 'Cash', icon: '💵', enabled: true },
      { name: 'Card', icon: '💳', enabled: true },
      { name: 'Insurance', icon: '🏥', enabled: true },
      { name: 'Split', icon: '💰', enabled: true }
    ]
  };

  const handleAddToCart = (item: any) => {
    console.log('Adding to cart:', item);
  };

  const handleRemoveFromCart = (itemId: string) => {
    console.log('Removing from cart:', itemId);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    console.log('Updating quantity:', itemId, quantity);
  };

  const handleProcessPayment = () => {
    setIsPaymentOpen(true);
  };

  const handleProcessRefund = () => {
    setIsRefundOpen(true);
  };

  const handleLoadPrescription = () => {
    setIsPrescriptionOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Ready': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'Cash': return '💵';
      case 'Card': return '💳';
      case 'Insurance': return '🏥';
      case 'Split': return '💰';
      default: return '💳';
    }
  };

  const cartTotal = posData.cart.reduce((sum, item) => sum + item.total, 0);
  const tax = cartTotal * 0.1; // 10% tax
  const discount = 0; // No discount for now
  const finalTotal = cartTotal + tax - discount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales & POS Billing</h1>
          <p className="text-gray-600 mt-1">Point-of-sale system with payment processing and receipt generation</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleLoadPrescription}>
            <Pill className="h-4 w-4 mr-2" />
            Load Prescription
          </Button>
          <Button variant="outline" onClick={handleProcessRefund}>
            <XCircle className="h-4 w-4 mr-2" />
            Process Refund
          </Button>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* POS Interface */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                POS Counter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search medicines or scan barcode..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Quick Add Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Paracetamol
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Amoxicillin
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Metformin
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Insulin
                  </Button>
                </div>

                {/* Cart Items */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Cart Items ({posData.cart.length})</h3>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Clear Cart
                    </Button>
                  </div>
                  
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {posData.cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-600">
                              {item.unitPrice} × {item.quantity} = {item.total}
                            </div>
                            <div className="text-xs text-gray-500">Barcode: {item.barcode}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button size="sm" variant="outline" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                              +
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleRemoveFromCart(item.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                {/* Payment Summary */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-4">Payment Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%):</span>
                      <span className="font-medium">{tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-medium text-green-600">-{discount.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Total:</span>
                        <span className="font-bold text-lg">{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Button className="w-full" onClick={handleProcessPayment}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Process Payment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Clock className="h-4 w-4 mr-2" />
                      Hold Transaction
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customer-name">Customer Name</Label>
                  <Input id="customer-name" placeholder="Enter customer name" />
                </div>
                <div>
                  <Label htmlFor="customer-phone">Phone Number</Label>
                  <Input id="customer-phone" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="customer-email">Email</Label>
                  <Input id="customer-email" type="email" placeholder="Enter email" />
                </div>
                <div>
                  <Label htmlFor="customer-insurance">Insurance</Label>
                  <Input id="customer-insurance" placeholder="Enter insurance info" />
                </div>
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Search Customer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {posData.paymentMethods.map((method) => (
                  <Button
                    key={method.name}
                    variant={method.enabled ? "default" : "outline"}
                    className="flex items-center space-x-2"
                  >
                    <span>{method.icon}</span>
                    <span>{method.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <Pill className="h-4 w-4 mr-2" />
                  Load Prescription
                </Button>
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Scan Barcode
                </Button>
                <Button variant="outline" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Apply Discount
                </Button>
                <Button variant="outline" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Loyalty Points
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Transactions ({posData.transactions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {posData.transactions.map((transaction) => (
                    <div key={transaction.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">TXN #{transaction.id}</h3>
                            <Badge className={getStatusColor(transaction.status)}>
                              {transaction.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Customer: {transaction.customer} • Items: {transaction.items} • Cashier: {transaction.cashier}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Date: {transaction.date} {transaction.time} • Payment: {transaction.paymentMethod}
                          </div>
                          <div className="text-sm text-gray-600">
                            Subtotal: {transaction.subtotal} • Tax: {transaction.tax} • Total: {transaction.total}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Receipt
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

        {/* Prescriptions Tab */}
        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Prescription Orders ({posData.prescriptions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {posData.prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">PRES #{prescription.id}</h3>
                            <Badge className={getStatusColor(prescription.status)}>
                              {prescription.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Patient: {prescription.patient} • Doctor: {prescription.doctor}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Items: {prescription.items.length} • Total: {prescription.total}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {prescription.items.map(item => `${item.name} (${item.quantity})`).join(', ')}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Add to Cart
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

        {/* Customers Tab */}
        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Customer Database ({posData.customers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {posData.customers.map((customer) => (
                    <div key={customer.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-gray-900">{customer.name}</h3>
                            <Badge variant="outline">
                              {customer.loyaltyPoints} points
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Phone: {customer.phone} • Email: {customer.email}
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Total Purchases: {customer.totalPurchases} • Last Visit: {customer.lastVisit}
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
                Sales Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Sales reports and analytics would be displayed here</p>
                <p className="text-sm text-gray-500">Daily, weekly, and monthly sales performance</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Process Payment
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-green-600">-{discount.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Total:</span>
                    <span className="font-bold text-lg">{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="payment-method">Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="split">Split Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="payment-amount">Amount</Label>
                <Input id="payment-amount" type="number" defaultValue={finalTotal.toFixed(2)} />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPaymentOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPaymentOpen(false)}>
                <CheckCircle className="h-4 w-4 mr-1" />
                Process Payment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Refund Dialog */}
      <Dialog open={isRefundOpen} onOpenChange={setIsRefundOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Process Refund
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="refund-transaction">Transaction ID</Label>
                <Input id="refund-transaction" placeholder="Enter transaction ID" />
              </div>
              <div>
                <Label htmlFor="refund-amount">Refund Amount</Label>
                <Input id="refund-amount" type="number" placeholder="Enter refund amount" />
              </div>
              <div>
                <Label htmlFor="refund-reason">Reason</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="defective">Defective Product</SelectItem>
                    <SelectItem value="wrong">Wrong Item</SelectItem>
                    <SelectItem value="return">Customer Return</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="refund-method">Refund Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select refund method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="store-credit">Store Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="refund-notes">Notes</Label>
              <Textarea id="refund-notes" placeholder="Enter refund notes" />
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsRefundOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsRefundOpen(false)}>
                <XCircle className="h-4 w-4 mr-1" />
                Process Refund
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Prescription Dialog */}
      <Dialog open={isPrescriptionOpen} onOpenChange={setIsPrescriptionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Pill className="h-5 w-5 mr-2" />
              Load Prescription
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="prescription-id">Prescription ID</Label>
                <Input id="prescription-id" placeholder="Enter prescription ID" />
              </div>
              <div>
                <Label htmlFor="prescription-patient">Patient Name</Label>
                <Input id="prescription-patient" placeholder="Enter patient name" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="prescription-search">Search Prescriptions</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search prescriptions..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Available Prescriptions</h3>
              <ScrollArea className="h-48">
                <div className="space-y-3">
                  {posData.prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">PRES #{prescription.id}</div>
                          <div className="text-sm text-gray-600">
                            Patient: {prescription.patient} • Doctor: {prescription.doctor}
                          </div>
                          <div className="text-sm text-gray-600">
                            Items: {prescription.items.length} • Total: {prescription.total}
                          </div>
                        </div>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setIsPrescriptionOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsPrescriptionOpen(false)}>
                <Pill className="h-4 w-4 mr-1" />
                Load Prescription
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
