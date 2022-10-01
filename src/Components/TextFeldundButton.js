import { Stack, TextField } from "@mui/material";
import { OwnButton } from "../styles/ListStyles";
import { Add } from "@mui/icons-material";
import { todoApiService } from "../services/todoApiService";
import React from "react";

export default function TextFeldundButton({
  todoInputValue,
  setTodoInputValue,
  tasks,
  setTasks,
  setSnackbar,
  todoItem,
}) {
  function snackbarShow(snackbarClassName) {
    setTimeout(() => {
      setSnackbar(snackbarClassName);
      setTimeout(() => {
        setSnackbar("snackbarNotShow");
      }, 1000);
    }, 200);
  }

  const TodoApiService = new todoApiService();

  function add() {
    if (todoInputValue === "") {
      snackbarShow("snackbarShowEmpty");
    } else {
      createPost();
      setTodoInputValue("");
    }
  }

  React.useEffect(() => {
    TodoApiService.getTodos().then((resp) => setTasks(resp.data));
  }, []);

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
    TodoApiService.createPostService(todoItem)
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
        sx={{ maxWidth: 600 }}
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
