import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // add logic later
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Zaloguj się</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
