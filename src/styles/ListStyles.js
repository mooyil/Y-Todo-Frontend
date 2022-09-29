import styled from "styled-components";
import { Button } from "@mui/material";



export const OwnButton = styled(Button)({
})

export const modalStyle = {
    position: "absolute",
    height: 400,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "beige",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  export const modalCloseIconStyle = {
    position: "absolute",
    top: 0,
    right: 0
  }