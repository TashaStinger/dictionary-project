import React from "react";

export default function Phonetic(props) {
    // console.log(props.phonetic);
    if (props.phonetic.audio !== ""){
        return (
            <div className="Phonetic">
                <a href={props.phonetic.audio} title="listen" target="_blank" rel="noreferrer">
                    {props.phonetic.text}
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