
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

type PersonalInfo = z.infer<typeof personalInfoSchema>;
type ContactInfo = z.infer<typeof contactInfoSchema>;
type InsuranceInfo = z.infer<typeof insuranceInfoSchema>;

interface PatientRegistrationFormProps {
  onSubmit: (data: PersonalInfo & ContactInfo & InsuranceInfo) => void;
  onCancel: () => void;
}

export function PatientRegistrationForm({ onSubmit, onCancel }: PatientRegistrationFormProps) {
  const [activeTab, setActiveTab] = useState('patient-data');

  const form = useForm<PersonalInfo & ContactInfo & InsuranceInfo>({
    resolver: zodResolver(personalInfoSchema.merge(contactInfoSchema).merge(insuranceInfoSchema)),
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
                    <SelectItem value="ii">II</SelectItem>
                    <SelectItem value="iii">III</SelectItem>
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
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
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
                    <SelectItem value="employed">Employed</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
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
                    <SelectItem value="jewish">Jewish</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="none">None</SelectItem>
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
                    <SelectItem value="non-binary">Non-Binary</SelectItem>
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
                    <SelectItem value="heterosexual">Heterosexual</SelectItem>
                    <SelectItem value="homosexual">Homosexual</SelectItem>
                    <SelectItem value="bisexual">Bisexual</SelectItem>
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
                    <SelectItem value="native">American Indian or Alaska Native</SelectItem>
                    <SelectItem value="pacific">Native Hawaiian or Pacific Islander</SelectItem>
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
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="work">Work</SelectItem>
                    <SelectItem value="cell">Cell</SelectItem>
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
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="text">Text Message</SelectItem>
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
