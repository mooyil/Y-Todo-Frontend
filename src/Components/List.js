import React from "react";
import Snackbar from "./Snackbar";
import { todoService } from "../services/todoService";
import { Button, TextField, Box, Stack, Container, ListItem } from "@mui/material";
import { Add } from "@mui/icons-material";
import { OwnTextField, OwnButton } from "../styles/ListStyles";
import "../styles/List.css";

export default function List() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState("");
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");

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
      setTodoInputValue("");
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


  function editIt(id) {
    const updatedTodo = [...tasks].map((todo) => {
      if (todo.id === id) {
        todo.content = updatedInputValue;
      }
      return todo;
    });
    setTasks(updatedTodo);
    setUpdatedTodo([]);
  }

  return (
    <Box >
    <Stack
        sx={{ marginTop: 12 }}
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        <OwnTextField
          sx={{ width: 600 }}
          value={todoInputValue}
          onChange={(event) => setTodoInputValue(event.target.value)}
          fullWidth
          label="Write your next Todo..."
        />
        <OwnButton
          endIcon={<Add />}
          variant="contained"
          onClick={() => {
            add();
          }}
        >
          Add
        </OwnButton>
      </Stack>
      <Stack alignItems="center">
      {tasks.map((todo) => {
        return (
          <ListItem key={todo.id}>
            {updatedTodo === todo.id ? (
              <input
                onChange={(event) => setUpdatedInputValue(event.target.value)}
                type="text"
              ></input>
            ) : (
              <p className="todo-content">{todo.content}</p>
            )}

            <Button
              className="delete-button"
              onClick={() => {
                deleteTodo(todo.id);
                deleteFromServer(todo.id);
              }}
            >
              delete
            </Button>
            <Button
              onClick={() => setUpdatedTodo(todo.id)}
              className="todo-update-button"
            >
              update
            </Button>
            <Button onClick={() => editIt(todo.id)}>edit it</Button>
          </ListItem>
        );
      })}
      </Stack>
      <Snackbar Classname={snackbar} />
      </Box>
  );
}
