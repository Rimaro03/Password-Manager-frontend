import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import DesktopAppbar from "./DesktopAppbar";
import MobileAppbar from "./MobileAppbar";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return <>{!matches ? <DesktopAppbar /> : <MobileAppbar />}</>;
};

export default Appbar;
