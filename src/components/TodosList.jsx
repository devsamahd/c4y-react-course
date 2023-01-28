import { useContext } from 'react'
import { TodoContext } from '../../context/Todos'

const TodosList = () => {
    const {todos, handleCheckbox, handleDelete} = useContext(TodoContext)
  return (
    <ul className='list-group'>

        {todos ?
            todos.map((todo, key)=>(
                <li key={key} className="d-flex list-group-item p-3 mt-3">
                    <span className='d-flex'>
                        <input type={"checkbox"} className="form-check" checked={todo.checked} onChange={() => handleCheckbox(todo.id)} />&nbsp;
                        <b>{todo.title}</b>
                    </span>
                    <input type="button" className='btn btn-danger' value={'delete'} onClick={()=> handleDelete(todo.id)} />
                </li>
            )) : ( <>Nothing to see here, the sadness</>)
        }
    </ul>
  )
}

export default TodosList