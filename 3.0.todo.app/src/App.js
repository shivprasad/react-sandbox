import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./Todos"

function App() {
    const data = todoData.map( t => (
      <TodoItem key={t.id} item={t} />
    ))
    return (
      <div className="todo-list">
        {data}
      </div>  
    );
    
}

export default App