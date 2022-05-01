import React from "react";
export default function Start(props){
    return (
        <div className="start">
            <h2>Quizzical</h2>
            <p>Welcome to this Quiz App</p>
            <button onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}