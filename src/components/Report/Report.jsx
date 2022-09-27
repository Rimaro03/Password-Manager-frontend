import {
  Backdrop,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PasswordSecurity from "../../charts/PasswordSecurity";
import { HomepageContainer } from "../../style/components";
import DataCard from "../DataCard/DataCard";
import checkPasswordSecurity from "../../functions/checkPasswordSecurity";
import { Apps, Dangerous, Loop, ReportProblem } from "@mui/icons-material";
import PasswordCard from "../PasswordCard/PasswordCard";

const Report = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies();
  const [passwords, setPasswords] = useState([]);
  const [checkedPasswords, setCheckedPasswords] = useState({
    safe: {
      perc: 0,
      list: [],
    },
    weak: {
      perc: 0,
      list: [],
    },
    reused: {
      perc: 0,
      list: [],
    },
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://password-manager-backend.vercel.app/user/passwords", {
      headers: {
        Authorization: cookie.session,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPasswords(json.passwords);
        checkPasswordSecurity(json.passwords).then((res) => {
          setCheckedPasswords(res);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const sx = matches
    ? { width: "auto", height: "100%" }
    : {
        width: `calc(100% - 450px)`,
        ml: `340px`,
        mt: "7em",
        height: "100%",
        display: "flex",
        flexDirection: `${matches ? "column" : "row"}`,
      };

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <HomepageContainer sx={sx}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%", height: "100%" }}
            pt={matches ? 5 : 0}
          >
            <Typography variant={"h5"} sx={{ margin: "auto" }}>
              Security report
            </Typography>
            <Box>
              <PasswordSecurity checkedPasswords={checkedPasswords} />
            </Box>
            <Box sx={{ height: "100%" }}>
              <DataCard
                section="safe"
                icon={<Apps fontSize={"large"} color={"secondary"} />}
                datas={checkedPasswords["safe"]}
              />
              <DataCard
                section="weak"
                icon={<ReportProblem fontSize={"large"} color={"secondary"} />}
                datas={checkedPasswords["weak"]}
              />
              <DataCard
                section="reused"
                icon={<Loop fontSize={"large"} color={"secondary"} />}
                datas={checkedPasswords["reused"]}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%", height: "100%" }}
            pt={matches ? 20 : 0}
          >
            <Typography variant={"h5"} sx={{ margin: "auto" }}>
              Latest password
            </Typography>
            {passwords.map((item, index) => {
              while (index <= 4) {
                return <PasswordCard passwordObj={item} key={index} />;
              }
            })}
          </Box>
        </HomepageContainer>
      )}
    </>
  );
};

export default Report;
