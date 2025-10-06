/**
 * Batch Translation Script
 * Automatically applies translation support to multiple components
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// List of components that need translation support
const COMPONENTS_TO_TRANSLATE = [
  // Doctor Components
  'src/components/Doctor/PatientRecords.tsx',
  'src/components/Doctor/AppointmentManagement.tsx',
  'src/components/Doctor/ConsultationManagement.tsx',
  'src/components/Doctor/EPrescriptionManagement.tsx',
  'src/components/Doctor/PatientFollowUp.tsx',
  'src/components/Doctor/DoctorBilling.tsx',
  'src/components/Doctor/DoctorSchedule.tsx',
  'src/components/Doctor/DocumentManagement.tsx',
  'src/components/Doctor/FeedbackRatings.tsx',
  'src/components/Doctor/DoctorAnalytics.tsx',
  'src/components/Doctor/DoctorCollaboration.tsx',
  'src/components/Doctor/DoctorNotifications.tsx',
  'src/components/Doctor/DoctorProfile.tsx',
  'src/components/Doctor/PatientCommunication.tsx',
  'src/components/Doctor/TelemedicineConsultation.tsx',
  'src/components/Doctor/DischargeAdmission.tsx',
  'src/components/Doctor/LabRadiologyOrders.tsx',

  // Admin Components
  'src/components/Admin/DoctorManagement.tsx',
  'src/components/Admin/DepartmentManagement.tsx',
  'src/components/Admin/BillingFinance.tsx',
  'src/components/Admin/SystemSettings.tsx',
  'src/components/Admin/AnalyticsReports.tsx',
  'src/components/Admin/InventoryManagement.tsx',
  'src/components/Admin/EquipmentManagement.tsx',
  'src/components/Admin/WardManagement.tsx',

  // Patient Components
  'src/components/Patients/PatientSearchSystem.tsx',
  'src/components/Patients/PatientDashboard.tsx',
  'src/components/Patients/MedicalHistoryForm.tsx',
  'src/components/Patients/VitalSignsForm.tsx',
  'src/components/Patients/EditPatientForm.tsx',
  'src/components/Patients/ScheduleAppointmentForm.tsx',

  // Pharmacy Components
  'src/components/Pharmacy/CatalogPage.tsx',
  'src/components/Pharmacy/PrescriptionsPage.tsx',
  'src/components/Pharmacy/SalesPage.tsx',
  'src/components/Pharmacy/InventoryManagement.tsx',
  'src/components/Pharmacy/ProcurementManagement.tsx',
  'src/components/Pharmacy/PackLooseManagement.tsx',
  'src/components/Pharmacy/PrescriptionIntegration.tsx',
  'src/components/Pharmacy/SalesPOSBilling.tsx',
  'src/components/Pharmacy/ReturnsExpiryRepackaging.tsx',
  'src/components/Pharmacy/InpatientOutpatientIntegration.tsx',
  'src/components/Pharmacy/AdvancedOperations.tsx',
  'src/components/Pharmacy/ReportsAnalytics.tsx',
  'src/components/Pharmacy/ComplianceSecurity.tsx',

  // Lab Components
  'src/components/Lab/TestCatalog.tsx',
  'src/components/Lab/OrderEntry.tsx',
  'src/components/Lab/SpecimenProcessing.tsx',
  'src/components/Lab/AnalyzerIntegration.tsx',
  'src/components/Lab/ResultEntryValidation.tsx',
  'src/components/Lab/MicrobiologyModule.tsx',
  'src/components/Lab/MolecularPCRModule.tsx',
  'src/components/Lab/AnatomicPathologyCytology.tsx',
  'src/components/Lab/QualityControlCompliance.tsx',
  'src/components/Lab/LogisticsHomeCollection.tsx',
  'src/components/Lab/InventoryReagents.tsx',
  'src/components/Lab/BillingInsurance.tsx',
  'src/components/Lab/PortalsNotifications.tsx',
  'src/components/Lab/IntegrationsInteroperability.tsx',
  'src/components/Lab/AnalyticsAI.tsx',
  'src/components/Lab/SecurityAudit.tsx',
  'src/components/Lab/OptionalModules.tsx',
  'src/components/Lab/GoLiveOperations.tsx',
];

// Translation import template
const TRANSLATION_IMPORTS = `import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';`;

// Translation hook template
const TRANSLATION_HOOK = `  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';`;

// Function to add translation support to a component
export function addTranslationSupport(filePath: string): boolean {
  try {
    const fullPath = join(process.cwd(), filePath);
    let content = readFileSync(fullPath, 'utf-8');

    // Skip if already has translation support
    if (content.includes('useTranslation') || content.includes('TranslationWrapper')) {
      console.log(`✅ ${filePath} already has translation support`);
      return false;
    }

    // Add translation imports after the last import
    const importRegex = /(import.*from.*['"][^'"]*['"];?\s*)+/g;
    const imports = content.match(importRegex);
    
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      content = content.slice(0, insertIndex) + '\n' + TRANSLATION_IMPORTS + '\n' + content.slice(insertIndex);
    }

    // Add translation hook to the main component function
    const functionRegex = /(export\s+(default\s+)?function\s+\w+[^{]*\{)/g;
    const functionMatch = content.match(functionRegex);
    
    if (functionMatch && functionMatch.length > 0) {
      const firstFunction = functionMatch[0];
      const functionIndex = content.indexOf(firstFunction);
      const insertIndex = functionIndex + firstFunction.length;
      
      content = content.slice(0, insertIndex) + '\n' + TRANSLATION_HOOK + '\n' + content.slice(insertIndex);
    }

    // Write the updated content back to the file
    writeFileSync(fullPath, content, 'utf-8');
    console.log(`✅ Added translation support to ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to add translation support to ${filePath}:`, error);
    return false;
  }
}

// Function to batch process all components
export function batchTranslateComponents(): void {
  console.log('🚀 Starting batch translation process...');
  
  let successCount = 0;
  let skipCount = 0;
  
  COMPONENTS_TO_TRANSLATE.forEach(filePath => {
    try {
      const result = addTranslationSupport(filePath);
      if (result) {
        successCount++;
      } else {
        skipCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error);
    }
  });
  
  console.log(`\n📊 Batch Translation Results:`);
  console.log(`✅ Successfully updated: ${successCount} components`);
  console.log(`⏭️  Already had support: ${skipCount} components`);
  console.log(`📝 Total processed: ${COMPONENTS_TO_TRANSLATE.length} components`);
}

// Function to check which components need translation
export function auditComponents(): void {
  console.log('🔍 Auditing components for translation support...');
  
  const needsTranslation: string[] = [];
  const hasTranslation: string[] = [];
  
  COMPONENTS_TO_TRANSLATE.forEach(filePath => {
    try {
      const fullPath = join(process.cwd(), filePath);
      const content = readFileSync(fullPath, 'utf-8');
      
      if (content.includes('useTranslation') || content.includes('TranslationWrapper')) {
        hasTranslation.push(filePath);
      } else {
        needsTranslation.push(filePath);
      }
    } catch (error) {
      console.error(`❌ Error reading ${filePath}:`, error);
    }
  });
  
  console.log(`\n📊 Translation Audit Results:`);
  console.log(`✅ Has translation support: ${hasTranslation.length} components`);
  console.log(`❌ Needs translation support: ${needsTranslation.length} components`);
  
  if (needsTranslation.length > 0) {
    console.log(`\n🔧 Components needing translation:`);
    needsTranslation.forEach(path => console.log(`   - ${path}`));
  }
}

export default {
  addTranslationSupport,
  batchTranslateComponents,
  auditComponents,
  COMPONENTS_TO_TRANSLATE,
};
