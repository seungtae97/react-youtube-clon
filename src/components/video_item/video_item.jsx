import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <div className={styles.descripstion}>
        <h3>{snippet.title}</h3>
        <p>{snippet.channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;
