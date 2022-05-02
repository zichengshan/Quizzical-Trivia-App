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
      <div>
          {!begin && <Start handleClick={startQuiz}/>}
          {begin && <Quiz />}
      </div>

  )
}

export default App;
