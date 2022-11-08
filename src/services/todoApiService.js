import axios from "axios";

export class todoApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTodos(userNameStorage) {
    return axios.get(`${this.serverUrl}/todos/username/${userNameStorage}`);
  }

  createPostService(todoItem) {
    return axios.post(`${this.serverUrl}/todos/post`, todoItem);
  }

  async deleteFromServerService(id) {
    const resp = await axios.delete(`${this.serverUrl}/todos/delete/${id}`);
    return console.log(resp.data);
  }

  async createUpdatePostService(id, updatedTodoRequest) {
    const resp = await axios.patch(
      `${this.serverUrl}/todos/change/${id}`,
      updatedTodoRequest
    );
    return console.log(resp.data);
  }
  async sortRequest(userConfig, userNameStorage) {
    const resp = await axios.patch(
      `${this.serverUrl}/userconfig/change/${userNameStorage}`,
      userConfig
    );
    return resp.json();
  }
  getSortedTodos(userNameStorage) {
    return axios.get(
      `${this.serverUrl}/userconfig/username/${userNameStorage}`
    );
  }
}
