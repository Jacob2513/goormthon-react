import { createBrowserRouter } from "react-router-dom";
import { ComponentsPage } from "@/pages/components/ui/ComponentsPage";
import { HomePage } from "@/pages/home/ui/HomePage";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { MatchingPage } from "@/pages/matching/ui/MatchingPage";
import { MentorPreviewPage } from "@/pages/mentor-preview/ui/MentorPreviewPage";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { OnboardingPage } from "@/pages/onboarding/ui/OnboardingPage";
import { TokensPage } from "@/pages/tokens/ui/TokensPage";
import { ROUTES } from "@/shared/config/routes";
import { RootErrorBoundary } from "@/shared/ui/errors/RootErrorBoundary";
import { AppLayout } from "@/shared/ui/layouts/AppLayout";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <AppLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.matching.slice(1),
        element: <MatchingPage />,
      },
      {
        path: ROUTES.onboarding.slice(1),
        element: <OnboardingPage />,
      },
      {
        path: ROUTES.login.slice(1),
        element: <LoginPage />,
      },
      {
        path: ROUTES.components.slice(1),
        element: <ComponentsPage />,
      },
      {
        path: ROUTES.tokens.slice(1),
        element: <TokensPage />,
      },
      {
        path: ROUTES.mentorPreview.slice(1),
        element: <MentorPreviewPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
