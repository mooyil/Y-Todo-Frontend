import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/joy";
import Signin from "./Signin";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { SignupContext } from "../Context/SignupContext";
import { UserDataContext } from "../Context/UserDataContext";

export default function Signup() {
  const { email, setEmail, password, setPassword } =
    React.useContext(SignupContext);
    // const [currentUserEmail, setCurrentUserEmail] = React.useContext(UserDataContext)

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await authService.signup(email, password).then(
        (response) => {
          if(response === "The user already exists") {
          } else{
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);          
          navigate("/");
          window.location.reload();
        }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{ backgroundColor: "#0288d1", color: "white"}}
        src="/broken-image.jpg"
      />
      <Typography variant="h5" mt={2}>
        Sign up
      </Typography>
      <form onSubmit={handleSignup}>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <TextField
            sx={{ width: 420 }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(event) => {setEmail(event.target.value);}}
          />
          <TextField
            sx={{ width: 420 }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox />}
            label="Sign for the newsletter"
          />
          <Button sx={{ width: 420, mt: 2 }} variant="contained" type="submit">
            Sign up
          </Button>
          <Link to="/signin" element={<Signin />}>
            <Typography>Sign In</Typography>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
