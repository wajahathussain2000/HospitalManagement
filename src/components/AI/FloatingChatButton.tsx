import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatInterface } from './ChatInterface';
import { ChatContext } from '@/utils/aiChat';
import { cn } from '@/lib/utils';

interface FloatingChatButtonProps {
  context?: ChatContext;
  quickActions?: { label: string; prompt: string; }[];
}

export function FloatingChatButton({ context, quickActions }: FloatingChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all z-50",
          isOpen && "scale-0"
        )}
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl rounded-lg overflow-hidden transition-all z-50",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <div className="relative h-full bg-background">
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
          <ChatInterface context={context} quickActions={quickActions} />
        </div>
      </div>
    </>
  );
}
