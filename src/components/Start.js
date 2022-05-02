import React from "react";
export default function Start(props){
    return (
        <div className="start">
            <h2 className="start_title">Quizzical</h2>
            <p className="start_body" >Welcome to this Quiz App</p>
            <button className="start_btn" onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}