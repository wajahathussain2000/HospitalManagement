
export interface DenialReason {
  code: string;
  description: string;
  category: 'authorization' | 'coding' | 'documentation' | 'eligibility' | 'other';
  isAppealable: boolean;
  averageAppealSuccessRate: number;
}

export interface AppealStatus {
  id: string;
  status: 'pending' | 'approved' | 'denied' | 'in_review';
  submissionDate: string;
  responseDate?: string;
  notes: string;
  documents: string[];
}

export interface DenialData {
  denialDate: string;
  denialReasons: DenialReason[];
  appeals: AppealStatus[];
  aiSuggestions: string[];
  correctionsPending: boolean;
  resubmissionDate?: string;
}

export interface AIAnalysis {
  denialRiskScore: number;
  suggestedActions: string[];
  codeOptimizations: string[];
  documentationGaps: string[];
  historicalPatterns: string[];
}

export interface LetterTemplate {
  id: string;
  name: string;
  type: 'appeal' | 'prior_auth' | 'patient_communication' | 'provider_inquiry';
  content: string;
  variables: string[];
  payerSpecific?: string;
}
