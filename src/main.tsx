
  import { createRoot } from "react-dom/client";
  import App, { type Page } from "./app/App.tsx";
  import "./styles/index.css";

  const rootEl = document.getElementById("root")!;
  // Replaces the prerendered markup with the interactive app
  createRoot(rootEl).render(<App page={(rootEl.dataset.page ?? "home") as Page} />);
  