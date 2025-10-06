import { useTranslation } from 'react-i18next';

// Medical terms and common data translations
const medicalTermsTranslations = {
  en: {
    // Medical conditions
    'diabetes': 'Diabetes',
    'hypertension': 'Hypertension',
    'asthma': 'Asthma',
    'heart_disease': 'Heart Disease',
    'cancer': 'Cancer',
    'arthritis': 'Arthritis',
    
    // Medications
    'insulin': 'Insulin',
    'metformin': 'Metformin',
    'aspirin': 'Aspirin',
    'ibuprofen': 'Ibuprofen',
    
    // Allergies
    'penicillin': 'Penicillin',
    'shellfish': 'Shellfish',
    'nuts': 'Nuts',
    'latex': 'Latex',
    
    // Status
    'active': 'Active',
    'inactive': 'Inactive',
    'pending': 'Pending',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
    
    // Gender
    'male': 'Male',
    'female': 'Female',
    'other': 'Other',
    
    // Blood types
    'A+': 'A+',
    'A-': 'A-',
    'B+': 'B+',
    'B-': 'B-',
    'AB+': 'AB+',
    'AB-': 'AB-',
    'O+': 'O+',
    'O-': 'O-'
  },
  ar: {
    // Medical conditions
    'diabetes': 'داء السكري',
    'hypertension': 'ارتفاع ضغط الدم',
    'asthma': 'الربو',
    'heart_disease': 'أمراض القلب',
    'cancer': 'السرطان',
    'arthritis': 'التهاب المفاصل',
    
    // Medications
    'insulin': 'الأنسولين',
    'metformin': 'ميتفورمين',
    'aspirin': 'الأسبرين',
    'ibuprofen': 'ايبوبروفين',
    
    // Allergies
    'penicillin': 'البنسلين',
    'shellfish': 'المأكولات البحرية',
    'nuts': 'المكسرات',
    'latex': 'اللاتكس',
    
    // Status
    'active': 'نشط',
    'inactive': 'غير نشط',
    'pending': 'معلق',
    'completed': 'مكتمل',
    'cancelled': 'ملغي',
    
    // Gender
    'male': 'ذكر',
    'female': 'أنثى',
    'other': 'آخر',
    
    // Blood types
    'A+': 'A+',
    'A-': 'A-',
    'B+': 'B+',
    'B-': 'B-',
    'AB+': 'AB+',
    'AB-': 'AB-',
    'O+': 'O+',
    'O-': 'O-'
  }
};

// Hook for translating data content
export const useDataTranslation = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as 'en' | 'ar';
  
  const translateData = (value: string | string[]): string | string[] => {
    const translations = medicalTermsTranslations[currentLanguage];
    
    if (Array.isArray(value)) {
      return value.map(item => translations[item.toLowerCase()] || item);
    }
    
    return translations[value.toLowerCase()] || value;
  };
  
  const translatePatientData = (patient: any) => {
    return {
      ...patient,
      gender: translateData(patient.gender),
      bloodGroup: translateData(patient.bloodGroup),
      medicalInfo: {
        ...patient.medicalInfo,
        allergies: translateData(patient.medicalInfo.allergies),
        conditions: translateData(patient.medicalInfo.conditions),
        medications: translateData(patient.medicalInfo.medications)
      },
      status: translateData(patient.status)
    };
  };
  
  const translateAppointmentData = (appointment: any) => {
    return {
      ...appointment,
      status: translateData(appointment.status),
      type: translateData(appointment.type)
    };
  };
  
  return {
    translateData,
    translatePatientData,
    translateAppointmentData,
    currentLanguage
  };
};

// Utility function for translating medical terms
export const translateMedicalTerm = (term: string, language: 'en' | 'ar' = 'en'): string => {
  const translations = medicalTermsTranslations[language];
  return translations[term.toLowerCase()] || term;
};

// Function to handle mixed language data (when some data is in Arabic, some in English)
export const normalizeDataLanguage = (data: any, targetLanguage: 'en' | 'ar') => {
  // This function would normalize data to a consistent language
  // Implementation depends on your specific data structure
  return data;
};
