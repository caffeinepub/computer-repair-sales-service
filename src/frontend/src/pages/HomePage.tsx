import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { Wrench, ShoppingCart, Clock, Shield, Award, Zap } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most repairs completed within 24-48 hours',
    },
    {
      icon: Shield,
      title: 'Warranty Protected',
      description: '90-day warranty on all repairs and parts',
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: Zap,
      title: 'Quick Diagnostics',
      description: 'Free diagnostic service for all devices',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Professional Computer Repair & Sales Service
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Expert solutions for all your technology needs. From hardware repairs to custom builds, we've got you covered.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/request-service' })}
                className="bg-tech-green text-slate-900 hover:bg-tech-green/90"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Request Repair
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/products' })}
                className="border-tech-green text-tech-green hover:bg-tech-green/10"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Quality service you can trust
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-700/50 bg-card">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-tech-green/10">
                    <feature.icon className="h-6 w-6 text-tech-green" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Repair Services</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                From hardware failures to software issues, our expert technicians can diagnose and repair any computer problem quickly and efficiently.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Hardware diagnostics and repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Software troubleshooting and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Virus and malware removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Data recovery and backup solutions</span>
                </li>
              </ul>
              <Button
                onClick={() => navigate({ to: '/services' })}
                className="bg-tech-green text-slate-900 hover:bg-tech-green/90"
              >
                View All Services
              </Button>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Computer Sales</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Browse our selection of quality computers, components, and accessories. Whether you need a new laptop or custom desktop build, we have what you need.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>New and refurbished laptops</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Custom desktop builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Computer components and upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-tech-green/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-tech-green" />
                  </div>
                  <span>Accessories and peripherals</span>
                </li>
              </ul>
              <Button
                onClick={() => navigate({ to: '/products' })}
                className="bg-tech-green text-slate-900 hover:bg-tech-green/90"
              >
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tech-green py-16 text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">
            Submit a service request today and let our experts take care of your technology needs.
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: '/request-service' })}
            className="bg-slate-900 text-white hover:bg-slate-800"
          >
            Request Service Now
          </Button>
        </div>
      </section>
    </div>
  );
}
