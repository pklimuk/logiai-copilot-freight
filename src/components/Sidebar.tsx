
import { Mail, Database, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const handleGmailLogin = () => {
    console.log("Gmail login clicked");
    // TODO: Implement Gmail OAuth login
  };

  const handleTMSLogin = () => {
    console.log("TMS login clicked");
    // TODO: Implement TMS login
  };

  const handleTelegramConfig = () => {
    console.log("Telegram bot configuration clicked");
    // TODO: Open Telegram bot configuration modal
  };

  return (
    <aside className="w-100 bg-brand-dark p-8">
      <div className="space-y-4">
        <Button
          onClick={handleGmailLogin}
          className="w-full nav-link justify-start"
          variant="ghost"
        >
          <Mail className="w-6 h-6" />
          <span className="text-sm font-medium">Gmail Login</span>
        </Button>
        
        <Button
          onClick={handleTMSLogin}
          className="w-full nav-link justify-start"
          variant="ghost"
        >
          <Database className="w-6 h-6" />
          <span className="text-sm font-medium">TMS Login</span>
        </Button>
        
        <Button
          onClick={handleTelegramConfig}
          className="w-full nav-link justify-start"
          variant="ghost"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm font-medium">Configure Telegram Bot</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
