import { createTheme } from "@mui/material";

export const PALETTE = {
  primary: {
    main: "#4756CA",
  },
  secondary: {
    main: "#FFFFFF",
  },
  black: {
    main: "#000000",
  },
};

export const theme = createTheme({
  palette: PALETTE,
  shape: {
    borderRadius: 20,
  },
});
