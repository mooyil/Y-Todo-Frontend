import axios from "axios";

export class todoService {
  constructor() {
    this.serverUrl = "http://localhost:8087" ;
  }

  getTodos(username) {
   return axios.get(this.serverUrl + "/todo/get?username=" + username)
  }


  createPostService(todoItem) {
   return (fetch(this.serverUrl + "/todo/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todoItem),
  })) 
      .then((response) => response.json())

}

  deleteFromServerService(id) {
    fetch(this.serverUrl + "/todo/delete?todoItemId=" + id, {
      method: "DELETE",
    });
  }



}
