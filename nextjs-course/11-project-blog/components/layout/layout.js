import { Fragment, useContext } from "react";
import MainNavigation from "./main-navigation";
import Logo from "./logo";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
