import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { modalCloseIconStyle, modalStyle } from "../styles/ModalStyle";
import DateAndTimePicker from "./DateAndTimePicker";
import { MyContext } from "../context/ContextProvider";
import {
  DateTimePickerContext,
} from "../context/DateTimePickerProvider";
export default function UpdateTodoModal({
  todo,
  editIt,
  updatedInputValue,
  setUpdatedInputValue,
  openUpdateModal,
  setOpenUpdateModal,
}) {

  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  return (
    <Modal
      keepMounted
      open={openUpdateModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={modalStyle}>
        <TextField
          value={updatedInputValue}
          label="Update todo..."
          sx={{ width: "100%", mt: 7 }}
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
        <IconButton
          style={modalCloseIconStyle}
          onClick={() => setOpenUpdateModal(false)}
        >
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
}
