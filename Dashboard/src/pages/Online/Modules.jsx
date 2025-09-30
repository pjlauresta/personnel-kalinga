// src/pages/Online/Modules.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer";
import "../../styles/personnel-style.css";

// Import icons from react-icons
import {
  FaBriefcaseMedical,
  FaUserNurse,
  FaAmbulance,
  FaCapsules,
  FaHeartbeat,
  FaBrain,
  FaVirus,
  FaSyringe,
  FaMobileAlt,
  FaUsers,
  FaBalanceScale,
  FaCertificate,
  FaDownload,
} from "react-icons/fa";

// Full Category Filters
const FILTERS = [
  "All",
  "Emergency Medicine & Trauma Care",
  "Nursing & Patient Care",
  "Disaster Response & Management",
  "Pharmacology & Medication Management",
  "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)",
  "Mental Health & Psychological First Aid",
  "Infectious Disease Control & Public Health",
  "Surgical & Critical Care Skills",
  "Telemedicine & Digital Health Tools",
  "Community Health & Outreach",
  "Medical Ethics & Legal Standards",
  "Continuing Professional Development & Licensing",
];

// Category → Icon mapping
const CATEGORY_ICONS = {
  "Emergency Medicine & Trauma Care": <FaAmbulance size={28} color="#007bff" />,
  "Nursing & Patient Care": <FaUserNurse size={28} color="#28a745" />,
  "Disaster Response & Management": <FaBriefcaseMedical size={28} color="#dc3545" />,
  "Pharmacology & Medication Management": <FaCapsules size={28} color="#6f42c1" />,
  "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)": (
    <FaHeartbeat size={28} color="#e83e8c" />
  ),
  "Mental Health & Psychological First Aid": <FaBrain size={28} color="#20c997" />,
  "Infectious Disease Control & Public Health": <FaVirus size={28} color="#fd7e14" />,
  "Surgical & Critical Care Skills": <FaSyringe size={28} color="#17a2b8" />,
  "Telemedicine & Digital Health Tools": <FaMobileAlt size={28} color="#343a40" />,
  "Community Health & Outreach": <FaUsers size={28} color="#ffc107" />,
  "Medical Ethics & Legal Standards": <FaBalanceScale size={28} color="#6c757d" />,
  "Continuing Professional Development & Licensing": <FaCertificate size={28} color="#6610f2" />,
};

// Expanded Courses (IDs must match CourseDetails.jsx)
const COURSES = [
  { id: 1, title: "Professional Development Training Certificate (PDTC)", category: "Recently Viewed Courses", type: "Continuing Professional Development & Licensing" },
  { id: 2, title: "Emergency Management Certificate Program", category: "Recently Viewed Courses", type: "Disaster Response & Management" },
  { id: 3, title: "Basic Life Support / Emergency Medical Responder (EMR)", category: "Recently Viewed Courses", type: "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)" },
  { id: 4, title: "Psychological First Aid Basics", category: "Recently Viewed Courses", type: "Mental Health & Psychological First Aid" },
  { id: 5, title: "Hazardous Materials Awareness Training", category: "Most Popular Certificates", type: "Disaster Response & Management" },
  { id: 6, title: "Emergency Shelter Management & Logistics", category: "Most Popular Certificates", type: "Community Health & Outreach" },
  { id: 7, title: "First Aid and CPR Certification", category: "Most Popular Certificates", type: "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)" },
  { id: 8, title: "Pediatric Advanced Life Support (PALS)", category: "Most Popular Certificates", type: "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)" },
  { id: 9, title: "Infectious Disease Control Essentials", category: "Most Popular Certificates", type: "Infectious Disease Control & Public Health" },
  { id: 10, title: "Telemedicine Practices in Modern Healthcare", category: "Most Popular Certificates", type: "Telemedicine & Digital Health Tools" },
  { id: 11, title: "Nursing Care for Post-Operative Patients", category: "Most Popular Certificates", type: "Nursing & Patient Care" },
  { id: 12, title: "Ethics & Legal Issues in Clinical Practice", category: "Most Popular Certificates", type: "Medical Ethics & Legal Standards" },
];

