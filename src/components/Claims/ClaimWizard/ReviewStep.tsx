
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, FileText, Code, CreditCard, DollarSign, Star } from 'lucide-react';

interface ReviewStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function ReviewStep({ data }: ReviewStepProps) {
  const totalAmount = data.procedures?.reduce((sum: number, proc: any) => sum + (proc.amount * proc.units), 0) || 0;
  const primaryDiagnosis = data.diagnoses?.find((d: any) => d.primary);

  return (
    <div className="space-y-6">
      {/* Patient Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Patient Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.patient ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Name:</span>
                <span>{data.patient.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Patient ID:</span>
                <span>{data.patient.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Date of Birth:</span>
                <span>{data.patient.dob}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Phone:</span>
                <span>{data.patient.phone}</span>
              </div>
            </div>
          ) : (
            <p className="text-red-600">No patient selected</p>
          )}
        </CardContent>
      </Card>

      {/* Service Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Service Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Date of Service:</span>
              <span>{data.serviceDate || 'Not specified'}</span>
            </div>
            {data.notes && (
              <div>
                <span className="font-medium">Notes:</span>
                <p className="mt-1 text-sm text-gray-600">{data.notes}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Procedures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Procedures
            </div>
            <Badge variant="outline">
              Total: ${totalAmount.toFixed(2)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.procedures?.length > 0 ? (
            <div className="space-y-3">
              {data.procedures.map((proc: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge>{proc.cptCode}</Badge>
                      <span className="font-medium">{proc.description}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Units: {proc.units} × ${proc.amount} = ${(proc.units * proc.amount).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-600">No procedures added</p>
          )}
        </CardContent>
      </Card>

      {/* Diagnoses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="h-5 w-5 mr-2" />
            Diagnoses
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.diagnoses?.length > 0 ? (
            <div className="space-y-3">
              {data.diagnoses.map((diagnosis: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Badge>{diagnosis.icdCode}</Badge>
                    {diagnosis.primary && (
                      <Badge variant="default" className="bg-blue-100 text-blue-800">
                        <Star className="h-3 w-3 mr-1" />
                        Primary
                      </Badge>
                    )}
                    <span>{diagnosis.description}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-600">No diagnoses added</p>
          )}
        </CardContent>
      </Card>

      {/* Insurance Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Insurance Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.insurance?.primary ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Primary Insurance</h4>
                <div className="flex items-center justify-between">
                  <span>Provider:</span>
                  <span>{data.insurance.primary.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Type:</span>
                  <span>{data.insurance.primary.type}</span>
                </div>
              </div>
              
              {data.insurance.secondary && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-2">Secondary Insurance</h4>
                    <div className="flex items-center justify-between">
                      <span>Provider:</span>
                      <span>{data.insurance.secondary.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Type:</span>
                      <span>{data.insurance.secondary.type}</span>
                    </div>
                  </div>
                </>
              )}
              
              {data.insurance.authNumber && (
                <>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Authorization Number:</span>
                    <span>{data.insurance.authNumber}</span>
                  </div>
                </>
              )}
            </div>
          ) : (
            <p className="text-red-600">No insurance information provided</p>
          )}
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Claim Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Patient:</span>
              <span className="font-medium">{data.patient?.name || 'Not selected'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service Date:</span>
              <span className="font-medium">{data.serviceDate || 'Not specified'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Procedures:</span>
              <span className="font-medium">{data.procedures?.length || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Diagnoses:</span>
              <span className="font-medium">{data.diagnoses?.length || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Primary Diagnosis:</span>
              <span className="font-medium">{primaryDiagnosis?.icdCode || 'Not specified'}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-green-600">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
