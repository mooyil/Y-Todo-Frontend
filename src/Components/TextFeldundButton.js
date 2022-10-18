import { Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { OwnButton } from "../styles/ButtonStyle";
import { Add, ConnectingAirportsOutlined } from "@mui/icons-material";
import { todoApiService } from "../services/todoApiService";
import React from "react";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
import { SnackbarContext } from "../Context/SnackbarContext";
import { DateTimePickerContext } from "../Context/DateTimePickerContext";
import axios from "axios";
import { UserDataContext } from "../Context/UserDataContext";

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
  const {userName, setUserName} = React.useContext(UserDataContext)
  // let sortedTodos;
  // // Sortieren
  // const sortieren = React.useEffect(() => {
  //   axios.get("http://localhost:5200/todos/sort/date")
  //   .then(resp => setTasks(resp.data.data))
    
  // }, [count]);

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
    TodoApiService.getTodos().then((data) => {
      setTasks(data.data);
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
        setTasks([...tasks].concat(todoItem.data));
        snackbarShow("snackbarShowSuccess");
      })
      .catch(() => {
        snackbarShow("snackbarShowError");
      });
  }

  return (
    <Stack
      sx={{ marginTop: 20 }}
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
