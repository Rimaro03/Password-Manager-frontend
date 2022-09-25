import {
  AccountCircle,
  Home,
  Key,
  Lock,
  Logout,
  Loop,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/ui";
import {
  MenuBox,
  MenuItem,
  MenuTitle,
  ProfileContainer,
} from "../../style/components";
import { palette } from "../../style/theme";
import Profile from "../Profile/Profile";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const { profileOpen, setProfileOpen } = useUIContext();

  useEffect(() => {
    setProfileOpen(false);
  }, []);

  const handleLogout = () => {
    navigate("/login");
    removeCookie("session");
  };

  const openProfile = () => {
    setProfileOpen(true);
    setDrawerOpen(false);
  };

  return (
    <Drawer
      open={drawerOpen}
      onClose={() => {
        setDrawerOpen(false);
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Box>
          <MenuTitle>
            <Box color="white" display={"flex"}>
              <Lock fontSize="large" sx={{ m: 2 }} />
              <Typography
                variant="h4"
                fontSize={32}
                sx={{ width: "min-content" }}
              >
                Password Manager
              </Typography>
            </Box>
            <Box></Box>
          </MenuTitle>
          <Box sx={{ mt: 10 }}>
            <MenuBox
              onClick={() => {
                navigate("/homepage");
              }}
            >
              <ListItemIcon>
                <Home fontSize={"large"} sx={{ color: "white" }} />
              </ListItemIcon>
              <MenuItem variant={"h6"}>Homepage</MenuItem>
            </MenuBox>
            <MenuBox
              onClick={() => {
                navigate("/vault");
              }}
            >
              <ListItemIcon>
                <Key fontSize={"large"} sx={{ color: "white" }} />
              </ListItemIcon>
              <MenuItem variant={"h6"}>My vault</MenuItem>
            </MenuBox>
            <MenuBox
              onClick={() => {
                navigate("/generator");
              }}
            >
              <ListItemIcon>
                <Loop fontSize={"large"} sx={{ color: "white" }} />
              </ListItemIcon>
              <MenuItem variant={"h6"}>Generator</MenuItem>
            </MenuBox>
          </Box>
        </Box>
        <ProfileContainer onClick={openProfile}>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <Avatar
              src={
                "https://avatars.dicebear.com/api/miniavs/1f502383-09b9-4833-bf53-b1101f8f303d.svg"
              }
              sx={{
                margin: "auto",
                width: 50,
                height: 50,
                backgroundColor: "white",
              }}
            />
            <Box>
              <Typography variant={"h6"}>Giuseppe Tutino</Typography>
              <Typography variant={"subtitle2"} color={palette.darkWhite.main}>
                View profile
              </Typography>
            </Box>
            <IconButton
              fontSize="medium"
              sx={{ margin: "auto", color: "white" }}
              onClick={handleLogout}
            >
              <Logout />
            </IconButton>
          </Box>
        </ProfileContainer>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;
