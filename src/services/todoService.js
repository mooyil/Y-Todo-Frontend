import axios from "axios";

export class todoService {
  constructor() {
    this.serverUrl = "http://localhost:8087";
  }

  getTodos(id) {
    return axios.get("http://localhost:5200/todos");
  }

  createPostService(todoItem) {
    return fetch("http://localhost:5200/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    }).then((resp) => resp.json());
  }

  deleteFromServerService(id) {
    fetch("http://localhost:5200/todos2", {
      method: "DELETE",
    });
  }
}
