import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button } from "antd";
import styles from "./Settings.module.scss";
import { toogleNightModeAction } from "../../store/slices/settingsSlice";

function Settings() {
  const { theme } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const onToogleNightMode = () => {
    dispatch(toogleNightModeAction());
  };

  return (
    <div className={styles.container}>
      <h1>Настройки</h1>
      <p>
        Ночная тема:{" "}
        <span className={`${theme.isNightMode && styles.enabled}`}>
          {theme.isNightMode ? "Включена" : "Отключена"}
        </span>
      </p>
      <Button
        type="primary"
        className={`${styles.btn} ${theme.isNightMode && styles.btn_active}`}
        onClick={onToogleNightMode}
      >
        {theme.isNightMode ? "Выключить" : "Включить"}
      </Button>
    </div>
  );
}

export default Settings;
