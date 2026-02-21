import ServiceRequestForm from '@/components/ServiceRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Shield, Wrench } from 'lucide-react';

export default function RequestServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Request Service</h1>
        <p className="text-lg text-muted-foreground">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Service Request Form</CardTitle>
              <CardDescription>
                Please provide details about your device and the issue you're experiencing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceRequestForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tech-green/10">
                <Clock className="h-5 w-5 text-tech-green" />
              </div>
              <CardTitle className="text-lg">Quick Response</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We'll review your request and contact you within 24 hours to schedule a diagnostic.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tech-green/10">
                <Wrench className="h-5 w-5 text-tech-green" />
              </div>
              <CardTitle className="text-lg">Expert Service</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our certified technicians will diagnose and repair your device with care and precision.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tech-green/10">
                <Shield className="h-5 w-5 text-tech-green" />
              </div>
              <CardTitle className="text-lg">Warranty Protected</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All repairs come with a 90-day warranty for your peace of mind.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
