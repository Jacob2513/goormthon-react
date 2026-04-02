import {
  QueryClient,
} from "@tanstack/react-query";
import { isApiError } from "./fetcher";

const shouldRetry = (failureCount: number, error: unknown) => {
  if (isApiError(error)) {
    if (error.status >= 400 && error.status < 500) {
      return false;
    }
  }

  return failureCount < 1;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetry,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
