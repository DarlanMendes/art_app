

const VideoPlayer = () => {
  
const video = "https://www.youtube.com/embed/dQw4w9WgXcQ"
  return (
    <div className='w-full h-auto  '>
        <iframe  className="w-full aspect-video  " src={video} 
        title="YouTube video player" allow="accelerometer; autoplay=false; 
        clipboard-write; encrypted-media; gyroscope; web-share"></iframe>
  
    </div>
  );
};

export default VideoPlayer;
