
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@mui/material";

// export default createTheme(navbarTheme);

export const LinkTypography = styled(Typography)({
  flexGrow: 1,
  color: "white",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const OwnNavbar = styled(Toolbar)({
  backgroundColor: "#2874a6",
  padding: 10,
});