const TABS = ["Courses", "Personal Training Record"];

const Modules = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();

  const filteredCourses = COURSES.filter(
    (course) => selectedFilter === "All" || course.type === selectedFilter
  );

  return (
    <Layout>
      <div className="content">
        {/* Tabs */}
        <div className="tabs">
          {TABS.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Courses Section */}
        {activeTab === "Courses" && (
          <>
            {/* Filter Dropdown */}
            <div className="filter-dropdown">
              <label>Filter by Category: </label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {FILTERS.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>

            {/* Recently Viewed */}
            <div className="section">
              <h3>Recently Viewed Courses</h3>
              <div className="card-grid">
                {filteredCourses
                  .filter((c) => c.category === "Recently Viewed Courses")
                  .map((course) => (
                    <div
                      className="card clickable-card"
                      key={course.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate(`/modules/${course.id}`)} // ✅ linked
                      onKeyDown={(e) => {
                        if (e.key === "Enter") navigate(`/modules/${course.id}`);
                      }}
                    >
                      <div className="card-icon">{CATEGORY_ICONS[course.type]}</div>
                      <h4>{course.title}</h4>
                      <p>Short description about {course.title} and why it’s useful.</p>

                      <div className="progress">
                        <div
                          className="progress-fill"
                          style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Most Popular */}
            <div className="section">
              <h3>Most Popular Certificates</h3>
              <div className="card-grid">
                {filteredCourses
                  .filter((c) => c.category === "Most Popular Certificates")
                  .map((course) => (
                    <div
                      className="card clickable-card"
                      key={course.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate(`/modules/${course.id}`)} // ✅ linked
                      onKeyDown={(e) => {
                        if (e.key === "Enter") navigate(`/modules/${course.id}`);
                      }}
                    >
                      <div className="card-icon">{CATEGORY_ICONS[course.type]}</div>
                      <h4>{course.title}</h4>
                      <p>Enroll now and boost your skills with {course.title}.</p>
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}

        {/* Personal Training Record */}
        {activeTab === "Personal Training Record" && (
          <div className="training-record">
            {/* Pending */}
            <div className="section">
              <h3>Pending Trainings</h3>
              <table className="record-table">
                <thead>
                  <tr>
                    <th style={{ width: "45%" }}>Course</th>
                    <th style={{ width: "15%" }}>Status</th>
                    <th style={{ width: "20%" }}>Due Date</th>
                    <th style={{ width: "20%" }}>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Disaster Response & Management Essentials</td>
                    <td className="status pending">Pending</td>
                    <td>Oct 30, 2025</td>
                    <td>
                      <div className="progress small">
                        <div className="progress-fill" style={{ width: "50%" }}></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Pediatric Advanced Life Support (PALS)</td>
                    <td className="status pending">Pending</td>
                    <td>Nov 15, 2025</td>
                    <td>
                      <div className="progress small">
                        <div className="progress-fill" style={{ width: "25%" }}></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Available */}
            <div className="section">
              <h3>Available Trainings</h3>
              <table className="record-table">
                <thead>
                  <tr>
                    <th style={{ width: "45%" }}>Course</th>
                    <th style={{ width: "35%" }}>Open Date</th>
                    <th style={{ width: "20%" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emergency Shelter Management</td>
                    <td>Available Now</td>
                    <td>
                      <button className="btn-outline">Start</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic First Aid and CPR</td>
                    <td>Available Now</td>
                    <td>
                      <button className="btn-outline">Start</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Completed */}
            <div className="section">
              <h3>Completed Trainings</h3>
              <table className="record-table">
                <thead>
                  <tr>
                    <th style={{ width: "45%" }}>Course</th>
                    <th style={{ width: "35%" }}>Date Completed</th>
                    <th style={{ width: "20%" }}>Certificate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hazardous Materials Awareness</td>
                    <td>Aug 10, 2025</td>
                    <td>
                      <button className="btn-download">
                        <FaDownload /> View Certificate
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Infectious Disease Control Essentials</td>
                    <td>Jul 22, 2025</td>
                    <td>
                      <button className="btn-download">
                        <FaDownload /> View Certificate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </Layout>
  );
};

export default Modules;
