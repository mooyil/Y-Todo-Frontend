import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import { AppBar, Box, Typography, IconButton, Toolbar } from "@mui/material";
import { LinkTypography } from "../styles/NavbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarContext } from "../context/SidebarContext";
import { TabsContext } from "../context/TabsContext";

export default function Navbar({logout}) {
  const {tabValue, setTabvalue, currentTab, setCurrentTab, listTabs} = React.useContext(TabsContext)
  const {sidebar, setSidebar} = React.useContext(SidebarContext);
  const [tabTitle, setTabTitle] = React.useState("")


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ height:65, backgroundColor: "#1565c0", position: "fixed"}} >
        <Toolbar>
          <IconButton
            onClick={() => setSidebar((true))}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Y-Todo
          </Typography>
          <Typography sx={{flexGrow: 1}}>
            {currentTab}
          </Typography>
          <Link onClick={logout} className="signup-link" to="/signin" element={<Signin />}>
            <LinkTypography>Logout</LinkTypography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
