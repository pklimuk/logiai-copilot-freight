import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";

interface TelegramBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBotCreated: (botData: { name: string; profilePicture: string }) => void;
}

const TelegramBotModal = ({ isOpen, onClose, onBotCreated }: TelegramBotModalProps) => {
  const [botName, setBotName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [botLink, setBotLink] = useState("");

  const handleCreateBot = async () => {
    if (!botName.trim()) return;
    
    setIsCreating(true);
    
    // Simulate backend API call
    setTimeout(() => {
      const generatedLink = `https://t.me/${botName.toLowerCase().replace(/\s+/g, '_')}_bot`;
      setBotLink(generatedLink);
      setIsCreating(false);
      
      // Call onBotCreated immediately after link is generated
      onBotCreated({ name: botName, profilePicture: "" });
    }, 2000);
  };

  const handleClose = () => {
    setBotName("");
    setBotLink("");
    setIsCreating(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-brand-dark border-brand-green/20 text-brand-light max-w-md">
        <DialogHeader>
          <DialogTitle className="text-brand-light text-xl flex items-center gap-2">
            <Bot className="w-6 h-6 text-brand-green" />
            Configure Telegram Bot
          </DialogTitle>
        </DialogHeader>
        
        {botLink ? (
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold text-brand-light mb-2">Bot Created Successfully!</h3>
              <p className="text-brand-light/80 mb-4">Your Telegram bot is ready to use.</p>
              <div className="bg-brand-card border border-brand-green/20 rounded-lg p-4">
                <Label className="text-sm text-brand-light/80">Bot Link:</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={botLink}
                    readOnly
                    className="bg-brand-dark border-brand-green/20 text-brand-light"
                  />
                  <Button
                    onClick={() => navigator.clipboard.writeText(botLink)}
                    variant="ghost"
                    size="sm"
                    className="text-brand-green hover:bg-brand-green/20"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="botName" className="text-brand-light">Bot Name</Label>
                <Input
                  id="botName"
                  value={botName}
                  onChange={(e) => setBotName(e.target.value)}
                  placeholder="Enter bot name"
                  className="bg-brand-dark border-brand-green/20 text-brand-light mt-2"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={handleClose}
                variant="ghost"
                className="flex-1 text-brand-light/80 hover:bg-brand-card"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateBot}
                disabled={!botName.trim() || isCreating}
                className="flex-1 btn-primary"
              >
                {isCreating ? "Creating..." : "Create Bot"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TelegramBotModal;
