import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home/ui/HomePage";
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
        path: "tokens",
        element: <TokensPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
