import { createContext, useState, useEffect } from "react";

// This is the default export. We define a notification, plus 2 methods
const NotificationContext = createContext({
  notification: null, // This will later be an object like { title: ...}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  // We'll use this state to load an active notification
  const [activeNotification, setActiveNotification] = useState();

  // We use useEffect to set a timer that will hide the notification after 3 seconds
  // It should only hide success & error types. Pending should stay as long as it's pending
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      // We clear the timer
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
