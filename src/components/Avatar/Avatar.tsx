import { useState } from "react";
import styles from "./Avatar.module.scss";

interface IProps {
  name: string;
  color: string;
  width?: number;
  image: string;
}

function Avatar({ name, color, width, image }: IProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: image ? "none" : color,
        width: width || 120,
        height: width || 120,
      }}
    >
      {image ? (
        <div>
          <img src={image} alt="Avatar image" />
        </div>
      ) : (
        <div style={{ fontSize: width ? width * 0.4 : 40 }}>
          {name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)}
        </div>
      )}
    </div>
  );
}

export default Avatar;
