import React from "react";

export default function Phonetic(props) {
    // console.log(props.phonetic);
    if (props.phonetic.audio !== "" && props.phonetic.audio !== undefined){
        return (
            <div className="Phonetic">
                {props.phonetic.text + " "} 
                <a href={props.phonetic.audio} title="listen" target="_blank" rel="noreferrer">
                    <span className="sound">
                        <i class="fa-solid fa-volume-high"></i>
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