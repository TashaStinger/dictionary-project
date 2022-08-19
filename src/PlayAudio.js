import React from "react";

export default function PlayAudio(props) {
    if (props.sound) {
        console.log("play");
        return (
            <div className="PlayAudio">
                <audio src={props.audio} autoPlay></audio>
            </div>
        )
    }
    else return null;
}