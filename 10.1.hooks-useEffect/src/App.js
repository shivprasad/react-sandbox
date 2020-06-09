import React from "react"
import randomcolor from "randomcolor"

function App(){
    const [count,setCount] = React.useState(0)
    const [newColor,setNewColor] = React.useState("")
    
    React.useEffect(() => {
        const inId = setInterval(()=>{
            setCount(prevCount => prevCount + 1)
        },1000)
        return () => {
            clearInterval(inId) // gets called on unmount
        }
    }, [])

    React.useEffect(() => {
        setNewColor(randomcolor())
    },[count]) // watch changes to count then only run effect

    return (
        <div>
                 <h1 style={{color:newColor}}>{count} </h1>
        </div>
    )
}


export default App
