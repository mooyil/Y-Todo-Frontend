import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { AppBar, Box, Typography, IconButton, Toolbar } from "@mui/material";
import { LinkTypography } from "../styles/navbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarContext } from "../Context/SidebarContext";
import { TabsContext } from "../Context/TabsContext";

export default function Navbar() {
  const {tabValue, setTabvalue} = React.useContext(TabsContext)
  const [sidebar, setSidebar] = React.useContext(SidebarContext);
  const [tabTitle, setTabTitle] = React.useState("")

  React.useEffect(() => {
    if(tabValue === 0){
      setTabTitle("Arbeit")
    } else if(tabValue === 1){
      setTabTitle("Schule")
    } else if(tabValue === 2){
      setTabTitle("Zuhause")
    }
  }, [tabValue])
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ height:65, backgroundColor: "#1565c0", position: "static"}} >
        <Toolbar>
          <IconButton
            onClick={() => setSidebar((prevSidebar) => !prevSidebar)}
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
            {tabTitle}
          </Typography>
          <Link className="signup-link" to="/signup" element={<SignUp />}>
            <LinkTypography>Sign Up</LinkTypography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
