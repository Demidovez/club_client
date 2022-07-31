import { IMaterialCategory } from "../../types/types";
import styles from "./CardCategory.module.scss";

interface IProps {
  data: IMaterialCategory;
  onClick: (category: string) => void;
}

function CardCategory({ data, onClick }: IProps) {
  return (
    <div className={styles.container} onClick={() => onClick(data.name)}>
      <div className={styles.icon} style={{ backgroundColor: data.color }}>
        {data.icon}
      </div>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
}

export default CardCategory;
