import { MouseEventHandler, useState } from "react";
import { IMaterial } from "../../types/types";
import styles from "./CardMaterial.module.scss";
import {
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";

interface IProps {
  data: IMaterial;
  onClick: (material: string) => void;
}

function CardMaterial({ data, onClick }: IProps) {
  // const {id: userId} = useAppSelector(state => state.);

  const userId = "62dcbf24945d8ab30843e1a7";

  const [isLike, setIsLike] = useState(data.users_liked_ids.includes(userId));

  const [commentsCount] = useState(data.comments_ids.length);
  const [likesCount, setlikesCount] = useState(data.users_liked_ids.length);

  const onToogleLike: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    setIsLike(!isLike);
    setlikesCount(isLike ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className={styles.container} onClick={() => onClick(data.name)}>
      {data.image ? (
        <div
          className={styles.image_wrapper}
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className={styles.image_background} />
          <div className={styles.image_header}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.date}>
              {new Date(data.createdAt).toLocaleString("ru", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.header}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.date}>
            {new Date(data.createdAt).toLocaleString("ru", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      )}
      <div className={styles.desc}>{data.desc}</div>
      <div className={styles.icons}>
        <div>
          <IoChatbubbleEllipsesOutline size="25" color="#6f6f6f" />
          {commentsCount || ""}
        </div>
        <div onClick={onToogleLike}>
          {likesCount || ""}
          {isLike ? (
            <IoHeartSharp size="25" color="#e17055" />
          ) : (
            <IoHeartOutline size="25" color="#6f6f6f" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardMaterial;
