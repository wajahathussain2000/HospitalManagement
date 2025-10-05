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
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  DollarSign, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  FileText,
  CreditCard,
  Banknote,
  TrendingUp,
  TrendingDown,
  Calendar,
  User,
  Receipt,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  Upload,
  Send,
  Mail,
  Phone,
  Building,
  Shield,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Settings,
  Eye,
  Printer,
  RefreshCw,
  AlertTriangle,
  Info,
  Star,
  Award,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  FileText as FileTextIcon,
  CreditCard as CreditCardIcon,
  Banknote as BanknoteIcon
} from 'lucide-react';

interface Invoice {
  id: string;
  invoiceNumber: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  department: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: 'draft' | 'pending' | 'paid' | 'partial' | 'overdue' | 'cancelled' | 'refunded';
  dueDate: Date;
  createdAt: Date;
  paymentMethod?: string;
  insuranceClaimId?: string;
  items: InvoiceItem[];
  notes?: string;
  priority: 'low' | 'medium' | 'high';
  paymentTerms: string;
  discountApplied: number;
  taxAmount: number;
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: string;
  serviceCode: string;
  insuranceCovered: boolean;
  copayAmount: number;
}

interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  paymentMethod: string;
  paymentDate: Date;
  transactionId?: string;
  status: 'success' | 'failed' | 'pending' | 'refunded';
  referenceNumber?: string;
  bankName?: string;
  processedBy: string;
  notes?: string;
}

interface InsuranceClaim {
  id: string;
  patientName: string;
  patientId: string;
  insuranceProvider: string;
  policyNumber: string;
  claimAmount: number;
  approvedAmount?: number;
  status: 'pending' | 'submitted' | 'approved' | 'rejected' | 'paid';
  submittedAt: Date;
  processedAt?: Date;
  rejectionReason?: string;
  claimType: string;
  diagnosisCode: string;
  procedureCode: string;
}

interface FinancialMetrics {
  totalRevenue: number;
  pendingPayments: number;
  overdueAmount: number;
  monthlyRecurring: number;
  insuranceClaims: number;
  collectionRate: number;
  averagePaymentTime: number;
  totalInvoices: number;
  revenueGrowth: number;
  profitMargin: number;
}

