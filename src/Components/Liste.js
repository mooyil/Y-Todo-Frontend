import React from "react";
import { todoService } from "../services/todoService";
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
import { Add, Close, Delete, Edit, ListAlt } from "@mui/icons-material";
import { modalStyle, modalCloseIconStyle } from "../styles/ListStyles";
import { OwnButton } from "../styles/ListStyles";

export default function Liste({
  tasks,
  setTasks,
  updatedTodo,
  setUpdatedTodo,
}) {
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const TodoService = new todoService();

  function deleteFromServer(id) {
    TodoService.deleteFromServerService(id);
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
    setTasks(updatedTodo)
    setUpdatedTodo([]);
    setUpdatedInputValue("");
    setOpen(false);
  }

  return (
    <Box>
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
                <Typography sx={{ display: "flex" }}>
                  <ListAlt sx={{ marginRight: 0.5 }} />
                  {todo.content}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
}
