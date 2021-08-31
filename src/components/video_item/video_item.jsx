import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
  return (
    <li className={styles.video} key={props.video}>
      <img src={props.thumnail.medium.url} alt={props.title} />
      <div className={styles.descripstion}>
        <h3>{props.title}</h3>
        <p>{props.channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;
