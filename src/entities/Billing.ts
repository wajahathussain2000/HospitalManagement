export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  appointmentId?: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: InvoiceStatus;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  paymentMethod?: PaymentMethod;
  paymentDate?: Date;
  discountAmount?: number;
  taxAmount?: number;
  notes?: string;
  items: InvoiceItem[];
}

export enum InvoiceStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  PAID = 'paid',
  PARTIAL = 'partial',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded'
}

export enum PaymentMethod {
  CASH = 'cash',
  CARD = 'card',
  UPI = 'upi',
  NET_BANKING = 'net_banking',
  INSURANCE = 'insurance',
  CHEQUE = 'cheque'
}

export interface InvoiceItem {
  id: string;
  invoiceId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: 'consultation' | 'medicine' | 'lab_test' | 'procedure' | 'room_charge' | 'other';
  serviceId?: string;
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  paymentDate: Date;
  transactionId?: string;
  referenceNumber?: string;
  createdBy: string;
  notes?: string;
  status: 'success' | 'failed' | 'pending' | 'refunded';
}

export interface InsuranceClaim {
  id: string;
  patientId: string;
  invoiceId: string;
  insuranceProvider: string;
  policyNumber: string;
  claimAmount: number;
  approvedAmount?: number;
  status: 'pending' | 'submitted' | 'approved' | 'rejected' | 'paid';
  submittedAt: Date;
  approvedAt?: Date;
  rejectedAt?: Date;
  rejectionReason?: string;
  documents: string[];
}
