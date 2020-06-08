import React from "react"
import MyInfo from "./MyInfo"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading : false
      })
    },1500)
  }

  render(){
    return (
        <div>
           { this.state.isLoading ?
            <h1>Loading...</h1> :
            <MyInfo/>
           } 
        </div>
    )
  }

}

export default App