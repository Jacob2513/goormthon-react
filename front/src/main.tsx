import React from "react";
import ReactDOM from "react-dom/client";
import "@vapor-ui/core/styles.css";
import "@/app/styles/tokens.css";
import App from "@/app/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
