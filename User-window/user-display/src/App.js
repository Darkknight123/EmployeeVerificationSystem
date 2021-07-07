import React, {useState} from 'react'
import './App.css';

function App() {
  const[playing,setPlaying]=useState(false);
      
  const HEIGHT =500;
  const WIDTH=500;

  const startVideo=()=>{
    setPlaying(true)
    navigator.getUserMedia(
      {
        video:true,
      },
      (stream)=>{
        let video = document.getElementsByClassName('app_videofeed')[0];
        if (video){
          video.srcObject=stream;
        }
      },
      (err)=>console.error(err)
    );

      };

  const stopVideo=()=> {
    setPlaying(false)
    let video = document.getElementsByClassName('app_videofeed')[0];
    video.srcObject.getTracks()[0].stop();

      };

  return (
    <div className="app">
      <div className="app_container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoplay
          className="app_videoFeed">
        </video>
      </div>
      <div className="app_input">
        {playing?(
          <button onClick={stopVideo}>Stop</button>
        ):(
          <button onClick={startVideo}>Start</button>
        )}
      </div>
     

    </div>
  );
}

export default App;
