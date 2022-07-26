import styles from "./AccountEvents.module.scss";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { useState } from "react";

function AccountEvents() {
  const [isHasMessage] = useState(false);
  const [isHasEvent] = useState(true);

  return (
    <div className={styles.container}>
      <div>
        {isHasMessage && <div className={styles.badge} />}
        <IoChatbubbleEllipsesOutline size="25" color="gray" />
      </div>
      <div>
        {isHasEvent && <div className={styles.badge} />}
        <IoNotificationsOutline size="25" color="gray" />
      </div>
    </div>
  );
}

export default AccountEvents;
