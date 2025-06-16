
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Plus } from 'lucide-react';

const cptCodes = [
  { code: '99201', description: 'Office visit, new patient, 10 min', amount: 100, category: 'E&M' },
  { code: '99213', description: 'Office visit, established patient, 15 min', amount: 150, category: 'E&M' },
  { code: '99214', description: 'Office visit, established patient, 25 min', amount: 200, category: 'E&M' },
  { code: '90834', description: 'Psychotherapy, 45 minutes', amount: 180, category: 'Mental Health' },
  { code: '97110', description: 'Therapeutic exercise, 15 minutes', amount: 85, category: 'Physical Therapy' },
  { code: '93000', description: 'Electrocardiogram, routine ECG', amount: 75, category: 'Diagnostic' },
  { code: '36415', description: 'Venipuncture for collection of specimen', amount: 25, category: 'Lab' }
];

const icdCodes = [
  { code: 'Z00.00', description: 'Encounter for general adult medical examination without abnormal findings', category: 'Routine' },
  { code: 'I10', description: 'Essential hypertension', category: 'Cardiovascular' },
  { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', category: 'Endocrine' },
  { code: 'M25.511', description: 'Pain in right shoulder', category: 'Musculoskeletal' },
  { code: 'J06.9', description: 'Acute upper respiratory infection, unspecified', category: 'Respiratory' }
];

interface CodeLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (code: any) => void;
  type: 'cpt' | 'icd';
}

export function CodeLookupModal({ isOpen, onClose, onSelect, type }: CodeLookupModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnits, setSelectedUnits] = useState<{ [key: string]: number }>({});

  const codes = type === 'cpt' ? cptCodes : icdCodes;
  const filteredCodes = codes.filter(code =>
    code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (code: any) => {
    if (type === 'cpt') {
      const units = selectedUnits[code.code] || 1;
      onSelect({
        cptCode: code.code,
        description: code.description,
        amount: code.amount,
        units: units
      });
    } else {
      onSelect({
        icdCode: code.code,
        description: code.description,
        primary: false
      });
    }
    onClose();
  };

  const updateUnits = (codeValue: string, units: number) => {
    setSelectedUnits(prev => ({ ...prev, [codeValue]: Math.max(1, units) }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            {type === 'cpt' ? 'CPT Code Lookup' : 'ICD-10 Code Lookup'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={`Search ${type.toUpperCase()} codes...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Results */}
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredCodes.map((code) => (
              <Card key={code.code} className="hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline">{code.code}</Badge>
                        <Badge variant="secondary">{code.category}</Badge>
                      </div>
                      <p className="text-sm">{code.description}</p>
                      {type === 'cpt' && (
                        <p className="text-sm text-green-600 font-medium mt-1">
                          ${(code as any).amount}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {type === 'cpt' && (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-600">Units:</span>
                          <Input
                            type="number"
                            min="1"
                            value={selectedUnits[code.code] || 1}
                            onChange={(e) => updateUnits(code.code, parseInt(e.target.value))}
                            className="w-16 h-8 text-xs"
                          />
                        </div>
                      )}
                      <Button size="sm" onClick={() => handleSelect(code)}>
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCodes.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No codes found matching your search.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
