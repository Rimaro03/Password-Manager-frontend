import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import checkLogged from "../functions/checkLogged";

const Homepage = () => {
  const [cookie, setCookie] = useCookies(["session"]);
  const navigate = useNavigate();
  const [password, setPassword] = useState([]);

  const getPasswords = async () => {
    return await fetch(
      "https://password-manager-backend.vercel.app/user/passwords",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookie.session,
        },
      }
    ).then(async (res) => {
      return await res.json();
    });
  };

  useEffect(() => {
    if (!cookie.session) {
      navigate("/login");
    } else {
      checkLogged(cookie.session).then((res) => {
        if (!res.addPassword == true) {
          navigate("/login");
        }
      });
    }

    getPasswords().then((res) => setPassword(res.passwords));
  }, []);

  return (
    <div>
      {password.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
            <li>{item.username}</li>
            <li>{item.password}</li>
            <li>{item.url}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Homepage;
