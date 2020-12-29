import * as React from 'react';
import ReactPlayer from "react-player"

const VideoGalary = () =>  {
    return(
    <>
      <ReactPlayer className="videoGalary"
      url="https://youtu.be/0vYb9TcUo0Q"
    />
    </>
    );
};

export default VideoGalary;