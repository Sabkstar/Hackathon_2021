import React, { useRef, useState, useMemo } from "react";
import {useFrame } from "react-three-fiber";
import * as THREE from "three";
import five from "../assets/five.png";


export default function Box(props) {
    var mesh = useRef();
    var [active, setActive] = useState(false)
    
    useFrame(()=> {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    var texture = useMemo(() => new THREE.TextureLoader().load(five),[])

    return(
        <mesh
            {...props}
            ref = {mesh}
            scale = {active ? [2,2,2] :[1.5, 1.5, 1.5]}
            onClick = {() => setActive(!active)}
        >
            <boxBufferGeometry args = {[1,1,1]} />
            <meshBasicMaterial attach="material" transparent side = {THREE.DoubleSide}>
                <primitive attach = "map" object = {texture} />
            </meshBasicMaterial>
        </mesh>
    )
}