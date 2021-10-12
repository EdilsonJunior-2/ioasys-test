import axios from "axios";
import { Redirect } from "react-router";

export const api = axios.create({
  baseURL: " https://books.ioasys.com.br/api/v1",
});

export const signIn = (props) => {
  console.log(props);
  api
    .post("/auth/sign-in", {
      email: props.email,
      password: props.password,
    })
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("@ioasysLogged", true);
      window.localStorage.setItem("auth-token", res.headers["refresh-token"]);
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
