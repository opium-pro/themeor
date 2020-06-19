import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch} from 'react-router-dom'
import App from './docs/App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
