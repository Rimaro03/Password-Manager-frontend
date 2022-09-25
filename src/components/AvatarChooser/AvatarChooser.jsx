import { Edit } from "@mui/icons-material";
import { Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { AvatarContainer, EditText } from "../../style/components";

const AvatarChooser = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const changeAvatar = () => {
    const seed = uuid();
    fetch(`https://avatars.dicebear.com/api/miniavs/${seed}.svg`).then((res) =>
      props.setAvatar(res.url)
    );
  };

  useEffect(() => {
    changeAvatar();
  }, []);

  return (
    <AvatarContainer
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onClick={changeAvatar}
    >
      <img src={props.avatar} />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <EditText variant="caption" sx={{ p: 1 }}>
          Click to change avatar
        </EditText>
      </Popover>
    </AvatarContainer>
  );
};

export default AvatarChooser;
