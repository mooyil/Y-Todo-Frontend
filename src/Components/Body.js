import React from "react";
import "../Css/Body.css";
import axios from "axios";
import Snackbar from "./Snackbar";
import { todoService } from "../services/todoService";

export default function Body() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, settodoInputValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState("");

  //Snackbar anzeigen wenn nicht erfolgreich Todod gelöscht
  function snackbarShow(snackbarClassName) {
    setTimeout(() => {
      setSnackbar(snackbarClassName);
      setTimeout(() => {
        setSnackbar("snackbarNotShow");
      }, 1000);
    }, 200);
  }

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
  };

  //GET Method vom Server
  React.useEffect(() => {
    const TodoService = new todoService();

    TodoService.getTodos("mikail").then((response) => {
      setTasks(response.data);
    });

    // axios
    //   .get("http://localhost:8087/todo/get?username=mikail")
    //   .then((response) => {
    //     setTasks(response.data);
    //   });
  }, []);

  function createPost() {
    fetch(`http://localhost:8087/todo/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    })
      .then((response) => response.json())
      .then((todoItem) => {
        setTasks([...tasks].concat(todoItem));
        snackbarShow("snackbarShowSuccess");
      })
      .catch(() => {
        snackbarShow("snackbarShowError");
      });
  }

  function deleteFromServer(id) {
    fetch("http://localhost:8087/todo/delete?todoItemId=" + id, {
      method: "DELETE",
    });
  }

  function add(event) {
    if (todoInputValue === "") {
      snackbarShow("snackbarShowEmpty");
    } else {
      createPost();
      settodoInputValue("");
    }
  }

  //Enter Funktion
  React.useEffect(() => {
    const enter = (event) => {
      if (event.key === "Enter") {
        add();
      }
    };
    document.addEventListener("keypress", enter);

    return () => {
      document.removeEventListener("keypress", enter);
    };
  });

  //Todo lösch Funktion
  function deleteTodo(id) {
    const updatedTodo = [...tasks].filter((todo) => todo.id !== id);
    setTasks(updatedTodo);
  }

  return (
    <div className="container-body">
      <div className="input-wrapper">
        <input
          value={todoInputValue}
          onChange={(event) => settodoInputValue(event.target.value)}
          type="text"
          className="input-text"
        />
        <button
          onClick={() => {
            add();
          }}
          className="input-button"
        >
          Add
        </button>
      </div>
      <div className="list-wrapper">
        {tasks.map((todo) => {
          return (
            <li className="list-items" key={todo.id}>
              {todo.content}
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                  deleteFromServer(todo.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </div>
      <Snackbar Classname={snackbar} />
    </div>
  );
}
