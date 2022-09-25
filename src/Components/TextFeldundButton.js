import { Stack, TextField } from "@mui/material";
import { OwnButton } from "../styles/ListStyles";
import { Add } from "@mui/icons-material";
import { todoService } from "../services/todoService";
import React from "react";

export default function TextFeldundButton({
  todoInputValue,
  setTodoInputValue,
  tasks,
  setTasks,
  setSnackbar,
}) {

  function snackbarShow(snackbarClassName) {
    setTimeout(() => {
      setSnackbar(snackbarClassName);
      setTimeout(() => {
        setSnackbar("snackbarNotShow");
      }, 1000);
    }, 200);
  }

  const TodoService = new todoService();

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
  };


  function add() {
    if (todoInputValue === "") {
      snackbarShow("snackbarShowEmpty");
    } else {
      createPost();
      setTodoInputValue("");
    }
  }

  React.useEffect(() => {
    TodoService.getTodos("mikail")
    .then((resp) => setTasks(resp.data))
  }, [])
  
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

  return (
    <Stack
      sx={{ marginTop: 12 }}
      direction="row"
      justifyContent="center"
      spacing={1}
    >
      <TextField
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
  );
}
