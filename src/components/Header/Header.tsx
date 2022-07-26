import AccountAvatar from "../AccountAvatar/AccountAvatar";
import AccountEvents from "../AccountEvents/AccountEvents";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.arrow}>
          <HiOutlineArrowLeft size="25" color="black" />
        </div>
        <Breadcrumbs />
      </div>
      <div className={styles.account}>
        <SearchBar />
        <AccountEvents />
        <AccountAvatar />
      </div>
    </header>
  );
}

export default Header;
