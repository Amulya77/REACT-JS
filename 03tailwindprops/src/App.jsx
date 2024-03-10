import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"amulya",
    age:22
  }

  // let newArr=[1,2,3,4]; it can also be passed

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>Hello World!</h1>
      <Card username="HelloOne" btnText="Touch me!"  someObj={myobj}/>
      <Card username="Amulya" btnText="Click me!" />
      <Card username="Amulya" />


    </>
  )
}

export default App
