import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { RouteRecord } from "vite-react-ssg";
import { trackPageView } from "@/lib/analytics";
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutPage from "./pages/AboutPage";
import ProofPage from "./pages/ProofPage";
import {
  blogListLoader,
  blogPostLoader,
} from "./pages/blog-loaders";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThankYouPage from "./pages/ThankYouPage";
import ChatWidget from "./components/ChatWidget";
import StickyMarketCTA from "./components/StickyMarketCTA";
import ServicePage from "./pages/ServicePage";

const queryClient = new QueryClient();

function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Syncs i18n language + <html> dir/lang from the :lang URL param */
function LanguageSync() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const validLang = lang === "he" ? "he" : "en";

  if (i18n.language !== validLang) {
    void i18n.changeLanguage(validLang);
  }

  useEffect(() => {
    document.documentElement.lang = validLang;
    document.documentElement.dir = validLang === "he" ? "rtl" : "ltr";
  }, [validLang]);

  return null;
}

const AppLayout = () => {
  const { lang } = useParams<{ lang: string }>();

  if (lang !== "en" && lang !== "he") {
    return <Navigate to="/en" replace />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouteTracker />
        <ScrollToTop />
        <LanguageSync />
        <Outlet />
        <StickyMarketCTA />
        <ChatWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

/** Redirect bare "/" to "/en" */
function RootRedirect() {
  return <Navigate to="/en" replace />;
}

const langChildren: RouteRecord[] = [
  { index: true, element: <Index /> },
  { path: "book", element: <BookingPage /> },
  { path: "services/:serviceSlug", element: <ServicePage /> },
  { path: "blog", element: <Blog />, loader: blogListLoader },
  {
    path: "blog/:slug",
    element: <BlogPost />,
    loader: blogPostLoader,
  },
  { path: "about", element: <AboutPage /> },
  { path: "proof", element: <ProofPage /> },
  { path: "privacy", element: <PrivacyPolicy /> },
  { path: "thank-you", element: <ThankYouPage /> },
  { path: "*", element: <NotFound /> },
];

export const routes: RouteRecord[] = [
  { path: "/", element: <RootRedirect /> },
  {
    path: "/:lang",
    element: <AppLayout />,
    children: langChildren,
  },
];
