import './App.css';
import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App() {
    const [begin, setBegin] = React.useState(false)


    function startQuiz(){
        setBegin(true)
    }

  return (
      // begin ? <Quiz /> : <Start handleClick={startQuiz}/>
      <Quiz />
  )
}

export default App;
