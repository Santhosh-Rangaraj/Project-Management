import React from "react";
import Sidebar from "./sidebar";
import TopNavbar from "./TopNavbar";
import "../../styles/AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <TopNavbar></TopNavbar>
        <h1>Project Hub</h1>
      </main>
    </div>
  );
};

export default AppLayout;
