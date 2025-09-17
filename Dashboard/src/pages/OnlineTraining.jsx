import React from "react";
import Layout from "../layouts/Layout";
import Footer from "../components/Footer";
import "../styles/personnel-style.css";

// ✅ Import icons from react-icons
import { FaUniversity, FaLaptopCode, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

const OnlineTraining = () => {
  return (
    <Layout>
      <div className="online-training">
        
        {/* Section 1: Welcome Banner */}
        {/* ... keep your existing code here ... */}

        {/* Section 2: Career Solutions */}
        {/* ... keep your existing code here ... */}

        {/* Section 3: Grow Talent */}
        <section className="talent-section">
          <div className="talent-left">
            <h3>
              Grow your talent and economy with the world’s leading skills platform
            </h3>
            <p>
              Drive sustainable economic growth and build a competitive workforce with
              online learning from leading universities and companies.
            </p>
          </div>

          <div className="talent-right">
            <div className="talent-item">
              <span className="emoji"><FaUniversity size={28} color="#2c3e50" /></span>
              <div>
                <h4>World-Class Training</h4>
                <p>
                  Empower your learners with world-class training and credentials from
                  350+ leading universities and companies.
                </p>
              </div>
            </div>

            <div className="talent-item">
              <span className="emoji"><FaLaptopCode size={28} color="#27ae60" /></span>
              <div>
                <h4>In-Demand Skills</h4>
                <p>
                  Offer training in data, technology, and leadership skills.
                </p>
              </div>
            </div>

            <div className="talent-item">
              <span className="emoji"><FaChalkboardTeacher size={28} color="#2980b9" /></span>
              <div>
                <h4>Hands-on Learning</h4>
                <p>
                  Enable applied learning through assessments and projects.
                </p>
              </div>
            </div>

            <div className="talent-item">
              <span className="emoji"><FaChartLine size={28} color="#e67e22" /></span>
              <div>
                <h4>Actionable Insights</h4>
                <p>
                  Track training, measure progress to guide strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default OnlineTraining;
