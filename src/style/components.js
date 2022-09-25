import {
  Box,
  ListItem,
  Popover,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material";
import { palette } from "./theme";

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#424242",
  borderRadius: theme.shape.borderRadius,
  maxWidth: "300px",
  margin: "auto",
  padding: 30,
  textAlign: "center",
  alignItems: "center",
  marginTop: 80,
}));

export const MenuBox = styled(ListItem)(({ theme }) => ({
  width: "90%",
  alignItems: "center",
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  ":hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.hover.main,
  },
}));

export const MenuItem = styled(Typography)(() => ({
  padding: 15,
  textAlign: "center",
}));

export const MenuTitle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  paddingTop: 50,
  width: "100%",
}));

export const AppbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
}));

export const SearchField = styled(TextField)(() => ({
  "& label, & label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}));

export const AvatarContainer = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "50%",
  width: "30%",
  padding: 10,
  margin: "auto",
  alignItems: "center",
  ":hover": {
    cursor: "pointer",
  },
}));

export const EditText = styled(Typography)(() => ({
  color: "black",
}));

export const ProfileContainer = styled(Box)(() => ({
  ":hover": {
    cursor: "pointer",
  },
}));

export const ProfilePage = styled(Box)(() => ({
  backgroundColor: palette.primary.main,
  display: "flex",
  borderRadius: 20,
  margin: "auto",
  padding: 10,
}));

export const PersonalDatas = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));
