import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@vapor-ui/core";
import { queryClient } from "@/api/query-client";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
