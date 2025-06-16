
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  Settings, 
  BarChart3,
  Stethoscope,
  Shield,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: Activity, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Patients', path: '/patients' },
  { icon: Calendar, label: 'Scheduling', path: '/scheduling' },
  { icon: FileText, label: 'Claims', path: '/claims' },
  { icon: DollarSign, label: 'Billing', path: '/billing' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Stethoscope, label: 'Clinical', path: '/clinical' },
  { icon: Shield, label: 'Compliance', path: '/compliance' },
  { icon: BookOpen, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-blue-900 text-white transition-all duration-300 z-50",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        <div className={cn("flex items-center space-x-3", !isOpen && "justify-center")}>
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="h-6 w-6" />
          </div>
          {isOpen && (
            <div>
              <h1 className="font-bold text-lg">HealthCare AI</h1>
              <p className="text-blue-200 text-sm">Billing & EHR</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-white hover:bg-blue-800"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 text-blue-100 hover:bg-blue-800 hover:text-white transition-colors",
                isActive && "bg-blue-800 text-white border-r-2 border-blue-400",
                !isOpen && "justify-center px-4"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-blue-800 rounded-lg p-3">
            <p className="text-sm font-medium">AI Assistant</p>
            <p className="text-xs text-blue-200 mt-1">
              Get help with coding, billing, and documentation
            </p>
            <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-500 text-white">
              Chat Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
