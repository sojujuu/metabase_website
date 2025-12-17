import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import DashboardPage from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { GoogleLogin } from "@/components/GoogleLogin";

const queryClient = new QueryClient();

type GoogleUser = {
  email: string;
  name: string;
  picture?: string;
  sub: string; // unique Google user ID
};

const STORAGE_KEY = "airweather_google_user";

// Auto-scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

// App routes
function AppShell() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => {
  const [user, setUser] = useState<GoogleUser | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as GoogleUser) : null;
    } catch {
      return null;
    }
  });

  const isLoggedIn = useMemo(() => !!user, [user]);

  const handleLogin = (payload: GoogleUser) => {
    setUser(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  if (!isLoggedIn) {
    return <GoogleLogin onLogin={handleLogin} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppShell />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;