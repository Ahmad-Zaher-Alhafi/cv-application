import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Content from "./components/content";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Content />
  </StrictMode>
);
