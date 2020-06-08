import React from "react"


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }
    
    componentDidMount(){
        this.setState({isLoading:true})
        fetch("http://swapi.dev/api/planets/1/")
        .then(resp => resp.json())
        .then(data => this.setState(
            {
                isLoading: false,
                character : data
            }
        ))
    }
    
    render() {
        return (
            <div>
                { this.state.isLoading ?
                    <h1>Loading</h1> :
                    <h1>{this.state.character.name}</h1>
                } 
            </div>
        )
    }
}

export default App
