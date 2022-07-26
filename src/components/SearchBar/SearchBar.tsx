import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <div className={styles.container}>
      <IoSearchOutline size="20" color="gray" className={styles.icon} />
      <input
        value={value}
        onChange={onChange}
        spellCheck="false"
        placeholder="Найти..."
      />
    </div>
  );
}

export default SearchBar;
