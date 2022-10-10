import axios from "axios";

export class todoApiService {
  constructor() {
    this.serverUrl = "http://localhost:5200";
  }

  getTodos(_id) {
    return axios.get("http://localhost:5200/todos");
  }

  createPostService(todoItem) {
    return fetch("http://localhost:5200/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    }).then((resp) => resp.json());
  }

  deleteFromServerService(_id) {
    return fetch("http://localhost:5200/todos/delete/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


createUpdatePostService(_id, updatedTodoRequest){
  return fetch("http://localhost:5200/todos/change/" + _id,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedTodoRequest)
  })

  .then((resp) => resp.json())
  .then((data) => console.log(data))
}

}
