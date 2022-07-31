import styles from "./CardCategorySkeleton.module.scss";
import { Skeleton } from "antd";

function CardCategorySkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton.Avatar active size="large" />
      <Skeleton active />
    </div>
  );
}

export default CardCategorySkeleton;
