import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
      <div className="todo-list">
        <TodoItem task="First Task"/>
        <TodoItem task="Second Task"/>
        <TodoItem task="Third Task"/>
        <TodoItem task="Fourth Task"/>
      </div>  
    );
    
}

export default App