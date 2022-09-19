import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { UIProvider } from "./context/ui";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Vault from "./pages/Vault";
import Generator from "./pages/Generator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/generator" element={<Generator />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
