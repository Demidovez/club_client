import { useState } from "react";
import styles from "./Comments.module.scss";
import Comment from "../Comment/Comment";

function Comments() {
  const [comments, setComments] = useState([
    {
      id: 0,
      text: "Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени",
      date: "12 октября 2021",
      user: {
        avatar: "https://club.nikolaydemidovez.by/images/avatars/avatar.jpeg",
        fullname: "Николай Демидовец",
        color: "red",
      },
    },
    {
      id: 1,
      text: "Однажды одна маленькая строчка рыбного текста по имени",
      date: "12 октября 2021",
      user: {
        avatar: "",
        fullname: "Ирина Пушкина",
        color: "#81ecec",
      },
    },
    {
      id: 2,
      text: "Ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени",
      date: "12 октября 2021",
      user: {
        avatar: "",
        fullname: "Людмила Иванова",
        color: "#ff7675",
      },
    },
  ]);
  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <Comment data={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
