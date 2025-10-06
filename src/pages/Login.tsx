import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, User, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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
                  <h4 className={cn("font-medium text-blue-900 dark:text-blue-100 mb-2", isRTL && "text-right")}>{t('auth.demoCredentials')}</h4>
                  <div className={cn("text-sm text-blue-700 dark:text-blue-300 space-y-1", isRTL && "text-right")}>
                    <p><strong>{t('auth.admin')}:</strong> admin@hospital.com / password</p>
                    <p><strong>{t('auth.doctor')}:</strong> doctor@hospital.com / password</p>
                    <p><strong>{t('auth.patient')}:</strong> patient@hospital.com / password</p>
                  </div>
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
