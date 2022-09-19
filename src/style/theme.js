import { createTheme } from "@mui/material";

export const palette = {
  background: {
    main: "#303030",
  },
  navbar: {
    main: "#424242",
  },
  lightGrey: {
    main: "595959",
  },
  black: {
    main: "#06080C",
  },
  purple: {
    main: "#653496",
  },
  darkWhite: {
    main: "#D0CECE",
  },
};

export const theme = createTheme({
  palette: palette,
  shape: {
    borderRadius: 20,
  },
});
