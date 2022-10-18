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

  function deleteFromServer(id) {
    TodoApiService.deleteFromServerService(id);
  }

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
    date: displayedDate
  };

  function createUpdatePost(id) {
    TodoApiService.createUpdatePostService(id, updatedTodoRequest);
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
