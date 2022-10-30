import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/joy";
import Signup from "./Signup";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { SigninContext } from "../Context/SigninContext";
import { TextFeldundButtonContext } from "../Context/TextFeldundButtonContext";
import { UserDataContext } from "../Context/UserDataContext";

export default function Signin() {
  const { email, setEmail, password, setPassword } =
    React.useContext(SigninContext);
  const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
  const [userEmail, setUserEmail] = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      await authService.signin(email, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(userEmail);
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Avatar
        sx={{ backgroundColor: "#0288d1", color: "white" }}
        src="/broken-image.jpg"
      />
      <Typography variant="h5" mt={2}>
        Sign in
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
        onSubmit={handleSignin}
      >
        <TextField
          sx={{ width: "90%", maxWidth: 420 }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          sx={{ width: "90%", maxWidth: 420 }}
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          sx={{ width: "90%", maxWidth: 420, mt: 2 }}
          variant="contained"
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <Link to="/signup" element={<Signup />}>
        <Typography>Sign Up</Typography>
      </Link>
    </Box>
  );
}
