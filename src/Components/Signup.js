import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Avatar } from "@mui/joy";
import Signin from "./Signin";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { SignupContext } from "../Context/SignupContext";

export default function Signup() {
  const { username, setusername, password, setPassword } =
    React.useContext(SignupContext);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await authService.signup(username, password).then(
        (response) => {
          if (response === "The user already exists") {
          } else {
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
        sx={{ backgroundColor: "#0288d1", color: "white" }}
        src="/broken-image.jpg"
      />
      <Typography variant="h5" mt={2}>
        Sign up
      </Typography>
      <form
        style={{
        textAlign: "center"
        }}
        onSubmit={handleSignup}
      >
        <TextField
          sx={{ width: "90%", maxWidth: 420 }}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
        />
        <TextField
          sx={{ width: "90%", maxWidth: 420 }}
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
        <Button
          sx={{ width: "90%", maxWidth: 420, mt: 2 }}
          variant="contained"
          type="submit"
        >
          Sign up
        </Button>
        <Link to="/signin" element={<Signin />}>
          <Typography sx={{padding: 2}}>Sign In</Typography>
        </Link>
      </form>
    </Box>
  );
}
