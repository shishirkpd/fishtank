import * as React from 'react';
import ReactPlayer from "react-player"

const VideoGalary = () =>  {
    return(
    <div className="videoGalary">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=nvq_lvC1MRY"
      />
    </div>
    );
};

export default VideoGalary;