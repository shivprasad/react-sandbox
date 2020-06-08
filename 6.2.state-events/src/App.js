import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: "red"
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

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count) {
            this.setState(
                {
                    color:randomcolor()
                }
             )
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{color:this.state.color}}>{this.state.count} </h1>
                <button onClick={()=>{this.updateCount()}}>Change!</button>
            </div>
        )
    }
}

export default App
