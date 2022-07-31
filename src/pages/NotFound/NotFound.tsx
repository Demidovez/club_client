import styles from "./NotFound.module.scss";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import notFoundAnimation from "../../assets/lotties/not_found.json";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div className={styles.container}>
      <div>
        <Lottie animationData={notFoundAnimation} loop={true} />
        <p>К сожалению, страница не найдена :( </p>
        <button onClick={goHome}>На главную</button>
      </div>
    </div>
  );
}

export default NotFound;
