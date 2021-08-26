import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import axios from "axios";
import "./components/style.modules.css";

function App() {
  const [videos, setvVdeos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setError(null);
        setvVdeos(null);
        setLoading(true);

        if (search === null) {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC8UdzH8NTzMJ4SRTm8nQU2xQlnOqC1j2U"
          );
          setvVdeos(response.data.items);
        } else {
          const responsee = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}}&key=AIzaSyC8UdzH8NTzMJ4SRTm8nQU2xQlnOqC1j2U`
          );
          setvVdeos(responsee.data.items);
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
      <Header setSearch={setSearch} />
      <Home videos={videos} />
    </>
  );
}

export default App;
