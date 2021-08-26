import React from "react";

function VideoList(props) {
  return (
    <li>
      <img src={props.thumnail.medium.url} alt={props.title} />
      <h4>{props.title}</h4>
    </li>
  );
}

export default VideoList;
