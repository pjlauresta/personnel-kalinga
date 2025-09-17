// src/components/Topbar.jsx
import React from "react";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      {/* === Top Row === */}
      <div className="topbar">
        <h2 className="welcome-text">Welcome Back, John!</h2>

        <div className="topbar-right">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <button className="icon-button">
            <FaBell />
          </button>
          <button className="icon-button">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
