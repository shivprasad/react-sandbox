import React from "react"

function ToDoItem(props){
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} />
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDoItem