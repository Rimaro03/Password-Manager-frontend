import { Apps, Grid3x3 } from "@mui/icons-material";
import { ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DataCardContainer } from "../../style/components";

const DataCard = (props) => {
  return (
    <DataCardContainer>
      <Box display={"flex"}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <Typography variant="h6" sx={{ margin: "2px" }}>
          {props.section}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ margin: "auto" }}>
          {props.datas.list.length}
        </Typography>
      </Box>
    </DataCardContainer>
  );
};

export default DataCard;
