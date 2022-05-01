import React, {useEffect} from "react";
import {nanoid} from "nanoid"
import Question from "./Question";

// https://opentdb.com/api.php?amount=6&category=18&difficulty=easy
// https://opentdb.com/api.php?amount=5
export default function Quiz() {
    // const [begin, setBegin] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [quiz, setQuiz] = React.useState([{
        question: "",
        answers: [],
        correctAnswer: "",
        selectedAnswer: "",
        id: "",
        score: null
    }])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(data => {
                setQuiz(data.results.map(item => ({
                    question: item.question.replace(/&quot;/g, '"').replace(/&#039;/g, '"'),
                    answers: [item.correct_answer, ...item.incorrect_answers]
                        .sort(() => Math.random() - 0.5),
                    correctAnswer: item.correct_answer,
                    selectedAnswer: "",
                    id: nanoid()
                })))
            })
    }, [count])

    function handleClick(event){
        alert(event.target.value)
    }

    const questions = quiz.map(que => {
        return <Question
            key = {que.id}
            {...que}
            handleClick={handleClick}
            />
    })

    return (
        <div className="questions">
            {questions}
        </div>

    )
}