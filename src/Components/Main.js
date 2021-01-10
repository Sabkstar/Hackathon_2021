import React, {useState} from "react";
import "./Main.css"
import music from "../assets/MeditationMusic_mixdown.mp3"
import playImage from "../assets/play.png"
import stopImage from "../assets/stop.png"
import { Canvas} from "react-three-fiber";


import Box from "./Box"
import LeftNavBar from "./LeftNavBar"

export default function Main(props){
    var [audio] = useState(new Audio(music))
    var [playing, setPlaying] = useState(false)

    function setAudio(){
        if(!playing) {
            setPlaying(true)
            audio.play()
        }else{
            setPlaying(false)
            audio.pause()
        }
    }
    return(
        <div>
            <div className="header">
                <h2>The Space Between</h2> 
                <p className = "line"></p>
            </div>
            <LeftNavBar/>
            <div className = "bg-green">
                <img 
                    width = "100" 
                    height = "100" 
                    alt = "music" 
                    src = {(!playing) ? playImage : stopImage} 
                    onClick = {setAudio}/>
            </div>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[2.5, 0, 0]} />
            </Canvas> 
        </div>

    )
}