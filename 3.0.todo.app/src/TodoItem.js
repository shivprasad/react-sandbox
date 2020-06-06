import React from "react"
import { render } from "react-dom"

class ToDoItem extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} onChange={()=>{ console.log("wow...!!!")}} />
                <p>{this.props.item.task}</p>
            </div>
        )
    }
    

}

export default ToDoItem