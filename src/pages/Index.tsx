import { useState, useEffect } from "react";
import { Mail, Database, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TelegramBotModal from "@/components/TelegramBotModal";

const Index = () => {
  const [emailLoggedIn, setEmailLoggedIn] = useState(false);
  const [tmsLoggedIn, setTmsLoggedIn] = useState(false);
  const [telegramModalOpen, setTelegramModalOpen] = useState(false);
  const [telegramBotConfigured, setTelegramBotConfigured] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backendUrl = "http://localhost:8000"; // Your FastAPI backend URL

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${backendUrl}/check_auth_status`);
      const data = await response.json();
      setEmailLoggedIn(data.authenticated);
      return data.authenticated;
    } catch (error) {
      console.error("Error checking auth status:", error);
      return false;
    }
  };

  useEffect(() => {
    // Check authentication status on component mount
    const initAuth = async () => {
      setIsLoading(true);
      const isAuthenticated = await checkAuthStatus();
      setIsLoading(false);
      
      if (isAuthenticated) {
        setAuthMessage("Successfully authenticated with Gmail");
        setTimeout(() => setAuthMessage(""), 3000);
      }
    };
    
    initAuth();
  }, []);

  const handleEmailLogin = () => {
    setIsLoading(true);
    setAuthMessage("Redirecting to Google login...");
    // Redirect to backend's /authorize endpoint
    window.location.href = `${backendUrl}/authorize`;
  };

  const handleTMSLogin = () => {
    console.log("TMS login clicked");
    // Simulate login process
    setTimeout(() => {
      setTmsLoggedIn(true);
    }, 1000);
  };

  const handleTelegramConfig = () => {
    setTelegramModalOpen(true);
  };

  const handleTelegramBotCreated = (botData: { name: string; profilePicture: string }) => {
    console.log("Telegram bot configured:", botData);
    setTelegramBotConfigured(true);
    setTelegramModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <main className="flex-1 px-12 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-brand-light text-5xl font-bold leading-tight tracking-tight mb-6 animate-fade-in">
              3PL Copilot Setup
            </h1>
            <p className="text-brand-light/80 text-xl max-w-2xl mx-auto">
              Connect your services to get started with AI-powered logistics automation
            </p>
            {authMessage && (
              <p className={`mt-4 text-lg ${authMessage.includes("Successfully") ? "text-brand-green" : "text-brand-light"}`}>
                {authMessage}
              </p>
            )}
          </section>

          {/* Login Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Login Card */}
            <div className="value-card text-center">
              <div className="flex justify-center mb-6">
                {emailLoggedIn ? (
                  <CheckCircle className="w-16 h-16 text-brand-green stroke-[2]" />
                ) : (
                  <Mail className="w-16 h-16 text-brand-green stroke-[2]" />
                )}
              </div>
              <h3 className="text-brand-light text-xl font-normal leading-8 tracking-tight mb-6">
                {emailLoggedIn ? "Email Connected" : "Connect Email"}
              </h3>
              <Button
                onClick={handleEmailLogin}
                disabled={emailLoggedIn || isLoading}
                className={`w-full ${emailLoggedIn || isLoading ? "btn-primary opacity-50" : "btn-primary"}`}
              >
                {isLoading ? "Loading..." : emailLoggedIn ? "Connected" : "Login with Gmail"}
              </Button>
            </div>

            {/* TMS Login Card */}
            <div className="value-card text-center">
              <div className="flex justify-center mb-6">
                {tmsLoggedIn ? (
                  <CheckCircle className="w-16 h-16 text-brand-green stroke-[2]" />
                ) : (
                  <Database className="w-16 h-16 text-brand-green stroke-[2]" />
                )}
              </div>
              <h3 className="text-brand-light text-xl font-normal leading-8 tracking-tight mb-6">
                {tmsLoggedIn ? "TMS Connected" : "Connect TMS"}
              </h3>
              <Button
                onClick={handleTMSLogin}
                disabled={tmsLoggedIn}
                className={`w-full ${tmsLoggedIn ? "btn-primary opacity-50" : "btn-primary"}`}
              >
                {tmsLoggedIn ? "Connected" : "Login to TMS"}
              </Button>
            </div>

            {/* Telegram Bot Config Card */}
            <div className="value-card text-center">
              <div className="flex justify-center mb-6">
                {telegramBotConfigured ? (
                  <CheckCircle className="w-16 h-16 text-brand-green stroke-[2]" />
                ) : (
                  <MessageCircle className="w-16 h-16 text-brand-green stroke-[2]" />
                )}
              </div>
              <h3 className="text-brand-light text-xl font-normal leading-8 tracking-tight mb-6">
                {telegramBotConfigured ? "Bot Configured" : "Configure Telegram Bot"}
              </h3>
              <Button
                onClick={handleTelegramConfig}
                disabled={telegramBotConfigured}
                className={`w-full ${telegramBotConfigured ? "btn-primary opacity-50" : "btn-primary"}`}
              >
                {telegramBotConfigured ? "Configured" : "Setup Bot"}
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <TelegramBotModal
        isOpen={telegramModalOpen}
        onClose={() => setTelegramModalOpen(false)}
        onBotCreated={handleTelegramBotCreated}
      />
    </div>
  );
};

export default Index;
