import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Avatar } from "@mui/joy";
import Signin from "./Signin";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { MyContext } from "../context/ContextProvider";

export default function Signup() {
  const {
    signupUsername,
    setSignupUsername,
    signupPassword,
    setSignupPassword,
  } = React.useContext(MyContext);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await authService.signup(signupUsername, signupPassword).then(
        (response) => {
          if (response === "The user already exists") {
          } else {
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
          textAlign: "center",
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
          value={signupUsername}
          onChange={(event) => {
            setSignupUsername(event.target.value);
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
          value={signupPassword}
          onChange={(event) => setSignupPassword(event.target.value)}
        />
        <Button
          sx={{ width: "90%", maxWidth: 420, mt: 2 }}
          variant="contained"
          type="submit"
        >
          Sign up
        </Button>
        <Link to="/signin" element={<Signin />}>
          <Typography sx={{ padding: 2 }}>Sign In</Typography>
        </Link>
      </form>
    </Box>
  );
}
