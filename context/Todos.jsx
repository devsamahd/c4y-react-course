import { useState, createContext } from "react"

export const TodoContext = createContext({})

const TodoProvider = ({children}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [todos, setTodos] = useState([
        {
            id:0,
            title: "Create a Todo App",
            desc: "Create a todo app with some awesome friends at code4you on the internet",
            checked: false
        },
        {
            id:1,
            title: "Prepare for test",
            desc: "Create a todo app with some awesome friends at code4you on the internet",
            checked: false
        },
        {
            id:3,
            title: "Do the dishes",
            desc: "Create a todo app with some awesome friends at code4you on the internet",
            checked: false
        }
    ])

    const handleCheckbox = (id) => {
        const newTodos = todos.map(todo => todo.id !== id ? {...todo} :  {...todo, checked: !todo.checked})
        setTodos(newTodos)
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo=> todo.id !== id)
        setTodos(newTodos)
    }

    const addNewData = (e) => {
        e.preventDefault()
        const data = {
            id: todos.length ? todos[todos.length-1].id + 1 : 0,
            title,
            desc,
            checked: false
        }
        setTodos([...todos, data])
        setTitle('')
        setDesc('')

    }
    return (
        <TodoContext.Provider value={{todos, handleCheckbox, handleDelete, title, desc, setDesc, setTitle, addNewData}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
