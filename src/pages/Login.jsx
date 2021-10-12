import React, { useState } from "react";
import "../styles/login.scss";
import Logo from "../assets/logo";
import { signIn } from "../services/api";
// import { Container } from './styles';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div id="login-content">
      <div id="login-form">
        <div id="title">
          <Logo /> Books
        </div>
        <div className="input-box">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Senha</label>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button
              type="submit"
              onClick={() => signIn({ email: email, password: password })}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
