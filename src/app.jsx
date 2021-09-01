import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
