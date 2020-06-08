import React from "react"



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "Shiv",
            lastName : "Bade",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu volutpat enim. Nulla mollis interdum massa, vel laoreet ligula fringilla vel. Pellentesque posuere libero est, sed vestibulum magna maximus sed. Pellentesque lectus est, vestibulum et erat laoreet, porta ullamcorper nulla. Nulla facilisi. Praesent nec tortor eget nisl pharetra scelerisque. Vivamus at ipsum ut nunc congue fermentum. Duis faucibus libero nec felis scelerisque, at fermentum turpis suscipit. Morbi condimentum turpis nec ligula congue ultricies. Quisque ac efficitur velit."
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name ,value} = event.target
        this.setState(
            {
                [name] : value
            }
        )
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName"/> <br/><br/>
                <input type="text" value={this.state.lastName}  onChange={this.handleChange} name="lastName"/> <br/><br/>
                <textarea rows="5" cols="70" value={this.state.info} onChange={this.handleChange} name="info">
                </textarea>
                <br/><br/>
                <label>
                    <input type="radio" value="male" checked={this.state.gender==="male"} name="gender" onChange={this.handleChange}/>
                    Male
                </label>
                <label>
                    <input type="radio" value="female" checked={this.state.gender==="female"} name="gender" onChange={this.handleChange}/>
                    Female
                </label>
                <hr/>
                {this.state.firstName} {this.state.lastName} <br/><br/>
                {this.state.info} <br/> <br/>
                {this.state.gender}
            </div>
        )
    }
}

export default App
