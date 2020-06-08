import React from "react"
//import MyInfo from "./MyInfo"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
  }

  logout(){
    console.log("Logout")
    this.setState({
      isLoggedIn : false
    })
  }

  login(){
    console.log("Login")
    this.setState({
      isLoggedIn : true
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
              <LogInOutButton isLoggedIn={this.state.isLoggedIn} onClickHandler={this.state.isLoggedIn ? this.logout : this.login}/> 
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