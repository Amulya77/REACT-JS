"use client"
import React, { useState } from 'react'

const page = () => {
  const[todos, setTodos] = useState("")
  return (
    <>
    <h1 className='bg-black p-5 text-5xl text-white text-center'>Todo List</h1>


    <form className='flex justify-center items-center'>
      <input type='text' className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
      placeholder='Add ToDo...'/>
      <input type='text' className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
      placeholder='Enter Description here...'/>
      <button className="p-2 bg-black text-white rounded">Add</button>
    </form>
    </>
  )
}

export default page
