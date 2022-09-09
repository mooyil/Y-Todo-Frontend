import axios from "axios";

export class todoService {
  constructor() {
    this.serverUrl = "http://localhost:8087" ;
  }

  getTodos(username) {
   return axios.get(this.serverUrl + "/todo/get?username=" + username)
  }


  createPost(todoItem) {
    fetch(this.serverUrl + "/todo/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    })
      .then((response) => response.json())
      .then((todoItem) => {
        console.log(todoItem);
      })
      .catch(() => {
        console.log("tschau");
      });
  }

  deleteFromServer(id) {
    fetch(this.serverUrl + "/todo/delete?todoItemId=" + id, {
      method: "DELETE",
    });
  }

  duhund() {
    console.log("du hund");
  }



}
