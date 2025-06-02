import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter] = useState(15);
  // let counter = 5
  const addValue = ()=>{
    // counter = counter+1;
    if(counter<20){ // if i do not want to exceed 20
      counter = counter+1;
      setCounter(counter) // or directly i can write counter+1
    }
  }

  const removeValue = () =>{
    if(counter>=1) setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick = {removeValue}>Remove value {counter}</button>
      <p>footer {counter} </p>
    </>
  )
}

export default App
// we have not imported react here in this file,
// so, here bable is doing all work of converting this JSX into JS  and all...............

// 🔍 What is useState in React?
// useState is a React Hook that lets you add state to functional components.
// Before hooks, state was only available in class components. But now, with 
// hooks like useState, you can manage state directly in function components.


// what are hooks??

// React Hooks are functions that enable functional components to access React state 
// and lifecycle features, previously exclusive to class components. Introduced in React 
// 16.8, they offer a more concise way to manage state and side effects.