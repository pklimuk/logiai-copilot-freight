
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const navigate = useNavigate();

  const auth_api = "http://localhost:8099"; // Your FastAPI backend URL

  // Check for OAuth callback parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    if (code) {
      // OAuth callback detected, redirect to dashboard
      setAuthMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }, [navigate]);

  const handleGmailLogin = () => {
    setIsLoading(true);
    setAuthMessage("Redirecting to Google login...");
    // Redirect to backend's /authorize endpoint
    window.location.href = `${auth_api}/authorize`;
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-brand-light text-3xl font-bold mb-2">
            Welcome to 3PL Copilot
          </h1>
          <p className="text-brand-light/80">
            Sign in to access your logistics dashboard
          </p>
          {authMessage && (
            <p className="mt-4 text-lg text-brand-light/70">
              {authMessage}
            </p>
          )}
        </div>

        {/* Gmail Login Button */}
        <div className="mb-6">
          <Button
            onClick={handleGmailLogin}
            disabled={isLoading}
            className="w-full btn-primary flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5" />
            {isLoading ? "Redirecting..." : "Login with Gmail"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
