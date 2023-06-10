import React, {useState} from 'react';
import MyButton from "../MyButton";
import MyVideo from "./MyVideo";
import {IVideo, videos} from './sourceVideo';

const linkToVideo = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const MyVideoPlayer = () => {
    const [video, setVideo] = useState<IVideo>(videos[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleChange:  React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const currentVideo = videos.find(v => v.id === +e.target.value);
        if (currentVideo) {
            setVideo(currentVideo);
        }
        setIsPlaying(false);
    }
    const handleClick = () => {
        setIsPlaying(ip => !ip);
    }
    return (
        <div>
            <div>
                <select name="" id="" onChange={handleChange}>
                    {
                        videos.map(v => (
                            <option key={v.id} value={v.id}>{v.title}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <MyVideo isPlaying={isPlaying} video={video} />
            </div>
            <MyButton onClick={handleClick}>{isPlaying ? "Stop" : "Play"}</MyButton>
        </div>
    );
};

export default MyVideoPlayer;