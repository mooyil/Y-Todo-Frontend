import React from "react";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
import { DateTimePickerContext } from "../Context/DateTimePickerContext";
import { todoApiService } from "../services/todoApiService";
import {
  TextField,
  Box,
  Stack,
  ListItem,
  IconButton,
  List,
  Typography,
  Modal,
} from "@mui/material";
import { Close, Delete, Edit, ListAlt } from "@mui/icons-material";
import { modalStyle, modalCloseIconStyle } from "../styles/ListStyles";
import { OwnButton } from "../styles/ListStyles";

export default function Liste({ updatedTodo, setUpdatedTodo }) {
  const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  const TodoApiService = new todoApiService();

  function deleteFromServer(id) {
    TodoApiService.deleteFromServerService(id);
  }

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
    createUpdatePost(id);
    setUpdatedTodo([]);
    setUpdatedInputValue("");
    setOpen(false);
  }

  let updatedTodoContent = {
    content: updatedInputValue,
  };

  function createUpdatePost(id) {
    fetch("http://localhost:5200/todos/change/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodoContent),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  return (
    <Box>
      <Stack alignItems="center">
        <List
          sx={{
            transition: 2,
            bgcolor: "primary.main",
            marginTop: 2,
            marginRight: 12,
            borderRadius: 1,
          }}
        >
          {tasks.map((todo) => {
            return (
              <ListItem
                sx={{ width: 600, color: "white", height: "60px" }}
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
                      onClick={() => {
                        setUpdatedTodo(todo.id);
                        setOpen(true);
                      }}
                    >
                      <Edit />
                    </IconButton>
                    {updatedTodo === todo.id && (
                      <Modal
                        keepMounted
                        open={open}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <TextField
                            label="Update todo..."
                            sx={{ backgroundColor: "white", width: 400, mt: 7 }}
                            onChange={(event) =>
                              setUpdatedInputValue(event.target.value)
                            }
                            type="text"
                          />
                          <OwnButton
                            variant="contained"
                            sx={{ color: "white", height: 50, mt: 1 }}
                            onClick={() => editIt(todo.id)}
                          >
                            Update
                          </OwnButton>
                          <IconButton
                            style={modalCloseIconStyle}
                            onClick={() => setOpen(false)}
                          >
                            <Close />
                          </IconButton>
                        </Box>
                      </Modal>
                    )}
                  </Box>
                }
              >
                <Stack>
                  <Typography sx={{ display: "flex" }}>
                    <ListAlt sx={{ marginRight: 0.5 }} />
                    {todo.content}
                  </Typography>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
}
