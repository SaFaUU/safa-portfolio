import { useEffect, useRef, useState } from "react";
import tv_static from "../../assets/tv_static.mp4"
import b3d from "../../assets/b3d.mp4"
import audio from "../../assets/13 TRUE SCARY STORIES [Compilation Vol.18].mp3"
import chill_pill from "../../assets/chill_pill.jpg"
import { BsArrowUpRight } from "react-icons/bs"
import ResumePDF from "../../assets/SafaAsgar_Resume_Web_Development.pdf"
import { Link } from "react-router-dom";

const Main = () => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleClick = () => {
        // const videoElement = videoRef.current;
        // videoElement.muted = true;
        // videoElement.volume = 0.1;
        // videoElement.play()


        setIsPlaying(true);
        const audioElement = audioRef.current;
        audioElement.currentTime = 15; // Set the audio to start at 15 seconds
        audioElement.play();

        const pdfUrl = "../../assets/SafaAsgar_Resume_Web_Development.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "SafaAsgar_Resume_Web_Development.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        const audioElement = audioRef.current;

        audioElement.addEventListener('timeupdate', () => {
            setCurrentTime(audioElement.currentTime);
            setDuration(audioElement.duration);
        });


        return () => {
            audioElement.removeEventListener('timeupdate', () => { });
        };
    }, []);


    return (
        <>
            <div className=" h-screen w-full text-center flex absolute">
                <video ref={videoRef} className=" -z-10 fixed w-full h-screen object-cover" type="video/mp4" loop preload="auto" muted autoPlay>
                    <source src={b3d} type="video/mp4" />
                </video>
                {/* <div className="fixed right-96 bottom-20 -z-20">
                    <img src={chill_pill} alt="" className="h-72 w-72 object-cover  " />
                </div> */}
                {/* <audio src={audio} autoPlay loop ref={audioRef} /> */}
                <div className="flex flex-col align-middle justify-center 2xl:text-left 2xl:ps-20 px-5 text-center">
                    <p className="text-6xl font-extrabold ">SAFA ASGAR</p>
                    <p className="text-2xl font-light text-gray-400 mt-1">Software Engineer/ Designer</p>
                    <a href={ResumePDF} rel="noreferrer" >
                        <button className=" hover:bg-white hover:text-black text-gray-400 font-semibold py-2 px-4 mx-auto 2xl:ml-0 border border-gray-400 shadow mt-3 w-36 rounded-md white-glow" onClick={handleClick}>
                            Download CV
                        </button>
                    </a>
                    <audio ref={audioRef} src={audio} autoPlay loop />
                    <div className="progress-bar w-screen fixed left-0 bottom-0">
                        <div className="flex align-middle items-center object-center 2xl:ps-20 px-5 space-x-10 mb-8 cursor-pointer">
                            <Link className="flex 2xl:text-xl text-sm white-glow" target="_blank" rel="noopener noreferrer" to="https://github.com/SaFaUU">GITHUB {" "}<BsArrowUpRight className="text-md ms-2 align-middle h-auto" ></BsArrowUpRight></Link>
                            <Link className="flex 2xl:text-xl text-sm white-glow" target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/safa-asgar/">LINKEDIN {" "}<BsArrowUpRight className="text-md ms-2 align-middle h-auto"></BsArrowUpRight></Link>
                            <Link className="flex 2xl:text-xl text-sm white-glow" target="_blank" rel="noopener noreferrer" to="https://www.behance.net/safaasgarx/">BEHANCE {" "}<BsArrowUpRight className="text-md ms-2 align-middle h-auto"></BsArrowUpRight></Link>
                            <p className=" 2xl:text-right 2xl:ps-20 px-5 text-center text-gray-400">WORK IN PROGRESS</p>
                        </div>

                        <div
                            className={`progress h-4 ${isPlaying ? 'bg-white' : ''}`}
                            style={{ width: (currentTime / duration) * 100 + '%' }}
                        />
                    </div>
                </div>

            </div >
        </>
    );
};

export default Main;