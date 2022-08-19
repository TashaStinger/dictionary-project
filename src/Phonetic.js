import React, { useState } from "react";
import PlayAudio from "./PlayAudio";
import "./Phonetic.css";

export default function Phonetic(props) {
    // let [sound, setSound] = useState(false);

    // function soundOn(event) {
    //     event.preventDefault();
    //     alert("setSound - true");
    //     setSound(true);
    // }

    if (props.phonetic.audio !== "" && props.phonetic.text !== undefined){
        return (
            <div className="Phonetic">
                {props.phonetic.text + " "} 
                <a href={props.phonetic.audio} title="listen" target="_blank" rel="noreferrer">
                    <span className="sound">
                        <i className = "fa-solid fa-volume-high"></i>
                    </span>
                    {/* <PlayAudio audio={props.phonetic.audio} sound={sound} /> */}
                </a>
            </div>
        )
    } else {
        return (
            <div className="Phonetic">
                {props.phonetic.text}
            </div>
        )
    }
}