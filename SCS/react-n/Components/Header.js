import React from 'react'

const Header = () => {
  return (
    <div className='h-16 bg-green-500 flex items-center justify-between px-5'>
        <h1>heading</h1>
        <div className='flex gap-8 px-5'>
            
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Blog</h3>
            <h3>Account</h3>
        </div>
    </div>
  )
}

export default Header
