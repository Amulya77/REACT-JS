'use client'
import React , { useState }  from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Link from 'next/link';

const Page = () => {
  // Define state variable 'a' and its setter function 'setA' using useState hook
  const [a, setA] = useState(10);

  const [user,setUser]=useState("AMULYA")

  // Define function to handle button click event
  const changeMarks = () => {
    // Update state variable 'a' using its setter function 'setA'
    setA(3);
  };

  return (
    <>
      <Header user={user}/>
      {user}
      <div className="container mt-2 h-100 px-3 py-3">
        <h1 className='font-bold text-6xl'>Marks {a}</h1>
        {/* Pass the function reference to onClick event, not the result of the function */}
        <button onClick={changeMarks} className='bg-blue-500 text-white px-4 py-2 rounded'>
          Click me
        </button>
        Likhte jaao likhte jaao ho 
        <br/>

        {/* <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Blog">Blog</a>
        <a href="/Account">Account</a> */}

        {/* by using above a tags page realoding takes place , so to avoid that we use Link from next/link which helps in routing. */}

        {/* <div className='bg-red-300 flex justify-around my-8'>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Account">Account</Link>
        </div> */}

        {/* take above all in the Header.js file and pass the props to it. */}
      

      </div>
      <Footer />
      
    </>
  );
};

export default Page;
