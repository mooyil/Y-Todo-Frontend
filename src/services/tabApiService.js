import axios from "axios";

export class tabApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTabs(userNameStorage) {
    return axios.get(`${this.serverUrl}/tabs/userName/${userNameStorage}`);
  }

  createTabPost(tabItem) {
    return fetch(`${this.serverUrl}/tabs/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tabItem),
    }).then((res) => res.json());
  }

  deleteTabServer(name) {
    return fetch(`${this.serverUrl}/tabs/delete/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
  }
}
