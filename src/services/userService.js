import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndPoint, {
    name: user.name,
    email: user.email,
    password: user.password,
    hostly_name: user.hostly_name,
    phone_number: user.phone_number,
  });
}
