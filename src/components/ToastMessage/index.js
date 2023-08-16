import { Snackbar } from "@mui/material";
import React from "react";
import store from "../../store";
import { notificationSelector } from "../../store/selectors";
import { hideNotification } from "../../store/actions/notificationAction";

export const ToastMessage = (props) => {
  const [payload, setPayload] = React.useState(notificationSelector());
  const handleClose = () => {
    store.dispatch(hideNotification());
  };
  const subcribeStore = () => {
    store.subscribe(() => setPayload(notificationSelector()));
  };
  subcribeStore();
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={payload.isOpen}
      onClose={handleClose}
      message={payload.content}
      autoHideDuration={1000}
      disableWindowBlurListener={true}
    />
  );
};
