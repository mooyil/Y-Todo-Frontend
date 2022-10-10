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
import DateAndTimePicker from "./DateAndTimePicker";

export default function Liste({
  updatedTodo,
  setUpdatedTodo,
  todoItem,
  displayedDate,
}) {
  const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);
  const [count, setCount] = React.useState(0);

  const TodoApiService = new todoApiService();

  function deleteFromServer(id) {
    TodoApiService.deleteFromServerService(id);
  }

  console.log(count)

  //Sortieren
  React.useEffect(() => {
    function hello(datee, date1) {
      const dateA = new Date(datee.date);
      const dateB = new Date(date1.date);

      if (dateA > dateB) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      } else {
        return 0;
      }
  }
    tasks.sort(hello);
  }, [count]);


  //Todo lösch Funktion
  function deleteTodo(id) {
    const updatedTodo = [...tasks].filter((todo) => todo.id !== id);
    setTasks(updatedTodo);
  }

  function editIt(id, date) {
    const updatedTodo = [...tasks].map((todo) => {
      if (todo.id === id) {
        todo.content = updatedInputValue;
        todo.date = displayedDate;
      }
      return todo;
    });
    setTasks(updatedTodo);
    createUpdatePost(id);
    setUpdatedTodo([]);
    setUpdatedInputValue("");
    setOpen(false);
  }

  let updatedTodoRequest = {
    content: updatedInputValue,
    date: displayedDate,
  };

  function createUpdatePost(id) {
    TodoApiService.createUpdatePostService(id, updatedTodoRequest);
  }

  console.log(tasks[0])

  return (
    <Box>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>sort</button>
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
                        setUpdatedInputValue(todo.content);
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
                            value={updatedInputValue}
                            label="Update todo..."
                            sx={{ backgroundColor: "white", width: 400, mt: 7 }}
                            onChange={(event) =>
                              setUpdatedInputValue(event.target.value)
                            }
                            type="text"
                          />
                          <DateAndTimePicker />
                          <OwnButton
                            variant="contained"
                            sx={{ color: "white", height: 50, mt: 1 }}
                            onClick={() => {
                              editIt(todo.id);
                              setDateValue(null);
                            }}
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
                  <Typography variant="caption">{todo.date}</Typography>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
}
