import React, { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/topbar.css";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const menuRef = useRef(null);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  // Example notification data (can later come from API)
  const notifications = [
    {
      id: 1,
      title: "New Report Submitted",
      message: "ER Unit filed a new triage report for review.",
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Personnel Update",
      message: "Nurse Clara has been reassigned to Center 3.",
      time: "15 mins ago",
    },
    {
      id: 3,
      title: "Training Module Released",
      message: "New CPR Certification module is now available.",
      time: "1 hour ago",
    },
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) &&
        (notifRef.current && !notifRef.current.contains(event.target))
      ) {
        setMenuOpen(false);
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="topbar-container">
      <div className="topbar">
        <h2 className="welcome-text">Welcome Back, John!</h2>

        <div className="topbar-right">
          {/* Search Box */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          {/* Notifications */}
          <div className="notification-menu" ref={notifRef}>
            <div className="notification-wrapper">
              <button
                className="icon-button"
                onClick={() => {
                  setNotifOpen((prev) => !prev);
                  setMenuOpen(false);
                }}
              >
                <FaBell />
                {notifications.length > 0 && (
                  <span className="notification-badge">
                    {notifications.length}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    className="notification-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="notif-header">Notifications</h4>

                    <ul className="notif-list">
                      {notifications.map((notif) => (
                        <li key={notif.id} className="notif-item">
                          <strong>{notif.title}</strong>
                          <p>{notif.message}</p>
                          <span className="notif-time">{notif.time}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="notif-footer">
                      <button className="clear-btn">Mark all as read</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* User Dropdown */}
          <div className="user-menu" ref={menuRef}>
            <button
              className="icon-button"
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setNotifOpen(false);
              }}
            >
              <FaUserCircle />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul>
                    <li
                      onClick={() => {
                        navigate("/profile");
                        setMenuOpen(false);
                      }}
                    >
                      <FaUser className="menu-icon" /> Profile
                    </li>
                    <li
                      onClick={() => {
                        navigate("/settings");
                        setMenuOpen(false);
                      }}
                    >
                      <FaCog className="menu-icon" /> Settings
                    </li>
                    <li
                      onClick={() => {
                        navigate("/grades");
                        setMenuOpen(false);
                      }}
                    >
                      <FaGraduationCap className="menu-icon" /> Grades
                    </li>
                    <li className="logout" onClick={handleLogout}>
                      <FaSignOutAlt className="menu-icon" /> Logout
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
