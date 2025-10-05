import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Bot, 
  User, 
  Send, 
  Mic, 
  MicOff, 
  Paperclip, 
  Smile, 
  MoreHorizontal,
  Zap,
  Brain,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Minimize2,
  Maximize2,
  Settings,
  History,
  Star,
  Copy,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  Users,
  FileText,
  BarChart3,
  PieChart,
  DollarSign,
  Heart,
  Stethoscope,
  Building,
  Wrench,
  Package,
  Bed,
  Pill,
  Activity
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    module?: string;
    action?: string;
    confidence?: number;
    suggestions?: string[];
  };
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  module: string;
  color: string;
}

interface AIModule {
  name: string;
  icon: React.ReactNode;
  description: string;
  capabilities: string[];
}

export default function AIChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your AI Assistant for the Hospital Management System. I can help you with patient management, billing, scheduling, analytics, and much more. How can I assist you today?',
      timestamp: new Date(),
      metadata: {
        suggestions: [
          'Show me today\'s appointments',
          'Generate a financial report',
          'Check patient statistics',
          'Help with user management'
        ]
      }
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const chatElement = document.getElementById('ai-chat-assistant');
      if (chatElement && !chatElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, []);

  const quickActions: QuickAction[] = [
    {
      id: '1',
      title: 'Patient Overview',
      description: 'View patient statistics and trends',
      icon: <Users className="h-5 w-5" />,
      action: 'Show me current patient statistics and recent admissions',
      module: 'Patients',
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: '2',
      title: 'Financial Report',
      description: 'Generate revenue and billing insights',
      icon: <DollarSign className="h-5 w-5" />,
      action: 'Generate a comprehensive financial report for this month',
      module: 'Billing',
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      id: '3',
      title: 'Schedule Analysis',
      description: 'Analyze appointment patterns',
      icon: <Calendar className="h-5 w-5" />,
      action: 'Analyze today\'s appointment schedule and identify any conflicts',
      module: 'Scheduling',
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      id: '4',
      title: 'Inventory Check',
      description: 'Check medical supplies and equipment',
      icon: <Package className="h-5 w-5" />,
      action: 'Check inventory levels for critical medical supplies',
      module: 'Inventory',
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    },
    {
      id: '5',
      title: 'Staff Performance',
      description: 'Review employee productivity metrics',
      icon: <BarChart3 className="h-5 w-5" />,
      action: 'Show me staff performance metrics and productivity trends',
      module: 'Analytics',
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    },
    {
      id: '6',
      title: 'System Health',
      description: 'Check system status and alerts',
      icon: <Activity className="h-5 w-5" />,
      action: 'Check system health and show me any pending alerts',
      module: 'System',
      color: 'bg-red-100 text-red-800 border-red-200'
    }
  ];

  const aiModules: AIModule[] = [
    {
      name: 'Patient Management',
      icon: <Heart className="h-6 w-6" />,
      description: 'Manage patient records, appointments, and medical history',
      capabilities: ['Patient search', 'Appointment scheduling', 'Medical history', 'Insurance verification']
    },
    {
      name: 'Billing & Finance',
      icon: <DollarSign className="h-6 w-6" />,
      description: 'Handle billing, payments, and financial reporting',
      capabilities: ['Invoice generation', 'Payment tracking', 'Insurance claims', 'Financial reports']
    },
    {
      name: 'Staff Management',
      icon: <Users className="h-6 w-6" />,
      description: 'Manage staff schedules, performance, and assignments',
      capabilities: ['Schedule management', 'Performance tracking', 'Shift planning', 'Staff analytics']
    },
    {
      name: 'Inventory Control',
      icon: <Package className="h-6 w-6" />,
      description: 'Monitor medical supplies and equipment inventory',
      capabilities: ['Stock monitoring', 'Reorder alerts', 'Expiry tracking', 'Cost analysis']
    },
    {
      name: 'Analytics & Reports',
      icon: <BarChart3 className="h-6 w-6" />,
      description: 'Generate insights and comprehensive reports',
      capabilities: ['Performance metrics', 'Trend analysis', 'Custom reports', 'Data visualization']
    },
    {
      name: 'System Administration',
      icon: <Settings className="h-6 w-6" />,
      description: 'System configuration and maintenance tasks',
      capabilities: ['User management', 'System settings', 'Backup management', 'Security monitoring']
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    const currentInput = inputMessage;
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(currentInput);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date(),
        metadata: aiResponse.metadata
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('patient') || input.includes('appointment')) {
      return {
        content: `I can help you with patient management! Here's what I found:

📊 **Current Patient Statistics:**
• Total Active Patients: 1,247
• Today's Appointments: 34
• Pending Follow-ups: 12
• New Registrations (This Week): 18

🏥 **Recent Activity:**
• Dr. Smith has 8 appointments today
• 3 patients are waiting for lab results
• 2 emergency cases were admitted this morning

Would you like me to show you specific patient details or help schedule new appointments?`,
        metadata: {
          module: 'Patients',
          confidence: 0.95,
          suggestions: [
            'Show Dr. Smith\'s schedule',
            'List pending lab results',
            'Schedule new appointment',
            'View emergency cases'
          ]
        }
      };
    }
    
    if (input.includes('billing') || input.includes('financial') || input.includes('revenue')) {
      return {
        content: `Here's your financial overview:

💰 **Revenue Summary (This Month):**
• Total Revenue: 2,847,392
• Outstanding Payments: 156,783
• Insurance Claims Pending: 89,234
• Collection Rate: 94.2%

📈 **Trends:**
• Revenue increased by 12.5% vs last month
• Average claim processing time: 3.2 days
• Top revenue source: Cardiology (28%)

🔍 **Key Insights:**
• 15 invoices are overdue (>30 days)
• Insurance claim rejection rate: 4.1%
• Monthly recurring revenue: 1.2M

Would you like detailed reports or help with specific billing tasks?`,
        metadata: {
          module: 'Billing',
          confidence: 0.92,
          suggestions: [
            'Generate detailed financial report',
            'Show overdue invoices',
            'Check insurance claims status',
            'Analyze revenue by department'
          ]
        }
      };
    }
    
    if (input.includes('staff') || input.includes('employee') || input.includes('performance')) {
      return {
        content: `Staff Performance Overview:

👥 **Team Statistics:**
• Total Staff: 247 employees
• Active Today: 189 (76.5%)
• On Leave: 12
• New Hires This Month: 8

⭐ **Performance Metrics:**
• Average Performance Score: 87.3%
• Top Performing Department: Emergency (94.1%)
• Staff Satisfaction: 8.7/10
• Training Completion: 96.2%

📊 **Department Breakdown:**
• Doctors: 45 (avg score: 91.2%)
• Nurses: 89 (avg score: 88.7%)
• Support Staff: 113 (avg score: 84.1%)

🎯 **Recommendations:**
• Schedule training for 3 staff members
• Review performance for 2 employees
• Recognize top performers in Cardiology

How can I help you with staff management?`,
        metadata: {
          module: 'Staff',
          confidence: 0.88,
          suggestions: [
            'Show top performers',
            'Schedule training sessions',
            'Generate staff reports',
            'Check attendance patterns'
          ]
        }
      };
    }
    
    if (input.includes('inventory') || input.includes('supplies') || input.includes('equipment')) {
      return {
        content: `Inventory Status Report:

📦 **Critical Stock Levels:**
• Medical Supplies: 87% stocked
• Medications: 92% stocked
• Equipment: 94% operational
• Emergency Supplies: 100% stocked

⚠️ **Low Stock Alerts:**
• Surgical Gloves (Size M): 15 units left
• Antibiotics (Amoxicillin): 8 units left
• Bandages (Large): 12 units left

🔧 **Equipment Status:**
• MRI Machine: Operational
• CT Scanner: Maintenance due in 5 days
• Ultrasound: Operational
• X-Ray Machine: Minor calibration needed

💡 **Recommendations:**
• Reorder surgical gloves immediately
• Schedule CT scanner maintenance
• Consider bulk purchase for antibiotics

Would you like to place orders or check specific items?`,
        metadata: {
          module: 'Inventory',
          confidence: 0.90,
          suggestions: [
            'Place reorder for low stock items',
            'Schedule equipment maintenance',
            'Check specific medication levels',
            'Generate inventory report'
          ]
        }
      };
    }
    
    if (input.includes('schedule') || input.includes('appointment') || input.includes('calendar')) {
      return {
        content: `Today's Schedule Overview:

📅 **Appointment Summary:**
• Total Appointments: 34
• Completed: 18 (53%)
• Upcoming: 16 (47%)
• Cancellations: 2

👨‍⚕️ **Doctor Schedules:**
• Dr. Smith: 8 appointments (2 remaining)
• Dr. Johnson: 6 appointments (4 remaining)
• Dr. Brown: 7 appointments (3 remaining)
• Dr. Wilson: 5 appointments (2 remaining)

⏰ **Time Slots:**
• Morning (8AM-12PM): 19 appointments
• Afternoon (1PM-5PM): 15 appointments
• Evening (5PM-8PM): 0 appointments

🔍 **Conflicts & Notes:**
• 1 appointment needs rescheduling
• 2 patients are running late
• 3 new urgent appointments added

Need help with scheduling or rescheduling?`,
        metadata: {
          module: 'Scheduling',
          confidence: 0.93,
          suggestions: [
            'Reschedule conflicted appointments',
            'Add new urgent appointment',
            'Check doctor availability',
            'Send appointment reminders'
          ]
        }
      };
    }
    
    // Default response
    return {
      content: `I understand you're asking about "${userInput}". I'm here to help with all aspects of hospital management including:

🏥 **Patient Management** - Records, appointments, medical history
💰 **Billing & Finance** - Invoicing, payments, financial reports  
👥 **Staff Management** - Schedules, performance, HR tasks
📦 **Inventory Control** - Supplies, equipment, stock levels
📊 **Analytics** - Reports, insights, performance metrics
⚙️ **System Admin** - Settings, users, maintenance

Could you be more specific about what you'd like to know or do? I can provide detailed information and help you take actions within the system.`,
      metadata: {
        confidence: 0.75,
        suggestions: [
          'Show me today\'s dashboard',
          'Generate a patient report',
          'Check system status',
          'Help with user management'
        ]
      }
    };
  };

  const handleQuickAction = (action: QuickAction) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: action.action,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(action.action);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date(),
        metadata: aiResponse.metadata
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
        >
          <Bot className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div id="ai-chat-assistant" className="fixed bottom-4 right-4 z-50 w-96 h-[450px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-blue-100">Hospital Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 h-[280px] p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}>
                    {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </span>
                    {message.metadata?.confidence && (
                      <Badge variant="outline" className="text-xs">
                        {Math.round(message.metadata.confidence * 100)}% confidence
                      </Badge>
                    )}
                  </div>
                  
                  {/* Suggestions */}
                  {message.metadata?.suggestions && message.type === 'ai' && (
                    <div className="mt-3 space-y-1">
                      {message.metadata.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start h-auto py-2 text-xs"
                          onClick={() => {
                            const userMessage: ChatMessage = {
                              id: Date.now().toString(),
                              type: 'user',
                              content: suggestion,
                              timestamp: new Date()
                            };

                            setMessages(prev => [...prev, userMessage]);
                            setIsTyping(true);

                            // Simulate AI response
                            setTimeout(() => {
                              const aiResponse = generateAIResponse(suggestion);
                              const aiMessage: ChatMessage = {
                                id: (Date.now() + 1).toString(),
                                type: 'ai',
                                content: aiResponse.content,
                                timestamp: new Date(),
                                metadata: aiResponse.metadata
                              };

                              setMessages(prev => [...prev, aiMessage]);
                              setIsTyping(false);
                            }, 1500);
                          }}
                        >
                          <Lightbulb className="h-3 w-3 mr-2" />
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-purple-500 text-white">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="p-4 border-t">
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.slice(0, 4).map((action) => (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                className="h-auto p-2 text-left justify-start"
                onClick={() => handleQuickAction(action)}
              >
                <div className="flex items-center space-x-2">
                  <div className={action.color + " p-1 rounded"}>
                    {action.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{action.title}</p>
                    <p className="text-xs text-gray-500 truncate">{action.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about hospital management..."
              className="pr-20"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? (
                  <MicOff className="h-3 w-3 text-red-500" />
                ) : (
                  <Mic className="h-3 w-3" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
              >
                <Paperclip className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
