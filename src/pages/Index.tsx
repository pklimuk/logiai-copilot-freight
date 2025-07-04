
import { useState } from "react";
import { Database, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TelegramBotModal from "@/components/TelegramBotModal";

const Index = () => {
  const [tmsLoggedIn, setTmsLoggedIn] = useState(false);
  const [telegramModalOpen, setTelegramModalOpen] = useState(false);
  const [telegramBotConfigured, setTelegramBotConfigured] = useState(false);
  const [telegramBotName, setTelegramBotName] = useState<string | null>(null);
  const [telegramBotLink, setTelegramBotLink] = useState<string | null>(null);
  const [emailLoggedIn] = useState(true); // Assume logged in since they reached this page

  const handleTMSLogin = () => {
    console.log("TMS login clicked");
    setTimeout(() => {
      setTmsLoggedIn(true);
    }, 1000);
  };

  const handleTelegramConfig = () => {
    setTelegramModalOpen(true);
  };

  const handleTelegramBotCreated = (botData: { name: string; link: string }) => {
    setTelegramBotName(botData.name);
    setTelegramBotLink(botData.link);
    setTelegramBotConfigured(true);
    setTelegramModalOpen(true); // Keep modal open to show details after creation
  };

  const handleConfiguredBotClick = () => {
    // Should open modal with stored bot data
    setTelegramModalOpen(true);
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
            <div className="mt-6 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-green" />
              <span className="text-brand-green">Email Connected</span>
            </div>
          </section>

          {/* Setup Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
            <div
              className={`value-card text-center ${telegramBotConfigured ? "cursor-pointer hover:ring-2 ring-brand-green/40 transition" : ""}`}
              onClick={telegramBotConfigured ? handleConfiguredBotClick : undefined}
              aria-disabled={!telegramBotConfigured}
            >
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
              {telegramBotConfigured && (
                <div className="mt-2 text-brand-green/80 text-sm">
                  Click to view details
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <TelegramBotModal
        isOpen={telegramModalOpen}
        onClose={() => setTelegramModalOpen(false)}
        onBotCreated={({ name, link }) => handleTelegramBotCreated({ name, link })}
        botName={telegramBotName ?? undefined}
        botLink={telegramBotLink ?? undefined}
      />
    </div>
  );
};

export default Index;
