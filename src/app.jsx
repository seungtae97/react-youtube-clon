import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import axios from "axios";

function App() {
  const [videos, setVdeos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setError(null);
        setVdeos(null);
        setLoading(true);

        if (search === null) {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC8UdzH8NTzMJ4SRTm8nQU2xQlnOqC1j2U"
          );
          setVdeos(response.data.items);
        } else {
          const responseSearch = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${search}}&key=AIzaSyC8UdzH8NTzMJ4SRTm8nQU2xQlnOqC1j2U`
          );
          const items = responseSearch.data.items.map((item) => ({
            ...item,
            id: item.id.videoId,
          }));
          setVdeos(items);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchVideos();
  }, [search]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>error!</div>;
  if (!videos) return null;

  return (
    <>
      <Header onSearch={setSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
