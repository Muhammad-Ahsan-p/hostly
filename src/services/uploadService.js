import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/upload";

function upload(data) {
  return http.post(apiEndPoint, data);
}

export default {
  upload,
};
