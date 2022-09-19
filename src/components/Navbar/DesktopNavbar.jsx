import { AccountCircle } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MenuBox, MenuItem } from "../../style/components";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();

  const handleLogout = () => {
    navigate("/login");
    removeCookie("session");
  };

  return (
    <Drawer open={true} variant="permanent">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          pt={5}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => {
            navigate("/");
          }}
          textAlign={"center"}
        >
          FAKE SHOP
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          justifyContent={"space-around"}
          height={"50%"}
        >
          <MenuBox>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/men");
              }}
            >
              MEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/women");
              }}
            >
              WOMEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/jewelry");
              }}
            >
              JEWELERY
            </MenuItem>
          </MenuBox>
        </Box>
        <Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <AccountCircle fontSize="large" sx={{ margin: "auto" }} />
            <Box>
              <Typography variant={"h6"}>Giuseppe Tutino</Typography>
              <Typography variant={"subtitle2"} color={"text.secondary"}>
                View profile
              </Typography>
            </Box>
            <IconButton
              fontSize="medium"
              sx={{ margin: "auto" }}
              onClick={handleLogout}
            >
              {/*<Logout />*/}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DesktopNavbar;
