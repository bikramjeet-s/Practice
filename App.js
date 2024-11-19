import React from 'react'
import ReactDOM from 'react-dom'

var a = 10
console.log(a)
const heading = React.createElement("div",{},[React.createElement('h1',{},"first div"), React.createElement("h1",{},"second div")])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)