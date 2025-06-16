
import { Button } from '@/components/ui/button';
import { 
  RefreshCw,
  Settings,
  Plus
} from 'lucide-react';

interface ClaimsActionsProps {
  onNewClaim: () => void;
}

export function ClaimsActions({ onNewClaim }: ClaimsActionsProps) {
  return (
    <div className="flex space-x-2">
      <Button variant="outline">
        <RefreshCw className="h-4 w-4 mr-2" />
        Sync Claims
      </Button>
      <Button variant="outline">
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </Button>
      <Button onClick={onNewClaim}>
        <Plus className="h-4 w-4 mr-2" />
        New Claim
      </Button>
    </div>
  );
}
