import http from "./httpService";
import setJwt from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiUrl + "/auth";
const jwtToken = "token";

async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, {
    email,
    password,
  });

  localStorage.setItem(jwtToken, jwt);
}

function getUser() {
  try {
    const jwt = localStorage.getItem(jwtToken);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  getUser,
};
