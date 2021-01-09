import React from "react";

import "./Main.css"
import ShowCurrentUsers from "./ShowCurrentUsers"

export default function Main(props){
    return(
        <div>
            <h2>The Space Between</h2> 
            <p className = "line"></p>
            <ShowCurrentUsers/>
        </div>

    )
}