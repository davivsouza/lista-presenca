import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import "./styles/global.css"

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <About /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
