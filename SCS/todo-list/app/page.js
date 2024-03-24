"use client"
import React, { useState } from 'react'

const page = () => {
  const[todos, setTodos] = useState("")
  const[description, setDescription] = useState("")

  const[Maintask  , setMaintask] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(todos)
    console.log(description)
    setTodos("")
    setDescription("")
   
 }
 let renderTask=<h2>No Task</h2>

  return (
    <>
    <h1 className='bg-black p-5 text-5xl text-white text-center'>Todo List</h1>


    <form className='flex justify-center items-center' onSubmit={SubmitHandler}>
      <input type='text' className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
      placeholder='Add ToDo...'
      value={todos}
      onChange={(e) => setTodos(e.target.value)}
      
      />
      <input type='text' className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
      placeholder='Enter Description here...'
      value={description}
      onChange={(e) => setDescription(e.target.value)}/>
      <button className="p-2 bg-black text-white rounded">Add</button>
    </form>

    <hr/>

    <div className='flex justify-center items-center bg-slate-200 p-6'>  
      <ul>
        {renderTask}
      </ul>
    
    </div>




    </>
  )
}

export default page
