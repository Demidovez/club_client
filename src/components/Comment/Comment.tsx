import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./Comment.module.scss";

function Comment({ data }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar
          name={data.user.fullname}
          color={data.user.color}
          image={data.user.avatar}
          width={40}
        />
        <div className={styles.meta}>
          <div className={styles.user}>{data.user.fullname}</div>
          <div className={styles.date}>{data.date}</div>
        </div>
      </div>
      <div className={styles.text}>{data.text}</div>
      <span className={styles.answer}>Ответить</span>
    </div>
  );
}

export default Comment;
