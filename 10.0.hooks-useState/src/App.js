import React from "react"
import randomcolor from "randomcolor"

function App(){
    const [count,setCount] = React.useState(0)
    const [newColor,setNewColor] = React.useState(randomcolor())
    

    function increment() {
        setCount(prevCount => prevCount + 1)
        setNewColor(randomcolor())
    }

    return (
        <div>
                 <h1 style={{color:newColor}}>{count} </h1>
                 <button onClick={increment}>Change!</button>
        </div>
    )
}


export default App
