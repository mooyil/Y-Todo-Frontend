import { Box, TextField, Button, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/joy";

export default function SignUp() {
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

      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <TextField
          sx={{ width: 420 }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
          autoComplete="current-password"
        />
        <FormControlLabel
          sx={{ mt: 2 }}
          control={<Checkbox />}
          label="Sign for the newsletter"
        />
        <Button sx={{ width: 420, mt: 2 }} variant="contained">
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
