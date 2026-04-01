import { useQuery } from "@tanstack/react-query";
import { Button, Card, useTheme } from "@vapor-ui/core";
import { HomeIcon } from "@vapor-ui/icons";
import "./App.css";

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

function App() {
  const { resolvedTheme, setTheme, mounted } = useTheme();
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["manifest"],
    queryFn: fetchManifest,
    staleTime: 1000 * 60,
  });

  const currentThemeLabel = mounted ? resolvedTheme ?? "system" : "loading";

  return (
    <main className="app">
      <Card.Root className="card">
        <p className="eyebrow">Vite + React + TypeScript + TanStack Query</p>
        <h1>Vapor UI Base Setup Complete</h1>
        <p className="themeStatus">Current theme: {currentThemeLabel}</p>
        {isLoading ? <p>manifest.json loading...</p> : null}
        {isError ? <p className="error">{(error as Error).message}</p> : null}
        {!isLoading && !isError ? (
          <p className="result">
            Loaded app name: <strong>{data?.name ?? data?.short_name ?? "N/A"}</strong>
          </p>
        ) : null}

        <div className="actions">
          <Button onClick={() => refetch()} disabled={isFetching}>
            <span className="buttonContent">
              <HomeIcon size={16} aria-hidden="true" />
              {isFetching ? "Refreshing..." : "Refetch"}
            </span>
          </Button>
          <Button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            disabled={!mounted}
          >
            {resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"}
          </Button>
        </div>
      </Card.Root>
    </main>
  );
}

export default App;
