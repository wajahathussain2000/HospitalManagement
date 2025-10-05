export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  departmentId: string;
  appointmentDate: Date;
  appointmentTime: string;
  duration: number; // in minutes
  status: AppointmentStatus;
  type: AppointmentType;
  reason: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  isTelemedicine: boolean;
  meetingLink?: string;
  roomNumber?: string;
  tokenNumber?: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  followUpDate?: Date;
  cancellationReason?: string;
  cancelledBy?: string;
  cancelledAt?: Date;
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show',
  RESCHEDULED = 'rescheduled'
}

export enum AppointmentType {
  CONSULTATION = 'consultation',
  FOLLOW_UP = 'follow_up',
  EMERGENCY = 'emergency',
  ROUTINE_CHECKUP = 'routine_checkup',
  SPECIALIST = 'specialist',
  TELEMEDICINE = 'telemedicine'
}

export interface AppointmentQueue {
  id: string;
  appointmentId: string;
  queuePosition: number;
  estimatedWaitTime: number; // in minutes
  status: 'waiting' | 'called' | 'in_consultation' | 'completed';
  calledAt?: Date;
  startedAt?: Date;
  completedAt?: Date;
}
