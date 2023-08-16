import { Button } from "@mui/material";
import store from "../../store";
import { showNotification, hideNotification } from "../../store/actions/notificationAction";

export const CategoryPage = () => {
  const openToastMessage = () => {
    store.dispatch(showNotification("Yahoooo"));
  };
  const closeToastMessage = () => {
    store.dispatch(hideNotification());
  };
  return (
    <>
      <Button onClick={openToastMessage} color="primary" variant="contained">
        Click Me!
      </Button>
      <Button onClick={closeToastMessage} color="error" variant="contained">
        Close Me!
      </Button>
    </>
  );
};
