
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const navigate = useNavigate();

  const backendUrl = "http://localhost:8000"; // Your FastAPI backend URL

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
    window.location.href = `${backendUrl}/authorize`;
  };

  const handleDefaultLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthMessage("Logging in...");
    
    // For now, just redirect regardless of input
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
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
            <p className="mt-4 text-lg text-brand-light">
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
            {isLoading && authMessage.includes("Google") ? "Redirecting..." : "Login with Gmail"}
          </Button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand-green/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-brand-dark px-2 text-brand-light/60">Or continue with</span>
          </div>
        </div>

        {/* Default Login Form */}
        <form onSubmit={handleDefaultLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-brand-light">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-brand-card border-brand-green/20 text-brand-light"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-brand-light">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 bg-brand-card border-brand-green/20 text-brand-light"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary"
          >
            {isLoading && !authMessage.includes("Google") ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
