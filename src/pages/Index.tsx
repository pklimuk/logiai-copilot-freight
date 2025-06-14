
import { useState } from "react";
import { Mail, Database, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import TelegramBotModal from "@/components/TelegramBotModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [emailLoggedIn, setEmailLoggedIn] = useState(false);
  const [tmsLoggedIn, setTmsLoggedIn] = useState(false);
  const [telegramModalOpen, setTelegramModalOpen] = useState(false);
  const [telegramBotConfigured, setTelegramBotConfigured] = useState(false);

  const handleEmailLogin = () => {
    console.log("Email login clicked");
    // Simulate login process
    setTimeout(() => {
      setEmailLoggedIn(true);
    }, 1000);
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
      <Header />
      
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
                disabled={emailLoggedIn}
                className={`w-full ${emailLoggedIn ? 'btn-primary opacity-50' : 'btn-primary'}`}
              >
                {emailLoggedIn ? "Connected" : "Login with Gmail"}
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
                className={`w-full ${tmsLoggedIn ? 'btn-primary opacity-50' : 'btn-primary'}`}
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
                className={`w-full ${telegramBotConfigured ? 'btn-primary opacity-50' : 'btn-primary'}`}
              >
                {telegramBotConfigured ? "Configured" : "Setup Bot"}
              </Button>
            </div>
          </section>

          {/* Status Section */}
          {(emailLoggedIn || tmsLoggedIn || telegramBotConfigured) && (
            <section className="bg-brand-card backdrop-blur-sm border border-brand-green/20 rounded-2xl p-8">
              <h2 className="text-brand-light text-2xl font-bold mb-6">Connection Status</h2>
              <div className="space-y-4">
                {emailLoggedIn && (
                  <div className="flex items-center gap-3 text-brand-light">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    <span>Email service connected successfully</span>
                  </div>
                )}
                {tmsLoggedIn && (
                  <div className="flex items-center gap-3 text-brand-light">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    <span>TMS system connected successfully</span>
                  </div>
                )}
                {telegramBotConfigured && (
                  <div className="flex items-center gap-3 text-brand-light">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    <span>Telegram bot configured successfully</span>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      
      <TelegramBotModal
        isOpen={telegramModalOpen}
        onClose={() => setTelegramModalOpen(false)}
        onBotCreated={handleTelegramBotCreated}
      />
    </div>
  );
};

export default Index;
