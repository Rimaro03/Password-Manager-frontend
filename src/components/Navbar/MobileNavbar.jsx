import {
  AccountCircle,
  Home,
  Key,
  Lock,
  Logout,
  Loop,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/ui";
import { MenuBox, MenuItem, MenuTitle } from "../../style/components";
import { palette } from "../../style/theme";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const handleLogout = () => {
    navigate("/login");
    removeCookie("session");
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
            <MenuBox>
              <ListItemIcon>
                <Home fontSize={"large"} sx={{ color: "white" }} />
              </ListItemIcon>
              <MenuItem
                variant={"h6"}
                onClick={() => {
                  navigate("/homepage");
                }}
              >
                Homepage
              </MenuItem>
            </MenuBox>
            <MenuBox>
              <ListItemIcon>
                <Key fontSize={"large"} sx={{ color: "white" }} />
              </ListItemIcon>
              <MenuItem
                variant={"h6"}
                onClick={() => {
                  navigate("/vault");
                }}
              >
                My vault
              </MenuItem>
            </MenuBox>
            <MenuBox>
              <Loop fontSize={"large"} sx={{ color: "white" }} />
              <MenuItem
                variant={"h6"}
                onClick={() => {
                  navigate("/generator");
                }}
              >
                Generator
              </MenuItem>
            </MenuBox>
          </Box>
        </Box>
        <Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <AccountCircle
              fontSize="large"
              sx={{ margin: "auto", color: "white" }}
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
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;
