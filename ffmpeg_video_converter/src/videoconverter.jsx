import { useState, useRef } from "preact/hooks";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export default function videoConvertor() {
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState(null);
    const ffmpegRef = useRef(new FFmpeg());
    //const videoRef = useRef(null);
    const messageRef = useRef(null);

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile('input.mp4', await fetchFile(video));
        //await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
        //await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
        await ffmpeg.exec(['-i', 'input.mp4', 'output.mp4'])
        //await ffmpeg.exec(['-i', 'input.mp4', '-vf', '"negate,hue=h=180,eq=contrast=1.2:saturation=1.1"', 'output.mp4'])
        const data = await ffmpeg.readFile('output.mp4');

        setVideo(URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'})));
    }

    return <div>
        <input
            type="file"
            accept="video/mp4"
            onChange={async (e) => {
                const file = e.target.files[0];
                setLoading(true);
                if (file){
                    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
                    const ffmpeg = ffmpegRef.current;
                    ffmpeg.on('log', ({ message }) => {
                        messageRef.current.innerHTML = message;
                        console.log(message);
                    });
                    const videoURL = URL.createObjectURL(file);
                    //videoRef.current.src = videoURL;
                    //messageRef.current.textContent = "loading video"
                    await ffmpeg.load({
                        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
                    });
                    setVideo(videoURL);
                    setLoading(false);
                    console.log("video onchange fired")
                    //messageRef.current.textContent = "loaded"
                }
            }
            }
        />


        {loading ? (
            <p>"Loading..."</p>
        ) :video ? (
            <div>
            <video
                //ref={videoRef}  
                controls
                // style = {{ display : loading ? "block" : "none"}}  
                //style = "max-width:80%"
                style = {{ "max-width":"80%"}}  
                src = {video}
            />
            <p ref={messageRef}></p>
            <button onClick={transcode}>Convert to Light Mode</button>
            </div>
        ) : (
            <p>Select a video to load</p>
        )
        }

        </div>

}