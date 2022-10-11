import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import { modalCloseIconStyle, modalStyle, OwnButton } from "../styles/ListStyles";
import DateAndTimePicker from "./DateAndTimePicker";

export default function UdateTodoModal (params) {
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
              editIt(todo._id);
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
    )
}