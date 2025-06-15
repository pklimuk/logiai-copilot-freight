import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";
import { Link } from "lucide-react";

const mcp_api = "http://localhost:8000";
const HARDCODED_BOT_LINK = "https://t.me/your_bot_name"; // Replace with your actual bot link

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
  const [botName, setBotName] = useState<string>("");

  // Show detail view if props are set OR if local state has bot data
  const showBotDetails = !!(propBotLink && propBotName) || !!(botLink && botName);

  useEffect(() => {
    // If receiving bot info as props, ensure the local state matches for display
    if (propBotLink) setBotLink(propBotLink);
    else setBotLink("");
    if (propBotName) {
      setBotNameInput(propBotName);
      setBotName(propBotName);
    } else {
      setBotNameInput("");
      setBotName("");
    }
    setIsCreating(false);
  }, [isOpen, propBotLink, propBotName]);

  // Function to call external API to create Telegram bot
  async function createTelegramBot(botName: string): Promise<boolean> {
    const apiUrl = mcp_api + "/set_tg_bot_name/" + encodeURIComponent(botName);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: botName }),
    });
    
    // Only care about HTTP status, not the response data
    return response.status === 200;
  }

  const handleCreateBot = async () => {
    if (!botNameInput.trim()) return;

    setIsCreating(true);
    try {
      // Call the external API to create the bot
      const success = await createTelegramBot(botNameInput);
      
      if (success) {
        // Update local state to show details view with hardcoded link
        setBotLink(HARDCODED_BOT_LINK);
        setBotName(botNameInput);
        setIsCreating(false);
        
        // Notify parent component with hardcoded data
        onBotCreated({ name: botNameInput, link: HARDCODED_BOT_LINK });
        
        // Modal will now show details view due to updated local state
      } else {
        setIsCreating(false);
        console.error("API call failed - non-200 response");
      }
    } catch (error) {
      setIsCreating(false);
      console.error("API call failed:", error);
    }
  };

  const handleClose = () => {
    setBotNameInput("");
    setBotLink("");
    setBotName("");
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
        {showBotDetails ? (
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
                  {propBotName || botName}
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
