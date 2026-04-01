import { useQuery } from "@tanstack/react-query";
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

  return (
    <main className="app">
      <section className="card">
        <p className="eyebrow">Vite + React + TypeScript + TanStack Query</p>
        <h1>Front Re-Setup Complete</h1>
        {isLoading ? <p>manifest.json loading...</p> : null}
        {isError ? <p className="error">{(error as Error).message}</p> : null}
        {!isLoading && !isError ? (
          <p className="result">
            Loaded app name: <strong>{data?.name ?? data?.short_name ?? "N/A"}</strong>
          </p>
        ) : null}
        <button type="button" onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </section>
    </main>
  );
}

export default App;
