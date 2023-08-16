export const showNotification = (content) => {
  return {
    type: "SHOW_NOTIFICATION",
    payload: {
      content,
    },
  };
};

export const hideNotification = () => {
  return {
    type: "HIDE_NOTIFICATION",
  };
};
