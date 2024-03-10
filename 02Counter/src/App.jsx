import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [counter,setCounter] =useState(5)
  let [counter,setCounter] =useState(5)
  
  // let counter=5;

  const addvalue=()=>{
    // counter++;
   
    setCounter(counter+1)
    console.log(counter);
  }

  // const reducevalue=()=>{
  //   // counter--;
  //   if(counter>0){
  //   setCounter(counter-1)
  //   }
  //   console.log(counter);
  // }

  const reducevalue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  // The expression prevCounter => prevCounter - 1 is an arrow function 
  // that takes the previous state (prevCounter) as input and 
  // returns the new state value (which is prevCounter - 1).
  


  return (
    <>
        <h1>Hello World!</h1>

        <h2>Counter value:{counter}</h2>

        <button
        onClick={addvalue}>
          Increase {counter}</button>
        <br />
        <button
        onClick={reducevalue}>Decrease {counter}</button>
        <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
