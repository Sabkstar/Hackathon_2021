import avatarImage from "../assets/avatar.png"
import settingImage from "../assets/setting.png"
import React from "react";

export default function LeftNavBar(props){
    return(
        <div className = "left-nav-bar">
            <div className = "block">
                <div className = "circle">
                    <img src={avatarImage} alt = "avatar"/>
                </div>
                <p>Me</p>
            </div>
            <div className = "block">
                <div className = "circle">
                    <p>39</p>
                </div>
                <p>Mediating</p>
            </div>
            <div className = "block">
                <div className = "circle">
                    <img src = {settingImage} alt = "setting"/>
                </div>  
                <p>Settings</p>
            </div>
        </div>
    )
}