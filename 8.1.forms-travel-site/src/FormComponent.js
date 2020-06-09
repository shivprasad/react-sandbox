import React from "react"

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

 function FormComponent(props){
     return (
        <main>
        <form>
            <input placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange} /><br />
            <input placeholder="Last Name"  name="lastName" value={props.lastName} onChange={props.handleChange} /><br />
            <input placeholder="Age"  name="age" value={props.age} onChange={props.handleChange} /><br />
            
            {/* Create radio buttons for gender here */
            }
            <label>
                <input type="radio" value="male" name="gender" checked={props.gender === "male"} onChange={props.handleChange}/>
                Male
            </label>
            <label>
                <input type="radio" value="female" name="gender" checked={props.gender === "female"} onChange={props.handleChange}/>
                Female
            </label>


            <br />
            
            {/* Create select box for location here */}
            <select value={props.destination} name="destination" onChange={props.handleChange}>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
            </select>

            <br />
            
            {/* Create check boxes for dietary restrictions here */}
            <br />
            <label>
                <input type="checkbox" name="isVegan" value="Vegan" checked={props.diet.isVegan} onChange={props.handleChange} />
                Vegan
            </label>    
            <label>
                <input type="checkbox" name="isMeat" value="Meat" checked={props.diet.isMeat} onChange={props.handleChange} />
                Meat
            </label>    
            <label>
                <input type="checkbox" name="isEgg" value="Egg" checked={props.diet.isEgg} onChange={props.handleChange} />
                Egg
            </label>    
            
            <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>
            Your dietary restrictions: 
            Vegan : { props.diet.isVegan ? "Yes" : "No"} <br/>
            Meat : { props.diet.isMeat? "Yes" : "No"} <br/>
            Egg : { props.diet.isEgg ? "Yes" : "No"} <br/>
        </p>
    </main>
     )
 }

export default FormComponent
