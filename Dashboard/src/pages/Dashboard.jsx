// src/pages/Dashboard.jsx
import React from "react";
import Layout from "../layouts/Layout";
import Topbar from "../components/Topbar";
import DateRow from "../components/DateRow";
import Cards from "../components/Cards";
import Reports from "../components/Reports";
import MapCard from "../components/MapCard";
import ResourcesCard from "../components/ResourcesCard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <Layout>
      {/* Date Row (only for Dashboard, between topbar and cards) */}
      <DateRow />

      {/* Cards Section (Weather, Responders, People Sheltered) */}
      <Cards />

      {/* Reports & Map side by side */}
      <div className="cards-grid mt-4">
        <Reports />
        <MapCard />
      </div>

      {/* Resources */}
      <div className="mt-4">
        <ResourcesCard />
      </div>

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Dashboard;
