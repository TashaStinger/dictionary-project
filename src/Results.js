import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {  
    if (props.results) {
        // console.log(props.results);
        return (
            <div className="Results">
                <h2 className="m-4">{props.results.word}</h2>
                {props.results.meanings.map(function(meaning, index){
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                    {/*  return meaning.definitions[0].definition; */}
                })}
            </div>
        )
    } else {
        return null;
    }
    
}