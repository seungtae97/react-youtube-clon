import VideoList from "./videoList";

function Home(props) {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoList
          key={video.id}
          title={video.snippet.title}
          thumnail={video.snippet.thumbnails}
        />
      ))}
    </ul>
  );
}

export default Home;
