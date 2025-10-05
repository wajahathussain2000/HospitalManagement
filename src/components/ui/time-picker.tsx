import React from 'react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function TimePicker({ 
  value, 
  onChange, 
  disabled = false, 
  placeholder = "Select time",
  className 
}: TimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots.push({ value: timeString, display: displayTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const formatDisplayTime = (timeValue: string) => {
    if (!timeValue) return placeholder;
    return new Date(`2000-01-01T${timeValue}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <Clock className="mr-2 h-4 w-4" />
          {formatDisplayTime(value || '')}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="max-h-60 overflow-y-auto">
          <div className="grid grid-cols-4 gap-1 p-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot.value}
                variant={value === slot.value ? "default" : "ghost"}
                size="sm"
                className="h-8 text-xs"
                onClick={() => {
                  onChange?.(slot.value);
                  setIsOpen(false);
                }}
              >
                {slot.display}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
