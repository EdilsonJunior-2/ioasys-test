import React, { useEffect, useState } from "react";
import "../styles/pages/login.scss";
import Logo from "../assets/logo";
import { signIn } from "../services/api";
// import { Container } from './styles';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const input = document.getElementById("login-content");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    });
  }, []);

  return (
    <div id="login-content">
      <form id="login-form">
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
              type="button"
              id="submit"
              onClick={() => signIn({ email: email, password: password })}
            >
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
