import axios from "axios";

var jwt = null;

axios.interceptors.request.use(
  (config) => {
    config.headers["x-auth-token"] = localStorage.getItem("token");

    return config;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (expectedError) return Promise.reject(error);

    alert("Something happened...");
    console.log(error);
  }
);

export function setJwt(_jwt) {
  jwt = _jwt;
}

export default axios;
