import React from "react";

export default function Question(props) {

    const [currentValue, setCurrentValue] = React.useState("")

    /**
     * set the current value to event.target.value
     * send the id and answer to Quiz
     * @param event
     */
    function handleChange(event){
        const {value, id} = event.target
        props.handleClick(value, id)
        setCurrentValue(value)
    }

    function checkIsSelected(value){
        return value === currentValue? "selected_btn" :"general_btn"
    }

    function checkIsCorrect(value){
        let message = ""
        if(props.disability){
            if(value === currentValue || currentValue === ""){
                message = "wrong_btn"
            }
            if(value === props.correctAnswer){
                message = "correct_btn"
            }
        }
        return message
    }

    const myAnswers = props.answers.map(ans => {
        ans = ans.replace(/&quot;/g, '"').replace(/&#039;/g, '"')
        return (
            <button
                className={`general_btn ${checkIsSelected(ans)} ${checkIsCorrect(ans)}`}
                key = {ans}
                value={ans}
                id={props.id}
                onClick={handleChange}
            >
                {ans}
            </button>
        )
    })

    return (
        <div>
            <h3>{props.question}</h3>
            {myAnswers}
            <hr />
        </div>
    )
}