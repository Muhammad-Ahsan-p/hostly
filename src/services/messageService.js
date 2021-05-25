import http from "./httpService";
import { apiUrl, serverUrl } from "../config.json";

import io from "socket.io-client";

const apiEndPoint = apiUrl + "/messages";

const socket = io(serverUrl);

function sendMessage(message_body, reciever_user) {
  return http.post(apiEndPoint, {
    message_body,
    reciever_user,
  });
}

function getMessages() {
  return http.get(apiEndPoint);
}

function getChats() {
  return http.get(apiEndPoint + "/chats");
}

export default {
  sendMessage,
  getMessages,
  getChats,
  socket,
};
