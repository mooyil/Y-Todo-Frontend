import React from "react";
import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, TextField } from "@mui/material";
import { UpdateTodoModalContext } from "../Context/UpdateTodoModalContext";
import { OwnButton } from "../styles/ButtonStyle";
import { modalCloseIconStyle, modalStyle } from "../styles/ModalStyle";
import { DateTimePickerContext } from "../Context/DateTimePickerContext";
import { ListeContext } from "../Context/ListeContext";
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
          sx={{ backgroundColor: "white", width: 400, mt: 7 }}
          onChange={(event) => setUpdatedInputValue(event.target.value)}
          type="text"
        />
        <DateAndTimePicker />
        <OwnButton
          variant="contained"
          sx={{ color: "white", height: 50, mt: 1 }}
          onClick={() => {
            editIt(todo._id);
            setDateValue(null);
          }}
        >
          Update
        </OwnButton>
        <IconButton style={modalCloseIconStyle} onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
}
