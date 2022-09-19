import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import checkLogged from "../functions/checkLogged";

const Homepage = () => {
  const [cookie, removeCookie] = useCookies(["session"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.session) {
      return navigate("/login");
    } else {
      checkLogged(cookie.session).then((res) => {
        if (!res.ok) {
          removeCookie("session");
          return navigate("/login");
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Homepage;
