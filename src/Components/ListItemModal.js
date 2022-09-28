// import { modalStyle, modalCloseIconStyle } from "../styles/ListStyles";
// import { Box, TextField, IconButton } from "@mui/material";
// import { OwnButton } from "../styles/ListStyles";
// import { Modal } from "@mui/joy";
// import { Close } from "@mui/icons-material";
// import React from "react";

// export default function ListItemModal (props,{ setUpdatedInputValue,setUpdatedTodo, open, setOpen }) {


// return(
//   <Modal
//   keepMounted
//   open={open}
//   aria-labelledby="keep-mounted-modal-title"
//   aria-describedby="keep-mounted-modal-description"
// >
//   <Box sx={modalStyle}>
//     <TextField
//       label="Update todo..."
//       sx={{ backgroundColor: "white", width: 400, mt: 7 }}
//       onChange={(event) =>
//         setUpdatedInputValue(event.target.value)
//       }
//       type="text"
//     />
//     <OwnButton
//       variant="contained"
//       sx={{ color: "white", height: 50, mt: 1 }}
//       onClick={props.editIt}
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
// )
// }