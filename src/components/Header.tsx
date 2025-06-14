
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-brand-dark border-b border-brand-green/20 px-12 py-5">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-13">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 border-2 border-brand-green rounded-lg"></div>
            <span className="text-brand-green font-heading text-2xl font-bold tracking-tight">
              LogiAI
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-1.5 text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
              Features
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
              Pricing
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
              About Us
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
              Contact
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-10">
          <span className="text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
            Download app
          </span>
          <div className="w-px h-8 bg-brand-muted"></div>
          <span className="text-brand-light text-sm font-medium cursor-pointer hover:text-brand-green transition-colors">
            Log in
          </span>
          <Button className="btn-primary">
            Try it free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
