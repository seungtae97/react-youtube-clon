import React from "react";

const VideoItem = (props) => {
  return (
    <li>
      <img src={props.thumnail.medium.url} alt={props.title} />
      <div className="video-infomation">
        <h3>{props.title}</h3>
        <p>{props.channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;
