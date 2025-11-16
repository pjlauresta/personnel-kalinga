// src/context/TriageProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { generatePatientTriage } from "../lib/triageUtils";

const TriageContext = createContext(null);

export const useTriage = () => {
  const ctx = useContext(TriageContext);
  if (!ctx) throw new Error("useTriage must be used inside TriageProvider");
  return ctx;
};

export const TriageProvider = ({ children, refreshInterval = 30000 }) => {
  const [triageData, setTriageData] = useState(() => generatePatientTriage());
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setTriageData(generatePatientTriage());
      setLastUpdated(Date.now());
    }, refreshInterval);
    return () => clearInterval(id);
  }, [refreshInterval]);

  const hospitalMap = useMemo(() => {
    const map = {};
    triageData.forEach((h) => (map[h.hospital] = h));
    return map;
  }, [triageData]);

  const value = {
    triageData,
    hospitalMap,
    lastUpdated,
    refresh: () => {
      setTriageData(generatePatientTriage());
      setLastUpdated(Date.now());
    },
  };

  return <TriageContext.Provider value={value}>{children}</TriageContext.Provider>;
};
