import React from 'react'
import ReactDOM from 'react-dom/client'

var a = 10
console.log(a)
const heading = (<div><h1>Hello World</h1><h1><p>{400+600}</p></h1></div>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

// Functional Component
const Heading1 = () =>{
    return (<div><h1>Hello World from functional component</h1><h1><p>{400+600}</p></h1></div>)
}

root.render(<Heading1/>)