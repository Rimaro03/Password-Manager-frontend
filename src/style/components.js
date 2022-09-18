import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { PALETTE } from "./theme";

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
