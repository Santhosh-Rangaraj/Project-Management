// import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Kanban from "./pages/Kanban";
import Settings from "./pages/Settings";
import ProjectsPage from "./pages/Project";
import Team from "./pages/Team";
import Activity from "./pages/Activity";
import Notification from "./pages/Notification";
import NotFoundPage from "./pages/NotFound";
import ViewProject from "./components/Projects/ViewProject";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/kanban" element={<Kanban></Kanban>} />
          <Route path="/team" element={<Team></Team>}></Route>
          <Route path="/activity" element={<Activity></Activity>}></Route>
          <Route
            path="/notification"
            element={<Notification></Notification>}
          ></Route>
          <Route path="/projects/view/:id" element={<ViewProject />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
