import React from "react";
import "./Dashboard.css";
import DashboardHeader from "./DashboardHeader";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-body">
        <nav className="sidebar">
          <ul>
            <li>
              <a href="#section1">Sekcja 1</a>
            </li>
            <li>
              <a href="#section2">Sekcja 2</a>
            </li>
            <li>
              <a href="#section3">Sekcja 3</a>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <section id="section1">
            <h2>Sekcja 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </section>
          <section id="section2">
            <h2>Sekcja 2</h2>
            <p>Laboriosam, illum aliquam itaque cumque molestias nostrum...</p>
          </section>
          <section id="section3">
            <h2>Sekcja 3</h2>
            <p>Sunt blanditiis recusandae sint voluptatem, voluptatibus...</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
