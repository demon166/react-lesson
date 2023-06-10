import React, {useEffect, useRef} from 'react';
import {IVideo} from "./sourceVideo";

interface MyVideoProps {
    video: IVideo;
    isPlaying: boolean;
}

const MyVideo = ({video, isPlaying}: MyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
        console.log("рендер компоенента");
    }, [isPlaying])

    return (
        <video poster={video.thumb} className="w-50" src={video.source} ref={videoRef}></video>
    );
};

export default MyVideo;