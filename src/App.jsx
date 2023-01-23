import PostList from './PostList'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './Nav'
import Cursor from './Cursor'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'

function App() { 
  
  return (
      <Router>
          <Cursor />
          <Nav />
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </Router>
  )
}

export default App