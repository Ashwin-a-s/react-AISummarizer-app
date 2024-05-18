import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div className='flex justify-between p-6 items-center bg-gray-50 m-4 rounded-sm gap-2'>
            <h1 className='font-bold text-4xl'>Sumz</h1>
            <div className='flex gap-4'>
              <Link className='button px-4 py-2 text-sm text-white rounded-xl bg-black hover:bg-gray-700' to="/history">History</Link>
            </div>
        </div> 
    </>
  )
}

export default Navbar