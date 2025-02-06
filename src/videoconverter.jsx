import { useState, useRef } from "preact/hooks";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export default function videoConvertor() {
    const [video, setVideo] = useState(null);
    const [converted, setConverted] = useState(false)
    const [converting, setConverting] = useState(false)
    const ffmpegRef = useRef(new FFmpeg());
    //const videoRef = useRef(null);
    const messageRef = useRef(null);

    /** Convert outer function, used to catch errors */
    const convert = async () => {
        try {
            await transcode()
        }
        catch(error){
            messageRef.current.innerHTML = "There was a problem converting the video to light mode. Check console logs";
            console.log(error)
        }
    } 

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        setConverting(true);
        try {
            await ffmpeg.writeFile('input.mp4', await fetchFile(video));
            //await ffmpeg.writeFile('input.webm', await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/Big_Buck_Bunny_180_10s.webm'));
            //await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
            //await ffmpeg.exec(['-i', 'input.mp4', 'output.mp4'])
            await ffmpeg.exec(['-i', 'input.mp4', '-vf', 'negate,hue=h=180,eq=contrast=1.2:saturation=1.1', 'output.mp4'])
            const data = await ffmpeg.readFile('output.mp4');
            setVideo(URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'})));
            
        } catch(error){
            throw error
        }

        //setVideo(URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'})));
        setConverted(true);
        setConverting(false);
    }

    const download = async () => {
        // https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js
        console.log("download placeholder")
        const link = document.createElement('a');
        link.href = video
        link.setAttribute(
            'download',
            `ConvertedFileName.mp4`,
          );
        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    }

    function Video(){
        if (video){
            return (<div>
                        <video
                            //ref={videoRef}  
                            controls
                            // style = {{ display : loading ? "block" : "none"}}  
                            //style = "max-width:80%"
                            style = {{ "max-width":"80%"}}  
                            src = {video}
                        />
                        <p ref={messageRef}></p>
                        {/* <button onClick={convert}>Convert to Light Mode</button> */}
                    </div>
            )
        }
        else {
            return <p>Select a video to load</p>
        }
        
    }

    function Button(){
        if (!converting){
            if (video){
                if (converted){
                    return <button onClick={download}>Download</button>
                } else {
                    return <button onClick={convert}>Convert to Light Mode</button>
                }
            }
        }
    }

    return <div>
        <input
            type="file"
            accept="video/mp4"
            onChange={async (e) => {
                const file = e.target.files[0];
                setConverted(false);
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
                    //messageRef.current.textContent = "loaded"
                }
            }
            }
        />


        <Video/>
        <Button/>

        </div>

}