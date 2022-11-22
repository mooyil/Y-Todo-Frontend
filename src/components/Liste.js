import React from "react";
import { todoApiService } from "../services/todoApiService";
import {
  Box,
  Stack,
  ListItem,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { Delete, Edit, ListAlt } from "@mui/icons-material";
import UpdateTodoModal from "./UpdateTodoModal";
import { MyContext } from "../context/ContextProvider";

export default function Liste({ displayedDate }) {
  const {
    tasks,
    setTasks,
    currentTab,
  } = React.useContext(MyContext);

  const [updatedInputValue, setUpdatedInputValue] = React.useState("");
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  const TodoApiService = new todoApiService();

  function deleteFromServer(id) {
    TodoApiService.deleteFromServerService(id);
  }

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
    setOpenUpdateModal(false);
  }

  let updatedTodoRequest = {
    content: updatedInputValue,
    date: displayedDate,
  };

  function createUpdatePost(id) {
    TodoApiService.createUpdatePostService(id, updatedTodoRequest);
  }
  return (
    <Stack alignItems="center">
      <List
        sx={{
          bgcolor: "primary.main",
          marginTop: 2,
          marginRight: 12,
          borderRadius: 1,
          width: "80%",
          maxWidth: 580,
        }}
      >
        {tasks.map((todo) => {
          {
            if (todo.tab === currentTab) {
              return (
                <ListItem
                  sx={{
                    color:"white",
                    height: { xl: 70, lg: 70, md: 60, sm: 55, xs: 45 },
                  }}
                  key={todo.id}
                  secondaryAction={
                    <Box>
                      <IconButton
                        onClick={() => {
                          deleteTodo(todo.id);
                          deleteFromServer(todo.id);
                        }}
                      >
                        <Delete sx={{color:"white"}} />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setUpdatedTodo(todo.id);
                          setOpenUpdateModal(true);
                          setUpdatedInputValue(todo.content);
                        }}
                      >
                        <Edit sx={{color:"white"}} />
                      </IconButton>
                      {updatedTodo === todo.id && (
                        <UpdateTodoModal
                          todo={todo}
                          editIt={editIt}
                          updatedInputValue={updatedInputValue}
                          setUpdatedInputValue={setUpdatedInputValue}
                          openUpdateModal={openUpdateModal}
                          setOpenUpdateModal={setOpenUpdateModal}
                        />
                      )}
                    </Box>
                  }
                >
                  <Stack>
                    <Typography color="inherit" sx={{ display: "flex", }}>
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
  );
}
