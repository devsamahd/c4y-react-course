import TodosList from "./components/TodosList"
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import Nav from "./components/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddTodo from "./addNewTodo"
import FirstPage from "./firstPage"

function App() { 
useEffect(()=>{
  import('bootstrap')
},[])
  
  return (
    <>
    
      <Nav />
      <main className="main container mt-5">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/addnew" element={<AddTodo />} />
        </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App