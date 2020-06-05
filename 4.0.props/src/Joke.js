import React from "react"

function Joke(props){
    return (
        <div>
            <div className="question" style={{display : props.question ? "block" : "none"}}>{props.question}</div>
            <div className="punchLine">{props.punchLine}</div>
        </div>        
    )
}

export default Joke