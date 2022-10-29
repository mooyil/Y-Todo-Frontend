import axios from "axios";

export class todoApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTodos(userEmailStorage) {
    return fetch(`${this.serverUrl}/todos/username/${userEmailStorage}`).then(
      (resp) => resp.json()
    );
  }

  createPostService(todoItem) {
    return fetch(`${this.serverUrl}/todos/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    }).then((resp) => resp.json());
  }

  deleteFromServerService(id) {
    return fetch(`${this.serverUrl}/todos/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  createUpdatePostService(id, updatedTodoRequest) {
    return fetch(`${this.serverUrl}/todos/change/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodoRequest),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
  sortRequest(userConfig, userEmailStorage) {
    return fetch(
      `http://localhost:5200/userconfig/change/${userEmailStorage}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userConfig),
      }
    ).then((resp) => resp.json());
  }
  getSortedTodos(userEmailStorage) {
    return axios.get(
      `http://localhost:5200/userconfig/username/${userEmailStorage}`
    );
  }
}
