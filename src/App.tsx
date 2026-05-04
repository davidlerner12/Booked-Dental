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
import {
  blogListLoader,
  blogPostLoader,
  blogPostStaticPaths,
} from "./pages/blog-loaders";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThankYouPage from "./pages/ThankYouPage";
import ChatWidget from "./components/ChatWidget";

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

/** Syncs i18n language + <html> dir/lang — forced to Hebrew */
function LanguageSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== "he") {
      i18n.changeLanguage("he");
    }
    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";
  }, [i18n]);

  return null;
}

/** Redirects any /en/* path to /he/* */
function EnglishRedirect() {
  const location = useLocation();
  const pathWithoutLang = location.pathname.replace(/^\/en/, "") || "";
  return <Navigate to={`/he${pathWithoutLang}${location.search}`} replace />;
}

const AppLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouteTracker />
      <ScrollToTop />
      <LanguageSync />
      <Outlet />
      <ChatWidget />
    </TooltipProvider>
  </QueryClientProvider>
);

/** Redirect bare "/" to "/he" */
function RootRedirect() {
  return <Navigate to="/he" replace />;
}

const langChildren: RouteRecord[] = [
  { index: true, element: <Index /> },
  { path: "book", element: <BookingPage /> },
  { path: "blog", element: <Blog />, loader: blogListLoader },
  {
    path: "blog/:slug",
    element: <BlogPost />,
    loader: blogPostLoader,
    getStaticPaths: blogPostStaticPaths,
  },
  { path: "privacy", element: <PrivacyPolicy /> },
  { path: "thank-you", element: <ThankYouPage /> },
  { path: "*", element: <NotFound /> },
];

export const routes: RouteRecord[] = [
  { path: "/", element: <RootRedirect /> },
  { path: "/en/*", element: <EnglishRedirect /> },
  {
    path: "/:lang",
    element: <AppLayout />,
    children: langChildren,
  },
];
