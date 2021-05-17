import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/hostels";

function createHostel(data, files) {
  let images = Array();
  files.forEach((file) => {
    images.push(file.filename);
  });
  data.images = images;
  return http.post(apiEndPoint, data);
}

export default {
  createHostel,
};
