import Sidebar from "./sidebar";
import TopNavbar from "./TopNavbar";
import "../../styles/AppLayout.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <TopNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
