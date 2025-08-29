import React from 'react'

const Footer = () => {
  return (
    <div className='font-bold bg-gradient-to-b from-teal-600 to-teal-800 text-white p-4 text-center'>
        &copy; {new Date().getFullYear()} Task Management App | All Rights Reserved
    </div>
  )
}

export default Footer
