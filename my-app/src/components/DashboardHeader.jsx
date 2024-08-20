import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardHeader.css";

function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // add later logic to logut
    navigate("/");
  };

  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <button className="logout-button" onClick={handleLogout}>
        Wyloguj
      </button>
    </header>
  );
}

export default DashboardHeader;
