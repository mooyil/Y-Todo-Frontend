import React from "react";
import { Modal, TextField, Box, IconButton, Button  } from "@mui/material";
import { modalStyle, modalCloseIconStyle } from "../styles/ModalStyle";
import Add from "@mui/icons-material/Add";
import { SidebarContext } from "../Context/SidebarContext";
import { Close } from "@mui/icons-material";

export default function SidebarModal ({add}) { 
    const {open, setOpen, tabInputValue ,setTabInputValue, handleOpen, handleClose} = React.useContext(SidebarContext)
    return (
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <IconButton style={modalCloseIconStyle} onClick={handleClose}>
          <Close />
        </IconButton>
          <TextField
          sx={{width: "80%", mt: 7}}
          label="Add a new List..."
            onChange={(event) => setTabInputValue(event.target.value)}
          />
          <Button
          startIcon={<Add/>}
          variant="contained"
          sx={{ height: 55, mt: 0.5}}
            onClick={() => {
              add();
              handleClose();
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
    )
 }