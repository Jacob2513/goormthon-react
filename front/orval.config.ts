import { defineConfig } from "orval";
import { config } from "dotenv";

config({ path: ".env.local" });

const specUrl = process.env.VITE_OPENAPI_SPEC_URL;

if (!specUrl) {
  throw new Error(
    "VITE_OPENAPI_SPEC_URL is required. Add it to .env.local (see .env.example).",
  );
}

export default defineConfig({
  api: {
    input: specUrl,
    output: {
      mode: "split",
      target: "./src/api/generated",
      baseUrl: "",
      client: "react-query",
      mock: false,
      override: {
        mutator: {
          path: "./src/api/fetcher.ts",
          name: "customFetch",
        },
      },
    },
  },
});
