import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <Router>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Header />
                  <Register />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
