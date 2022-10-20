import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/joy";
import { UserDataContext } from "../Context/UserDataContext";
import { LinkTypography } from "../styles/navbarStyles";

export default function SignUp() {
  const { userName, setUserName } = React.useContext(UserDataContext);
  const [anmeldenInput, setAnmeldenInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUserName(anmeldenInput);
  }

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
        Sign in
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <TextField
            sx={{ width: 420 }}
            onChange={(e) => setAnmeldenInput(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={userName}
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
          />
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox />}
            label="Sign for the newsletter"
          />
          <Button sx={{ width: 420, mt: 2 }} variant="contained" type="submit">
            Sign in
          </Button>
          <Link to="/signup" element={<SignUp />}>
            <Typography sx={{color: "primary.main", marginTop: 1}} >Sign up here</Typography>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
