
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

const insuranceInfoSchema = z.object({
  hasInsurance: z.boolean(),
  primaryInsurance: z.string().optional(),
  policyNumber: z.string().optional(),
  groupNumber: z.string().optional(),
  subscriberName: z.string().optional(),
  subscriberDOB: z.string().optional(),
});

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
});

type PersonalInfo = z.infer<typeof personalInfoSchema>;
type ContactInfo = z.infer<typeof contactInfoSchema>;
type InsuranceInfo = z.infer<typeof insuranceInfoSchema>;
type OptionalInfo = z.infer<typeof optionalInfoSchema>;

interface PatientRegistrationFormProps {
  onSubmit: (data: PersonalInfo & ContactInfo & InsuranceInfo & OptionalInfo) => void;
  onCancel: () => void;
}

export function PatientRegistrationForm({ onSubmit, onCancel }: PatientRegistrationFormProps) {
  const [activeTab, setActiveTab] = useState('patient-data');

  const form = useForm<PersonalInfo & ContactInfo & InsuranceInfo & OptionalInfo>({
    resolver: zodResolver(personalInfoSchema.merge(contactInfoSchema).merge(insuranceInfoSchema).merge(optionalInfoSchema)),
    defaultValues: {
      hasInsurance: false,
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Patient Demographics */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Patient Demographics:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="patientAccountNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Pat. Acct. No:</FormLabel>
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
                <FormLabel className="text-xs">Primary Care Provider:</FormLabel>
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
                <FormLabel className="text-xs">Referring Provider:</FormLabel>
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
                  Last Name: <span className="text-destructive">*</span>
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
                  First Name: <span className="text-destructive">*</span>
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
                <FormLabel className="text-xs">Middle Name / MI:</FormLabel>
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
                  DOB: <span className="text-destructive">*</span>
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
                  Sex: <span className="text-destructive">*</span>
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
                <FormLabel className="text-xs">SSN:</FormLabel>
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
                <FormLabel className="text-xs">Weight:</FormLabel>
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
                <FormLabel className="text-xs">Height:</FormLabel>
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
                <FormLabel className="text-xs">Name Suffix:</FormLabel>
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
                <FormLabel className="text-xs">Employment Status:</FormLabel>
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
                <FormLabel className="text-xs">Professional Title:</FormLabel>
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
                <FormLabel className="text-xs">Preferred Language:</FormLabel>
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
                <FormLabel className="text-xs">Religion:</FormLabel>
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
                <FormLabel className="text-xs">Ethnicity:</FormLabel>
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
                <FormLabel className="text-xs">Race:</FormLabel>
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
                <FormLabel className="text-xs">Tribal Affiliation:</FormLabel>
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
                  <FormLabel className="text-xs">Mother's Maiden Name:</FormLabel>
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
      <Accordion type="multiple" className="w-full">
        {/* Smoking History */}
        <AccordionItem value="smoking-history">
          <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
            Smoking History
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
            Employment Information
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
            Emergency Contact
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
            Next of Kin
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
      </Accordion>
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
      {/* Patient Contact Information */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Patient Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  Address Line 1: <span className="text-destructive">*</span>
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
            name="addressLine2"
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">
                  City: <span className="text-destructive">*</span>
                </FormLabel>
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
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">
                    State: <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AL">AL - Alabama</SelectItem>
                      <SelectItem value="AK">AK - Alaska</SelectItem>
                      <SelectItem value="AZ">AZ - Arizona</SelectItem>
                      <SelectItem value="AR">AR - Arkansas</SelectItem>
                      <SelectItem value="CA">CA - California</SelectItem>
                      <SelectItem value="CO">CO - Colorado</SelectItem>
                      <SelectItem value="CT">CT - Connecticut</SelectItem>
                      <SelectItem value="DE">DE - Delaware</SelectItem>
                      <SelectItem value="FL">FL - Florida</SelectItem>
                      <SelectItem value="GA">GA - Georgia</SelectItem>
                      <SelectItem value="HI">HI - Hawaii</SelectItem>
                      <SelectItem value="ID">ID - Idaho</SelectItem>
                      <SelectItem value="IL">IL - Illinois</SelectItem>
                      <SelectItem value="IN">IN - Indiana</SelectItem>
                      <SelectItem value="IA">IA - Iowa</SelectItem>
                      <SelectItem value="KS">KS - Kansas</SelectItem>
                      <SelectItem value="KY">KY - Kentucky</SelectItem>
                      <SelectItem value="LA">LA - Louisiana</SelectItem>
                      <SelectItem value="ME">ME - Maine</SelectItem>
                      <SelectItem value="MD">MD - Maryland</SelectItem>
                      <SelectItem value="MA">MA - Massachusetts</SelectItem>
                      <SelectItem value="MI">MI - Michigan</SelectItem>
                      <SelectItem value="MN">MN - Minnesota</SelectItem>
                      <SelectItem value="MS">MS - Mississippi</SelectItem>
                      <SelectItem value="MO">MO - Missouri</SelectItem>
                      <SelectItem value="MT">MT - Montana</SelectItem>
                      <SelectItem value="NE">NE - Nebraska</SelectItem>
                      <SelectItem value="NV">NV - Nevada</SelectItem>
                      <SelectItem value="NH">NH - New Hampshire</SelectItem>
                      <SelectItem value="NJ">NJ - New Jersey</SelectItem>
                      <SelectItem value="NM">NM - New Mexico</SelectItem>
                      <SelectItem value="NY">NY - New York</SelectItem>
                      <SelectItem value="NC">NC - North Carolina</SelectItem>
                      <SelectItem value="ND">ND - North Dakota</SelectItem>
                      <SelectItem value="OH">OH - Ohio</SelectItem>
                      <SelectItem value="OK">OK - Oklahoma</SelectItem>
                      <SelectItem value="OR">OR - Oregon</SelectItem>
                      <SelectItem value="PA">PA - Pennsylvania</SelectItem>
                      <SelectItem value="RI">RI - Rhode Island</SelectItem>
                      <SelectItem value="SC">SC - South Carolina</SelectItem>
                      <SelectItem value="SD">SD - South Dakota</SelectItem>
                      <SelectItem value="TN">TN - Tennessee</SelectItem>
                      <SelectItem value="TX">TX - Texas</SelectItem>
                      <SelectItem value="UT">UT - Utah</SelectItem>
                      <SelectItem value="VT">VT - Vermont</SelectItem>
                      <SelectItem value="VA">VA - Virginia</SelectItem>
                      <SelectItem value="WA">WA - Washington</SelectItem>
                      <SelectItem value="WV">WV - West Virginia</SelectItem>
                      <SelectItem value="WI">WI - Wisconsin</SelectItem>
                      <SelectItem value="WY">WY - Wyoming</SelectItem>
                      <SelectItem value="DC">DC - District of Columbia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">
                    Zip: <span className="text-destructive">*</span>
                  </FormLabel>
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
            name="homePhone"
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
            name="workPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Work Phone:</FormLabel>
                <div className="flex gap-1">
                  <Input className="h-8" placeholder="(___) ___-____" {...field} />
                  <Input className="h-8 w-20" placeholder="Ex ___" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cellPhone"
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
            name="preferredPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Preferred Phone:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="home">Home Phone</SelectItem>
                    <SelectItem value="work">Work Phone</SelectItem>
                    <SelectItem value="cell">Cell Phone</SelectItem>
                    <SelectItem value="fax">Fax</SelectItem>
                    <SelectItem value="none">No Preference</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fax"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Fax:</FormLabel>
                <FormControl>
                  <Input className="h-8" placeholder="(___) ___-____" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Email:</FormLabel>
                <FormControl>
                  <Input type="email" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="communicationPreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Communication Preference:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="text">Text Message (SMS)</SelectItem>
                    <SelectItem value="mail">Physical Mail</SelectItem>
                    <SelectItem value="portal">Patient Portal</SelectItem>
                    <SelectItem value="none">No Preference</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );

  const renderInsuranceInfo = () => (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="hasInsurance"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I have health insurance</FormLabel>
            </div>
          </FormItem>
        )}
      />
      
      {form.watch('hasInsurance') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="primaryInsurance"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-xs">Primary Insurance Provider</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="policyNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Policy Number</FormLabel>
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
                <FormLabel className="text-xs">Group Number</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscriberName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Subscriber Name</FormLabel>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscriberDOB"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Subscriber Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
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
                {renderContactInfo()}
              </TabsContent>

              <TabsContent value="insurance" className="mt-0">
                {renderInsuranceInfo()}
              </TabsContent>

              <div className="flex justify-end gap-3 pt-6 mt-6 border-t">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit">
                  Complete Registration
                </Button>
              </div>
            </CardContent>
          </Tabs>
        </form>
      </Form>
    </Card>
  );
}
