import { useState } from "react";
import styles from "./AddComment.module.scss";

function AddComment() {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setValue(e.currentTarget.value);

  const saveComment = () => {};

  return (
    <div className={styles.container}>
      <textarea
        placeholder="Оставить комментарий..."
        value={value}
        onChange={onChange}
        spellCheck="false"
      ></textarea>
      <button onClick={saveComment}>Отправить</button>
    </div>
  );
}

export default AddComment;
