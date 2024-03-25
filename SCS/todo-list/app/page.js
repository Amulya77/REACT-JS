"use client"
import React, { useState } from 'react';  //useState: Yeh React library ka ek hook hai jo component ke state ko manage karta hai. 
//Is code mein useState ka istemal kiya gaya hai todos, description, aur Maintask jaise state variables ke liye.

// Define a functional component named 'page'
function page() {
  // Define state variables using the useState hook
  const [todos, setTodos] = useState(""); // State for todo input
  const [description, setDescription] = useState(""); // State for description input
  const [Maintask, setMaintask] = useState([]); // State for storing tasks

  // Maintask: Yeh ek state variable hai jo todo tasks aur unki descriptions ko store karta hai. 
  // Ismein har task ek object ke roop mein hai jismein task aur description dono key-value pairs hain.


  // Function to handle form submission
  const SubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Check if todo or description is empty, if so, return
    if (todos.trim() === "" || description.trim() === "") return;

    // Create a new task object
    const newTask = { task: todos, desc: description };
    // Update the Maintask state by adding the new task
    setMaintask([...Maintask, newTask]);
    // Clear todo and description inputs
    setTodos("");
    setDescription("");
  };

    
    
  // renderTask: Yeh ek variable hai jo tasks ko render karne ke liye istemal hota hai.
  //  Agar Maintask mein tasks hain to wo map function ke through list items mein convert kiye jate hain, aur agar koi task nahi hai to "No Task" message show hota hai.


  // Conditional rendering of tasks or "No Task" message
  let renderTask = Maintask.length > 0 ? (
    // If there are tasks, map through Maintask array and render each task

    // map: Yeh ek JavaScript function hai jo array ke har element par ek function call karta hai aur ek naya array banata hai. 
    // Is code mein Maintask array ke har task ke liye ek list item (li) generate karne ke liye map function ka istemal kiya gaya hai.

    Maintask.map((task, index) => (
      <li key={index} className="text-lg">
        {/* Display task and description */}
        <strong>{task.task}</strong>: {task.desc}
      </li>
    ))
  ) : (
    // If no tasks, display "No Task" message
    <h2>No Task</h2>
  );

  // JSX structure of the component
  return (
    <>
      {/* Todo List heading */}
      <h1 className='bg-black p-5 text-5xl text-white text-center'>Todo List</h1>
      {/* Form for adding new tasks */}
      <form className='flex justify-center items-center' onSubmit={SubmitHandler}>
        {/* Todo input field */}
        <input
          type='text'
          className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
          placeholder='Add ToDo...'
          value={todos}
          onChange={(e) => setTodos(e.target.value)} // Update todo state on change
        />
        {/* Description input field */}
        <input
          type='text'
          className='w-1/3 p-2 m-2 border-zinc-800 border-2 rounded'
          placeholder='Enter Description here...'
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state on change
        />
        {/* Submit button */}
        <button className="p-2 bg-black text-white rounded">Add</button>
      </form>
      <hr /> {/* Horizontal line */}
      {/* Container for displaying tasks */}
      <div className='flex justify-center items-center bg-slate-200 p-6'>
        <ul>
          {/* Render tasks */}
          {renderTask}
        </ul>
      </div>
    </>
  );
}

// Export the component as the default export
export default page;



// Yeh code ek "Todo List" banata hai jo React mein bana hai. Ismein hum todo tasks aur unki descriptions ko add kar sakte hain. Code mein `useState` hook ka istemal kiya gaya hai state variables ke liye jaise ki `todos`, `description`, aur `Maintask`.

// Ek form hai jismein hum todo task aur uski description daal sakte hain. Jab hum form ko submit karte hain, naye task ko ek object mein store kiya jata hai aur phir `Maintask` state ko update kiya jata hai.

// RenderTask variable mein, `Maintask` array ko map karke tasks ko display kiya jata hai. Agar koi task nahi hai to "No Task" message show hota hai.

// Overall, yeh code ek simple todo list banata hai jo users ko unke tasks ko manage karne mein madad karta hai.