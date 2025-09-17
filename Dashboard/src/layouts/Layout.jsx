// src/Layout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/personnel-style.css";


const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main dashboard-main">
        <Topbar />
        
        {/* Ito yung laman ng bawat page */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
