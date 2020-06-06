import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this)
    }
    
    updateCount(){
        // this.state.count=this.state.count+1; // won't work
        this.setState(prevState => {
            return {
                count : prevState.count+1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.updateCount()}}>Change!</button>
            </div>
        )
    }
}

export default App
