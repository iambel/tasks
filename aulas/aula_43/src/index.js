import { createRoot } from "react-dom/client";
import { App } from "./app";

const cpntainer = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
