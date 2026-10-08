import { renderToString } from "react-dom/server";
import App, { type Page } from "./app/App";

export function render(page: Page) {
  return renderToString(<App page={page} />);
}
