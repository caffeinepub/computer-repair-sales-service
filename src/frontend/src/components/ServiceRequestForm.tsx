import { useState } from 'react';
import { useSubmitServiceRequest } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function ServiceRequestForm() {
  const [customerName, setCustomerName] = useState('');
  const [deviceDetails, setDeviceDetails] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitRequest, isPending, error } = useSubmitServiceRequest();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName.trim() || !deviceDetails.trim() || !issueDescription.trim()) {
      return;
    }

    submitRequest(
      { customerName, deviceDetails, issueDescription },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setCustomerName('');
          setDeviceDetails('');
          setIssueDescription('');
          setTimeout(() => setShowSuccess(false), 5000);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <Alert className="border-tech-green bg-tech-green/10">
          <CheckCircle2 className="h-4 w-4 text-tech-green" />
          <AlertTitle className="text-tech-green">Success!</AlertTitle>
          <AlertDescription>
            Your service request has been submitted. We'll contact you within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message || 'Failed to submit request. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="customerName">Your Name *</Label>
        <Input
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="John Doe"
          required
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deviceDetails">Device Details *</Label>
        <Input
          id="deviceDetails"
          value={deviceDetails}
          onChange={(e) => setDeviceDetails(e.target.value)}
          placeholder="e.g., Dell Laptop XPS 15, Windows 11"
          required
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="issueDescription">Issue Description *</Label>
        <Textarea
          id="issueDescription"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          placeholder="Please describe the problem you're experiencing in detail..."
          rows={6}
          required
          disabled={isPending}
        />
      </div>

      <Button
        type="submit"
        disabled={isPending || !customerName.trim() || !deviceDetails.trim() || !issueDescription.trim()}
        className="w-full bg-tech-green text-slate-900 hover:bg-tech-green/90"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </Button>
    </form>
  );
}
