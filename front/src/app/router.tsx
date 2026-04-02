import { createBrowserRouter } from "react-router-dom";
import { ComponentsPage } from "@/pages/components/ui/ComponentsPage";
import { HomePage } from "@/pages/home/ui/HomePage";
import { MentorPreviewPage } from "@/pages/mentor-preview/ui/MentorPreviewPage";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
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
