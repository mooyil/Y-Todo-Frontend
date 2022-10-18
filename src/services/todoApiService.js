import axios from "axios";

export class todoApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTodos(id) {
    return axios.get(`${this.serverUrl}/todos`);
  }

  createPostService(todoItem) {
    return fetch(`${this.serverUrl}/todos/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    }).then((resp) => resp.json());
  }

  deleteFromServerService(id) {
    return fetch(`${this.serverUrl}/todos/delete/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


createUpdatePostService(id, updatedTodoRequest){
    return fetch(`${this.serverUrl}/todos/change/` + id,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedTodoRequest)
  })

  .then((resp) => resp.json())
  .then((data) => console.log(data))
}

}
