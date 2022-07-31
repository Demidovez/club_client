import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./Layout.module.scss";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
