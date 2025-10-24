import React from 'react'

const Nav = () => {
  return (
    <div className='bg-blue-900 text-white'>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
        <h1 className='text-3xl font-bold'>Logo</h1>
        <ul className='flex space-x-8'>
          <li className='hover:text-gray-300 cursor-pointer'>Home</li>
          <li className='hover:text-gray-300 cursor-pointer'>About</li>
          <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
