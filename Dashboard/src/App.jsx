// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import KalingaAuthSystem from "./pages/KalingaAuthSystem";
import Dashboard from "./pages/Dashboard";
import EmergencySOS from "./pages/EmergencySOS";
import TriageSystem from "./pages/TriageSystem";
import OnlineTraining from "./pages/OnlineTraining";
import Modules from "./pages/Online/Modules";
import Certifications from "./pages/Online/Certifications";
import Settings from "./pages/Settings";
import IncidentLogs from "./pages/IncidentLogs";   // ✅ make sure this file exists

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<KalingaAuthSystem />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/incident-logs"   // ✅ NEW ROUTE
          element={
            <PrivateRoute>
              <IncidentLogs />
            </PrivateRoute>
          }
        />

        <Route
          path="/emergency-sos"
          element={
            <PrivateRoute>
              <EmergencySOS />
            </PrivateRoute>
          }
        />

        <Route
          path="/triage-system"
          element={
            <PrivateRoute>
              <TriageSystem />
            </PrivateRoute>
          }
        />

        <Route
          path="/online-training"
          element={
            <PrivateRoute>
              <OnlineTraining />
            </PrivateRoute>
          }
        />

        <Route
          path="/modules"
          element={
            <PrivateRoute>
              <Modules />
            </PrivateRoute>
          }
        />

        <Route
          path="/certifications"
          element={
            <PrivateRoute>
              <Certifications />
            </PrivateRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
