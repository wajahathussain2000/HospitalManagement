
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  FileText,
  User,
  Calendar,
  DollarSign,
  Edit,
  Save,
  X,
  Download,
  Send,
  History,
  MessageSquare
} from 'lucide-react';
import { ClaimData } from './ClaimsTable';
import { useToast } from '@/hooks/use-toast';

interface ClaimDetailModalProps {
  claim: ClaimData | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedClaim: ClaimData) => void;
}

export function ClaimDetailModal({ claim, isOpen, onClose, onSave }: ClaimDetailModalProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedClaim, setEditedClaim] = useState<ClaimData | null>(null);

  if (!claim) return null;

  const handleEdit = () => {
    setEditedClaim({ ...claim });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedClaim) {
      onSave(editedClaim);
      setIsEditing(false);
      toast({
        title: "Claim Updated",
        description: "Claim has been updated successfully.",
      });
    }
  };

  const handleCancel = () => {
    setEditedClaim(null);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof ClaimData, value: string | string[]) => {
    if (editedClaim) {
      setEditedClaim({
        ...editedClaim,
        [field]: value
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'denied': return 'bg-red-100 text-red-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'resubmitted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentClaim = isEditing ? editedClaim! : claim;

  // Mock data for additional claim details
  const claimHistory = [
    { date: '2024-01-14', action: 'Claim Submitted', user: 'System', details: 'Initial submission' },
    { date: '2024-01-15', action: 'Status Updated', user: 'Jane Doe', details: 'Changed to processing' },
    { date: '2024-01-16', action: 'Payment Posted', user: 'System', details: 'Payment received' }
  ];

  const claimNotes = [
    { date: '2024-01-14', user: 'Dr. Smith', note: 'Patient required additional documentation' },
    { date: '2024-01-15', user: 'Billing Dept', note: 'Submitted with corrected diagnosis code' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Claim Details - {currentClaim.id}
            </div>
            <div className="flex space-x-2">
              {!isEditing ? (
                <>
                  <Button variant="outline" size="sm" onClick={handleEdit}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Send className="h-4 w-4 mr-2" />
                    Resubmit
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={handleCancel}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </>
              )}
            </div>
          </DialogTitle>
          <DialogDescription>
            View and manage claim information
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="attachments">Attachments</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <User className="h-4 w-4 mr-2" />
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient">Patient Name</Label>
                    {isEditing ? (
                      <Input
                        id="patient"
                        value={currentClaim.patient}
                        onChange={(e) => handleInputChange('patient', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm">{currentClaim.patient}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider">Provider</Label>
                    {isEditing ? (
                      <Select 
                        value={currentClaim.provider} 
                        onValueChange={(value) => handleInputChange('provider', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dr. Johnson">Dr. Johnson</SelectItem>
                          <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
                          <SelectItem value="Dr. Brown">Dr. Brown</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-sm">{currentClaim.provider}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Service Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Service Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfService">Date of Service</Label>
                    {isEditing ? (
                      <Input
                        id="dateOfService"
                        type="date"
                        value={currentClaim.dateOfService}
                        onChange={(e) => handleInputChange('dateOfService', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm">{currentClaim.dateOfService}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="submissionDate">Submission Date</Label>
                    {isEditing ? (
                      <Input
                        id="submissionDate"
                        type="date"
                        value={currentClaim.submissionDate}
                        onChange={(e) => handleInputChange('submissionDate', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm">{currentClaim.submissionDate}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>CPT Codes</Label>
                    <div className="flex flex-wrap gap-1">
                      {currentClaim.cptCodes.map((code, index) => (
                        <Badge key={index} variant="outline">
                          {code}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Financial Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Claim Amount</Label>
                    {isEditing ? (
                      <Input
                        id="amount"
                        value={currentClaim.amount}
                        onChange={(e) => handleInputChange('amount', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm font-medium text-green-600">{currentClaim.amount}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payer">Payer</Label>
                    {isEditing ? (
                      <Select 
                        value={currentClaim.payer} 
                        onValueChange={(value) => handleInputChange('payer', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Aetna">Aetna</SelectItem>
                          <SelectItem value="BCBS">Blue Cross Blue Shield</SelectItem>
                          <SelectItem value="Medicare">Medicare</SelectItem>
                          <SelectItem value="UnitedHealth">UnitedHealth</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-sm">{currentClaim.payer}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Status Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Status Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Current Status</Label>
                    {isEditing ? (
                      <Select 
                        value={currentClaim.status} 
                        onValueChange={(value) => handleInputChange('status', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="denied">Denied</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="resubmitted">Resubmitted</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge className={getStatusColor(currentClaim.status)}>
                        {currentClaim.status}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-4 w-4 mr-2" />
                  Claim History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {claimHistory.map((entry, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-b-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{entry.action}</p>
                            <p className="text-sm text-gray-600">{entry.details}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{entry.date}</p>
                            <p className="text-sm text-gray-500">{entry.user}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Claim Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {claimNotes.map((note, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">{note.user}</p>
                        <p className="text-sm text-gray-500">{note.date}</p>
                      </div>
                      <p className="text-sm">{note.note}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <Label htmlFor="newNote">Add New Note</Label>
                  <Textarea
                    id="newNote"
                    placeholder="Enter your note here..."
                    className="mt-2"
                  />
                  <Button className="mt-2">Add Note</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attachments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">No attachments found</p>
                  <Button className="mt-4">Upload Attachment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
