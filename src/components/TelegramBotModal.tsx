
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";
import { Link } from "lucide-react";

interface TelegramBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBotCreated: (botData: { name: string; link: string }) => void;
  botName?: string;
  botLink?: string;
}

const TelegramBotModal = ({
  isOpen,
  onClose,
  onBotCreated,
  botName: propBotName,
  botLink: propBotLink,
}: TelegramBotModalProps) => {
  const [botNameInput, setBotNameInput] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [botLink, setBotLink] = useState<string>("");

  // Show detail view if props are set
  const showBotDetails = !!propBotLink && !!propBotName;

  useEffect(() => {
    // If receiving bot info as props, ensure the local state matches for display
    if (propBotLink) setBotLink(propBotLink);
    else setBotLink("");
    if (propBotName) setBotNameInput(propBotName);
    else setBotNameInput("");
    setIsCreating(false);
  }, [isOpen, propBotLink, propBotName]);

  const handleCreateBot = async () => {
    if (!botNameInput.trim()) return;

    setIsCreating(true);

    setTimeout(() => {
      const generatedLink = `https://t.me/${botNameInput.toLowerCase().replace(/\s+/g, "_")}_bot`;
      setBotLink(generatedLink);
      setIsCreating(false);

      onBotCreated({ name: botNameInput, link: generatedLink });
      // Modal remains open to show details after creation
    }, 2000);
  };

  const handleClose = () => {
    setBotNameInput("");
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
        {(botLink || showBotDetails) ? (
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold text-brand-light mb-2">Bot Created Successfully!</h3>
              <p className="text-brand-light/80 mb-4">
                Your Telegram bot is ready to use.
              </p>
              <div className="bg-brand-card border border-brand-green/20 rounded-lg p-4">
                <Label className="text-sm text-brand-light/80 flex items-center gap-2">
                  <Link className="inline w-4 h-4 mr-1 text-brand-green" />
                  Bot Link:
                </Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={botLink || propBotLink || ""}
                    readOnly
                    className="bg-brand-dark border-brand-green/20 text-brand-light"
                  />
                  <Button
                    onClick={() => navigator.clipboard.writeText(botLink || propBotLink || "")}
                    variant="ghost"
                    size="sm"
                    className="text-brand-green hover:bg-brand-green/20"
                  >
                    Copy
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <Label className="text-sm text-brand-light/80">
                  Bot Name:
                </Label>
                <div className="mt-1 text-brand-light font-semibold">
                  {propBotName || botNameInput}
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
                  value={botNameInput}
                  onChange={(e) => setBotNameInput(e.target.value)}
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
                disabled={!botNameInput.trim() || isCreating}
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
