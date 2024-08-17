import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <h2>Zarejestruj się</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Hasło:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
}

export default Register;
