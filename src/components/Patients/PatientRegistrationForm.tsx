
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ChevronLeft, ChevronRight, User, Phone, MapPin, Heart } from 'lucide-react';

const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  ssn: z.string().regex(/^\d{3}-?\d{2}-?\d{4}$/, 'Invalid SSN format'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed', 'separated']),
  preferredLanguage: z.string().min(1, 'Preferred language is required'),
});

const contactInfoSchema = z.object({
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone format'),
  email: z.string().email('Invalid email address'),
  emergencyContactName: z.string().min(2, 'Emergency contact name is required'),
  emergencyContactPhone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone format'),
  emergencyContactRelation: z.string().min(1, 'Emergency contact relation is required'),
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
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<PersonalInfo & ContactInfo & InsuranceInfo>>({});

  const personalForm = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: formData,
  });

  const contactForm = useForm<ContactInfo>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: formData,
  });

  const insuranceForm = useForm<InsuranceInfo>({
    resolver: zodResolver(insuranceInfoSchema),
    defaultValues: { hasInsurance: false, ...formData },
  });

  const steps = [
    { title: 'Personal Information', icon: User, form: personalForm, schema: personalInfoSchema },
    { title: 'Contact Information', icon: Phone, form: contactForm, schema: contactInfoSchema },
    { title: 'Insurance Information', icon: Heart, form: insuranceForm, schema: insuranceInfoSchema },
  ];

  const currentForm = steps[currentStep].form;

  const handleNext = async () => {
    const isValid = await currentForm.trigger();
    if (isValid) {
      const stepData = currentForm.getValues();
      setFormData(prev => ({ ...prev, ...stepData }));
      
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Final submission
        onSubmit({ ...formData, ...stepData } as PersonalInfo & ContactInfo & InsuranceInfo);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const stepData = currentForm.getValues();
      setFormData(prev => ({ ...prev, ...stepData }));
      setCurrentStep(currentStep - 1);
    }
  };

  const renderPersonalInfo = () => (
    <Form {...personalForm}>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={personalForm.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={personalForm.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={personalForm.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={personalForm.control}
          name="ssn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Security Number</FormLabel>
              <FormControl>
                <Input placeholder="123-45-6789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={personalForm.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={personalForm.control}
          name="maritalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
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
          control={personalForm.control}
          name="preferredLanguage"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Preferred Language</FormLabel>
              <FormControl>
                <Input placeholder="English" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  );

  const renderContactInfo = () => (
    <Form {...contactForm}>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={contactForm.control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="emergencyContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Contact Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="emergencyContactPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Contact Phone</FormLabel>
              <FormControl>
                <Input placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="emergencyContactRelation"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Emergency Contact Relation</FormLabel>
              <FormControl>
                <Input placeholder="Spouse, Parent, Sibling, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  );

  const renderInsuranceInfo = () => (
    <Form {...insuranceForm}>
      <div className="space-y-4">
        <FormField
          control={insuranceForm.control}
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
        
        {insuranceForm.watch('hasInsurance') && (
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={insuranceForm.control}
              name="primaryInsurance"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Primary Insurance Provider</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={insuranceForm.control}
              name="policyNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Policy Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={insuranceForm.control}
              name="groupNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={insuranceForm.control}
              name="subscriberName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscriber Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={insuranceForm.control}
              name="subscriberDOB"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscriber Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </div>
    </Form>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderPersonalInfo();
      case 1: return renderContactInfo();
      case 2: return renderInsuranceInfo();
      default: return null;
    }
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CurrentIcon className="h-6 w-6 text-blue-600" />
          <CardTitle>{steps[currentStep].title}</CardTitle>
        </div>
        <div className="flex space-x-2 mt-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {renderStepContent()}
          
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={currentStep === 0 ? onCancel : handlePrevious}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              {currentStep === 0 ? 'Cancel' : 'Previous'}
            </Button>
            
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Complete Registration' : 'Next'}
              {currentStep < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
