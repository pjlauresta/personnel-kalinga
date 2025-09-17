// src/pages/Settings.jsx
import React from "react";
import Layout from "../layouts/Layout";
import "../styles/personnel-style.css";
import { FaUserShield, FaUser, FaBell, FaCogs, FaLanguage, FaAdjust, FaLock } from "react-icons/fa";

const Settings = () => {
  return (
    <Layout>
      <div className="settings-page">
        {/* Search bar */}
        <div className="settings-search">
          <input
            type="text"
            placeholder="Find the setting you need"
          />
        </div>

        {/* Account and Security */}
        <div className="settings-section">
          <h3><FaUserShield className="icon" /> Account and Security</h3>
          <ul>
            <li>Personal Information</li>
            <li>Login Devices</li>
          </ul>
        </div>

        {/* Professional Information */}
        <div className="settings-section">
          <h3><FaUser className="icon" /> Professional Information</h3>
          <ul>
            <li>Role and Position</li>
            <li>Availability</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="settings-section">
          <h3><FaBell className="icon" /> Notifications</h3>
          <ul>
            <li>Notification Type</li>
            <li>Priority Alerts</li>
            <li>Mute/Snooze</li>
            <li>Reminders</li>
          </ul>
        </div>

        {/* System Preferences */}
        <div className="settings-section">
          <h3><FaCogs className="icon" /> System Preferences</h3>
          <ul>
            <li>Language</li>
            <li>Theme</li>
          </ul>
        </div>

        {/* Privacy and Data */}
        <div className="settings-section">
          <h3><FaLock className="icon" /> Privacy and Data</h3>
          <ul>
            <li>Visibility Settings</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
