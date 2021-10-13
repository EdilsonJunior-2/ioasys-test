import axios from "axios";

export const api = axios.create({
  baseURL: " https://books.ioasys.com.br/api/v1",
});

const auth = {
  Authorization: `Bearer ${window.localStorage.getItem("@ioasys/authToken")}`,
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (window.localStorage.getItem("@ioasys/refreshToken")) {
        alert("Sua sessão expirou, favor entrar novamente");
        window.localStorage.clear();
        window.location.reload();
      }
    }
  }
);

export const signIn = (props) => {
  api
    .post("/auth/sign-in", {
      email: props.email,
      password: props.password,
    })
    .then((res) => {
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
      window.location.reload();
    })
    .catch(() => {
      props.handleTooltipOpen();
      window.localStorage.clear();
    });
};

export const functionRefreshToken = async () => {
  await api
    .post(
      "/auth/refresh-token",
      {
        refreshToken: window.localStorage.getItem("@ioasys/refreshToken"),
      },
      {
        headers: auth,
      }
    )
    .then((res) => {
      window.localStorage.setItem(
        "@ioasys/authToken",
        res.headers.authorization
      );
      window.localStorage.setItem(
        "@ioasys/refreshToken",
        res.headers["refresh-token"]
      );
    })
    .catch((err) => console.error(err));
};

export const getBooks = async (props) => {
  return await api.get(`/books?page=${props.page}&amount=${props.amount}`, {
    headers: auth,
  });
};

export const getBook = async (props) => {
  return await api.get(`/books/${props.id}`, {
    headers: auth,
  });
};

export const logout = () => {
  window.localStorage.clear();
  window.location.reload();
};
