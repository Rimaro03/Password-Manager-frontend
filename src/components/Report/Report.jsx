import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PasswordSecurity from "../../charts/PasswordSecurity";
import { HomepageContainer } from "../../style/components";

const Report = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const sx = matches
    ? { width: "auto" }
    : {
        width: `calc(100% - 450px)`,
        ml: `340px`,
      };

  return (
    <HomepageContainer sx={sx}>
      <PasswordSecurity />
    </HomepageContainer>
  );
};

export default Report;
