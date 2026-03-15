import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

const AppLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouteTracker />
      <ScrollToTop />
      <Outlet />
      <ChatWidget />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
      { path: "*", element: <NotFound /> },
    ],
  },
];
