import React from "react";
import "./Main.css"
import { Canvas} from "react-three-fiber";
import * as THREE from "three";

import Box from "./Box"
import ShowCurrentUsers from "./ShowCurrentUsers"

export default function Main(props){

    return(
        <div>
            <h2>The Space Between</h2> 
            <p className = "line"></p>
            <ShowCurrentUsers/>
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