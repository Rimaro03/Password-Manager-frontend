import { AccountCircle, Lock, LockOpen } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Message from "../components/Message";
import { FormContainer } from "../style/components";
import { palette } from "../style/theme";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUIContext } from "../context/ui";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["session"]);
  const { setSnackOpen } = useUIContext();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie.session) {
      navigate("/homepage");
    }
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!(username.length > 0 && password.length > 0)) {
      setMessage("Insert all credentials required");
      setSnackOpen(true);
      return;
    }
    await fetch("https://password-manager-backend.vercel.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then(async (res) => {
        setIsLoading(false);
        const json = await res.json();
        if (res.ok) {
          navigate("/homepage");
          setCookie("session", json.token, { path: "/" });
        } else {
          setMessage("A general error has occured");
          setSnackOpen(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setMessage("A general error has occured");
        setSnackOpen(true);
      });
  };

  return (
    <FormContainer>
      <LockOpen fontSize="large" sx={{ color: palette.purple.main }} />
      <Typography variant="h5" sx={{ mt: 5 }} color="white">
        Sign In
      </Typography>
      <Typography variant="subtitle1" color={palette.darkWhite.main}>
        Enter your credentials
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 2,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          id="input-with-sx"
          color="secondary"
          label={
            <Box display={"flex"}>
              <AccountCircle color={"secondary"} />
              <Typography sx={{ ml: 1 }}>Username</Typography>
            </Box>
          }
          variant="outlined"
          sx={{ width: "100%", input: { color: "white" } }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 2,
          justifyContent: "center",
        }}
      >
        <TextField
          id="input-with-sx"
          label={
            <Box display={"flex"}>
              <Lock color={"secondary"} />
              <Typography sx={{ ml: 1 }}>Password</Typography>
            </Box>
          }
          variant="outlined"
          type={"password"}
          sx={{ width: "100%", input: { color: "white" } }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ width: "100%", mt: 2, mb: 1 }}
        onClick={handleSubmit}
      >
        SIGN IN
      </Button>
      <Typography variant="caption">
        <Link
          href="#"
          onClick={() => {
            navigate("/register");
          }}
          color="secondary"
        >
          Not registered yet? Create an account here
        </Link>
      </Typography>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      <Message message={message} severity={"error"} />
    </FormContainer>
  );
};

export default Login;
