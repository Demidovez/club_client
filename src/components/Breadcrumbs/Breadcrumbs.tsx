import styles from "./Breadcrumbs.module.scss";

function Breadcrumbs() {
  return (
    <div className={styles.container}>
      Главная {">"} Новости {">"} Новые закон для ИП
    </div>
  );
}

export default Breadcrumbs;
