import React from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useUIContext } from "../context/ui";

const Message = (props) => {
  const { snackOpen, setSnackOpen } = useUIContext();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.severity}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
