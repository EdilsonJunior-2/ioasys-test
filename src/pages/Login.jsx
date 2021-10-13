import { useEffect, useState } from "react";
import "../styles/pages/login.scss";
import Logo from "../assets/logo";
import { signIn } from "../services/api";
import Tooltip from "@mui/material/Tooltip";
// import { Container } from './styles';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const handleTooltipOpen = () => {
    setOpen(true);
  };

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
        <Tooltip
          id="tooltip"
          arrow
          placement="bottom-start"
          PopperProps={{
            disablePortal: true,
          }}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Email e/ou senha incorretos"
        >
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
                onClick={() =>
                  signIn({
                    email: email,
                    password: password,
                    handleTooltipOpen,
                  })
                }
              >
                Entrar
              </button>
            </div>
          </div>
        </Tooltip>
      </form>
    </div>
  );
}

export default Login;
