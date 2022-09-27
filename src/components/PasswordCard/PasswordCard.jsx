import { Google, Menu, MoreVert } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { PasswordCardContainer } from "../../style/components";
import { palette } from "../../style/theme";

const PasswordCard = (props) => {
  const passwordObj = props.passwordObj;
  return (
    <>
      <PasswordCardContainer>
        <ListItem>
          <ListItemIcon>
            <img src={`https://${passwordObj.url}/favicon.ico`} width="40px" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h6">{passwordObj.url}</Typography>}
            secondary={
              <Typography variant={"subtitle2"} color={palette.darkWhite.main}>
                {passwordObj.username}
              </Typography>
            }
          />
        </ListItem>
        <IconButton sx={{ margin: "auto" }}>
          <MoreVert color="secondary" fontSize="large" />
        </IconButton>
      </PasswordCardContainer>
    </>
  );
};

export default PasswordCard;
