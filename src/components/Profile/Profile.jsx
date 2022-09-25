import { Backdrop, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUIContext } from "../../context/ui";
import {
  AvatarContainer,
  PersonalDatas,
  ProfilePage,
} from "../../style/components";
import { palette } from "../../style/theme";
import AvatarChooser from "../AvatarChooser/AvatarChooser";

const Profile = () => {
  const { profileOpen, setProfileOpen } = useUIContext();
  const userDatas = JSON.parse(window.localStorage.getItem("userDatas"));

  const closeProfile = () => {
    setProfileOpen(false);
  };

  return (
    <Backdrop open={profileOpen} onClick={closeProfile}>
      <ProfilePage>
        <Box width={150}>
          <img
            src={
              "https://avatars.dicebear.com/api/miniavs/1f502383-09b9-4833-bf53-b1101f8f303d.svg"
            }
            alt="ciao"
          />
        </Box>
        <Box p={2}>
          <Typography variant="h6">{userDatas.username}</Typography>
          <Typography variant="caption" color={palette.darkWhite.main}>
            {userDatas.email}
          </Typography>
        </Box>
      </ProfilePage>
    </Backdrop>
  );
};

export default Profile;
