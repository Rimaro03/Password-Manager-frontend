import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e3eaf1",
  borderRadius: theme.shape.borderRadius,
  maxWidth: "300px",
  margin: "auto",
  padding: 30,
  textAlign: "center",
  alignItems: "center",
  marginTop: 80,
}));

export const MenuBox = styled(Box)(({ theme }) => ({
  width: "90%",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  ":hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const MenuItem = styled(Typography)(() => ({
  width: "fit-content",
  margin: "auto",
  padding: 15,
  textAlign: "left",
}));
