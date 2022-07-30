import { ISidebarItem } from "../../types/types";
import styles from "./SidebarItem.module.scss";

interface IProps {
  data: ISidebarItem;
  isActive: boolean;
  onClick: (label: string, link: string) => void;
}

function SidebarItem({ data, isActive, onClick }: IProps) {
  const Icon = data.icon;

  return (
    <div
      className={`${styles.container} ${isActive && styles.active}`}
      onClick={() => onClick(data.label, data.link)}
    >
      <div className={styles.icon}>
        <Icon size="20" color="black" />
      </div>
      <div>{data.label}</div>
    </div>
  );
}

export default SidebarItem;
