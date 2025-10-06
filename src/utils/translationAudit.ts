/**
 * Translation Audit Utility
 * Helps identify components that need Arabic translation support
 */

// List of all components that need translation support
export const COMPONENTS_TO_AUDIT = [
  // Core Dashboard Components
  'src/pages/dashboard/AdminDashboard.tsx',
  'src/pages/dashboard/DoctorDashboard.tsx', 
  'src/pages/dashboard/PatientDashboard.tsx',
  'src/components/Nurse/NurseDashboard.tsx',
  'src/components/Receptionist/ReceptionistDashboard.tsx',

  // Admin Components
  'src/components/Admin/UserManagement.tsx',
  'src/components/Admin/DoctorManagement.tsx',
  'src/components/Admin/DepartmentManagement.tsx',
  'src/components/Admin/BillingFinance.tsx',
  'src/components/Admin/SystemSettings.tsx',
  'src/components/Admin/AnalyticsReports.tsx',

  // Doctor Components
  'src/components/Doctor/PatientRecords.tsx',
  'src/components/Doctor/AppointmentManagement.tsx',
  'src/components/Doctor/ConsultationManagement.tsx',
  'src/components/Doctor/EPrescriptionManagement.tsx',
  'src/components/Doctor/PatientFollowUp.tsx',

  // Patient Components
  'src/components/Patients/PatientRegistrationForm.tsx',
  'src/components/Patients/PatientSearchSystem.tsx',
  'src/components/Patients/PatientDashboard.tsx',
  'src/components/Patients/MedicalHistoryForm.tsx',
  'src/components/Patients/VitalSignsForm.tsx',

  // Pharmacy Components
  'src/components/Pharmacy/PharmacyDashboard.tsx',
  'src/components/Pharmacy/CatalogPage.tsx',
  'src/components/Pharmacy/PrescriptionsPage.tsx',
  'src/components/Pharmacy/SalesPage.tsx',

  // Lab Components
  'src/components/Lab/LabDashboard.tsx',
  'src/components/Lab/TestCatalog.tsx',
  'src/components/Lab/OrderEntry.tsx',
  'src/components/Lab/ResultEntryValidation.tsx',

  // Form Components
  'src/components/Patients/EditPatientForm.tsx',
  'src/components/Patients/ScheduleAppointmentForm.tsx',

  // Error Pages
  'src/pages/NotFound.tsx',
  'src/pages/Login.tsx',
];

// Translation patterns to look for
export const TRANSLATION_PATTERNS = {
  // Hardcoded English strings that should be translated
  HARDCODED_STRINGS: [
    'Loading...',
    'Save',
    'Cancel', 
    'Edit',
    'Delete',
    'Add',
    'Search',
    'Filter',
    'Export',
    'Import',
    'Submit',
    'Reset',
    'Update',
    'Create',
    'View',
    'Details',
    'Settings',
    'Profile',
    'Dashboard',
    'Users',
    'Patients',
    'Doctors',
    'Appointments',
    'Billing',
    'Reports',
    'Analytics',
    'Notifications',
    'Logout',
    'Login',
    'Register',
    'Welcome',
    'Error',
    'Success',
    'Warning',
    'Info',
    'Yes',
    'No',
    'OK',
    'Close',
    'Open',
    'Back',
    'Next',
    'Previous',
    'Continue',
    'Finish',
    'Complete',
    'Pending',
    'Active',
    'Inactive',
    'Approved',
    'Rejected',
    'Completed',
    'Cancelled',
    'Scheduled',
    'Confirmed',
    'No Show',
    'Rescheduled',
  ],

  // Common form labels
  FORM_LABELS: [
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Address',
    'Date of Birth',
    'Gender',
    'Blood Group',
    'Allergies',
    'Medical History',
    'Current Medications',
    'Insurance Provider',
    'Emergency Contact',
    'Occupation',
    'Marital Status',
    'Nationality',
    'Religion',
  ],

  // Common button texts
  BUTTON_TEXTS: [
    'Add Patient',
    'Edit Patient',
    'Delete Patient',
    'View Details',
    'Save Changes',
    'Discard Changes',
    'Book Appointment',
    'Cancel Appointment',
    'Reschedule',
    'Check In',
    'Check Out',
    'Discharge',
    'Admit',
    'Transfer',
    'Print',
    'Download',
    'Upload',
    'Send',
    'Receive',
    'Process',
    'Review',
    'Approve',
    'Reject',
    'Archive',
    'Restore',
  ],
};

// RTL-aware class patterns
export const RTL_CLASSES = {
  // Flex direction
  FLEX_ROW: 'flex-row-reverse',
  FLEX_COL: 'flex-col-reverse',
  
  // Spacing
  SPACE_X: 'space-x-reverse',
  SPACE_Y: 'space-y-reverse',
  
  // Margins
  MARGIN_LEFT: ['ml-', 'mr-'],
  MARGIN_RIGHT: ['mr-', 'ml-'],
  
  // Padding
  PADDING_LEFT: ['pl-', 'pr-'],
  PADDING_RIGHT: ['pr-', 'pl-'],
  
  // Text alignment
  TEXT_LEFT: 'text-left',
  TEXT_RIGHT: 'text-right',
};

// Components that already have translation support
export const TRANSLATED_COMPONENTS = [
  'src/components/Layout/Header.tsx',
  'src/components/Layout/Sidebar.tsx',
  'src/components/Layout/MainLayout.tsx',
  'src/pages/dashboard/AdminDashboard.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/Login.tsx',
];

// Common translation keys that should be available
export const REQUIRED_TRANSLATION_KEYS = [
  'common.loading',
  'common.save',
  'common.cancel',
  'common.edit',
  'common.delete',
  'common.add',
  'common.search',
  'common.filter',
  'common.export',
  'common.import',
  'common.submit',
  'common.reset',
  'common.update',
  'common.create',
  'common.view',
  'common.details',
  'common.settings',
  'common.profile',
  'common.dashboard',
  'common.users',
  'common.patients',
  'common.doctors',
  'common.appointments',
  'common.billing',
  'common.reports',
  'common.analytics',
  'common.notifications',
  'common.logout',
  'common.login',
  'common.register',
  'common.welcome',
  'common.error',
  'common.success',
  'common.warning',
  'common.info',
  'common.yes',
  'common.no',
  'common.ok',
  'common.close',
  'common.open',
  'common.back',
  'common.next',
  'common.previous',
  'common.continue',
  'common.finish',
  'common.complete',
  'status.pending',
  'status.active',
  'status.inactive',
  'status.approved',
  'status.rejected',
  'status.completed',
  'status.cancelled',
  'status.scheduled',
  'status.confirmed',
  'status.noShow',
  'status.rescheduled',
];

export default {
  COMPONENTS_TO_AUDIT,
  TRANSLATION_PATTERNS,
  RTL_CLASSES,
  TRANSLATED_COMPONENTS,
  REQUIRED_TRANSLATION_KEYS,
};
