// src/pages/Profile.jsx
import React from "react";
import Layout from "../layouts/Layout";
import "../styles/profile.css";

const Profile = () => {
  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-grid">
          {/* Profile Card */}
          <div className="card profile-card">
            <button className="edit-btn">✏️</button>

            {/* Wrap avatar + info side by side */}
            <div className="profile-header">
              <div className="profile-avatar-large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="60"
                  height="60"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                </svg>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">John Santos</h3>
                <p><span className="label">Role:</span> Medical Responder</p>
                <p><span className="label">Registered:</span> September 15, 2025</p>
                <p><span className="label">ID Number:</span> KAL-2025-0342</p>

                <div className="profile-icons">
                  <i className="fab fa-linkedin"></i>
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Certifications Card */}
          <div className="card status-card">
            <span className="status-badge active">● Active - On Duty</span>

            <h4>Active Certifications:</h4>
            <ul>
              <li>
                <strong>Basic Life Support</strong>
                <div>Valid until Aug 2026</div>
              </li>
              <li>
                <strong>Disaster Risk Reduction Training</strong>
                <div>Valid until Dec 2025</div>
              </li>
            </ul>

            <h4>Emergency Contact:</h4>
            <div className="contact-info">
              <p><strong>Maria Santos</strong></p>
              <p>+63 922 888 1111</p>
            </div>
          </div>
        </div>

        <div className="activity-overview">
  <h3>Activity Overview</h3>

  {/* Recent Logs */}
  <div className="card recent-logs">
    <h4>Recent Logs</h4>
    <ul className="timeline">
      <li>
        <span className="dot"></span>
        <div>
          <strong>Flood Response, Quezon City</strong>
          <p>Sept 20, 2025</p>
        </div>
      </li>
      <li>
        <span className="dot"></span>
        <div>
          <strong>Earthquake Drill, Pasig</strong>
          <p>Sept 12, 2025</p>
        </div>
      </li>
    </ul>
  </div>

  {/* Training Progress */}
  <div className="card training-progress">
    <h4>Training Progress</h4>
    <ul className="timeline">
      <li>
        <span className="dot"></span>
        <div>
          <strong>First Aid Basics</strong>
          <p>Completed</p>
        </div>
      </li>
      <li>
        <span className="dot"></span>
        <div>
          <strong className="in-progress">Mass Casualty Management</strong>
          <p>In Progress - 60%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
        </div>
      </li>
      <li>
        <span className="dot"></span>
        <div>
          <strong className="locked">Advanced Trauma Care</strong>
          <p>Locked</p>
        </div>
      </li>
    </ul>
  </div>
</div>


      </div>
    </Layout>
  );
};

export default Profile;
