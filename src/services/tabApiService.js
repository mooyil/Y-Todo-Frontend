import axios from "axios";

export class tabApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTabs(userNameStorage) {
    return axios.get(`${this.serverUrl}/tabs/userName/${userNameStorage}`);
  }

  createTabPost(tabItem) {
    return axios.post(`${this.serverUrl}/tabs/post`, tabItem);
  }

  deleteTabServer(name) {
    return axios.delete(`${this.serverUrl}/tabs/delete/${name}`);
  }
}
