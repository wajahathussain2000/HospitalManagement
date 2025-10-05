export interface Department {
  id: string;
  name: string;
  description?: string;
  headDoctorId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  location?: string;
  phone?: string;
  email?: string;
  capacity?: number;
  currentOccupancy?: number;
  services?: string[];
  equipment?: string[];
}

export interface DepartmentHead {
  id: string;
  departmentId: string;
  doctorId: string;
  assignedAt: Date;
  isActive: boolean;
}
