
  import { hydrateRoot } from "react-dom/client";
  import App, { type Page } from "./app/App.tsx";
  import "./styles/index.css";

  const rootEl = document.getElementById("root")!;
  hydrateRoot(rootEl, <App page={(rootEl.dataset.page ?? "home") as Page} />);
  