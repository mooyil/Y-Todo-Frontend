import * as React from "react";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { todoApiService } from "../services/todoApiService";
import "../styles/Navbar.css";
import {
  TextField,
  Box,
  IconButton,
  Modal,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { modalStyle, modalCloseIconStyle } from "../styles/ListStyles";
import { OwnButton } from "../styles/ListStyles";

export default function TodoButton({ snackbar, setSnackbar }) {
  const TodoApiService = new todoApiService();


  const { todoInputValue, setTodoInputValue, tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const [modal, setModal] = React.useState(false);


  const {todoItem} = React.useContext(TextFeldundButtonContext)

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
      .then((todoItem) => {
        setTasks([...tasks].concat(todoItem));
        snackbarShow("snackbarShowSuccess");
      })
      .catch(() => {
        snackbarShow("snackbarShowError");
      });
  }

  return (
    <Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={() => setModal(true)} />
      </Fab>
      <Modal
        keepMounted
        open={modal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField
            onChange={(event) => setTodoInputValue(event.target.value)}
            label="Update todo..."
            sx={{ backgroundColor: "white", width: 400, mt: 7 }}
            type="text"
          />
          <OwnButton
            onClick={() => {
              add();
              setModal(false);
            }}
            variant="contained"
            sx={{ color: "white", height: 50, mt: 1 }}
          >
            Add
          </OwnButton>
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
