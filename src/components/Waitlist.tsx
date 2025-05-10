import React from 'react'

function Waitlist() {
  return (
      <div className='flex flex-1 h-screen'>
        <div className='grid grid-cols-2 flex-1'>
          <div className='h-full w-full border border-amber-300 flex justify-center flex-col'>
            <div className='py-2 bg-[rgba(50,181,130,0.2)] px-4 rounded-full inline-block w-fit'>
              <p className='text-[13px] font-medium'>Be the first to experience Chomsky 😊</p>
            </div>
            <div>
              Our app is almost<br/>here.Join <span className='t'>the waitlist</span><br/>to get early access
            </div>
          </div>
          <div className='h-full w-full border border-green-300'>
            <p>Hello</p>
          </div>
        </div>
      </div>
  )
}

export default Waitlist