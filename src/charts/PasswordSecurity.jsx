import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { useCookies } from "react-cookie";
import checkPasswordSecurity from "../functions/checkPasswordSecurity";
import { Backdrop, CircularProgress } from "@mui/material";

const PasswordSecurity = () => {
  const [cookie, setCookie] = useCookies();
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://password-manager-backend.vercel.app/user/passwords", {
      headers: {
        Authorization: cookie.session,
      },
    })
      .then((res) => res.json())
      .then((json) => {
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

  const gaugeData = [
    {
      value: checkedPasswords["safe"].perc,
      title: {
        offsetCenter: ["0%", "-30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-20%"],
      },
    },
    {
      value: checkedPasswords["weak"].perc,
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    {
      value: checkedPasswords["reused"].perc,
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "40%"],
      },
    },
  ];

  const options = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
          },
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 10,
        },
        data: gaugeData,
        title: {
          fontSize: 14,
          color: "#ffffff",
        },
        color: [
          "#99cc33",
          "#ffcc00",
          "#ff9966",
          "91cc75",
          "fac858",
          "ee6666",
          "73c0de",
          "3ba272",
          "fc8452",
          "9a60b4",
          "ea7ccc",
        ],
        textStyle: {
          fontFamily: "sans-serif",
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: "normal",
        },
        gradientColor: ["#99cc33", "#ffcc00", "#cc3300"],
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: "auto",
          borderColor: "auto",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
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
        <ReactECharts option={options} />
      )}
    </>
  );
};

export default PasswordSecurity;
