import styles from "./AccountAvatar.module.scss";
import { IoChevronDownOutline } from "react-icons/io5";

function AccountAvatar() {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img src="https://club.nikolaydemidovez.by/images/avatars/avatar.jpeg" />
      </div>
      <IoChevronDownOutline size="18" color="gray" />
    </div>
  );
}

export default AccountAvatar;
