import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X, Wrench, ShoppingCart, FileText } from 'lucide-react';
import { useState } from 'react';
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Services', path: '/services', icon: Wrench },
    { label: 'Products', path: '/products', icon: ShoppingCart },
    { label: 'Request Service', path: '/request-service', icon: FileText },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/assets/generated/logo.dim_200x200.png" 
              alt="TestAut Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-tech-green">TestAut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-tech-green"
                activeProps={{ className: 'text-tech-green' }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => navigate({ to: '/request-service' })}
              className="bg-tech-green text-slate-900 hover:bg-tech-green/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border/40 bg-background md:hidden">
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-tech-green"
                  activeProps={{ className: 'text-tech-green' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  navigate({ to: '/request-service' });
                  setMobileMenuOpen(false);
                }}
                className="bg-tech-green text-slate-900 hover:bg-tech-green/90"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/assets/generated/logo.dim_200x200.png" 
                  alt="Tech Service Hub Logo" 
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-tech-green">Tech Service Hub</span>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                Professional computer repair and sales service. We provide expert solutions for all your technology needs with fast turnaround times and competitive pricing.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-tech-green transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-slate-400 hover:text-tech-green transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/request-service" className="text-slate-400 hover:text-tech-green transition-colors">
                    Request Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-tech-green transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-tech-green transition-colors">
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-tech-green transition-colors">
                  <SiGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Tech Service Hub. Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'tech-service-hub'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-green hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
