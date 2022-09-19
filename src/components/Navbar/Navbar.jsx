import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return <>{!matches ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
