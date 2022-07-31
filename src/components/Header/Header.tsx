import AccountAvatar from "../AccountAvatar/AccountAvatar";
import AccountEvents from "../AccountEvents/AccountEvents";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const { pathname } = useLocation();

  const [isParentPage, setIsParentPage] = useState(true);

  useEffect(() => {
    const countUrlItems = pathname.split("/").slice(1).length;

    setIsParentPage(countUrlItems === 1);
  }, [pathname]);

  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        {!isParentPage && (
          <>
            <div className={styles.arrow}>
              <HiOutlineArrowLeft size="25" color="black" />
            </div>
            <Breadcrumbs />
          </>
        )}
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
