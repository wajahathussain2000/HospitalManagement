# Translation Implementation Guide

## Current Status ✅

### Completed:
- ✅ Sidebar navigation (100% translated)
- ✅ Header component (100% translated)
- ✅ Dashboard basic elements
- ✅ Patient management forms
- ✅ Doctor interface elements
- ✅ Admin interface elements
- ✅ Pharmacy and Lab modules
- ✅ RTL layout support
- ✅ Data translation utility

### Still Needs Translation:
- ❌ PatientDashboard component (partially done)
- ❌ ReceptionistDashboard component
- ❌ NurseDashboard component
- ❌ Various form components
- ❌ Error messages and notifications
- ❌ Modal dialogs and popups
- ❌ Status badges and indicators

## How to Complete Translations:

### 1. For Each Component:
```typescript
// Add these imports
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

// Add translation hook
const { t, i18n } = useTranslation();
const isRTL = i18n.language === 'ar';

// Replace hardcoded strings
"English Text" → {t('key.englishText')}

// Add RTL support
className="flex items-center" → className={cn("flex items-center", isRTL && "flex-row-reverse")}
```

### 2. For Data Translation:
```typescript
// Import data translation utility
import { useDataTranslation } from '@/utils/dataTranslation';

// Use in component
const { translatePatientData, translateAppointmentData } = useDataTranslation();
const translatedData = translatePatientData(originalData);
```

### 3. Add Translation Keys:
```json
// In src/locales/en/translation.json
{
  "componentName": {
    "textKey": "English Text"
  }
}

// In src/locales/ar/translation.json
{
  "componentName": {
    "textKey": "النص العربي"
  }
}
```

## Database Data Translation Strategy:

### Current Implementation:
- ✅ UI labels are translated
- ✅ Medical terms are translated via utility
- ✅ Patient data (allergies, conditions, medications) are translated

### For Production:
1. **Store data in both languages** in database
2. **Use language-specific fields**: `name_en`, `name_ar`
3. **Or use translation tables** with foreign keys
4. **Or use the data translation utility** for runtime translation

### Example Database Schema:
```sql
-- Option 1: Separate columns
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name_en VARCHAR(255),
  name_ar VARCHAR(255),
  condition_en VARCHAR(255),
  condition_ar VARCHAR(255)
);

-- Option 2: Translation table
CREATE TABLE translations (
  id SERIAL PRIMARY KEY,
  entity_type VARCHAR(50),
  entity_id INT,
  field_name VARCHAR(50),
  language VARCHAR(5),
  value TEXT
);
```

## Priority Order for Completion:

1. **High Priority** (User-facing):
   - Dashboard components
   - Form components
   - Modal dialogs
   - Error messages

2. **Medium Priority**:
   - Status indicators
   - Tooltips
   - Help text

3. **Low Priority**:
   - Developer tools
   - Debug information
   - Console messages

## Testing:

1. Switch language using globe icon
2. Verify all text is translated
3. Check RTL layout works properly
4. Test with real data from database
5. Verify medical terms are translated correctly
