import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {id, name, task, isCompleted} = todoDetails
  const surname = name ? name[0].toUpperCase() : ''
  const todoBackground = isCompleted ? 'backgroundclr' : ''

  const onDeleteTodo = () => {
    const {deleteTodo} = props
    deleteTodo(id)
  }

  const onCompleteTodo = () => {
    const {completedTodo} = props
    completedTodo(id)
  }

  return (
    <li className="todo-item">
      <div className={`task-container ${todoBackground}`}>
        <div className="surname-container">
          <p className="surname">{surname}</p>
        </div>
        <h1 className="name">{name}</h1>
        <p className="task">{task}</p>
        <div className="buttons-container">
          <button className="button" type="button" onClick={onDeleteTodo}>
            <img
              className="delete"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=740&t=st=1671095904~exp=1671096504~hmac=504d4f1536bb440e527a052fa1d789037f5111daad1ea6aa4adb520a657f91c8"
              alt="delete"
            />
          </button>
        </div>
        <div className="buttons-container">
          <button
            className="completed-button"
            type="button"
            onClick={onCompleteTodo}
          >
            <img
              className="delete"
              src="https://img.freepik.com/premium-vector/check-mark_592324-14086.jpg?size=626&ext=jpg&ga=GA1.2.163874241.1671086137&semt=sph"
              alt="complete"
            />
          </button>
        </div>
      </div>
      <hr className="task-line" />
    </li>
  )
}

export default TodoItem
