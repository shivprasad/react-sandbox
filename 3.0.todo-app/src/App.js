import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./Todos"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos : todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(taskId){
    this.setState((prevState)=>{
        let newToDo = prevState.todos.map((item)=>{
          if(item.id === taskId) {
            return {
              ...item,
              completed : !item.completed
            }
          }
          return item
        })
        return {
          todos: newToDo
        }
    })
  }

  render() {
    const data = this.state.todos.map( t => (
      <TodoItem key={t.id} item={t}  handleChange={this.handleChange}/>
    ))
    return (
      <div className="todo-list">
        {data}
      </div>  
    );
    
}


}


export default App