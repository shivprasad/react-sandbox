import React from "react"
import Joke from "./Joke"
import jokes from "./JokesData"

function App(){

    const comp = jokes.map(function(j){
        return (<Joke question={j.question} punchLine={j.punchLine}/>)
    }) 

    return (
        <div>
            {comp}
        </div>
    )
}


export default App