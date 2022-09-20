import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#653496",
  },
  secondary: {
    main: "#ffffff",
  },
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
  hover: {
    main: "#595959",
  },
};

export const theme = createTheme({
  palette: palette,
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.navbar.main,
          width: "350px",
          border: "none",
        },
      },
    },
  },
});
