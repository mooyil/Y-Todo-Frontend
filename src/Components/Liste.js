import React from "react";
import UpdateTodoModal from "./UpdateTodoModal"
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
import { TabsContext } from "../Context/TabsContext";
import { ListeContext } from "../Context/ListeContext";

export default function Liste({ todoItem, displayedDate }) {
  const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  // const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);
  const { tabValue, setTabValue } = React.useContext(TabsContext);
  const { updatedTodo, setUpdatedTodo } = React.useContext(ListeContext);

  const TodoApiService = new todoApiService();

  function deleteFromServer(_id) {
    TodoApiService.deleteFromServerService(_id);
  }

  //Todo lösch Funktion
  function deleteTodo(_id) {
    const updatedTodo = [...tasks].filter((todo) => todo._id !== _id);
    setTasks(updatedTodo);
  }

  function editIt(_id, date) {
    const updatedTodo = [...tasks].map((todo) => {
      if (todo._id === _id) {
        todo.content = updatedInputValue;
        todo.date = displayedDate;
      }
      return todo;
    });
    setTasks(updatedTodo);
    createUpdatePost(_id);
    setUpdatedTodo([]);
    setUpdatedInputValue("");
    setOpen(false);
  }

  let updatedTodoRequest = {
    content: updatedInputValue,
    date: displayedDate,
  };

  function createUpdatePost(_id) {
    TodoApiService.createUpdatePostService(_id, updatedTodoRequest);
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
                sx={{
                  width: { xs: 355, sm: 500, xl: 670 },
                  color: "white",
                  height: "60px",
                }}
                key={todo._id}
                secondaryAction={
                  <Box>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => {
                        deleteTodo(todo._id);
                        deleteFromServer(todo._id);
                      }}
                    >
                      <Delete />
                    </IconButton>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => {
                        setUpdatedTodo(todo._id);
                        setOpen(true);
                        setUpdatedInputValue(todo.content);
                      }}
                    >
                      <Edit />
                    </IconButton>
                    {updatedTodo === todo._id && (<UpdateTodoModal/>
                      // <Modal
                      //   keepMounted
                      //   open={open}
                      //   aria-labelledby="keep-mounted-modal-title"
                      //   aria-describedby="keep-mounted-modal-description"
                      // >
                      //   <Box sx={modalStyle}>
                      //     <TextField
                      //       value={updatedInputValue}
                      //       label="Update todo..."
                      //       sx={{ backgroundColor: "white", width: 400, mt: 7 }}
                      //       onChange={(event) =>
                      //         setUpdatedInputValue(event.target.value)
                      //       }
                      //       type="text"
                      //     />
                      //     <DateAndTimePicker />
                      //     <OwnButton
                      //       variant="contained"
                      //       sx={{ color: "white", height: 50, mt: 1 }}
                      //       onClick={() => {
                      //         editIt(todo._id);
                      //         setDateValue(null);
                      //       }}
                      //     >
                      //       Update
                      //     </OwnButton>
                      //     <IconButton
                      //       style={modalCloseIconStyle}
                      //       onClick={() => setOpen(false)}
                      //     >
                      //       <Close />
                      //     </IconButton>
                      //   </Box>
                      // </Modal>
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
