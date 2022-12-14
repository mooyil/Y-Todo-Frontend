import { Button, Stack, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { todoApiService } from "../services/todoApiService";
import React from "react";
import { MyContext } from "../context/ContextProvider";
import { DateTimePickerContext } from "../context/DateTimePickerProvider";
export default function TextFeldundButton({ todoItem, displayedDate }) {

  const {
    todoInputValue,
    setTodoInputValue,
    tasks,
    setTasks,
    snackbar,
    setSnackbar,
    userNameStorage,
  } = React.useContext(MyContext);

  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  const [sorted, setSorted] = React.useState();
  const TodoApiService = new todoApiService();

  React.useEffect(() => {
    setDateValue(null);
  }, []);

  let userConfig = {
    isSorted: "true",
  };

  function sortieren() {
    TodoApiService.sortRequest(userConfig, userNameStorage).then((resp) =>
      setSorted(resp.data.data.isSorted)
    );
  }

  React.useEffect(() => {
    TodoApiService.getSortedTodos(userNameStorage).then((resp) =>
      setSorted(resp.data.data[0].userConfig)
    );
  }, []);

  const sortTodos = (date1, date2) => {
    if (sorted === "true") {
      let dateA = new Date(date1.date);
      let dateB = new Date(date2.date);
      if (dateA > dateB) {
        return 1;
      } else if (!dateB) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      } else {
        return 0;
      }
    }
  };
  tasks.sort(sortTodos);

  function snackbarShow(snackbarClassName) {
    setTimeout(() => {
      setSnackbar(snackbarClassName);
      setTimeout(() => {
        setSnackbar("snackbarNotShow");
      }, 1000);
    }, 200);
  }

  function add() {
    if (todoInputValue === "") {
      snackbarShow("snackbarShowEmpty");
    } else {
      createPost();
      setTodoInputValue("");
    }
  }

  React.useEffect(() => {
    TodoApiService.getTodos(userNameStorage).then((resp) => {
      setTasks(resp.data.data);
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
      .then((resp) => {
        setTasks([...tasks].concat(resp.data.data));
        snackbarShow("snackbarShowSuccess");
      })
      .catch((err) => {
        snackbarShow("snackbarShowError");
        console.log(err);
      });
  }

  return (
    <Stack
      sx={{ marginTop: 12, color: "black" }}
      direction="row"
      justifyContent="center"
      spacing={1}
    >
      <TextField
        inputProps={{
          sx: { height: { xl: 25, lg: 25, md: 20, sm: 15, xs: 10 } },
        }}
        sx={{ maxWidth: 500 }}
        value={todoInputValue}
        onChange={(event) => setTodoInputValue(event.target.value)}
        fullWidth
        label="Write your next Todo..."
      />
      <Button
        endIcon={<Add />}
        variant="contained"
        onClick={() => {
          setDateValue(null);
          add();
        }}
      >
        <Typography variant="button">Add</Typography>
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          sortieren();
        }}
      >
        <Typography variant="button">sort</Typography>
      </Button>
    </Stack>
  );
}
