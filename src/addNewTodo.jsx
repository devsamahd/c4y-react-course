import { useContext } from 'react'
import { TodoContext } from '../context/Todos'

const AddTodo = () => {
    const {setDesc, setTitle, title, desc, addNewData} = useContext(TodoContext)
  return (
    <form>
        <label><b>Title:</b></label>
        <input type="text" title='title' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
        <label><b>Desc:</b></label>
        <input type="textarea" title='title' className='form-control' value={desc} onChange={(e)=>setDesc(e.target.value)} /><br />
        <input type="submit" className='btn btn-success' value={'add todo'} onClick={addNewData} />

    </form>
  )
}

export default AddTodo