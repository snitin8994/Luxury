import React from "react";
import "./Video.css"
function Video(props) {
  return (
    <>
      <div className="video-container">
        <video className="video" autoPlay muted loop>
          <source src={props.src} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Video;
