import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootHTML = document.querySelector('#root')
const root = ReactDOM.createRoot(rootHTML)

root.render(
  <App />
)