import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/personnel-style.css";

const COLORS = ["#1E2A78", "#C0392B", "#145A32", "#F1C40F"]; 
// Water, Food, Medicines, Clothes

// ✅ Data for all centers combined
const allCentersData = [
  { name: "Water", value: 5000 },
  { name: "Food", value: 2500 },
  { name: "Medicines", value: 800 },
  { name: "Clothes", value: 500 },
];

// ✅ Data for individual centers
const centers = [
  {
    name: "Center 1",
    data: [
      { name: "Water", value: 1600 },
      { name: "Food", value: 800 },
      { name: "Medicines", value: 260 },
      { name: "Clothes", value: 150 },
    ],
  },
  {
    name: "Center 2",
    data: [
      { name: "Water", value: 1400 },
      { name: "Food", value: 900 },
      { name: "Medicines", value: 280 },
      { name: "Clothes", value: 120 },
    ],
  },
  {
    name: "Center 3",
    data: [
      { name: "Water", value: 2000 },
      { name: "Food", value: 800 },
      { name: "Medicines", value: 260 },
      { name: "Clothes", value: 230 },
    ],
  },
];

const ResourcesCard = () => {
  return (
    <div className="card resources-card">
      <h3 className="card-title">Resources</h3>
      <div className="resources-container">
        {/* ✅ Legend */}
        <div className="resources-legend">
          <h4>All Centers</h4>
          <ul>
            <li><span className="legend-box water"></span> Water - 5000 bottles</li>
            <li><span className="legend-box food"></span> Food - 2500 packs</li>
            <li><span className="legend-box medicine"></span> Medicines - 800 kits</li>
            <li><span className="legend-box clothes"></span> Clothes - 500 packs</li>
          </ul>
        </div>

        {/* ✅ Charts Section */}
        <div className="resources-charts">
          {/* All Centers Donut */}
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={allCentersData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {allCentersData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Individual Centers */}
          <div className="center-pies">
            {centers.map((center, i) => (
              <div key={i} className="center-pie">
                <h5>{center.name}</h5>
                <ResponsiveContainer width={160} height={160}>
                  <PieChart>
                    <Pie
                      data={center.data}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      dataKey="value"
                      labelLine={false}
                    >
                      {center.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
