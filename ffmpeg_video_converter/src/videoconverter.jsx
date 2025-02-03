import { useState, useRef } from "preact/hooks";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export default function videoConvertor() {
    const [loaded, setLoaded] = useState(false);
    const [video, setVideo] = useState(null);
    const ffmpegRef = useRef(new FFmpeg());
    //const videoRef = useRef(null);
    const messageRef = useRef(null);

    return <div>
        Video thing
        <input
            type="file"
            accept="video/mp4"
            onChange={async (e) => {
                const file = e.target.files[0];
                setLoaded(false);
                if (file){
                    //const ffmpeg = ffmpegRef.current;
                    const videoURL = URL.createObjectURL(file);
                    //videoRef.current.src = videoURL;
                    //messageRef.current.textContent = "loading video"
                    //await ffmpeg.load();
                    setVideo(videoURL);
                    setLoaded(true);
                    console.log("video onchange fired")
                    //messageRef.current.textContent = "loaded"
                }
            }
            }
        />


        {!loaded ? (
            <p>"Loading..."</p>
        ) :video ? (
            <div>
            <video
                //ref={videoRef}  
                controls
                // style = {{ display : loaded ? "block" : "none"}}  
                //style = "max-width:80%"
                style = {{ "max-width":"80%"}}  
                src = {video}
            />
            <p>Video loaded</p>
            </div>
        ) : (
            "Not loaded"
        )
        }

        </div>

}