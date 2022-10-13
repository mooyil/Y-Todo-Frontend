import React from "react";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
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
import { ListeContext } from "../Context/ListeContext";
import UdateTodoModal from "./UpdateTodoModal";
import { UpdateTodoModalContext } from "../Context/UpdateTodoModalContext";
import { TabsContext } from "../Context/TabsContext";

export default function Liste({ todoItem, displayedDate }) {
  const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const { open, setOpen } = React.useContext(UpdateTodoModalContext);
  const {
    updatedTodo,
    setUpdatedTodo,
    updatedInputValue,
    setUpdatedInputValue,
  } = React.useContext(ListeContext);
  const { currentTab, setCurrentTab, listTabs, setListTabs } =
    React.useContext(TabsContext);

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
            {
              if (todo.tab === currentTab) {
                return (
                  <ListItem
                    sx={{
                      width: { xs: 355, sm: 580, xl: 580 },
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
                        {updatedTodo === todo._id && (
                          <UdateTodoModal todo={todo} editIt={editIt} />
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
              }
            }
          })}
        </List>
      </Stack>
    </Box>
  );
}
