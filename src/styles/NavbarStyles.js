
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@mui/material";


export const LinkTypography = styled(Typography)({
  color:"white",
  flexGrow: 1,
  "&:hover": {
    textDecoration: "underline",
  },
});