export default function BillingFinanceEnhanced() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      invoiceNumber: 'INV-2024-001',
      patientName: 'John Doe',
      patientId: 'P001',
      doctorName: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      totalAmount: 2500,
      paidAmount: 2500,
      balanceAmount: 0,
      status: 'paid',
      dueDate: new Date('2024-01-15'),
      createdAt: new Date('2024-01-10'),
      paymentMethod: 'UPI',
      items: [
        { id: '1', description: 'Consultation Fee', quantity: 1, unitPrice: 500, totalPrice: 500, category: 'consultation', serviceCode: '99213', insuranceCovered: true, copayAmount: 50 },
        { id: '2', description: 'Lab Tests', quantity: 3, unitPrice: 300, totalPrice: 900, category: 'lab', serviceCode: '80053', insuranceCovered: true, copayAmount: 90 },
        { id: '3', description: 'Medicines', quantity: 5, unitPrice: 220, totalPrice: 1100, category: 'pharmacy', serviceCode: 'J0696', insuranceCovered: false, copayAmount: 1100 }
      ],
      notes: 'Patient has excellent insurance coverage',
      priority: 'medium',
      paymentTerms: 'Net 30',
      discountApplied: 0,
      taxAmount: 0
    },
    {
      id: '2',
      invoiceNumber: 'INV-2024-002',
      patientName: 'Jane Smith',
      patientId: 'P002',
      doctorName: 'Dr. Michael Chen',
      department: 'Emergency Medicine',
      totalAmount: 1800,
      paidAmount: 1000,
      balanceAmount: 800,
      status: 'partial',
      dueDate: new Date('2024-01-20'),
      createdAt: new Date('2024-01-12'),
      paymentMethod: 'Card',
      items: [
        { id: '1', description: 'Emergency Consultation', quantity: 1, unitPrice: 400, totalPrice: 400, category: 'consultation', serviceCode: '99281', insuranceCovered: true, copayAmount: 40 },
        { id: '2', description: 'X-Ray', quantity: 1, unitPrice: 800, totalPrice: 800, category: 'radiology', serviceCode: '73060', insuranceCovered: true, copayAmount: 80 },
        { id: '3', description: 'Medicines', quantity: 3, unitPrice: 200, totalPrice: 600, category: 'pharmacy', serviceCode: 'J0696', insuranceCovered: false, copayAmount: 600 }
      ],
      priority: 'high',
      paymentTerms: 'Net 15',
      discountApplied: 50,
      taxAmount: 0
    }
  ]);

  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '1',
      invoiceId: '1',
      amount: 2500,
      paymentMethod: 'UPI',
      paymentDate: new Date('2024-01-10'),
      transactionId: 'TXN123456',
      status: 'success',
      referenceNumber: 'REF789',
      processedBy: 'System Auto',
      notes: 'Payment received via UPI'
    },
    {
      id: '2',
      invoiceId: '2',
      amount: 1000,
      paymentMethod: 'Card',
      paymentDate: new Date('2024-01-12'),
      transactionId: 'TXN123457',
      status: 'success',
      referenceNumber: 'REF790',
      processedBy: 'Sarah Wilson',
      notes: 'Partial payment received'
    }
  ]);

  const [insuranceClaims, setInsuranceClaims] = useState<InsuranceClaim[]>([
    {
      id: '1',
      patientName: 'John Doe',
      patientId: 'P001',
      insuranceProvider: 'HealthPlus Insurance',
      policyNumber: 'HP123456789',
      claimAmount: 1500,
      approvedAmount: 1200,
      status: 'approved',
      submittedAt: new Date('2024-01-08'),
      processedAt: new Date('2024-01-15'),
      claimType: 'Medical',
      diagnosisCode: 'I25.9',
      procedureCode: '99213'
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      patientId: 'P002',
      insuranceProvider: 'MediCare',
      policyNumber: 'MC987654321',
      claimAmount: 2000,
      status: 'pending',
      submittedAt: new Date('2024-01-15'),
      claimType: 'Emergency',
      diagnosisCode: 'S72.001A',
      procedureCode: '99281'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'invoices' | 'payments' | 'insurance' | 'analytics'>('overview');
  const [isCreateInvoiceDialogOpen, setIsCreateInvoiceDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || invoice.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      draft: { color: 'bg-gray-100 text-gray-800', icon: FileText },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      paid: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      partial: { color: 'bg-blue-100 text-blue-800', icon: TrendingUp },
      overdue: { color: 'bg-red-100 text-red-800', icon: AlertCircle },
      cancelled: { color: 'bg-gray-100 text-gray-800', icon: XCircle },
      refunded: { color: 'bg-purple-100 text-purple-800', icon: TrendingDown }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft;
    const Icon = config.icon;

    return (
      <Badge className={config.color}>
        <Icon className="h-3 w-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'UPI':
      case 'Card':
        return <CreditCard className="h-4 w-4" />;
      case 'Cash':
        return <Banknote className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };

  const financialMetrics: FinancialMetrics = {
    totalRevenue: invoices.reduce((sum, invoice) => sum + invoice.paidAmount, 0),
    pendingPayments: invoices.reduce((sum, invoice) => sum + invoice.balanceAmount, 0),
    overdueAmount: invoices.filter(inv => inv.status === 'overdue').reduce((sum, invoice) => sum + invoice.balanceAmount, 0),
    monthlyRecurring: 1200000,
    insuranceClaims: insuranceClaims.reduce((sum, claim) => sum + claim.claimAmount, 0),
    collectionRate: 94.2,
    averagePaymentTime: 12.5,
    totalInvoices: invoices.length,
    revenueGrowth: 15.8,
    profitMargin: 28.5
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Billing & Finance</h1>
          <p className="text-gray-600 mt-1">Comprehensive financial management with automated invoicing and analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Dialog open={isCreateInvoiceDialogOpen} onOpenChange={setIsCreateInvoiceDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create Invoice</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="patient" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="patient">Patient Info</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="insurance">Insurance</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>
                
                <TabsContent value="patient" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patientId">Patient ID</Label>
                      <Input id="patientId" placeholder="Enter patient ID" />
                    </div>
                    <div>
                      <Label htmlFor="doctorName">Doctor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr1">Dr. Sarah Johnson</SelectItem>
                          <SelectItem value="dr2">Dr. Michael Chen</SelectItem>
                          <SelectItem value="dr3">Dr. Emily Rodriguez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="emergency">Emergency Medicine</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                
                <TabsContent value="services" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Service Items</Label>
                      <Button variant="outline" size="sm">Add Item</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-5 gap-2">
                        <Input placeholder="Description" />
                        <Input placeholder="Quantity" type="number" />
                        <Input placeholder="Unit Price" type="number" />
                        <Input placeholder="Service Code" />
                        <Input placeholder="Total" type="number" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="insurance" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthplus">HealthPlus Insurance</SelectItem>
                          <SelectItem value="medicare">MediCare</SelectItem>
                          <SelectItem value="aetna">Aetna</SelectItem>
                          <SelectItem value="bcbs">Blue Cross Blue Shield</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="policyNumber">Policy Number</Label>
                      <Input id="policyNumber" placeholder="Enter policy number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="diagnosisCode">Diagnosis Code</Label>
                      <Input id="diagnosisCode" placeholder="ICD-10 code" />
                    </div>
                    <div>
                      <Label htmlFor="procedureCode">Procedure Code</Label>
                      <Input id="procedureCode" placeholder="CPT code" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="review" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Invoice Summary</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount:</span>
                        <span>0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>0.00</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total:</span>
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsCreateInvoiceDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Invoice</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Total Revenue</p>
                <p className="text-3xl font-bold text-green-900">{(financialMetrics.totalRevenue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-green-600 mt-1">+{financialMetrics.revenueGrowth}% vs last month</p>
              </div>
              <div className="p-3 rounded-full bg-green-200">
                <TrendingUp className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">Pending Payments</p>
                <p className="text-3xl font-bold text-yellow-900">{(financialMetrics.pendingPayments / 1000).toFixed(0)}K</p>
                <p className="text-xs text-yellow-600 mt-1">{financialMetrics.totalInvoices} invoices</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-200">
                <Clock className="h-6 w-6 text-yellow-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Overdue Amount</p>
                <p className="text-3xl font-bold text-red-900">{(financialMetrics.overdueAmount / 1000).toFixed(0)}K</p>
                <p className="text-xs text-red-600 mt-1">Requires immediate attention</p>
              </div>
              <div className="p-3 rounded-full bg-red-200">
                <AlertCircle className="h-6 w-6 text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Collection Rate</p>
                <p className="text-3xl font-bold text-blue-900">{financialMetrics.collectionRate}%</p>
                <p className="text-xs text-blue-600 mt-1">Avg payment time: {financialMetrics.averagePaymentTime} days</p>
              </div>
              <div className="p-3 rounded-full bg-blue-200">
                <Target className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search invoices, patients, or doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Emergency Medicine">Emergency Medicine</SelectItem>
                  <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="Surgery">Surgery</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="flex">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="insurance">Insurance</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      {viewMode === 'invoices' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Invoices ({filteredInvoices.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Paid</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{invoice.patientName}</p>
                        <p className="text-sm text-gray-600">{invoice.patientId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.doctorName}</TableCell>
                    <TableCell>{invoice.department}</TableCell>
                    <TableCell>{invoice.totalAmount.toLocaleString()}</TableCell>
                    <TableCell>{invoice.paidAmount.toLocaleString()}</TableCell>
                    <TableCell>{invoice.balanceAmount.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{invoice.dueDate.toLocaleDateString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4" />
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

      {viewMode === 'payments' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Processed By</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.transactionId}</TableCell>
                    <TableCell>{payment.invoiceId}</TableCell>
                    <TableCell>{payment.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getPaymentMethodIcon(payment.paymentMethod)}
                        <span>{payment.paymentMethod}</span>
                      </div>
                    </TableCell>
                    <TableCell>{payment.paymentDate.toLocaleDateString()}</TableCell>
                    <TableCell>{payment.processedBy}</TableCell>
                    <TableCell>
                      <Badge className={payment.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Receipt className="h-4 w-4" />
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

      {viewMode === 'insurance' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Insurance Claims
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Claim ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Insurance Provider</TableHead>
                  <TableHead>Claim Amount</TableHead>
                  <TableHead>Approved Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {insuranceClaims.map((claim) => (
                  <TableRow key={claim.id}>
                    <TableCell className="font-medium">{claim.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{claim.patientName}</p>
                        <p className="text-sm text-gray-600">{claim.patientId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{claim.insuranceProvider}</TableCell>
                    <TableCell>{claim.claimAmount.toLocaleString()}</TableCell>
                    <TableCell>
                      {claim.approvedAmount ? `${claim.approvedAmount.toLocaleString()}` : '-'}
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        claim.status === 'approved' ? 'bg-green-100 text-green-800' :
                        claim.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {claim.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{claim.submittedAt.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4" />
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

      {viewMode === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">+{financialMetrics.revenueGrowth}%</p>
                  <p className="text-sm text-gray-600">Revenue Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{financialMetrics.profitMargin}%</p>
                  <p className="text-sm text-gray-600">Profit Margin</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Collection Rate</span>
                  <span className="text-sm font-medium">{financialMetrics.collectionRate}%</span>
                </div>
                <Progress value={financialMetrics.collectionRate} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Payment Time</span>
                  <span className="text-sm font-medium">{financialMetrics.averagePaymentTime} days</span>
                </div>
                <Progress value={100 - (financialMetrics.averagePaymentTime / 30 * 100)} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
