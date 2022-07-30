import styles from "./Category.module.scss";
import { useParams } from "react-router-dom";

function Category() {
  const { name } = useParams();

  return <div className={styles.container}>Category: {name}</div>;
}

export default Category;
