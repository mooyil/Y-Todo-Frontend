import React from "react";
import "../Css/List.css";
import Snackbar from "./Snackbar";
import { todoService } from "../services/todoService";
export default function List() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, settodoInputValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState("");
  const [updatedTodo, setUpdatedTodo] = React.useState(null)
  const [updatedTodoValue, setUpdatedInputValue] = React.useState("");

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

  const TodoService = new todoService();

  //GET Method vom Server
  React.useEffect(() => {
    TodoService.getTodos("mikail").then((response) => {
      setTasks(response.data);
    }, []);
  }, []);
  function createPost() {
    TodoService.createPostService(todoItem)
      .then((todoItem) => {
        setTasks([...tasks].concat(todoItem));
        snackbarShow("snackbarShowSuccess");
      })
      .catch(() => {
        snackbarShow("snackbarShowError");
      });
  }
  function deleteFromServer(id) {
    TodoService.deleteFromServerService(id);
  }

  function add() {
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

  function editIt (id) {
    const updatedTodo = [...tasks].map((todo) => {
      if(todo.id === id){
        todo.content = updatedTodoValue
      }
      return todo
    })
    setTasks(updatedTodo)
    setUpdatedTodo(null)
  }

  return (
    <div className="container-list">
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
              {updatedTodo === todo.id ? (
                <input
                  onChange={(event) => setUpdatedInputValue(event.target.value)}
                  type="text"
                  value={updatedTodoValue}
                ></input>
              ) : (
                <p className="todo-content">{todo.content}</p>
              )}

              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo.id);
                  deleteFromServer(todo.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => setUpdatedTodo(todo.id)}
                className="todo-update-button"
              >
                update
              </button>
              <button onClick={() => editIt(todo.id)}>edit it</button>
            </li>
          );
        })}
      </div>
      <Snackbar Classname={snackbar} />
    </div>
  );
}
