import Iframe from "react-iframe";

interface Props{
  urlVideo:string
}

export default function VideoPlayer (props:Props)  {
  
// const video = "https://www.youtube.com/embed/dQw4w9WgXcQ"
console.log(props)
  return (
    <div className='w-full h-auto  '>
        <Iframe  className="w-full aspect-video  " url={props?.urlVideo.replace('watch?v=', 'embed/')} 
        title="YouTube video player" allow="accelerometer; autoplay=false; 
        clipboard-write; encrypted-media; gyroscope; web-share"></Iframe>
  
    </div>
  );
};

