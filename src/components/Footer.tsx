
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-green/20 px-12 py-24">
      <div className="space-y-8">
        {/* Main Footer Content */}
        <div className="flex flex-wrap gap-13">
          {/* Logo and Social */}
          <div className="flex flex-col justify-between gap-3 min-w-fit">
            <div className="flex items-center gap-1">
              <div className="w-7 h-7 border-2 border-brand-green rounded-lg"></div>
              <span className="text-brand-green font-heading text-2xl font-bold tracking-tight">
                LogiAI
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <Facebook className="w-6 h-6 text-brand-muted hover:text-brand-green cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-brand-muted hover:text-brand-green cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-brand-muted hover:text-brand-green cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-13">
            <div className="space-y-2.5 min-w-fit">
              <h4 className="text-brand-light text-sm font-medium">Company</h4>
              <div className="space-y-2.5">
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">About</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Careers</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Blog</p>
              </div>
            </div>

            <div className="space-y-2.5 min-w-fit">
              <h4 className="text-brand-light text-sm font-medium">Support</h4>
              <div className="space-y-2.5">
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Help Center</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Contact Support</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Privacy Policy</p>
              </div>
            </div>

            <div className="space-y-2.5 min-w-fit">
              <h4 className="text-brand-light text-sm font-medium">Legal</h4>
              <div className="space-y-2.5">
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Terms of Service</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Privacy Policy</p>
              </div>
            </div>

            <div className="space-y-2.5 min-w-fit">
              <h4 className="text-brand-light text-sm font-medium">Follow Us</h4>
              <div className="space-y-2.5">
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Twitter</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">LinkedIn</p>
                <p className="text-brand-muted text-sm font-medium hover:text-brand-green cursor-pointer transition-colors">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
