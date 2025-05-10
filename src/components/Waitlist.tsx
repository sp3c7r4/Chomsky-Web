import React from 'react'

function Waitlist() {
  return (
      <div className='flex flex-1 h-screen'>
        <div className='grid grid-cols-2 flex-1'>
          <div className='h-full w-full border border-amber-300 flex items-center'>
            <p>Hello</p>
          </div>
          <div className='h-full w-full border border-green-300'>
            <p>Hello</p>
          </div>
        </div>
      </div>
  )
}

export default Waitlist