import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import {
  AppBar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { LinkTypography, OwnNavbar } from "../styles/navbarStyles";
import ListAltIcon from '@mui/icons-material/ListAlt';
export default function Navbar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <OwnNavbar>
            <ListAltIcon sx={{marginRight: 1}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Y-Todo
          </Typography>
          <Link className="signup-link" to="/signup" element={<SignUp />}>
            <LinkTypography >
              Sign Up
            </LinkTypography>
          </Link>
        </OwnNavbar>
      </AppBar>
    </Box>

    // <nav className="navbar">
    //     <h1 className="header">Y-Todo</h1>
    //       {/* Link für meine SignUp Seite */}
    //
    // </nav>
  );
}
