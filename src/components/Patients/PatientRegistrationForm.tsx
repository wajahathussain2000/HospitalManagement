
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const personalInfoSchema = z.object({
  patientAccountNo: z.string().optional(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  middleName: z.string().optional(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  ssn: z.string().optional(),
  gender: z.string().min(1, 'Gender is required'),
  weight: z.string().optional(),
  height: z.string().optional(),
  maritalStatus: z.string().min(1, 'Marital status is required'),
  preferredLanguage: z.string().optional(),
  sexualOrientation: z.string().optional(),
  ethnicity: z.string().optional(),
  race: z.string().optional(),
  tribalAffiliation: z.string().optional(),
  mothersMaidenName: z.string().optional(),
  primaryCareProvider: z.string().optional(),
  referringProvider: z.string().optional(),
  employmentStatus: z.string().optional(),
  religion: z.string().optional(),
  genderIdentity: z.string().optional(),
  nameSuffix: z.string().optional(),
  professionalTitle: z.string().optional(),
});

const contactInfoSchema = z.object({
  addressLine1: z.string().min(1, 'Address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  homePhone: z.string().optional(),
  workPhone: z.string().optional(),
  cellPhone: z.string().optional(),
  fax: z.string().optional(),
  email: z.string().optional(),
  preferredPhone: z.string().optional(),
  communicationPreference: z.string().optional(),
});

const eligibilityBenefitsSchema = z.object({
  lastCheckedOn: z.string().optional(),
  eligibilityCheckFrequency: z.string().optional(),
  eligibilityBenefitPayerName: z.string().optional(),
  automatedEligibility: z.boolean().optional(),
});

const primaryInsuranceSchema = z.object({
  patientInsuranceType: z.string().optional(),
  insuranceCompany: z.string().optional(),
  insuranceName: z.string().optional(),
  primaryInsured: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  middleInitial: z.string().optional(),
  patientRelationshipToPrimaryInsured: z.string().optional(),
  capitation: z.string().optional(),
  subscriberId: z.string().optional(),
  groupNumber: z.string().optional(),
  planName: z.string().optional(),
  insuredAuthorization: z.string().optional(),
  deductible: z.string().optional(),
  visitCoPayment: z.string().optional(),
  signatureOnFile: z.string().optional(),
  signatureDate: z.string().optional(),
});

const authorizationSchema = z.object({
  authorizationNumber: z.string().optional(),
  numberOfVisitsAuthorized: z.string().optional(),
  effectiveStartDate: z.string().optional(),
  effectiveStopDate: z.string().optional(),
  numberOfVisitsUsed: z.string().optional(),
  numberOfVisitsLeft: z.string().optional(),
});

const secondaryInsuranceSchema = z.object({
  patientInsuranceType: z.string().optional(),
  insuranceCompany: z.string().optional(),
  insuranceName: z.string().optional(),
  secondaryInsured: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  middleInitial: z.string().optional(),
  patientRelationshipToSecondaryInsured: z.string().optional(),
  subscriberId: z.string().optional(),
  groupNumber: z.string().optional(),
  planName: z.string().optional(),
  secondaryInsuredAuthorization: z.string().optional(),
  deductible: z.string().optional(),
  visitCoPayment: z.string().optional(),
  signatureOnFile: z.string().optional(),
  signatureDate: z.string().optional(),
});

const thirdInsuranceSchema = z.object({
  patientInsuranceType: z.string().optional(),
  insuranceCompany: z.string().optional(),
  insuranceName: z.string().optional(),
  thirdInsured: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  middleInitial: z.string().optional(),
  patientRelationshipToThirdInsured: z.string().optional(),
  subscriberId: z.string().optional(),
  groupNumber: z.string().optional(),
  planName: z.string().optional(),
  deductible: z.string().optional(),
  visitCoPayment: z.string().optional(),
});

const guarantorInfoSchema = z.object({
  guarantor: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  middleInitial: z.string().optional(),
});

const insuranceInfoSchema = eligibilityBenefitsSchema
  .merge(primaryInsuranceSchema)
  .merge(authorizationSchema)
  .merge(secondaryInsuranceSchema)
  .merge(thirdInsuranceSchema)
  .merge(guarantorInfoSchema);

const optionalInfoSchema = z.object({
  // Smoking History
  smokingStatus: z.string().optional(),
  smokingStartDate: z.string().optional(),
  smokingEndDate: z.string().optional(),
  smokingFrequency: z.string().optional(),
  otherTobacco: z.string().optional(),
  tobaccoStartDate: z.string().optional(),
  tobaccoEndDate: z.string().optional(),
  tobaccoFrequency: z.string().optional(),
  tobaccoReviewDate: z.string().optional(),
  smokingComments: z.string().optional(),
  
  // Employment Information
  employerName: z.string().optional(),
  employerPhone: z.string().optional(),
  employerAddress1: z.string().optional(),
  employerAddress2: z.string().optional(),
  employerCity: z.string().optional(),
  employerState: z.string().optional(),
  employerZip: z.string().optional(),
  
  // Emergency Contact
  emergencyContactName: z.string().optional(),
  emergencyRelationship: z.string().optional(),
  emergencyAddress1: z.string().optional(),
  emergencyAddress2: z.string().optional(),
  emergencyCity: z.string().optional(),
  emergencyState: z.string().optional(),
  emergencyZip: z.string().optional(),
  emergencyHomePhone: z.string().optional(),
  emergencyWorkPhone: z.string().optional(),
  emergencyCellPhone: z.string().optional(),
  
  // Next of Kin
  nextOfKinName: z.string().optional(),
  nextOfKinRelationship: z.string().optional(),
  nextOfKinAddress1: z.string().optional(),
  nextOfKinAddress2: z.string().optional(),
  nextOfKinCity: z.string().optional(),
  nextOfKinState: z.string().optional(),
  nextOfKinZip: z.string().optional(),
  nextOfKinHomePhone: z.string().optional(),
  nextOfKinWorkPhone: z.string().optional(),
  nextOfKinCellPhone: z.string().optional(),
  
  // User Defined Fields
  userField1: z.string().optional(),
  userField2: z.string().optional(),
  userField3: z.string().optional(),
  userField4: z.string().optional(),
  userField5: z.string().optional(),
  userField6: z.string().optional(),
  
  // Account Status
  patientStartDate: z.string().optional(),
  patientEndDate: z.string().optional(),
  exemptFromReporting: z.boolean().optional(),
  confidentialHealthInfo: z.boolean().optional(),
});

type PersonalInfo = z.infer<typeof personalInfoSchema>;
type ContactInfo = z.infer<typeof contactInfoSchema>;
type InsuranceInfo = z.infer<typeof insuranceInfoSchema>;
type OptionalInfo = z.infer<typeof optionalInfoSchema>;

interface PatientRegistrationFormProps {
  onSubmit: (data: PersonalInfo & ContactInfo & InsuranceInfo & OptionalInfo) => void;
  onCancel: () => void;
  onEnrollPHR?: (data: PersonalInfo & ContactInfo & InsuranceInfo & OptionalInfo) => void;
}

export function PatientRegistrationForm({ onSubmit, onCancel, onEnrollPHR }: PatientRegistrationFormProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState('patient-data');

  const form = useForm<PersonalInfo & ContactInfo & InsuranceInfo & OptionalInfo>({
    resolver: zodResolver(personalInfoSchema.merge(contactInfoSchema).merge(insuranceInfoSchema).merge(optionalInfoSchema)),
    defaultValues: {
      automatedEligibility: false,
      exemptFromReporting: false,
      confidentialHealthInfo: false,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Personal Information & Demographics:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="patientAccountNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Patient Account Number:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="primaryCareProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Assigned Primary Physician:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="referringProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Referring Physician/Provider:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Family Name: <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Given Name: <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Middle Name / Initial:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Date of Birth: <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Gender: <span className="text-destructive">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="undisclosed">Undisclosed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ssn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Social Security Number:</FormLabel>
                <FormControl>
                  <Input className="h-8" placeholder="___-__-____" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Weight (lbs):</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Height (ft/in):</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nameSuffix"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Name Suffix/Title:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="jr">Jr.</SelectItem>
                    <SelectItem value="sr">Sr.</SelectItem>
                    <SelectItem value="i">I</SelectItem>
                    <SelectItem value="ii">II</SelectItem>
                    <SelectItem value="iii">III</SelectItem>
                    <SelectItem value="iv">IV</SelectItem>
                    <SelectItem value="v">V</SelectItem>
                    <SelectItem value="esq">Esq.</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="md">MD</SelectItem>
                    <SelectItem value="dds">DDS</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Marital Status: <span className="text-destructive">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
                    <SelectItem value="unmarried">Unmarried</SelectItem>
                    <SelectItem value="common-law">Common law</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="legally-separated">Legally Separated</SelectItem>
                    <SelectItem value="living-together">Living together</SelectItem>
                    <SelectItem value="interlocutory">Interlocutory</SelectItem>
                    <SelectItem value="annulled">Annulled</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="domestic-partner">Domestic partner</SelectItem>
                    <SelectItem value="registered-domestic-partner">Registered domestic partner</SelectItem>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="unreported">Unreported</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employmentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Current Employment Status:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full-time-employed">Full time employed</SelectItem>
                    <SelectItem value="part-time-employed">Part time employed</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="self-employed">Self-employed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="active-military">On active military duty</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="contract-per-diem">Contract, per diem</SelectItem>
                    <SelectItem value="leave-of-absence">Leave of absence (e.g., family leave, sabbatical, etc.)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="temporarily-unemployed">Temporarily unemployed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="professionalTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Job Title/Profession:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Primary Language:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="chinese">Chinese (Mandarin)</SelectItem>
                    <SelectItem value="cantonese">Chinese (Cantonese)</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="portuguese">Portuguese</SelectItem>
                    <SelectItem value="russian">Russian</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="korean">Korean</SelectItem>
                    <SelectItem value="vietnamese">Vietnamese</SelectItem>
                    <SelectItem value="tagalog">Tagalog</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="polish">Polish</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="religion"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Religious Affiliation:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="catholic">Catholic</SelectItem>
                    <SelectItem value="protestant">Protestant</SelectItem>
                    <SelectItem value="baptist">Baptist</SelectItem>
                    <SelectItem value="methodist">Methodist</SelectItem>
                    <SelectItem value="lutheran">Lutheran</SelectItem>
                    <SelectItem value="jewish">Jewish</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="islam">Islam</SelectItem>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                    <SelectItem value="mormon">Mormon (LDS)</SelectItem>
                    <SelectItem value="jehovah-witness">Jehovah's Witness</SelectItem>
                    <SelectItem value="seventh-day-adventist">Seventh-day Adventist</SelectItem>
                    <SelectItem value="orthodox">Orthodox</SelectItem>
                    <SelectItem value="agnostic">Agnostic</SelectItem>
                    <SelectItem value="atheist">Atheist</SelectItem>
                    <SelectItem value="spiritual">Spiritual but not religious</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="decline">Decline to answer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genderIdentity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Gender Identity:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="transgender-male">Transgender Male</SelectItem>
                    <SelectItem value="transgender-female">Transgender Female</SelectItem>
                    <SelectItem value="non-binary">Non-Binary</SelectItem>
                    <SelectItem value="genderqueer">Genderqueer</SelectItem>
                    <SelectItem value="gender-fluid">Gender Fluid</SelectItem>
                    <SelectItem value="agender">Agender</SelectItem>
                    <SelectItem value="two-spirit">Two-Spirit</SelectItem>
                    <SelectItem value="questioning">Questioning</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sexualOrientation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Sexual Orientation:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="heterosexual">Heterosexual/Straight</SelectItem>
                    <SelectItem value="gay">Gay</SelectItem>
                    <SelectItem value="lesbian">Lesbian</SelectItem>
                    <SelectItem value="bisexual">Bisexual</SelectItem>
                    <SelectItem value="pansexual">Pansexual</SelectItem>
                    <SelectItem value="asexual">Asexual</SelectItem>
                    <SelectItem value="queer">Queer</SelectItem>
                    <SelectItem value="questioning">Questioning</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ethnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Ethnic Background:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select Ethnicity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hispanic">Hispanic or Latino</SelectItem>
                    <SelectItem value="not-hispanic">Not Hispanic or Latino</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="puerto-rican">Puerto Rican</SelectItem>
                    <SelectItem value="cuban">Cuban</SelectItem>
                    <SelectItem value="central-american">Central American</SelectItem>
                    <SelectItem value="south-american">South American</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="decline">Decline to answer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Racial Background:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select Race(s)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="black">Black or African American</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="asian-indian">Asian Indian</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="filipino">Filipino</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="korean">Korean</SelectItem>
                    <SelectItem value="vietnamese">Vietnamese</SelectItem>
                    <SelectItem value="native">American Indian or Alaska Native</SelectItem>
                    <SelectItem value="pacific">Native Hawaiian or Pacific Islander</SelectItem>
                    <SelectItem value="native-hawaiian">Native Hawaiian</SelectItem>
                    <SelectItem value="guamanian">Guamanian or Chamorro</SelectItem>
                    <SelectItem value="samoan">Samoan</SelectItem>
                    <SelectItem value="other-pacific">Other Pacific Islander</SelectItem>
                    <SelectItem value="multiracial">Two or More Races</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="decline">Decline to answer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tribalAffiliation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Tribal/Federal Recognition:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select Tribal Affiliation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="cherokee">Cherokee</SelectItem>
                    <SelectItem value="navajo">Navajo</SelectItem>
                    <SelectItem value="sioux">Sioux</SelectItem>
                    <SelectItem value="chippewa">Chippewa</SelectItem>
                    <SelectItem value="choctaw">Choctaw</SelectItem>
                    <SelectItem value="apache">Apache</SelectItem>
                    <SelectItem value="pueblo">Pueblo</SelectItem>
                    <SelectItem value="iroquois">Iroquois</SelectItem>
                    <SelectItem value="creek">Creek</SelectItem>
                    <SelectItem value="blackfeet">Blackfeet</SelectItem>
                    <SelectItem value="seminole">Seminole</SelectItem>
                    <SelectItem value="cheyenne">Cheyenne</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="mothersMaidenName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Mother's Birth Name:</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs text-muted-foreground">Last</Label>
                      <Input className="h-8" {...field} />
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">First</Label>
                      <Input className="h-8" />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      {/* Optional Information Accordions */}
      <Accordion type="single" collapsible className="w-full">
        {/* Tobacco Use History */}
        <AccordionItem value="tobacco-use-history">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Tobacco Use & Smoking History
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="smokingStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Smoking:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="never">Never Smoker</SelectItem>
                        <SelectItem value="former">Former Smoker</SelectItem>
                        <SelectItem value="current">Current Smoker</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="smokingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Frequency:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="occasional">Occasional (less than daily)</SelectItem>
                        <SelectItem value="light">Light (1-10 per day)</SelectItem>
                        <SelectItem value="moderate">Moderate (11-20 per day)</SelectItem>
                        <SelectItem value="heavy">Heavy (21+ per day)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="smokingStartDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Smoking Start Date:</FormLabel>
                    <div className="flex gap-2">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="By Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input className="h-8 w-24" placeholder="Age" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="smokingEndDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">End Date:</FormLabel>
                    <div className="flex gap-2">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="By Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input className="h-8 w-24" placeholder="Age" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="otherTobacco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Other Tobacco:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="chewing">Chewing Tobacco</SelectItem>
                        <SelectItem value="snuff">Snuff</SelectItem>
                        <SelectItem value="pipe">Pipe</SelectItem>
                        <SelectItem value="cigar">Cigar</SelectItem>
                        <SelectItem value="vape">E-Cigarette/Vape</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tobaccoFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Frequency:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="occasionally">Occasionally</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tobaccoStartDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Tobacco Start Date:</FormLabel>
                    <div className="flex gap-2">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="By Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input className="h-8 w-24" placeholder="Age" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tobaccoEndDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">End Date:</FormLabel>
                    <div className="flex gap-2">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="By Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input className="h-8 w-24" placeholder="Age" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tobaccoReviewDate"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-xs">Last Tobacco Use Review Date:</FormLabel>
                    <FormControl>
                      <Input type="date" className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="smokingComments"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-xs">Smoking Comments:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Employment Information */}
        <AccordionItem value="employment-info">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Employment & Work Details
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="employerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Employer Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Employer Phone:</FormLabel>
                    <FormControl>
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employerAddress1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 1:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employerAddress2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 2:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employerCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Employer City:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="employerState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">State:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="AL">AL</SelectItem>
                          <SelectItem value="AK">AK</SelectItem>
                          <SelectItem value="AZ">AZ</SelectItem>
                          <SelectItem value="AR">AR</SelectItem>
                          <SelectItem value="CA">CA</SelectItem>
                          <SelectItem value="CO">CO</SelectItem>
                          <SelectItem value="CT">CT</SelectItem>
                          <SelectItem value="DE">DE</SelectItem>
                          <SelectItem value="FL">FL</SelectItem>
                          <SelectItem value="GA">GA</SelectItem>
                          <SelectItem value="HI">HI</SelectItem>
                          <SelectItem value="ID">ID</SelectItem>
                          <SelectItem value="IL">IL</SelectItem>
                          <SelectItem value="IN">IN</SelectItem>
                          <SelectItem value="IA">IA</SelectItem>
                          <SelectItem value="KS">KS</SelectItem>
                          <SelectItem value="KY">KY</SelectItem>
                          <SelectItem value="LA">LA</SelectItem>
                          <SelectItem value="ME">ME</SelectItem>
                          <SelectItem value="MD">MD</SelectItem>
                          <SelectItem value="MA">MA</SelectItem>
                          <SelectItem value="MI">MI</SelectItem>
                          <SelectItem value="MN">MN</SelectItem>
                          <SelectItem value="MS">MS</SelectItem>
                          <SelectItem value="MO">MO</SelectItem>
                          <SelectItem value="MT">MT</SelectItem>
                          <SelectItem value="NE">NE</SelectItem>
                          <SelectItem value="NV">NV</SelectItem>
                          <SelectItem value="NH">NH</SelectItem>
                          <SelectItem value="NJ">NJ</SelectItem>
                          <SelectItem value="NM">NM</SelectItem>
                          <SelectItem value="NY">NY</SelectItem>
                          <SelectItem value="NC">NC</SelectItem>
                          <SelectItem value="ND">ND</SelectItem>
                          <SelectItem value="OH">OH</SelectItem>
                          <SelectItem value="OK">OK</SelectItem>
                          <SelectItem value="OR">OR</SelectItem>
                          <SelectItem value="PA">PA</SelectItem>
                          <SelectItem value="RI">RI</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="SD">SD</SelectItem>
                          <SelectItem value="TN">TN</SelectItem>
                          <SelectItem value="TX">TX</SelectItem>
                          <SelectItem value="UT">UT</SelectItem>
                          <SelectItem value="VT">VT</SelectItem>
                          <SelectItem value="VA">VA</SelectItem>
                          <SelectItem value="WA">WA</SelectItem>
                          <SelectItem value="WV">WV</SelectItem>
                          <SelectItem value="WI">WI</SelectItem>
                          <SelectItem value="WY">WY</SelectItem>
                          <SelectItem value="DC">DC</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employerZip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Zip:</FormLabel>
                      <FormControl>
                        <Input className="h-8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Emergency Contact */}
        <AccordionItem value="emergency-contact">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Emergency Contact Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="emergencyContactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Contact Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyRelationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Relationship To Patient:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyAddress1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 1:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyAddress2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 2:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">City:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="emergencyState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">State:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="AL">AL</SelectItem>
                          <SelectItem value="CA">CA</SelectItem>
                          <SelectItem value="NY">NY</SelectItem>
                          <SelectItem value="TX">TX</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergencyZip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Zip:</FormLabel>
                      <FormControl>
                        <Input className="h-8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="emergencyHomePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Home Phone:</FormLabel>
                    <FormControl>
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyCellPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Cell Phone:</FormLabel>
                    <FormControl>
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emergencyWorkPhone"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-xs">Work Phone:</FormLabel>
                    <div className="flex gap-1">
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                      <Input className="h-8 w-20" placeholder="Ex ___" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Next of Kin */}
        <AccordionItem value="next-of-kin">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Next of Kin Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="nextOfKinName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Contact Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinRelationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Relationship To Patient:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="grandparent">Grandparent</SelectItem>
                        <SelectItem value="grandchild">Grandchild</SelectItem>
                        <SelectItem value="other">Other Relative</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinAddress1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 1:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinAddress2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Address Line 2:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">City:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="nextOfKinState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">State:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="AL">AL</SelectItem>
                          <SelectItem value="CA">CA</SelectItem>
                          <SelectItem value="NY">NY</SelectItem>
                          <SelectItem value="TX">TX</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nextOfKinZip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Zip:</FormLabel>
                      <FormControl>
                        <Input className="h-8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="nextOfKinHomePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Home Phone:</FormLabel>
                    <FormControl>
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinCellPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Cell Phone:</FormLabel>
                    <FormControl>
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nextOfKinWorkPhone"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-xs">Work Phone:</FormLabel>
                    <div className="flex gap-1">
                      <Input className="h-8" placeholder="(___) ___-____" {...field} />
                      <Input className="h-8 w-20" placeholder="Ex ___" />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* User Defined Fields */}
        <AccordionItem value="user-defined-fields">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Custom Data Fields
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="userField1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 1:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userField4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 4:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userField2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 2:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userField5"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 5:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userField3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 3:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userField6"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Field 6:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Account Status */}
        <AccordionItem value="account-status">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Account Settings & Status
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <FormField
                  control={form.control}
                  name="patientStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Patient Start Date: *</FormLabel>
                      <FormControl>
                        <Input type="date" className="h-8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="patientEndDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Patient End Date:</FormLabel>
                      <FormControl>
                        <Input type="date" className="h-8" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="exemptFromReporting"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs">This patient is exempt from all reporting functions.</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confidentialHealthInfo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs">This patient's health information is confidential.</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  const renderInsuranceInfo = () => (
    <div className="space-y-6">
      {/* Eligibility & Benefits Insurance Information */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Insurance Coverage & Benefits Verification:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
      <FormField
        control={form.control}
            name="lastCheckedOn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Last Verification Date:</FormLabel>
                <FormControl>
                  <Input type="date" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="eligibilityCheckFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Verification Schedule:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="each-appointment">Each appointment</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                    <SelectItem value="as-needed">As needed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eligibilityBenefitPayerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Insurance Payer/Provider Name:</FormLabel>
                <FormControl>
                  <div className="flex gap-1">
                    <Input className="h-8 flex-1" {...field} />
                    <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                    <Button type="button" variant="outline" size="sm" className="h-8 px-2">Clear</Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="automatedEligibility"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
                    <FormLabel className="text-xs">Automated Verification</FormLabel>
            </div>
          </FormItem>
        )}
      />
            <Button type="button" variant="outline" size="sm" className="mt-2">
              Search Insurance Coverage
            </Button>
          </div>
        </div>
      </div>

      {/* Accordion for Insurance Details */}
      <Accordion type="single" collapsible className="w-full">
        {/* Primary Insurance */}
        <AccordionItem value="primary-insurance">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Primary Coverage Details
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="patientInsuranceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Coverage Type/Payment Source:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Select Coverage Type/Payment Source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="private-insurance">Private Insurance</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                        <SelectItem value="workers-comp">Worker's Compensation</SelectItem>
                        <SelectItem value="self-pay">Self Pay</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Insurance Company: <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Primary Insured:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Last Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">First Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="middleInitial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">MI:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="patientRelationshipToPrimaryInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Patient Relationship To Primary Insured:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="capitation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Capitation:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscriberId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Subscriber ID: <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="groupNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Group No:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="planName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuredAuthorization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Insured Authorization:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deductible"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Deductible:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visitCoPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Visit Co-payment:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-3">
                <h4 className="text-xs font-medium mb-2">Release of Information:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <FormField
            control={form.control}
                    name="signatureOnFile"
            render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Signature On File:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="signatureDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Signature Date:</FormLabel>
                        <FormControl>
                          <Input type="date" className="h-8" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Authorization by Insurance Co */}
        <AccordionItem value="authorization">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Authorization (by Insurance Co.)
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                Please enter Authorization Number in Visits (Billing Options / Prior Authorization Number) for these counts to be accurate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
              <FormField
                control={form.control}
                name="authorizationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Authorization Number:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
                name="numberOfVisitsAuthorized"
            render={({ field }) => (
              <FormItem>
                    <FormLabel className="text-xs">No. of Visits Authorized:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

              <FormField
                control={form.control}
                name="effectiveStartDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Eff. Start Date:</FormLabel>
                    <FormControl>
                      <Input type="date" className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="effectiveStopDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Eff. Stop Date:</FormLabel>
                    <FormControl>
                      <Input type="date" className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfVisitsUsed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">No. of Visits Used:</FormLabel>
                    <FormControl>
                      <Input className="h-8 bg-gray-100" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfVisitsLeft"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">No. of Visits Left:</FormLabel>
                    <FormControl>
                      <Input className="h-8 bg-gray-100" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Secondary Insurance */}
        <AccordionItem value="secondary-insurance">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Secondary Insurance
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="patientInsuranceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Patient Insurance Type/Source of Payment:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Select Coverage Type/Payment Source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="private-insurance">Private Insurance</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                        <SelectItem value="workers-comp">Worker's Compensation</SelectItem>
                        <SelectItem value="self-pay">Self Pay</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Insurance Co:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secondaryInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Secondary Insured:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Last Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">First Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="middleInitial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">MI:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="patientRelationshipToSecondaryInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Patient Relationship To Secondary Insured:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="- select one -" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscriberId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Subscriber ID:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <FormField
            control={form.control}
            name="groupNumber"
            render={({ field }) => (
              <FormItem>
                    <FormLabel className="text-xs">Group No:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
                name="planName"
            render={({ field }) => (
              <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
                name="secondaryInsuredAuthorization"
            render={({ field }) => (
              <FormItem>
                    <FormLabel className="text-xs">Sec. Insured Authorization:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deductible"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Deductible:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visitCoPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Visit Co-payment:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-3">
                <h4 className="text-xs font-medium mb-2">Release of Information:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  <FormField
                    control={form.control}
                    name="signatureOnFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Signature On File:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="signatureDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Signature Date:</FormLabel>
                <FormControl>
                  <Input type="date" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Third Insurance */}
        <AccordionItem value="third-insurance">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Third Insurance
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="patientInsuranceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Patient Insurance Type/Source of Payment:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Select Coverage Type/Payment Source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="private-insurance">Private Insurance</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="medicaid">Medicaid</SelectItem>
                        <SelectItem value="workers-comp">Worker's Compensation</SelectItem>
                        <SelectItem value="self-pay">Self Pay</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Insurance Co:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thirdInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Third Insured:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Last Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">First Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="middleInitial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">MI:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="patientRelationshipToThirdInsured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Patient Relationship To Third Insured:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="- select one -" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscriberId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Subscriber ID:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="groupNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Group No:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="planName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Plan Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deductible"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Deductible:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visitCoPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Visit Co-payment:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Guarantor Information */}
        <AccordionItem value="guarantor-information">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Guarantor Information (if different from primary insured or patient)
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pt-2">
              <FormField
                control={form.control}
                name="guarantor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Guarantor:</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        <Input className="h-8 flex-1" {...field} />
                        <Button type="button" variant="outline" size="sm" className="h-8 px-2">...</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Last Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">First Name:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="middleInitial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">MI:</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b">
              <TabsList className="h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="patient-data" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2"
                >
                  Patient Data
                </TabsTrigger>
                <TabsTrigger 
                  value="insurance" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2"
                >
                  Insurance
                </TabsTrigger>
              </TabsList>
            </div>

            <CardContent className="pt-6">
              <TabsContent value="patient-data" className="mt-0">
                {renderPersonalInfo()}
              </TabsContent>

              <TabsContent value="insurance" className="mt-0">
                {renderInsuranceInfo()}
              </TabsContent>

              <div className="flex justify-end gap-3 pt-6 mt-6 border-t">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit" variant="outline">
                  Add Patient
                </Button>
                <Button 
                  type="button" 
                  onClick={() => {
                    const data = form.getValues();
                    if (onEnrollPHR) {
                      onEnrollPHR(data);
                    } else {
                      onSubmit(data);
                    }
                  }}
                >
                  Add + Enroll in PHR
                </Button>
              </div>
            </CardContent>
          </Tabs>
        </form>
      </Form>
    </Card>
  );
}
