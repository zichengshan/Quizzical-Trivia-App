import React, {useEffect} from "react";
import {nanoid} from "nanoid"
import Question from "./Question";

export default function Quiz() {
    const [submitAnswer, setSubmitAnswer] = React.useState(false)
    const [correctNum, setCorrectNum] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [quiz, setQuiz] = React.useState([{
        question: "",
        answers: [],
        correctAnswer: "",
        selectedAnswer: "",
        id: ""
    }])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=6")
            .then(res => res.json())
            .then(data => {
                setQuiz(data.results.map(item => ({
                    question: item.question.replace(/&quot;/g, '"').replace(/&#039;/g, '"'),
                    answers: [item.correct_answer, ...item.incorrect_answers]
                        .sort(() => Math.random() - 0.5),
                    correctAnswer: item.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '"'),
                    selectedAnswer: "",
                    id: nanoid()
                })))
            })
    }, [count])

    /**
     * handleClick() is used to save the answer user chosen for specific question
     * @param value
     * @param questionId
     */
    function handleClick(value, questionId){
        setQuiz(prev => {
            return prev.map(que => {
                return questionId === que.id? {...que, selectedAnswer: `${value}`} : {...que}
            })
        })
    }

    /**
     * checkAnswer() is used to count the number of questions answered correctly
     */
    function checkAnswer(){
        setSubmitAnswer(true)
        let num = 0
        quiz.forEach(que => {
            if(que.correctAnswer === que.selectedAnswer){
                num++
            }
        })
        setCorrectNum(num)
    }

    function restart() {
        setSubmitAnswer(false)
        setCount(prev => prev+1)
        setCorrectNum(0)
        setQuiz([{
            question: "",
            answers: [],
            correctAnswer: "",
            selectedAnswer: "",
            id: ""
        }])
    }


    const questions = quiz.map((que) => {
        return <Question
            key = {que.id}
            {...que}
            disability={submitAnswer}
            handleClick={handleClick}
            />
    })

    return (
        <div className="quiz">
            {questions}
            <div className="quiz_results">
                {submitAnswer && <p className="quiz_results_text">You scored {correctNum}/{quiz.length} correct answers</p>}
                {!submitAnswer && <button className="quiz_checkAnswer_btn" onClick={checkAnswer}>Check Answers</button>}
                {submitAnswer && <button className="quiz_restart_btn" onClick={restart}>Play Again</button>}
            </div>

        </div>
    )
}