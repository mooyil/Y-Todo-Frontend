import axios from "axios";

export class todoApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
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
    return fetch("http://localhost:5200/todos/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


createUpdatePostService(id, updatedTodoRequest){
  return fetch("http://localhost:5200/todos/change/" + id,{
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedTodoRequest)
  })

  .then((resp) => resp.json())
  .then((data) => console.log(data))
}

}
