import axios from "axios";

export const api = axios.create({
  baseURL: " https://books.ioasys.com.br/api/v1",
});

export const signIn = (props) => {
  api
    .post("/auth/sign-in", {
      email: props.email,
      password: props.password,
    })
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("@ioasys/logged", true);
      window.localStorage.setItem(
        "@ioasys/authToken",
        res.headers.authorization
      );
      window.localStorage.setItem(
        "@ioasys/refreshToken",
        res.headers["refresh-token"]
      );
      window.localStorage.setItem("@ioasys/userName", res.data.name);
      //window.location.reload();
    })
    .catch((err) => console.log(err));
};

export const getBooks = async (props) => {
  return await api.get(`/books?page=${props.page}&amount=${props.amount}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem(
        "@ioasys/authToken"
      )}`,
    },
  });
};

export const logout = () => {
  window.localStorage.clear();
  window.location.reload();
};
