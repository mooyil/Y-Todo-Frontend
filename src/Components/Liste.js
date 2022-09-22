import React from "react";
import Snackbar from "./Snackbar";
import { todoService } from "../services/todoService";
import {
  Button,
  TextField,
  Box,
  Stack,
  ListItem,
  IconButton,
  List,
  Divider,
  Typography,
  Modal
} from "@mui/material";
import { Add, Delete, Edit, ListAlt } from "@mui/icons-material";
import { OwnButton } from "../styles/ListStyles";
import "../styles/List.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Liste() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState("");
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleClose () { 
    setOpen(false)
   }

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
    <Box>
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
      <Stack alignItems="center">
        <List
          sx={{
            bgcolor: "primary.main",
            marginTop: 2,
            marginRight: 12,
            borderRadius: 1,
          }}
        >
          {tasks.map((todo) => {
            return (
              <ListItem
                sx={{ width: 600, color: "white" }}
                key={todo.id}
                secondaryAction={
                  <Box>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => {
                        deleteTodo(todo.id);
                        deleteFromServer(todo.id);
                      }}
                    >
                      <Delete />
                    </IconButton>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => {setUpdatedTodo(todo.id); setOpen(true)}}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => editIt(todo.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                }
              >
                {updatedTodo === todo.id ? (
                  <TextField
                    sx={{ backgroundColor: "white" }}
                    onChange={(event) =>
                      setUpdatedInputValue(event.target.value)
                    }
                    type="text"
                  />
                ) : (
                  <Typography sx={{ display: "flex" }}>
                    <ListAlt sx={{ marginRight: 0.5 }} />
                    {todo.content}
                  </Typography>
                )}
              </ListItem>
            );
          })}
        </List>
      </Stack>

      <Snackbar Classname={snackbar} />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
