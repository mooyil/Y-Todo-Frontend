import React from "react";
import Signin from "./components/Signin";
import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import TodoApp from "./components/TodoApp";
import { createTheme } from "@mui/material";

function App() {

const [mode, setMode] = React.useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        light: "#f6685e",
        dark: "#aa2e25",
        main: "#f44336",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ height: "100vh" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp mode={mode} setMode={setMode} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
