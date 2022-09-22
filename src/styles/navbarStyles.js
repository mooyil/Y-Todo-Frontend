// import { createTheme } from "@mui/material";

// const navbarTheme = createTheme({
//   overrides: {
//     MuiAppBar: {
//       colorPrimary: {
//         backgroundColor: "red",
//       },
//     },
//   },
// });
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@mui/material";

// export default createTheme(navbarTheme);

export const LinkTypography = styled(Typography)({
  color: "white",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const OwnNavbar = styled(Toolbar)({
  backgroundColor: "#2874a6",
  padding: 10,
});
