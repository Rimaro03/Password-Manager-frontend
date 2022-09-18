import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { UIProvider } from "./context/ui";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
