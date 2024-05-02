import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Modal from "./Modal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Modal />
  </StrictMode>
);
