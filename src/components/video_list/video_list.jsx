import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles.videoList}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          title={video.snippet.title}
          thumnail={video.snippet.thumbnails}
          channel={video.snippet.channelTitle}
        />
      ))}
    </ul>
  );
};

export default VideoList;
