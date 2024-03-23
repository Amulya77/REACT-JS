import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  console.log(props)
  return (
    <div className='h-16 bg-green-500 flex items-center justify-between px-5'>
        <h1>heading</h1>
        <h2>{props.user}</h2>
        <div className='flex gap-8 px-5'>
{/*             
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Blog</h3>
            <h3>Account</h3> */}
          
            {/* <div className='bg-red-300 flex justify-around my-8'> */}
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Account">Account</Link>
            {/* </div> */}




        </div>
    </div>
  )
}

export default Header
