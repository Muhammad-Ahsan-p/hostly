import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/cities";

function getAllCities() {
  return http.get(apiEndPoint);
}

export default {
  getAllCities,
};
