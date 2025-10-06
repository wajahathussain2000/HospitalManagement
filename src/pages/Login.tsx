import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, User, AlertCircle, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

// Real credentials for easy login
const loginCredentials = [
  {
    role: 'Super Admin',
    email: 'admin@hospital.com',
    password: 'admin123',
    description: 'Full system access',
    color: 'bg-red-500 hover:bg-red-600'
  },
  {
    role: 'Hospital Admin',
    email: 'superadmin@hospital.com',
    password: 'superadmin123',
    description: 'Administrative access',
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    role: 'Cardiologist',
    email: 'cardio@hospital.com',
    password: 'password123',
    description: 'Heart specialist',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    role: 'Neurologist',
    email: 'neuro@hospital.com',
    password: 'password123',
    description: 'Brain specialist',
    color: 'bg-indigo-500 hover:bg-indigo-600'
  },
  {
    role: 'Orthopedic Surgeon',
    email: 'ortho@hospital.com',
    password: 'password123',
    description: 'Bone specialist',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    role: 'Pediatrician',
    email: 'pediatric@hospital.com',
    password: 'password123',
    description: 'Child specialist',
    color: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    role: 'Emergency Doctor',
    email: 'emergency@hospital.com',
    password: 'password123',
    description: 'Emergency care',
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    role: 'Nurse',
    email: 'nurse@hospital.com',
    password: 'password123',
    description: 'Patient care',
    color: 'bg-teal-500 hover:bg-teal-600'
  },
  {
    role: 'Pharmacist',
    email: 'pharmacy@hospital.com',
    password: 'password123',
    description: 'Medication management',
    color: 'bg-cyan-500 hover:bg-cyan-600'
  },
  {
    role: 'Lab Technician',
    email: 'lab@hospital.com',
    password: 'password123',
    description: 'Laboratory tests',
    color: 'bg-yellow-500 hover:bg-yellow-600'
  },
  {
    role: 'Receptionist',
    email: 'reception@hospital.com',
    password: 'password123',
    description: 'Front desk',
    color: 'bg-gray-500 hover:bg-gray-600'
  },
  {
    role: 'Patient',
    email: 'patient@hospital.com',
    password: 'password123',
    description: 'Patient portal',
    color: 'bg-emerald-500 hover:bg-emerald-600'
  }
];

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copiedCredential, setCopiedCredential] = useState<string | null>(null);
  const { login, register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    gender: 'male' as 'male' | 'female' | 'other',
    address: '',
    emergencyContact: {
      name: '',
      phone: '',
      relation: ''
    }
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(loginData);
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(registerData);
      if (success) {
        toast({
          title: t('auth.registrationSuccess'),
          description: t('auth.welcomeMessage'),
        });
        navigate('/dashboard');
      } else {
        setError(t('auth.registrationFailed'));
      }
    } catch (err) {
      setError(t('auth.registrationError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (isLogin) {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      if (field.startsWith('emergencyContact.')) {
        const emergencyField = field.split('.')[1];
        setRegisterData(prev => ({
          ...prev,
          emergencyContact: {
            ...prev.emergencyContact,
            [emergencyField]: value
          }
        }));
      } else {
        setRegisterData(prev => ({ ...prev, [field]: value }));
      }
    }
  };

  const fillCredentials = (credential: typeof loginCredentials[0]) => {
    setLoginData({
      email: credential.email,
      password: credential.password
    });
    setError('');
    toast({
      title: t('auth.credentialsFilled'),
      description: `${t('auth.loggedInAs')} ${credential.role}`,
    });
  };

  const copyCredential = async (credential: typeof loginCredentials[0]) => {
    const text = `Email: ${credential.email}\nPassword: ${credential.password}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCredential(credential.email);
      setTimeout(() => setCopiedCredential(null), 2000);
      toast({
        title: t('auth.copiedToClipboard'),
        description: `${credential.role} ${t('auth.credentialsCopied')}`,
      });
    } catch (err) {
      toast({
        title: t('auth.copyFailed'),
        description: t('auth.unableToCopy'),
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className={cn("text-3xl font-bold text-gray-900 dark:text-gray-100", isRTL && "text-right")}>{t('auth.hospitalManagement')}</h1>
          <p className={cn("text-gray-600 dark:text-gray-400 mt-2", isRTL && "text-right")}>{t('auth.healthcareSystem')}</p>
        </div>

        <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">{t('auth.login')}</TabsTrigger>
            <TabsTrigger value="register">{t('auth.registerAsPatient')}</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className={cn("flex items-center text-gray-900 dark:text-gray-100", isRTL && "flex-row-reverse")}>
                  <User className={cn("h-5 w-5", isRTL ? "ml-2" : "mr-2")} />
                  {t('auth.staffLogin')}
                </CardTitle>
                <p className={cn("text-sm text-gray-600 dark:text-gray-400", isRTL && "text-right")}>
                  {t('auth.staffLoginDesc')}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">{t('auth.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('auth.emailPlaceholder')}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      dir={isRTL ? 'rtl' : 'ltr'}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">{t('auth.password')}</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder={t('auth.passwordPlaceholder')}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className={cn("h-4 w-4 animate-spin", isRTL ? "ml-2" : "mr-2")} />
                        {t('auth.signingIn')}
                      </>
                    ) : (
                      t('auth.signIn')
                    )}
                  </Button>
                </form>

                <div className={cn("mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg", isRTL && "text-right")}>
                  <h4 className={cn("font-medium text-blue-900 dark:text-blue-100 mb-3", isRTL && "text-right")}>
                    {t('auth.quickLoginCredentials')}
                  </h4>
                  <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                    {loginCredentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Button
                          type="button"
                          size="sm"
                          className={cn(
                            "flex-1 text-white text-xs h-8",
                            credential.color,
                            isRTL && "flex-row-reverse"
                          )}
                          onClick={() => fillCredentials(credential)}
                        >
                          <span className="truncate">{credential.role}</span>
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={() => copyCredential(credential)}
                        >
                          {copiedCredential === credential.email ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className={cn("text-xs text-blue-600 dark:text-blue-400 mt-2", isRTL && "text-right")}>
                    {t('auth.clickToFill')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle>Patient Registration</CardTitle>
                <p className="text-sm text-gray-600">
                  Only patients can create accounts. Hospital staff accounts are managed by administrators.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={registerData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={registerData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input
                      id="reg-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={registerData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={registerData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <select
                        id="gender"
                        value={registerData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={registerData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Emergency Contact</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Contact name"
                        value={registerData.emergencyContact.name}
                        onChange={(e) => handleInputChange('emergencyContact.name', e.target.value)}
                        required
                      />
                      <Input
                        placeholder="Phone number"
                        value={registerData.emergencyContact.phone}
                        onChange={(e) => handleInputChange('emergencyContact.phone', e.target.value)}
                        required
                      />
                    </div>
                    <Input
                      placeholder="Relationship"
                      value={registerData.emergencyContact.relation}
                      onChange={(e) => handleInputChange('emergencyContact.relation', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      'Create Patient Account'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
