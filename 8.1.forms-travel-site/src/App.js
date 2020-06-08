import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            destination:"UK",
            gender:"",
            diet:{
                isVegan: false,
                isMeat : false,
                isEgg : false
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name,value, checked, type} = event.target
        type === "checkbox" ?
        this.setState( (prevState) => {
            return {diet : {
                ...prevState.diet,
                [name] : checked
            }
        }
        }
        ) :
        this.setState(
            {
                [name] : value
            }
        )
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
                    <input placeholder="Last Name"  name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br />
                    <input placeholder="Age"  name="age" value={this.state.age} onChange={this.handleChange} /><br />
                    
                    {/* Create radio buttons for gender here */
                    }
                    <label>
                        <input type="radio" value="male" name="gender" checked={this.state.gender === "male"} onChange={this.handleChange}/>
                        Male
                    </label>
                    <label>
                        <input type="radio" value="female" name="gender" checked={this.state.gender === "female"} onChange={this.handleChange}/>
                        Female
                    </label>


                    <br />
                    
                    {/* Create select box for location here */}
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                    </select>

                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label>
                        <input type="checkbox" name="isVegan" value="Vegan" checked={this.state.diet.isVegan} onChange={this.handleChange} />
                        Vegan
                    </label>    
                    <label>
                        <input type="checkbox" name="isMeat" value="Meat" checked={this.state.diet.isMeat} onChange={this.handleChange} />
                        Meat
                    </label>    
                    <label>
                        <input type="checkbox" name="isEgg" value="Egg" checked={this.state.diet.isEgg} onChange={this.handleChange} />
                        Egg
                    </label>    
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    Vegan : { this.state.diet.isVegan ? "Yes" : "No"} <br/>
                    Meat : { this.state.diet.isMeat? "Yes" : "No"} <br/>
                    Egg : { this.state.diet.isEgg ? "Yes" : "No"} <br/>
                </p>
            </main>
        )
    }
}

export default App
