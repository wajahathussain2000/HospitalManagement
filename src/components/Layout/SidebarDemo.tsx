import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRole } from '@/entities';

// Demo component to test sidebar navigation
export function SidebarDemo() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.ADMIN);

  const roles = [
    { value: UserRole.ADMIN, label: 'Admin' },
    { value: UserRole.SUPER_ADMIN, label: 'Super Admin' },
    { value: UserRole.DOCTOR, label: 'Doctor' },
    { value: UserRole.NURSE, label: 'Nurse' },
    { value: UserRole.RECEPTIONIST, label: 'Receptionist' },
    { value: UserRole.LAB_TECHNICIAN, label: 'Lab Technician' },
    { value: UserRole.PHARMACIST, label: 'Pharmacist' },
    { value: UserRole.ACCOUNTANT, label: 'Accountant' },
    { value: UserRole.HR_MANAGER, label: 'HR Manager' },
    { value: UserRole.RADIOLOGIST, label: 'Radiologist' },
    { value: UserRole.PATIENT, label: 'Patient' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Navigation Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Role Selection</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Select different roles to see how the sidebar navigation changes:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {roles.map((role) => (
                      <Button
                        key={role.value}
                        variant={currentRole === role.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentRole(role.value)}
                        className="text-xs"
                      >
                        {role.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Current Role: {currentRole.replace('_', ' ').toUpperCase()}</h3>
                  <p className="text-sm text-gray-600">
                    The sidebar will show different navigation items based on the selected role.
                    Toggle the sidebar to see the collapsed/expanded states.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Navigation Features</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Role-based navigation items</li>
                    <li>• Collapsible sidebar</li>
                    <li>• Active route highlighting</li>
                    <li>• Icon-based navigation</li>
                    <li>• User profile display</li>
                    <li>• AI Assistant integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
