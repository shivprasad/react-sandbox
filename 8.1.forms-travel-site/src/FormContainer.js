import React, {Component} from "react"
import FormComponent from "./FormComponent"
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

class FormContainer extends Component {
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
           <FormComponent {...this.state} handleChange={this.handleChange} />
        )
    }
}

export default FormContainer
