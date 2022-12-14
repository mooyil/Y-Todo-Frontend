import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { todoApiService } from "../services/todoApiService";
import "../styles/Navbar.css";
import { TextField, Box, IconButton, Modal, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { modalStyle, modalCloseIconStyle } from "../styles/ModalStyle";
import DateAndTimePicker from "./DateAndTimePicker";
import { MyContext } from "../context/ContextProvider";
import { DateTimePickerContext } from "../context/DateTimePickerProvider";

export default function TodoButton({ todoItem }) {
  const TodoApiService = new todoApiService();

  const {
    snackbar,
    setSnackbar,
    todoInputValue,
    setTodoInputValue,
    tasks,
    setTasks,
  } = React.useContext(MyContext);

  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  const [modal, setModal] = React.useState(false);

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

  function createPost() {
    TodoApiService.createPostService(todoItem)
      .then((resp) => {
        setTasks([...tasks].concat(resp.data.data));
        snackbarShow("snackbarShowSuccess");
      })
      .catch(() => {
        snackbarShow("snackbarShowError");
      });
  }

  return (
    <Box sx={{ position: "fixed", right: 10, bottom: 10 }}>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={() => setModal(true)} />
      </Fab>
      <Modal
        open={modal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField
            value={todoInputValue}
            onChange={(event) => setTodoInputValue(event.target.value)}
            label="Add todo..."
            sx={{ width: "100%", mt: 7 }}
            type="text"
          />
          <DateAndTimePicker />
          <Button
            onClick={() => {
              add();
              setModal(false);
              setDateValue(null);
            }}
            variant="contained"
            sx={{ color: "white", height: 50, mt: 1 }}
          >
            Add
          </Button>
          <IconButton
            onClick={() => setModal(false)}
            style={modalCloseIconStyle}
          >
            <Close />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
