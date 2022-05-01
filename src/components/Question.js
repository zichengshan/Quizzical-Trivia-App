import React from "react";
import {nanoid} from "nanoid";

export default function Question(props) {

    const myAnswers = props.answers.map(ans => {
        return (
            <button
                key = {ans}
                value={ans}
                onClick={props.handleClick}
            >
                {ans}
            </button>
        )
    })
    return (
        <div>
            <h2>{props.question}</h2>
            {myAnswers}
        </div>
    )
}