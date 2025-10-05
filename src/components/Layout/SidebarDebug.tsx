import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  Pill,
  Package,
  ShoppingCart,
  FileText,
  CreditCard,
  RotateCcw,
  Settings,
  BarChart3,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/entities';

interface SidebarDebugProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SidebarDebug({ isOpen, onToggle }: SidebarDebugProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Simplified pharmacy navigation for debugging
  const pharmacyItems = [
    { icon: Activity, label: 'Dashboard', path: '/' },
    { icon: Pill, label: 'Pharmacy Dashboard', path: '/pharmacy/dashboard' },
    { icon: Shield, label: 'Pharmacy Roles', path: '/pharmacy/roles' },
    { icon: Package, label: 'Inventory Management', path: '/pharmacy/inventory' },
    { icon: ShoppingCart, label: 'Procurement Management', path: '/pharmacy/procurement' },
    { icon: Package, label: 'Pack/Loose Management', path: '/pharmacy/pack-loose' },
    { icon: FileText, label: 'Prescription Integration', path: '/pharmacy/prescription-integration' },
    { icon: CreditCard, label: 'Sales & POS Billing', path: '/pharmacy/sales-pos' },
    { icon: RotateCcw, label: 'Returns & Expiry', path: '/pharmacy/returns-expiry' },
    { icon: Users, label: 'Inpatient/Outpatient Integration', path: '/pharmacy/inpatient-outpatient' },
    { icon: Settings, label: 'Advanced Operations', path: '/pharmacy/advanced-operations' },
    { icon: BarChart3, label: 'Reports & Analytics', path: '/pharmacy/reports' },
    { icon: Shield, label: 'Compliance & Security', path: '/pharmacy/compliance' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-blue-900 text-white transition-all duration-300 z-50 flex flex-col",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        <div className={cn("flex items-center space-x-3", !isOpen && "justify-center")}>
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="h-6 w-6" />
          </div>
          {isOpen && (
            <div>
              <h1 className="font-bold text-lg">Pharmacy System</h1>
              <p className="text-blue-200 text-sm">Dr. Maria Garcia</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-white hover:bg-blue-800"
        >
          {isOpen ? '←' : '→'}
        </Button>
      </div>

      {/* User Info */}
      {isOpen && user && (
        <div className="p-4 border-b border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Users className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-blue-200 capitalize">
                {user.role.replace('_', ' ')}
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto mt-6">
        <div className="px-2 pb-4">
        {pharmacyItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                  "flex items-center px-4 py-3 text-blue-100 hover:bg-blue-800 hover:text-white transition-colors rounded-lg mx-2 mb-1",
                isActive && "bg-blue-800 text-white border-r-2 border-blue-400",
                !isOpen && "justify-center px-4"
              )
            }
          >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="ml-3 truncate">{item.label}</span>}
          </NavLink>
        ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-800 mt-auto">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full text-white border-white hover:bg-white hover:text-blue-900"
            >
              <Users className="h-4 w-4 mr-2" />
          {isOpen && "Logout"}
          </Button>
      </div>
    </div>
  );
}
