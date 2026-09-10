import React from "react";
import Sidebar from "./sidebar";
import TopNavbar from "./TopNavbar";
import "../../styles/AppLayout.css";
import { Routes, Route,Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Project from "../../pages/Project";

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
