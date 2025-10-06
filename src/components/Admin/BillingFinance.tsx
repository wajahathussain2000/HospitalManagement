import { useState } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  XCircle
} from 'lucide-react';

interface Invoice {
  id: string;
  invoiceNumber: string;
  patientName: string;
  patientId: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: 'draft' | 'pending' | 'paid' | 'partial' | 'overdue' | 'cancelled' | 'refunded';
  dueDate: Date;
  createdAt: Date;
  paymentMethod?: string;
  items: InvoiceItem[];
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: string;
}

interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  paymentMethod: string;
  paymentDate: Date;
  transactionId?: string;
  status: 'success' | 'failed' | 'pending' | 'refunded';
}

interface InsuranceClaim {
  id: string;
  patientName: string;
  insuranceProvider: string;
  claimAmount: number;
  approvedAmount?: number;
  status: 'pending' | 'submitted' | 'approved' | 'rejected' | 'paid';
  submittedAt: Date;
}

export default function BillingFinance() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      invoiceNumber: 'INV-2024-001',
      patientName: 'John Doe',
      patientId: 'P001',
      totalAmount: 2500,
      paidAmount: 2500,
      balanceAmount: 0,
      status: 'paid',
      dueDate: new Date('2024-01-15'),
      createdAt: new Date('2024-01-10'),
      paymentMethod: 'UPI',
      items: [
        { id: '1', description: 'Consultation Fee', quantity: 1, unitPrice: 500, totalPrice: 500, category: 'consultation' },
        { id: '2', description: 'Lab Tests', quantity: 3, unitPrice: 300, totalPrice: 900, category: 'lab' },
        { id: '3', description: 'Medicines', quantity: 5, unitPrice: 220, totalPrice: 1100, category: 'pharmacy' }
      ]
    },
    {
      id: '2',
      invoiceNumber: 'INV-2024-002',
      patientName: 'Jane Smith',
      patientId: 'P002',
      totalAmount: 1800,
      paidAmount: 1000,
      balanceAmount: 800,
      status: 'partial',
      dueDate: new Date('2024-01-20'),
      createdAt: new Date('2024-01-12'),
      paymentMethod: 'Card',
      items: [
        { id: '1', description: 'Consultation Fee', quantity: 1, unitPrice: 400, totalPrice: 400, category: 'consultation' },
        { id: '2', description: 'X-Ray', quantity: 1, unitPrice: 800, totalPrice: 800, category: 'radiology' },
        { id: '3', description: 'Medicines', quantity: 3, unitPrice: 200, totalPrice: 600, category: 'pharmacy' }
      ]
    },
    {
      id: '3',
      invoiceNumber: 'INV-2024-003',
      patientName: 'Mike Johnson',
      patientId: 'P003',
      totalAmount: 3200,
      paidAmount: 0,
      balanceAmount: 3200,
      status: 'overdue',
      dueDate: new Date('2024-01-05'),
      createdAt: new Date('2024-01-01'),
      items: [
        { id: '1', description: 'Surgery Fee', quantity: 1, unitPrice: 2000, totalPrice: 2000, category: 'surgery' },
        { id: '2', description: 'Room Charges', quantity: 3, unitPrice: 400, totalPrice: 1200, category: 'room' }
      ]
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
      status: 'success'
    },
    {
      id: '2',
      invoiceId: '2',
      amount: 1000,
      paymentMethod: 'Card',
      paymentDate: new Date('2024-01-12'),
      transactionId: 'TXN123457',
      status: 'success'
    }
  ]);

  const [insuranceClaims, setInsuranceClaims] = useState<InsuranceClaim[]>([
    {
      id: '1',
      patientName: 'John Doe',
      insuranceProvider: 'HealthPlus Insurance',
      claimAmount: 1500,
      approvedAmount: 1200,
      status: 'approved',
      submittedAt: new Date('2024-01-08')
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      insuranceProvider: 'MediCare',
      claimAmount: 2000,
      status: 'pending',
      submittedAt: new Date('2024-01-15')
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isCreateInvoiceDialogOpen, setIsCreateInvoiceDialogOpen] = useState(false);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
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

  const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.paidAmount, 0);
  const pendingAmount = invoices.reduce((sum, invoice) => sum + invoice.balanceAmount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, invoice) => sum + invoice.balanceAmount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Finance</h1>
          <p className="text-gray-600 mt-1">Manage invoices, payments, and financial operations</p>
        </div>
        <Dialog open={isCreateInvoiceDialogOpen} onOpenChange={setIsCreateInvoiceDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Create Invoice</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Invoice</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="patientId">Patient ID</Label>
                  <Input id="patientId" placeholder="Enter patient ID" />
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="items">Invoice Items</Label>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2">
                    <Input placeholder="Description" />
                    <Input placeholder="Quantity" type="number" />
                    <Input placeholder="Unit Price" type="number" />
                    <Input placeholder="Total" type="number" />
                  </div>
                  <Button variant="outline" size="sm">Add Item</Button>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateInvoiceDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Create Invoice</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                <p className="text-2xl font-bold text-yellow-600">₹{pendingAmount.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue Amount</p>
                <p className="text-2xl font-bold text-red-600">₹{overdueAmount.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invoices</p>
                <p className="text-2xl font-bold text-blue-600">{invoices.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Receipt className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="invoices" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="insurance">Insurance Claims</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search invoices..."
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoices Table */}
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
                      <TableCell>₹{invoice.totalAmount.toLocaleString()}</TableCell>
                      <TableCell>₹{invoice.paidAmount.toLocaleString()}</TableCell>
                      <TableCell>₹{invoice.balanceAmount.toLocaleString()}</TableCell>
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
                            <Edit className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
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
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.transactionId}</TableCell>
                      <TableCell>{payment.invoiceId}</TableCell>
                      <TableCell>₹{payment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getPaymentMethodIcon(payment.paymentMethod)}
                          <span>{payment.paymentMethod}</span>
                        </div>
                      </TableCell>
                      <TableCell>{payment.paymentDate.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={payment.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insurance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Insurance Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
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
                      <TableCell className="font-medium">{claim.patientName}</TableCell>
                      <TableCell>{claim.insuranceProvider}</TableCell>
                      <TableCell>₹{claim.claimAmount.toLocaleString()}</TableCell>
                      <TableCell>
                        {claim.approvedAmount ? `₹${claim.approvedAmount.toLocaleString()}` : '-'}
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
                            <Edit className="h-4 w-4" />
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
