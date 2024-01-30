// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoListItem} = props
  const {id, title} = TodoListItem
  const {deleteTodoItem} = props
  const deleteTodo = () => {
    console.log('hi')
    deleteTodoItem(id)
  }
  return (
    <li className="mainDivs">
      <p className="todoPara">{title}</p>
      <button type="button" className="btn" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
