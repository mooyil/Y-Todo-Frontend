import { Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { OwnButton } from "../styles/ButtonStyle";
import { Add } from "@mui/icons-material";
import { todoApiService } from "../services/todoApiService";
import React from "react";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
import { SnackbarContext } from "../Context/SnackbarContext";
import { DateTimePickerContext } from "../Context/DateTimePickerContext";
import axios from "axios";

export default function TextFeldundButton({ todoItem, displayedDate }) {
  const {
    todoInputValue,
    setTodoInputValue,
    tasks,
    setTasks,
    count,
    setCount,
  } = React.useContext(TextFeldundButtonContext);
  const [snackbar, setSnackbar] = React.useContext(SnackbarContext);
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

   let sortedTodos
  // Sortieren
  const sortieren = React.useEffect(() => {
    function sortTodos(date1, date2) {
      const dateA = new Date(date1.date);
      const dateB = new Date(date2.date);

      if (dateA > dateB) {
        return 1;
      } else if (isNaN(dateA)) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      } else {
        return 0;
      }
    }
   sortedTodos = tasks.sort(sortTodos);
   setTasks(sortedTodos)
  }, [count]);


  React.useEffect(() => {
    setDateValue(null);
  }, []);

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
    TodoApiService.getTodos().then((resp) => {
           setTasks(resp.data);
    });
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
        sx={{ maxWidth: 500 }}
        value={todoInputValue}
        onChange={(event) => setTodoInputValue(event.target.value)}
        fullWidth
        label="Write your next Todo..."
      />
      <OwnButton
        endIcon={<Add />}
        variant="contained"
        onClick={() => {
          setDateValue(null);
          add();
        }}
      >
        <Typography variant="button">Add</Typography>
      </OwnButton>
      <OwnButton
        variant="contained"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        <Typography variant="button">sort</Typography>
      </OwnButton>
    </Stack>
  );
}
