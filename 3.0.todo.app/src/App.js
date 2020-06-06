import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./Todos"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos : todoData
    }
  }

  render() {
    const data = this.state.todos.map( t => (
      <TodoItem key={t.id} item={t} />
    ))
    return (
      <div className="todo-list">
        {data}
      </div>  
    );
    
}


}


export default App