import {Component} from 'react'
import {v4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

class TodoList extends Component {
  state = {
    nameInput: '',
    taskInput: '',
    TodoLists: [],
  }

  deleteTodo = todoId => {
    const {TodoLists} = this.state

    this.setState({
      TodoLists: TodoLists.filter(todo => todo.id !== todoId),
    })
  }

  completedTodo = id => {
    this.setState(prevState => ({
      TodoLists: prevState.TodoLists.map(todo => {
        if (id === todo.id) {
          return {...todo, isCompleted: true}
        }
        return todo
      }),
    }))
  }

  renderTodoList = () => {
    const {TodoLists} = this.state

    return TodoLists.map(eachTodo => (
      <TodoItem
        key={eachTodo.id}
        todoDetails={eachTodo}
        deleteTodo={this.deleteTodo}
        completedTodo={this.completedTodo}
      />
    ))
  }

  onAddTodo = event => {
    event.preventDefault()
    const {nameInput, taskInput} = this.state
    if (nameInput !== '' && taskInput !== '') {
      const newTodo = {
        id: v4(),
        name: nameInput,
        task: taskInput,
        isCompleted: false,
      }

      this.setState(prevState => ({
        TodoLists: [...prevState.TodoLists, newTodo],
        nameInput: '',
        taskInput: '',
      }))
    }
  }

  onChangeTaskInput = event => {
    this.setState({
      taskInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, taskInput, TodoLists} = this.state

    return (
      <div className="todo-container">
        <div className="tasks-container">
          <h1 className="todo-heading">TodoLists</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.onAddTodo}>
              <p className="form-description">Add Your Todo Tasks Here</p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Task"
                className="task-input"
                value={taskInput}
                onChange={this.onChangeTaskInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Task
              </button>
            </form>
            <img
              className="image"
              src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?w=740&t=st=1671086195~exp=1671086795~hmac=5f62bc957e97218ac9b2841f89baebc0c760dcc53087a85817bf5f016789ed4f"
              alt="Todo"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="tasks-count">{TodoLists.length}</span>
            ToDos
          </p>
          <ul className="todo-list">{this.renderTodoList()}</ul>
        </div>
      </div>
    )
  }
}

export default TodoList
