import {
  AccountCircle,
  EmailRounded,
  Lock,
  LockOpen,
} from "@mui/icons-material";
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
import { FormContainer } from "../style/components";
import { palette } from "../style/theme";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { useUIContext } from "../context/ui";
import AvatarChooser from "../components/AvatarChooser/AvatarChooser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { snackOpen, setSnackOpen } = useUIContext();
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  const validatePassword = new RegExp(
    '^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*d)(?=.*[!&$%&? "]).*$'
  );

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!(email.length > 0 && username.length > 0 && password.length > 0)) {
      setSeverity("error");
      setMessage("Insert all credentials required");
      setSnackOpen(true);
      setSnackOpen(false);
      return;
    }
    if (!(password == passwordConfirm)) {
      setMessage("Password and confirm password are different");
      setSnackOpen(true);
      setSnackOpen(false);
      return;
    }
    if (validatePassword.test(password)) {
      setSeverity("error");
      setMessage(
        "Password must be longer than 8 characters and must contain a number and a special character"
      );
      setSnackOpen(true);
      setSnackOpen(false);
      return;
    }
    await fetch("https://password-manager-backend.vercel.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        avatar: avatar,
      }),
    })
      .then(async (res) => {
        setIsLoading(false);
        if (res.ok) {
          setSeverity("success");
          setMessage("Registration completed successfully");
          setSnackOpen(true);
          setInterval(() => {
            navigate("/login");
          }, 1500);
        } else {
          setSeverity("error");
          setMessage("A general error has occured");
          setSnackOpen(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setSeverity("error");
        setMessage("A general error has occured");
        setSnackOpen(true);
      });
  };

  return (
    <FormContainer>
      <LockOpen fontSize="large" sx={{ color: palette.purple.main }} />
      <Typography variant="h5">Sign up</Typography>
      <Typography variant="subtitle1" color={palette.darkWhite.main}>
        Enter your credentials
      </Typography>
      <AvatarChooser
        setAvatar={(avatar) => setAvatar(avatar)}
        avatar={avatar}
      />
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
          width: "100%",
        }}
      >
        <TextField
          id="input-with-sx"
          type={"email"}
          color="secondary"
          label={
            <Box display={"flex"}>
              <EmailRounded color="secondary" />
              <Typography sx={{ ml: 1 }}>Email</Typography>
            </Box>
          }
          variant="outlined"
          sx={{ width: "100%", input: { color: "white" } }}
          onChange={(e) => {
            setEmail(e.target.value);
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
          color="secondary"
          label={
            <Box display={"flex"}>
              <Lock color="secondary" />
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
          color="secondary"
          label={
            <Box display={"flex"}>
              <Lock color="secondary" />
              <Typography sx={{ ml: 1 }}>Confirm password</Typography>
            </Box>
          }
          variant="outlined"
          type={"password"}
          sx={{ width: "100%", input: { color: "white" } }}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
        onClick={handleSubmit}
      >
        SIGN IN
      </Button>
      <Typography variant="caption" sx={{ color: palette.darkWhite.main }}>
        <Link
          href="#"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already have an account? Log in here
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
      <Message message={message} severity={severity} />
    </FormContainer>
  );
};

export default Register;
