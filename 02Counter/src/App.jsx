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
   
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
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



/*interview k purpose se

const addvalue=()=>{
    // counter++;
   
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    console.log(counter);

    the above will not increase the value of counter by 5 because the setCounter is asynchronous, it does not immediately update the value of counter
    it does the work in batches and will treat them as a single same batch;
    its a use state batch update

    to update the value of counter by 5 we can use the below method


    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)

    note: the above method is not a batch update, it is a single update, so if you want to do multiple updates in one go, then use the above method
    also we can use anything instead of prevCounter, it is just a name, we can use anything like counter, value, etc.
    
  }




*/