import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
} from "@mui/material";
import { LinkTypography, OwnNavbar } from "../styles/navbarStyles";
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{height: 70, backgroundColor: "primary.main"}} position="static">
        <Toolbar >
        <IconButton
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
          <Link className="signup-link" to="/signup" element={<SignUp />}>
            <LinkTypography >
              Sign Up
            </LinkTypography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>

    // <nav className="navbar">
    //     <h1 className="header">Y-Todo</h1>
    //       {/* Link für meine SignUp Seite */}
    //
    // </nav>
  );
}
