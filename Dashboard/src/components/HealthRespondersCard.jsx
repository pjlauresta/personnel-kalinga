import React from "react";
import "../styles/personnel-style.css";

const HealthRespondersCard = () => {
  // sample values
  const onDuty = 75;   // percent
  const standBy = 25;  // percent

  return (
    <div className="card evacuation">
      <h3>Health Responders</h3>

      <div className="circle-chart">
        <svg viewBox="0 0 36 36">
          {/* background circle */}
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* On-duty portion */}
          <path
            className="circle-on"
            strokeDasharray={`${onDuty}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="circle-label">{onDuty}%</div>
      </div>

      <div className="legend">
        <div><span style={{ background: "#1A4718" }}></span> On-Duty Responders ({onDuty}%)</div>
        <div><span style={{ background: "#FEC700" }}></span> Stand-by Responders ({standBy}%)</div>
      </div>
    </div>
  );
};

export default HealthRespondersCard;
