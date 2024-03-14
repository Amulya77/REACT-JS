'use client'
import React , { useState }  from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

const Page = () => {
  // Define state variable 'a' and its setter function 'setA' using useState hook
  const [a, setA] = useState(10);

  // Define function to handle button click event
  const changeMarks = () => {
    // Update state variable 'a' using its setter function 'setA'
    setA(3);
  };

  return (
    <>
      <Header />
      <div className="container mt-2 h-100 px-3 py-3">
      <h1 className='font-bold text-6xl'>Marks {a}</h1>
      {/* Pass the function reference to onClick event, not the result of the function */}
      <button onClick={changeMarks} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Click me
      </button>
      Likhte jaao likhte jaao
      </div>
      <Footer />
      
    </>
  );
};

export default Page;
