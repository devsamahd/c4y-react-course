import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PostsProvider from '../context/postsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)