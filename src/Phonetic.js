import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {

    if (props.phonetic.audio !== "" && props.phonetic.text !== undefined){
        return (
            <div className="Phonetic">
                {props.phonetic.text + " "} 
                <a href={props.phonetic.audio} title="listen" target="_blank" rel="noreferrer">
                    <span className="sound">
                        <i className = "fa-solid fa-volume-high"></i>
                    </span>
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