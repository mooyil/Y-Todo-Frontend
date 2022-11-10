import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { UpdateTodoModalContext } from "../context/UpdateTodoModalContext";
import { modalCloseIconStyle, modalStyle } from "../styles/ModalStyle";
import { DateTimePickerContext } from "../context/DateTimePickerContext";
import { ListeContext } from "../context/ListeContext";
import DateAndTimePicker from "./DateAndTimePicker";

export default function UdateTodoModal({ todo, editIt }) {
  const { open, setOpen } = React.useContext(UpdateTodoModalContext);
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);
  const { updatedInputValue, setUpdatedInputValue } =
    React.useContext(ListeContext);
  return (
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
          sx={{ backgroundColor: "white", width: "100%", mt: 7 }}
          onChange={(event) => setUpdatedInputValue(event.target.value)}
          type="text"
        />
        <DateAndTimePicker />
        <Button
          variant="contained"
          sx={{ color: "white", height: 50, mt: 1 }}
          onClick={() => {
            editIt(todo.id);
            setDateValue(null);
          }}
        >
          Update
        </Button>
        <IconButton style={modalCloseIconStyle} onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
}