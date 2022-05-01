import './App.css';
import React from "react";
import Start from "./components/Start";

function App() {
    const [begin, setBegin] = React.useState(false)


    function startQuiz(){
        setBegin(true)
    }

  return (
      (!begin && <Start handleClick={startQuiz}/>)

  )
}

export default App;
