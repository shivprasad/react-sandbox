import React from "react"

function ToDoItem(props){
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.task}</p>
        </div>
    )
}

export default ToDoItem