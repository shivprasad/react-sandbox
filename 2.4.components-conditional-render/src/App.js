import React from "react"
//import MyInfo from "./MyInfo"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((prevState) => {
      return {
        isLoggedIn : !prevState.isLoggedIn
      }
    })
  }

  render(){
    return (
        <div>
            <div>
              { this.state.isLoggedIn ?
                <h1>Logged In</h1> :
                <h1>Logged Out</h1> 
              } 

            </div>
            <div>
              <LogInOutButton isLoggedIn={this.state.isLoggedIn} onClickHandler={this.handleClick}/> 
            </div>
        </div>
    )
  }

}

class LogInOutButton extends React.Component {
  render(){
    return (
      
      <button onClick={()=>{ this.props.onClickHandler()}}>{this.props.isLoggedIn ? "Logout" : "Login"}</button> 
    )
  }
}


export default App