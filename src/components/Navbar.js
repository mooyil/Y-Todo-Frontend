import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import { AppBar, Box, Typography, IconButton, Toolbar } from "@mui/material";
import { LinkTypography } from "../styles/NavbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { MyContext } from "../context/ContextProvider";

export default function Navbar({ logout }) {
 
  const [tabTitle, setTabTitle] = React.useState("");
  const {
    currentTab,
    sidebar,
    setSidebar,
  } = React.useContext(MyContext);

  return (
    <Box>
      <AppBar
        sx={{ height: 65, backgroundColor: "primary.main", position: "sticky" }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setSidebar(true)}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography flexGrow={1} variant="h6" component="h6">
            Y-Todo
          </Typography>
          <Typography flexGrow={1}>{currentTab}</Typography>
          <Link
            onClick={logout}
            className="signup-link"
            to="/signin"
            element={<Signin />}
          >
            <LinkTypography flexGrow={1}>Logout</LinkTypography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
