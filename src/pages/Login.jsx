import React from "react";
import "../styles/login.scss";
import Logo from "../assets/logo";
// import { Container } from './styles';

function Login() {
  return (
    <div id="login-content">
      <form id="login-form">
        <div id="title">
          <Logo /> Books
        </div>
        <div className="input-box">
          <label>Email</label>
          <input />
        </div>
        <div className="input-box">
          <label>Senha</label>
          <div>
            <input />
            <button type="submit">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
