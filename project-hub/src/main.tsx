import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";

createRoot(document.getElementById("root")!).render(
  <ProjectProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProjectProvider>,
);
