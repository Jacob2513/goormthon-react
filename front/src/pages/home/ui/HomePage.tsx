import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  Card,
  HStack,
  Text,
  VStack,
  useTheme,
} from "@vapor-ui/core";
import { HomeIcon } from "@vapor-ui/icons";

type Manifest = {
  name?: string;
  short_name?: string;
};

const fetchManifest = async (): Promise<Manifest> => {
  const response = await fetch("/manifest.json");

  if (!response.ok) {
    throw new Error("Failed to load manifest.json");
  }

  return response.json() as Promise<Manifest>;
};

export function HomePage() {
  const { resolvedTheme, setTheme, mounted } = useTheme();
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["manifest"],
    queryFn: fetchManifest,
    staleTime: 1000 * 60,
  });

  const currentThemeLabel = mounted ? (resolvedTheme ?? "system") : "loading";

  return (
    <Box
      render={<main />}
      $css={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "$400",
      }}
    >
      <Card.Root
        $css={{
          width: "min(680px, 100%)",
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Card.Body>
          <VStack $css={{ gap: "$200" }}>
            <VStack $css={{ gap: "$050" }}>
              <Text typography="body3" foreground="primary-100">
                Vite + React + TypeScript + TanStack Query
              </Text>
              <Text render={<h1 />} typography="heading3">
                Vapor UI Base Setup Complete
              </Text>
              <Text typography="body2">
                Current theme: {currentThemeLabel}
              </Text>
            </VStack>

            {isLoading ? <Text typography="body2">manifest.json loading...</Text> : null}
            {isError ? (
              <Text typography="body2" foreground="danger-100">
                {(error as Error).message}
              </Text>
            ) : null}
            {!isLoading && !isError ? (
              <Text typography="body2">
                Loaded app name:{" "}
                <Box render={<strong />}>
                  {data?.name ?? data?.short_name ?? "N/A"}
                </Box>
              </Text>
            ) : null}

            <HStack
              $css={{
                gap: "$150",
                flexWrap: "wrap",
              }}
            >
              <Button onClick={() => refetch()} disabled={isFetching}>
                <HStack
                  $css={{
                    gap: "$100",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon size={16} aria-hidden="true" />
                  <span>{isFetching ? "Refreshing..." : "Refetch"}</span>
                </HStack>
              </Button>
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                disabled={!mounted}
              >
                {resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"}
              </Button>
            </HStack>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
