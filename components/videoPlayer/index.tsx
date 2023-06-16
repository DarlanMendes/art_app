
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  

  return (
    <div >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
       
        style={{ width: "100vw", height: "auto" }}
      />
  
    </div>
  );
};

export default VideoPlayer;
