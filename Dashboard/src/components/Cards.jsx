// src/components/Cards.jsx
import React from "react";
import "../styles/personnel-style.css";
import WeatherCard from "../components/WeatherCard";
import HealthRespondersCard from "../components/HealthRespondersCard";
import PeopleShelteredCard from "../components/PeopleShelteredCard";

const Cards = () => {
  return (
    <div className="cards-grid">
      <WeatherCard city="Manila" />
      <HealthRespondersCard />
      <PeopleShelteredCard />
    </div>
  );
};

export default Cards;
