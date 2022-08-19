import React from "react";
import "./Photos.css";

export default function Photos(props){
    if (props.photos){
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index){
                        return (
                            <div className="col-sm-3 p-1" key={index}>
                                <a href={photo.src.large} target="_blank" rel="noreferrer">
                                    <img src={photo.src.tiny} alt={photo.alt} className="img-fluid"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    } else {
        return null;
    } 
}